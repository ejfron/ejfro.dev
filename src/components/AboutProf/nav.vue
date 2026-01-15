<script>
import { User, List, Eye, Send, Moon, Menu, Download, Sun } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "NavCom",
  components: {
    User, List, Eye, Send, Moon, Menu, Download, Sun
  },
  setup() {
    const isDark = ref(false)
    const isSmallScreen = ref(window.innerWidth <= 780) // Fixed: changed to 780
    const isBottomNavOpen = ref(false)
    const activeNav = ref('about')
    const router = useRouter()
    const route = useRoute()

    const toggleBottomNav = () => {
      isBottomNavOpen.value = !isBottomNavOpen.value
    }

    const handleNavClick = (navItem = null) => {
      if (navItem) {
        activeNav.value = navItem
      }
      
      if (isSmallScreen.value) {
        isBottomNavOpen.value = false
        setTimeout(() => {
          scrollToSection()
        }, 100)
      }
    }

    // Fixed: route mapping
    const setActiveNavFromRoute = () => {
      const routeMap = {
        '/': '/about', // Fixed: from '' to 'about'
        '/resume': '/resume', 
        '/works': '/works',
        '/contact': '/contact'
      }
      activeNav.value = routeMap[route.path] || 'about'
    }

    const scrollToSection = () => {
      const currentPath = router.currentRoute.value.path
      
      const scrollTargets = {
        '/': '#home', 
        '/resume': '#resume', 
        '/works': '#works', 
        '/contact': '#contact' 
      }

      const targetSelector = scrollTargets[currentPath]
      
      if (targetSelector) {
        setTimeout(() => {
          const element = document.querySelector(targetSelector)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start' 
            })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 150)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    const updateTheme = () => {
      if (isDark.value) {
        document.documentElement.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
      }
    }

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      updateTheme()
    }

    const updateSize = () => {
      isSmallScreen.value = window.innerWidth <= 780
      if (!isSmallScreen.value) {
        isBottomNavOpen.value = false
      }
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDark.value = true
        updateTheme()
      }

      window.addEventListener('resize', updateSize)
      document.addEventListener('click', handleClickOutside)
      
      setActiveNavFromRoute()

      watch(() => route.path, () => {
        setActiveNavFromRoute()
      })

      router.afterEach((to) => {
        if (isSmallScreen.value) {
          setTimeout(() => {
            if (to.hash) {
              const element = document.querySelector(to.hash)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            } else {
              const scrollTargets = {
                '/': '#home',
                '/resume': '#resume',
                '/works': '#works',
                '/contact': '#contact'
              }
              
              const targetSelector = scrollTargets[to.path]
              if (targetSelector) {
                const element = document.querySelector(targetSelector)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }
            }
          }, 200)
        }
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateSize)
      document.removeEventListener('click', handleClickOutside)
    })

    const handleClickOutside = (event) => {
      const nav = document.querySelector('.bottom-navi')
      const menuButton = document.querySelector('.humber')
      
      if (nav && 
          menuButton && 
          !nav.contains(event.target) && 
          !menuButton.contains(event.target) &&
          isBottomNavOpen.value) {
        isBottomNavOpen.value = false
      }
    }

    const handleLogoClick = () => {
      if (isSmallScreen.value) {
        isBottomNavOpen.value = false
        
        router.push('/profCard')
        
        setTimeout(() => {
          const element = document.querySelector('#profCard')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 200)
      }
    }

    return {
      isDark,
      toggleDarkMode,
      isSmallScreen,
      isBottomNavOpen,
      toggleBottomNav,
      handleNavClick,
      handleLogoClick,
      activeNav 
    }
  }
}
</script>

<template>
  <div class="navigation">
    <div class="map-Navi">
      <div class="top-navi">
        <div class="topleft_navi" v-if="isSmallScreen">
          <a href="javascript:void(0)" class="logo" @click="handleLogoClick">
            EjFron
          </a>
        </div>

        <div class="topRight_navi">
          <div class="humber" @click="toggleBottomNav">
            <Menu :color="isDark ? 'white' : 'black'" :size="20" />
          </div>
        
          <div class="DarkmodeToglle" @click="toggleDarkMode">
            <Sun v-if="isDark" color="white" :size="20" />
            <Moon v-else color="black" :size="20" />
          </div>
        </div>
      </div>

     <div id="bottom-navi" class="bottom-navi" :class="{ active: isBottomNavOpen }">
    <router-link 
      to="/" 
      @click="handleNavClick('about')"
      class="nav-link"
      :class="{ 'ActiveNav': activeNav === 'about' }"
    >
      <div class="user">
        <User :color="isDark ? 'white' : 'black'" :size="isSmallScreen ? 18 : 20" />
        <div class="BottomIconName">About</div>
      </div>
    </router-link>

    <router-link 
      to="/resume" 
      @click="handleNavClick('resume')"
      class="nav-link"
      :class="{ 'ActiveNav': activeNav === 'resume' }"
    >
      <div class="list">
        <List :color="isDark ? 'white' : 'black'" :size="isSmallScreen ? 18 : 20"/>
        <div class="BottomIconName">Resume</div>
      </div>
    </router-link>

    <router-link 
      to="/works" 
      @click="handleNavClick('works')"
      class="nav-link"
      :class="{ 'ActiveNav': activeNav === 'works' }"
    >
      <div class="eye">
        <Eye :color="isDark ? 'white' : 'black'" :size="isSmallScreen ? 18 : 20" />
        <div class="BottomIconName">Projects</div>
      </div>
    </router-link>

    <router-link 
      to="/contact" 
      @click="handleNavClick('contact')"
      class="nav-link"
      :class="{ 'ActiveNav': activeNav === 'contact' }"
    >
      <div class="airplane">
        <Send :color="isDark ? 'white' : 'black'" :size="isSmallScreen ? 18 : 20" :strokeWidth="isSmallScreen ? 2 : 1" />
        <div class="BottomIconName">Contact</div>
      </div>
    </router-link>
  </div>


    </div>
  </div>
</template>


<style scoped>



/* Ensure your existing styles use the CSS variables you defined in App.vue */
.top-navi, .bottom-navi {
background-color: var(--bg-color);/* Changed from #fff */
}

.bottom-navi.active {
  top: 0;
  opacity: 1;
   display: flex;
}
.logo{

    text-decoration: none;
      font-size: 1.2rem;
  color: var(--text-color);
    font-weight: 800;



}

.bottom-navi a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
} 

.ActiveNav{
  background-color: #51fc9068;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

  
.BottomIconName {
  color: var(--text-color); /* Changed from #000 */
}

.user, .list, .eye {
  border-bottom: 1px solid var(--border-color); /* Changed from #0000004b */
  padding: 0.5rem 0rem;
}

.topRight_navi{
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

/* ... keep the rest of your existing CSS exactly as it is ... */
.navigation { 
    height: 100%; 
  margin-right: 10px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  z-index: 2;
}

#no-underline { 
  text-decoration: none; 
  width: 100%; 
}

.map-Navi { border-radius: 10px; 
  width: 5rem; display: flex; 
  flex-direction: column; 

  padding: 3rem 0rem; 
}

.top-navi { 
  border-radius: 5px; 
  padding: 2rem 1rem; 
  width: 100%; 
   display: flex; 
   align-items: center; 
   justify-content: center; 
   flex-direction: column; 
   gap: 1rem; 
  }

.user, .list, .eye { display: flex; align-items: center; flex-direction: column; cursor: pointer; justify-content: center; width: 100%; }
.humber, .DarkmodeToglle { display: flex; align-items: center; flex-direction: column; cursor: pointer; justify-content: center; width: 100%; }
.airplane { display: flex; align-items: center; flex-direction: column; cursor: pointer; justify-content: center; width: 100%;
padding: 0.5rem 0rem; }
.BottomIconName { font-size: 12px; text-transform: uppercase; }
.bottom-navi { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  gap: 1.5rem; 

  margin-top: 0.5rem; 
  border-radius: 5px; 
}

.bottom-navi.hidden {
  top: -10rem;
  opacity: 0;
}


  @media screen  and (max-width:1380px){

  .ActiveNav{
  width: 5rem;

}

  

    .navigation {
      margin-left: 5rem;
    }


    .map-Navi{
      height: 100%;
        position: fixed;
          top: 0;
    }

    .logo{
      display: none;
    }

  }


    @media screen  and (max-width:1340px){
         .map-Navi{
      height: 100%;
        position: fixed;
       margin-left: -10rem;
    }
    }
  @media screen  and (max-width:780px){
        .logo{
      display: flex;
    }

    .ActiveNav{

  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}



   .bottom-navi{
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    border-radius: 0px;
    height: 4rem;
     margin-top: 0rem;
     border-top: 2px solid #fff;
     z-index: 5;
     top: 0;
     position: relative;
     opacity: 0;
   }

   .top-navi { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px;

  width: 100%; 
  height: 5rem;
   flex-direction: row; 
   padding: 1rem 2rem;
   z-index: 5;

  }
  .map-Navi {
  width: 100%; 
  height: 0;
  padding: 0rem 0rem; 
  top: 0;
  left: 0;
  position: fixed;
  margin-left: 0rem;
}

.topRight_navi{
  gap: 1rem;
  flex-direction: row;
   transform: scaleX(-1);
   
}
  }

  @media screen and (max-width: 780px) {
  .BottomIconName {
    font-size: 11px;
  }

  .user, .list, .eye {
  border-bottom: none; ;
  gap: 0.5rem;
}
}




</style>

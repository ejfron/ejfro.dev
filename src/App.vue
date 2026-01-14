
<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Profile from '@/components/AboutProf/Prof.vue'
import NavCom from '@/components/AboutProf/nav.vue'
import Resize from '@/components/MainContentResize.vue'
import LoadingPage from '@/components/AboutProf/loading.vue'
// import ModalControler from '@/components/AboutProf/modalController.vue'

const isSmallScreen = ref(window.innerWidth <= 1380) 
const routerContainer = ref(null)
const mobileRouterContainer = ref(null)
const router = useRouter()

const updateSize = () => {
  isSmallScreen.value = window.innerWidth <= 1380
}


const scrollIfDesktop = () => {

  if (!isSmallScreen.value) {

    if (routerContainer.value) {
      routerContainer.value.scrollTop = 0
    }
    

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
 
}


watch(
  () => router.currentRoute.value.path,
  () => {
   
    nextTick(() => {
      scrollIfDesktop()
    })
  }
)

onMounted(() => {
  window.addEventListener('resize', updateSize)
  

  setTimeout(() => {
    loading.value = false

    nextTick(scrollIfDesktop)
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSize)
})
</script>

<template>
  <div id="app">
    <!-- <ModalControler /> -->
    <LoadingPage />

    <!-- Desktop layout -->
    <div class="Desktop" v-if="!isSmallScreen && !loading">
      <div class="groupPage">
        <NavCom />
        <Profile />
      </div>
      <router-view v-slot="{ Component }">
        <div class="Router" ref="routerContainer">
          <component :is="Component" />
        </div>
      </router-view>
    </div>

    <!-- Mobile layout -->
    <div v-else class="ResizeGroup">
      <div class="groupPage">
        <NavCom />
        <Profile />
      </div>
      <div class="routerGroup" ref="mobileRouterContainer">
        <Resize class="Content" />
      </div>
    </div>
  </div>
</template>




<style>



  *{
    font-family: "Poppins", sans-serif;
  }

  .groupPage{
    display: flex;
     flex-direction: row;
  }

  .ResizeGroup{
    display: flex;
    flex-direction: column;
  }

  .Router{
       background-color: var(--bg-color);
       /* From https://css.glass */

box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(0px);
border: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    max-width: 650px;
    max-height: 520px;
    overflow-x: hidden;
    overflow-y: auto; 
    color: black;
    position: relative;
    
  }



  @media screen  and (max-width:1380px){

      #home,
  #resume,
  #works,
  #contact,
  #profCard{
    scroll-margin-top: 5rem; /* Adjust for mobile if needed */
  }
    /* .Router{
      width: 100%;
    } */


    .groupPage{
      margin-bottom: 1rem;
      margin-left: -5.6rem;
    }
    .ResizeGroup{
      flex-direction: column;
    }


  }

    @media screen  and (max-width:1340px){
         .groupPage{
      margin-left: 0rem;
    }
    }

   @media screen and (max-width:780px){
    
        .routerGroup{
    width: 100%;
    margin-left: -1rem;
   }
  }

   @media screen  and (max-width:680px){
    .groupPage{
     flex-direction: column;
    }


  }

    @media screen  and (max-width:610px){
      .Content{
        width: 100%;
      }

        .routerGroup{
    width: 100%;
    margin-left: -3rem;
  }

  
  }



  

  



/* 1. Define Variables */

:root {
  --bg-color: #f0f0f0;      /* Light Grey background */
  --bg-color-body: linear-gradient(to bottom right,#50a3a2 0%,#78cc6d 100%);;      /* Light Grey background */
  --card-bg: #ffffffda;       /* White nav blocks */
  --text-color: #000000;
  --text-color-pa: #121312;
  --text-color-par: #34495e;
  --text-color-head: #111111cd;
  --text-color-head1: #111111ed;
  --icon-color1: #000000e8;
  --icon-color2: #000000e8;
  --border-color: #0000005a;
  --hover-prof: #0000005a;
  --line-span: #0000004c;
  --bubbles: rgba(255, 255, 255, 0.374);
}

/* 2. Define Dark Mode Overrides */
.dark-mode {
  --bg-color: #272626;  
   --bg-color-body: linear-gradient(to bottom right,#111 0%,#111 100%);      /* Dark background */
  --card-bg: #40404725;       /* Darker nav blocks */
  --text-color: #ffffff;
  --text-color-pa: #ffffffc6;
  --text-color-par: #ffffffad;
  --text-color-head: #ffff;
  --text-color-head1: #eeeeeeed;
  --icon-color1: #ffffff;
  --icon-color2: #10c010;
   --border-color: #f4f4f4e8;
    --line-span: #10c010;
      --bubbles: #51fc9025;
}




.Desktop{
  display: flex ;
  align-items: center;
  justify-content: center;
}


body{
background: var(--bg-color-body);
}


.main-content {
    z-index: -1;
    transition: z-index 0.01s linear 0.5s;
    position: relative;
}

.resume-z-index-change {
    z-index: 0;
}


.v-enter-active,
.v-leave-active {
    transform: translateX(100px);
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(-100px);
  opacity: 0;
}


/* 1. Transition durations */


</style>
<script>

   import { Send, Download } from 'lucide-vue-next';
import  NavCom from '@/components/AboutProf/nav.vue';



export default {
    name: "Profile",
    components: {
        Send,  
        Download
  },
     methods: {
    goToContact() {
      this.$router.push({ name: 'ProfileContact' })
    }
    
  }

 
  
}
</script>


<template>


    
    <div class="prof-card" id="profCard">
        <div class="prof-cardValue">
                <div class="head-cardValue">
                    <div class="card-image">
                        <img src="./image/50c28f86-788c-4767-8111-395d8ad71361.jpg" alt="Edgar Jugado" class="imagePort">
                    </div>
                </div>
                <div class="section-cardValue">
                    <div class="sec-cardName">Edgar Jugado</div>
                    <div class="sec-cardPosition">Software Developer</div>
                    <div class="sec-cardContact">
                        <a href="https://github.com/ejfron" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="iconprof" color="var(--icon-color1)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
                        <a href="https://mail.google.com/mail/u/0/?hl=en#inbox" target="_blank"><Send color="var(--icon-color1)" id="iconprof"
                            :size="20" /></a>
                        <a href="https://www.facebook.com/ej.fron16" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="iconprof" color="var(--icon-color1)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                        <a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="iconprof" color="var(--icon-color1)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                        
                        
                        
                       
                       
                    </div>
                </div>
                <div class="line"></div>
                <div class="footer-cardValue">
                    <div class="foot-cv">
                        
                        <a class="title-cv" 
                        href="Jugado_Ejfron_Resume.pdf" 
                        download="Jugado_Ejfron_Resume.pdf" 
                        title="Jugado_Ejfron_Resume"
        target="_blank"
                        
                        >Download Cv</a>
                        <div class="icon" id="contactIcon">
                            <Download   color="white"
                            :size="20" />
                        </div>
                    </div>
                    <div class="foot-Contact">
                        <div class="title-contact"    @click="goToContact" >Contact Me</div>
                        <div class="icon">
                            <Send color="white"
                            :size="20" />
                        </div>
                    </div>
                </div>
        </div>
    </div>

   
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');










*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.prof-card{
    display: flex;
    align-items: center;
    justify-content: center;
   z-index: 1;
   height: 580px;
   width: 560px;

}





.line{
    background-color: #0d800d9c;
    width: 100%;
    height: 2px;
}

.prof-cardValue{
     display: flex;
    flex-direction: column;
    gap: 1rem;
      background-color: var(--bg-color);
   width: 100%;
   position: relative;
   height: 100%;
 background-size: cover;
 border-right: 5px solid #10c310c8;
}

.prof-cardValue::before{
    content: '';
background: #10c3102a;
border-radius: 10px;
    width: 100%;
    max-width: 500px;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: -15px;
    top: -15px;
}

.head-cardValue{
      width: 100%;
    height: 25rem;
    clip-path: polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%);
    background-color: aliceblue;
    overflow: hidden; /* Important for clipped images */
     border-right: 5px solid #10c310c8;
}

.card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    
}

.imagePort {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
}

.section-cardValue, .footer-cardValue{
    padding: 1rem 2rem;
    width: 100%;
}

.section-cardValue{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -3rem;
    padding: 2rem 0rem;
    gap: 0.2rem;
}

.sec-cardName{
    color: var(--text-color-pa);
    font-size: 1.5rem;
    font-weight: 600;

}

.sec-cardPosition{
    margin-top: -0.2rem;
    color: var(--text-color-par);
    font-size: 0.80rem;
    padding-bottom: 0.3rem;
}

.sec-cardContact{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

/* .title-cv .title-contact{
    font-weight: 800px;
    font-size: 0.5rem;
} */

.footer-cardValue{
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
}


.title-contact{
    text-transform: uppercase;
    font-weight: 600;
        color: #fff;
              font-size: clamp(0.625rem, 0.575rem + 0.2vw, 0.8125rem);

}
.title-cv{
      text-transform: uppercase;
    font-weight: 600;
    color: #fff;
          font-size: clamp(0.625rem, 0.575rem + 0.2vw, 0.8125rem);
          width: 100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
}
.foot-Contact{
    border: 1px solid #10c010ef;
    width: 13rem;
    cursor: pointer;
    background-color: #10c010ef;
   
}

.foot-cv{
    border: 1px solid #10c010ef;
    width: 13rem;
    cursor: pointer;
    background-color: #10c010ef;
}
.foot-Contact, .foot-cv{
    padding: 0.7rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 5px;
    width: 100%;
  
}

.foot-Contact:hover {
    background-color: #0d800d;
    transform: translateY(-2px);
}

.foot-cv:hover {
    background-color: #0d800d;
    transform: translateY(-2px);
}

.icon{
     display: flex;
    align-items: center;
    justify-content: center;
}

#iconprof{
    cursor: pointer;
}

#contactIcon{
    left: -2.5rem;
    position: relative;


}

@media screen  and (max-width:1380px){
   .prof-card{
   width: 800px;
   margin-left: 3rem;
   margin-top: 3rem;
   }

  .prof-cardValue{

 border-radius: 0px; 
}

.head-cardValue{
    border-radius: 0px;

}


}



  @media screen  and (max-width:1000px){
     .prof-card{
   width: 700px;
   }
  }



 @media screen  and (max-width:900px){
    .prof-card{
      width: 600px;
    }
  }

    @media screen  and (max-width:780px){

   .prof-card{
   margin-left: 2rem;   
      margin-top: 4.5rem;
   }

.foot-Contact{
    width: 50%;
   
}

.foot-cv{
    width:50%;
}

    }

     @media screen  and (max-width:610px){
        .prof-card{
            width: 100%;
               margin-left: 0rem;
            }
            #contactIcon{
    left: 0rem;



}



.prof-cardValue::before{
      display: none;
}


.prof-cardValue{
 border-right:none;
}

.head-cardValue{
     border-right:none;
}



    }


  @media screen  and (max-width:360px){
.foot-Contact{
    width: 100%;
    padding: 0.5rem 0.5rem;
   
}

.foot-cv{
    width:100%;
    padding: 0.5rem 0.5rem;

}
  }


</style>
<script>

    import  Works from '@/components/ProjectCom.vue';
    import  ProfileContact from '@/components/ContactCom.vue';
    import  Resume from '@/components/ResumeCom.vue';
    import  HomeAbout from '@/components/HomeCom.vue';

export default {
    name: 'Resize',


    components: {
        Works,
        ProfileContact,
        Resume,
        HomeAbout

    }

}
</script>

<template>
    <div class="mainResize">
        <HomeAbout/>
        <Resume />
        <Works />
        <ProfileContact />
      
       
    </div>
</template>

<style>

    .mainResize{
      
       background-color: var(--bg-color);
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    }
        /* @media screen  and (max-width:1340px){
    
        } */

    
    @media screen  and (max-width:1000px){
    .mainResize{
      max-width: 700px;
    }
  }

  
    @media screen  and (max-width:900px){
    .mainResize{
      max-width: 600px;
    }


  }

    @media screen  and (max-width:610px){
    .mainResize{
      max-width: 500px;

    }


  }

</style>
<script>
    import { Code, MonitorCloud, ChevronsLeftRightEllipsis, TabletSmartphone } from 'lucide-vue-next';
    

export default {
    name: "HomeAbout",
    components: {
        Code,
        MonitorCloud,
        ChevronsLeftRightEllipsis,
        TabletSmartphone
    },
     methods: {
    goToContact() {
      this.$router.push({ name: 'ProfileContact' })
    }
  }
}


</script>


<template>
<div class="home" id="home">
    <div class="map-home">
        <div class="heading-home">
            <div class="name-home"> <span>A</span>bout <span>M</span>e</div>
            <div class="linespam"></div>
        </div>
        
        <div class="section-home">
            <!-- Hero Section -->
            <div class="hero-section">
                <div class="title-section">
                    <h2 class="title-head">Web Developer</h2>
                    <p class="location">Philippines, Rizal</p>
                </div>
                
                <div class="description-section">
                    <p class="description">
                        I have rich experience in software development and web designing, 
                        also I am good at WordPress. I love to talk with you about our 
                        unique ideas and fulfill your desired projects.
                    </p>
                </div>
            </div>

            <!-- Services Section -->
            <div class="services-section">
                <div class="headServices">
                    <div class="nameheadServices">What I Can Provide</div>
                </div>
                
                <div class="services-grid">
                    <!-- Web Design Service -->
                    <div class="service-item">
                        <div class="service-icon">
                            <MonitorCloud color="#ffffff" :size="40" />
                        </div>
                        <div class="service-content">
                            <div class="service-head">Web Designing</div>
                            <div class="service-desc">
                                Creating beautiful, user-friendly interfaces that engage visitors 
                                and reflect your brand identity.
                            </div>
                        </div>
                    </div>

                    <!-- Front End Service -->
                    <div class="service-item">
                        <div class="service-icon">
                            <Code color="#ffffff" :size="40" />
                        </div>
                        <div class="service-content">
                            <div class="service-head">Front End Development</div>
                            <div class="service-desc">
                                Building responsive, high-performance websites using modern 
                                technologies like Vue.js and JavaScript.
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Responsiveness -->
                    <div class="service-item">
                        <div class="service-icon">
                            <TabletSmartphone color="#ffffff" :size="40" />
                        </div>
                        <div class="service-content">
                            <div class="service-head">Mobile Responsiveness</div>
                            <div class="service-desc">
                                Ensuring your website looks and works perfectly on all devices, 
                                from smartphones to desktops.
                            </div>
                        </div>
                    </div>

                    <!-- WordPress -->
                    <div class="service-item">
                        <div class="service-icon">
                            <ChevronsLeftRightEllipsis color="#ffffff" :size="40" />
                        </div>
                        <div class="service-content">
                            <div class="service-head">WordPress Development</div>
                            <div class="service-desc">
                                Custom WordPress themes, plugins, and full website development 
                                with CMS capabilities.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Button -->
                <div class="button-section">
                    <button 
                        @click="goToContact"
                        class="contact-btn"
                        title="Contact Edgar Jugado">
                        Let's Talk About Your Project
                    </button>
                </div>
        </div>
    </div>
</div>
</template>



<style scoped>

    .home{
        scroll-margin-top: 40rem;
    }



/* Custom Scrollbar */
.home::-webkit-scrollbar {
    width: 8px;
}

.home::-webkit-scrollbar-track {
    background: #e0e0e0; 
    border-radius: 5px;
}

.home::-webkit-scrollbar-thumb {
    background: #10c010; 
    border-radius: 5px;
}

.home::-webkit-scrollbar-thumb:hover {
    background: #0d800d; 
}

.map-home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
}

/* Header Styles */
.heading-home {
    width: 100%;
    margin-bottom: 0.5rem;
}

.name-home {
     color: var(--text-color-head);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.name-home span {
    color: #10c010;
    font-weight: 800;
}

.linespam {
        background-color: var(--line-span);
    width: 100%;
    height: 1.5px;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.section-home {
    width: 100%;
}

/* Hero Section */
.hero-section {
    margin-bottom: 2rem;
}

.title-section {
    margin-bottom: 1.5rem;
}

.title-head {
    font-size: 0.80rem;
    font-weight: 700;
      color: var(--text-color-head);
}

.location {
    font-size: 0.75rem;
      color: var(--text-color-par);
}


.description {
    font-size: 0.70rem;
     color: var(--text-color-par);
    text-align: justify;
}

.description-section{
    border-left: 3px solid green;
    padding-left: 1rem;
}

/* Services Section */
.services-section {
    margin-bottom: 2rem;
    
}

.headServices {
    display: flex;
    align-items: center;
    justify-content: start;

    gap: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #0000001a;
    padding-bottom: 0.5rem;
}

.nameheadServices {
        font-size: 0.80rem;
    font-weight: 700;
    color: var(--text-color-head);
}

.services-grid {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;


}

.service-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0.8rem;
    /* border-radius: 8px; */
    background-color: var(--card-bg);
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    transition: background-color 0.3s ease;
    width: 100%;
    max-width: 280px;
    position: relative;
    height: 210px;
    cursor: pointer;
    transition: 0.5s ease;

}




.service-item:nth-child(even) {
    transform:  rotate(2deg);

}

.service-item:nth-child(odd) {
    transform: rotate(-2deg);

}

.service-item:nth-child(even):hover {
    transform: translateY(5px) rotate(-2deg);

}

.service-item:nth-child(odd):hover {
    transform: translateY(-5px) rotate(2deg);

}
.service-icon {
    text-align: center;

    background-color: #10c010a4;;
    width: min(60px, 100%);
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.service-content {
    flex: 1;
}

.service-head {
    font-weight: 700;
    color: var(--text-color-head);
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
    text-align: center;
    padding: 0.5rem 0rem;
}

.service-desc {
    font-size: 0.70rem;
    line-height: 1.4;
        color: var(--text-color-par);
    text-align: justify;
}

/* Button Section */
.button-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
}

.contact-btn {
    background-color: #10c010a4;
    color: var(--text-color-par);
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    font-size: 0.80rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center;
    width: 100%;
    max-width: 300px;
}

.contact-btn:hover {
    background-color: #0d800d;
    transform: translateY(-2px);
}
@media (max-width: 1380px) {
    .service-item {
    max-width: 100%;
}

.services-grid {
    justify-content: center;
}


}


@media (max-width: 1340px){
    .service-item {
    max-width: 350px;
}
}

@media (max-width: 1000px){
    .service-item {
    max-width: 500px;
    
}


.services-grid {
    gap: 2rem;
}
}

/* Responsive Adjustments */

</style>
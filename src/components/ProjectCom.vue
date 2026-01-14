<script>
import { Eye, Globe } from 'lucide-vue-next';

export default {
  name: "Works",
  components: {
    Eye,
    Globe
  }
}


</script>

<template>
  <div class="ProjectMain" id="works">
    <div class="map_proj">
      <div class="head_project"><span>M</span>y <span>P</span>rojects</div>
      <div class="line"></div>
      
      <div class="wrapper_project">
        
        <div class="card_proj">
          <div class="image_section">

              <img src="@/assets/Screenshot 2026-01-01 121328.png" class="image_placeholder">

          </div>
          <div class="content_section">
            <div class="project_title">TicTacToe Explosion</div>
            <p class="project_description">
              An enhanced version of tic-tac-toe with multiplayer support for up to four players. Includes chain reaction mechanics where moves impact surrounding cells.
            </p>
            <div class="languageUse">
              <span class="tech_badge">Html5</span>
              <span class="tech_badge">Express Js</span>
              <span class="tech_badge">Tailwind</span>
            </div>
            <a href="#" class="website_btn">
              <Globe :size="16" />
              Website
            </a>
          </div>
        </div>

        <div class="card_proj">
            <div class="image_section">

              <img src="@/assets/Screenshot 2026-01-08 225053.png" class="image_placeholder">

          </div>
          <div class="content_section">
            <div class="project_title">CraftLearn App</div>
            <p class="project_description">
              A modern learning platform dedicated to handicraft education. Designed to help users explore, learn, and practice traditional and creative crafts.
            </p>
            <div class="languageUse">
              <span class="tech_badge">Vue.js</span>
              <span class="tech_badge">Shadcn</span>
              <span class="tech_badge">Tailwind</span>
            </div>
            <a href="#" class="website_btn">
              <Globe :size="16" />
              Website
            </a>
          </div>
        </div>

        <div class="card_proj">
            <div class="image_section">

              <img src="@/assets/Screenshot 2026-01-14 220425.png" class="image_placeholder">

          </div>
          <div class="content_section">
            <div class="project_title">Melbourne Hotel: Front End</div>
            <p class="project_description">
              Developed responsive, interactive front-end designs that seamlessly integrated 3D elements for a realistic user experience and visually engaging interfaces.
            </p>
            <div class="languageUse">
              <span class="tech_badge">JavaScript</span>
              <span class="tech_badge">Tailwind</span>
              <span class="tech_badge">Vue.js</span>
            </div>
            <a href="#" class="website_btn">
              <Globe :size="10" />
              Website
            </a>
          </div>
        </div>

         <div class="card_proj">
            <div class="image_section">

              <img src="@/assets/screencapture-readdy-link-preview-f7c84284-ea1e-4b30-abdd-acb1f00cfe0f-5510394-2026-01-14-22_54_00.png" class="image_placeholder">

          </div>
          <div class="content_section">
            <div class="project_title">Food App Scanner</div>
           <p class="project_description"> Mobile app that scans food labels, using DepEd traffic-light guidelines to instantly categorize sodium, sugar, and saturated fat content for nutritional assessment. </p>
            <div class="languageUse">
              <span class="tech_badge">Vue.js</span>
              <span class="tech_badge">Tailwind</span>
              <span class="tech_badge">Nuxt Js</span>
            
            </div>
            <a href="#" class="website_btn">
              <Globe :size="16" />
              Website
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .ProjectMain{
    padding: 1rem 1rem;
    
  }

/* Custom Scrollbar */
#ProjectMain::-webkit-scrollbar { width: 6px; }
#ProjectMain::-webkit-scrollbar-thumb { background: #10c010; border-radius: 10px; }

.head_project {
  font-size: 1rem;
  font-weight: 700;
   color: var(--text-color-head);
  margin-bottom: 0.5rem;
}
.head_project span { 
  color: #10c010;
   font-weight: 700;
 }

.line {
     background-color: var(--line-span);
  width: 100%;
  height: 1px;
  margin-bottom: 2rem;
}

.wrapper_project {
  display: flex;
  flex-wrap: wrap;
  
  gap: 1rem;
}

.card_proj {
    background-color: var(--card-bg);

  width: 280px;
  height: auto;
  overflow: hidden;
  box-shadow: 5px 4px 20px #33bc2e5a;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.card_proj:hover {
  transform: translateY(-5px);
}

.image_section {
  width: 100%;
  height: 150px;
    display: flex;
  align-items: center;
  justify-content: center;
    overflow: hidden;
}

.image_placeholder {
  height: 100%;
  width: 100%;


}
.blue_tint { background: #2d3436; }
.dark_tint { background: #636e72; }

.placeholder_text {
color: var(--text-color-par);
  font-weight: bold;
  opacity: 0.8;
}


.content_section {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project_title {
  font-size: 0.8rem;
  font-weight: 700;
color: var(--text-color-head);;
}

.project_description {
  font-size: 0.8rem;
color: var(--text-color-par);
  line-height: 1.5;
  margin: 0;
}

.languageUse {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech_badge {
  background: #10c010b4;
     color: var(--text-color-par);
  border-radius: 6px;
  font-size: 0.70rem;
  font-weight: 600;

  padding: 0.4rem 0.6rem;
}

.website_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #10c010b4;
  color: white;
  width: fit-content;
  padding: 8px 18px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.70rem;
  font-weight: 600;
  margin-top: 0.5rem;
  transition: opacity 0.2s;
}

.website_btn:hover {
  opacity: 0.8;
}

@media (max-width: 1380px){
  .wrapper_project {
  align-items: center;
  justify-content: center;
}

.card_proj {
  width: 350px;
  height: 25rem;


}
}

@media (max-width: 1000px){
.card_proj {
  width: 280px;
}

}

@media (max-width: 900px){
  .card_proj {
  width: 100%;
}
}

@media (max-width: 600px) {
  .wrapper_project { grid-template-columns: 1fr; }
}
</style>
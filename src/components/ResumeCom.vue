<script>

    import { CodeXml, FolderKanban, FlaskConical } from 'lucide-vue-next';

    export default{
        name: "Resume",
        components: {
            CodeXml,
            FolderKanban,
            FlaskConical
        }
    }

</script>

 <template>
    
<div class="resume" id="resume">
    <div class="map-resume">
        <div class="heading-resume">
            <div class="name-resume"> <span>R</span>esume</div>
            <div class="linespam"></div>
        </div>
        <div class="section-resume">
            
            <div class="experience-section">
                <div class="headEx">
                    <FlaskConical 
                    color="var(--icon-color2)"
                :size="25"/>
                    <div class="nameheadEx">Experience</div>
                </div>
                <div class="secEx">

                    <div class="wrapSecEx">
                        <div class="wrapExHead">Melbourne Hotel, Programmer, Front End Developer</div>
                        <div class="wrapExDate">November 2023 - December 2024</div>
                        <div class="wrapExDesc">
                            As a Programmer at Melbourne Hotel, I was responsible for designing and implementing visually engaging, user-friendly interfaces that aligned with the hotel's brand identity and high standards for customer experience. A key achievement during this role was developing an immersive 3D tour website, enabling potential guests to explore the hotel's facilities virtually. This project involved creating responsive, interactive front-end designs that seamlessly integrated 3D elements for a realistic user experience.
                        </div>
                    </div>
                </div>
            </div>

            <div class="tech-stack-section">
            <div class="headTechStack">
            <CodeXml 
            color="var(--icon-color2)"
                :size="25"
            />
                <div class="nameheadTechStack">Tech Stack / Skills</div>
                </div>
            <div class="skills-list">
    <span class="skill-tag">
        
            <i class="devicon-javascript-plain"></i>
          
        <div class="PG">JavaScript</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-vuejs-plain"></i>
          
      
        <div class="PG">VueJs</div>
    </span>
    <span class="skill-tag">
        
 
          
            <i class="devicon-html5-plain"></i>
          
        <div class="PG">HTML</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-git-plain"></i>
          
        <div class="PG">Git</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-mysql-original"></i>
          
        <div class="PG">MySQL</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-css3-plain"></i>
          
        <div class="PG">CSS</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-tailwindcss-original"></i>
          
        <div class="PG">TailwindCss</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-sass-original"></i>
          
        <div class="PG">Sass</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-express-original"></i>
          
        <div class="PG">Express Js</div>
    </span>
    <span class="skill-tag">
        
            <i class="devicon-nuxtjs-plain"></i>
          
        <div class="PG">Nuxt Js</div>
    </span>
      <span class="skill-tag">
        
           
            <i class="devicon-figma-plain"></i>
          
          
        <div class="PG">Figma</div>
    </span>
     <span class="skill-tag">
        
           
            
            <i class="devicon-wordpress-plain"></i>
          
          
          
        <div class="PG">WordPress</div>
    </span>
      <span class="skill-tag">
        
           
            
            
            <i class="devicon-bash-plain"></i>
          
          
          
          
        <div class="PG">Bash</div>
    </span>
 
</div>
        </div>

            <div class="projects-section">
                <div class="headProject">
                    <FolderKanban 
                    color="var(--icon-color2)"
                            :size="25" />
                    <div class="nameheadProject">Projects</div>
                    </div>
                <div class="secProject">

                    <div class="wrapSecProject">
                        <div class="wrapProjectHead">TicTacToe Explosion</div>
                        <div class="wrapProjectDesc">
                            Enhanced version of tic-tac-toe with multiplayer support for up to four players. Included chain reaction mechanics for a strategic twist, providing valuable experience in interactive game design and web development.
                        </div>
                    </div>

                    <div class="wrapSecProject">
                        <div class="wrapProjectHead">3D TourGuide Melbourne Hotel</div>
                        <div class="wrapProjectDesc">
                            Responsible for designing and implementing visually engaging, user-friendly interfaces, developing an immersive 3D tour website for virtual exploration. The front-end design seamlessly integrated 3D elements for a realistic user experience.
                        </div>
                    </div>

                    <div class="wrapSecProject">
                        <div class="wrapProjectHead">Project Global Inflation Rate</div>
                        <div class="wrapProjectDesc">
                            Developed a user-friendly website featuring dynamic effects to engage students in Real-World Relevant Learning (RRRL) on global inflation. Technologies used include HTML, Sass, and vanilla JavaScript.
                        </div>
                    </div>
                    
                    <div class="wrapSecProject">
                        <div class="wrapProjectHead">Janosa National High School Website</div>
                        <div class="wrapProjectDesc">
                            Developed a comprehensive and user-friendly website for the school, aimed at enhancing communication and accessibility for the school community. The website serves as an information hub.
                        </div>
                    </div>
                </div>
            </div>

            <div class="button">
                <a 
        href="Jugado_Ejfron_Resume.pdf" 
        download="Jugado_Ejfron_Resume.pdf" 
        class="download-btn"
        title="Jugado_Ejfron_Resume.pdf"
        target="_blank">
        Download Resume
    </a>
            </div>

            
        </div>
    </div>
</div>
</template>

<style scoped>



.button{
    display: flex;
    align-items: center;
    justify-content: end;
}

.download-btn {

    bottom: 15px; 
    right: 15px;
    
    /* Visual styling */
    background-color: #10c010; /* Green primary color */
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none; /* Remove underline from anchor tag */
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;
    
    /* Ensure button is visible above other content if necessary */
}

.download-btn:hover {
    background-color: #0d800d; 
    transform: translateY(-2px);
}
.resume{
    scroll-padding-top: 10rem;
}

/* CUSTOM SCROLLBAR STYLES (Chrome, Safari, Edge) */
.resume::-webkit-scrollbar {
    width: 8px;
}

.resume::-webkit-scrollbar-track {
    background: #e0e0e0; 
    border-radius: 5px;
}

.resume::-webkit-scrollbar-thumb {
    background: #10c010; 
    border-radius: 5px;
}
.resume::-webkit-scrollbar-thumb:hover {
    background: #0d800d; 
}



.map-resume{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
}

.name-resume{
   color: var(--text-color-head);
    font-size: 1rem;
    font-weight: 700; 
}

.name-resume span{ 
    color: green;
    font-weight: 700; 
}

.linespam{
      background-color: var(--line-span);
    width: 100%;
    height: 1.5px;
    border-radius: 10px;
    margin-bottom: 1rem; 
}



.heading-resume, .section-resume, .footer-resume{
    width: 100%;
}

/* EXPERIENCE & PROJECT STYLES (Reused styles for consistency) */
.experience-section, .projects-section {
    padding-bottom: 1rem;
}

.headEx, .headProject, .headTechStack {
   display: flex;
   align-items: center;
   justify-content: start;
   gap: 0.5rem;
   margin-bottom: 1.5rem;
}

.nameheadProject, .nameheadEx, .nameheadTechStack{
     font-size: 0.80rem;
    font-weight: 600;
       color: var(--text-color-head1);
}

.wrapExHead, .wrapProjectHead {
    font-weight: 700;
       color: var(--text-color-pa);
    margin-bottom: 0.2rem;
    font-size: 0.75rem;
}

.wrapExDate {
    font-size: 0.70em;
    color: #7f8c8d;
    margin-bottom: 0.5rem;
}

.wrapExDesc, .wrapProjectDesc {
    font-size: 0.70rem;
    line-height: 1.4;
    color: var(--text-color-par);
    margin-bottom: 1.5rem;
}

.wrapSecEx, .wrapSecProject {
    border-left: 3px solid green;
    padding-left: 1rem;
    margin-bottom: 1.5rem;
}

/* tech stack */

.tech-stack-section {
    width: 100%;
    margin-bottom: 1.5rem;
}

.headTechStack {
    font-size: 0.80rem;
    font-weight: 600;
    color: #121312;
    border-bottom: 1px solid #0000001a;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px; 
}

.skill-tag {
    background-color: #10c010b4; 
     color: var(--text-color-par);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.70rem;
    font-weight: 500;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
}
</style>
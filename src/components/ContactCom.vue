<script>
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import emailjs from "@emailjs/browser";
    import ModalSent from '@/components/AboutProf/modal.vue';
    import ModalSentError from '@/components/AboutProf/modalError.vue';

import { Send, MapPinHouse, Phone, Unlink, Mails } from "lucide-vue-next";

export default {
  name: "ProfileContact",

  components: {
    Send,
    MapPinHouse,
    Phone,
    Unlink,
    Mails,
    ModalSent,
    ModalSentError
  },

  data() {
    return {
      map: null,
      apiKey: "CKiUqUKIxqIG15ZNxwQj",

      emailTo: "",
      emailMessage: "",
      isSending: false, 
      showSentModal: false,
      emailError: false
    
    };
  },

  computed: {
  isEmailValid() {
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.emailTo);
  }
},


methods: {
  sendEmail() {

    this.emailError = false;

    if (!this.emailTo || !this.emailMessage) {
      this.emailError = true;
       setTimeout(() => {
          this.emailError = false;
        }, 2000);
      return; 
      

    }

    if (!this.isEmailValid) {
      this.emailError = true;

       setTimeout(() => {
          this.emailError = false;
        }, 2000);
      return; 
    }


    this.isSending = true;

    emailjs.send(
      "service_wvcaaho",
      "template_e2xj2sj",
      {
        email: this.emailTo,
        emailText: this.emailMessage
      },
      "LTTs4IWZyAbrXxwkO"
    ).then(
      () => {
        this.showSentModal = true;
        this.isSending = false;
        this.emailTo = "";
        this.emailMessage = "";

        setTimeout(() => {
          this.showSentModal = false;
        }, 2000);
      },
      (error) => {
        console.error(error);
        this.showSentModal = true;
        this.isSending = false;
      }
    );
  }
},


  mounted() {
    this.map = new maplibregl.Map({
      container: this.$refs.mapContainer,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${this.apiKey}`,
      center: [121.218761, 14.350629],
      zoom: 13
    });

    new maplibregl.Marker({ color: "green" })
      .setLngLat([ 121.218761, 14.350629])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setText("My Location")
      )
      .addTo(this.map);
  },

  unmounted() {
    if (this.map) {
      this.map.remove();
    }
  }
};
</script>

<template>
  <div class="contact" id="contact">
    <div class="contact_container">
      <div class="heading-contact">
            <div class="name-contact"> <span>G</span>et In Touch</div>
            <div class="linespam"></div>
        </div>

      <div class="section top_info">
        <div class="box_green map-render-area" ref="mapContainer"></div>
        <div class="lines_wrapper">
          <div class="placeholder_line long">Residential Address</div>
          <div class="placeholder_line med">Binangonan, Rizal</div>
          <div class="placeholder_line longmed">Talim Island, Mabini St Kaytome Binangonan Rizal</div>
        </div>
      </div>

      <div class="section middle_bar">
        <div class="head_middle_bar">Contact Address</div>
        <div class="section_middle_bar">

          <div class="section_left_middle_bar">
            <div class="sec_map">
              <div class="sec_icon">
                <Send color="#ffffff" :size="20" />
              </div>
              <div class="sec_info">
                <span>ejfron.dev@gmail.com</span>
              </div>
            </div>
            <div class="sec_map">
              <div class="sec_icon">
                <MapPinHouse color="#ffffff" :size="20" />
              </div>
              <div class="sec_info">
                <span>Binangonan Rizal</span>
                </div>
            </div>
          </div>

          <div class="section_right_middle_bar">
            <div class="sec_map">
              <div class="sec_icon">
                <Phone color="#ffffff" :size="20" />
              </div>
              <div class="sec_info">
                <span>+639216584117</span>
                </div>
            </div>
            <div class="sec_map">
              <div class="sec_icon">
                <Unlink color="#ffffff" :size="20" />
              </div>
              <div class="sec_info">
                <span>Edgar Jugado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section form_wrapper">
        <div class="form_header">
          <div class="circle_green">
            <Mails color="#ffffff" :size="30" />
          </div>
          <div class="header_lines">
            <div class="placeholder_line long">Contact Form</div>
            <div class="placeholder_line med">Your dedicated offer is waiting for you, Send me 
a email now, lets build  your desired application.</div>
          </div>
        </div>
        
        <textarea
  class="placeholder_line email"
  placeholder="Example@gmail.com"
  v-model="emailTo"
></textarea>

<textarea
  class="placeholder_line emailText"
  placeholder="Your message..."
  v-model="emailMessage"
></textarea>

<button
  class="button_placeholder"
  :disabled="isSending"
  @click="sendEmail"
>
  {{ isSending ? 'Sending...' : 'Send Email' }}
</button>







      </div>
    </div>
  </div>

 <Teleport to="body">
    <!-- Add wrapper div with top positioning -->
    <div class="modal-top-fixed">
      <ModalSent
        v-if="showSentModal"
        @close="showSentModal = false"
        class="top-modal"
      />
      
      <ModalSentError
        v-if="emailError"
        @close="emailError = false"
        class="top-modal"
      />
    </div>
  </Teleport>

</template>

<style scoped>
  

.modal-top-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
}

.top-modal {
  margin-top: 10px;
}
 
.contact{
  padding: 1rem;

}

/* Custom Scrollbar */
.contact::-webkit-scrollbar {
    width: 8px;
}

.contact::-webkit-scrollbar-track {
    background: #e0e0e0; 
    border-radius: 5px;
}

.contact::-webkit-scrollbar-thumb {
    background: #10c010; 
    border-radius: 5px;
}

.contact::-webkit-scrollbar-thumb:hover {
    background: #0d800d; 
}

.map-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
}

/* Header Styles */
.heading-contact {
    width: 100%;
    margin-bottom: 0.5rem;
}

.name-contact {
     color: var(--text-color-head);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.name-contact span {
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


.contact_container{
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
/* Helper Classes for Placeholders */
.section {
   background-color: var(--card-bg);/* Light grey for section blocks */
  border-radius: 8px;
  padding: 2rem 1rem;
      color: var(--text-color-par);
}

/* .placeholder_line {
  background-color: #f5f5f5;
  height: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
} */

.long { 
  font-size: 0.8rem;
  font-weight: 700;
 }
.med { 
  font-size: 0.70rem;
 }

 .longmed{
  font-size: 0.70rem;
 }
.email{
  background-color: #0d800d39;
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  border-radius: 10px;
    box-sizing: border-box; 
  resize: none;           
  border: none;
  color: var(--text-color-head);
  padding: 0.7rem;

  text-align: start;
  font-family: inherit;   
  outline: none;
}

/* Top Info Layout */
.top_info {
  display: flex;
  gap: 15px;
}

.box_green {
  width: 250px;
  height: 150px;
  border-radius: 8px;
  flex-shrink: 0;
}

.lines_wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Middle Bars */
.middle_bar {
  height: auto;
}

.head_middle_bar{
  font-size: 1rem;
  font-weight: 700;
      color: var(--text-color-par);
}
.section_middle_bar{
  display: flex;
  gap: 1rem;
}

.sec_map{
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sec_icon{
  background-color: #10c010;
  padding: 0.7rem 1rem;
  margin: 0.5rem 0rem;
  border-radius: 10px;
}
.sec_info{
  
  background-color: #0d800d39;
width: 200px;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 10px;
  
  span{
    font-size: 0.70rem;
    font-weight: 500;
    color: var(--text-color-par);
  }
}


.divider_bar {
  height: 25px;
}

/* Form Section Layout */
.form_wrapper {
  height: auto;
  padding-bottom: 25px;
}

.form_header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.circle_green {
  background-color: #10c010;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  padding: 1rem;
  flex-shrink: 0;
}

.header_lines {
  flex-grow: 1;
}

.emailText {
background-color: #0d800d39;
  width: 100%;
  height: 150px;
  border-radius: 8px;
  border: none;
  padding: 12px;        
  box-sizing: border-box; 
  resize: none;       
   color: var(--text-color-head);    
  

  text-align: start;
  font-family: inherit;   
  outline: none;
}

.button_placeholder {
  background-color: #76c741;
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  color: #fff;
  padding: 1rem 0rem;
 cursor: pointer;
 border: none;
}

.button_placeholder:hover{
  background-color: #11a911;
}

/* Scrollbar Styling (Optional) */
.contact::-webkit-scrollbar {
  width: 6px;
}
.contact::-webkit-scrollbar-thumb {
  background: #76c741;
  border-radius: 10px;
}

     @media screen  and (max-width:780px){
.section_middle_bar{
  flex-direction: column;
  gap: 0rem;
}

.sec_info{
  
width: 100%;

  

}
.sec_map{
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

     }

     @media screen  and (max-width:610px){
      .contact{
    display: flex;
}

.top_info {
  flex-direction: column;
  gap: 15px;
}

.box_green {
  width: 100%;
  height: 150px;
  border-radius: 8px;
  flex-shrink: 0;
}

     }
</style>
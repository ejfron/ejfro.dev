<script>
    export default {
        name: "LoadingPage"
    }
</script>

<template>

    <div class="background gradient">
        <ul class="bg-bubbles">
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
    </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

/* Bubbles container */
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Individual bubble styling */
.bg-bubbles li {
  position: absolute;
  bottom: -150px;
  background: var(--bubbles);
  animation: rise 20s infinite ease-in;
}

/* Bubble sizes and animations - each li gets unique properties */
.bg-bubbles li:nth-child(1) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 20s;
  animation-delay: 0s;
}

.bg-bubbles li:nth-child(2) {
  width: 90px;
  height: 90px;
  left: 20%;
  animation-duration: 18s;
  animation-delay: 2s;
}

.bg-bubbles li:nth-child(3) {
  width: 180px;
  height: 180px;
  left: 35%;
  animation-duration: 22s;
  animation-delay: 4s;
}

.bg-bubbles li:nth-child(4) {
  width: 140px;
  height: 140px;
  left: 50%;
  animation-duration: 25s;
  animation-delay: 0s;
}

.bg-bubbles li:nth-child(5) {
  width: 200px;
  height: 200px;
  left: 65%;
  animation-duration: 19s;
  animation-delay: 1s;
}

.bg-bubbles li:nth-child(6) {
  width: 45px;
  height: 45px;
  left: 75%;
  animation-duration: 21s;
  animation-delay: 3s;
}

.bg-bubbles li:nth-child(7) {
  width: 70px;
  height: 70px;
  left: 85%;
  animation-duration: 17s;
  animation-delay: 5s;
}

.bg-bubbles li:nth-child(8) {
  width: 140px;
  height: 140px;
  left: 90%;
  animation-duration: 24s;
  animation-delay: 2s;
}

.bg-bubbles li:nth-child(9) {
  width: 30px;
  height: 30px;
  left: 5%;
  animation-duration: 16s;
  animation-delay: 6s;
}

.bg-bubbles li:nth-child(10) {
  width: 70px;
  height: 70px;
  left: 30%;
  animation-duration: 26s;
  animation-delay: 7s;
}

/* Optional: Add slight horizontal movement */
@keyframes rise {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1200px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

/* Optional: Add a subtle glow effect */
.bg-bubbles li {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

/* For better performance on mobile */
@media (max-width: 768px) {
  .bg-bubbles li {
    animation-duration: 15s !important;
  }
}

</style>

<script setup lang="ts">
import PNG_IMAGES from '../../../public/PNG-Image/image.ts';
</script>

<template>
  <div class="hero-wrapper">
    <img :src="PNG_IMAGES.adoptionHero" alt="wish adoption top banner" class="hero-img" />
    <div class="option">
      <div class="hero-message-wrapper">
        <div class="hero-message">
          <p>작은 손길로 큰 변화를,</p>
          <p>당신의 마음이 새로운 시작을 엽니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-img {
  width: 100%;
  height: 575px;
  object-fit: cover;
}

.hero-message-wrapper {
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 575px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.hero-message {
  width: 1280px;
  font-size: 48px;
  font-family: 'Paperlogy';
  font-weight: 600;
  color: var(--gray-1);
  padding-top: 350px;
  text-align: end;
  line-height: 130%;
}
</style>

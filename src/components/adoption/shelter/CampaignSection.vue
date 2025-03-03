<script setup lang="ts">
import CampaignCard from '@/components/common/CampaignCard.vue';
import TitleText from '@/components/common/TitleText.vue';
</script>

<template>
  <div class="wrapper d-flex gap-3 justify-content-center align-items-end pb-3">
    <div>
      <div class="title d-flex gap-1 align-items-center">
        <TitleText size="32px" weight="600" color="gray-10"> # 진행중인 </TitleText>
        <TitleText size="32px" weight="600" highlight-color="blue"> 반려동물 캠페인 </TitleText>
      </div>
      <div Class="d-flex gap-3 bg-red ">
        <CampaignCard
          width="400px"
          height="300px"
          image-url="/public/Campaign/campaign-tossbank.png"
          linkTo="https://www.tossbank.com/articles/32383"
          :hasFilter="true"
        >
          <template #title>
            <span><em :style="{ fontStyle: 'normal', color: '#2C63F6' }">Toss</em> bank</span>
          </template>
          <template #subTitle>
            <span>함께 겨울나기 캠페인</span>
          </template>
        </CampaignCard>
        <CampaignCard
          width="400px"
          height="300px"
          image-url="/public/Campaign/campagin-game.png"
          linkTo="https://togetheron.net/dang_introduce"
          :hasFilter="true"
        >
          <template #title>
            <span>함께 On, 댕댕이게임</span>
          </template>
          <template #subTitle>
            <span>강릉 바우길 투어</span>
          </template>
        </CampaignCard>
      </div>
    </div>
    <div>
      <div class="title d-flex gap-1 align-items-center">
        <TitleText size="32px" weight="600" color="gray-10"> #모집중인 </TitleText>
        <TitleText size="32px" weight="600" highlight-color="green"> 돌봄 봉사</TitleText>
      </div>
      <div Class="d-flex gap-3 bg-red ">
        <CampaignCard
          width="400px"
          height="300px"
          image-url="/public/Campaign/volunteer1.png"
          linkTo="https://luppyworld.com/VolunteerApply/?idx=331"
        />

        <CampaignCard
          width="400px"
          height="300px"
          image-url="/public/Campaign/volunteer2.png"
          linkTo="https://www.biteme.co.kr/shop/event/event_view?no=2371&allow=Y&srsltid=AfmBOorT1yYAgrLNfeOY4D5tJwLVRMWufjFE7LKJ4H-hj2w3yVu-84Gk"
        />
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  width: 100vw;
  height: 460px;
  background-color: var(--gray-3);
}
</style>

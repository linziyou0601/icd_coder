<template>
  <!-- 頁尾 -->
  <section ref="footer" :class="`${$attrs['bg-class'] || `bg-grad-color-B`} horizontal-spacer`" v-bind="$attrs">
    <b-row class="footer-height" align-v="center">
      <b-col cols="12" class="mb-2 bg-grad-purple" style="min-height: 300px;">
        <h2 class="footer-title text-center mt-5">團隊成員</h2>
        <b-row class="px-5 mt-4" align-h="center">
          <!-- 指導教授 -->
          <b-col cols="12" md="6" xl="4" class="p-3 mb-2">
            <div class="footer-subtitle">專案資訊</div>
            <div class="footer-content mt-2">
              國際碼版本 ICD 9/10<br/>國立雲林科技大學資訊管理系暨研究所
            </div>
          </b-col>
          <!-- 指導教授 -->
          <b-col cols="12" md="6" xl="6" class="p-3 mb-2">
            <div class="footer-subtitle">學生</div>
            <b-row class="footer-content mt-2">
              <b-col><FooterUser :img="'stu1.png'" :name="'林福哲'" /></b-col>
              <b-col><FooterUser :img="'stu2.png'" :name="'林子佑'" /></b-col>
              <b-col><FooterUser :img="'stu3.png'" :name="'魏道弘'" /></b-col>
              <b-col><FooterUser :img="'stu4.png'" :name="'鄭鈺蝶'" /></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="mb-2">
        <h6 class="text-center">Copyright © 2021 All Right Reserved - IcdCoder</h6>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
@supports (mask-image: paint(smooth-corners)) {
  .bg-grad-purple {
    --smooth-corners: 24, 4;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
.footer-title {
  color: var(--kLight);
  font-size: 48px;
  font-weight: 700;
}
.footer-subtitle {
  color: var(--kLight);
  font-size: 24px;
  font-weight: 700;
}
.footer-content {
  color: var(--kLight);
  font-size: 18px;
  font-weight: 500;
}
</style>
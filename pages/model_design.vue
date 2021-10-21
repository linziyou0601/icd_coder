<template>
  <div class="container-fluid p-0">
    <transition name="fade">
      <div
        v-show="showToTopBtn"
        class="to-ref-panel"
      >
        <b-button-group vertical>
          <b-button class="bg-grad-gray px-3" @click="scrollToElement('model_top')">
            <fa :icon="['fas', 'chevron-up']" />
          </b-button>
          <b-button class="bg-grad-gray px-3" @click="scrollToElement('diag_d_m_3')">
            3
          </b-button>
          <b-button class="bg-grad-gray px-3" @click="scrollToElement('diag_d_m_9')">
            9
          </b-button>
          <b-button class="bg-grad-gray px-3" @click="scrollToElement('diag_d_m_9res')">
            9res
          </b-button>
          <b-button class="bg-grad-gray px-3" @click="scrollToElement('diag_d_m_3579res')">
            3579res
          </b-button>
        </b-button-group>
      </div>
    </transition>

    <!-- 封面區 -->
    <section ref="model_top" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height-with-nav pb-5" align-v="center">
        <b-col cols="12" md="10" lg="6" offset-md="1" offset-lg="3" class="text-center my-5" style="z-index: 99">
          <h1 class="mb-4 title-style">模型設計</h1>
          <h6 class="mb-5 subtitle-style"></h6>
          <b-button
            class="bg-grad-blue show-more-btn"
            @click="scrollToElement('diag_d_m_3')"
          >
            繼續閱讀
          </b-button>
        </b-col>
      </b-row>
      <div class="deco-wrap position-relative">
        <b-img src="sonic-star.png" class="main-deco" />
      </div>
		</section>

    <!-- diag_d_m_3 -->
    <section ref="diag_d_m_3" class="bg-grad-color-A horizontal-spacer">
      <b-row class="py-5" align-v="center">
        <b-col class="text-center">
          <h2 class="mb-4 header-style">diag/d/m 3</h2>
          <div class="model-img-wrap">
            <b-img src="架構圖diag_d_m_3.png" fluid/>
          </div>
        </b-col>
      </b-row>
		</section>

    <!-- diag_d_m_9 -->
    <section ref="diag_d_m_9" class="bg-grad-color-B horizontal-spacer">
      <b-row class="py-5" align-v="center">
        <b-col class="text-center">
          <h2 class="mb-4 header-style">diag/d/m 9</h2>
          <div class="model-img-wrap">
            <b-img src="架構圖diag_d_m_9.png" fluid/>
          </div>
        </b-col>
      </b-row>
		</section>

    <!-- diag_d_m_9res -->
    <section ref="diag_d_m_9res" class="bg-grad-color-A horizontal-spacer">
      <b-row class="py-5" align-v="center">
        <b-col class="text-center">
          <h2 class="mb-4 header-style">diag/d/m 9res</h2>
          <div class="model-img-wrap">
            <b-img src="架構圖diag_d_m_9res.png" fluid/>
          </div>
        </b-col>
      </b-row>
		</section>

    <!-- diag_d_m_3579res -->
    <section ref="diag_d_m_3579res" class="bg-grad-color-B horizontal-spacer">
      <b-row class="py-5" align-v="center">
        <b-col class="text-center">
          <h2 class="mb-4 header-style">diag/d/m 3579res</h2>
          <div class="model-img-wrap">
            <b-img src="架構圖diag_d_m_3579res.png" fluid/>
          </div>
        </b-col>
      </b-row>
		</section>

    <Footer :bg-class="`bg-grad-color-A`"/>
    <AlertDialog />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '模型設計',
      showToTopBtn: false,
      tabIndex: 0,
    }
  },
  created() {
    this.$nuxt.$emit('pageTitle', this.pageTitle)
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollToElement(val) {
      const el = this.$refs[val];
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.showToTopBtn = currentScrollPosition > 200
    },
  },
}
</script>

<style scoped>
/* -------------------- 主頁大圖 -------------------- */
.deco-wrap {
  top: calc(-45vw);
  margin-left: -144px;
  height: 100px;
  width: 100vw;
}
.main-deco {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100vw;
}
@media screen and (max-width: 1183px){
  .deco-wrap {
    margin-left: -96px;
  }
}
@media screen and (max-width: 752px){
  .deco-wrap {
    margin-left: -48px;
  }
}

/* -------------------- 瞭解更多按鈕 -------------------- */
.show-more-btn {
  padding: .75rem 3rem;
}
@supports (mask-image: paint(smooth-corners)) {
  .show-more-btn {
    --smooth-corners: 16, 4;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}

/* -------------------- 浮動鈕 -------------------- */
.to-ref-panel {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;
}
@supports (mask-image: paint(smooth-corners)) {
  .to-ref-panel {
    --smooth-corners: 6, 12;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}

button.bg-grad-gray:hover {
  opacity: .9;
}

/* -------------------- 淡入淡出動畫 -------------------- */
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}

/* -------------------- 架構圖 -------------------- */
.model-img-wrap {
  --model-img-margin: 200px;
  margin-left: var(--model-img-margin);
  margin-right: var(--model-img-margin);
}
@media screen and (max-width: 1600px){
  .model-img-wrap {
    --model-img-margin: 150px;
  }
}
@media screen and (max-width: 1400px){
  .model-img-wrap {
    --model-img-margin: 100px;
  }
}
@media screen and (max-width: 1200px){
  .model-img-wrap {
    --model-img-margin: 75px;
  }
}
@media screen and (max-width: 1000px){
  .model-img-wrap {
    --model-img-margin: 50px;
  }
}
@media screen and (max-width: 800px){
  .model-img-wrap {
    --model-img-margin: 0;
  }
}

</style>

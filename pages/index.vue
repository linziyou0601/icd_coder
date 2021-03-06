<template>
  <div class="container-fluid p-0">
    <transition name="fade">
      <b-button
        v-show="showToTopBtn"
        class="to-top-btn bg-grad-gray"
        @click="scrollToElement('index_top')"
      >
        <fa :icon="['fas', 'chevron-up']" />
      </b-button>
    </transition>

    <!-- 封面區 -->
    <section ref="index_top" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height-with-nav pb-5 index-top-text-area" align-v="center">
        <b-col cols="12" md="9" lg="6" style="z-index: 99">
          <h1 class="mb-4 title-style">國際疾病碼<br/>多標籤分類模型</h1>
          <h6 class="mb-5 subtitle-style">使用機器學習模型處理國際疾病分類碼的多標籤分類問題！</h6>
          <b-button
            class="bg-grad-blue show-more-btn"
            @click="scrollToElement('icd_code_intro')"
          >
            瞭解更多
          </b-button>
        </b-col>
      </b-row>
      <fa :icon="['fas', 'chevron-down']" 
        class="d-none d-md-block to-more-btn cursor-pointer"
        @click="scrollToElement('icd_code_intro')"
      />
      <div class="deco-wrap position-relative">
        <b-img src="index-main-deco.png" class="main-deco" />
      </div>
		</section>

    <!-- 國際疾病碼？ -->
    <section ref="icd_code_intro" class="bg-grad-color-A horizontal-spacer">
      <b-row class="full-height py-5" align-v="center">
        <b-col cols="12" lg="6" class="text-center">
          <b-img src="icd-code-intro.png" fluid/>
        </b-col>
        <b-col cols="12" lg="6" >
          <h2 class="mb-4 header-style">國際疾病碼？</h2>
          <h5 class="mb-5 content-style">國際疾病碼（ICD-10）為世界衛生組織依疾病特徵，按規則將疾病分類的代碼。台灣的健保機制目前即使用ICD-10的分類準則。</h5>
          <h5 class="mb-5 content-style">台灣健保局會用國際疾病碼對應Tw-DRG表進行健保申報，因此編碼的正確性會影響到國民的就醫權益，讓民眾得到最合宜的照護。</h5>
        </b-col>
      </b-row>
		</section>

    <!-- 我們做了什麼？ -->
    <section ref="we_do_intro" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height py-5" align-v="center">
        <b-col cols="12">
          <b-row align-h="center">
            <b-col cols="12" md="10" lg="8" class="text-center">
              <h2 class="mb-4 header-style">我們做了什麼</h2>
              <h5 class="mb-5 content-style">透過持續改進模型內及資料清洗之演算法，著重於嘗試使用不同的演算法來改進模型本身的缺陷</h5>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col
              v-for="(data, index) in cardData"
              :key="index"
              cols="12" sm="6" lg="4"
              class="mb-3 text-center"
            >
              <b-card class="mb-2 px-3 py-5 bg-grad-white we-do-card border-0 text-left">
                <b-img :src="data.icon" style="width: 80px;" class="my-2"/>
                <b-card-title class="my-3">{{ data.title }}</b-card-title>
                <b-card-text class="my-4">{{ data.text }}</b-card-text>
              </b-card>
            </b-col>
          </b-row>
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
      pageTitle: '',
      showToTopBtn: false,
      cardData: [
        {
          icon: "icons8_conversion_96px.png",
          title: "刪減病摘雜訊",
          text: "透過在輸入資料前就將大量對模型而言無法提升績效之資料刪減或簡化來提升績效",
        },
        {
          icon: "icons8_plugin_96px.png",
          title: "組合不同學習模型",
          text: "透過組合目前State-Of-Art模型來嘗試組合各模型不同優點，或減少單一模型之缺點",
        },
        {
          icon: "icons8_web_96px.png",
          title: "可視化應用程式",
          text: "透過使用現代Web UI介面實際介接機器學習模型API，來讓研究不僅只局限於研究人員，更可擴及至一般的使用者",
        }
      ]
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
  top: -100vh;
  margin-left: -144px;
}
.main-deco {
  position: absolute;
  top: calc(40px + 50vh - 720px / 2);
  left: calc(100vw - 900px + 140px);
  width: 950px;
}
@media screen and (max-width: 1200px){
  .main-deco {
    top: calc(40px + 50vh - 606px / 2);
    left: calc(100vw - 800px + 160px);
    width: 800px;
  }
}
@media screen and (max-width: 1183px){
  .deco-wrap {
    margin-left: -96px;
  }
  .main-deco {
    top: calc(40px + 50vh - 418px / 2);
    left: calc(100vw - 550px + 50px);
    width: 550px;
  }
}
@media screen and (max-width: 752px){
  .deco-wrap {
    margin-left: -48px;
  }
  .main-deco {
    top: calc(40px + 50vh - 341px / 2 + 200px);
    left: calc(100vw - 450px);
    width: 450px;
  }
}
@media screen and (max-width: 640px){
  .deco-wrap {
    margin-left: -48px;
  }
  .index-top-text-area {
    align-items: start !important;
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
.to-more-btn {
  position: relative;
  font-size: 1.8rem;
  color: #FFFFFF;
  filter: drop-shadow(0px 1px 5px #00000040);
  left: 50%;
  bottom: 200px;
  z-index: 99;
}
.to-more-btn:hover {
  filter: drop-shadow(0px 1px 3px #999999);
}

/* -------------------- 回頂部 -------------------- */
.to-top-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 99;
}
@supports (mask-image: paint(smooth-corners)) {
  .to-top-btn {
    --smooth-corners: 4;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
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

/* -------------------- 卡片區 -------------------- */
@supports (mask-image: paint(smooth-corners)) {
  .we-do-card {
    --smooth-corners: 9, 12;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
.we-do-card .card-title {
  color: var(--kBlack);
  font-size: var(--cardTitle);
  font-weight: 700;
}
.we-do-card .card-text {
  color: var(--kLightBlack);
  font-size: var(--cardText);
  font-weight: 500;
}
</style>

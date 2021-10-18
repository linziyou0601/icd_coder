<template>
  <div class="container-fluid p-0">
    <transition name="fade">
      <b-button
        v-show="showToTopBtn"
        class="to-top-btn bg-grad-gray"
        @click="scrollToElement('about_top')"
      >
        <fa :icon="['fas', 'chevron-up']" />
      </b-button>
    </transition>

    <!-- 封面區 -->
    <section ref="about_top" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height-with-nav pb-5" align-v="center">
        <b-col cols="12" md="10" lg="6" offset-md="1" offset-lg="3" class="text-center my-5" style="z-index: 99">
          <h1 class="mb-4 title-style">關於我們</h1>
          <h6 class="mb-5 subtitle-style">我們是Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
          <b-button
            class="bg-grad-blue show-more-btn"
            @click="scrollToElement('motivation')"
          >
            繼續閱讀
          </b-button>
        </b-col>
      </b-row>
      <div class="deco-wrap position-relative">
        <b-img src="about-us-left-deco.png" class="left-deco" />
        <b-img src="about-us-right-deco.png" class="right-deco" />
      </div>
		</section>

    <!-- 研究動機 -->
    <section ref="motivation" class="bg-grad-color-A horizontal-spacer">
      <b-row class="full-height py-5" align-v="center">
        <b-col cols="12" lg="6">
          <h2 class="mb-4 header-style">研究動機</h2>
          <h5 class="mb-5 content-style">目前國際疾病碼自動分類，會遇到輸入模型的病歷摘要含有過多雜訊，造成輸出疾病碼範圍稀疏的問題；且相同概念的詞彙不同醫事人員使用的詞句有所不同。</h5>
          <h5 class="mb-5 content-style">當前研究者關注於加強與改變模型架構或處理流程。我們想針對前處理及擴展資訊為研究方向，期望能發現尚未被充分注意到的部分進行篩選處理與強化。</h5>
        </b-col>
        <b-col cols="12" lg="6" class="text-center">
          <b-img src="motivation.png" fluid/>
        </b-col>
      </b-row>
		</section>

    <!-- 研究目的 -->
    <section ref="purpose" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height py-5" align-v="center">
        <b-col cols="12" lg="6" class="text-center">
          <b-img src="purpose.png" fluid/>
        </b-col>
        <b-col cols="12" lg="6">
          <h2 class="my-4 header-style">研究目的</h2>
          <b-card 
            v-for="(data, index) in cardData"
            :key="index"
            class="my-3 p-1 p-lg-3 bg-grad-white purpose-item-card border-0">
            <b-row align-v="center">
              <b-col class="icon-area">
                <b-img :src="data.icon" style="width: 80px;" class="my-2"/>
              </b-col>
              <b-col>
                <b-card-title class="my-2">{{ data.title }}</b-card-title>
                <b-card-text class="my-2">{{ data.text }}</b-card-text>
              </b-col>
            </b-row>
          </b-card>
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
      pageTitle: '關於我們',
      showToTopBtn: false,
      cardData: [
        {
          icon: "icons8_filter_96px.png",
          title: "刪減病歷摘要雜訊部分萃取關鍵資訊",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        {
          icon: "icons8_layers_96px.png",
          title: "使用機器學習模型針對關鍵資訊擴展",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        {
          icon: "icons8_goal_96px.png",
          title: "期望提高資料品質與績效降低訓練成本",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
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
.left-deco {
  position: absolute;
  top: 100px;
  left: -60px;
  width: 408px;
}
.right-deco {
  position: absolute;
  top: calc(624px / 2);
  left: calc(100vw - 686px + 140px);
  width: 686px;
}
@media screen and (max-width: 1200px){
  .left-deco {
    top: calc(150px);
    left: -60px;
    width: 300px;
  }
  .right-deco {
    top: calc(528px / 2 + 120px);
    left: calc(100vw - 580px + 160px);
    width: 580px;
  }
}
@media screen and (max-width: 1183px){
  .deco-wrap {
    margin-left: -96px;
  }
  .left-deco {
    top: calc(150px);
    left: -60px;
    width: 250px;
  }
  .right-deco {
    top: calc(455px / 2 + 240px);
    left: calc(100vw - 500px + 50px);
    width: 500px;
  }
}
@media screen and (max-width: 752px){
  .deco-wrap {
    margin-left: -48px;
  }
  .left-deco {
    top: calc(150px);
    left: -80px;
    width: 200px;
  }
  .right-deco {
    top: calc(273px / 2 + 480px);
    left: calc(100vw - 300px);
    width: 300px;
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
  .purpose-item-card {
    --smooth-corners: 20, 5;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
.purpose-item-card .card-title {
  color: var(--kBlack);
  font-size: 24px;
  font-weight: 700;
}
.purpose-item-card .card-text {
  color: var(--kLightBlack);
  font-size: 16px;
  font-weight: 500;
}
.purpose-item-card .icon-area {
  min-width: 120px;
  max-width: 120px;
}

</style>

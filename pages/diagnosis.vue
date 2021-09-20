<template>
  <div class="container-fluid p-0">
    <transition name="fade">
      <b-button
        v-show="showToTopBtn"
        class="to-top-btn bg-grad-gray"
        @click="scrollToElement('diagnosis')"
      >
        <fa :icon="['fas', 'chevron-up']" />
      </b-button>
    </transition>

    <!-- 封面區 -->
    <section ref="diagnosis" class="bg-grad-color-A horizontal-spacer">
      <b-row class="full-height-with-nav pb-5" align-h="between">
        <!-- 病歷摘要輸入 -->
        <b-col class="col-12 col-lg-6">
          <b-card class="bg-grad-white dianosis-card px-3 px-lg-5 py-5 mr-lg-3 mb-5 mb-lg-0">
            <h2 class="dianosis-card-title mt-2">病歷摘要</h2>
            <b-form-textarea
              id="diagnosis_text"
              v-model="diagnosis"
              class="input_panel p-4 my-4"
              placeholder="請輸入病摘"
              rows="18"
            ></b-form-textarea>
            <b-button
              class="bg-grad-blue show_more_btn mb-3"
              @click="analyze"
            >
              分析
            </b-button>
          </b-card>
        </b-col>

        <!-- 病歷摘要分析結果 -->
        <b-col class="col-12 col-lg-6">
          <b-card class="bg-grad-white dianosis-card px-3 px-lg-5 py-5 ml-lg-3">
            <h2 class="dianosis-card-title mt-2">分析結果</h2>
            <b-row class="my-3">
              <b-col
                v-for="(data, index) in result"
                :key="index"
                class="col-12 col-md-6"
              >
                <IcdDataCard
                  :icd_code="data.icd_code"
                  :icd_title="data.icd_title"
                  :percentage="data.percentage"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
		</section>

    <Footer :bgClass="`bg-grad-color-B`"/>
    <AlertDialog />
    <LoadingDialog />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Repository from '../services/Repository'
export default {
  data() {
    return {
      pageTitle: '疾病碼分析',
      showToTopBtn: false,
      diagnosis: '',
      result: [],
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
    ...mapMutations(['fireAlertDialog', 'fireLoadingDialog', 'closeLoadingDialog']),
    scrollToElement(val) {
      const el = this.$refs[val];
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.showToTopBtn = currentScrollPosition > 200
    },
    async fetchResults() {
      try {
        this.fireLoadingDialog()
        const response = await Repository.getAnalyzedResultMock(this.diagnosis)
        this.result = response.data
      } catch (e) {
        this.fireAlertDialog({
          title: '錯誤',
          content: '取得資料失敗！',
          iconSet: 'fas',
          iconName: 'times',
          type: 'error'
        })
      } finally {
        this.closeLoadingDialog()
      }
    },
    analyze() {
      this.result = []
      this.fetchResults()
    }
  },
}
</script>

<style>
@supports (mask-image: paint(smooth-corners)) {
  .dianosis-card {
    --smooth-corners: 9;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
.dianosis-card-title {
  color: var(--kDark);
  font-size: 28px;
  font-weight: 900;
}
.input_panel {
  color: var(--kLightDark);
  font-size: 1rem;
  font-weight: 500;
  overflow-y: hidden !important;
  border: #EDEDED 1px solid;
  border-radius: 20px;
}
</style>

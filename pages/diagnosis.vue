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
    <section ref="diagnosis" class="bg-grad-color-B horizontal-spacer">
      <b-row class="full-height-with-nav pb-5" align-h="between">
        <!-- 病歷摘要輸入 -->
        <b-col cols="12" lg="6">
          <b-card class="bg-grad-white dianosis-panel px-3 px-lg-5 py-5 mr-lg-3 mb-5 mb-lg-0">
            <h2 class="dianosis-panel-title mt-2">病歷摘要</h2>
            <b-form-textarea
              v-model="diagnosis"
              class="input-panel p-4 my-4"
              placeholder="請輸入病摘"
              rows="18"
            ></b-form-textarea>
            <b-button
              class="bg-grad-blue analyze-btn mb-3"
              @click="fetchResults"
            >
              分析 (Mock)
            </b-button>
          </b-card>
        </b-col>

        <!-- 病歷摘要分析結果 -->
        <b-col cols="12" lg="6">
          <b-card class="bg-grad-white dianosis-panel px-3 px-lg-5 py-5 ml-lg-3">
            <h2 class="dianosis-panel-title mt-2">分析結果</h2>
            <b-row class="my-3">
              <b-col
                v-for="(data, index) in result"
                :key="index"
                cols="12" lg="6"
              >
                <IcdDataCard
                  :code="data.code"
                  :title="data.title"
                  :percentage="data.percentage"
                  @click.native="icdDataShow(data)"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
		</section>

    <Footer :bg-class="`bg-grad-color-A`"/>
    <AlertDialog />
    <LoadingDialog />
    <IcdDataDialog />
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
    ...mapMutations(['fireAlertDialog', 'fireLoadingDialog', 'closeLoadingDialog', 'fireIcdDataDialog']),
    scrollToElement(val) {
      const el = this.$refs[val];
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.showToTopBtn = currentScrollPosition > 200
    },
    fetchResults() {
      this.result = []
      this.fireLoadingDialog()
      Repository.getAnalyzedResultMock(this.diagnosis)
        .then((res) => { this.result = res.data })
        .catch((_) => {
          this.fireAlertDialog({
            title: '錯誤',
            content: '取得資料失敗！',
            iconSet: 'fas',
            iconName: 'times',
            type: 'error'
          })
        })
        .finally(() => this.closeLoadingDialog())
    },
    icdDataShow(icdData) {
      this.fireIcdDataDialog({
        code: icdData.code,
        title: icdData.title,
        description: icdData.description,
        percentage: icdData.percentage,
      })
    }
  },
}
</script>

<style scoped>
/* -------------------- 分區面板 -------------------- */
@supports (mask-image: paint(smooth-corners)) {
  .dianosis-panel {
    --smooth-corners: 9;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
.dianosis-panel-title {
  color: var(--kDark);
  font-size: 28px;
  font-weight: 900;
}
/* -------------------- 輸入區 -------------------- */
.input-panel {
  color: var(--kLightDark);
  font-size: 1rem;
  font-weight: 500;
  overflow-y: hidden !important;
  border: #EDEDED 1px solid;
  border-radius: 20px;
}

/* -------------------- 瞭解更多按鈕 -------------------- */
.analyze-btn {
  padding: .75rem 3rem;
}
@supports (mask-image: paint(smooth-corners)) {
  .analyze-btn {
    --smooth-corners: 16, 4;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
  }
}
</style>

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
            <b-row align-h="between" class="mx-1">
              <b-button
                class="bg-grad-gray analyze-btn mb-3"
                @click="loadDiagnosis"
              >
                載入病摘
              </b-button>
              <b-button
                class="bg-grad-blue analyze-btn mb-3"
                @click="fetchResults"
              >
                分析
              </b-button>
            </b-row>
          </b-card>
        </b-col>

        <!-- 病歷摘要分析結果 -->
        <b-col cols="12" lg="6">
          <b-card class="bg-grad-white dianosis-panel px-3 px-lg-5 py-5 ml-lg-3">
            <h2 class="dianosis-panel-title mt-2">分析結果</h2>
            <b-row class="my-3">
              <b-col
                v-for="(data, index) in resultSortedByPercentage"
                :key="index"
                cols="12" lg="6"
              >
                <IcdDataCard
                  v-if="index<10 || isExpanded"
                  :code="data.code"
                  :title="data.title"
                  :percentage="data.percentage"
                  @click.native="icdDataShow(data)"
                />
              </b-col>
              <b-col v-if="resultSortedByPercentage.length>10" cols="12">
                <div class="text-center mt-3">
                  <fa 
                    :icon="['fas', `chevron-${isExpanded? 'up': 'down'}`]"
                    class="expand-btn cursor-pointer"
                    :alt="`${isExpanded? '收點': '展開'}`"
                    @click="isExpanded = !isExpanded"
                  />
                </div>
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
    <DiagnosisSelDialog :diagnoses-key="Object.keys(diagnosesJson)"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Repository from '../services/Repository'
import diagnosesJson from '../static/diagnoses.json'
export default {
  data() {
    return {
      diagnosesJson,
      pageTitle: '疾病碼分析',
      showToTopBtn: false,
      diagnosis: '',
      result: [],
      isExpanded: false,
    }
  },
  computed: {
    resultSortedByPercentage() {
      const copiedResult = [...this.result]
      return copiedResult.sort((a, b)=> Number(b.percentage) - Number(a.percentage))
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
    ...mapMutations(['fireAlertDialog', 'fireLoadingDialog', 'closeLoadingDialog', 'fireIcdDataDialog', 'fireDiagnosisSelDialog', 'closeDiagnosisSelDialog']),
    scrollToElement(val) {
      const el = this.$refs[val];
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.showToTopBtn = currentScrollPosition > 200
    },
    loadDiagnosis() {
      this.fireDiagnosisSelDialog()
    },
    chooseDiag(diagKey) {
      this.diagnosis = this.diagnosesJson[diagKey]
      this.closeDiagnosisSelDialog()
    },
    fetchResults() {
      this.result = []
      this.fireLoadingDialog()
      Repository.getAnalyzedResult(this.diagnosis)
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
  font-size: var(--diagPanelTitle);
  font-weight: 900;
}
/* -------------------- 輸入區 -------------------- */
.input-panel {
  color: var(--kLightDark);
  font-size: var(--diagInput);
  font-weight: 500;
  border: #EDEDED 1px solid;
  border-radius: 20px;
}

/* -------------------- 分析按鈕 -------------------- */
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
.expand-btn {
  font-size: 2.2rem;
  filter: drop-shadow(0px 1px 5px #FFFFFF40);
}
</style>

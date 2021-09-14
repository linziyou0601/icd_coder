<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" class="bg-top-color horizontal-spacer">
        <b-navbar-brand href="#" to="/" class="nav-title-style">
          IcdCoder.
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-model="tabValue" class="ml-auto">
            <b-nav-item
              v-for="(link, index) in links"
              :key="index"
              :class="{
                'mx-0': true,
                'mx-md-3': true,
                'nav-active': tabValue == index
              }"
              @click="routerTo(link.link)"
            >
              {{ link.title }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
export default {
  data() {
    return {
      tabValue: 0,
      links: [
        {
          title: '首頁',
          link: '/'
        },
        {
          title: '疾病碼分析',
          link: '/tutorial'
        },
        {
          title: '關於我們',
          link: '/about_us'
        }
      ]
    }
  },
  created() {
    this.$nuxt.$on('pageTitle', (data) => {
      this.pageTitle = data
      this.loadTabValue()
    })
  },
  methods: {
    ...mapMutations(['fireAlertDialog']),
    loadTabValue() {
      this.tabValue = this.links.findIndex(
        (element) => element.link === this.$route.path
      )
    },
    underConstruction() {
      this.fireAlertDialog({
        title: '敬請期待',
        content: '該頁面建置中，敬請期待！',
        iconSet: 'fas',
        iconName: 'tools',
        type: 'info'
      })
    },
    routerTo(path) {
      if (path === '/') this.$router.push(path)
      else this.underConstruction()
    }
  }
}
</script>

<style>
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff)
      format('woff');
  font-weight: 100;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff)
      format('woff');
  font-weight: 200;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff)
      format('woff');
  font-weight: 300;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff)
      format('woff');
  font-weight: 400;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff)
      format('woff');
  font-weight: 500;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff)
      format('woff');
  font-weight: 700;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff)
      format('woff');
  font-weight: 900;
}

:root {
  --kBlue: #287fff;
  --kBlue60: #287fffa6;
  --kPurple: #7868e6;
  --kPurple60: #7868e6a6;
  --kRed: #ed3758;
  --kRed60: #ed3758a6;
  --kGreen: #7dbd39;
  --kGreen60: #7dbd39a6;
  --kBlack: #2e3846;
  --kLightBlack: #516272;
  --kBgTopColor: #fafff5;
  --kBgBottomColor: #e8f9ff;
  --kWhite90: #ffffffe6;
  --kWhite30: #ffffff4d;
  --kLight: #ebebeb;
}

/* -------------------- 字型 -------------------- */
html,
body {
  overflow-x: hidden;
  font-family: 'SweiGothicCJKtc', Helvetica, 'PingFang TC', '微軟正黑體',
    'Microsoft JhengHei', sans-serif !important;
  font-weight: 700;
}

/* -------------------- 背景色 -------------------- */
.bg-top-color {
  background-color: var(--kBgTopColor);
}
.bg-bottom-color {
  background-color: var(--kBgBottomColor);
}
.bg-grad-color {
  background: var(--kBgBottomColor);
  background-image: -webkit-linear-gradient(
    to bottom,
    var(--kBgTopColor) 0%,
    var(--kBgBottomColor) 100%
  );
  background-image: -moz-linear-gradient(
    to bottom,
    var(--kBgTopColor) 0%,
    var(--kBgBottomColor) 100%
  );
  background-image: -o-linear-gradient(
    to bottom,
    var(--kBgTopColor) 0%,
    var(--kBgBottomColor) 100%
  );
  background-image: linear-gradient(
    to bottom,
    var(--kBgTopColor) 0%,
    var(--kBgBottomColor) 100%
  );
}

/* -------------------- NAV Item樣式及動畫 -------------------- */
.nav-item > a,
.nav-item > a:hover {
  color: var(--kBlack) !important;
  font-weight: 500;
}
.nav-item > a::after {
  content: '';
  display: block;
  position: relative;
  margin: 2px auto 0 auto;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  background: var(--kBlue);
  -o-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: 0;
}
.nav-item > a:hover::after,
.nav-item > .nuxt-link-exact-active.nuxt-link-active::after,
.nav-active > a::after {
  opacity: 1;
}

/* -------------------- 高度及邊距 -------------------- */
.full-height {
  min-height: 100vh;
}
.full-height-with-nav {
  min-height: 100vh;
  margin-top: -80px;
  padding-top: calc(80px + 3rem);
}
.footer-height {
  min-height: 400px;
}
.horizontal-spacer {
  padding-left: 9rem !important;
  padding-right: 9rem !important;
}
@media screen and (max-width: 1200px) {
  .horizontal-spacer {
    padding-left: 6rem !important;
    padding-right: 6rem !important;
  }
}
@media screen and (max-width: 768px) {
  .horizontal-spacer {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
  }
}

/* -------------------- 標題及內文樣式 -------------------- */
.nav-title-style {
  font-size: 36px;
  font-weight: 900;
  background: var(--kBlue);
  background: -webkit-linear-gradient(to right, var(--kBlue) 0%, var(--kBlue60) 100%);
  background: -moz-linear-gradient(to right, var(--kBlue) 0%, var(--kBlue60) 100%);
  background: -o-linear-gradient(to right, var(--kBlue) 0%, var(--kBlue60) 100%);
  background: linear-gradient(to right, var(--kBlue) 0%, var(--kBlue60) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1 {
  color: var(--kBlack);
  font-size: 64px;
  font-weight: 900;
}
h2 {
  color: var(--kBlack);
  font-size: 48px;
  font-weight: 700;
}
h5 {
  color: var(--kLightBlack);
  font-size: 24px;
  font-weight: 500;
}
h6 {
  color: var(--kLightBlack);
  font-size: 18px;
  font-weight: 700;
}

/* -------------------- 主漸層按鈕 -------------------- */
.bg-grad-blue {
  background: var(--kBgBottomColor);
  background-image: -webkit-linear-gradient(to left, var(--kBlue) 0%, var(--kBlue60) 100%);
  background-image: -moz-linear-gradient(to left, var(--kBlue) 0%, var(--kBlue60) 100%);
  background-image: -o-linear-gradient(to left, var(--kBlue) 0%, var(--kBlue60) 100%);
  background-image: linear-gradient(to left, var(--kBlue) 0%, var(--kBlue60) 100%);
  border: none;
  font-size: 18px;
}
.bg-grad-gray {
  background: var(--kBgBottomColor);
  background-image: -webkit-linear-gradient(to left, var(--kBlack) 0%, var(--kLightBlack) 100%);
  background-image: -moz-linear-gradient(to left, var(--kBlack) 0%, var(--kLightBlack) 100%);
  background-image: -o-linear-gradient(to left, var(--kBlack) 0%, var(--kLightBlack) 100%);
  background-image: linear-gradient(to left, var(--kBlack) 0%, var(--kLightBlack) 100%);
  border: none;
  font-size: 18px;
}
.bg-grad-white {
  background: var(--kBgBottomColor);
  background-image: -webkit-linear-gradient(to bottom right, var(--kWhite90) 0%, var(--kWhite30) 50%, var(--kWhite90) 100%);
  background-image: -moz-linear-gradient(to bottom right, var(--kWhite90) 0%, var(--kWhite30) 50%, var(--kWhite90) 100%);
  background-image: -o-linear-gradient(to bottom right, var(--kWhite90) 0%, var(--kWhite30) 50%, var(--kWhite90) 100%);
  background-image: linear-gradient(to bottom right, var(--kWhite90) 0%, var(--kWhite30) 50%, var(--kWhite90) 100%);
  border: none;
  font-size: 18px;
}
.bg-grad-purple {
  background: var(--kBgBottomColor);
  background-image: -webkit-linear-gradient(to left, var(--kPurple) 0%, var(--kPurple60) 100%);
  background-image: -moz-linear-gradient(to left, var(--kPurple) 0%, var(--kPurple60) 100%);
  background-image: -o-linear-gradient(to left, var(--kPurple) 0%, var(--kPurple60) 100%);
  background-image: linear-gradient(to left, var(--kPurple) 0%, var(--kPurple60) 100%);
  border: none;
  font-size: 18px;
}
</style>

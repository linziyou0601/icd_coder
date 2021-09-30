<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" class="horizontal-spacer">
        <b-navbar-brand href="#" to="/" class="nav-title-style">
          <b-img src="logo_3d.png" class="nav-logo"/>
          <span>IcdCoder.</span>
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
      pageTitle: '',
      tabValue: 0,
      links: [
        {
          title: '首頁',
          link: '/'
        },
        {
          title: '疾病碼分析',
          link: '/diagnosis'
        },
        {
          title: '關於我們',
          link: '/about_us'
        }
      ]
    }
  },
  head() {
    return {
      title: `${this.pageTitle} ${this.pageTitle? '-': ''} ICD Coder`,
    }
  },
  mounted() {
    this.loadTabValue()
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
      let path = this.$route.path
      path = path.endsWith('/') ? path.slice(0, -1) : path
      this.tabValue = this.links.findIndex(
        (element) => element.link.endsWith(path)
      )
    },
    routerTo(path) {
      this.$router.push(path)
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
  --kBgLightGreen: #fafff5;
  --kBgLightBlue: #e8f9ff;
  --kBgLightYellow: #FEFFE3;
  --kBgLightPurple: #F4EBFF;
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
  padding-right:0px !important;
  margin-right:0px !important;
}

/* -------------------- 背景色 -------------------- */
.bg-grad-color-A {
  background: url("~static/Screentone.png") round,
              -webkit-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -webkit-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -moz-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -moz-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -o-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -o-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
}
.bg-grad-color-B {
  background: url("~static/Screentone.png") round,
              -webkit-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -webkit-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -moz-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -moz-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -o-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -o-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
}

/* -------------------- NAV Item樣式及動畫 -------------------- */
.nav-logo {
  width: 45px;
  margin-top: -5px;
}
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
.cursor-pointer {
  cursor: pointer;
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
  background: -webkit-linear-gradient(to right, var(--kBlue), var(--kBlue60) );
  background: -moz-linear-gradient(to right, var(--kBlue), var(--kBlue60) );
  background: -o-linear-gradient(to right, var(--kBlue), var(--kBlue60) );
  background: linear-gradient(to right, var(--kBlue), var(--kBlue60) );
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
  background: -webkit-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: -moz-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: -o-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: linear-gradient(to left, var(--kBlue), var(--kBlue60));
  border: none;
  font-size: 18px;
}
.bg-grad-gray {
  background: -webkit-linear-gradient(to left, var(--kBlack), var(--kLightBlack));
  background: -moz-linear-gradient(to left, var(--kBlack), var(--kLightBlack));
  background: -o-linear-gradient(to left, var(--kBlack), var(--kLightBlack));
  background: linear-gradient(to left, var(--kBlack), var(--kLightBlack));
  border: none;
  font-size: 18px;
}
.bg-grad-white {
  background: -webkit-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: -moz-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: -o-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  border: none;
  font-size: 18px;
}
.bg-grad-purple {
  background: -webkit-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: -moz-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: -o-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: linear-gradient(to left, var(--kPurple), var(--kPurple60));
  border: none;
  font-size: 18px;
}
</style>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" class="horizontal-spacer bg-grad-color-A">
        <b-navbar-brand href="#" to="/" class="nav-title-style" style="z-index: 99">
          <b-img src="logo_3d.png" class="nav-logo"/>
          <span>IcdCoder.</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" style="z-index: 99"></b-navbar-toggle>
        <b-collapse id="nav-collapse" style="z-index: 99" is-nav>
          <b-navbar-nav v-model="tabValue" class="ml-auto">
            <b-nav-item
              v-for="(link, index) in links"
              :key="index"
              :class="{
                'mx-0': true,
                'mx-md-3': true,
                'text-center': true,
                'nav-active': tabValue == index
              }"
              @click="routerTo(link.link)"
            >
              {{ link.title }}
            </b-nav-item>
          </b-navbar-nav>
          <div class="text-center">
            <b-button
              size="lg"
              variant="transparent"
              class="mb-2 font-size-btn"
              @click="lgFontSize = !lgFontSize"
            >
              <fa :icon="['fas', `search-${lgFontSize ? 'minus': 'plus'}`]" />
            </b-button>
          </div>
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
      lgFontSize: false,
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
        },
        {
          title: '模型設計',
          link: '/model_design'
        }
      ]
    }
  },
  head() {
    return {
      title: `${this.pageTitle} ${this.pageTitle? '-': ''} ICD Coder`,
      bodyAttrs: {
        style: this.fontSizeStyleStr,
      },
    }
  },
  mounted() {
    this.loadTabValue()
  },
  computed: {
    btnFS() { return this.lgFontSize? '26px': '18px' },
    h1() { return this.lgFontSize? '72px': '64px' },
    h2() { return this.lgFontSize? '56px': '48px' },
    h5() { return this.lgFontSize? '32px': '24px' },
    h6() { return this.lgFontSize? '26px': '18px' },
    navItem() { return this.lgFontSize? '1.25rem': '1rem' },
    cardTitle() { return this.lgFontSize? '44px': '36px' },
    cardText() { return this.lgFontSize? '24px': '16px' },
    dialogTitle() { return this.lgFontSize? '44px': '36px' },
    dialogContent() { return this.lgFontSize? '26px': '18px' },

    ftTitle() { return this.lgFontSize? '56px': '48px' },
    ftSubTitle() { return this.lgFontSize? '32px': '24px' },
    ftContent() { return this.lgFontSize? '26px': '18px' },
    diagPanelTitle() { return this.lgFontSize? '36px': '28px' },
    diagInput() { return this.lgFontSize? '1.5rem': '1rem' },

    icdCodeSquareWrap() { return this.lgFontSize? '115px': '90px' },
    icdCodeSquare() { return this.lgFontSize? '85px': '65px' },
    icdCode() { return this.lgFontSize? '22px': '14px' },
    icdTitle() { return this.lgFontSize? '24px': '16px' },
    icdContent() { return this.lgFontSize? '18px': '10px' },

    icdDialogCodeSquare() { return this.lgFontSize? '110px': '100px' },
    icdDialogCode() { return this.lgFontSize? '22px': '14px' },
    icdDialogTitle() { return this.lgFontSize? '32px': '24px' },
    icdDialogDesc() { return this.lgFontSize? '26px': '18px' },
    icdDialogPerc() { return this.lgFontSize? '24px': '16px' },
    fontSizeStyleStr() {
      const variables = [
        'btnFS', 'h1', 'h2', 'h5', 'h6', 'navItem', 'cardTitle', 'cardText', 'dialogTitle', 'dialogContent',
        'ftTitle', 'ftSubTitle', 'ftContent', 'diagPanelTitle', 'diagInput',
        'icdCodeSquareWrap', 'icdCodeSquare', 'icdCode', 'icdTitle', 'icdContent',
        'icdDialogCodeSquare', 'icdDialogCode', 'icdDialogTitle', 'icdDialogDesc', 'icdDialogPerc'
      ]
      let ret = ''
      for(const v of variables) ret += `--${v}: ${this[v]};`
      return ret
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
  --kBlack60: #2e3846a6;
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
.nav-logo {
  width: 40px;
  margin-top: -5px;
}
@media screen and (max-width: 600px){
  .nav-title-style {
    font-size: 30px;
  }
  .nav-logo {
    width: 35px;
  }
}
.navbar-toggler {
  font-size: 1rem;
  padding-left: .5rem;
  padding-right: .5rem;
}
.nav-item {
  font-size: var(--navItem);
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
.font-size-btn {
  color: var(--kLightBlack);
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
  .navbar.horizontal-spacer {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

/* -------------------- 標題及內文樣式 -------------------- */
h1 {
  color: var(--kBlack);
  font-size: var(--h1);
  font-weight: 900;
}
h2 {
  color: var(--kBlack);
  font-size: var(--h2);
  font-weight: 700;
}
h5 {
  color: var(--kLightBlack);
  font-size: var(--h5);
  font-weight: 500;
}
h6 {
  color: var(--kLightBlack);
  font-size: var(--h6);
  font-weight: 700;
}

/* -------------------- 主漸層按鈕 -------------------- */
.bg-grad-blue {
  background: -webkit-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: -moz-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: -o-linear-gradient(to left, var(--kBlue), var(--kBlue60));
  background: linear-gradient(to left, var(--kBlue), var(--kBlue60));
  border: none;
  font-size: var(--btnFS);
}
.bg-grad-gray {
  background: -webkit-linear-gradient(to left, var(--kBlack), var(--kBlack60));
  background: -moz-linear-gradient(to left, var(--kBlack), var(--kBlack60));
  background: -o-linear-gradient(to left, var(--kBlack), var(--kBlack60));
  background: linear-gradient(to left, var(--kBlack), var(--kBlack60));
  border: none;
  font-size: var(--btnFS);
}
.bg-grad-white {
  background: -webkit-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: -moz-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: -o-linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  background: linear-gradient(to bottom right, #FFFFFF, var(--kWhite30), #FFFFFF);
  border: none;
  font-size: var(--btnFS);
}
.bg-grad-purple {
  background: -webkit-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: -moz-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: -o-linear-gradient(to left, var(--kPurple), var(--kPurple60));
  background: linear-gradient(to left, var(--kPurple), var(--kPurple60));
  border: none;
  font-size: var(--btnFS);
}
</style>

<template>
  <el-container class="wrap-container" spellcheck="false">
    <!-- left aside draggable container -->
    <div class="aside-drag-container" :style="{width: sideWidth + 'px'}">
      <!-- connections -->
      <el-aside class="aside-connection">
        <Aside></Aside>
      </el-aside>

      <!-- drag area -->
      <div id="drag-resize-container">
        <div id="drag-resize-pointer"></div>
      </div>
    </div>

    <!-- right main container -->
    <el-container class='right-main-container'>
      <!-- tab container -->
      <el-main class='main-tabs-container'>
        <TitleBar></TitleBar>
        <Tabs></Tabs>
      </el-main>
    </el-container>

    <UpdateCheck></UpdateCheck>
  </el-container>
</template>

<script>
import Aside from '@/Aside';
import Tabs from '@/components/Tabs';
import UpdateCheck from '@/components/UpdateCheck';
import addon from './addon';
import customCssLoader from './customCssLoader';
import TitleBar from '@/components/TitleBar';

const injectStylesheet = (src) => {
  customCssLoader.loadCustomCss(src);
  customCssLoader.onCustomCssLoaded((content) => {
    let styleElement = document.getElementById('custom-css');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'custom-css';
      document.head.append(styleElement);
    }
    styleElement.innerHTML = content;
  }, (code, message) => {
    alert(message || code);
  });
};

export default {
  name: 'App',
  data() {
    return {
      sideWidth: 265,
    };
  },
  created() {
    this.$bus.$on('reloadSettings', () => {
      addon.reloadSettings();
    });

    // restore side bar width
    this.restoreSideBarWidth();
  },
  components: {
    TitleBar,
    Aside,
    Tabs,
    UpdateCheck,
  },
  methods: {
    bindSideBarDrag() {
      const that = this;
      const dragPointer = document.getElementById('drag-resize-pointer');

      function mousemove(e) {
        const mouseX = e.x;
        const dragSideWidth = mouseX - 17;

        if ((dragSideWidth > 200) && (dragSideWidth < 1500)) {
          that.sideWidth = dragSideWidth;
        }
      }

      function mouseup(e) {
        document.documentElement.removeEventListener('mousemove', mousemove);
        document.documentElement.removeEventListener('mouseup', mouseup);

        // store side bar with
        localStorage.sideWidth = that.sideWidth;
      }

      dragPointer.addEventListener('mousedown', (e) => {
        e.preventDefault();

        document.documentElement.addEventListener('mousemove', mousemove);
        document.documentElement.addEventListener('mouseup', mouseup);
      });
    },
    restoreSideBarWidth() {
      const { sideWidth } = localStorage;
      sideWidth && (this.sideWidth = sideWidth);
    },
    openHrefInBrowser() {
      const { shell } = require('electron');

      document.addEventListener('click', (event) => {
        const ele = event.target;

        if (ele && (ele.nodeName.toLowerCase() === 'a') && ele.href.startsWith('http')) {
          event.preventDefault();
          shell.openExternal(ele.href);
        }
      });
    },
    reloadSettings() {
      this.initFont();
      this.initZoom();
      this.loadCustomCss();
    },
    initFont() {
      const fontFamily = this.$storage.getFontFamily();
      document.body.style.fontFamily = fontFamily;
      // tell monaco editor
      this.$bus.$emit('fontInited', fontFamily);
    },
    initZoom() {
      let zoomFactor = this.$storage.getSetting('zoomFactor');
      zoomFactor = zoomFactor || 1.0;

      const { webFrame } = require('electron');
      webFrame.setZoomFactor(zoomFactor);
    },
    loadCustomCss() {
      const customCss = this.$storage.getCustomCss();
      if (customCss) {
        injectStylesheet(customCss);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$bus.$emit('update-check');
    }, 2000);

    this.bindSideBarDrag();
    // addon init setup
    addon.setup();
  },
};
</script>

<style type="text/css">
html {
  height: 100%;
}

body {
  height: 100%;
  padding: 8px;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

  /*fix body scroll-y caused by tooltip in table*/
  overflow: hidden;
}

button, input, textarea, .vjs__tree {
  font-family: inherit !important;
}

a {
  color: #8e8d8d;
}

/*fix el-select bottom scroll bar*/
.el-scrollbar__wrap {
  overflow-x: hidden;
}

/*scrollbar style start*/
::-webkit-scrollbar {
  width: 9px;
}

/*track*/
::-webkit-scrollbar-track {
  background: #eaeaea;
  border-radius: 4px;
}

.dark-mode ::-webkit-scrollbar-track {
  background: #425057;
}

/*track hover*/
::-webkit-scrollbar-track:hover {
  background: #e0e0dd;
}

.dark-mode ::-webkit-scrollbar-track:hover {
  background: #495961;
}

/*thumb*/
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #c1c1c1;
}

.dark-mode ::-webkit-scrollbar-thumb {
  background: #5a6f7a;
}

/*thumb hover*/
::-webkit-scrollbar-thumb:hover {
  background: #7f7f7f;
}

.dark-mode ::-webkit-scrollbar-thumb:hover {
  background: #6a838f;
}

/*scrollbar style end*/

/*list index*/
li .list-index {
  color: #828282;
  /*font-size: 80%;*/
  user-select: none;
  margin-right: 10px;
  min-width: 28px;
}

.dark-mode li .list-index {
  color: #adacac;
}

.wrap-container {
  height: 100%;
}

.aside-drag-container {
  position: relative;
  user-select: none;
  /*max-width: 50%;*/
}

.aside-connection {
  height: 100%;
  width: 100% !important;
  border-right: 1px solid #e4e0e0;
  overflow: hidden;
}

/*fix right container imdraggable*/
.right-main-container {
  width: 10%;
}

.right-main-container .main-tabs-container {
  overflow-y: hidden;
  padding-top: 0px;
  padding-right: 4px;
}

.el-message-box .el-message-box__message {
  word-break: break-all;
  overflow-y: auto;
  max-height: 80vh;
}

#drag-resize-container {
  position: absolute;
  /*height: 100%;*/
  width: 10px;
  right: -12px;
  top: 0px;
}

#drag-resize-pointer {
  position: fixed;
  height: 100%;
  width: 10px;
  cursor: col-resize;
}

#drag-resize-pointer::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 20px;
  border-left: 1px solid #adabab;
  border-right: 1px solid #adabab;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.dark-mode #drag-resize-pointer::after {
  border-left: 1px solid #b9b8b8;
  border-right: 1px solid #b9b8b8;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>

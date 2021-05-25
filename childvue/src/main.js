import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from "single-spa-vue"     //1.下載，vue為single-spa-vue，react為single-spa-react
Vue.config.productionTip = false

// new Vue({
//   el:'vue',     //掛載到父應用id為vue的節點上
//   router,
//   store,
//   render: h => h(App)
// })
const appOptions = {
  el:'#childvue',     //掛載到父應用id為childvue的節點上
  router,
  store,
  render: h => h(App)
}
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})
console.log('appOptions',appOptions)
// 支持应用独立运行、部署，不依赖于基座应用
if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}
// 如果是微前端模式下，single-spa会在window上挂在一个singleSpaNavigate的属性。
// 这时候我们需要将public_path改成子项目中的地址。
// if(window.singleSpaNavigate){
//   __webpack_public_path__ = 'http://localhost:10000/'
// }
// //这个是让子项目能够单独的运行
// if(!window.singleSpaNavigate){
//   delete appOptions.el;
//   new Vue(appOptions).$mount('#app');
// }

//定好協議，父應用調用方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
//需要父應用加載子應用，將子應用打包lib放在父應用中

// .$mount('#app')

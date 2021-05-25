import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {registerApplication,start} from 'single-spa'
Vue.config.productionTip = false
//加載哪個app，加載哪個方法(promise)
// 动态加载url
async function loadScript(url){
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
registerApplication('childvue',
async()=>{
  console.log("加載模塊")
  await loadScript(`http://localhost:10000/js/chunk-vendors.js`);
  await loadScript(`http://localhost:10000/js/app.js`)
  return window.singleVue;
},location=>location.pathname.startsWith('/childvue'))  //以vue開始的頁面
start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

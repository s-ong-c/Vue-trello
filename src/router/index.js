import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login ={template:'<div>LOGIN PAGE</div>'}
const NotFound= { template :'<div>PAGE NOT FOUND</div>'}
// const routes ={
//   '/':App,
//   '/login':Login
// }
// 라우트 정의

// 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.

const router = new VueRouter({
  mode:'history',  // /#/해쉬 백 나오지 않게 하기위해서 설정 
  routes :[
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})

export default router
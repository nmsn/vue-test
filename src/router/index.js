import Vue from "vue";
//1.导入
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
//2.模块化机制 使用Router
Vue.use(Router);

//3.创建路由器对象
const router = new Router({
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;

import Vue from "vue";
//1.导入
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Console from "../views/Console.vue";
import ConsoleLog from "../views/ConsoleLog.vue";
import Debugger from "../views/Debugger.vue";
import ChromeDevtools from "../views/ChromeDevtools.vue";
import VueDevtools from "../views/VueDevtools.vue";

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
    {
      path: "/console",
      component: Console,
    },
    {
      path: "/consolelog",
      component: ConsoleLog,
    },
    {
      path: "/debugger",
      component: Debugger,
    },
    {
      path: "/chromedevtools",
      component: ChromeDevtools,
    },
    {
      path: "/vuedevtools",
      component: VueDevtools,
    },
  ],
});

export default router;

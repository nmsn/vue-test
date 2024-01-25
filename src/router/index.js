import Vue from "vue";
//1.导入
import Router from "vue-router";
// import Console from "../views/Console.vue";
// import ConsoleLog from "../views/ConsoleLog.vue";
// import Debugger from "../views/Debugger.vue";
// import ChromeDevtools from "../views/ChromeDevtools.vue";
// import VueDevtools from "../views/VueDevtools.vue";

Vue.use(Router);

//3.创建路由器对象
const router = new Router({
  routes: [
    {
      path: "/home",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
      path: "/console",
      component: () =>
        import(/* webpackChunkName: "console" */ "../views/Console.vue"),
    },
    {
      path: "/consolelog",
      component: () =>
        import(/* webpackChunkName: "consoleLog" */ "../views/ConsoleLog.vue"),
    },
    {
      path: "/debugger",
      component: () =>
        import(/* webpackChunkName: "debugger" */ "../views/Debugger.vue"),
    },
    {
      path: "/chromedevtools",
      component: () =>
        import(
          /* webpackChunkName: "chromedevtools" */ "../views/ChromeDevtools.vue"
        ),
    },
    {
      path: "/vuedevtools",
      component: () =>
        import(
          /* webpackChunkName: "vuedevtools" */ "../views/VueDevtools.vue"
        ),
    },
  ],
});

export default router;

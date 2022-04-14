import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import(/* webpackChunkName: "direct" */ "@/views/direct"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "@/views/explore"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile/post"),
      },
      {
        path: "igtv",
        name: "ProfileIgtv",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile/igtv"),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile/igtv"),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile/save"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

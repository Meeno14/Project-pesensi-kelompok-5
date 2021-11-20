import Vue from "vue";
import Router from "vue-router";
import home from "@/components/beranda.vue";
import awal from "@/components/awal.vue";
import kontak from "@/components/kontak.vue";
import tentang from "@/components/tentang.vue";
import login from "@/components/login.vue";
import Link from "@/components/link.vue";

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/beranda",
      name: "home",
      component: home,
    },
    {
      path: "/",
      name: "awal",
      component: awal,
    },
    {
      path: "/kontak",
      name: "kontak",
      component: kontak,
    },
    {
      path: "/tentang",
      name: "tentang",
      component: tentang,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/link",
      name: "Link",
      component: Link,
    },
  ];
}

const link = new Router({
  mode: "history",
  routes: configRoutes(),
});
export default link;

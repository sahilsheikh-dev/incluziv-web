import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Login from "@/components/Login";
import Register from "@/components/Register";
import ProfileStep1 from "@/components/ProfileStep1";
import ProfileStep2 from "@/components/ProfileStep2";
import ProfileStep3 from "@/components/ProfileStep3";
import ProfileStep4 from "@/components/ProfileStep4";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloHomepageWorld",
      component: Homepage
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/profilestep1",
      name: "Profile Step 1",
      component: ProfileStep1
    },
    {
      path: "/profilestep2",
      name: "Profile Step 2",
      component: ProfileStep2
    },
    {
      path: "/profilestep3",
      name: "Profile Step 3",
      component: ProfileStep3
    },
    {
      path: "/profilestep4",
      name: "Profile Step 4",
      component: ProfileStep4
    }
  ]
});

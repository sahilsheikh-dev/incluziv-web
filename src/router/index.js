import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import CandidateSignup from "@/components/CandidateSignup";
import CandidateSignin from "@/components/CandidateSignin";
import RecruiterSignup from "@/components/RecruiterSignup";
import ProfileStep1 from "@/components/ProfileStep1";
import ProfileStep2 from "@/components/ProfileStep2";
import ProfileStep3 from "@/components/ProfileStep3";
import ProfileStep4 from "@/components/ProfileStep4";
import JobSearch from "@/components/JobSearch";
import JobActivities from "@/components/JobActivities";
import Inbox from "@/components/Inbox";
import Profile from "@/components/Profile";
import PostJob from "@/components/PostJob";
import Targeting from "@/components/Targeting";
import RecruiterDashboard from "@/components/RecruiterDashboard";
import SearchCandidate from "@/components/SearchCandidate";
import Settings from "@/components/Settings";
import CandidateResult from "@/components/CandidateResult";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/candidateSignup",
      name: "CandidateSignup",
      component: CandidateSignup
    },
    {
      path: "/candidateSignin",
      name: "CandidateSignin",
      component: CandidateSignin
    },
    {
      path: "/recruiterSignup",
      name: "RecruiterSignup",
      component: RecruiterSignup
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
    },
    {
      path: "/jobSearch",
      name: "JobSearch",
      component: JobSearch
    },
    {
      path: "/jobActivities",
      name: "JobActivities",
      component: JobActivities
    },
    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/postJob",
      name: "PostJob",
      component: PostJob
    },
    {
      path: "/targeting",
      name: "Targeting",
      component: Targeting
    },
    {
      path: "/recruiterDashboard",
      name: "RecruiterDashboard",
      component: RecruiterDashboard
    },
    {
      path: "/searchCandidate",
      name: "SearchCandidate",
      component: SearchCandidate
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/candidateResult",
      name: "CandidateResult",
      component: CandidateResult
    }
  ]
});

<template>
  <div class="hello">
    <Navbar />
    <Hero />
    <SearchPreference />
    <RecentJobs />
    <FeaturedCompanies />
    <Testimonials />
    <Blog />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./elements/Navbar.vue";
import Footer from "./elements/Footer.vue";
import Hero from "./elements/Hero.vue";
import SearchPreference from "./elements/SearchPreference.vue";
import RecentJobs from "./elements/RecentJobs.vue";
import FeaturedCompanies from "./elements/FeaturedCompanies.vue";
import Testimonials from "./elements/Testimonials.vue";
import Blog from "./elements/Blog.vue";
import ContactForm from "./elements/ContactForm.vue";

export default {
  components: {
    Navbar,
    Hero,
    SearchPreference,
    RecentJobs,
    FeaturedCompanies,
    Testimonials,
    Blog,
    ContactForm,
    Footer
  },
  name: "Homepage",
  data() {
    return {
      msg: "Welcome to Homepage"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

<template>
  <section class="blog-section py-5 my-5">
    <div class="py-5 container">
      <p class="text-primary mb-0" style="font-size: 14px;">
        CONTENT
      </p>
      <h1 class="text-dark fw-bold mt-0 mb-5">Blogs & Newsletters</h1>
      <div class="my-3">
        <button
          id="blog-toggle"
          class="fw-bold text-decoration-none text-primary border border-primary border-top-0 border-start-0 border-end-0"
          @click="currentSetionBlog"
          style="border-width: 3px !important;"
        >
          Blog
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          id="newsletter-toggle"
          class="fw-bold text-decoration-none text-secondary border border-primary border-top-0 border-start-0 border-end-0"
          @click="currentSetionNews"
          style="border-width: 3px !important;"
        >
          Newsletters
        </button>
      </div>

      <div id="blog" class="blog d-block">
        <div class="row mt-5">
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog1.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog2.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog3.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="newsletter" class="newsletter d-none">
        <div class="row mt-5">
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog2.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog3.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4">
            <img
              class="shadow-lg image-thumbnail w-100"
              src="../../assets/img/blog1.png"
              alt="logo"
            />
            <div class="mt-4 p-2">
              <h6 class="fw-bold">How to crack Bug Companies?</h6>
              <p class="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button
                class="btn px-4 fw-bold btn-hover-white"
                style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 14px;"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let currentSetion = "blog";
export default {
  name: "App",
  methods: {
    currentSetionBlog: function() {
      currentSetion = "blog";

      document.getElementById("blog").classList.remove("d-none");
      document.getElementById("blog").classList.add("d-block");

      document.getElementById("newsletter").classList.remove("d-block");
      document.getElementById("newsletter").classList.add("d-none");

      document.getElementById("blog-toggle").classList.remove("text-secondary");
      document.getElementById("blog-toggle").classList.add("text-primary");

      document.getElementById("newsletter-toggle").classList.remove("text-primary");
      document.getElementById("newsletter-toggle").classList.add("text-secondary");
      console.log(currentSetion);
    },
    currentSetionNews: function() {
      currentSetion = "newsletter";

      document.getElementById("newsletter").classList.remove("d-none");
      document.getElementById("newsletter").classList.add("d-block");

      document.getElementById("blog").classList.remove("d-blovk");
      document.getElementById("blog").classList.add("d-none");

      document.getElementById("newsletter-toggle").classList.remove("text-secondary");
      document.getElementById("newsletter-toggle").classList.add("text-primary");

      document.getElementById("blog-toggle").classList.remove("text-primary");
      document.getElementById("blog-toggle").classList.add("text-secondary");
      console.log(currentSetion);
    }
  }
};
</script>

<style>
@import "../../assets/css/main.css";
</style>

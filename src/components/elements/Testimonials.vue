<template>
  <section class="testinomial-section pt-5 mt-5">
    <div class="pt-5 container">
      <div class="row">
        <div
          class="col-md-4 col-lg-4 col-xl-4 text-center text-md-start text-lg-start text-xl-start"
        >
          <p class="mb-0 mt-3" style="font-size: 18px; color: #28B7B6;">
            CLIENTS TESTIMONIALS
          </p>
          <h1 class="text-dark fw-bold mt-0 mb-3">
            What our Clients says about us
          </h1>
          <p class="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quae
            maxime eos odit id aspernatur. Consequatur, nihil inventore. Ut
            similique magni ipsum repellat? Earum laudantium libero praesentium
            odio animi blanditiis.
          </p>
        </div>
        <div class="col-md-8 col-lg-8 col-xl-8 text-center">
          <div class="testimonial-image-section">
            <div
              class="testinomial-image testinomial-1 w-75 text-start p-4 bg-light"
              v-on:mouseover="testinomial1()"
              v-on:mouseleave="testinomialHover()"
              id="testinomial-1"
            >
              <div class="bg-light text-dark">
                <p class="fw-bold mt-0">
                  "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                  odit omnis Consequatur"
                </p>
                <div class="row m-1">
                  <div class="col-auto p-0 rounded-circle">
                    <img
                      class="img-fluid w-100 rounded-circle"
                      style="width: 50px !important; height: 50px !important; object-fit: cover;"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                  </div>
                  <div
                    class="col-auto my-1 py-1"
                    style="font-size: 12px !important;"
                  >
                    <p class="my-0">Megan Novalum</p>
                    <p class="text-secondary my-0">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="testinomial-image testinomial-2 w-75 text-start p-4 bg-light text-dark"
              v-on:mouseover="testinomial2()"
              v-on:mouseleave="testinomialHover()"
              id="testinomial-2"
            >
              <div class="bg-light text-dark">
                <p class="fw-bold mt-0">
                  "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                  odit omnis Consequatur"
                </p>
                <div class="row m-1">
                  <div class="col-auto p-0 rounded-circle">
                    <img
                      class="img-fluid w-100 rounded-circle"
                      style="width: 50px !important; height: 50px !important; object-fit: cover;"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                  </div>
                  <div
                    class="col-auto my-1 py-1"
                    style="font-size: 12px !important;"
                  >
                    <p class="my-0">Megan Novalum</p>
                    <p class="text-secondary my-0">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="testinomial-image testinomial-3 w-75 text-start p-4 bg-light text-dark"
              v-on:mouseover="testinomial3()"
              v-on:mouseleave="testinomialHover()"
              id="testinomial-3"
            >
              <div class="bg-light text-dark">
                <p class="fw-bold mt-0">
                  "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                  odit omnis Consequatur"
                </p>
                <div class="row m-1">
                  <div class="col-auto p-0 rounded-circle">
                    <img
                      class="img-fluid w-100 rounded-circle"
                      style="width: 50px !important; height: 50px !important; object-fit: cover;"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                  </div>
                  <div
                    class="col-auto my-1 py-1"
                    style="font-size: 12px !important;"
                  >
                    <p class="my-0">Megan Novalum</p>
                    <p class="text-secondary my-0">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="testinomial-image testinomial-4 w-75 text-start p-4 bg-light text-dark"
              v-on:mouseover="testinomial4()"
              v-on:mouseleave="testinomialHover()"
              id="testinomial-4"
            >
              <div class="bg-light text-dark">
                <p class="fw-bold mt-0">
                  "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                  odit omnis Consequatur"
                </p>
                <div class="row m-1">
                  <div class="col-auto p-0 rounded-circle">
                    <img
                      class="img-fluid w-100 rounded-circle"
                      style="width: 50px !important; height: 50px !important; object-fit: cover;"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                  </div>
                  <div
                    class="col-auto my-1 py-1"
                    style="font-size: 12px !important;"
                  >
                    <p class="my-0">Megan Novalum</p>
                    <p class="text-secondary my-0">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    testinomialHover: function() {
      document.getElementById("testinomial-1").style.transform = "scale(1)";
      document.getElementById("testinomial-2").style.transform = "scale(1)";
      document.getElementById("testinomial-3").style.transform = "scale(1)";
      document.getElementById("testinomial-4").style.transform = "scale(1)";
    },
    testinomial1: function() {
      document.getElementById("testinomial-1").style.transform = "scale(1.1)";
      document.getElementById("testinomial-2").style.transform = "none";
      document.getElementById("testinomial-3").style.transform = "none";
      document.getElementById("testinomial-4").style.transform = "scale(1)";
    },
    testinomial2: function() {
      document.getElementById("testinomial-1").style.transform = "none";
      document.getElementById("testinomial-2").style.transform = "scale(1.1)";
      document.getElementById("testinomial-3").style.transform = "none";
      document.getElementById("testinomial-4").style.transform = "scale(1)";
    },
    testinomial3: function() {
      document.getElementById("testinomial-1").style.transform = "none";
      document.getElementById("testinomial-2").style.transform = "scale(1)";
      document.getElementById("testinomial-3").style.transform = "scale(1.1)";
      document.getElementById("testinomial-4").style.transform = "none";
    },
    testinomial4: function() {
      document.getElementById("testinomial-1").style.transform = "none";
      document.getElementById("testinomial-2").style.transform = "scale(1)";
      document.getElementById("testinomial-3").style.transform = "none";
      document.getElementById("testinomial-4").style.transform = "scale(1.1)";
    }
  }
};
</script>

<style>
@import "../../assets/css/main.css";
</style>

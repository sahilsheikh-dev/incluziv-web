<template>
  <div class="targeting">
    <Navbar />
    <div class="targeting-section">
      <div class="row my-3">
        <div class="col-md-4 col-lg-4 col-xl-4">
          <div class="job-search-side-card mx-3">
            <div class="text-center">
              <v-expansion-panels :value="opened">
                <v-expansion-panel>
                  <v-expansion-panel-content>
                    <div class="text-start mt-4">
                      <h6 class="fw-bold">
                        Few Guidelines
                      </h6>
                      <ul class="guideline-text">
                        <li>
                          Proper formatting of text/content of the posting with
                          clear spaces and standard bullets to be used.
                        </li>
                        <li>No short forms/abbreviations to be used.</li>
                        <li>No spelling mistakes in the text.</li>
                        <li>Content should be short & crisp.</li>
                      </ul>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-xl-7 px-4">
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Targeting
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Mode Details
          </p>
          <div class="jobs-form">
            <form action="#" class="text-start">
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Insdustry (Select upto 5)</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Compeny industry (, seperated)"
                    required
                  />
                </div>
              </div>
              <div class="user-details row">
                <div class="col-md-6 col-lg-6 col-xl-6 mt-4 w-100">
                  <p class="details fw-bold">Category</p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected>Select</option>
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-4 w-100">
                  <p class="details fw-bold">Functional Area</p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected>Select</option>
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
              </div>
              <div class="row d-flex text-center mt-4">
                <p class="text-start fw-bold mb-0">
                  Increase your reach to diversity candidates
                </p>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2 mt-0">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-1.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    female
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-2.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    Queen
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-3.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    Able
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-4.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    Veteran
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-5.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    Silvergen
                  </p>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Annual Salary</p>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Select Min (in lacs)</option
                    >
                    <option value="1">12</option>
                    <option value="2">14</option>
                    <option value="3">18</option>
                    <option value="4">30</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Select Max (in lacs)</option
                    >
                    <option value="1">12</option>
                    <option value="2">14</option>
                    <option value="3">18</option>
                    <option value="4">30</option>
                  </select>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Graduting Year</p>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Min batch</option
                    >
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Max Batch</option
                    >
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
              </div>
              <div class="mt-4">
                <p class="fw-bold">
                  Tags
                </p>
                <input
                  type="text"
                  class="block x input-border-pink p-2 px-3"
                  placeholder="+ Add tags (, Seperated)"
                />
              </div>

              <div class="button">
                <!-- <input type="submit" value="Next" /> -->
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="#/recruiterDashboard"
                  >Post</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./elements/Navbar.vue";
import Footer from "./elements/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  name: "Targeting",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Targeting"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

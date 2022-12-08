<template>
  <div class="post-job">
    <Navbar />
    <div class="postjob-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-center">
              <v-expansion-panels :value="opened">
                <v-expansion-panel class="pb-4 card-height">
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
        <div class="col-md-6 col-lg-6 col-xl-6">
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Post Job
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Basic Details
          </p>
          <div class="jobs-form">
            <form class="text-start" action="" method="post">
              <div>
                <h5 class="fw-bold mt-4">
                  Job Title
                  <i
                    class="bi bi-asterisk"
                    style="font-size: 10px; vertical-align: top; color: rgb(237, 62, 97);"
                  ></i>
                </h5>
                <input
                  type="text"
                  class="form-control x"
                  style="border-radius: 0;"
                  placeholder="Write a title that appropriately describes the job"
                  required
                />
              </div>
              <div>
                <h5 class="fw-bold mt-4">
                  Location
                  <i
                    class="bi bi-asterisk"
                    style="font-size: 10px; vertical-align: top; color: rgb(237, 62, 97);"
                  ></i>
                </h5>
                <input
                  type="text"
                  class="form-control x"
                  style="border-radius: 0;"
                  placeholder="+ Add Location"
                  required
                />
              </div>
              <div class="row mt-1">
                <h5 class="fw-bold mt-4">
                  Years of Experience
                  <i
                    class="bi bi-asterisk"
                    style="font-size: 10px; vertical-align: top; color: rgb(237, 62, 97);"
                  ></i>
                </h5>
                <div class="col-md-6 col-lg-6 col-xl-6 text-start">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Select Min</option
                    >
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 text-start">
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Select Max</option
                    >
                    <option value="1">2</option>
                    <option value="2">4</option>
                    <option value="3">8</option>
                    <option value="4">10</option>
                  </select>
                </div>
              </div>
              <div>
                <h5 class="fw-bold mt-4">
                  Location
                  <i
                    class="bi bi-asterisk"
                    style="font-size: 10px; vertical-align: top; color: rgb(237, 62, 97);"
                  ></i>
                </h5>
                <textarea
                  class="w-100 form-control x input-border-pink mt-4"
                  style="border-radius: 0;"
                  name="job-description"
                  id="job-description"
                  rows="10"
                ></textarea>
              </div>
              <div class="button">
                <!-- <input type="submit" value="Next" /> -->
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="#/targeting"
                  >Next</a
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
  name: "PostJob",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Post Job"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

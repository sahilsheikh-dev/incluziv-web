<template>
  <div class="jobsearch">
    <Navbar />
    <div class="jobsearch-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-center">
              <v-expansion-panels :value="opened">
                <v-expansion-panel class="pb-4 card-height">
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3">
                      Applied Jobs <i class="bi bi-chevron-down"></i>
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="text-start">
                      <h6 class="fw-bold">
                        Filter Conversations
                      </h6>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Viewed"
                        />
                        <label class="text-dark">
                          Viewed
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Contacted"
                        />
                        <label class="text-dark">
                          Contacted
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Shortlisted"
                        />
                        <label class="text-dark">
                          Shortlisted
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Not Shortlisted"
                        />
                        <label class="text-dark">
                          Not Shortlisted
                        </label>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div
          class="col-md-7 col-lg-7 col-xl-7 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 card-margin-x"
        >
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Activity
          </h2>
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Showing activities updates on applied jobs
          </p>
          <hr />
          <div class="jobs-list">
            <div
              class="row my-4 bg-light shadow-lg p-2"
              style="border: 1px solid #000000; border-radius: 30px;"
            >
              <div
                class="col-2 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <img
                  class="img-fluid w-100"
                  src="../assets/img/tcs.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-10 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p style="font-size: 12px;">
                    1-2 years of experience | Gurgaon | Part Time
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  <span class="text-danger">STATUS</span>: VIEWED
                </button>
              </div>
            </div>
            <div
              class="row my-4 bg-light shadow-lg p-2"
              style="border: 1px solid #000000; border-radius: 30px;"
            >
              <div
                class="col-2 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <img
                  class="img-fluid w-100"
                  src="../assets/img/tcs.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-10 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p style="font-size: 12px;">
                    1-2 years of experience | Gurgaon | Part Time
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  <span class="text-danger">STATUS</span>: CONTACTED
                </button>
              </div>
            </div>
            <div
              class="row my-4 bg-light shadow-lg p-2"
              style="border: 1px solid #000000; border-radius: 30px;"
            >
              <div
                class="col-2 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <img
                  class="img-fluid w-100"
                  src="../assets/img/tcs.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-10 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p style="font-size: 12px;">
                    1-2 years of experience | Gurgaon | Part Time
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  <span class="text-danger">STATUS</span>: NOT SHORTLISTED
                </button>
              </div>
            </div>
            <div
              class="row my-4 bg-light shadow-lg p-2"
              style="border: 1px solid #000000; border-radius: 30px;"
            >
              <div
                class="col-2 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <img
                  class="img-fluid w-100"
                  src="../assets/img/tcs.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-10 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p style="font-size: 12px;">
                    1-2 years of experience | Gurgaon | Part Time
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  <span class="text-danger">STATUS</span>: VIEWED
                </button>
              </div>
            </div>
            <div
              class="row my-4 bg-light shadow-lg p-2"
              style="border: 1px solid #000000; border-radius: 30px;"
            >
              <div
                class="col-2 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <img
                  class="img-fluid w-100"
                  src="../assets/img/tcs.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-10 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p style="font-size: 12px;">
                    1-2 years of experience | Gurgaon | Part Time
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  <span class="text-danger">STATUS</span>: VIEWED
                </button>
              </div>
            </div>
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
  name: "JobActivities",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Candidate Search"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

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
                      Inbox <i class="bi bi-chevron-down"></i>
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
                          value="All"
                        />
                        <label class="text-dark">
                          All
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Unread"
                        />
                        <label class="text-dark">
                          Unread
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="inbox-status"
                          id="inbox-status"
                          value="Read"
                        />
                        <label class="text-dark">
                          Read
                        </label>
                      </div>
                      <div class="input-group my-3 input-border-pink">
                        <span
                          class="input-group-text input-border-pink"
                          style="border-radius: 0; background-color: rgb(237, 62, 97);"
                        >
                          <i class="bi bi-search text-light"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search by job/company name"
                          style="border-radius: 0;"
                        />
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
            Inbox
          </h2>
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Check here for any new notification/mail/job opportunities
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
                class="col-10 col-md-8 col-lg-8 col-x-8 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">TCS</h5>
                  <p style="font-size: 12px;">
                    We are intrested in your CV! Please confirm for the
                    interview...
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  REPLY
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
                class="col-10 col-md-8 col-lg-8 col-x-8 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">TCS</h5>
                  <p style="font-size: 12px;">
                    We are intrested in your CV! Please confirm for the
                    interview...
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  REPLY
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
                class="col-10 col-md-8 col-lg-8 col-x-8 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">TCS</h5>
                  <p style="font-size: 12px;">
                    We are intrested in your CV! Please confirm for the
                    interview...
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  REPLY
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
                class="col-10 col-md-8 col-lg-8 col-x-8 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">TCS</h5>
                  <p style="font-size: 12px;">
                    We are intrested in your CV! Please confirm for the
                    interview...
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  REPLY
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
                class="col-10 col-md-8 col-lg-8 col-x-8 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">TCS</h5>
                  <p style="font-size: 12px;">
                    We are intrested in your CV! Please confirm for the
                    interview...
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px; font-size: 12px;"
                >
                  REPLY
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
  name: "Inbox",
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
@import "../assets/css/index.css";
</style>

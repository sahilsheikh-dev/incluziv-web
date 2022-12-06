<template>
  <div class="recruiter-dahboard">
    <Navbar />
    <div class="recruiter-dahboard-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-start">
              <v-expansion-panels :value="opened">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3 text-start">
                      <i class="bi bi-clock-history guideline-text"></i> &nbsp;
                      Recent Searches
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="recent-candidate-searches px-2">
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0" style="font-size: 14px;">
                          Visa Counseller | 8 Yrs Exp. | Gurgaon
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0" style="font-size: 14px;">
                          Software Dev. | 8 Yrs Exp. | Bangalore
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0" style="font-size: 14px;">
                          Business Analyst | 3 Yrs Exp. | Mumbai
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3 text-start">
                      <i class="bi bi-clock-history guideline-text"></i> &nbsp;
                      Saved Searches
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="recent-candidate-searches px-2">
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0" style="font-size: 14px;">
                          Visa Counseller | 8 Yrs Exp. | Gurgaon
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0" style="font-size: 14px;">
                          Software Dev. | 8 Yrs Exp. | Bangalore
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Search Candidate
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Employment Details
          </p>
          <div class="jobs-form">
            <form action="#" class="text-start">
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Functional Area</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Functional Area"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Industry</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Industry"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Company</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Company (, seperated)"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Designation</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Designation"
                    required
                  />
                </div>
              </div>
              <div class="user-details row mt-2">
                <p class="details fw-bold mt-4 mb-0">
                  Notice Period / Availability to Join
                  <i class="bi bi-question-circle guideline-text"></i>
                </p>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45"
                    >
                      <option class="text-start" disabled selected
                        >eg. 15</option
                      >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                    </select>
                    <div class="input-group-append">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Days</span
                      >
                    </div>
                  </div>
                </div>
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
  name: "SearchCandidateEmploymentDetails",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Search Candidate Employment Details"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

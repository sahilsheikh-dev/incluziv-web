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
                        <p class="fw-bold mb-0">
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
                        <p class="fw-bold mb-0">
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
                        <p class="fw-bold mb-0">
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
                        <p class="fw-bold mb-0">
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
                        <p class="fw-bold mb-0">
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
        <div
          class="col-md-6 col-lg-6 col-xl-6 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 card-margin-x"
        >
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Search Candidate
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Enter Details
          </p>
          <div class="jobs-form">
            <form action="#" class="text-start">
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Keywords</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Keywords like skills, company, destination & company (, seperated)"
                    required
                  />
                </div>
              </div>
              <div class="user-details row mt-2">
                <p class="details fw-bold mt-4 mb-0">IT Skills</p>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="Add Skill"
                    required
                  />
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Add Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Experience</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Min Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 w-100 text-center">
                  <p
                    class="fw-bold text-center pt-2"
                    style="color: rgb(237, 62, 97) !important;"
                  >
                    to
                  </p>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Max Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
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
              <div class="user-details mt-3 row">
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <p class="details fw-bold">
                    Current Location of Candidate
                  </p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Add Current Location</option
                    >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <p class="details fw-bold">
                    Preferred Location of Candidate
                  </p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Add Preferred Location</option
                    >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Annual Salary</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Min Salary</option
                      >
                      <option value="5LPA">5LPA</option>
                      <option value="10LPA">10LPA</option>
                      <option value="18LPA">18LPA</option>
                      <option value="50LPA">50LPA</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 w-100 text-center">
                  <p
                    class="fw-bold text-center pt-2"
                    style="color: rgb(237, 62, 97) !important;"
                  >
                    to
                  </p>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Max Salary</option
                      >
                      <option value="5LPA">5LPA</option>
                      <option value="10LPA">10LPA</option>
                      <option value="18LPA">18LPA</option>
                      <option value="50LPA">50LPA</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Employment Details
              </p>
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
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >eg. 15</option
                      >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                    </select>
                    <div class="input-group-append w-25 input-border-pink">
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
  name: "SearchCandidate",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Search Candidate"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

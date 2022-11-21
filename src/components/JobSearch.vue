<template>
  <div class="jobsearch">
    <Navbar />
    <div class="jobsearch-section">
      <div class="row my-3">
        <div class="col-md-4 col-lg-4 col-xl-4">
          <div class="job-search-side-card mx-5">
            <div class="text-center">
              <v-expansion-panels>
                <v-expansion-panel class="pb-4">
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3">
                      Search Jobs <i class="bi bi-chevron-down"></i>
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="text-start">
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Skills or Title
                        </h6>
                        <input
                          class="input-border-pink py-2 px-3 w-100"
                          type="text"
                          name="skills"
                          id="skills"
                          placeholder="Enter skills, e.g. Java, Python"
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Job Functions
                        </h6>
                        <input
                          class="input-border-pink py-2 px-3 w-100"
                          type="text"
                          name="functions"
                          id="functions"
                          placeholder="e.g. Data Science/Machine Learning"
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Diversity
                        </h6>
                        <select
                          class="input-border-pink px-3 w-100"
                          name="diversity"
                          id="diversity"
                        >
                          <option selected disabled
                            >Select your Diversity</option
                          >
                          <option value="Diversity 1">Diversity 1</option>
                          <option value="Diversity 2">Diversity 2</option>
                          <option value="Diversity 3">Diversity 3</option>
                        </select>
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Indusries
                        </h6>
                        <select
                          class="input-border-pink px-3 w-100"
                          name="indusrty"
                          id="indusrty"
                        >
                          <option selected disabled
                            >Select your Indusrty</option
                          >
                          <option value="Indusrty 1">Indusrty 1</option>
                          <option value="Indusrty 2">Indusrty 2</option>
                          <option value="Indusrty 3">Indusrty 3</option>
                        </select>
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Locations
                        </h6>
                        <input
                          class="input-border-pink py-2 px-3 w-100"
                          type="text"
                          name="location"
                          id="location"
                          placeholder="e.g. Bangalore, Pune, Mumbai, etc"
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Companies
                        </h6>
                        <input
                          class="input-border-pink py-2 px-3 w-100"
                          type="text"
                          name="company"
                          id="company"
                          placeholder="e.g. Amazon, Microsoft, etc."
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Company Size
                        </h6>
                        <select
                          class="input-border-pink px-3 w-100"
                          name="company-size"
                          id="company-size"
                        >
                          <option selected disabled>Company Size</option>
                          <option value="Company Size 1">Company Size 1</option>
                          <option value="Company Size 2">Company Size 2</option>
                          <option value="Company Size 3">Company Size 3</option>
                        </select>
                      </div>
                      <div class="input-group my-3">
                        <input
                          type="text"
                          class="form-control px-3"
                          style="border-radius: 0;"
                          placeholder="4+"
                        />
                        <span
                          class="input-group-text input-border-pink text-light"
                          style="border-radius: 0; background-color: rgb(237, 62, 97);"
                        >
                          Years
                        </span>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                  <hr class="w-75 mx-auto mt-0" />
                  <a
                    class="text-decoration-none text-dark fw-bold"
                    href="#/jobActivities"
                    >Applied Jobs</a
                  >
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-7 col-xl-7">
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Search Results
          </h2>
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Showing jobs opportunities
          </p>
          <hr />
          <div class="jobs-list">
            <div
              class="row my-2 bg-light shadow-lg px-2"
              style="border: 1px solid #000000; border-radius: 20px;"
            >
              <div class="col-3 d-flex align-items-center">
                <img
                  class="img-fluid w-75"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-9 col-md-7 col-lg-7 col-x-7 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p>1-2 years of experience | Gurgaon | Part Time</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px;"
                >
                  Explore
                </button>
              </div>
            </div>
            <div
              class="row my-2 bg-light shadow-lg px-2"
              style="border: 1px solid #000000; border-radius: 20px;"
            >
              <div class="col-3 d-flex align-items-center">
                <img
                  class="img-fluid w-75"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-9 col-md-7 col-lg-7 col-x-7 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p>1-2 years of experience | Gurgaon | Part Time</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px;"
                >
                  Explore
                </button>
              </div>
            </div>
            <div
              class="row my-2 bg-light shadow-lg px-2"
              style="border: 1px solid #000000; border-radius: 20px;"
            >
              <div class="col-3 d-flex align-items-center">
                <img
                  class="img-fluid w-75"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-9 col-md-7 col-lg-7 col-x-7 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p>1-2 years of experience | Gurgaon | Part Time</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px;"
                >
                  Explore
                </button>
              </div>
            </div>
            <div
              class="row my-2 bg-light shadow-lg px-2"
              style="border: 1px solid #000000; border-radius: 20px;"
            >
              <div class="col-3 d-flex align-items-center">
                <img
                  class="img-fluid w-75"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-9 col-md-7 col-lg-7 col-x-7 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p>1-2 years of experience | Gurgaon | Part Time</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px;"
                >
                  Explore
                </button>
              </div>
            </div>
            <div
              class="row my-2 bg-light shadow-lg px-2"
              style="border: 1px solid #000000; border-radius: 20px;"
            >
              <div class="col-3 d-flex align-items-center">
                <img
                  class="img-fluid w-75"
                  src="../assets/logo.png"
                  alt="logo"
                />
              </div>
              <div
                class="col-9 col-md-7 col-lg-7 col-x-7 d-flex align-items-center"
              >
                <div class="text-start">
                  <h5 class="fw-bold">Senior Backend Developer</h5>
                  <p>1-2 years of experience | Gurgaon | Part Time</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center">
                <button
                  class="btn btn-light text-dark px-3 shadow-sm fw-bold mx-auto"
                  style="border: 1px solid #e4eaff; border-radius: 20px;"
                >
                  Explore
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
  name: "JobSearch",
  data() {
    return {
      msg: "Welcome to Candidate Search"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

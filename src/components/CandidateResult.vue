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
                      Filter Candidate <i class="bi bi-chevron-down"></i>
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="text-start">
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Experience (in years)
                        </h6>
                        <div class="input-group my-3">
                          <span
                            class="input-group-text input-border-pink text-light"
                            style="border-radius: 0; background-color: rgb(237, 62, 97);"
                          >
                            <i class="bi bi-search"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control px-3"
                            style="border-radius: 0;"
                            placeholder="Management; Logistics; Business"
                          />
                        </div>
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Diversity
                        </h6>
                        <select
                          class="input-border-pink px-3 w-100 py-2 select-height-45"
                          name="company-size"
                          id="company-size"
                        >
                          <option selected disabled>Select Diversity</option>
                          <option value="Company Size 1">FEMALE</option>
                          <option value="Company Size 2">LGBTQIA+</option>
                          <option value="Company Size 3"
                            >DIFFERENTLY ABLED</option
                          >
                          <option value="Company Size 2">VETERAN</option>
                          <option value="Company Size 3">RETIREES</option>
                        </select>
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Locations
                        </h6>
                        <input
                          class="input-border-pink py-2 px-3 w-100"
                          type="text"
                          name="functions"
                          id="functions"
                          placeholder="e.g. Bangalore"
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Salary Range
                        </h6>
                        <div class="row">
                          <div class="col-6 text-start">
                            <h6>
                              4L
                            </h6>
                          </div>
                          <div class="col-6 text-end">
                            <h6>
                              40L
                            </h6>
                          </div>
                        </div>
                        <input
                          class="w-100 form-range"
                          type="range"
                          name="functions"
                          id="functions"
                        />
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Notice Period
                        </h6>
                        <select
                          class="input-border-pink px-3 w-100 py-2 select-height-45"
                          name="company-size"
                          id="company-size"
                        >
                          <option selected value="Company Size 1"
                            >15 Days</option
                          >
                          <option value="Company Size 2">30 Days</option>
                          <option value="Company Size 3">45 Days</option>
                          <option value="Company Size 2">60 Days</option>
                          <option value="Company Size 3">90 Days</option>
                        </select>
                      </div>
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Filter by work-mode:
                        </h6>
                        <div class="w-100">
                          <input
                            type="radio"
                            name="work-mode"
                            id="work-from-office"
                            checked
                          />
                          <label for="work-from-office">Work From Office</label>
                        </div>
                        <div class="w-100">
                          <input type="radio" name="work-mode" id="hybrid" />
                          <label for="hybrid">Hybrid</label>
                        </div>
                        <div class="w-100">
                          <input
                            type="radio"
                            name="work-mode"
                            id="work-from-home"
                          />
                          <label for="work-from-home">Work From Home</label>
                        </div>
                      </div>
                      <div class="text-center py-2">
                        <button class="btn-hover-pink-fill">
                          Search
                        </button>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div
          class="col-md-8 col-lg-8 col-xl-8 offset-md-1 offset-lg-1 offset-xl-1"
        >
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Search Results
          </h2>
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Showing 126 jobs candidates
          </p>
          <hr style="max-width: 900px;" />
          <div class="jobs-list">
            <div
              class="row my-4 py-0 px-3 input-border-pink bg-light"
              style="border-radius: 30px; max-width: 900px;"
            >
              <div class="col-auto my-0" style="max-height: 50px;">
                <input type="checkbox" id="select-all" class="my-0" />
                <label
                  for="select-all fw-bold my-0"
                  style="color: rgb(237, 62, 97);"
                  ><p class="fw-bold">Select All</p></label
                >
              </div>
              <div class="col-auto my-0" style="max-height: 50px;">
                <p class="fw-bold" style="color: rgb(237, 62, 97);">
                  <i class="bi bi-plus"></i>
                  Add to <i class="bi bi-chevron-down"></i>
                </p>
              </div>
              <div class="col-auto my-0" style="max-height: 50px;">
                <p class="fw-bold" style="color: rgb(237, 62, 97);">
                  <i class="bi bi-envelope"></i>
                  Email <i class="bi bi-chevron-down"></i>
                </p>
              </div>
              <div class="col-auto my-0" style="max-height: 50px;">
                <p class="fw-bold" style="color: rgb(237, 62, 97);">
                  <i class="bi bi-phone"></i>
                  SMS <i class="bi bi-chevron-down"></i>
                </p>
              </div>
            </div>
            <div
              class="row"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="col-auto d-flex align-items-center">
                <input type="checkbox" id="select-all" class="my-0" />
              </div>
              <div class="col-8">
                <div
                  class="row my-4 bg-light shadow-lg p-2"
                  style="border: 1px solid #000000; border-radius: 30px;"
                >
                  <div
                    class="col-md-9 col-lg-9 col-xl-9 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
                  >
                    <div class="text-start">
                      <div class="row" style="font-size: 14px;">
                        <div class="col-3">
                          <img
                            class="image-thumbnail w-100 h-100"
                            style="max-width: 150px; max-height: 150px; object-fit: cover;"
                            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                          />
                        </div>
                        <div class="col-9 d-flex align-items-center">
                          <div class="text-start">
                            <h5
                              class="fw-bold"
                              style="color: rgb(237, 62, 97);"
                            >
                              Susane Bones
                            </h5>
                            <p class="text-secondary mb-0">
                              Bussiness Analyst at ABC Industries
                            </p>
                            <p class="text-secondary">
                              Chitkara University, Chandigarh
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size: 12px !important;">
                        <div class="col-2 d-flex align-items-center">
                          <div class="text-center">
                            <p class="fw-bold text-secondary">
                              Key Info:
                            </p>
                          </div>
                        </div>
                        <div class="col-5 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <i
                                class="bi bi-pin-map"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Location:
                              </span>
                              <span>
                                Bangalore
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-calendar3"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Notice Period:
                              </span>
                              <span>
                                Immediately
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-gender-trans"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Diversity:
                              </span>
                              <span>
                                LGBTQIA+ (Lesbian)
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="col-5 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <i
                                class="bi bi-briefcase-fill"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Experience:
                              </span>
                              <span>
                                6 years
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-currency-rupee"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Current Salary:
                              </span>
                              <span>
                                10LPA
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-currency-rupee"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Expected Salary:
                              </span>
                              <span>
                                12.5LPA
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size: 12px !important;">
                        <div class="col-2 d-flex align-items-center">
                          <div class="text-end">
                            <p class="fw-bold text-secondary">
                              Skills:
                            </p>
                          </div>
                        </div>
                        <div class="col-10 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <span style="color: rgb(237, 62, 97);">
                                Management,
                              </span>
                              <span>
                                Bussiness Knowledge,
                              </span>
                              <span style="color: rgb(237, 62, 97);">
                                Development, Logistics expertise
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-3 col-lg-3 col-xl-3 d-flex align-items-center"
                  >
                    <div class="text-start" style="font-size: 12px;">
                      <p class="text-secondary mb-0">Not Applied</p>
                      <button
                        class="btn pt-2 btn-hover-white my-3"
                        style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 10px !important;"
                      >
                        SAVE FOR REVIEW
                      </button>
                      <p class="text-secondary">View Resume</p>
                      <p class="text-secondary">Share Resume</p>
                      <p style="color: rgb(237, 62, 97) !important;">
                        Rejected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 d-flex align-items-center">
                <div class="button">
                  <a
                    class="btn text-decoration-none text-light py-2 btn-hover-pink"
                    style="background-color: rgb(237, 62, 97); border-radius: 30px; font-size: 12px;"
                    href="#/recruiterDashboard"
                    >See similar profiles</a
                  >
                </div>
              </div>
            </div>
            <div
              class="row"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div class="col-auto d-flex align-items-center">
                <input type="checkbox" id="select-all" class="my-0" />
              </div>
              <div class="col-8">
                <div
                  class="row my-4 bg-light shadow-lg p-2"
                  style="border: 1px solid #000000; border-radius: 30px;"
                >
                  <div
                    class="col-md-9 col-lg-9 col-xl-9 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
                  >
                    <div class="text-start">
                      <div class="row" style="font-size: 14px;">
                        <div class="col-3">
                          <img
                            class="image-thumbnail w-100 h-100"
                            style="max-width: 150px; max-height: 150px; object-fit: cover;"
                            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                          />
                        </div>
                        <div class="col-9 d-flex align-items-center">
                          <div class="text-start">
                            <h5
                              class="fw-bold"
                              style="color: rgb(237, 62, 97);"
                            >
                              Susane Bones
                            </h5>
                            <p class="text-secondary mb-0">
                              Bussiness Analyst at ABC Industries
                            </p>
                            <p class="text-secondary">
                              Chitkara University, Chandigarh
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size: 12px !important;">
                        <div class="col-2 d-flex align-items-center">
                          <div class="text-center">
                            <p class="fw-bold text-secondary">
                              Key Info:
                            </p>
                          </div>
                        </div>
                        <div class="col-5 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <i
                                class="bi bi-pin-map"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Location:
                              </span>
                              <span>
                                Bangalore
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-calendar3"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Notice Period:
                              </span>
                              <span>
                                Immediately
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-gender-trans"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Diversity:
                              </span>
                              <span>
                                LGBTQIA+ (Lesbian)
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="col-5 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <i
                                class="bi bi-briefcase-fill"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Experience:
                              </span>
                              <span>
                                6 years
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-currency-rupee"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Current Salary:
                              </span>
                              <span>
                                10LPA
                              </span>
                            </p>
                            <p class="text-secondary">
                              <i
                                class="bi bi-currency-rupee"
                                style="color: rgb(237, 62, 97);"
                              ></i>
                              <span class="fw-bold">
                                Expected Salary:
                              </span>
                              <span>
                                12.5LPA
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size: 12px !important;">
                        <div class="col-2 d-flex align-items-center">
                          <div class="text-end">
                            <p class="fw-bold text-secondary">
                              Skills:
                            </p>
                          </div>
                        </div>
                        <div class="col-10 d-flex align-items-center">
                          <div class="text-start">
                            <p class="text-secondary">
                              <span style="color: rgb(237, 62, 97);">
                                Management,
                              </span>
                              <span>
                                Bussiness Knowledge,
                              </span>
                              <span style="color: rgb(237, 62, 97);">
                                Development, Logistics expertise
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-3 col-lg-3 col-xl-3 d-flex align-items-center"
                  >
                    <div class="text-start" style="font-size: 12px;">
                      <p class="text-secondary mb-0">Not Applied</p>
                      <button
                        class="btn pt-2 btn-hover-white my-3"
                        style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 10px !important;"
                      >
                        SAVE FOR REVIEW
                      </button>
                      <p class="text-secondary">View Resume</p>
                      <p class="text-secondary">Share Resume</p>
                      <p style="color: rgb(237, 62, 97) !important;">
                        Rejected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 d-flex align-items-center">
                <div class="button">
                  <a
                    class="btn text-decoration-none text-light py-2 btn-hover-pink"
                    style="background-color: rgb(237, 62, 97); border-radius: 30px; font-size: 12px;"
                    href="#/recruiterDashboard"
                    >See similar profiles</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body px-5 bg-light">
            <div class="row my-4 bg-light p-2">
              <div
                class="col-md-9 col-lg-9 col-xl-9 d-flex align-items-center border border-start-0 border-top-0 border-bottom-0"
              >
                <div class="text-start">
                  <div class="row" style="font-size: 14px;">
                    <div class="col-3">
                      <img
                        class="image-thumbnail w-100 h-100"
                        style="max-width: 150px; max-height: 150px; object-fit: cover;"
                        src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                      />
                    </div>
                    <div class="col-9 d-flex align-items-center">
                      <div class="text-start">
                        <h5 class="fw-bold" style="color: rgb(237, 62, 97);">
                          Susane Bones
                        </h5>
                        <p class="text-secondary mb-0">
                          Bussiness Analyst at ABC Industries
                        </p>
                        <p class="text-secondary">
                          Chitkara University, Chandigarh
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="font-size: 12px !important;">
                    <div class="col-2 d-flex align-items-center">
                      <div class="text-center">
                        <p class="fw-bold text-secondary">
                          Key Info:
                        </p>
                      </div>
                    </div>
                    <div class="col-5 d-flex align-items-center">
                      <div class="text-start">
                        <p class="text-secondary">
                          <i
                            class="bi bi-pin-map"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Location:
                          </span>
                          <span>
                            Bangalore
                          </span>
                        </p>
                        <p class="text-secondary">
                          <i
                            class="bi bi-calendar3"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Notice Period:
                          </span>
                          <span>
                            Immediately
                          </span>
                        </p>
                        <p class="text-secondary">
                          <i
                            class="bi bi-gender-trans"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Diversity:
                          </span>
                          <span>
                            LGBTQIA+ (Lesbian)
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="col-5 d-flex align-items-center">
                      <div class="text-start">
                        <p class="text-secondary">
                          <i
                            class="bi bi-briefcase-fill"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Experience:
                          </span>
                          <span>
                            6 years
                          </span>
                        </p>
                        <p class="text-secondary">
                          <i
                            class="bi bi-currency-rupee"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Current Salary:
                          </span>
                          <span>
                            10LPA
                          </span>
                        </p>
                        <p class="text-secondary">
                          <i
                            class="bi bi-currency-rupee"
                            style="color: rgb(237, 62, 97);"
                          ></i>
                          <span class="fw-bold">
                            Expected Salary:
                          </span>
                          <span>
                            12.5LPA
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="font-size: 12px !important;">
                    <div class="col-2 d-flex align-items-center">
                      <div class="text-end">
                        <p class="fw-bold text-secondary">
                          Skills:
                        </p>
                      </div>
                    </div>
                    <div class="col-10 d-flex align-items-center">
                      <div class="text-start">
                        <p class="text-secondary">
                          <span style="color: rgb(237, 62, 97);">
                            Management,
                          </span>
                          <span>
                            Bussiness Knowledge,
                          </span>
                          <span style="color: rgb(237, 62, 97);">
                            Development, Logistics expertise
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 d-flex align-items-center">
                <div class="text-start" style="font-size: 12px;">
                  <p class="text-secondary mb-0">Not Applied</p>
                  <button
                    class="btn pt-2 btn-hover-white my-3"
                    style="border: 2px solid #c7d3ff; border-radius: 20px; font-size: 10px !important;"
                  >
                    SAVE FOR REVIEW
                  </button>
                  <p class="text-secondary">View Resume</p>
                  <p class="text-secondary">Share Resume</p>
                  <p style="color: rgb(237, 62, 97) !important;">
                    Rejected
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h1 class="mt-4 text-dark fw-bold">Resume</h1>
              <img
                class="w-100"
                src="https://d.novoresume.com/images/doc/minimalist-resume-template.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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

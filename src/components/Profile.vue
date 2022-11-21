<template>
  <div class="profile">
    <Navbar />
    <div class="profile-section">
      <div class="container text-start">
        <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
          Profile
        </h2>
        <p
          class="text-md-start text-lg-start text-xl-start fw-bold"
          style="color: rgb(237, 62, 97);"
        >
          Update your profile settings here!
        </p>
        <hr />
        <div class="personal-details text-center my-3 py-3">
          <img
            class="rounded-circle w-100"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="logo"
            style="max-width: 200px; max-height: 200px;object-fit: cover;"
          />
          <div class="row mx-auto">
            <div class="col-9 col-md-7 col-lg-7 col-xl-7 text-end">
              <h3 class="fw-bold mt-3">Bhavik Arora</h3>
            </div>
            <dov class="col-3 col-md-5 col-lg-5 col-xl-5 ms-0 text-start">
              <button
                type="button"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#personal-details-modal"
              >
                <i class="bi bi-pencil-square"></i> &nbsp;<span class="fw-bold"
                  >Edit</span
                >
              </button>
              <div
                class="modal fade"
                id="personal-details-modal"
                tabindex="-1"
                aria-labelledby="personal-details-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="personal-details-modal">
                        Update Personal Details
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="upload">
                        <p class="fw-bold">Add your profile photo(optional)</p>
                        <input
                          type="file"
                          id="selectedFile"
                          style="display: none"
                        />
                        <input
                          type="image"
                          value="Browse"
                          onclick="document.getElementById('selectedFile').click();"
                        />
                      </div>
                      <div class="mt-3">
                        <p class="fw-bold">
                          Your Name
                        </p>
                        <input
                          type="text"
                          class="w-100 block x input-border-pink py-2 px-3"
                          placeholder="Fullname"
                        />
                      </div>
                      <div class="gender-details mt-4">
                        <p class="gender-title fw-bold">
                          Please select your gender.
                        </p>
                        <select class="w-100 x input-border-pink px-3">
                          <option selected disabled>Select your Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option></select
                        ><br /><br />
                      </div>
                      <div class="row d-flex text-center mt-1">
                        <p class="text-start fw-bold mb-0">
                          Please select your diversity.
                        </p>
                        <div class="col-4 col-md-2 col-lg-2 col-xl-2 mt-0">
                          <img
                            class="img img-thumbnail border border-radius border-dark rounded"
                            src="../assets/logo.png"
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
                            class="img img-thumbnail border border-radius border-dark rounded"
                            src="../assets/logo.png"
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
                            class="img img-thumbnail border border-radius border-dark rounded"
                            src="../assets/logo.png"
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
                            class="img img-thumbnail border border-radius border-dark rounded"
                            src="../assets/logo.png"
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
                            class="img img-thumbnail border border-radius border-dark rounded"
                            src="../assets/logo.png"
                          />
                          <p
                            style="font-size: 14px; font-weight: 600;"
                            class="text-uppercase mt-2"
                          >
                            Silvergen
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary text-light">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dov>
          </div>
          <p>
            <span class="fw-bold">Gender: </span>Male |
            <span class="fw-bold">Diversity: </span>ABC
          </p>
        </div>
        <div class="job-details text-start  mt-3 pt-3">
          <div class="row">
            <div class="col-9 text-start">
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold mb-0"
                style="color: rgb(237, 62, 97);"
              >
                Job Preferences
              </p>
            </div>
            <div class="col-3 text-end">
              <button
                type="button"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#job-details-modal"
              >
                <i class="bi bi-pencil-square"></i> &nbsp;<span class="fw-bold"
                  >Edit</span
                >
              </button>
              <div
                class="modal fade"
                id="job-details-modal"
                tabindex="-1"
                aria-labelledby="job-details-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="job-details-modal">
                        Update Job Details
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start">
                      <div class="user-details">
                        <p class="fw-bold mb-2">Current Location</p>
                        <select
                          class="mb-4 px-3 input-border-pink w-100"
                          style="width: 650px; height: 30px"
                        >
                          <option disabled selected>eg. Bangalore</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                          <option value="Bangalore">Bangalore</option>
                        </select>
                        <p class="fw-bold mb-2">Preferred Location</p>
                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control border-danger rounded-0 px-3 input-border-pink"
                            placeholder="eg. Anywhere in India, Banglore"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                      </div>
                      <div class="row mt-2">
                        <p class="fw-bold mb-0">
                          What is your annual current,expected and in hand
                          offered salary(if any)?
                        </p>
                        <div class="col-12 pb-2">
                          <div class="input-group flex-nowrap">
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >Rs.</span
                            >
                            <input
                              type="text"
                              class="form-control border rounded-0 input-border-pink"
                              placeholder="Current"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >LPA</span
                            >
                          </div>
                        </div>
                        <div class="col-12 pb-2">
                          <div class="input-group flex-nowrap">
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >Rs.</span
                            >
                            <input
                              type="text"
                              class="form-control border rounded-0 input-border-pink"
                              placeholder="Expected"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >LPA</span
                            >
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="input-group flex-nowrap">
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >Rs.</span
                            >
                            <input
                              type="text"
                              class="form-control border rounded-0 input-border-pink"
                              placeholder="Offer-in-hand"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                            <span
                              class="input-group-text bg-danger border rounded-0 text-light"
                              id="addon-wrapping"
                              >LPA</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-12 pb-0">
                          <span class="fw-bold"
                            >What is your notice period?</span
                          >
                          <br />
                          <select
                            class="mt-2 input-border-pink px-3 w-100"
                            style="width: 230px; height: 30px"
                          >
                            <option value="1 Months" selected>1 months</option>
                            <option value="2 Months">2 Months</option>
                            <option value="4 Months">4 Months</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">Last working day</span> <br />
                          <input
                            type="text"
                            style="width: 230px; height: 30px"
                            class="mt-2 px-3 input-border-pink w-100"
                            placeholder="eg. 3rd October"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary text-light">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-2" />
          <p>Currently Located in <span class="fw-bold">Bangalore</span></p>
          <p>Only willing to work in <span class="fw-bold">Bangalore</span></p>
          <p>Current Salary is <span class="fw-bold">Rs. 12 LPA</span></p>
          <p>
            Can start working in
            <span class="fw-bold">15 days after accepting offer</span>
          </p>
        </div>
        <div class="skills-details text-start  mt-3 pt-3">
          <div class="row mt-0">
            <div class="col-9 text-start">
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold mb-0"
                style="color: rgb(237, 62, 97);"
              >
                Skills
              </p>
            </div>
            <div class="col-3 text-end">
              <button
                type="button"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#skills-details-modal"
              >
                <i class="bi bi-pencil-square"></i> &nbsp;<span class="fw-bold"
                  >Edit</span
                >
              </button>
              <div
                class="modal fade"
                id="skills-details-modal"
                tabindex="-1"
                aria-labelledby="skills-details-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="skills-details-modal">
                        Update Skills Details
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start">
                      <div class="row">
                        <div class="col">
                          <p class="mb-1 fw-bold">Current job profile</p>
                          <input
                            type="text"
                            style="width: 100%; height: 30px;"
                            class="px-3 input-border-pink"
                            placeholder="eg. Software Engineer"
                            required
                          />
                        </div>
                        <div class="col">
                          <p class="mb-1 fw-bold">Current company</p>
                          <input
                            type="text"
                            style="width: 100%; height: 30px;"
                            class="px-3 input-border-pink"
                            placeholder="eg. Amazon"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-4">
                        <p class="fw-bold">
                          Add upto 10 skills and how much expertise do you have
                          with each
                        </p>
                        <div class="row m">
                          <div class="col">
                            <input
                              type="text"
                              style="width: 90%; height: 30px;"
                              class="mt-2 text-center input-border-pink"
                              placeholder="eg. 3rd october"
                              required
                            />
                          </div>
                          <div class="col">
                            <select
                              class="mt-2 mb-2 input-border-pink"
                              style="width: 90%; height: 30px;"
                            >
                              <option
                                value=""
                                class="text-center"
                                disabled
                                selected
                                >Years of experience</option
                              >
                              <option value="1">2</option>
                              <option value="2">4</option>
                              <option value="3">8</option>
                              <option value="4">10</option>
                            </select>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <input
                              type="text"
                              style="width: 90%; height: 30px;"
                              class="mt-2 text-center input-border-pink"
                              placeholder="eg. 3rd october"
                              required
                            />
                          </div>
                          <div class="col">
                            <select
                              class="mt-2 mb-2 input-border-pink"
                              style="width: 90%; height: 30px;"
                            >
                              <option
                                value=""
                                class="text-center"
                                disabled
                                selected
                                >Years of experience</option
                              >
                              <option value="1">2</option>
                              <option value="2">4</option>
                              <option value="3">8</option>
                              <option value="4">10</option>
                            </select>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <input
                              type="text"
                              style="width: 90%; height: 30px;"
                              class="mt-2 text-center input-border-pink"
                              placeholder="eg. 3rd october"
                              required
                            />
                          </div>
                          <div class="col">
                            <select
                              class="mt-2 mb-2 input-border-pink"
                              style="width: 90%; height: 30px;"
                            >
                              <option
                                value=""
                                class="text-center"
                                disabled
                                selected
                                >Years of experience</option
                              >
                              <option value="1">2</option>
                              <option value="2">4</option>
                              <option value="3">8</option>
                              <option value="4">10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary text-light">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-2" />
          <p><span class="fw-bold">Java, C#, React Js, MongoDB</span></p>
          <p>
            Current role is <span class="fw-bold">Front-End Web Developer</span>
          </p>
          <p>
            Main Industries are
            <span class="fw-bold">Computer & IT; Human Resource</span>
          </p>
          <p>Languages known are <span class="fw-bold">English/Hindi</span></p>
        </div>
        <div class="experience-details text-start  mt-3 pt-3">
          <div class="row mt-0">
            <div class="col-9 text-start">
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold mb-0"
                style="color: rgb(237, 62, 97);"
              >
                Work Experience
              </p>
            </div>
            <div class="col-3 text-end">
              <button
                type="button"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#experience-details-modal"
              >
                <i class="bi bi-pencil-square"></i> &nbsp;<span class="fw-bold"
                  >Edit</span
                >
              </button>
              <div
                class="modal fade"
                id="experience-details-modal"
                tabindex="-1"
                aria-labelledby="experience-details-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="experience-details-modal">
                        Update Experience Details
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start">
                      <p class="fw-bold mb-2">Current Employment</p>
                      <select
                        class="mb-4 px-3 input-border-pink"
                        style="width: 300px; height: 30px;"
                      >
                        <option value="" class="" disabled selected
                          >4+ Years</option
                        >
                        <option value="2+ Years">2+ Years</option>
                        <option value="4+ Years">4+ Years</option>
                        <option value="6+ Years">6+ Years</option>
                        <option value="10+ Years">10+ Years</option>
                      </select>

                      <div class="row">
                        <div class="col">
                          <p class="mb-1 fw-bold">Current job profile</p>
                          <input
                            type="text"
                            style="width: 100%; height: 30px;"
                            class="px-3 input-border-pink"
                            placeholder="eg. Software Engineer"
                            required
                          />
                        </div>
                        <div class="col">
                          <p class="mb-1 fw-bold">Current company</p>
                          <input
                            type="text"
                            style="width: 100%; height: 30px;"
                            class="px-3 input-border-pink"
                            placeholder="eg. Amazon"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary text-light">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-2" />
          <p>Total experience of <span class="fw-bold">3 Years</span></p>
        </div>
        <div class="education-details text-start  mt-3 pt-3">
          <div class="row mt-0">
            <div class="col-9 text-start">
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold mb-0"
                style="color: rgb(237, 62, 97);"
              >
                Education
              </p>
            </div>
            <div class="col-3 text-end">
              <button
                type="button"
                class=""
                data-bs-toggle="modal"
                data-bs-target="#education-details-modal"
              >
                <i class="bi bi-pencil-square"></i> &nbsp;<span class="fw-bold"
                  >Edit</span
                >
              </button>
              <div
                class="modal fade"
                id="education-details-modal"
                tabindex="-1"
                aria-labelledby="education-details-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="education-details-modal">
                        Update Education Details
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-start">
                      <div class="row">
                        <p class="mb-0 mt-2 fw-bold">
                          What is your education background?
                        </p>
                        <div class="col-4">
                          <select
                            class="px-3 input-border-pink"
                            style="width: 100%; height: 30px;"
                          >
                            <option value="" class="" disabled selected
                              >Select Course</option
                            >
                            <option value="Computer Science"
                              >Computer Science</option
                            >
                            <option value="Information Technology"
                              >Information Technology</option
                            >
                            <option value="Electrical">Electrical</option>
                            <option value="Electronics">Electronics</option>
                          </select>
                        </div>
                        <div class="col-4">
                          <select
                            class="px-3 input-border-pink"
                            style="width: 100%; height: 30px;"
                          >
                            <option value="" class="" disabled selected
                              >Specialization</option
                            >
                            <option value="Computer Science"
                              >Computer Science</option
                            >
                            <option value="Information Technology"
                              >Information Technology</option
                            >
                            <option value="Electrical">Electrical</option>
                            <option value="Electronics">Electronics</option>
                          </select>
                        </div>
                        <div class="col-4">
                          <select
                            class="px-3 input-border-pink"
                            style="width: 100%; height: 30px;"
                          >
                            <option value="" class="" disabled selected
                              >Completion year</option
                            >
                            <option value="1 Year">1 Year</option>
                            <option value="2 Year">2 Year</option>
                            <option value="3 Year">3 Year</option>
                            <option value="4 Year">4 Year</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8">
                          <select
                            class="mb-4 px-3 input-border-pink"
                            style="width: 100%; height: 30px;"
                          >
                            <option value="" class="" disabled selected
                              >College Name</option
                            >
                            <option value="IIT">IIT</option>
                            <option value="IIIT">IIIT</option>
                            <option value="NIT">NIT</option>
                            <option value="BITS">BITS</option>
                          </select>
                        </div>
                        <div class="col-4">
                          <select
                            class="mb-4 px-3 input-border-pink"
                            style="width: 100%; height: 30px;"
                          >
                            <option value="" class="" disabled selected
                              >Full/Part Time</option
                            >
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary text-light">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-2" />
          <p>
            <span class="fw-bold"
              >B. Tech. from Punjab University, Chandigarh</span
            >
          </p>
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
  name: "Profile",
  data() {
    return {
      msg: "Welcome to Profile"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

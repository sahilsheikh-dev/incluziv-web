<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 1/4</h1>
      <h6 class="subtitle">Please customize your profile</h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <div class="upload">
            <div class="row mt-4">
              <div class="col-auto">
                <input type="file" id="selectedFile" style="display: none" />
                <button
                  onclick="document.getElementById('selectedFile').click();"
                >
                  <img
                    class="img-fluid"
                    src="../assets/img/profile-icon.png"
                    style="border: 1px solid rgb(237, 62, 97) !important; max-width: 70px;"
                    alt="logo"
                  />
                </button>
              </div>
              <div class="col-7">
                <p class="fw-bold mb-0">Bhavik Arora</p>
                <p class="mt-0">Add your profile photo(optional)</p>
              </div>
            </div>
          </div>

          <div class="user-details row mt-0">
            <div class="col-md-6 col-lg-6 col-xl-6 mt-4 w-100 px-0">
              <p class="details fw-bold">Date of Birth</p>
              <input
                type="date"
                class="x input-border-pink p-2 px-3 w-100"
                required
              />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 mt-4 w-100">
              <p class="details fw-bold">What's your mobile number?</p>
              <div class="input-group input-border-pink">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text text-light"
                    style="background-color: rgb(237, 62, 97); border-radius: 0;"
                    >+91</span
                  >
                </div>
                <input
                  type="tel"
                  class="form-control x"
                  style="border-radius: 0;"
                  required
                />
              </div>
            </div>
          </div>
          <div class="gender-details mt-4">
            <p class="gender-title fw-bold">Please select your gender.</p>
            <select class="x input-border-pink p-2 px-3 select-height-45 w-100">
              <option selected disabled>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option></select
            ><br /><br />
          </div>
          <div class="row d-flex text-center mt-1">
            <p class="text-start fw-bold mb-0">Please select your diversity.</p>
            <div class="col-4 col-md-2 col-lg-2 col-xl-2 mt-0">
              <img
                class="img img-thumbnail border border-radius rounded"
                src="../assets/img/diversity-1.png"
              />
              <p
                style="font-size: 14px; font-weight: 600;"
                class="text-uppercase mt-2"
              >
                FEMALE
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
                LGBTQIA+
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
                DIFFERENTLY ABLED
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
                VETERAN
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
                RETIREES
              </p>
            </div>
          </div>
          <br />
          <div>
            <p class="fw-bold mb-2">Select your privacy setting:</p>
            <input type="radio" name="r" value="one" />&nbsp;<span
              >Allow all companies to see my profile except ones that I
              block</span
            ><br />
            <input type="radio" name="r" value="two" />&nbsp;<span
              >Only companies that I apply for can see my profile</span
            >
          </div>
          <br />
          <div>
            <p class="fw-bold">
              Which companies do you want to block from seeing your profile?
            </p>
            <input
              type="text"
              class="block x input-border-pink p-2 px-3"
              placeholder="eg: TCS, Infosys, Accenture, etc."
            />
          </div>

          <div class="button">
            <button
              class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
              style="background-color: rgb(237, 62, 97); border-radius: 0;"
              href="/"
              v-on:click="saveInfo()"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "This is Login Page"
    };
  },
  methods: {
    async saveInfo() {
      const image = document.getElementById("image");
      const dob = document.getElementById("dob");
      const mobileNumber = document.getElementById("mobileNumber");
      const gender = document.getElementById("gender");
      const diversity = document.getElementById("diversity");
      if (
        image === "" ||
        image === null ||
        image === undefined ||
        dob === "" ||
        dob === null ||
        dob === undefined ||
        mobileNumber === "" ||
        mobileNumber === null ||
        mobileNumber === undefined ||
        gender === "" ||
        gender === null ||
        gender === undefined ||
        diversity === "" ||
        diversity === null ||
        diversity === undefined
      ) {
        alert("Please fill input fields");
      } else {
        localStorage.setItem("image", image);
        localStorage.setItem("dob", dob);
        localStorage.setItem("mobileNumber", mobileNumber);
        localStorage.setItem("gender", gender);
        localStorage.setItem("diversity", diversity);
        window.location.href("/#/profileStep2");
      }
    }
  }
};
</script>

<style>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

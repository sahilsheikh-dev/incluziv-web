<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 2/4</h1>
      <h6 class="subtitle">
        Hi ABC! We just need some information about your ideal job.
      </h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <div class="mb-4">
            <p class="fw-bold mb-2">
              Are you a working professional or fresher?
            </p>
            <input type="radio" name="r" value="one" />&nbsp;<span
              >Currently Employed</span
            ><br />
            <input type="radio" name="r" value="two" />&nbsp;<span
              >Fresher</span
            >
          </div>
          <div class="mb-4">
            <p class="details fw-bold mb-2">
              How many years of experience do you have?(Do include intership)
            </p>
            <div class="row">
              <div
                class="col-md-6 col-lg-6 col-xl-6 input-group"
                style="max-width: 500px;"
              >
                <input
                  type="text"
                  class="form-control border border-danger rounded-0 py-2 px-3"
                  placeholder="eg.4"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-danger border rounded-0 text-light py-2"
                    id="basic-addon2"
                    >Years</span
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-6 col-lg-6 col-xl-6 input-group"
                style="max-width: 500px;"
              >
                <input
                  type="text"
                  class="form-control border-danger rounded-0 py-2 px-3"
                  placeholder="Carrer break(if any)"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-danger rounded-0 text-light py-2"
                    id="basic-addon2"
                    >Years</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <p class="fw-bold">
              Add upto 10 skills and how much expertise do you have with each
            </p>
            <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="e.g. Java, Python, C++, etc."
                  required
                />
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="number"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="Years of experience"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="e.g. Java, Python, C++, etc."
                  required
                />
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="number"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="Years of experience"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="e.g. Java, Python, C++, etc."
                  required
                />
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="number"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="Years of experience"
                  required
                />
              </div>
            </div>
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
      const experienceType = document.getElementById("experienceType");
      const yearsOfExperience = document.getElementById("yearsOfExperience");
      const yearsOfBreak = document.getElementById("yearsOfBreak");
      const skills = document.getElementById("skills");
      if (
        experienceType === "" ||
        experienceType === null ||
        experienceType === undefined ||
        yearsOfExperience === "" ||
        yearsOfExperience === null ||
        yearsOfExperience === undefined ||
        yearsOfBreak === "" ||
        yearsOfBreak === null ||
        yearsOfBreak === undefined ||
        skills === "" ||
        skills === null ||
        skills === undefined
      ) {
        alert("Please fill input fields");
      } else {
        localStorage.setItem("experienceType", experienceType);
        localStorage.setItem("yearsOfExperience", yearsOfExperience);
        localStorage.setItem("yearsOfBreak", yearsOfBreak);
        localStorage.setItem("skills", skills);
        window.location.href("/#/profileStep3");
      }
    }
  }
};
</script>

<style>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

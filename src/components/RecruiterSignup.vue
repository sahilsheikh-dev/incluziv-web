<template>
  <div class="hello py-5 signup-bg">
    <div class="d-flex align-items-center" style="min-height: 100vh;">
      <div class="container text-center">
        <p class="text-primary mb-0" style="font-size: 14px;">
          SIGN UP/SIGN IN
        </p>
        <h1 class="text-dark fw-bold mt-0 mb-5">Recruiter Signup</h1>
        <form action="" class="mt-5 loginform mx-auto">
          <div class="row mx-auto" style="max-width: 800px;">
            <div class="col-md-6 col-lg-6 col-xl-6">
              <input
                required
                type="text"
                class="form-control p-3 px-5 input-box mx-auto"
                id="fullname"
                placeholder="Full Name"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
              <input
                required
                type="email"
                class="form-control p-3 px-5 input-box mx-auto"
                id="work-email"
                placeholder="Work Email ID"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
          </div>
          <div class="row mx-auto">
            <div class="col-12 mx-auto">
              <input
                required
                type="tel"
                class="form-control p-3 px-5 input-box mx-auto"
                id="phone"
                placeholder="Phone"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
          </div>
          <div class="row mx-auto" style="max-width: 800px;">
            <div class="col-md-6 col-lg-6 col-xl-6">
              <input
                required
                type="text"
                class="form-control p-3 px-5 input-box mx-auto"
                id="designation"
                placeholder="Designation"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
              <input
                required
                type="text"
                class="form-control p-3 px-5 input-box mx-auto"
                id="organisation"
                placeholder="Organisation"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
          </div>
          <div class="row mx-auto">
            <div class="col-12 mx-auto">
              <input
                required
                type="password"
                class="form-control p-3 px-5 input-box mx-auto"
                id="password"
                placeholder="Password"
                style="max-width: 400px; min-width: 300px;"
              />
            </div>
          </div>
          <div class="row mx-auto">
            <div class="col-12 mx-auto">
              <div class="form-floating">
                <select
                  class="form-select form-control p-3 px-5 input-box mx-auto py-1"
                  id="recruiter-type"
                  style="max-width: 400px; min-width: 300px;"
                  required
                >
                  <option selected disabled>Select Recruiter Type</option>
                  <option value="Corporate Recruiters"
                    >Corporate Recruiters</option
                  >
                  <option value="In-house Recruiters"
                    >In-house Recruiters</option
                  >
                  <option value="Contingency Recruiter"
                    >Contingency Recruiter</option
                  >
                  <option value="Retained Recruiter">Retained Recruiter</option>
                  <option value="Staffing Agency (Temp/Contract)"
                    >Staffing Agency (Temp/Contract)</option
                  >
                  <option value="Headhunters">Headhunters</option>
                  <option value="Outplacement Recruiter"
                    >Outplacement Recruiter</option
                  >
                </select>
              </div>
            </div>
          </div>
          <!-- <button
            type="submit"
            class="form-control p-2 px-5 input-box mt-5 mb-0 text-light bg-primary submit-btn btn-hover-blue"
            id="recruitersignup"
            style="max-width: 350px;"
          >
            REGISTER
          </button> -->
          <a
            href="/#/recruiterDashboard"
            class="form-control mt-5 mb-0 p-2 px-5 pt-md-3 pt-lg-3 pt-xl-3 input-box mb-3 text-light bg-primary submit-btn text-uppercase text-decoration-none btn-hover-blue"
            id="recruitersignup"
            style="max-width: 350px;"
          >
            REGISTER
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecruiterSignup",
  data() {
    return {
      msg: "This is Registration Page"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/main.css";
</style>

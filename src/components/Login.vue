<template>
  <div class="hello py-5 signup-bg">
    <div class="d-flex align-items-center" style="min-height: 100vh;">
      <div class="container text-center">
        <p class="text-primary mb-0" style="font-size: 14px;">
          SIGN UP/SIGN IN
        </p>
        <h1 class="text-dark fw-bold mt-0 mb-5">Your Dream Job. Now</h1>
        <form
          action=""
          class="mt-5 loginform mx-auto"
          style="max-width: 400px;"
        >
          <input
            required
            type="text"
            class="form-control p-3 px-5 input-box mb-3"
            id="fullname"
            placeholder="Full Name"
          />
          <input
            required
            type="text"
            class="form-control p-3 px-5 input-box mb-3"
            id="username"
            placeholder="Username"
          />
          <input
            required
            type="password"
            class="form-control p-3 px-5 input-box mb-3"
            id="password"
            placeholder="Password"
          />
          <!-- <button
            type="submit"
            class="form-control p-2 px-5 input-box mb-3 text-light bg-primary submit-btn text-uppercase"
            id="loginsubmit"
          >
            Agree & Continue
          </button> -->
          <a
            class="form-control p-2 px-5 pt-3 input-box mb-3 text-light bg-primary submit-btn text-uppercase text-decoration-none"
            id="loginsubmit"
            href="#/profilestep1"
          >
            Agree & Continue
          </a>
        </form>
        <h6 class="my-5 fw-bold">OR</h6>
        <div class="row mx-auto" style="max-width: 700px;">
          <div class="col-md-6 col-lg-6 col-xl-6">
            <button
              type="submit"
              class="form-control p-2 px-2 input-box mb-3 submit-btn social-auth"
              id="loginsubmit"
              style="color: #516acb;"
            >
              <i class="bi bi-linkedin" style="color: #0097d3;"></i>
              Login with LinkedIn
            </button>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6">
            <button
              type="submit"
              class="form-control p-2 px-2 input-box mb-3 submit-btn social-auth"
              id="loginsubmit"
              style="color: #516acb;"
            >
              <i class="bi bi-google" style="color: #ea4335;"></i>
              Login with Google
            </button>
          </div>
        </div>
        <div class="mt-5 mx-auto" style="max-width: 400px;">
          <a
            type="submit"
            class="form-control p-2 px-5 pt-3 input-box mb-3 text-light bg-primary submit-btn text-decoration-none"
            href="#/register"
          >
            RECRUITER SIGNUP
          </a>
        </div>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/main.css";
</style>

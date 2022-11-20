<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 1/4</h1>
      <h6 class="subtitle">Please customize your profile</h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <div class="upload">
            <p class="fw-bold">Add your profile photo(optional)</p>
            <input type="file" id="selectedFile" style="display: none" />
            <input
              type="image"
              value="Browse"
              onclick="document.getElementById('selectedFile').click();"
            />
          </div>

          <div class="user-details">
            <div class="">
              <p class="details fw-bold">Date of Birth</p>
              <input
                type="date"
                class="x input-border-pink p-2 px-3"
                required
              />
            </div>
            <div class="">
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
            <select class="x input-border-pink px-3">
              <option selected disabled>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option></select
            ><br /><br />
          </div>
          <div class="row d-flex text-center">
            <div class="col-4 col-md-2 col-lg-2 col-xl-2">
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
            <!-- <input type="submit" value="Next" /> -->
            <a
              class="btn text-decoration-none text-light p-2 px-5"
              style="background-color: rgb(237, 62, 97); border-radius: 0;"
              href="#/profilestep2"
              >Next</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 4/4</h1>
      <h6 class="subtitle">Please specify your education and upload resume</h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <p class="fw-bold mb-0">Working in current company since?</p>
          <div class="row my-0 py-0">
            <div class="col-md-6 col-lg-6 col-xl-6 w-100 my-0">
              <input
                type="date"
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
                required
              />
            </div>
          </div>

          <div class="row mt-0">
            <div class="col-md-6 col-lg-6 col-xl-6 w-100">
              <p class="mb-1 fw-bold">Current job profile</p>
              <input
                type="text"
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
                placeholder="eg. Software Engineer"
                required
              />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 w-100">
              <p class="mb-1 fw-bold">Current company</p>
              <input
                type="text"
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
                placeholder="eg. Amazon"
                required
              />
            </div>
          </div>

          <div class="row">
            <p class="mt-2 mb-0 fw-bold">
              Which companies have you previously worked at?
            </p>
            <div class="col-md-6 col-lg-6 col-xl-6 w-100 mt-0">
              <input
                type="text"
                class="px-3 mt-0 input-border-pink py-2 select-height-45 w-100 bg-light"
                placeholder="eg. TCS, Amazon, Accnture, etc."
                required
              />
            </div>
          </div>

          <div class="row">
            <p class="mt-2 mb-0 fw-bold">
              Mention upto 3 industries you associated with
            </p>
            <div class="col-md-6 col-lg-6 col-xl-6 w-100 mt-0">
              <input
                type="text"
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
                placeholder="eg. Computer Science, FMCG, Logistics"
                required
              />
            </div>
          </div>

          <div class="row">
            <p class="mb-0 mt-2 fw-bold">
              What is your education background?
            </p>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Select Course</option
                >
                <option value="Computer Science">MBA</option>
                <option value="Information Technology">B.Tech.</option>
                <option value="Electrical">BCA</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Specialization</option
                >
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology"
                  >Information Technology</option
                >
                <option value="Electrical">Electrical</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
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
            <div class="col-md-8 col-lg-8 col-xl-8 w-100 ">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
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
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="mb-4 px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Full/Part Time</option
                >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
          </div>
          <div class="row mt-0">
            <p class="mb-0 mt-0 fw-bold">
              What is your Post Graduation background?
            </p>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Select Course</option
                >
                <option value="Computer Science">MBA</option>
                <option value="Information Technology">B.Tech.</option>
                <option value="Electrical">BCA</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Specialization</option
                >
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology"
                  >Information Technology</option
                >
                <option value="Electrical">Electrical</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Completion year</option
                >
                <option value="1 Year">2022</option>
                <option value="2 Year">2021</option>
                <option value="3 Year">2020</option>
                <option value="4 Year">2019</option>
              </select>
            </div>
          </div>
          <div class="row">
            <p class="mb-0 mt-1 fw-bold">
              What is your Graduation background?
            </p>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Select Course</option
                >
                <option value="Computer Science">MBA</option>
                <option value="Information Technology">B.Tech.</option>
                <option value="Electrical">BCA</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Specialization</option
                >
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology"
                  >Information Technology</option
                >
                <option value="Electrical">Electrical</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4 w-100">
              <select
                class="px-3 input-border-pink py-2 select-height-45 w-100 bg-light"
              >
                <option value="" class="" disabled selected
                  >Completion year</option
                >
                <option value="1 Year">2022</option>
                <option value="2 Year">2021</option>
                <option value="3 Year">2020</option>
                <option value="4 Year">2019</option>
              </select>
            </div>
          </div>
          <div class="row mt-5">
            <div
              class="col-md-4 col-lg-4 col-xl-4 w-100 my-2 offset-md-2 offset-lg-2 offset-xl-2 fileUpload btn btn-warning border rounded-0 btn-sm btn-hover-yellow"
            >
              <label class="upload p-2">
                <input name="Image" type="file" />
                Upload resume
              </label>
            </div>

            <div
              class="col-md-4 col-lg-4 col-xl-4 w-100 my-2 fileUpload btn btn-warning border rounded-0 btn-sm btn-hover-yellow"
            >
              <label class="upload p-2">
                <input name="Image" type="file" />
                Upload valid ID proof
              </label>
            </div>

            <div class="col-2"></div>
          </div>

          <div class="button">
            <!-- <input type="submit" value="Next" /> -->
            <a
              class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
              style="background-color: rgb(237, 62, 97); border-radius: 0;"
              href="#/profile"
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

<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 4/4</h1>
      <h6 class="subtitle">Please specify your education and upload resume</h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <p class="fw-bold mb-2">Current Employment</p>
          <select
            class="mb-4 px-3 input-border-pink"
            style="width: 300px; height: 30px;"
          >
            <option value="" class="" disabled selected>4 Years</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="10+">10+</option>
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

          <div class="row">
            <div class="col">
              <p class="mb-1 fw-bold">
                Which companies have you previously worked at?
              </p>
              <input
                type="text"
                style="width: 100%; height: 30px;"
                class="px-3 mt-0 input-border-pink"
                placeholder="eg. TCS, Amazon, Accnture, etc."
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <p class="mb-1 fw-bold">
                Mention upto three industries you associated with
              </p>
              <input
                type="text"
                style="width: 100%; height: 30px;"
                class="px-3 input-border-pink"
                placeholder="eg. Computer Science, FMCG, Logistics"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <p class="fw-bold mb-2">Current Employment</p>
              <select
                class="px-3 input-border-pink"
                style="width: 100%; height: 30px;"
              >
                <option value="" class="" disabled selected
                  >Select course</option
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-4">
              <p class="fw-bold mb-2">Current Employment</p>
              <select
                class="px-3 input-border-pink"
                style="width: 100%; height: 30px;"
              >
                <option value="" class="" disabled selected
                  >Specialization</option
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-4">
              <p class="fw-bold mb-2">Current Employment</p>
              <select
                class="px-3 input-border-pink"
                style="width: 100%; height: 30px;"
              >
                <option value="" class="" disabled selected
                  >Completion year</option
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div
              class=" col-4 fileUpload btn btn-warning border rounded-0 btn-sm"
            >
              <label class="upload p-2">
                <input name="Image" type="file" />
                Upload resume
              </label>
            </div>

            <div
              class="ms-3 col-4 fileUpload btn btn-warning border rounded-0 btn-sm"
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
              class="btn text-decoration-none text-light p-2 px-5"
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

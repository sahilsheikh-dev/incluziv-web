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
                class="col-md-6 col-lg-6 col-xl-6 input-group w-100 px-0"
                style="max-width: 500px;"
              >
                <input
                  type="text"
                  class="form-control border border-danger rounded-0 py-2 px-3"
                  placeholder="eg.4"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
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
                class="col-md-6 col-lg-6 col-xl-6 input-group w-100 px-0"
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
                <select
                  class="x input-border-pink p-2 px-3 select-height-45 w-100"
                >
                  <option value="" class="text-center" disabled selected
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
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="e.g. Java, Python, C++, etc."
                  required
                />
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <select
                  class="x input-border-pink p-2 px-3 select-height-45 w-100"
                >
                  <option value="" class="text-center" disabled selected
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
              <div class="col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  class="text-center input-border-pink w-100 py-2 bg-light"
                  placeholder="e.g. Java, Python, C++, etc."
                  required
                />
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <select
                  class="x input-border-pink p-2 px-3 select-height-45 w-100"
                >
                  <option value="" class="text-center" disabled selected
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

          <div class="button">
            <!-- <input type="submit" value="Next" /> -->
            <a
              class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
              style="background-color: rgb(237, 62, 97); border-radius: 0;"
              href="#/profilestep3"
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

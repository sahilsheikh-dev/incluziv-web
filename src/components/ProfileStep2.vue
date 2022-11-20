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
            <div class="col input-group" style="width: 300px;">
              <input
                type="text"
                class="form-control border border-danger rounded-0 px-3"
                placeholder="eg.4"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-danger border rounded-0 text-light"
                  id="basic-addon2"
                  >Years</span
                >
              </div>
            </div>
            <div class="col input-group" style="width: 300px;">
              <input
                type="text"
                class="form-control border-danger rounded-0 px-3"
                placeholder="Carrer break(if any)"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-danger rounded-0 text-light"
                  id="basic-addon2"
                  >Years</span
                >
              </div>
            </div>
          </div>
          <div class="mb-4">
            <p class="fw-bold">
              Add upto 10 skills and how much expertise do you have with each
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
              class="btn text-decoration-none text-light p-2 px-5"
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

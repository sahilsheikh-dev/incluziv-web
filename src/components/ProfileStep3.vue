<template>
  <div class="profile-step">
    <div class="container-op mx-auto text-start">
      <h1 class="title fw-bold">Step 3/4</h1>
      <h6 class="subtitle">Please specify your job preferences</h6>
      <hr color="red" size="1" />
      <div class="content">
        <form action="#">
          <div class="user-details">
            <p class="fw-bold mb-2">Current Location</p>
            <select
              class="mb-4 px-3 input-border-pink"
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
          <div class="row mb-4">
            <p class="fw-bold">
              What is your annual current,expected and in hand offered salary(if
              any)?
            </p>
            <div class="col pb-2">
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
            <div class="col pb-2">
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
            <div class="col">
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
          <div class="row mt-3">
            <div class="col">
              <span class="details fw-bold">What is your notice period?</span>
              <select
                class="mt-2 mb-2 input-border-pink px-3"
                style="width: 230px; height: 30px"
              >
                <option value="1 Months" selected>1 months</option>
                <option value="2 Months">2 Months</option>
                <option value="4 Months">4 Months</option>
              </select>
            </div>

            <div class="col">
              <span class="fw-bold">Last working day</span>
              <input
                type="text"
                style="width: 230px; height: 30px"
                class="mt-2 text-center input-border-pink"
                placeholder="eg. 3rd October"
                required
              />
            </div>
          </div>
          <div class="button">
            <!-- <input type="submit" value="Next" /> -->
            <a
              class="btn text-decoration-none text-light p-2 px-5"
              style="background-color: rgb(237, 62, 97); border-radius: 0;"
              href="#/profilestep4"
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

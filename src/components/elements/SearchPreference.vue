<template>
  <section class="search-preference-section py-3 my-5">
    <div class="py-5">
      <p class="mt-0 mb-5 fw-bold" style="font-size: 18px; color: #28B7B6;">
        JOB SEARCH
      </p>
      <!-- <h1 class="text-dark fw-bold mt-0 mb-5">Search By Preference</h1> -->
      <div class="d-none d-md-block d-lg-block d-xl-block">
        <div
          class="form-control px-5 input-box mb-3 mx-auto row"
          style="max-width: 65%;"
        >
          <div class="col-md-6 col-lg-6 col-xl-6 text-start">
            <i class="bi bi-search"></i> &nbsp;
            <input
              required
              type="text"
              class="w-75"
              id="search"
              placeholder="Enter Search Keywords"
            />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <select
              class="form-select search-select"
              id="recruiter-type"
              style="max-width: 400px;"
              required
            >
              <option selected disabled>All Categories</option>
              <option value="IT">IT</option>
              <option value="Core">Core</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <button
              type="submit"
              class="form-control p-2 px-5 text-light search-btn"
              id="jobsearch"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="row mx-3 d-block d-md-none d-lg-none d-xl-none">
        <div
          class="col-md-6 col-lg-6 col-xl-6 text-start my-3"
          style="border: 2px solid #e4eaff; border-radius: 20px;"
        >
          <i class="bi bi-search"></i> &nbsp;
          <input
            required
            type="text"
            class="w-75"
            id="search"
            placeholder="Enter Search Keywords"
          />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <select
            class="form-select search-select"
            id="recruiter-type"
            style="max-width: 400px;"
            required
          >
            <option selected disabled>All Categories</option>
            <option value="IT">IT</option>
            <option value="Core">Core</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <button
            type="submit"
            class="form-control p-2 px-5 text-light search-btn"
            id="jobsearch"
          >
            Search
          </button>
        </div>
      </div>
      <h2 class="text-dark fw-bold mt-5 mb-4">Select your Diversity</h2>
      <div class="row container mx-auto">
        <div
          class="col-4 col-md-2 col-lg-2 col-xl-2 offset-md-1 offset-lg-1 offset-xl-1"
        >
          <img
            class="image-thumbnail w-75"
            src="../../assets/img/diversity-1.png"
            alt="logo"
          />
          <p class="my-2 text-primary" style="font-size: 14px; text-transform: uppercase;">FEMALE</p>
        </div>
        <div class="col-4 col-md-2 col-lg-2 col-xl-2">
          <img
            class="image-thumbnail w-75"
            src="../../assets/img/diversity-2.png"
            alt="logo"
          />
          <p class="my-2 text-primary" style="font-size: 14px; text-transform: uppercase;">LGBTQIA+</p>
        </div>
        <div class="col-4 col-md-2 col-lg-2 col-xl-2">
          <img
            class="image-thumbnail w-75"
            src="../../assets/img/diversity-3.png"
            alt="logo"
          />
          <p class="my-2 text-primary" style="font-size: 14px; text-transform: uppercase;">differently Abled</p>
        </div>
        <div class="col-4 col-md-2 col-lg-2 col-xl-2">
          <img
            class="image-thumbnail w-75"
            src="../../assets/img/diversity-4.png"
            alt="logo"
          />
          <p class="my-2 text-primary" style="font-size: 14px; text-transform: uppercase;">VETERAN</p>
        </div>
        <div class="col-4 col-md-2 col-lg-2 col-xl-2">
          <img
            class="image-thumbnail w-75"
            src="../../assets/img/diversity-5.png"
            alt="logo"
          />
          <p class="my-2 text-primary" style="font-size: 14px; text-transform: uppercase;">retirees</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import "../../assets/css/main.css";
</style>

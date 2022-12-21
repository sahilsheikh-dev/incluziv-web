<template>
  <div class="recruiter-dahboard">
    <Navbar />
    <div class="recruiter-dahboard-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-start">
              <v-expansion-panels :value="opened">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3 text-start">
                      <i class="bi bi-clock-history guideline-text"></i> &nbsp;
                      Recent Searches
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="recent-candidate-searches px-2">
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0">
                          Visa Counseller | 8 Yrs Exp. | Gurgaon
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0">
                          Software Dev. | 8 Yrs Exp. | Bangalore
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0">
                          Business Analyst | 3 Yrs Exp. | Mumbai
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3 text-start">
                      <i class="bi bi-clock-history guideline-text"></i> &nbsp;
                      Saved Searches
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="recent-candidate-searches px-2">
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0">
                          Visa Counseller | 8 Yrs Exp. | Gurgaon
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                      <div class="candidate-search mb-4">
                        <p class="fw-bold mb-0">
                          Software Dev. | 8 Yrs Exp. | Bangalore
                        </p>
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Fill this Search</a
                        >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          class="guideline-text mt-0 text-decoration-none"
                          >Search Profiles</a
                        >
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
        <div
          class="col-md-7 col-lg-7 col-xl-7 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 card-margin-x"
        >
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Search Candidate
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Enter Details
          </p>
          <div class="jobs-form">
            <form action="#" class="text-start">
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Keywords</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Keywords like skills, company, destination & company (, seperated)"
                    required
                  />
                </div>
              </div>
              <div class="user-details row mt-2">
                <p class="details fw-bold mt-4 mb-0">IT Skills</p>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="Add Skill"
                    required
                  />
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Add Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Experience</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Min Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 w-100 text-center">
                  <p
                    class="fw-bold text-center pt-2"
                    style="color: rgb(237, 62, 97) !important;"
                  >
                    to
                  </p>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Max Experience</option
                      >
                      <option value="1">2</option>
                      <option value="2">4</option>
                      <option value="3">8</option>
                      <option value="4">10</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-flex text-center mt-4">
                <p class="text-start fw-bold mb-0">
                  Increase your reach to diversity candidates
                </p>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2 mt-0">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-1.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    FEMALE
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-2.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    LGBTQIA+
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-3.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    DIFFERENTLY ABLED
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-4.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    VETERAN
                  </p>
                </div>
                <div class="col-4 col-md-2 col-lg-2 col-xl-2">
                  <img
                    class="img img-thumbnail border border-radius rounded"
                    src="../assets/img/diversity-5.png"
                  />
                  <p
                    style="font-size: 14px; font-weight: 600;"
                    class="text-uppercase mt-2"
                  >
                    RETIREES
                  </p>
                </div>
              </div>
              <div class="user-details mt-3 row">
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <p class="details fw-bold">
                    Current Location of Candidate
                  </p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Add Current Location</option
                    >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 mt-0 w-100">
                  <p class="details fw-bold">
                    Preferred Location of Candidate
                  </p>
                  <select
                    class="x input-border-pink p-2 px-3 select-height-45 w-100"
                  >
                    <option class="text-start" disabled selected
                      >Add Preferred Location</option
                    >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Annual Salary</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <input
                      type="number"
                      class="form-control x"
                      style="border-radius: 0;"
                      placeholder="Min Salary"
                      required
                    />
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 w-100 text-center">
                  <p
                    class="fw-bold text-center pt-2"
                    style="color: rgb(237, 62, 97) !important;"
                  >
                    to
                  </p>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <input
                      type="number"
                      class="form-control x"
                      style="border-radius: 0;"
                      placeholder="Max Salary (in lacs)"
                      required
                    />
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Employment Details
              </p>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Functional Area</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Functional Area"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Industry</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Industry"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Company</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Company (, seperated)"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Designation</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="+ Add Designation"
                    required
                  />
                </div>
              </div>
              <div class="user-details row mt-2">
                <p class="details fw-bold mt-4 mb-0">
                  Notice Period / Availability to Join
                  <i class="bi bi-question-circle guideline-text"></i>
                </p>
                <div class="col-md-6 col-lg-6 col-xl-6 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >eg. 15</option
                      >
                      <option value="10">Serving Notice</option>
                      <option value="10">15 Days</option>
                      <option value="10">30 Days</option>
                      <option value="10">45 Days</option>
                      <option value="10">60 Days</option>
                      <option value="10">90 Days</option>
                    </select>
                    <div class="input-group-append w-25 input-border-pink">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Days</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Education Details
              </p>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Basic Education</p>
                  <div class="row">
                    <div
                      class="col-md-6 col-lg-6 col-xl-6 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <select
                        class="mb-0 px-3 input-border-pink w-100 py-2 select-height-45 bg-light"
                      >
                        <option value="" class="" disabled selected
                          >Select</option
                        >
                        <option value="UG">Under Graduate</option>
                        <option value="4+ Years">Post Graduate</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">UG Qualification</p>
                  <div class="row">
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="ug-qualification"
                        id="any-ug-qualification"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="any-ug-qualification"
                        >Any UG Qualification</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="ug-qualification"
                        id="specific-ug-qualification"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="specific-ug-qualification"
                        >Specific UG Qualification</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="ug-qualification"
                        id="no-ug-qualification"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="no-ug-qualification"
                        >No UG Qualification</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">PG Qualification</p>
                  <div class="row">
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="pg-qualification"
                        id="any-pg-qualification"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="any-pg-qualification"
                        >Any PG Qualification</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="pg-qualification"
                        id="specific-pg-qualification"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="specific-pg-qualification"
                        >Specific PG Qualification</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="pg-qualification"
                        id="no-pg-qualification"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="no-pg-qualification"
                        >No PG Qualification</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Diversity Details
              </p>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Gender</p>
                  <div class="row">
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="gender"
                        id="all"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="all"
                        >All Candidates</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="gender"
                        id="male"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="male"
                        >Male Candidates</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="gender"
                        id="female"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="female"
                        >Female Candidates</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Candidate Category</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="Add Candidate Category"
                    required
                  />
                </div>
              </div> -->
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Candidate Age</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Min Age</option
                      >
                      <option value="1">18</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 w-100 text-center">
                  <p
                    class="fw-bold text-center pt-2"
                    style="color: rgb(237, 62, 97) !important;"
                  >
                    to
                  </p>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Max Age</option
                      >
                      <option value="1">19</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                      <option value="4">40</option>
                    </select>
                    <div class="input-group-append w-25">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >Years</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Work Details
              </p>
              <div class="user-details row">
                <p class="details fw-bold mt-3 mb-0">Show Candidate Seeking</p>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Job Type</option
                      >
                      <option value="1">Work From Home</option>
                      <option value="1">Work From Office</option>
                      <option value="1">Hybrid</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5 w-100">
                  <div
                    class="col input-group w-100 px-0 mt-0 py-0"
                    style="max-width: 500px;"
                  >
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-75"
                    >
                      <option class="text-start" disabled selected
                        >Employment Type</option
                      >
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                      <option value="3">Contractual</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Work Permit For</p>
                  <div class="input-group w-100 px-0 mt-0 py-0">
                    <select
                      class="x input-border-pink p-2 px-3 select-height-45 w-100"
                    >
                      <option class="text-start" disabled selected
                        >Choose Category</option
                      >
                      <option value="1">Type 1</option>
                      <option value="2">Type 2</option>
                      <option value="3">Type 3</option>
                      <option value="4">Type 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr />
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold"
                style="color: rgb(237, 62, 97);"
              >
                Display Details
              </p>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Show</p>
                  <div class="row">
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show"
                        id="all-candidates"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="all-candidates"
                        >All Candidates</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show"
                        id="new-candidates"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="new-candidates"
                        >New Candidates</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show"
                        id="modified-candidates"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="modified-candidates"
                        >Modified Candidates</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Show only candidates with</p>
                  <div class="row">
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show-only-with"
                        id="verified-mobile-number"
                        autocomplete="off"
                        checked
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="verified-mobile-number"
                        >Verified Mobile Number</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show-only-with"
                        id="verified-email"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="verified-email"
                        >Verified Email</label
                      >
                    </div>
                    <div
                      class="col-md-4 col-lg-4 col-xl-4 text-start text-md-center text-lg-center text-xl-center"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="show-only-with"
                        id="attached-resume"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger w-100"
                        style="border-radius: 30px !important;"
                        for="attached-resume"
                        >Attached Resume</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="button">
                <!-- <input type="submit" value="Next" /> -->
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="#/candidateResult"
                  >Search Candidates</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./elements/Navbar.vue";
import Footer from "./elements/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  name: "SearchCandidate",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Search Candidate"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

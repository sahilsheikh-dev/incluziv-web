<template>
  <div class="settings">
    <Navbar />
    <div class="settings-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-center">
              <v-expansion-panels :value="opened">
                <v-expansion-panel class="pb-4 card-height">
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3">
                      Settings <i class="bi bi-chevron-down"></i>
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="text-start">
                      <div class="text-start py-2">
                        <h6 class="fw-bold">
                          Filter Conversation
                        </h6>
                        <div class="w-100">
                          <input
                            class="input-border-pink py-2 px-3"
                            type="radio"
                            name="setting"
                            id="account-settings"
                            checked
                            v-on:click="accountActive()"
                          />
                          <label for="account-settings">Account Settings</label>
                        </div>
                        <div class="w-100">
                          <input
                            class="input-border-pink py-2 px-3"
                            type="radio"
                            name="setting"
                            id="notification-settings"
                            v-on:click="notificationActive()"
                          />
                          <label for="notification-settings"
                            >Notification Settings</label
                          >
                        </div>
                        <div class="w-100">
                          <input
                            class="input-border-pink py-2 px-3"
                            type="radio"
                            name="setting"
                            id="privacy-settings"
                            v-on:click="privacyActive()"
                          />
                          <label for="privacy-settings">Privacy Settings</label>
                        </div>
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
            Account Settings
          </h2>
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Manage all the settings here
          </p>
          <hr />
          <div>
            <form
              action="#"
              class="text-start account-settings-form"
              id="account-settings-form"
            >
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Name</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="Bhavik Arora"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Email</p>
                  <input
                    type="text"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Current Password</p>
                  <input
                    type="password"
                    class="x input-border-pink p-2 px-3 w-100"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">New Password</p>
                  <input
                    type="password"
                    class="x input-border-pink p-2 px-3 w-100"
                    required
                  />
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Phone</p>
                  <div class="col input-group w-100 px-0 mt-0 py-0">
                    <div class="input-group-append" style="width: 10%;">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >+91</span
                      >
                    </div>
                    <input
                      type="password"
                      class="x input-border-pink p-2 px-3"
                      style="width: 90%;"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Alternate Phone</p>
                  <div class="col input-group w-100 px-0 mt-0 py-0">
                    <div class="input-group-append" style="width: 10%;">
                      <span
                        class="input-group-text bg-danger rounded-0 text-light py-2"
                        id="basic-addon2"
                        >+91</span
                      >
                    </div>
                    <input
                      type="password"
                      class="x input-border-pink p-2 px-3"
                      style="width: 90%;"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="button">
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="/#/profile"
                  >SAVE CANGES</a
                >
              </div>
            </form>
            <form
              action="#"
              class="text-start notification-settings-form"
              id="notification-settings-form"
              style="display: none;"
            >
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Job Alert</p>
                  <div class="row w-100">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>What is your job search status?</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <select
                        class="x input-border-pink p-2 px-3 select-height-45 w-100"
                      >
                        <option class="text-start" disabled selected
                          >Actively Looking</option
                        >
                        <option value="1">Casually Looking</option>
                        <option value="2">Frequently Looking</option>
                      </select>
                    </div>
                  </div>
                  <p class="text-secondary mt-3">
                    When you are actuvely looking, your profile will be visibnle
                    to recruiters on high priority and you will recieve alerts.
                  </p>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Job Alert</p>
                  <div class="row">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>Messages from recuriters</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input input-toggle"
                          name="recruiters-messages"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row w-100">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>How often do you want profile viewed alert?</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <select
                        class="x input-border-pink p-2 px-3 select-height-45 w-100"
                      >
                        <option class="text-start" disabled selected
                          >Once a Day</option
                        >
                        <option value="1">Once a Day</option>
                        <option value="2">Once a Month</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Account and Updates</p>
                  <div class="row">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>Reminders to update your profile:</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input input-toggle"
                          name="recruiters-messages"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>Newsletters with career topics:</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input input-toggle"
                          name="recruiters-messages"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-mg-9 col-lg-9 col-xl-9">
                      <label>Feature updates:</label>
                    </div>
                    <div
                      class="col-md-3 col-lg-3 col-xl-3 input-group w-100 px-0 mt-0 py-0"
                    >
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input input-toggle"
                          name="recruiters-messages"
                          type="checkbox"
                          role="switch"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button">
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="/#/profile"
                  >SAVE CANGES</a
                >
              </div>
            </form>
            <form
              action="#"
              class="text-start privacy-settings-form"
              id="privacy-settings-form"
              style="display: none;"
            >
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">Select your privacy settings</p>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="privacy-setting"
                      id="all-companies"
                      checked
                      required
                    />
                    <label for="all-companies"
                      >Allow all companies to see my profile except the ones
                      that I block</label
                    >
                  </div>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="privacy-setting"
                      id="filtered-companies"
                      required
                    />
                    <label for="filtered-companies"
                      >Only companies that I apply for can see my profile</label
                    >
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">
                    Show your gender on your profile?
                  </p>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="gender-setting"
                      id="gender-yes"
                      checked
                      required
                    />
                    <label for="gender-yes">Yes</label>
                  </div>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="gender-setting"
                      id="gender-no"
                      required
                    />
                    <label for="gender-no">No</label>
                  </div>
                </div>
              </div>
              <div class="user-details">
                <div class="mt-4 w-100">
                  <p class="details fw-bold">
                    Show your diversity on your Profile?
                  </p>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="diversity-settings"
                      id="diversity-yes"
                      checked
                      required
                    />
                    <label for="diversity-yes">Yes</label>
                  </div>
                  <div class="w-100">
                    <input
                      type="radio"
                      class="x input-border-pink p-2 px-3"
                      name="diversity-settings"
                      id="diversity-no"
                      required
                    />
                    <label for="diversity-no">No</label>
                  </div>
                </div>
              </div>
              <div class="button">
                <a
                  class="btn text-decoration-none text-light p-2 px-5 btn-hover-pink"
                  style="background-color: rgb(237, 62, 97); border-radius: 0;"
                  href="/#/profile"
                  >SAVE CANGES</a
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
  name: "Settings",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Settings"
    };
  },
  methods: {
    accountActive: function() {
      document.getElementById("account-settings-form").style.display = "block";
      document.getElementById("notification-settings-form").style.display =
        "none";
      document.getElementById("privacy-settings-form").style.display = "none";
    },
    notificationActive: function() {
      document.getElementById("account-settings-form").style.display = "none";
      document.getElementById("notification-settings-form").style.display =
        "block";
      document.getElementById("privacy-settings-form").style.display = "none";
    },
    privacyActive: function() {
      document.getElementById("account-settings-form").style.display = "none";
      document.getElementById("notification-settings-form").style.display =
        "none";
      document.getElementById("privacy-settings-form").style.display = "block";
    }
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

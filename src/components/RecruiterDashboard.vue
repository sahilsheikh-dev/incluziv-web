<template>
  <div class="recruiter-dahboard">
    <Navbar />
    <div class="recruiter-dahboard-section">
      <div class="row my-3">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <div class="job-search-side-card mx-3">
            <div class="text-start">
              <v-expansion-panels :value="opened">
                <v-expansion-panel class="pb-4 card-height">
                  <v-expansion-panel-header>
                    <p class="text-dark fw-bold mt-3 text-start">
                      Your Chats <i class="bi bi-chevron-down"></i>
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="text-start">
                      <input
                        type="text"
                        class="x input-border-pink p-2 px-3 w-100 mt-0"
                        placeholder="Search"
                        required
                      />
                    </div>
                    <div class="chat-contacts px-2">
                      <div class="contact mt-1 row">
                        <div class="col-2">
                          <img
                            class="img-fluid contact-img"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                          />
                        </div>
                        <div class="col-10">
                          <p class="fw-bold text-pink py-2">John Deo</p>
                        </div>
                      </div>
                      <div class="contact mt-1 row">
                        <div class="col-2">
                          <img
                            class="img-fluid contact-img"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                          />
                        </div>
                        <div class="col-10">
                          <p class="fw-bold text-pink py-2">John Deo</p>
                        </div>
                      </div>
                      <div class="contact mt-1 row">
                        <div class="col-2">
                          <img
                            class="img-fluid contact-img"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                          />
                        </div>
                        <div class="col-10">
                          <p class="fw-bold text-pink py-2">John Deo</p>
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
          class="col-md-6 col-lg-6 col-xl-6 mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 card-margin-x"
        >
          <h2 class="text-md-start text-lg-start text-xl-start fw-bold">
            Recruiter Dashboard
          </h2>
          <hr />
          <p
            class="text-md-start text-lg-start text-xl-start fw-bold"
            style="color: rgb(237, 62, 97);"
          >
            Good evening, Bhavik!
          </p>
          <div class="px-2">
            <div
              class="card shadow p-3"
              style="border-radius: 30px !important;"
            >
              <div class="card-body">
                <p class="text-start fw-bold">
                  Recent Stats
                </p>
                <div class="stat-grid">
                  <div class="row">
                    <div class="col-6 col-md-3 col-lg-3 col-xl-3 border-end">
                      <h4
                        class="fw-bold"
                        style="color: rgb(237, 62, 97) !important;"
                      >
                        10
                      </h4>
                      <p class="my-1" style="font-size: 12px;">
                        Active Jobs
                      </p>
                      <img
                        class="img-fluid my-2"
                        style="max-width: 70px;"
                        src="../assets/img/stat-icon-1.png"
                        alt=""
                      />
                    </div>
                    <div
                      class="col-6 col-md-3 col-lg-3 col-xl-3 border-end border-none"
                    >
                      <h4
                        class="fw-bold"
                        style="color: rgb(237, 62, 97) !important;"
                      >
                        368
                      </h4>
                      <p class="my-1" style="font-size: 12px;">
                        New Applications
                      </p>
                      <img
                        class="img-fluid my-2"
                        style="max-width: 70px;"
                        src="../assets/img/stat-icon-2.png"
                        alt=""
                      />
                    </div>
                    <div class="col-6 col-md-3 col-lg-3 col-xl-3 border-end">
                      <h4
                        class="fw-bold"
                        style="color: rgb(237, 62, 97) !important;"
                      >
                        554
                      </h4>
                      <p class="my-1" style="font-size: 12px;">
                        Pending
                        <br class="d-block d-md-none d-lg-none d-xl-none" />
                        Rewives
                      </p>
                      <img
                        class="img-fluid my-2"
                        style="max-width: 70px;"
                        src="../assets/img/stat-icon-3.png"
                        alt=""
                      />
                    </div>
                    <div class="col-6 col-md-3 col-lg-3 col-xl-3">
                      <h4
                        class="fw-bold"
                        style="color: rgb(237, 62, 97) !important;"
                      >
                        52
                      </h4>
                      <p class="my-1" style="font-size: 12px;">
                        Shortlisted
                        <br class="d-block d-md-none d-lg-none d-xl-none" />
                        Candidate
                      </p>
                      <img
                        class="img-fluid my-2"
                        style="max-width: 70px;"
                        src="../assets/img/stat-icon-4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="interview-section mx-3">
              <p
                class="text-md-start text-lg-start text-xl-start fw-bold mt-4 mb-0"
                style="color: rgb(237, 62, 97);"
              >
                Upcoming Interviews
              </p>
              <p class="text-md-start text-lg-start text-xl-start mt-0 mx-3">
                <span class="fw-bold">3</span> interviews scheduled today
              </p>
              <div class="contact mt-1 row text-start mx-1">
                <div class="col-2 col-md-1 col-lg-1 col-xl-1">
                  <img
                    class="img-fluid contact-img"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="logo"
                  />
                </div>
                <div class="col-4 mt-2">
                  <p class="fw-bold text-pink">John Deo - 11am</p>
                </div>
                <div class="col-6 text-center mt-2">
                  <a
                    href="#"
                    target="_blank"
                    class="bg-pink p-2 px-3 text-decoration-none btn-hover-pink"
                    style="border-radius: 20px;"
                    >Open Meeting</a
                  >
                </div>
              </div>
              <div class="contact mt-1 row text-start mx-1">
                <div class="col-2 col-md-1 col-lg-1 col-xl-1">
                  <img
                    class="img-fluid contact-img"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="logo"
                  />
                </div>
                <div class="col-4 mt-2">
                  <p class="fw-bold text-pink">John Deo - 11am</p>
                </div>
                <div class="col-6 text-center mt-2">
                  <a
                    href="#"
                    target="_blank"
                    class="bg-pink p-2 px-3 text-decoration-none btn-hover-pink"
                    style="border-radius: 20px;"
                    >Open Meeting</a
                  >
                </div>
              </div>
              <div class="contact mt-1 row text-start mx-1">
                <div class="col-2 col-md-1 col-lg-1 col-xl-1">
                  <img
                    class="img-fluid contact-img"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="logo"
                  />
                </div>
                <div class="col-4 mt-2">
                  <p class="fw-bold text-pink">John Deo - 11am</p>
                </div>
                <div class="col-6 text-center mt-2">
                  <a
                    href="#"
                    target="_blank"
                    class="bg-pink p-2 px-3 text-decoration-none btn-hover-pink"
                    style="border-radius: 20px;"
                    >Open Meeting</a
                  >
                </div>
              </div>
            </div>
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
  name: "RecruiterDashboard",
  data() {
    return {
      opened: 0,
      msg: "Welcome to Recruiter Dashboard"
    };
  }
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
</style>

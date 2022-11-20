<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <!-- <a class="navbar-brand" href="#/">Incluzive</a> -->
      <a class="navbar-brand" href="#/">
        <img style="max-width: 100px;" src="../../assets/logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto fw-bold">
          <li class="nav-item">
            <a class="nav-link active mx-3" aria-current="page" href="#/"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/inbox">Inbox</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/jobseakers">Job Seakers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/employers">Employers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/community">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/upskills">Up Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mx-3" href="#/profile">Profile</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active mx-3 btn text-light px-3"
              href="#/login"
              style="background-color: #f33164; border-radius: 0;"
              >SIGN IN/SIGN UP</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import "../../assets/css/main.css";
</style>

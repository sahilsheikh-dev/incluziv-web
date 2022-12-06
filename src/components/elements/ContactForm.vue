<template>
  <div class="contact-form-section pt-5 mt-5 mb-0">
    <div class="pt-5 pb-0 container">
      <p class="text-primary mb-0" style="font-size: 14px;">
        CONTACT FORM
      </p>
      <h1 class="text-dark fw-bold mt-0 mb-5">Get in touch with us</h1>
      <form action="">
        <div class="row text-start">
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p>NAME</p>
            <input
              class="w-100"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              style="border-bottom: 2px solid black;"
            />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p>E-MAIL ADDRESS</p>
            <input
              class="w-100"
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              required
              style="border-bottom: 2px solid black;"
            />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p>PHONE NUMBER</p>
            <input
              class="w-100"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+91 5689754865"
              required
              style="border-bottom: 2px solid black;"
            />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p>SUBJECT</p>
            <input
              class="w-100"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              style="border-bottom: 2px solid black;"
            />
          </div>
          <div class="col-12">
            <p>MESSAGE</p>
            <textarea
              class="form-control"
              name="mesaage"
              id="message"
              placeholder="Message"
              required
              style="height: 100px; border: none; border-bottom: 2px solid black;"
            ></textarea>
            <div class="text-end">
              <button
                class="btn px-4 mt-3 bg-primary text-light btn-hover-blue"
                style="border: 2px solid #c7d3ff; border-radius: 20px;"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- <div class="map">
      <iframe
        class="w-100 mb-0 pb-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3680899703268!2d77.03774539999999!3d28.468459400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d184b4aaa7cb1%3A0x88f28291a777baf1!2s182%2C%20Old%20Delhi%20Gurgaon%20Rd%2C%20Prem%20Nagar%2C%20Sector%2013%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1668789573606!5m2!1sen!2sin"
        height="400"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> -->
  </div>
</template>

<style>
@import "../../assets/css/main.css";
</style>

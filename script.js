const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const loginLinks = document.querySelectorAll(".login-link");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const modalMarkup = `
  <div class="login-modal" id="loginModal" aria-hidden="true">
    <section class="login-box" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
      <header>
        <h2 id="loginTitle">Welcome Back</h2>
        <button class="close-login" type="button" aria-label="Close login">x</button>
      </header>
      <form class="login-form">
        <label>
          Parent Email
          <input type="email" name="email" autocomplete="email" placeholder="hello@example.com">
        </label>
        <label>
          Password
          <input type="password" name="password" autocomplete="current-password" placeholder="Password">
        </label>
        <button class="btn" type="submit">Login / Sign Up</button>
        <p class="login-note">A sample form for the Fairy Hummings website.</p>
      </form>
    </section>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", modalMarkup);

const loginModal = document.querySelector("#loginModal");
const closeLogin = document.querySelector(".close-login");

function setLoginOpen(isOpen) {
  loginModal.classList.toggle("open", isOpen);
  loginModal.setAttribute("aria-hidden", String(!isOpen));
}

loginLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setLoginOpen(true);
  });
});

closeLogin.addEventListener("click", () => setLoginOpen(false));

loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    setLoginOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLoginOpen(false);
  }
});

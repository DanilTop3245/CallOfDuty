import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfSBcu3HJUiZtwsqORODPOinXYZ0v4tLs",
  authDomain: "registration-66643.firebaseapp.com",
  projectId: "registration-66643",
  appId: "1:936305873313:web:b5ed76568510342c147be0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginBtn = document.querySelector(".login-btn");
const dropdown = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const snap = await getDoc(doc(db, "users", user.uid));
    const name = snap.exists() ? snap.data().username : "Игрок";
    loginBtn.innerHTML = `<span class="icon">👤</span> ${name}`;
    loginBtn.href = "#";

    // Показать/скрыть меню по клику
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "register.html";
});

// index.js
const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeMenuBtn');

burger.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});

function toggleDropdown() {
  const dropdown = document.getElementById('mobileDropdown');
  dropdown.classList.toggle('open');
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
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

let isLogin = true;

const form = document.getElementById("authForm");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const submitBtn = document.getElementById("submitBtn");
const usernameInput = form.username;
const repeatInput = form.repeat;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const email = form.email.value;
  const password = form.password.value;
  const repeatPassword = repeatInput.value;

  if (!isLogin) {
    if (password !== repeatPassword)
      return showMessage("Пароли не совпадают!", true);
    if (!username) return showMessage("Имя пользователя обязательно!", true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      await setDoc(doc(db, "users", uid), {
        username,
        email,
        createdAt: new Date(),
      });
      showMessage("✅ Аккаунт успешно создан!", false, "./index.html");
    } catch (error) {
      showMessage("❌ " + error.message, true);
    }
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      const docSnap = await getDoc(doc(db, "users", uid));
      const userData = docSnap.exists() ? docSnap.data() : {};
      showMessage(
        `👋 Добро пожаловать, ${userData.username || "игрок"}!`,
        false,
        "./index.html"
      );
    } catch (error) {
      showMessage("❌ " + error.message, true);
    }
  }
});

window.toggleMode = function () {
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? "Sign In" : "Register";
  submitBtn.textContent = isLogin ? "Sign In" : "Register";
  toggleText.innerHTML = isLogin
    ? `New here? <a onclick="toggleMode()">Create an account</a>`
    : `Already have an account? <a onclick="toggleMode()">Sign In</a>`;

  // Переключаем видимость
  usernameInput.style.display = isLogin ? "none" : "block";
  repeatInput.style.display = isLogin ? "none" : "block";

  // Переключаем обязательность
  usernameInput.required = !isLogin;
  repeatInput.required = !isLogin;
};


function showMessage(msg, isError = false, redirect = null) {
  const div = document.createElement("div");
  div.textContent = msg;
  div.className = `toast ${isError ? "error" : "success"}`;
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
    if (redirect) window.location.href = redirect;
  }, 2000);
}

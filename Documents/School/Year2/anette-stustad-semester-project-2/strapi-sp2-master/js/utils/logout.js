import { userKey, tokenKey } from "./storage.js";

const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", logout);

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

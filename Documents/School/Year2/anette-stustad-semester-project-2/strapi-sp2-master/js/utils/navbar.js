import { userKey, tokenKey } from "./storage.js";

const destionation = document.querySelector(".navPut");

export function determenUser() {
  const user = window.localStorage.getItem("user");
  console.log(user);
}

let userStatus = false;
let loginStatus = `<li class="nav-item">
                    <a class="nav-link" href="login.html">LOGIN</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="cart.html" id="cart">CART</a>
                  </li> `;

function fetchUser() {
  const user = JSON.parse(window.localStorage.getItem("user"));

  if (!user) {
    console.log("User is not logged in");
  } else {
    // console.log(user);
    const userRole = user.role.name;
    console.log(userRole);

    if (userRole === "Authenticated") {
      userStatus = true;
    }
    if ((userStatus = true)) {
      loginStatus = `
         
         <li class="nav-item">
           <div class="nav-link">HELLO ${user.username.toUpperCase()}</div>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="submitForm.html">ADD PRODUCT</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="cart.html" id="cart">CART</a>
          </li>
         <li class="nav-item">
         <button type="button" class="btn btn-secondary" id="logout">LOG OUT</button>
         </li>
         `;
    }
    console.log(userStatus);
    return;
  }
  return userStatus, loginStatus;
}
fetchUser();

export default function determenNav() {
  destionation.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
          <img src="../style/Logo.svg" alt="Shoe day Logo" height="55" class="d-inline-block align-text-top"/>
          </a>
      <div class="container-fluid navBar">
    <button
      class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="row">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarText">          
            <div class="d-flex bd-highlight">
              <div class="p-2 flex-grow-1 bd-highlight">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html" >HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="products.html">PRODUCTS</a>
                  </li>
                </ul>
            </div>
            </div>
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    ${loginStatus}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</nav>
                                `;
}

export function setupLogoutBtn() {
  if (userStatus) {
    const logoutBtn = document.querySelector("#logout");
    logoutBtn.addEventListener("click", logout);

    return;
  } else {
    console.log("User not signed in");
    return;
  }
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
  location.reload();
}

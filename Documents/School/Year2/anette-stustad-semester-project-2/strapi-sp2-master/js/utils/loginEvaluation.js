import { userKey, tokenKey } from "./storage.js";

export let userStatus = false;

export function fetchUser() {
  const user = JSON.parse(window.localStorage.getItem("user"));

  if (!user) {
    console.log("User is not logged in");
    return false;
  } else {
    const userRole = user.role.name;
    console.log(userRole);

    if (userRole === "Authenticated") {
      userStatus = true;
    }
    if ((userStatus = true)) {
      console.log("User is logged in");
      return true;
    }
    console.log(userStatus);
    return userStatus;
  }
}
fetchUser();

import { renderProduct } from "../utils/renderTeams2.js";

export const searchInput = document.querySelector("#searchInput");
// searchInput.addEventListener("keyup", searchProducts);

export function searchProducts(teams) {
  // const searchInput = document.querySelector("#searchInput");

  searchInput.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();
    console.log(searchValue);

    const filteredTeams = teams.filter(function (team) {
      if (
        team.title.toLowerCase().startsWith(searchValue) ||
        team.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    renderProduct(filteredTeams);
  };
}

// export function searchProducts(teams) {
//   console.log("stuff");
//   const search = document.querySelector("input");
//   const searchValue = search.value.trim().toLowerCase();

//   console.log(searchValue);

//   const filteredTeams = teams.filter(function (team) {
//     if (team.title.toLowerCase().startsWith(searchValue)) {
//       return true;
//     }
//   });
//   console.log(filteredTeams);
//   renderProduct(filteredTeams);
// }

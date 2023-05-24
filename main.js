/*/ This function is for loading the park data in the dropdown element on the search national parks page  */

document.addEventListener("DOMContentLoaded", () => {
  function populateParkDropdown(parkData) {
    const dropPark = document.querySelector("#park");
    for (const park of parkData) {
      const option = document.createElement("option");
      option.value = park;
      option.innerText = park;
      dropPark.appendChild(option);
    }
  }
  populateParkDropdown(parkTypesArray);
});

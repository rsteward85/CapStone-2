/*/ <!-- This function is for loading the park data in the dropdown element on the search national parks page 
 - I had help with using the "this" value from https://github.com/LTillett
        - --> */

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

function filterParkType(showMePark) {
  const selectedPark = nationalParksArray.filter((objectOfPark) =>
    objectOfPark.LocationName.includes(showMePark)
  );
  return selectedPark;
}

matchedState.forEach((element) => {
  // Assigned variables from array
  let localName = element.LocationName != null ? element.LocationName : "";
  let localCity = element.City != null ? element.City : "";
  let localState = element.State != null ? element.State : "";
  let localAddress = element.Address != null ? element.Address : "";
  let localVisit = element.Visit != null ? element.Visit : "";
  let locationItem = document.createElement("p");

  // Style <p> tags with CSS
  locationItem.classList.add("parkBlock");

  const args = [localName, localCity, localState, localAddress, localVisit];

  function parkFormat() {
    for (const arg of args) {
      locationItem.appendChild(document.createTextNode(arg));
      locationItem.appendChild(document.createElement("br"));
    }
  }
  function parkTable(value) {
    console.log("Selected park:", value);
  }
  const selectElement = document.querySelector("#park");
  selectElement.addEventListener("change", function () {
    parkTable(this.value);
  });
});

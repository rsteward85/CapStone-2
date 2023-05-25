// This section is for loading the dropdown from an array
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

  const parkDataContainer = document.querySelector("#parkData");

  function filterParkType(showMePark) {
    const selectedPark = nationalParksArray.filter((objectOfPark) =>
      objectOfPark.LocationName.includes(showMePark)
    );
    return selectedPark;
  }
// for creating a displaying the data from the selected park type dropdown
  function displayParkData(selectedPark) {
    parkDataContainer.innerHTML = ""; // Clear previous data
// recieved advice on how to format each line on the page from the array. Her github is https://github.com/LTillett
    selectedPark.forEach((park) => {
      const parkInfo = document.createElement("div");
      parkInfo.classList.add("parkInfo");

      const parkName = document.createElement("h2");
      parkName.innerText = park.LocationName;
      parkInfo.appendChild(parkName);

      const parkCity = document.createElement("p");
      parkCity.innerText = `City: ${park.City}`;
      parkInfo.appendChild(parkCity);

      const parkState = document.createElement("p");
      parkState.innerText = `State: ${park.State}`;
      parkInfo.appendChild(parkState);

      const parkAddress = document.createElement("p");
      parkAddress.innerText = `Address: ${park.Address}`;
      parkInfo.appendChild(parkAddress);

      if (park.Visit !== undefined) {
        const parkVisit = document.createElement("p");
        parkVisit.innerText = `Visit: ${park.Visit}`;
        parkInfo.appendChild(parkVisit);
      }

      parkDataContainer.appendChild(parkInfo);
    });
  }
// event listener for when a user selects a park type
  const selectElement = document.querySelector("#park");
  selectElement.addEventListener("change", function () {
    const selectedPark = filterParkType(this.value);
    displayParkData(selectedPark);
  });
});



  
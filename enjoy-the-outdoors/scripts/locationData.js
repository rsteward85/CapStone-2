const locationsArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
// document.addEventListener("DOMContentLoaded", () => {
//   function populateDropdown(locationState) {
//     const dropDown = document.querySelector("#location");
//     for (const location of locationState) {
//       const option = document.createElement("option");
//       option.value = location;
//       option.innerText = location;
//       dropDown.appendChild(option);
//     }
//   }

//   populateDropdown(locationsArray);

//   const locationDataContainer = document.querySelector("#parkData");

//   function filterLocationType(showMeState) {
//     const selectedLocation = nationalParksArray.filter(
//       (objectOfPark) => objectOfPark.State === showMeState
//     );
//     return selectedLocation;
//   }

//   function displayLocationData(selectedLocation) {
//     locationDataContainer.innerHTML = ""; // Clear previous data

//     selectedLocation.forEach((park) => {
//       const parkInfo = document.createElement("div");
//       parkInfo.classList.add("parkInfo");

//       const parkName = document.createElement("h2");
//       parkName.innerText = park.LocationName;
//       parkInfo.appendChild(parkName);

//       const parkCity = document.createElement("p");
//       parkCity.innerText = `City: ${park.City}`;
//       parkInfo.appendChild(parkCity);

//       const parkState = document.createElement("p");
//       parkState.innerText = `State: ${park.State}`;
//       parkInfo.appendChild(parkState);

//       const parkAddress = document.createElement("p");
//       parkAddress.innerText = `Address: ${park.Address}`;
//       parkInfo.appendChild(parkAddress);

//       if (park.Visit !== undefined) {
//         const parkVisit = document.createElement("p");
//         parkVisit.innerText = `Visit: ${park.Visit}`;
//         parkInfo.appendChild(parkVisit);
//       }

//       locationDataContainer.appendChild(parkInfo);
//     });
//   }

//   const selectElement = document.querySelector("#location");
//   selectElement.addEventListener("change", function () {
//     const selectedLocation = filterLocationType(this.value);
//     displayLocationData(selectedLocation);
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  function populateDropdown(locationState) {
    const dropDown = document.querySelector("#location");
    for (const location of locationState) {
      const option = document.createElement("option");
      option.value = location;
      option.innerText = location;
      dropDown.appendChild(option);
    }
  }

  populateDropdown(locationsArray);

  const locationDataContainer = document.querySelector("#parkData");

  function filterLocationType(showMeState) {
    const selectedLocation = nationalParksArray.filter(
      (objectOfPark) => objectOfPark.State === showMeState
    );
    return selectedLocation;
  }

  function displayLocationData(selectedLocation) {
    locationDataContainer.innerHTML = ""; // Clear previous data

    selectedLocation.forEach((park) => {
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

      locationDataContainer.appendChild(parkInfo);
    });
  }

  const selectElement = document.querySelector("#location");
  selectElement.addEventListener("change", function () {
    const selectedLocation = filterLocationType(this.value);
    displayLocationData(selectedLocation);
  });
});

function filterParkData(selectedPark, selectedState) {
  const filteredParkData = nationalParksArray.filter(
    (parkData) =>
      parkData.LocationName.includes(selectedPark) &&
      parkData.State === selectedState
  );
  return filteredParkData;
}

function filterStateData(selectedState, selectedPark) {
  const filteredStateData = nationalParksArray.filter(
    (parkData) =>
      parkData.State === selectedState &&
      (selectedPark === "" || parkData.LocationName.includes(selectedPark))
  );
  return filteredStateData;
}

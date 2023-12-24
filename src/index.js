async function getPlanet(planet) {
  let settings = {
    headers: { 'X-Api-Key': 'O2D0I/eAD2nOEGIwKS8SUQ==6onnjy6tWO27dUDf' }
  };

  let url = `https://api.api-ninjas.com/v1/planets?name=${planet}`;

  try {
    const response = await fetch(url, settings);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Sorry, some error occurred.", error);
  }
}

function displayPlanet(data) {
  let planet = data[0]

  const result = document.querySelector(".result");
  result.innerHTML = `
    <h1>PLANET FACTS</h1>
    <div class="result-wrapper">
      <div id="today">
        <h2>About</h2>
        <div class="today-wrapper">
          <div class="current">
            <div class="outlook">
              <div class="wind">
                <p>Name: ${planet.name}</p>
                <h1>Temperature: ${planet.temperature} K</h1>
              </div>
            </div>
            <div class="location">
              <h2>Information</h2>
              <table>
                  <tr>
                    <th>Planet</th>
                    <td>${planet.name}</td>
                  </tr>
                  <tr>
                    <th>Mass</th>
                    <td>${planet.mass}</td>
                  </tr>
                  <tr>
                    <th>Radius</th>
                    <td>${planet.radius}</td>
                  </tr>
                  <tr>
                    <th>Period</th>
                    <td>${planet.period} days</td>
                  </tr>
                  <tr>
                    <th>Semi Major Axis</th>
                    <td>${planet.semi_major_axis} AU</td>
                  </tr>
                  <tr>
                    <th>Temperature</th>
                    <td>${planet.temperature} K</td>
                  </tr>
                  <tr>
                    <th>Distance LY</th>
                    <td>${planet.distance_light_year} LY</td>
                  </tr>
                  <tr>
                    <th>Host Star Mass</th>
                    <td>${planet.host_star_mass}</td>
                  </tr>
                  <tr>
                    <th>Host Star Temperature</th>
                    <td>${planet.host_star_temperature} C<sup>0</sup></td>
                  </tr>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

window.addEventListener("DOMContentLoaded", async () => {
  let data = await getPlanet("Earth");
  displayPlanet(data);

  const searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector("#searchTerm");
    let planet = searchTerm.value;

    let data = await getPlanet(planet);
    displayPlanet(data);
    searchTerm.value = "";
  });
});
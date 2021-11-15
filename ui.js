class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {
    //Icons for each of the 5-days in the forecast
    var weatherIconUrlDay1 = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    var weatherIconUrlDay2 = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`
    var weatherIconUrlDay3 = `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`
    var weatherIconUrlDay4 = `http://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`
    var weatherIconUrlDay5 = `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`
    

        this.uiContainer.innerHTML = `
  <div class="container">
      <div class="row"> 
        <div class="card mx-auto mt-5 col-md" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}  ${data.list[0].dt_txt}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.list[0].main.temp_max}. Lows of ${data.list[0].main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.list[0].weather[0].description}.</p>
                <img src="${weatherIconUrlDay1}" class="rounded mx-auto d-block" alt="...">
            </div>
        </div>

        <div class="card mx-auto mt-5 col-md" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}  ${data.list[5].dt_txt}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.list[5].main.temp_max}. Lows of ${data.list[5].main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.list[5].weather[0].description}</p>
                <img src="${weatherIconUrlDay2}" class="rounded mx-auto d-block" alt="...">
            </div>
        </div>

        <div class="card mx-auto mt-5 col-md" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}  ${data.list[13].dt_txt}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.list[13].main.temp_max}. Lows of ${data.list[13].main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.list[13].weather[0].description}</p>
                <img src="${weatherIconUrlDay3}" class="rounded mx-auto d-block" alt="...">
            </div>
        </div>

        <div class="card mx-auto mt-5 col-md" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}  ${data.list[17].dt_txt}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.list[17].main.temp_max}. Lows of ${data.list[17].main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.list[17].weather[0].description}</p>
                <img src="${weatherIconUrlDay4}" class="rounded mx-auto d-block" alt="...">
            </div>
        </div>

        <div class="card mx-auto mt-5 col-md" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}  ${data.list[29].dt_txt}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.list[29].main.temp_max}. Lows of ${data.list[29].main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.list[29].weather[0].description}</p>
                <img src="${weatherIconUrlDay5}" class="rounded mx-auto d-block" alt="...">
            </div>
        </div>
      </div>
  </div>
        `;
    }

    
    clearUI() {
        uiContainer.innerHTML = "";
      }
    
      saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
      }
    
      getFromLS() {
        if (localStorage.getItem("city" == null)) {
          return this.defaultCity;
        } else {
          this.city = JSON.parse(localStorage.getItem("city"));
        }
    
        return this.city;
      }
    
    //   clearLS() {
    //     localStorage.clear();
}



//instanciate the classes 

const ft = new Fetch();
const ui = new UI();

//Event Listeners

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const currentValue = search.value;

    ft.getCurrent(currentValue).then((data) => {
        //call a UI method
        ui.populateUI(data);
        ui.saveToLS(data);
    });
});
window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLS();
    ui.populateUI(dataSaved);
  });
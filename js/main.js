//hidden menu
const hiddenMenuButton = document.querySelector('.hidden-menu-button');

hiddenMenuButton.addEventListener('click', function(){
    hiddenMenuButton.classList.toggle('hidden-menu-button--active');
});

//form persent
const range = document.getElementById("range");
const value = document.querySelector(".form__range-value");

range.addEventListener("input", () => {
  value.textContent = `${range.value}%`;
});
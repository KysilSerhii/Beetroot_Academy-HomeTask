(function initialScript() {
  const burgerButton = document.querySelector(".js-hamburger");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("is-active");
  });
})();

let switchMode = document.getElementById('switchMode');

switchMode.onclick = function () {
	let theme = document.getElementById('theme');

	if (theme.getAttribute('href') == "#") {
		theme.href ='assets/css/dark-theme.css';
	} else {
		theme.href ='#';
	}
}
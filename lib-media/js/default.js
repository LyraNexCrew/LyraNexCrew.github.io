// JavaScript Document
function turnto(url) {
	window.location.href = url;
}
function openwindow(url) {
    window.open(url);
}
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.menu');
	menuToggle.addEventListener('click', function() {
		menu.classList.toggle('show');
	});
});
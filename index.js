document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.vid-container video');
    video.play();
});

const itemLink1 = document.getElementById('item-link-1');
const itemLink2 = document.getElementById('item-link-1');
const itemLink3 = document.getElementById('item-link-1');

itemLink1.addEventListener('click', function (event) {
    event.preventDefault();
});
itemLink2.addEventListener('click', function (event) {
    event.preventDefault();
});
itemLink3.addEventListener('click', function (event) {
    event.preventDefault();
});
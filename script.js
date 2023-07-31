var images = [
    "image_nomal.jpg",
    "image_family.jpg",
    "image_officeclerk.jpg",
    "image_boss.jpg",
    "image_student.jpg",
    // add as many images as you want
];

var button = document.getElementById('randomButton');
var imageContainer = document.getElementById('imageContainer');

button.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var html = `<img src="${images[randomIndex]}" alt="Random Image">`;
    imageContainer.innerHTML = html;
});

var img = document.getElementById('image');

img.onmouseover = function () {
   this.src = 'image1_2.jpg';
};

img.onmouseout = function() {
	this.src = 'image1.jpg';
};
$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});


$(document).ready(function(){
$('#hamb').click(function(){
$('#navbarResponsive').stop().slideToggle(300);
});
});
   
$(document).ready(function(){
$('#mintro, #mhome, #mtechnology, #mresearch, #mpublications, #mcompany, #mcontact').click(function(){
$('#navbarResponsive').stop().slideToggle(300);
});
});

$("#mcontact, #ncontact").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#mpublications, #npublications").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#publications").offset().top
    }, 1000);
});

$("#mresearch, #nresearch").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#research").offset().top
    }, 1000);
});

$("#mcompany, #ncompany").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#company").offset().top
    }, 1000);
});

$("#mtechnology, #ntechnology").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#technology").offset().top
    }, 1000);
});

$("#mintro, #nintro").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});

$("#mhome, #nhome").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

function openModal() {
			document.getElementById('myModal').style.display = "block";
		}

		// Close the Modal
		function closeModal() {
			document.getElementById('myModal').style.display = "none";
		}

		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		function showSlides(n) {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("demo");
			var captionText = document.getElementById("caption");
			if (n > slides.length) {
				slideIndex = 1
			}
			if (n < 1) {
				slideIndex = slides.length
			}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
			captionText.innerHTML = dots[slideIndex - 1].alt;
		}
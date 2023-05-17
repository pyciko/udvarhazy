function openNav() {
	document.getElementById("mobile-nav").style.left = "0px";
    document.body.style.overflowY = 'hidden';
}

function closeNav() {
	document.getElementById("mobile-nav").style.left = "-100%";
    document.body.style.overflowY = 'visible';
}

var nav = document.getElementById("pc-nav");
var initialNavOffset = nav.offsetTop - 16;

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-button").style.display = "block";
    } else {
        document.getElementById("scroll-button").style.display = "none";
    }

    if (window.pageYOffset > initialNavOffset) {
        nav.classList.add("nav-sticky");
    } else {
        nav.classList.remove("nav-sticky");
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
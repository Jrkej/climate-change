window.onscroll = function() {
    resizeCanvas();
}
function resizeCanvas() {
    for (item of document.getElementsByClassName("snow")) {
        item.style.marginTop = window.scrollY+"px";
    }
    if (window.scrollY > 460) {
        document.getElementById("scroller").style = "transition:2s;transform: rotate3d(0, 0, 1, 180deg);margin-top:-60vh;"
    }
    else {
        document.getElementById("scroller").style = "transition:2s;transform: rotate3d(0, 0, 1, 0deg);"
    }

}
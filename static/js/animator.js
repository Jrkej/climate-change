window.onscroll = function() {
    resizeCanvas();
}
function resizeCanvas() {
    for (item of document.getElementsByClassName("snow")) {
        item.style.marginTop = window.scrollY+"px";
    }
    if (window.scrollY > 460) {
        document.getElementById("scroller").style = "transition:2s;transform: rotate3d(0, 0, 1, 180deg);margin-top:-55vh;"
    }
    else {
        document.getElementById("scroller").style = "transition:2s;transform: rotate3d(0, 0, 1, 0deg);"
    }

}
function copy() {
    var copyText = document.getElementById("fixed");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the link: " + copyText.value);
}
let banner = document.getElementById("bannerTitle");
let b1 = document.getElementById("button1");
let b2 = document.getElementById("button2");

aboutClicked = () => {
    banner.innerHTML = "ABOUT US";
    banner.style.top = "200px";
    banner.style.fontSize = "100px";
    b1.remove();
    b2.remove();
}

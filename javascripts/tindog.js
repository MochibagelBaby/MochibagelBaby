// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").style.padding = "0";
        document.getElementById("navbar").style.backgroundColor = "rgb(195 45 67 / 95%)";
        document.getElementById("navbar").style.backdropFilter = "blur(20px)";
        document.getElementById("navbar").style.boxShadow = "rgb(0 0 0 / 20%) 0px 2px 8px";
        document.getElementById("navbar-brand").style.fontSize = "1.875rem";
        // document.getElementsById("navBtnDownload").style.backgroundColor = "rgb(141 29 46 / 95%) !important";
    } else {
        document.getElementById("navbar").style.padding = "2rem 0 0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.backdropFilter = "blur(0)";
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar-brand").style.fontSize = "2.125rem";
        // document.getElementsById("navBtnDownload").style.backgroundColor = "rgb(195 45 67 / 95%)";
    }

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        // document.getElementById("navbar-mobile").style.backgroundColor = "rgb(195 45 67 / 95%)";
        document.getElementById("navbar-tablet").style.padding = "0";
        document.getElementById("navbar-tablet").style.backgroundImage = "linear-gradient( 50deg, rgb(195 45 67 / 95%), rgb(195 45 67 / 95%))";
        document.getElementById("navbar-tablet").style.backdropFilter = "blur(20px)";
        document.getElementById("navbar-tablet").style.boxShadow = "rgb(0 0 0 / 20%) 0px 2px 8px";
        document.getElementById("navbar-brand-tablet").style.fontSize = "1.75rem";
        
        document.getElementById("navbar-mobile").style.backgroundImage = "linear-gradient( 50deg, rgb(195 45 67 / 95%), rgb(195 45 67 / 95%))";
        document.getElementById("navbar-mobile").style.backdropFilter = "blur(20px)";
        document.getElementById("navbar-mobile").style.boxShadow = "rgb(0 0 0 / 20%) 0px 2px 8px";
        document.getElementById("navbar-brand-mobile").style.fontSize = "1.5rem";
        // document.getElementsById("navBtnDownload").style.backgroundColor = "rgb(141 29 46 / 95%) !important";
    } else {
        // document.getElementById("navbar-mobile").style.padding = "0";
        // document.getElementById("navbar-mobile").style.backgroundColor = "transparent";
        document.getElementById("navbar-tablet").style.padding = "1rem 0 0";
        document.getElementById("navbar-tablet").style.backgroundImage = "linear-gradient(50deg, #ff5d68, #ff7967)";
        document.getElementById("navbar-tablet").style.backdropFilter = "blur(0)";
        document.getElementById("navbar-tablet").style.boxShadow = "none";
        document.getElementById("navbar-brand-tablet").style.fontSize = "1.9375rem";
        
        document.getElementById("navbar-mobile").style.backgroundImage = "linear-gradient( 50deg, #ff6c68, #ff7967)";
        document.getElementById("navbar-mobile").style.backdropFilter = "blur(0)";
        document.getElementById("navbar-mobile").style.boxShadow = "none";
        document.getElementById("navbar-brand-mobile").style.fontSize = "1.625rem";
        // document.getElementsById("navBtnDownload").style.backgroundColor = "rgb(195 45 67 / 95%)";
    }
}
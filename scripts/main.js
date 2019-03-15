var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo-quantum-high-res.cfd87a8f62ae.png') {
        myImage.setAttribute('src', 'images/Mozilla_Firefox_Logo.png');
    } else if (mySrc === 'images/Mozilla_Firefox_Logo.png') {
        myImage.setAttribute('src', 'images/waterfox-firefox.png');
    } else if (mySrc === 'images/waterfox-firefox.png') {
        myImage.setAttribute('src', 'images/967px-Mozilla_Firefox_logo_2013.svg.png');
    } else if (mySrc === 'images/967px-Mozilla_Firefox_logo_2013.svg.png') {
        myImage.setAttribute('src', 'images/FireFox.png');
    } else if (mySrc === 'images/FireFox.png') {
        myImage.setAttribute('src', 'images/firefox_blue_and_black_psd_by_wsaconato-d6d7xbn.png');
    } else if (mySrc === 'images/firefox_blue_and_black_psd_by_wsaconato-d6d7xbn.png') {
        myImage.setAttribute('src', 'images/Firefox_bw.png');
    } else if (mySrc === 'images/Firefox_bw.png') {
        myImage.setAttribute('src', 'images/firefox-krawate.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo-quantum-high-res.cfd87a8f62ae.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla ist cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ist cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let button = document.querySelector('#left-button')
button.addEventListener('click', function(e) {
    var date = document.querySelector('#due').value.split("/");
    var CurrDate = new Date();
    document.querySelector('#rem').innerText = (CurrDate.getDate() - parseInt(date[0]) + ' days remaining');
});
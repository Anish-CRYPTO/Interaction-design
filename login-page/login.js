let Username = document.getElementById('UserName').Value;
let Password = document.getElementById('Wachtwoord').Value;
let button = document.getElementById('Login');
let adminGebruikersNaam = "Anish"; 
let adminWachtwoord = "Khedoe";

button.addEventListener("click",
function()
{
    //alert(document.getElementById('UserName').value);

    if (document.getElementById('UserName').value == adminGebruikersNaam && document.getElementById('Wachtwoord').value == adminWachtwoord) {
        alert("het klopt");
        window.location.href ='startPage.html';
    };
});





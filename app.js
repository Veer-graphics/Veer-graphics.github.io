function openIronMan()
{
    document.getElementById("ironMan").style.display = "block";
}
function closeIronMan()
{
    document.getElementById("ironMan").style.display = "none";
}
function openMagazine()
{
    document.getElementById("magazine").style.display = "block";
}
function closeMagazine()
{
    document.getElementById("magazine").style.display = "none";
}
function openMakreel()
{
    document.getElementById("makreel").style.display = "block";
}
function closeMakreel()
{
    document.getElementById("makreel").style.display = "none";
}
function openCommunicationTool()
{
    document.getElementById("communicationTool").style.display = "block";
}
function closeCommunicationTool()
{
    document.getElementById("communicationTool").style.display = "none";
}
function openPinkPopApp()
{
    document.getElementById("pinkPopApp").style.display = "block";
}
function closePinkPopApp()
{
    document.getElementById("pinkPopApp").style.display = "none";
}
function openCharacterDesignAnimation()
{
    document.getElementById("character-animation").style.display = "block";
}
function closeCharacterDesignAnimation()
{
    document.getElementById("character-animation").style.display = "none";
}
function openNetflixSerie()
{
    document.getElementById("netflix").style.display = "block";
}
function closeNetflixSerie()
{
    document.getElementById("netflix").style.display = "none";
}
function openMobileMenu()
{
    document.getElementById("mobileNav").style.display = "block";
}
function closeMobileMenu()
{
    document.getElementById("mobileNav").style.display = "none";
}
function openIronManMobile()
{
    document.getElementById("ironManMobile").style.display = "block";
}
function closeIronManMobile()
{
    document.getElementById("ironManMobile").style.display = "none";
}
function openMagazineMobile()
{
    document.getElementById("MagazineMobile").style.display = "block";
}
function closeMagazineMobile()
{
    document.getElementById("MagazineMobile").style.display = "none";
}
function openMakreelMobile()
{
    document.getElementById("makreel-mobile").style.display = "block";
}
function closeMakreelMobile()
{
    document.getElementById("makreel-mobile").style.display = "none";
}
function openCommunicationToolMobile()
{
    document.getElementById("communicationToolMobile").style.display = "block";
}
function closeCommunicationToolMobile()
{
    document.getElementById("communicationToolMobile").style.display = "none";
}
function openPinkpopPlannerAppMobile()
{
    document.getElementById("pinkpopPlannerMobile").style.display = "block";
}
function closePinkpopPlannerMobile()
{
    document.getElementById("pinkpopPlannerMobile").style.display = "none";
}
function openCharacterAnimationMobile()
{
    document.getElementById("characterAnimation").style.display = "block";
}
function closeCharacterAnimationMobile()
{
    document.getElementById("characterAnimation").style.display = "none";
}
function openNetflixMobile()
{
    document.getElementById("netflixMobile").style.display = "block";
}
function closeNetFlixMobile()
{
    document.getElementById("netflixMobile").style.display = "none";
}

// Slider Makreel

var currentIndex = 1;
displaySlides(currentIndex);


function setSlides(num){
    displaySlides(currentIndex += num);
}
 
function displaySlides(num)
{
    var x;
    var slides = document.querySelectorAll(".slide");
    if(num > slides.length){ currentIndex = 1}
    if(num < 1){ currentIndex = slides.length}
    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }
    slides[currentIndex -1].style.display = "block";
}

// Slider Netflix desktop

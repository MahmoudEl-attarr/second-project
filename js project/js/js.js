// check if there's local storage Color option
let mainColors=localStorage.getItem("colors");
if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color', mainColors);
    
    // Remove Active Class from all colors list item
    document.querySelectorAll(".color-list li").forEach(element =>{
       element.classList.remove("active");
    // Add Active Class On Element with Data-color === local Storage Item
        if (element.dataset.color === localStorage.getItem("colors")){
            element.classList.add("active");
        }
    });
}
// Random Background Option
let backgroundOption = true;
// Variable To Control The Background Interval
let backgroundInterval;
// check if there is local storage random bachground item
 let backgroundLocalItem = localStorage.getItem("background_option");
// check if random background local storage is not empty
 if (backgroundLocalItem !== null){
     if (backgroundLocalItem === 'true'){
         backgroundOption = true;
     } else{
         backgroundOption = false;
     }
     // remove active class from all span
     document.querySelectorAll(".random-background span").forEach(element =>{
         element.classList.remove("active");
     });
     if (backgroundLocalItem === 'true'){
         document.querySelector(".random-background .yes").classList.add("active");
     } else {
         document.querySelector(".random-background .no").classList.add("active");
     }
 }
// Toggle Spin Class On Icon
document.querySelector(".setting-box .icon").onclick = function(){
    // Toggle Class Fa-Spin for rotation
    this.classList.toggle("fa-spin"); 
    
    // Toggle Class Open for Open Setting-box
    document.querySelector(".setting-box").classList.toggle("open");
};
// Start Switch color
const colorsLi = document.querySelectorAll(".color-list li");
// Loop On All List Items
colorsLi.forEach(li => {

  // Click On all List Items  
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("colors", e.target.dataset.color);

   handelActive(e);
  });

});
// Start Switch background option
const randomBackground = document.querySelectorAll(".random-background span");
// Loop On All Spans
randomBackground.forEach(span => {

  // Click On every span  
  span.addEventListener("click", (e) => {
      
    handelActive(e);
    
      if (e.target.dataset.background === 'yes'){
          
          backgroundOption = true;
          randomizeImgs();
          localStorage.setItem("background_option", true);
          
      } else {
          backgroundOption = false;
          clearInterval(backgroundInterval);
          localStorage.setItem("background_option", false);
      } 
  });
});

// select landing Page imgs
let landingPage = document.querySelector(".landing-page");
// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg","03.jpg", "04.jpg", "05.jpg"];
// function to ramdonize imgs
function randomizeImgs(){
    
    if (backgroundOption === true){
        
        backgroundInterval = setInterval(function(){

        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Iamge Url 
        landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';    
        },1000);

    }
    
}
randomizeImgs();
// Select Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});
// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});
//select all bulles
const allBullets = document.querySelectorAll(".nav-bullet .bullet");
const alllinks = document.querySelectorAll(".list-of-header li a");
function scrollToTarget(elements) {
    
    elements.forEach(element => {
        
        element.addEventListener("click", (e) => {
            
            e.preventDefault();
            
            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: 'smooth'
      }); 
            
   }); 
        
});  
    
}
scrollToTarget(allBullets);
scrollToTarget(alllinks);
// Handel Active Class 
function handelActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
       element.classList.remove("active"); 
    });
    e.target.classList.add("active");
}

let bulletSpan = document.querySelectorAll(".bullets span");

let bulletContainer = document.querySelector(".nav-bullet");

let bulletLocalItem = localStorage.getItem("bullets");

if (bulletLocalItem !== null){
    bulletSpan.forEach(span =>{
       span.classList.remove("active"); 
    });
    
    if (bulletLocalItem === 'block'){
        bulletContainer.style.display ="block";
        document.querySelector(".bullets .yes").classList.add("active");
    }else{
        
        bulletContainer.style.display ="none";
        document.querySelector(".bullets .no").classList.add("active");
    }
}

    bulletSpan.forEach(span =>{    
        span.addEventListener("click", (e)=>{
            if (span.dataset.display === "show"){
                bulletContainer.style.display = "block";
                localStorage.setItem("bullets", "block");
            } else {
                bulletContainer.style.display = "none";
                localStorage.setItem("bullets", "none");
            }
            handelActive(e);
        });
    });


// Reset Button

document.querySelector(".reset-box").onclick = function(){
    
    localStorage.removeItem("colors");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets");
    window.location.reload();
};

let toggleBtn = document.querySelector(".toggle-menu");

let toggleLinks = document.querySelector(".list-of-header");

toggleBtn.onclick = function (e){
    this.classList.toggle("menu-active");
    toggleLinks.classList.toggle("open");
        e.stopPropagation();

}
// click anywhere outside menu and toggle button to close it
document.addEventListener("click", (e) =>{
    if (e.target !== toggleBtn && e.target !== toggleLinks){
        
        if (toggleLinks.classList.contains("open")){
            // toggle class "menu-active" ob Button
            toggleBtn.classList.toggle("menu-active");
            //toggle class "open" on links
            toggleLinks.classList.toggle("open");
        }
    }
    
});

toggleLinks.onclick = function (e){
    e.stopPropagation();
}
/*
The Idea I have in my head is that I want to create some slides, where it loops through the slides and shows the slides one by one, each slide having a pragrapgh and a picture with the heading of the name of bread.

You have the choice to let the slide go on it's own you also have the choice to slide it with the press of the left and right button.

*/ 

// Remember to grab all the elements that will be used in the html and bring it into the JavaScript

const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`;
    })

    let counter = 0;
    
    nextBtn.addEventListener("click", function () {
        counter++;
        carousel();
    });

    prevBtn.addEventListener("click", function (){
        counter--;
        carousel();
    })

    
    
    function carousel() {
      // working with slides
      // if (counter === slides.length) {
        //   counter = 0;
        // }
        // if (counter < 0) {
    //   counter = slides.length - 1;
    // }
    // working with buttons
    
    /* These are the buttons to the slides, 
     when the buttons are pressed then the slides move to the left and the right adn vice versa. */
     
     if (counter < slides.length - 1) {
       nextBtn.style.display = "block";
      } else {
        nextBtn.style.display = "none";
      }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  
  prevBtn.style.display = "none";

  
  // extra code snippets

  // This function will let the slide run atomaticly without the press of next and prev buttons.
  
  //   const intervalId = setInterval(function () {
    //     counter++;
    //     carousel();
    //     }, 5000);
    
    
    //  Bread Selection
    
    // const breadList = [
    //     {
    //         name: "",
    //         image:"",
    //         description:"",
    //         link: "",
    
    //     },
    // ];
    // const bread = document.getElementsByClassName("slide__container");
    
    // // setting the initial starting index number to zero.
    
    // let currentBreadIndex = 0;
    
    // function changeWord(){
    //         bread.classList.add("changed")
    //         setTimeout(() => {
    //                 bread.textContent = breadSelection[currentBreadIndex];
    //         currentBreadIndex = (currentBreadIndex + 1) % breadSelection.length;
    //         bread.classList.remove('changed')
    //     }, 2000);
    
    // }
    
    // setInterval(changeWord, 6000)
  //   drop Down
  
  // const dropdown = document.querySelector('.dropdown');
  // const dropbtn = document.querySelector('.dropdown .dropbtn');
  // const dropdownContent = document.querySelector('.dropdown-content');
  
  // dropbtn.addEventListener('click', () => {
  //   dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  // });
document.addEventListener("DOMContentLoaded", function () {
    const numberElement = document.querySelector(".number");
    const incButton = document.querySelector(".btn-inc");
    const decButton = document.querySelector(".btn-dec");
    const clrButton = document.querySelector(".btn-clr");
    
    let count = 0;
    
    incButton.addEventListener("click", function () {
     if (count < 99999) {
      count++;
      updateNumber();
     }
    });
    
    decButton.addEventListener("click", function () {
     if (count > 0) {
      count--;
      updateNumber();
     }
    });
    
    clrButton.addEventListener("click", function () {
     count = 0;
     updateNumber();
    });
    
    function updateNumber() {
     numberElement.textContent = count;
    }
   });
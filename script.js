 // 

document.addEventListener("DOMContentLoaded", function() {
    let moreIcon = document.getElementById("moreIcon");
    let toggleDiv = document.getElementById("toggleDiv");
    let arrowDownIcon = document.getElementById("arrowdown")
    let arrowDownDiv = document.getElementById("arrowdowndiv")
    let helpIcon = document.getElementById("helpicon")
    let helpDiv = document.getElementById("helpdiv")
    let accountImg = document.getElementById("accountimg")
    let accountDiv = document.getElementById("accountdiv")


  
moreIcon.addEventListener("click", () => {
  
      toggleDiv.classList.toggle("hidden");
    }); 


  arrowDownIcon.addEventListener('click', () => {

    arrowDownDiv.classList.toggle('hidden')

  })

  helpIcon.addEventListener('click', () => {
    helpDiv.classList.toggle("hidden")
  });


  accountImg.addEventListener('click', () => {
    accountDiv.classList.toggle('hidden')
  })


  });

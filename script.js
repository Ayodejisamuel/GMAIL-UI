 document.addEventListener("DOMContentLoaded", function() {
  let moreIcon = document.getElementById("moreIcon");
  let toggleDiv = document.getElementById("toggleDiv");
  let arrowDownIcon = document.getElementById("arrowdown");
  let arrowDownDiv = document.getElementById("arrowdowndiv");
  let helpIcon = document.getElementById("helpicon");
  let helpDiv = document.getElementById("helpdiv");
  let accountImg = document.getElementById("accountimg");
  let accountDiv = document.getElementById("accountdiv");

  moreIcon.addEventListener("click", () => {

    toggleDiv.classList.toggle("hidden");
    
  });

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (
      clickedElement !== toggleDiv &&
      !toggleDiv.contains(clickedElement) &&
      clickedElement !== moreIcon
    ) {
    toggleDiv.classList.add("hidden");

    } 

  });

  arrowDownIcon.addEventListener("click", () => {
    arrowDownDiv.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (
      clickedElement !== arrowDownDiv &&
      !arrowDownDiv.contains(clickedElement) &&
      clickedElement !== arrowDownIcon
    ) {
    arrowDownDiv.classList.add("hidden");

    } 

  });

  helpIcon.addEventListener("click", () => {
    helpDiv.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (
      clickedElement !== helpDiv &&
      !helpDiv.contains(clickedElement) &&
      clickedElement !== helpIcon
    ) {
    helpDiv.classList.add("hidden");

    } 

  });

  accountImg.addEventListener("click", () => {
    accountDiv.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (
      clickedElement !== accountDiv &&
      !accountDiv.contains(clickedElement) &&
      clickedElement !== accountImg
    ) {
    accountDiv.classList.add("hidden");

    } 

  });

  

  
});

// // Transportation
// const transportHeader = document.getElementById("transport-header");
// const transportContent = document.getElementById("transport-content");

// // Add click event listener to the "Transportation" header
// transportHeader.addEventListener("click", () => {
//     // Toggle the visibility of transport content
//     transportContent.classList.toggle("hidden");
// });

// // Stay
// const stayHeader = document.getElementById("stay-header");
// const stayContent = document.getElementById("stay-content");

// // Add click event listener to the "Transportation" header
// stayHeader.addEventListener("click", () => {
//     // Toggle the visibility of transport content
//     stayContent.classList.toggle("hidden");
// });

// // Food
// const foodHeader = document.getElementById("food-header");
// const foodContent = document.getElementById("food-content");

// // Add click event listener to the "Transportation" header
// foodHeader.addEventListener("click", () => {
//     // Toggle the visibility of transport content
//     foodContent.classList.toggle("hidden");
// });


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// // Function to toggle visibility of content
// function toggleContent(contentId) {
//     const content = document.getElementById(contentId);
//     content.classList.toggle("hidden");
// }

// // Add click event listeners to the headers
// document.getElementById("transport-header").addEventListener("click", () => {
//     toggleContent("transport-content");
// });

// document.getElementById("stay-header").addEventListener("click", () => {
//     toggleContent("stay-content");
// });

// document.getElementById("food-header").addEventListener("click", () => {
//     toggleContent("food-content");
// });
// //


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Transportation
const transportHeader = document.getElementById("transport-header");
const transportContent = document.getElementById("transport-content");

// Stay
const stayHeader = document.getElementById("stay-header");
const stayContent = document.getElementById("stay-content");

// Food
const foodHeader = document.getElementById("food-header");
const foodContent = document.getElementById("food-content");

// Function to hide all content sections except the one clicked
function hideAllExcept(targetContent) {
  const allContentSections = [transportContent, stayContent, foodContent];
  
  for (const contentSection of allContentSections) {
    if (contentSection !== targetContent) {
      contentSection.classList.add("hidden");
    }
  }
}

// Add click event listeners to the section headers
transportHeader.addEventListener("click", function() {
  transportContent.classList.toggle("hidden");
  hideAllExcept(transportContent);
});

stayHeader.addEventListener("click", function() {
  stayContent.classList.toggle("hidden");
  hideAllExcept(stayContent);
});

foodHeader.addEventListener("click", function() {
  foodContent.classList.toggle("hidden");
  hideAllExcept(foodContent);
});


// Show popup after a delay (e.g., 3 seconds after page loads)
window.onload = function() {
    setTimeout(showPopup, 3000); // 3000 milliseconds = 3 seconds
};

// Function to display the popup
function showPopup() {
    document.getElementById("popupCTA").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popupCTA").style.display = "none";
}


// // JavaScript to create a modern menu with tabs for viewing sections

// // Function to open a tab and display its content
// // Function to toggle the display of tab contents
// function openTab(tabId) {
//     // Get all tab content elements
//     const tabContents = document.querySelectorAll('.tab-content');
//     tabContents.forEach(content => {
//         content.classList.remove('active'); // Hide all content
//     });

//     // Get all tab buttons
//     const tabButtons = document.querySelectorAll('.tab-button');
//     tabButtons.forEach(button => {
//         button.classList.remove('active'); // Remove active state from all buttons
//     });

//     // Show the selected tab content
//     document.getElementById(tabId).classList.add('active');

//     // Highlight the clicked tab button
//     event.currentTarget.classList.add('active');
// }

// // Automatically display the first tab on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const firstButton = document.querySelector('.tab-button');
//     if (firstButton) {
//         firstButton.click();
//     }
// });

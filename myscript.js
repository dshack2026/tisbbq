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

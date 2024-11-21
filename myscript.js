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

function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the clicked tab's content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

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


// JavaScript to create a modern menu with tabs for viewing sections

// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle tab switching
    function switchTab(event) {
        // Remove the 'active' class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add the 'active' class to the clicked button and its associated content
        const targetTab = event.currentTarget.dataset.target;
        event.currentTarget.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    }

    // Attach click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});

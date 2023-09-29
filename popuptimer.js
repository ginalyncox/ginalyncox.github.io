function showPopup() {
  document.getElementById("popup-form").style.display = "block";
}

function closePopup() {
  document.getElementById("popup-form").style.display = "none";
}

// Show popup after 3 seconds
setTimeout(showPopup, 3000);

// Handle form submission
document.getElementById("subscribe-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  // Implement your logic to save the email
  closePopup();
});

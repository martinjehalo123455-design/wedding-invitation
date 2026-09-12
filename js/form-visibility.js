const checkbox = document.getElementById('confirmation-radio');
const form = document.getElementById("confirmation-form");

checkbox.addEventListener('change', function() {
    // Check the current state
    if (this.checked) {
        form.style.display = "flex"
        // Add your functionality here
    } else {
        form.style.display = "none"
    }
});   
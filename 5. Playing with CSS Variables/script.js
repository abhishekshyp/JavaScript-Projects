// Get Input via DOM
const inputs = document.querySelectorAll('.controls input');

// Update Function
function handleUpdate() {
    // Dataset is an Object - Select sizing in suffix or nothing
    const suffix = this.dataset.sizing || '';
    // Updating the CSS Variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event Listener
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// DOM Elements
const panels = document.querySelectorAll('.panel');

// Toggle Open Function
function toggleOpen() {
    this.classList.toggle('open');
}

// Toggle Function
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// Event Listener
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
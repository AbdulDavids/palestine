let activeButtons = [];

// From the river to the sea...


function toggleButton(buttonId) {
    const button = document.getElementById(`button${buttonId}`);
    
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        activeButtons = activeButtons.filter(id => id !== buttonId);
    } else {
        if (activeButtons.length === 2) {
            const oldestButtonId = activeButtons.shift();
            document.getElementById(`button${oldestButtonId}`).classList.remove('active');
        }

        if (buttonId === 3 && activeButtons.includes(2)) {
            const button2Index = activeButtons.indexOf(2);
            activeButtons.splice(button2Index, 1);
            document.getElementById(`button2`).classList.remove('active');
        }

        if (buttonId === 2 && activeButtons.includes(3)) {
            const button3Index = activeButtons.indexOf(3);
            activeButtons.splice(button3Index, 1);
            document.getElementById(`button3`).classList.remove('active');
        }

        button.classList.add('active');
        activeButtons.push(buttonId);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let labelElement = document.querySelector('label[for="button1"]');

    if (window.innerWidth <= 600) {
        labelElement.innerHTML = 'I support Palestine <span class="emoji">🇵🇸</span>';

    } else {
      labelElement.innerHTML = 'I support Palestine';
    }
  });

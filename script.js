function updateBackground() {
    const body = document.body;
    const currentHour = new Date().getHours();
    
    let primaryColor, secondaryColor;

    if (currentHour >= 5 && currentHour < 12) {
        // Manhã: azul claro para um tom mais escuro
        primaryColor = '#87CEEB';
        secondaryColor = '#4682B4';
    } else if (currentHour >= 12 && currentHour < 18) {
        // Tarde: laranja para um tom mais escuro
        primaryColor = '#FFA500';
        secondaryColor = '#FF4500';
    } else {
        // Noite: azul escuro para um tom ainda mais escuro
        primaryColor = '#191970';
        secondaryColor = '#000033';
    }

    body.style.background = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
}

function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    greetingElement.style.opacity = '0';
    setTimeout(() => {
        greetingElement.innerHTML = '';

        greeting.split('').forEach((char, index) => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = char;
            }
            span.className = 'letter';
            span.style.animationDelay = `${index * 100}ms`;
            greetingElement.appendChild(span);
        });

        setTimeout(() => {
            greetingElement.style.opacity = '1';
            document.querySelectorAll('.letter').forEach(span => {
                span.style.animation = 'fadeInUp 0.5s forwards';
            });
        }, 100);
    }, 500);
}

function update() {
    updateBackground();
    updateGreeting();
}

update();
setInterval(update, 60000);

// ... (mantenha o resto do código JavaScript) ...
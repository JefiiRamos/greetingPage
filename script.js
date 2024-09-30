function updateGreeting() {
  const greetingElement = document.getElementById('greeting');
  const app = document.getElementById('app');
  const currentHour = new Date().getHours();
  
  let greeting;
  let timeClass;

  if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Bom dia';
      timeClass = 'morning';
  } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Boa tarde';
      timeClass = 'afternoon';
  } else {
      greeting = 'Boa noite';
      timeClass = 'night';
  }

  greetingElement.textContent = greeting;
  
  // Remove todas as classes de tempo anteriores
  app.classList.remove('morning', 'afternoon', 'night');
  // Adiciona a classe de tempo atual
  app.classList.add(timeClass);
}

// Atualiza a saudação imediatamente
updateGreeting();

// Atualiza a saudação a cada minuto
setInterval(updateGreeting, 60000);
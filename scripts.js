function openContactPopup() {
    document.getElementById('contactPopup').classList.add('active');
  }
  
  function closeContactPopup() {
    document.getElementById('contactPopup').classList.remove('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('contactPopup');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
      background: none;
      color: #1c2b48;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 14px;
    `;
    closeButton.onclick = closeContactPopup;
    popup.appendChild(closeButton);
  });
  
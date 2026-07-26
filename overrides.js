document.addEventListener('click', event => { const button = event.target.closest('.list-button'); if (button && button.textContent.includes('Notifications')) navigate('notifications'); });

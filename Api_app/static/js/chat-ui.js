document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.composer-area textarea');
  if (input) {
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
    });
  }

  document.querySelectorAll('.message-row').forEach((row) => {
    row.addEventListener('mouseenter', () => {
      row.classList.add('is-hovered');
    });
    row.addEventListener('mouseleave', () => {
      row.classList.remove('is-hovered');
    });
  });

  const emojiButtons = document.querySelectorAll('.icon-btn');
  emojiButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (input) {
        input.value += ' 🙂';
        input.focus();
      }
    });
  });
});

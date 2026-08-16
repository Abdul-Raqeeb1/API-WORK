document.addEventListener('DOMContentLoaded', () => {
  const openers = document.querySelectorAll('[data-open-modal]');
  openers.forEach((opener) => {
    opener.addEventListener('click', () => {
      const modal = document.querySelector(`.modal-backdrop[data-modal="${opener.dataset.openModal}"]`);
      if (modal) modal.classList.add('visible');
    });
  });

  const confirmButtons = document.querySelectorAll('[data-confirm]');
  confirmButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modal-backdrop[data-modal="confirm-action"]');
      if (modal) modal.classList.add('visible');
    });
  });
});

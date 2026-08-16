document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('[data-toggle]');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.toggle;
      const panel = document.querySelector(`.${target}`) || document.querySelector(`[data-panel="${target}"]`);
      if (!panel) return;
      panel.classList.toggle('visible');
    });
  });

  document.querySelectorAll('.modal-close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal-backdrop');
      modal?.classList.remove('visible');
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('visible');
      }
    });
  });

  const toggleSwitches = document.querySelectorAll('.toggle-switch');
  toggleSwitches.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
    });
  });

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabGroup = tab.parentElement;
      tabGroup.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      navItems.forEach((nav) => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const serverItems = document.querySelectorAll('.server-item');
  serverItems.forEach((item) => {
    item.addEventListener('click', () => {
      serverItems.forEach((server) => server.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const contextMenu = document.querySelector('.context-menu');
  document.addEventListener('contextmenu', (event) => {
    if (!contextMenu) return;
    event.preventDefault();
    contextMenu.classList.add('visible');
    contextMenu.style.left = `${Math.min(event.clientX + 18, window.innerWidth - 220)}px`;
    contextMenu.style.top = `${Math.min(event.clientY + 18, window.innerHeight - 220)}px`;
  });

  document.addEventListener('click', (event) => {
    if (contextMenu && !contextMenu.contains(event.target)) {
      contextMenu.classList.remove('visible');
    }
  });

  const profileToggle = document.querySelector('[data-profile-toggle]');
  const profilePopover = document.querySelector('.profile-popover');
  if (profileToggle && profilePopover) {
    profileToggle.addEventListener('click', () => {
      profilePopover.classList.toggle('visible');
    });
  }

  document.addEventListener('click', (event) => {
    if (profilePopover && profileToggle && !profilePopover.contains(event.target) && !profileToggle.contains(event.target)) {
      profilePopover.classList.remove('visible');
    }
  });

  const searchInput = document.querySelector('[data-search]');
  const searchPanel = document.querySelector('.search-panel');
  if (searchInput && searchPanel) {
    searchInput.addEventListener('focus', () => searchPanel.classList.add('visible'));
    searchInput.addEventListener('blur', () => {
      setTimeout(() => searchPanel.classList.remove('visible'), 150);
    });
  }
});

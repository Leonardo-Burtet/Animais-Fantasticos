import outsideClick from './outsideClick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
}

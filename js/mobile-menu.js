document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.mobile-menu-panel');

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener('click', function () {
        const isOpen = toggle.classList.toggle('is-open');
        menu.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.classList.remove('is-open');
            menu.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
});

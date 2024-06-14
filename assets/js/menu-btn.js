document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-btn').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
});
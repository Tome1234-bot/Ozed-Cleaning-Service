document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        const icon = this.querySelector('i');

        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');

            // Close dropdowns when closing mobile menu
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Dropdown toggle for mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 991) {
            if (
                !e.target.closest('.dropdown') &&
                !e.target.closest('.mobile-menu-toggle')
            ) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });

});   // ✅ Correct closing

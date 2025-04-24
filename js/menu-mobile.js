/**
 * Funcionalidad para el menú móvil
 * Este archivo gestiona la funcionalidad de apertura y cierre
 * del menú móvil en pantallas pequeñas
 */

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu-link');
    
    if (!menuToggle || !navMenu) return;
    
    // Toggle menu on click
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      // Prevent scroll when menu is open
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
    
    // Add some extra styles when menu is open
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        body.menu-open {
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .nav-menu.active {
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }
          
          .nav-menu-item {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.4s forwards;
            animation-delay: calc(0.1s * var(--i));
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      </style>
    `);
    
    // Add animation delay to each menu item
    navLinks.forEach((link, index) => {
      link.parentElement.style.setProperty('--i', index);
    });
  }
  
  // Initialize mobile menu when DOM is ready
  document.addEventListener('DOMContentLoaded', initMobileMenu);
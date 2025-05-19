document.addEventListener('DOMContentLoaded', function() {
  // Elemento donde inyectar el header
  const headerContainer = document.getElementById('header-container');
  
  if (headerContainer) {
    // Contenido HTML del header
    const headerHTML = `
    <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white sticky top-0 z-50 shadow-lg">
      <!-- Top Bar with Social Icons -->
      <div class="bg-gray-900 py-2 px-4">
        <div class="container mx-auto flex justify-end items-center space-x-4">
          <a href="https://www.youtube.com/ @thepalms1" target="_blank" class="text-white hover:text-blue-200 transition-all transform hover:scale-110" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.16-3L10 9v6zm11.56-7.87c-.2-.48-.57-.87-.96-1.17A9.93 9.93 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.81-.1-1.59-.28-2.34-.39-.3-.76-.69-.96-1.17h-2.52c.27.63.44 1.31.44 2.03 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.72 0 3.29.65 4.48 1.74l-1.97 1.97c-.44-.41-.96-.7-1.51-.87V4h-2.5c-.83 0-1.5.67-1.5 1.5v13c0 .83.67 1.5 1.5 1.5H15v-9h-3v9H15c.83 0 1.5-.67 1.5-1.5V15l5 3V6c0-.83-.67-1.5-1.5-1.5H18V4h-2.44z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/ @thepalms1" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.16-3L10 9v6zm11.56-7.87c-.2-.48-.57-.87-.96-1.17A9.93 9.93 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.81-.1-1.59-.28-2.34-.39-.3-.76-.69-.96-1.17h-2.52c.27.63.44 1.31.44 2.03 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.72 0 3.29.65 4.48 1.74l-1.97 1.97c-.44-.41-.96-.7-1.51-.87V4h-2.5c-.83 0-1.5.67-1.5 1.5v13c0 .83.67 1.5 1.5 1.5H15v-9h-3v9H15c.83 0 1.5-.67 1.5-1.5V15l5 3V6c0-.83-.67-1.5-1.5-1.5H18V4h-2.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/thepalms/" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@thepalmstech" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="https://x.com/thepalmstech" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="Twitter/X">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/thepalmstech" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://github.com/gorkah" target="_blank" class="text-gray-300 hover:text-white transition-all transform hover:scale-110" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo with Glow Effect -->
          <a href="/thepalms/index.html" class="flex items-center transform hover:scale-105 transition-transform">
            <img src="/thepalms/images/logo.png" alt="thePalms.tech Logo" class="h-10 drop-shadow-lg">
          </a>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="/thepalms/index.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-home">Inicio</a>
            <a href="/thepalms/pages/videos/index.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-videos">Videos</a>
            <a href="/thepalms/pages/rankings/index.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-rankings">Rankings</a>
            <a href="/thepalms/pages/proyectos/index.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-proyectos">Proyectos</a>
            <a href="/thepalms/pages/quienes-somos.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-quienes-somos">¿Quiénes Somos?</a>
            <a href="/thepalms/pages/blog/index.html" class="text-white font-medium hover:text-blue-200 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-200 py-1 nav-blog">Blog</a>
          </nav>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-white hover:text-blue-200 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-4 space-y-1 bg-indigo-700 rounded-lg mt-2">
            <a href="/thepalms/index.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-home-mobile">Inicio</a>
            <a href="/thepalms/pages/videos/index.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-videos-mobile">Videos</a>
            <a href="/thepalms/pages/rankings/index.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-rankings-mobile">Rankings</a>
            <a href="/thepalms/pages/proyectos/index.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-proyectos-mobile">Proyectos</a>
            <a href="/thepalms/pages/quienes-somos.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-quienes-somos-mobile">¿Quiénes Somos?</a>
            <a href="/thepalms/pages/blog/index.html" class="block px-3 py-2 text-white font-medium hover:bg-indigo-800 rounded nav-blog-mobile">Blog</a>
          </div>
        </div>
      </div>
    </header>
    `;
    
    // Insertar el HTML del header en el contenedor
    headerContainer.innerHTML = headerHTML;
    
    // Añadir funcionalidad al botón del menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    // Marcar el enlace activo basado en la URL actual
    const currentPath = window.location.pathname;
    
    // Para enlaces de escritorio
    const navLinks = {
      'index.html': 'nav-home',
      'videos': 'nav-videos',
      'rankings': 'nav-rankings',
      'proyectos': 'nav-proyectos',
      'quienes-somos': 'nav-quienes-somos',
      'blog': 'nav-blog'
    };
    
    // Para enlaces móviles
    const navLinksMobile = {
      'index.html': 'nav-home-mobile',
      'videos': 'nav-videos-mobile',
      'rankings': 'nav-rankings-mobile',
      'proyectos': 'nav-proyectos-mobile',
      'quienes-somos': 'nav-quienes-somos-mobile',
      'blog': 'nav-blog-mobile'
    };
    
    // Marcar enlace activo
    for (const [key, value] of Object.entries(navLinks)) {
      if (currentPath.includes(key)) {
        const activeLink = document.querySelector('.' + value);
        if (activeLink) {
          activeLink.classList.remove('border-transparent');
          activeLink.classList.add('border-blue-200');
        }
      }
    }
    
    // Marcar enlace activo en móvil
    for (const [key, value] of Object.entries(navLinksMobile)) {
      if (currentPath.includes(key)) {
        const activeLink = document.querySelector('.' + value);
        if (activeLink) {
          activeLink.classList.add('bg-indigo-800');
        }
      }
    }
  }
});

// Funcionalidad principal para ThePalms.tech

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
  // Implementación del menú móvil
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Inicializar carruseles si existen
  initCarousels();
  
  // Inicializar efecto de desplazamiento suave para enlaces internos
  initSmoothScroll();
  
  // Cargar componentes (header y footer)
  loadComponents();
});

// Función para cargar componentes HTML
function loadComponents() {
  // Array de componentes a cargar: [id del elemento, ruta al componente]
  const components = [
    ['header-component', '/components/header.html'],
    ['footer-component', '/components/footer.html']
  ];
  
  const promises = components.map(([id, path]) => {
    const element = document.getElementById(id);
    if (element) {
      return fetch(path)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error cargando ${path}: ${response.status}`);
          }
          return response.text();
        })
        .then(html => {
          element.innerHTML = html;
          return { id, html };
        })
        .catch(error => {
          console.error(`Error cargando ${path}:`, error);
          element.innerHTML = `<div class="p-4 bg-red-100 text-red-700">Error cargando componente. Por favor, recarga la página.</div>`;
        });
    }
    return Promise.resolve(null);
  }).filter(Boolean);
  
  // Inicializar funcionalidades después de que todos los componentes se hayan cargado
  Promise.allSettled(promises).then(() => {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Marcar link activo en la navegación
    highlightActiveNavLink();
  });
}

// Inicializar el menú móvil
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Resaltar el enlace activo en la navegación
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Página de inicio
    if (currentPath === '/' || currentPath === '/index.html') {
      if (href === '/index.html') {
        link.classList.add('text-blue-600', 'font-semibold');
      }
    } 
    // Otras páginas
    else if (href !== '/index.html' && currentPath.includes(href.split('/')[1])) {
      link.classList.add('text-blue-600', 'font-semibold');
    }
  });
}

// Inicializar carruseles
function initCarousels() {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const buttons = {
      prev: carousel.querySelector('.carousel-button-prev'),
      next: carousel.querySelector('.carousel-button-next')
    };
    
    let currentIndex = 0;
    const count = items.length;
    
    // Ocultar todos los elementos excepto el primero
    items.forEach((item, index) => {
      if (index !== 0) item.classList.add('hidden');
    });
    
    // Configurar botones de navegación
    if (buttons.prev && buttons.next) {
      buttons.prev.addEventListener('click', () => {
        items[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex - 1 + count) % count;
        items[currentIndex].classList.remove('hidden');
      });
      
      buttons.next.addEventListener('click', () => {
        items[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % count;
        items[currentIndex].classList.remove('hidden');
      });
    }
  });
}

// Inicializar desplazamiento suave
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Sistema de plantillas para blog
function generateBlogPost(title, content, author, date, tags) {
  const template = `
    <article class="blog-post">
      <h1 class="text-3xl font-bold mb-4">${title}</h1>
      <div class="flex items-center space-x-4 text-gray-600 mb-6">
        <span>${author}</span>
        <span>•</span>
        <time datetime="${date}">${formatDate(date)}</time>
      </div>
      <div class="tags flex flex-wrap gap-2 mb-8">
        ${tags.map(tag => `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${tag}</span>`).join('')}
      </div>
      <div class="blog-content">
        ${content}
      </div>
    </article>
  `;
  
  return template;
}

// Función de ayuda para formatear fechas
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Sistema de filtrado para rankings y proyectos
function filterItems(containerId, filterButtons, itemClass) {
  const container = document.getElementById(containerId);
  const items = container ? container.querySelectorAll(`.${itemClass}`) : [];
  const buttons = document.querySelectorAll(filterButtons);
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Actualizar botones activos
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      items.forEach(item => {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          const categories = item.dataset.category.split(' ');
          if (categories.includes(filter)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
}

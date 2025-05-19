/**
 * Script para actualizar todas las páginas del sitio con los componentes reutilizables
 * 
 * Este script debe agregarse al final de cada página HTML y se encargará de:
 * 1. Reemplazar el header actual con el div contenedor del header
 * 2. Reemplazar el footer actual con el div contenedor del footer
 * 3. Agregar los scripts necesarios para cargar los componentes
 */

document.addEventListener('DOMContentLoaded', function() {
  // Función para verificar si los scripts ya están incluidos
  function areScriptsIncluded() {
    const scripts = document.querySelectorAll('script');
    let headerScriptIncluded = false;
    let footerScriptIncluded = false;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('header-component.js')) {
        headerScriptIncluded = true;
      }
      if (src && src.includes('footer-component.js')) {
        footerScriptIncluded = true;
      }
    });
    
    return headerScriptIncluded && footerScriptIncluded;
  }
  
  // Si los scripts ya están incluidos, no hacer nada
  if (areScriptsIncluded()) {
    return;
  }
  
  // Reemplazar el header actual con el contenedor del header
  const headerElement = document.querySelector('header');
  if (headerElement) {
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    headerElement.parentNode.replaceChild(headerContainer, headerElement);
  }
  
  // Reemplazar el footer actual con el contenedor del footer
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    footerElement.parentNode.replaceChild(footerContainer, footerElement);
  }
  
  // Agregar los scripts para cargar los componentes
  const headerScript = document.createElement('script');
  headerScript.src = '/thepalms/js/header-component.js';
  document.body.appendChild(headerScript);
  
  const footerScript = document.createElement('script');
  footerScript.src = '/thepalms/js/footer-component.js';
  document.body.appendChild(footerScript);
  
  console.log('Componentes actualizados correctamente.');
});

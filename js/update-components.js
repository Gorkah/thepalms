/**
 * Script para actualizar todas las páginas del sitio con los componentes reutilizables
 * 
 * Este script debe agregarse al final de cada página HTML y se encargará de:
 * 1. Reemplazar el header actual con el div contenedor del header (si es necesario)
 * 2. Reemplazar el footer actual con el div contenedor del footer (si es necesario)
 * 3. Agregar los scripts necesarios para cargar los componentes
 * 4. Gestionar los casos donde ya existían contenedores
 */

document.addEventListener('DOMContentLoaded', function() {
  // Debug para ayudar a identificar problemas
  console.log('Iniciando actualización de componentes...');
  
  // Corrige las rutas relativas para adaptarse a cualquier subdirectorio
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/thepalms/')) {
      return '/thepalms/';
    }
    return '/';
  }
  
  const basePath = getBasePath();
  console.log('Base path detectado:', basePath);
  
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
  
  // Verificar si ya existen los contenedores
  const headerContainerExists = document.getElementById('header-container') !== null;
  const footerContainerExists = document.getElementById('footer-container') !== null;
  
  console.log('Estado de contenedores:', {
    headerContainerExists,
    footerContainerExists
  });
  
  // Si los scripts ya están incluidos, verificamos si hay elementos HTML antiguos que necesiten ser eliminados
  if (areScriptsIncluded()) {
    console.log('Scripts de componentes ya incluidos');
    
    // Si hay un header HTML pero también existe un contenedor, eliminamos el header HTML
    const headerElement = document.querySelector('header');
    if (headerElement && headerContainerExists) {
      console.log('Eliminando elemento header existente que está duplicado');
      headerElement.parentNode.removeChild(headerElement);
    }
    
    // Si hay un footer HTML pero también existe un contenedor, eliminamos el footer HTML
    const footerElement = document.querySelector('footer');
    if (footerElement && footerContainerExists) {
      console.log('Eliminando elemento footer existente que está duplicado');
      footerElement.parentNode.removeChild(footerElement);
    }
    
    return;
  }
  
  // Si no hay contenedor de header, pero hay un header HTML, lo reemplazamos
  if (!headerContainerExists) {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      console.log('Reemplazando header por contenedor');
      const headerContainer = document.createElement('div');
      headerContainer.id = 'header-container';
      headerElement.parentNode.replaceChild(headerContainer, headerElement);
    } else {
      // Si no hay header ni contenedor, creamos el contenedor al inicio del body
      console.log('Creando contenedor de header');
      const headerContainer = document.createElement('div');
      headerContainer.id = 'header-container';
      document.body.insertBefore(headerContainer, document.body.firstChild);
    }
  } else {
    console.log('Contenedor de header ya existe');
  }
  
  // Si no hay contenedor de footer, pero hay un footer HTML, lo reemplazamos
  if (!footerContainerExists) {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      console.log('Reemplazando footer por contenedor');
      const footerContainer = document.createElement('div');
      footerContainer.id = 'footer-container';
      footerElement.parentNode.replaceChild(footerContainer, footerElement);
    } else {
      // Si no hay footer ni contenedor, creamos el contenedor antes del cierre del body
      console.log('Creando contenedor de footer');
      const footerContainer = document.createElement('div');
      footerContainer.id = 'footer-container';
      document.body.appendChild(footerContainer);
    }
  } else {
    console.log('Contenedor de footer ya existe');
  }
  
  // Agregar los scripts para cargar los componentes con la ruta correcta
  console.log('Cargando scripts de componentes...');
  
  const headerScript = document.createElement('script');
  headerScript.src = basePath + 'js/header-component.js';
  document.body.appendChild(headerScript);
  
  const footerScript = document.createElement('script');
  footerScript.src = basePath + 'js/footer-component.js';
  document.body.appendChild(footerScript);
  
  console.log('Componentes actualizados correctamente.');
});

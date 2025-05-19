/**
 * Script para actualizar todas las páginas del sitio con los componentes reutilizables
 * 
 * Este script debe agregarse al final de cada página HTML y se encargará de:
 * 1. Limpiar la página de cualquier header y footer existentes
 * 2. Crear contenedores para los componentes si no existen
 * 3. Cargar los componentes reutilizables
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Iniciando update-components.js');

  // Limpieza forzada de cualquier código HTML incorrecto en los contenedores
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  
  // Si existen contenedores, asegurarse de que estén vacíos
  if (headerContainer) {
    headerContainer.innerHTML = '';
    console.log('Contenedor de header encontrado y limpiado');
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = '';
    console.log('Contenedor de footer encontrado y limpiado');
  }
  
  // Eliminar cualquier header o footer existente
  const headers = document.querySelectorAll('header');
  headers.forEach(header => {
    header.parentNode.removeChild(header);
    console.log('Header HTML eliminado');
  });
  
  const footers = document.querySelectorAll('footer');
  footers.forEach(footer => {
    footer.parentNode.removeChild(footer);
    console.log('Footer HTML eliminado');
  });
  
  // Crear contenedores si no existen
  if (!headerContainer) {
    const newHeaderContainer = document.createElement('div');
    newHeaderContainer.id = 'header-container';
    document.body.insertBefore(newHeaderContainer, document.body.firstChild);
    console.log('Nuevo contenedor de header creado');
  }
  
  if (!footerContainer) {
    const newFooterContainer = document.createElement('div');
    newFooterContainer.id = 'footer-container';
    // Insertar antes del último script en el body, o al final si no hay scripts
    const scripts = document.body.querySelectorAll('script');
    if (scripts.length > 0) {
      document.body.insertBefore(newFooterContainer, scripts[0]);
    } else {
      document.body.appendChild(newFooterContainer);
    }
    console.log('Nuevo contenedor de footer creado');
  }
  
  // Determinar la ruta base correcta
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/thepalms/')) {
      return '/thepalms/';
    } else if (path.includes('/github/thepalms/')) {
      return '/github/thepalms/';
    } else {
      // Intentar detectar desde las imágenes o archivos CSS
      const images = document.querySelectorAll('img');
      for (let i = 0; i < images.length; i++) {
        const src = images[i].getAttribute('src');
        if (src && src.includes('/thepalms/')) {
          return '/thepalms/';
        }
      }
      return '/';
    }
  }
  
  const basePath = getBasePath();
  console.log('Ruta base detectada:', basePath);
  
  // Comprobar si los scripts ya están cargados
  function isScriptLoaded(scriptName) {
    const scripts = document.querySelectorAll('script');
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].getAttribute('src');
      if (src && src.includes(scriptName)) {
        return true;
      }
    }
    return false;
  }
  
  // Cargar script solo si no está ya cargado
  function loadScript(scriptName) {
    if (!isScriptLoaded(scriptName)) {
      const script = document.createElement('script');
      script.src = basePath + 'js/' + scriptName;
      document.body.appendChild(script);
      console.log(`Script ${scriptName} cargado`); 
      return true;
    }
    return false;
  }
  
  // Cargar los componentes
  const headerLoaded = loadScript('header-component.js');
  const footerLoaded = loadScript('footer-component.js');
  
  if (!headerLoaded && !footerLoaded) {
    console.log('Ambos componentes ya estaban cargados');
  } else {
    console.log('Componentes actualizados. Esperando carga...');
  }
});

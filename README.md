# ThePalms.tech - Sitio Web thePalms

Este repositorio contiene el código fuente del sitio web ThePalms.tech, una plataforma dedicada al contenido tecnológico accesible y actualizado, basado en experiencias reales y pruebas objetivas.

## Estructura del Sitio

El sitio web está organizado en las siguientes secciones principales:

- **Inicio**: Página de presentación general del proyecto (`/index.html`)
- **Videos**: Sección dedicada a transcripciones de videos (`/pages/videos/index.html`)
- **Rankings**: Listas actualizadas de productos tecnológicos evaluados (`/pages/rankings/index.html`)
- **Proyectos**: Herramientas desarrolladas por thePalms (`/pages/proyectos/index.html`)
- **¿Quiénes somos?**: Información sobre el creador y su misión (`/pages/quienes-somos.html`)
- **Blog**: Sistema dinámico para publicaciones de blog (`/pages/blog/index.html`)

## Tecnologías Utilizadas

- HTML5
- CSS3 con Tailwind CSS (vía CDN)
- JavaScript (vanilla)
- Font Awesome para iconos

## Componentes Reutilizables

Los componentes reutilizables se encuentran en la carpeta `/components/`:

- **Header**: Barra de navegación principal (`/components/header.html`)
- **Footer**: Pie de página común para todas las secciones (`/components/footer.html`)

Estos componentes se cargan dinámicamente mediante JavaScript (ver `/js/main.js`).

## Estilos Personalizados

Los estilos personalizados se encuentran en `/css/main.css` y complementan a Tailwind CSS con:

- Variables CSS para colores principales
- Estilos específicos para el distintivo Gold Award
- Animaciones y transiciones
- Estilos específicos para el contenido del blog

## Cómo Agregar Nuevas Entradas de Blog

Para agregar una nueva entrada de blog:

1. Duplica el archivo `/pages/blog/plantilla-blog.html`
2. Renómbralo con el título del artículo en formato URL (ej: `mi-nuevo-articulo.html`)
3. Reemplaza todas las secciones marcadas con MAYÚSCULAS:
   - TÍTULO DEL ARTÍCULO
   - DESCRIPCIÓN SEO
   - PALABRAS CLAVE
   - CATEGORÍA
   - FECHA DE PUBLICACIÓN
   - NOMBRE DEL AUTOR
   - CONTENIDO 
   - ETIQUETAS
   - ARTÍCULOS RELACIONADOS

4. Agrega la entrada a la página principal del blog (`/pages/blog/index.html`)

## Cómo Agregar Nuevos Rankings

Para agregar un nuevo ranking:

1. Crea un nuevo archivo HTML en `/pages/rankings/` siguiendo el formato de los existentes
2. Actualiza la lista en `/pages/rankings/index.html` para incluir el nuevo ranking

## Flujo de Trabajo con GitHub

1. Clona este repositorio en tu máquina local
2. Realiza cambios en el código según sea necesario
3. Prueba los cambios localmente
4. Haz commit de tus cambios con mensajes descriptivos
5. Haz push de tus cambios al repositorio remoto
6. El sitio se actualizará automáticamente (si está configurado con GitHub Pages o un servicio similar)

## Personalización Adicional

- Colores: Modifica las variables CSS en `/css/main.css`
- Fuentes: Actualiza las importaciones de Google Fonts en `/css/main.css`
- Iconos: Consulta la documentación de Font Awesome para añadir nuevos iconos

## Soporte de Navegadores

El sitio es compatible con todos los navegadores modernos:

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Mantenimiento

Para mantener el sitio actualizado y funcionando correctamente:

1. Revisa regularmente la validez de los enlaces
2. Actualiza el contenido de las páginas principales según sea necesario
3. Agrega nuevas entradas de blog y rankings regularmente
4. Mantén actualizadas las versiones de las dependencias externas (Tailwind CSS, Font Awesome)

---

© 2025 ThePalms.tech - Todos los derechos reservados

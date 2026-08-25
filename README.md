# Panadería El Trigal - Sitio Web Oficial

Sitio web informativo desarrollado para **Panadería El Trigal**, un negocio de barrio enfocado en la elaboración artesanal de pan y pastelería. El objetivo principal de la plataforma es visibilizar el catálogo de productos disponibles y centralizar las consultas de los clientes mediante un formulario de contacto estructurado.

---

## 📋 Características Principales

* **Catálogo de Productos:** Presentación visual en formato de tarjetas (grid) con imagen, título, descripción breve y precio para 6 productos artesanales.
* **Diseño Adaptable (Responsive):** Ajuste fluido para una lectura cómoda tanto en dispositivos móviles como en computadores de escritorio.
* **Formulario de Contacto:** Procesamiento sin recarga de página mediante la captura del evento `submit` y `e.preventDefault()`.
* **Validación Específica:** Mensajes de error puntuales debajo de cada campo obligatorio con estado de error visual (`.campo-error`).

---

## 📁 Estructura del Proyecto

```text
panaderia-el-trigal/
├── index.html       # Estructura semántica del sitio
├── style.css        # Estilos visuales y diseño adaptable
├── funciones.js     # Lógica de validación del formulario
└── README.md        # Documentación del proyecto

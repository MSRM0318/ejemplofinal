const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.list-item');
const mainContent = document.getElementById('mainContent');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

// Contenido dinámico por sección
const contentData = {
  inicio: `
    <h1>Bienvenido a Carpintucho</h1>
    <p>Este es el espacio donde puedes agregar información, imágenes, formularios o lo que quieras.</p>
    <img src="/1.jpg" alt="" style="border-radius: 10px; margin-top: 20px;">
  `,
  nosotros: `
    <h1>Sobre Nosotros</h1>
    <p>Somos un equipo creativo dedicado a construir experiencias digitales memorables.</p>
    <img src="https://placekitten.com/400/250" alt="" style="border-radius: 10px; margin-top: 20px;">
    <a href="https://msrm0318.github.io/ejemplo/"><h1>ver mas</h1></a>
  `,
  telefono: `
    <h1>Teléfonos de contacto</h1>
    <ul>
      <li>📞 +123 456 789</li>
      <li>📧 contacto@gmail.com</li>
    </ul>
  `,
  mas: `
    <h1>Más opciones</h1>
    <p>Aquí podrás encontrar funciones adicionales, herramientas y recursos útiles para tu proyecto.</p>
    <a href="https://msrm0318.github.io/ejemplo2/"><h1>ver mas</h1></a>
  `,
  detalles: `
    <h1>Detalles del Proyecto</h1>
    <p>Explora este modelo 3D interactivo de una cómoda con hotspots.</p>

    <model-viewer id="viewer"
      src="/comoda.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      style="width: 100%; height: 400px; background: #eee; border-radius: 10px; margin-top: 20px;">
      
      <button class="Hotspot" slot="hotspot-2" data-surface="4 0 124 1399 626 0.235 0.257 0.508" data-visibility-attribute="visible"></button>
      <button class="Hotspot" slot="hotspot-3" data-surface="4 0 2415 2392 1716 0.720 0.135 0.145" data-visibility-attribute="visible"></button>

      <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
      </div>

      <button slot="ar-button" id="ar-button">Ver en tu espacio</button>

      <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
      </div>
    </model-viewer>


    <model-viewer id="viewer"
      src="/comodaa.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      style="width: 100%; height: 400px; background: #eee; border-radius: 10px; margin-top: 20px;">
      
      <button class="Hotspot" slot="hotspot-2" data-surface="4 0 124 1399 626 0.235 0.257 0.508" data-visibility-attribute="visible"></button>
      <button class="Hotspot" slot="hotspot-3" data-surface="4 0 2415 2392 1716 0.720 0.135 0.145" data-visibility-attribute="visible"></button>

      <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
      </div>

      <button slot="ar-button" id="ar-button">Ver en tu espacio</button>

      <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
      </div>
    </model-viewer>

      <model-viewer id="viewer"
      src="/saad.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster="poster.webp"
      shadow-intensity="1"
      autoplay
      style="width: 100%; height: 400px; background: #eee; border-radius: 10px; margin-top: 20px;">
      
      <button class="Hotspot" slot="hotspot-2" data-surface="4 0 124 1399 626 0.235 0.257 0.508" data-visibility-attribute="visible"></button>
      <button class="Hotspot" slot="hotspot-3" data-surface="4 0 2415 2392 1716 0.720 0.135 0.145" data-visibility-attribute="visible"></button>

      <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
      </div>

      <button slot="ar-button" id="ar-button">Ver en tu espacio</button>

      <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
      </div>
    </model-viewer>

  `
};

// Reemplazar contenido dinámicamente
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const sectionId = item.getAttribute('data-id');
    mainContent.innerHTML = contentData[sectionId];

    // Activar interactividad si estamos en "detalles"
    if (sectionId === "detalles") {
      setTimeout(() => {
        const viewer = document.getElementById("viewer");
        let cajon1Abierto = false;

        const hotspot2 = viewer.querySelector('button[slot="hotspot-2"]');
        const hotspot3 = viewer.querySelector('button[slot="hotspot-3"]');

        hotspot2.addEventListener("click", () => {
          viewer.animationName = cajon1Abierto ? "CerrarCajon1" : "AbrirCajon1";
          viewer.play();
          cajon1Abierto = !cajon1Abierto;
        });

        hotspot3.addEventListener("click", () => {
          viewer.animationName = "AbrirCajon2";
          viewer.play();
        });
      }, 100); // Esperar a que el DOM inserte el visor
    }
  });
});

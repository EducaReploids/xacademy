// ===============================================
// SISTEMA DE CARGA DIFERIDA (LAZY LOADER)
// ===============================================
// Carga dinámicamente los sub-bancos de preguntas
// según el curso necesario, evitando descargar 400KB
// de golpe en el inicio.

window.bancoPreguntas = window.bancoPreguntas || {};
window.bancosCargados = window.bancosCargados || {};

/**
 * Carga el archivo del banco de preguntas correspondiente a un tema
 * @param {string} idTema - Ej: "algebra_tema1"
 * @returns {Promise} Resolves when loaded
 */
function cargarBanco(idTema) {
    return new Promise((resolve, reject) => {
        if (!idTema) return reject(new Error("ID de tema no proporcionado"));

        const curso = idTema.split('_')[0]; // Ej: "algebra"

        // Si ya está cargado, resolvemos de inmediato
        if (window.bancosCargados[curso]) {
            return resolve();
        }

        // Mostrar indicador de carga
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'bancoLoaderUI';
        loadingDiv.innerHTML = '<div style="position:fixed;inset:0;background:rgba(255,255,255,0.9);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;"><div class="spinner" style="width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #0049c6;border-radius:50%;animation:spin 1s linear infinite;"></div><p style="margin-top:10px;font-weight:bold;color:#0049c6;">Cargando preguntas...</p><style>@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style></div>';
        document.body.appendChild(loadingDiv);

        // Crear el script
        const script = document.createElement('script');
        script.src = `js/bancos/banco_${curso}.js`; // Ruta a la carpeta bancos

        script.onload = () => {
            window.bancosCargados[curso] = true;
            if (document.getElementById('bancoLoaderUI')) document.getElementById('bancoLoaderUI').remove();
            resolve();
        };

        script.onerror = () => {
            if (document.getElementById('bancoLoaderUI')) document.getElementById('bancoLoaderUI').remove();
            reject(new Error(`No se pudo cargar el banco de preguntas para: ${curso}`));
            showToast && showToast(`Error al cargar el curso ${curso}`, 'error');
        };

        document.head.appendChild(script);
    });
}

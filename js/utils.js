// ============================================================
// X-ACADEMY — UTILS.JS (Utilidades Globales Compartidas)
// Versión: 1.0.0
// ============================================================

// --- CONSTANTES GLOBALES ---
const XA_VERSION = "1.0.0"; // Cambiar en cada deploy a Netlify
const API_URL = "https://script.google.com/macros/s/AKfycbwlNXf36OcyxNbfrdzoj9NVD5nM8HE1mvI-gM0ksF5Ivy1tjkBmMc-TB3W6JWTudfJ50w/exec";
const XP_PER_LEVEL = 1000;

// ============================================================
// SISTEMA DE TEMA OSCURO (DARK MODE)
// ============================================================
function initTheme() {
    const savedTheme = localStorage.getItem('xAcademy_Theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('xAcademy_Theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.innerHTML = isDark ? '<i class="fas fa-sun" style="color: #ffcc00"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Inicializar tema tan pronto cargue el DOM
document.addEventListener('DOMContentLoaded', initTheme);

// ============================================================
// SISTEMA DE MODALES E HISTORIAL (BACK BUTTON)
// ============================================================
function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'flex';
    setTimeout(() => m.classList.add('show'), 10);

    // Push state para el botón "Atrás" físico en celulares Android
    history.pushState({ modalOpen: id }, null, "");
}

function closeModal(id, fromPopState = false) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('show');
    setTimeout(() => m.style.display = 'none', 300);

    // Si cerramos el modal mediante un botón en pantalla (X),
    // debemos rebobinar el historial que acabamos de inyectar.
    if (!fromPopState && history.state && history.state.modalOpen === id) {
        history.back();
    }
}

// Escuchador global de "Atrás" en WebView AppCreator
window.addEventListener('popstate', (e) => {
    const openModals = document.querySelectorAll('.modal-overlay.show');
    if (openModals.length > 0) {
        openModals.forEach(m => {
            closeModal(m.id, true);
        });
    }
});

// ============================================================
// SISTEMA DE XP Y NIVELES
// ============================================================
function getXP() {
    return parseInt(localStorage.getItem('xAcademy_XP')) || 0;
}

function getLevel(xp = null) {
    const totalXP = xp !== null ? xp : getXP();
    return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

function updateUI() {
    const playerXP = getXP();
    const lvl = getLevel(playerXP);
    const prevLvl = parseInt(localStorage.getItem('xAcademy_PrevLevel')) || 1;
    const cur = playerXP % XP_PER_LEVEL;
    const pct = (cur / XP_PER_LEVEL) * 100;

    const lvlBadge = document.getElementById('lvlBadge');
    const xpText = document.getElementById('xpText');
    const xpBar = document.getElementById('xpBar');

    if (lvlBadge) lvlBadge.innerText = "NIVEL " + lvl;
    if (xpText) xpText.innerText = cur + " XP";
    if (xpBar) xpBar.style.width = pct + "%";

    // Detección de subida de nivel
    if (lvl > prevLvl && prevLvl > 0) {
        localStorage.setItem('xAcademy_PrevLevel', lvl);
        showLevelUpModal(lvl);
    } else if (prevLvl === 1 && lvl === 1) {
        localStorage.setItem('xAcademy_PrevLevel', 1);
    }
}

// ============================================================
// MODAL DE ANIMACIÓN DE NUEVO NIVEL (GLOBAL)
// ============================================================
function showLevelUpModal(newLevel) {
    let m = document.getElementById('levelUpModal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'levelUpModal';
        m.className = 'modal-overlay';
        m.style.zIndex = '4000'; // Prioridad visual máxima
        m.innerHTML = `
            <div class="modal-box" style="background: linear-gradient(135deg, #ffcc00, #ff8800); color: white; border: 4px solid white;">
                <h2 style="font-family:'Titan One', sans-serif; font-size:32px; margin-bottom:10px; text-shadow: 2px 2px 0px #000; color:white;">¡NUEVO NIVEL!</h2>
                <div style="font-size:60px; margin:20px 0;">🎉</div>
                <h3 style="font-size:24px; margin:0; color:white;">Eres el Nivel <span id="levelUpSpan">?</span></h3>
                <p style="font-size:14px; opacity:0.9; color:white;">¡Sigue practicando para subir aún más!</p>
                <button class="btn-claim" onclick="closeModal('levelUpModal')" style="background: white; color: #ff8800; border-radius:30px; padding:12px 30px; font-weight:900; box-shadow: 0 4px 0 #cc6600; margin-top:20px; text-transform:uppercase;">¡GENIAL!</button>
                <div id="levelUpConfetti" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; overflow:hidden;"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
    document.getElementById('levelUpSpan').innerText = newLevel;
    openModal('levelUpModal');

    // Generar confetti exclusivo del Nivel
    const container = document.getElementById('levelUpConfetti');
    container.innerHTML = '';
    const colors = ['#ffffff', '#0099ff', '#ff3b5c', '#20bf6b'];
    for (let i = 0; i < 45; i++) {
        const div = document.createElement('div');
        div.classList.add('confetti');
        div.style.left = Math.random() * 100 + '%';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.animationDuration = (Math.random() * 2 + 1) + 's';
        div.style.animationDelay = (Math.random() * 0.5) + 's';
        container.appendChild(div);
    }
}

// ============================================================
// SISTEMA DE RACHAS (STREAKS)
// ============================================================
function getStreak() {
    return parseInt(localStorage.getItem('xAcademy_Streak')) || 0;
}

function updateStreak() {
    const myID = localStorage.getItem('xAcademy_ID');
    if (!myID) return;

    // Verificar si ya se actualizó hoy localmente
    const today = new Date().toLocaleDateString('es-PE');
    if (localStorage.getItem('xAcademy_LastStreakDate') === today) return;

    // Llamar al backend para validar y actualizar la racha
    const url = `${API_URL}?action=saveStreak&id=${myID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.racha) {
                localStorage.setItem('xAcademy_Streak', data.racha);
                localStorage.setItem('xAcademy_LastStreakDate', today);
                if (data.racha > 1 && !data.mensaje) {
                    showToast(`🔥 ¡Racha de ${data.racha} días!`, 'success', 4000);
                }
            }
        })
        .catch(err => console.error("Error al actualizar racha:", err));
}

function addXP(puntos, curso, actividad) {
    let currentXP = getXP();
    currentXP += puntos;
    localStorage.setItem('xAcademy_XP', currentXP);
    updateUI();

    const myID = localStorage.getItem('xAcademy_ID');
    if (myID) {
        const url = `${API_URL}?action=saveXP&id=${myID}&xp=${puntos}&curso=${encodeURIComponent(curso)}&actividad=${encodeURIComponent(actividad)}`;
        fetch(url, { mode: 'no-cors' }).catch(() => {
            // Guardar en cola offline para reintento
            saveToOfflineQueue({ action: 'saveXP', id: myID, xp: puntos, curso, actividad });
        });
    }
}

// ============================================================
// COLA OFFLINE
// ============================================================
function saveToOfflineQueue(data) {
    const queue = JSON.parse(localStorage.getItem('xa_offline_queue') || '[]');
    queue.push({ ...data, timestamp: Date.now() });
    localStorage.setItem('xa_offline_queue', JSON.stringify(queue));
}

function flushOfflineQueue() {
    const queue = JSON.parse(localStorage.getItem('xa_offline_queue') || '[]');
    if (queue.length === 0) return;

    const remaining = [];
    const promises = queue.map(item => {
        const url = `${API_URL}?action=${item.action}&id=${item.id}&xp=${item.xp}&curso=${encodeURIComponent(item.curso)}&actividad=${encodeURIComponent(item.actividad)}`;
        return fetch(url, { mode: 'no-cors' }).catch(() => {
            remaining.push(item);
        });
    });

    Promise.all(promises).then(() => {
        localStorage.setItem('xa_offline_queue', JSON.stringify(remaining));
        if (remaining.length < queue.length) {
            showToast(`✅ ${queue.length - remaining.length} actividad(es) sincronizada(s)`, 'success');
        }
    });
}

// ============================================================
// MODAL DE LEVEL UP
// ============================================================
function showLevelUpModal(newLevel) {
    // Crear modal dinámicamente si no existe
    if (document.getElementById('levelUpModal')) {
        document.getElementById('levelUpModal').remove();
    }

    const modal = document.createElement('div');
    modal.id = 'levelUpModal';
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.85);
        display: flex; align-items: center; justify-content: center;
        z-index: 9999; animation: fadeInModal 0.3s ease;
    `;
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #0049c6, #00d4ff);
            border-radius: 25px; padding: 35px 30px; text-align: center;
            color: white; max-width: 320px; width: 90%;
            box-shadow: 0 20px 60px rgba(0,73,198,0.5);
            animation: scaleInModal 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
            position: relative; overflow: hidden;
        ">
            <div style="font-size: 60px; margin-bottom: 10px; animation: bounceIcon 1s infinite;">🎉</div>
            <div style="font-size: 13px; opacity: 0.8; letter-spacing: 2px; text-transform: uppercase;">¡Subiste de nivel!</div>
            <div style="font-size: 72px; font-weight: 900; line-height: 1; margin: 5px 0; text-shadow: 0 4px 15px rgba(0,0,0,0.3);">${newLevel}</div>
            <div style="font-size: 20px; font-weight: 800; margin-bottom: 5px;">NIVEL ${newLevel}</div>
            <div style="font-size: 13px; opacity: 0.85; margin-bottom: 25px;">¡Sigue así, campeón!</div>
            <button onclick="document.getElementById('levelUpModal').remove()" style="
                background: white; color: #0049c6; border: none;
                padding: 12px 35px; border-radius: 25px;
                font-weight: 900; font-size: 15px; cursor: pointer;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            ">¡SEGUIR!</button>
            <div id="lvlupConfetti" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"></div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

    // Confetti
    const confettiColors = ['#ffcc00', '#ff3b5c', '#00d4ff', '#20bf6b', '#ffffff'];
    const confettiZone = document.getElementById('lvlupConfetti');
    for (let i = 0; i < 40; i++) {
        const c = document.createElement('div');
        c.style.cssText = `
            position: absolute; width: ${6 + Math.random() * 6}px; height: ${6 + Math.random() * 6}px;
            background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            left: ${Math.random() * 100}%;
            top: -10px;
            animation: confettiFall ${1 + Math.random() * 2}s linear ${Math.random() * 0.5}s forwards;
        `;
        confettiZone.appendChild(c);
    }

    // Auto-cerrar después de 4 segundos
    setTimeout(() => {
        if (document.getElementById('levelUpModal')) {
            document.getElementById('levelUpModal').remove();
        }
    }, 4000);
}

// ============================================================
// SISTEMA DE TOASTS
// ============================================================
function showToast(message, type = 'info', duration = 3000) {
    const existing = document.querySelector('.xa-toast');
    if (existing) existing.remove();

    const colors = {
        'info': { bg: '#0049c6', icon: 'ℹ️' },
        'success': { bg: '#20bf6b', icon: '✅' },
        'error': { bg: '#ff3b5c', icon: '❌' },
        'warning': { bg: '#f7b731', icon: '⚠️' },
        'xp': { bg: '#7c3aed', icon: '⚡' }
    };
    const style = colors[type] || colors['info'];

    const toast = document.createElement('div');
    toast.className = 'xa-toast';
    toast.style.cssText = `
        position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
        background: ${style.bg}; color: white;
        padding: 12px 20px; border-radius: 25px;
        font-size: 14px; font-weight: 700;
        box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        z-index: 9998; white-space: nowrap;
        animation: toastSlideUp 0.3s ease-out;
        max-width: 90vw; text-align: center;
    `;
    toast.textContent = `${style.icon} ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideDown 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ============================================================
// DETECCIÓN DE RED (OFFLINE)
// ============================================================
function initNetworkDetection() {
    window.addEventListener('online', () => {
        showToast('Conexión restaurada', 'success');
        flushOfflineQueue();
    });
    window.addEventListener('offline', () => {
        showToast('Sin conexión — trabajando offline', 'warning', 4000);
    });
}

// ============================================================
// SISTEMA DE VERSIÓN / ACTUALIZACIÓN
// ============================================================
function checkForUpdates() {
    const storedVersion = localStorage.getItem('xa_app_version');
    if (storedVersion && storedVersion !== XA_VERSION) {
        showUpdateToast();
    }
    localStorage.setItem('xa_app_version', XA_VERSION);
}

function showUpdateToast() {
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed; top: env(safe-area-inset-top, 0); left: 0; right: 0;
        background: linear-gradient(90deg, #0049c6, #00d4ff);
        color: white; text-align: center; padding: 12px 20px;
        font-weight: 700; font-size: 13px; z-index: 9997;
        display: flex; justify-content: center; align-items: center; gap: 10px;
    `;
    banner.innerHTML = `<span>🚀 ¡App actualizada! Versión ${XA_VERSION}</span><button onclick="this.parentElement.remove()" style="background:rgba(255,255,255,0.25);border:none;color:white;border-radius:10px;padding:4px 10px;cursor:pointer;font-weight:bold;">✕</button>`;
    document.body.prepend(banner);
    setTimeout(() => { if (banner.parentElement) banner.remove(); }, 6000);
}

// ============================================================
// ANIMACIONES CSS GLOBALES (se inyectan en el <head>)
// ============================================================
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Keyframes globales usados por utils.js */
        @keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleInModal { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes bounceIcon { 0%,100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes confettiFall { to { transform: translateY(350px) rotate(720deg); opacity: 0; } }
        @keyframes toastSlideUp { from { transform: translateX(-50%) translateY(30px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }
        @keyframes toastSlideDown { from { transform: translateX(-50%) translateY(0); opacity: 1; } to { transform: translateX(-50%) translateY(30px); opacity: 0; } }

        /* Safe Area para WebView Android */
        .xa-safe-top { padding-top: env(safe-area-inset-top, 0px); }
        .xa-safe-bottom { padding-bottom: env(safe-area-inset-bottom, 0px); }
    `;
    document.head.appendChild(style);
})();


// ============================================================
// SISTEMA DE LOGIN (compartido)
// ============================================================
function checkLoginStatus() {
    return localStorage.getItem('xAcademy_ID') !== null;
}

function getUserName() {
    return localStorage.getItem('xAcademy_Name') || 'Cachimbo';
}

// ============================================================
// INICIALIZACIÓN GLOBAL (llamar al final del DOMContentLoaded)
// ============================================================
function initXAcademy(options = {}) {
    initNetworkDetection();
    checkForUpdates();
    flushOfflineQueue();
    updateStreak();
}

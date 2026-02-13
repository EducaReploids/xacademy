// =====================================================
// BASE DE DATOS DE CURSOS (DATA_CURSOS)
// =====================================================
// Colores: Matemáticas(#0049c6), Ciencias(#20bf6b), Letras(#eb3b5a), Sociales(#f7b731)

const cursosDB = {
    // --- MATEMÁTICAS ---
    'algebra': {
        cat: 'matematicas', name: 'Álgebra', img: 'img/algebra.png', color: '#0049c6',
        topics: ["Teoría de Exponentes", "Polinomios", "Productos Notables", "División de polinomios", "Cocientes Notables", "Factorización"]
    },
    'aritmetica': {
        cat: 'matematicas', name: 'Aritmética', img: 'img/aritmetica.png', color: '#0049c6',
        topics: ["Lógica proposicional", "Teoría de conjuntos", "Numeración", "Divisibilidad", "Números primos y compuestos", "Números racionales"]
    },
    'geometria': {
        cat: 'matematicas', name: 'Geometría', img: 'img/geometria.png', color: '#0049c6',
        topics: ["Segmentos - Ángulos", "Triángulos", "Congruencia de triángulos", "Polígonos - Cuadriláteros", "Circunferencia", "Puntos notables"]
    },
    'trigonometria': {
        cat: 'matematicas', name: 'Trigonometría', img: 'img/trigonometria.png', color: '#0049c6',
        topics: ["Sistema de medida angular", "Razones trigonométricas (Agudos)", "Ángulos en posición normal", "Reducción al primer cuadrante", "Identidades trigonométricas", "Ángulos compuestos"]
    },
    'estadistica': {
        cat: 'matematicas', name: 'Estadística', img: 'img/estadistica.png', color: '#0049c6',
        topics: ["Tabla de frecuencias I", "Tabla de frecuencias II", "Gráficos estadísticos", "Medidas de tendencia central", "Medidas de posición", "Medidas de dispersión"]
    },
    'rm': {
        cat: 'matematicas', name: 'Raz. Matemático', img: 'img/rm.png', color: '#0049c6',
        topics: [
            "Razonamiento Lógico y Recreativo", 
            "Orden de Información y Verdades", 
            "Inducción y Deducción", 
            "Planteo de Ecuaciones y Edades", 
            "Cronometría y Móviles", 
            "Fracciones, Porcentajes y Mezclas",
            "Sucesiones y Series",
            "Operadores Matemáticos",
            "Análisis Combinatorio y Probabilidades",
            "Conteo de Figuras y Trazos",
            "Áreas y Perímetros (Raz. Geométrico)",
            "Psicotécnico y Frecuencia de Sucesos"
        ]
    },

    // --- CIENCIAS ---
    'anatomia': {
        cat: 'ciencias', name: 'Anatomía', img: 'img/anatomia.png', color: '#20bf6b',
        topics: ["Tejido epitelial", "Tejido óseo y cartilaginoso", "Tejido muscular", "Tejido nervioso", "Tejido sanguíneo", "Aparato cardiovascular"]
    },
    'biologia': {
        cat: 'ciencias', name: 'Biología', img: 'img/biologia.png', color: '#20bf6b',
        topics: ["Origen de la vida - Evolución", "Bioelementos y Agua", "Glúcidos - Lípidos - Proteínas", "Vitaminas - Ácidos nucleicos", "Citología", "Metabolismo celular"]
    },
    'fisica': {
        cat: 'ciencias', name: 'Física', img: 'img/fisica.png', color: '#20bf6b',
        topics: ["Vectores", "Cinemática I", "Cinemática II", "Estática", "Dinámica", "Trabajo - Potencia - Energía"]
    },
    'quimica': {
        cat: 'ciencias', name: 'Química', img: 'img/quimica.png', color: '#20bf6b',
        topics: ["Estructura atómica", "Configuración electrónica", "Enlace Químico", "Nomenclatura inorgánica", "Unidades químicas de masa", "Estado gaseoso"]
    },

    // --- COMUNICACIÓN ---
    'literatura': {
        cat: 'comunicacion', name: 'Literatura', img: 'img/literatura.png', color: '#eb3b5a',
        topics: ["Teoría Literaria", "Clasicismo - Medievalismo", "Renacimiento", "Romanticismo - Realismo", "Simbolismo", "Siglo de oro Español"]
    },
    'aptitud': {
        cat: 'comunicacion', name: 'Aptitud Verbal', img: 'img/aptitud.png', color: '#eb3b5a',
        topics: [
            "Etimología grecolatina", 
            "Relaciones semánticas", 
            "Sinonimia", 
            "Antonimia", 
            "Series verbales", 
            "Analogías",
            "Conectores y Oraciones Incompletas", // Tema 7
            "Término Excluido e Inclusión",       // Tema 8
            "Plan de Redacción y Coherencia",     // Tema 9
            "Eliminación de Oraciones",           // Tema 10 (Pendiente)
            "Comprensión de Lectura I",           // Tema 11 (Pendiente)
            "Comprensión de Lectura II",          // Tema 12 (Pendiente)
            "Comprensión de Lectura III",          // Tema 13 (Pendiente)
            "Miscenalea-I",
            "Miscelanea-II"
        ]
    },
    'lenguaje': {
        cat: 'comunicacion', name: 'Lenguaje', img: 'img/lenguaje.png', color: '#eb3b5a',
        topics: ["La comunicación", "Signo lingüístico", "Morfología lingüística", "Ortografía", "Lenguaje audiovisual", "Sustantivos"]
    },

    // --- SOCIALES ---
    'hp': {
        cat: 'sociales', name: 'Hist. del Perú', img: 'img/hp.png', color: '#f7b731',
        topics: ["Poblamiento americano", "Altas culturas", "Tahuantinsuyo", "Invasión europea", "Virreinato", "Rebeliones indígenas"]
    },
    'hu': {
        cat: 'sociales', name: 'Hist. Universal', img: 'img/hu.png', color: '#f7b731',
        topics: [
            "Antropogénesis", 
            "Caldeo-Asiria y Egipto", 
            "Cultura Griega", 
            "Cultura Romana", 
            "Bárbaros - Carolingio", 
            "Árabes e Imperio Bizantino", // Pequeño ajuste para ser más completo
            "Feudalismo y Capitalismo Mercantil", // Tema 7
            "Edad Moderna: Humanismo y Reforma",  // Tema 8
            "Ilustración y Revoluciones Burguesas", // Tema 9
            "Siglo XIX: Industria e Imperialismo",  // Tema 10 (Pendiente de preguntas)
            "Guerras Mundiales y Totalitarismo",    // Tema 11 (Pendiente de preguntas)
            "Guerra Fría y Mundo Actual"            // Tema 12 (Pendiente de preguntas)
        ]
    },
    'geografia': {
        cat: 'sociales', name: 'Geografía', img: 'img/geografia.png', color: '#f7b731',
        topics: ["Ciencia geográfica", "El universo", "Heliósfera", "La tierra", "Geósfera", "Atmósfera"]
    },
    'psicologia': {
        cat: 'sociales', name: 'Psicología', img: 'img/psicologia.png', color: '#f7b731',
        topics: ["Ciencia psicológica", "Escuelas psicológicas", "Factores del comportamiento", "Desarrollo humano", "Neurociencia", "Sensación - Percepción"]
    },
    'filosofia': {
        cat: 'sociales', name: 'Filosofía', img: 'img/filosofia.png', color: '#f7b731',
        topics: ["Historia de la filosofía", "Filosofía presocrática", "Filosofía socrática", "Filosofía grecorromana", "Filosofía medieval", "Filosofía moderna"]
    },
    'economia': {
        cat: 'sociales', name: 'Economía', img: 'img/economia.png', color: '#f7b731',
        topics: ["Ciencia económica", "Necesidades y bienes", "Procesos económicos", "Factores de producción", "La producción"]
    },
    'ciudadania': {
        cat: 'sociales', name: 'Ciudadanía', img: 'img/ciudadania.png', color: '#f7b731',
        topics: ["Sujeto de derecho", "Derechos humanos", "Familia y parentesco", "El matrimonio", "Estado y Norma", "Garantías constitucionales"]
    }
};

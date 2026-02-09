const bancoAdmision = {
    "Faustino_A": {
        titulo: "Simulacro UNJFSC - BLOQUE A",
        tiempo: 110,
        puntos: { correcta: 4, incorrecta: -0.10, vacia: 0 },
        preguntas: [
            // LENGUAJE (3 x 2.0 = 6)
            { id: 1, curso: "Lenguaje", texto: "Marque la alternativa que presenta un caso de tildación diacrítica correcta.", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["A mí no me dijeron nada.", "El té helado está servido.", "Sé bueno con tus padres.", "Todas las anteriores."], correcta: 3 },
            { id: 2, curso: "Lenguaje", texto: "En la oración 'Los alumnos que estudian ingresan', la proposición subordinada funciona como:", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Objeto Directo", "Adjetiva", "Adverbial", "Sustantiva"], correcta: 1 },
            { id: 3, curso: "Lenguaje", texto: "Identifique la palabra que contiene un diptongo creciente.", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Caimán", "Ciudad", "Cuota", "Baúl"], correcta: 2 },

            // LITERATURA (3 x 2.0 = 6)
            { id: 4, curso: "Literatura", texto: "¿A qué género literario pertenece la obra 'Ollantay'?", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Épico", "Lírico", "Dramático", "Narrativo"], correcta: 2 },
            { id: 5, curso: "Literatura", texto: "Es considerado el padre del cuento peruano y autor de 'El caballero Carmelo'.", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Julio Ramón Ribeyro", "Abraham Valdelomar", "Ricardo Palma", "Ciro Alegría"], correcta: 1 },
            { id: 6, curso: "Literatura", texto: "En la 'Divina Comedia', ¿quién guía a Dante a través del Infierno y el Purgatorio?", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Beatriz", "San Bernardo", "Caronte", "Virgilio"], correcta: 3 },

            // RV (4 x 2.0 = 8) -> TOTAL COMUNICACIÓN: 20 PUNTOS
            { id: 7, curso: "RV", texto: "Sinónimo de: LOCUAZ", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Hablador", "Callado", "Breve", "Tímido"], correcta: 0 },
            { id: 8, curso: "RV", texto: "Antónimo de: EFÍMERO", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Fugaz", "Pasajero", "Duradero", "Momentáneo"], correcta: 2 },
            { id: 9, curso: "RV", texto: "Analogía - CÉLULA : ORGANISMO ::", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Ladrillo : Pared", "Pata : Mesa", "Hoja : Árbol", "Átomo : Materia"], correcta: 0 },
            { id: 10, curso: "RV", texto: "Término Excluido: MANADA", puntos: { correcta: 2.0, incorrecta: -0.1 }, img: "", opciones: ["Boyada", "Rebaño", "Jauría", "Establo"], correcta: 3 },

            // CIENCIAS SOCIALES (10 x 1.0 = 10 PUNTOS)
            { id: 11, curso: "Historia del Perú", texto: "La cultura preinca que destacó por su arquitectura lítica y las 'Cabezas Clavas' fue:", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Paracas", "Mochica", "Chavín", "Tiahuanaco"], correcta: 2 },
            { id: 12, curso: "Historia del Perú", texto: "¿Qué virrey organizó las reducciones de indios y estableció la mita minera?", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Manuel Amat", "Francisco de Toledo", "Fernando de Abascal", "Agustín de Jáuregui"], correcta: 1 },
            { id: 13, curso: "Historia Universal", texto: "El sistema económico, político y social que predominó en Europa durante la Edad Media se denominó:", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Capitalismo", "Esclavismo", "Feudalismo", "Socialismo"], correcta: 2 },
            { id: 14, curso: "Geografía", texto: "Según la tesis de Javier Pulgar Vidal, la región natural ubicada entre los 2300 y 3500 m.s.n.m. es la:", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Yunga", "Suni", "Quechua", "Puna"], correcta: 2 },
            { id: 15, curso: "Geografía", texto: "Es el planeta más grande del sistema solar y posee la 'Gran Mancha Roja'.", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Saturno", "Júpiter", "Urano", "Marte"], correcta: 1 },
            { id: 16, curso: "Economía", texto: "Fase del proceso económico donde se trasladan los bienes desde las unidades de producción a los mercados:", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Producción", "Consumo", "Circulación", "Inversión"], correcta: 2 },
            { id: 17, curso: "Economía", texto: "Organismo encargado de preservar la estabilidad monetaria en el Perú.", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Banco de la Nación", "SUNAT", "BCRP", "SBS"], correcta: 2 },
            { id: 18, curso: "Cívica", texto: "Es el poder del Estado encargado de administrar justicia a través de sus órganos jerárquicos.", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Poder Legislativo", "Poder Ejecutivo", "Poder Judicial", "Tribunal Constitucional"], correcta: 2 },
            { id: 19, curso: "Psicología", texto: "¿Qué proceso cognitivo nos permite almacenar y recuperar información?", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Percepción", "Atención", "Memoria", "Inteligencia"], correcta: 2 },
            { id: 20, curso: "Filosofía", texto: "Disciplina filosófica que estudia la moral y el comportamiento humano.", puntos: { correcta: 1.0, incorrecta: -0.05 }, img: "", opciones: ["Ética", "Estética", "Gnoseología", "Ontología"], correcta: 0 },

            // MATEMÁTICA (10 x 4.0 = 40 PUNTOS)
            { id: 21, curso: "Aritmética", texto: "Si al numerador de una fracción se le agrega la quinta parte del denominador, el valor de la fracción aumenta en su décima parte. Calcule la fracción original.", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["1/2", "3/5", "2/3", "1/4"], correcta: 0 },
            { id: 22, curso: "Aritmética", texto: "En una reunión, el 40% de los asistentes son hombres. Si se retiran el 25% de las mujeres, ¿qué porcentaje del nuevo total son hombres?", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["45%", "47%", "50%", "52%"], correcta: 1 },
            { id: 23, curso: "Trigonometría", texto: "Simplifique la expresión: E = (Sen x + Cos x)² - 1", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["Sen 2x", "Cos 2x", "2", "1"], correcta: 0 },
            { id: 24, curso: "Trigonometría", texto: "Calcule el valor de 'x' agudo si: Sen(2x + 10°) . Sec(x + 20°) = 1", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["10°", "15°", "20°", "30°"], correcta: 2 },
            { id: 25, curso: "Álgebra", texto: "Si: a + b = 5  y  a . b = 3. Calcule el valor de: E = a² + b²", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["19", "25", "22", "16"], correcta: 0 },
            { id: 26, curso: "Álgebra", texto: "Halle el resto de dividir: P(x) = x³ + 2x² - x + 4  entre  (x - 1)", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["4", "5", "6", "7"], correcta: 2 },
            { id: 27, curso: "Geometría", texto: "En un triángulo rectángulo, la altura relativa a la hipotenusa determina dos segmentos de 4m y 9m. Calcule la longitud de dicha altura.", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["5 m", "6 m", "6.5 m", "12 m"], correcta: 1 },
            { id: 28, curso: "Geometría", texto: "Calcule el volumen de un cilindro de revolución si su altura mide 5m y el radio de su base mide 2m.", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["10π m³", "20π m³", "25π m³", "15π m³"], correcta: 1 },
            { id: 29, curso: "Estadística", texto: "De un grupo de 5 números, el promedio de 3 de ellos es 10 y el promedio de los otros 2 es 15. ¿Cuál es el promedio de los 5 números?", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["11", "12", "12.5", "13"], correcta: 1 },
            { id: 30, curso: "Estadística", texto: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo?", puntos: { correcta: 4.0, incorrecta: -0.25 }, img: "", opciones: ["1/2", "1/3", "2/3", "1/6"], correcta: 0 },

            // CIENCIA (10 x 3.0 = 30 PUNTOS)
            { id: 31, curso: "Física", texto: "Si un móvil parte del reposo con una aceleración constante de 4 m/s². ¿Qué distancia recorre en los primeros 3 segundos?", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["12 m", "18 m", "36 m", "24 m"], correcta: 1 },
            { id: 32, curso: "Física", texto: "Fenómeno físico por el cual un rayo de luz cambia de dirección al pasar de un medio a otro con diferente densidad:", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Reflexión", "Difracción", "Refracción", "Dispersión"], correcta: 2 },
            { id: 33, curso: "Física", texto: "Determine la dimensión de la fuerza [F] en el sistema internacional.", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "LT⁻²"], correcta: 1 },
            { id: 34, curso: "Física", texto: "Dos resistencias de 6Ω y 3Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["9 Ω", "4.5 Ω", "2 Ω", "18 Ω"], correcta: 2 },
            { id: 35, curso: "Química", texto: "Indique el número de oxidación del azufre en el ácido sulfúrico (H₂SO₄).", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["+2", "+4", "+6", "-2"], correcta: 2 },
            { id: 36, curso: "Química", texto: "¿Cuál de las siguientes partículas subatómicas posee carga eléctrica negativa?", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Protón", "Neutrón", "Electrón", "Positrón"], correcta: 2 },
            { id: 37, curso: "Química", texto: "El enlace químico formado por la compartición de pares de electrones entre no metales se denomina:", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Iónico", "Covalente", "Metálico", "Puente de Hidrógeno"], correcta: 1 },
            { id: 38, curso: "Biología", texto: "Es la unidad anatómica, funcional y genética de todo ser vivo.", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Tejido", "Órgano", "Célula", "Sistema"], correcta: 2 },
            { id: 39, curso: "Anatomía", texto: "¿Cuál es la glándula endocrina conocida como la 'glándula maestra' que regula a las demás?", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Tiroides", "Hipófisis", "Páncreas", "Suprarrenal"], correcta: 1 },
            { id: 40, curso: "Biología", texto: "Nivel de organización ecológica formado por individuos de la misma especie que habitan en un lugar y tiempo determinado.", puntos: { correcta: 3.0, incorrecta: -0.10 }, img: "", opciones: ["Comunidad", "Población", "Ecosistema", "Biósfera"], correcta: 1 }
        ]
    },
    // NOTA: Para Faustino_B, C y D, asegúrate de aplicar la misma lógica de distribución si quieres que sumen 100.
    // Actualmente en tu archivo original tenías valores como 3.0 para todas las preguntas en el Bloque D, lo que daría 120 pts.
    // Debes ajustar 'puntos' en los otros bloques si quieres que sean estrictamente 100.
    "Faustino_B": {
        titulo: "Simulacro UNJFSC - BLOQUE B",
        tiempo: 110, // Minutos

        // 1. REGLAS GENERALES (Se usan si la pregunta no especifica nada)
        puntos: { correcta: 4, incorrecta: -0.10, vacia: 0 },

        preguntas: [
            // --- EJEMPLO 1: Pregunta que usa el puntaje GENERAL (3.5 pts) ---
            // ====================================================
            // BLOQUE 1: COMUNICACIÓN (10 Preguntas) - [2.0 Puntos]
            // Cursos: Lenguaje, Literatura, Razonamiento Verbal
            // ====================================================

            // --- LENGUAJE (3 Preguntas) ---
            {
                id: 1,
                curso: "Lenguaje",
                texto: "Marque la alternativa que presenta un caso de tildación diacrítica correcta.",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["A mí no me dijeron nada.", "El té helado está servido.", "Sé bueno con tus padres.", "Todas las anteriores."],
                correcta: 3
            },
            {
                id: 2,
                curso: "Lenguaje",
                texto: "En la oración 'Los alumnos que estudian ingresan', la proposición subordinada funciona como:",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Objeto Directo", "Adjetiva", "Adverbial", "Sustantiva"],
                correcta: 1 // (que estudian) modifica a alumnos
            },
            {
                id: 3,
                curso: "Lenguaje",
                texto: "Identifique la palabra que contiene un diptongo creciente.",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Caimán", "Ciudad", "Cuota", "Baúl"],
                correcta: 2 // Cuo-ta (Cerrada + Abierta)
            },

            // --- LITERATURA (3 Preguntas) ---
            {
                id: 4,
                curso: "Literatura",
                texto: "¿A qué género literario pertenece la obra 'Ollantay'?",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Épico", "Lírico", "Dramático", "Narrativo"],
                correcta: 2
            },
            {
                id: 5,
                curso: "Literatura",
                texto: "Es considerado el padre del cuento peruano y autor de 'El caballero Carmelo'.",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Julio Ramón Ribeyro", "Abraham Valdelomar", "Ricardo Palma", "Ciro Alegría"],
                correcta: 1
            },
            {
                id: 6,
                curso: "Literatura",
                texto: "En la 'Divina Comedia', ¿quién guía a Dante a través del Infierno y el Purgatorio?",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Beatriz", "San Bernardo", "Caronte", "Virgilio"],
                correcta: 3
            },

            // --- RAZONAMIENTO VERBAL (4 Preguntas) ---
            {
                id: 7,
                curso: "RV",
                texto: "Sinónimo de: LOCUAZ",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Hablador", "Callado", "Breve", "Tímido"],
                correcta: 0
            },
            {
                id: 8,
                curso: "RV",
                texto: "Antónimo de: EFÍMERO",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Fugaz", "Pasajero", "Duradero", "Momentáneo"],
                correcta: 2
            },
            {
                id: 9,
                curso: "RV",
                texto: "Analogía - CÉLULA : ORGANISMO ::",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Ladrillo : Pared", "Pata : Mesa", "Hoja : Árbol", "Átomo : Materia"],
                correcta: 0 // Parte fundamental : Todo
            },
            {
                id: 10,
                curso: "RV",
                texto: "Término Excluido: MANADA",
                puntos: { correcta: 2.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Boyada", "Rebaño", "Jauría", "Establo"],
                correcta: 3 // Establo es lugar, los otros son conjuntos de animales
            },
            // ===================================================================
            // BLOQUE 2: CIENCIAS SOCIALES Y PERSONA (10 Preguntas) - [1.0 Punto]
            // Cursos: Historia, Geografía, Economía, Cívica, Psicología, Filosofía
            // ===================================================================

            // --- HISTORIA DEL PERÚ Y UNIVERSAL (3 Preguntas) ---
            {
                id: 11,
                curso: "Historia del Perú",
                texto: "La cultura preinca que destacó por su arquitectura lítica y las 'Cabezas Clavas' fue:",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Paracas", "Mochica", "Chavín", "Tiahuanaco"],
                correcta: 2
            },
            {
                id: 12,
                curso: "Historia del Perú",
                texto: "¿Qué virrey organizó las reducciones de indios y estableció la mita minera?",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Manuel Amat", "Francisco de Toledo", "Fernando de Abascal", "Agustín de Jáuregui"],
                correcta: 1
            },
            {
                id: 13,
                curso: "Historia Universal",
                texto: "El sistema económico, político y social que predominó en Europa durante la Edad Media se denominó:",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Capitalismo", "Esclavismo", "Feudalismo", "Socialismo"],
                correcta: 2
            },

            // --- GEOGRAFÍA (2 Preguntas) ---
            {
                id: 14,
                curso: "Geografía",
                texto: "Según la tesis de Javier Pulgar Vidal, la región natural ubicada entre los 2300 y 3500 m.s.n.m. es la:",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Yunga", "Suni", "Quechua", "Puna"],
                correcta: 2 // Clima templado, despensa del Perú
            },
            {
                id: 15,
                curso: "Geografía",
                texto: "Es el planeta más grande del sistema solar y posee la 'Gran Mancha Roja'.",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Saturno", "Júpiter", "Urano", "Marte"],
                correcta: 1
            },

            // --- ECONOMÍA (2 Preguntas) ---
            {
                id: 16,
                curso: "Economía",
                texto: "Fase del proceso económico donde se trasladan los bienes desde las unidades de producción a los mercados:",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Producción", "Consumo", "Circulación", "Inversión"],
                correcta: 2
            },
            {
                id: 17,
                curso: "Economía",
                texto: "Organismo encargado de preservar la estabilidad monetaria en el Perú.",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Banco de la Nación", "SUNAT", "BCRP", "SBS"],
                correcta: 2
            },

            // --- CÍVICA (1 Pregunta) ---
            {
                id: 18,
                curso: "Cívica",
                texto: "Es el poder del Estado encargado de administrar justicia a través de sus órganos jerárquicos.",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Poder Legislativo", "Poder Ejecutivo", "Poder Judicial", "Tribunal Constitucional"],
                correcta: 2
            },

            // --- PSICOLOGÍA Y FILOSOFÍA (2 Preguntas) ---
            {
                id: 19,
                curso: "Psicología",
                texto: "¿Qué proceso cognitivo nos permite almacenar y recuperar información?",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Percepción", "Atención", "Memoria", "Inteligencia"],
                correcta: 2
            },
            {
                id: 20,
                curso: "Filosofía",
                texto: "Disciplina filosófica que estudia la moral y el comportamiento humano.",
                puntos: { correcta: 1.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Ética", "Estética", "Gnoseología", "Ontología"],
                correcta: 0
            },
            // ==========================================================
            // BLOQUE 3: MATEMÁTICA RAZONADA (10 Preguntas)
            // Puntos: [4.0 Correcta] | Cursos: Aritm., Alg., Geo., Trig., Est.
            // ==========================================================

            // --- ARITMÉTICA (2 Preguntas) ---
            {
                id: 21,
                curso: "Aritmética",
                texto: "Si al numerador de una fracción se le agrega la quinta parte del denominador, el valor de la fracción aumenta en su décima parte. Calcule la fracción original.",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "3/5", "2/3", "1/4"],
                correcta: 0 // Sea f = n/d. (n + d/5)/d = n/d + (1/10)(n/d). Resolviendo: n/d = 1/2
            },
            {
                id: 22,
                curso: "Aritmética",
                texto: "En una reunión, el 40% de los asistentes son hombres. Si se retiran el 25% de las mujeres, ¿qué porcentaje del nuevo total son hombres?",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["45%", "47%", "50%", "52%"],
                correcta: 1 // Total 100 (40H, 60M). Se van 15M (25% de 60). Quedan 45M + 40H = 85. %H = (40/85)*100 ≈ 47.05%
            },

            // --- TRIGONOMETRÍA (2 Preguntas) ---
            {
                id: 23,
                curso: "Trigonometría",
                texto: "Simplifique la expresión: E = (Sen x + Cos x)² - 1",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["Sen 2x", "Cos 2x", "2", "1"],
                correcta: 0 // Sen² + Cos² + 2SenCos - 1 = 1 + Sen2x - 1 = Sen2x
            },
            {
                id: 24,
                curso: "Trigonometría",
                texto: "Calcule el valor de 'x' agudo si: Sen(2x + 10°) . Sec(x + 20°) = 1",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10°", "15°", "20°", "30°"],
                correcta: 2 // Sen A . Sec B = 1 => A + B = 90°. 2x+10 + x+20 = 90 -> 3x = 60 -> x = 20
            },

            // --- ÁLGEBRA (2 Preguntas) ---
            {
                id: 25,
                curso: "Álgebra",
                texto: "Si: a + b = 5  y  a . b = 3. Calcule el valor de: E = a² + b²",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["19", "25", "22", "16"],
                correcta: 0 // (a+b)² = a² + b² + 2ab  -> 5² = E + 2(3) -> 25 = E + 6 -> E = 19
            },
            {
                id: 26,
                curso: "Álgebra",
                texto: "Halle el resto de dividir: P(x) = x³ + 2x² - x + 4  entre  (x - 1)",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["4", "5", "6", "7"],
                correcta: 2 // Teorema del Resto: x-1=0 -> x=1. P(1) = 1+2-1+4 = 6
            },

            // --- GEOMETRÍA (2 Preguntas) ---
            {
                id: 27,
                curso: "Geometría",
                texto: "En un triángulo rectángulo, la altura relativa a la hipotenusa determina dos segmentos de 4m y 9m. Calcule la longitud de dicha altura.",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["5 m", "6 m", "6.5 m", "12 m"],
                correcta: 1 // h² = m*n -> h² = 4*9 = 36 -> h = 6
            },
            {
                id: 28,
                curso: "Geometría",
                texto: "Calcule el volumen de un cilindro de revolución si su altura mide 5m y el radio de su base mide 2m.",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10π m³", "20π m³", "25π m³", "15π m³"],
                correcta: 1 // V = π*r²*h = π*4*5 = 20π
            },

            // --- ESTADÍSTICA (2 Preguntas) ---
            {
                id: 29,
                curso: "Estadística",
                texto: "De un grupo de 5 números, el promedio de 3 de ellos es 10 y el promedio de los otros 2 es 15. ¿Cuál es el promedio de los 5 números?",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["11", "12", "12.5", "13"],
                correcta: 1 // Suma total = (3*10) + (2*15) = 30 + 30 = 60. Promedio = 60/5 = 12
            },
            {
                id: 30,
                curso: "Estadística",
                texto: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo?",
                puntos: { correcta: 3.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "1/3", "2/3", "1/6"],
                correcta: 0 // Primos en un dado: 2, 3, 5 (Total 3). 3/6 = 1/2
            },
            // ==========================================================
            // BLOQUE 4: CIENCIA, TECNOLOGÍA Y AMBIENTE (10 Preguntas)
            // Puntos: [3.0 Correcta] | Cursos: Física, Química, Biología
            // ==========================================================

            // --- FÍSICA (4 Preguntas) ---
            {
                id: 31,
                curso: "Física",
                texto: "Si un móvil parte del reposo con una aceleración constante de 4 m/s². ¿Qué distancia recorre en los primeros 3 segundos?",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["12 m", "18 m", "36 m", "24 m"],
                correcta: 1 // d = 1/2 * a * t^2 = 0.5 * 4 * 9 = 18
            },
            {
                id: 32,
                curso: "Física",
                texto: "Fenómeno físico por el cual un rayo de luz cambia de dirección al pasar de un medio a otro con diferente densidad:",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Reflexión", "Difracción", "Refracción", "Dispersión"],
                correcta: 2
            },
            {
                id: 33,
                curso: "Física",
                texto: "Determine la dimensión de la fuerza [F] en el sistema internacional.",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "LT⁻²"],
                correcta: 1 // Masa * Aceleración
            },
            {
                id: 34,
                curso: "Física",
                texto: "Dos resistencias de 6Ω y 3Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["9 Ω", "4.5 Ω", "2 Ω", "18 Ω"],
                correcta: 2 // (6*3)/(6+3) = 18/9 = 2
            },

            // --- QUÍMICA (3 Preguntas) ---
            {
                id: 35,
                curso: "Química",
                texto: "Indique el número de oxidación del azufre en el ácido sulfúrico (H₂SO₄).",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["+2", "+4", "+6", "-2"],
                correcta: 2 // 2(+1) + x + 4(-2) = 0 -> 2 + x - 8 = 0 -> x = +6
            },
            {
                id: 36,
                curso: "Química",
                texto: "¿Cuál de las siguientes partículas subatómicas posee carga eléctrica negativa?",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Protón", "Neutrón", "Electrón", "Positrón"],
                correcta: 2
            },
            {
                id: 37,
                curso: "Química",
                texto: "El enlace químico formado por la compartición de pares de electrones entre no metales se denomina:",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Iónico", "Covalente", "Metálico", "Puente de Hidrógeno"],
                correcta: 1
            },

            // --- BIOLOGÍA Y ANATOMÍA (3 Preguntas) ---
            {
                id: 38,
                curso: "Biología",
                texto: "Es la unidad anatómica, funcional y genética de todo ser vivo.",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tejido", "Órgano", "Célula", "Sistema"],
                correcta: 2
            },
            {
                id: 39,
                curso: "Anatomía",
                texto: "¿Cuál es la glándula endocrina conocida como la 'glándula maestra' que regula a las demás?",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tiroides", "Hipófisis", "Páncreas", "Suprarrenal"],
                correcta: 1 // Pituitaria o Hipófisis
            },
            {
                id: 40,
                curso: "Biología",
                texto: "Nivel de organización ecológica formado por individuos de la misma especie que habitan en un lugar y tiempo determinado.",
                puntos: { correcta: 4.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Comunidad", "Población", "Ecosistema", "Biósfera"],
                correcta: 1
            }
        ]
    },
    "Faustino_C": {
        titulo: "Simulacro UNJFSC - BLOQUE C",
        tiempo: 110, // Minutos

        // 1. REGLAS GENERALES (Se usan si la pregunta no especifica nada)
        puntos: { correcta: 4, incorrecta: -0.10, vacia: 0 },

        preguntas: [
            // --- EJEMPLO 1: Pregunta que usa el puntaje GENERAL (3.5 pts) ---
            // ====================================================
            // BLOQUE 1: COMUNICACIÓN (10 Preguntas) - [2.0 Puntos]
            // Cursos: Lenguaje, Literatura, Razonamiento Verbal
            // ====================================================

            // --- LENGUAJE (3 Preguntas) ---
            {
                id: 1,
                curso: "Lenguaje",
                texto: "Marque la alternativa que presenta un caso de tildación diacrítica correcta.",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["A mí no me dijeron nada.", "El té helado está servido.", "Sé bueno con tus padres.", "Todas las anteriores."],
                correcta: 3
            },
            {
                id: 2,
                curso: "Lenguaje",
                texto: "En la oración 'Los alumnos que estudian ingresan', la proposición subordinada funciona como:",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Objeto Directo", "Adjetiva", "Adverbial", "Sustantiva"],
                correcta: 1 // (que estudian) modifica a alumnos
            },
            {
                id: 3,
                curso: "Lenguaje",
                texto: "Identifique la palabra que contiene un diptongo creciente.",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Caimán", "Ciudad", "Cuota", "Baúl"],
                correcta: 2 // Cuo-ta (Cerrada + Abierta)
            },

            // --- LITERATURA (3 Preguntas) ---
            {
                id: 4,
                curso: "Literatura",
                texto: "¿A qué género literario pertenece la obra 'Ollantay'?",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Épico", "Lírico", "Dramático", "Narrativo"],
                correcta: 2
            },
            {
                id: 5,
                curso: "Literatura",
                texto: "Es considerado el padre del cuento peruano y autor de 'El caballero Carmelo'.",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Julio Ramón Ribeyro", "Abraham Valdelomar", "Ricardo Palma", "Ciro Alegría"],
                correcta: 1
            },
            {
                id: 6,
                curso: "Literatura",
                texto: "En la 'Divina Comedia', ¿quién guía a Dante a través del Infierno y el Purgatorio?",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Beatriz", "San Bernardo", "Caronte", "Virgilio"],
                correcta: 3
            },

            // --- RAZONAMIENTO VERBAL (4 Preguntas) ---
            {
                id: 7,
                curso: "RV",
                texto: "Sinónimo de: LOCUAZ",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Hablador", "Callado", "Breve", "Tímido"],
                correcta: 0
            },
            {
                id: 8,
                curso: "RV",
                texto: "Antónimo de: EFÍMERO",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Fugaz", "Pasajero", "Duradero", "Momentáneo"],
                correcta: 2
            },
            {
                id: 9,
                curso: "RV",
                texto: "Analogía - CÉLULA : ORGANISMO ::",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Ladrillo : Pared", "Pata : Mesa", "Hoja : Árbol", "Átomo : Materia"],
                correcta: 0 // Parte fundamental : Todo
            },
            {
                id: 10,
                curso: "RV",
                texto: "Término Excluido: MANADA",
                puntos: { correcta: 4.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Boyada", "Rebaño", "Jauría", "Establo"],
                correcta: 3 // Establo es lugar, los otros son conjuntos de animales
            },
            // ===================================================================
            // BLOQUE 2: CIENCIAS SOCIALES Y PERSONA (10 Preguntas) - [1.0 Punto]
            // Cursos: Historia, Geografía, Economía, Cívica, Psicología, Filosofía
            // ===================================================================

            // --- HISTORIA DEL PERÚ Y UNIVERSAL (3 Preguntas) ---
            {
                id: 11,
                curso: "Historia del Perú",
                texto: "La cultura preinca que destacó por su arquitectura lítica y las 'Cabezas Clavas' fue:",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Paracas", "Mochica", "Chavín", "Tiahuanaco"],
                correcta: 2
            },
            {
                id: 12,
                curso: "Historia del Perú",
                texto: "¿Qué virrey organizó las reducciones de indios y estableció la mita minera?",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Manuel Amat", "Francisco de Toledo", "Fernando de Abascal", "Agustín de Jáuregui"],
                correcta: 1
            },
            {
                id: 13,
                curso: "Historia Universal",
                texto: "El sistema económico, político y social que predominó en Europa durante la Edad Media se denominó:",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Capitalismo", "Esclavismo", "Feudalismo", "Socialismo"],
                correcta: 2
            },

            // --- GEOGRAFÍA (2 Preguntas) ---
            {
                id: 14,
                curso: "Geografía",
                texto: "Según la tesis de Javier Pulgar Vidal, la región natural ubicada entre los 2300 y 3500 m.s.n.m. es la:",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Yunga", "Suni", "Quechua", "Puna"],
                correcta: 2 // Clima templado, despensa del Perú
            },
            {
                id: 15,
                curso: "Geografía",
                texto: "Es el planeta más grande del sistema solar y posee la 'Gran Mancha Roja'.",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Saturno", "Júpiter", "Urano", "Marte"],
                correcta: 1
            },

            // --- ECONOMÍA (2 Preguntas) ---
            {
                id: 16,
                curso: "Economía",
                texto: "Fase del proceso económico donde se trasladan los bienes desde las unidades de producción a los mercados:",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Producción", "Consumo", "Circulación", "Inversión"],
                correcta: 2
            },
            {
                id: 17,
                curso: "Economía",
                texto: "Organismo encargado de preservar la estabilidad monetaria en el Perú.",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Banco de la Nación", "SUNAT", "BCRP", "SBS"],
                correcta: 2
            },

            // --- CÍVICA (1 Pregunta) ---
            {
                id: 18,
                curso: "Cívica",
                texto: "Es el poder del Estado encargado de administrar justicia a través de sus órganos jerárquicos.",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Poder Legislativo", "Poder Ejecutivo", "Poder Judicial", "Tribunal Constitucional"],
                correcta: 2
            },

            // --- PSICOLOGÍA Y FILOSOFÍA (2 Preguntas) ---
            {
                id: 19,
                curso: "Psicología",
                texto: "¿Qué proceso cognitivo nos permite almacenar y recuperar información?",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Percepción", "Atención", "Memoria", "Inteligencia"],
                correcta: 2
            },
            {
                id: 20,
                curso: "Filosofía",
                texto: "Disciplina filosófica que estudia la moral y el comportamiento humano.",
                puntos: { correcta: 3.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Ética", "Estética", "Gnoseología", "Ontología"],
                correcta: 0
            },
            // ==========================================================
            // BLOQUE 3: MATEMÁTICA RAZONADA (10 Preguntas)
            // Puntos: [4.0 Correcta] | Cursos: Aritm., Alg., Geo., Trig., Est.
            // ==========================================================

            // --- ARITMÉTICA (2 Preguntas) ---
            {
                id: 21,
                curso: "Aritmética",
                texto: "Si al numerador de una fracción se le agrega la quinta parte del denominador, el valor de la fracción aumenta en su décima parte. Calcule la fracción original.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "3/5", "2/3", "1/4"],
                correcta: 0 // Sea f = n/d. (n + d/5)/d = n/d + (1/10)(n/d). Resolviendo: n/d = 1/2
            },
            {
                id: 22,
                curso: "Aritmética",
                texto: "En una reunión, el 40% de los asistentes son hombres. Si se retiran el 25% de las mujeres, ¿qué porcentaje del nuevo total son hombres?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["45%", "47%", "50%", "52%"],
                correcta: 1 // Total 100 (40H, 60M). Se van 15M (25% de 60). Quedan 45M + 40H = 85. %H = (40/85)*100 ≈ 47.05%
            },

            // --- TRIGONOMETRÍA (2 Preguntas) ---
            {
                id: 23,
                curso: "Trigonometría",
                texto: "Simplifique la expresión: E = (Sen x + Cos x)² - 1",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["Sen 2x", "Cos 2x", "2", "1"],
                correcta: 0 // Sen² + Cos² + 2SenCos - 1 = 1 + Sen2x - 1 = Sen2x
            },
            {
                id: 24,
                curso: "Trigonometría",
                texto: "Calcule el valor de 'x' agudo si: Sen(2x + 10°) . Sec(x + 20°) = 1",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10°", "15°", "20°", "30°"],
                correcta: 2 // Sen A . Sec B = 1 => A + B = 90°. 2x+10 + x+20 = 90 -> 3x = 60 -> x = 20
            },

            // --- ÁLGEBRA (2 Preguntas) ---
            {
                id: 25,
                curso: "Álgebra",
                texto: "Si: a + b = 5  y  a . b = 3. Calcule el valor de: E = a² + b²",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["19", "25", "22", "16"],
                correcta: 0 // (a+b)² = a² + b² + 2ab  -> 5² = E + 2(3) -> 25 = E + 6 -> E = 19
            },
            {
                id: 26,
                curso: "Álgebra",
                texto: "Halle el resto de dividir: P(x) = x³ + 2x² - x + 4  entre  (x - 1)",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["4", "5", "6", "7"],
                correcta: 2 // Teorema del Resto: x-1=0 -> x=1. P(1) = 1+2-1+4 = 6
            },

            // --- GEOMETRÍA (2 Preguntas) ---
            {
                id: 27,
                curso: "Geometría",
                texto: "En un triángulo rectángulo, la altura relativa a la hipotenusa determina dos segmentos de 4m y 9m. Calcule la longitud de dicha altura.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["5 m", "6 m", "6.5 m", "12 m"],
                correcta: 1 // h² = m*n -> h² = 4*9 = 36 -> h = 6
            },
            {
                id: 28,
                curso: "Geometría",
                texto: "Calcule el volumen de un cilindro de revolución si su altura mide 5m y el radio de su base mide 2m.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10π m³", "20π m³", "25π m³", "15π m³"],
                correcta: 1 // V = π*r²*h = π*4*5 = 20π
            },

            // --- ESTADÍSTICA (2 Preguntas) ---
            {
                id: 29,
                curso: "Estadística",
                texto: "De un grupo de 5 números, el promedio de 3 de ellos es 10 y el promedio de los otros 2 es 15. ¿Cuál es el promedio de los 5 números?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["11", "12", "12.5", "13"],
                correcta: 1 // Suma total = (3*10) + (2*15) = 30 + 30 = 60. Promedio = 60/5 = 12
            },
            {
                id: 30,
                curso: "Estadística",
                texto: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "1/3", "2/3", "1/6"],
                correcta: 0 // Primos en un dado: 2, 3, 5 (Total 3). 3/6 = 1/2
            },
            // ==========================================================
            // BLOQUE 4: CIENCIA, TECNOLOGÍA Y AMBIENTE (10 Preguntas)
            // Puntos: [3.0 Correcta] | Cursos: Física, Química, Biología
            // ==========================================================

            // --- FÍSICA (4 Preguntas) ---
            {
                id: 31,
                curso: "Física",
                texto: "Si un móvil parte del reposo con una aceleración constante de 4 m/s². ¿Qué distancia recorre en los primeros 3 segundos?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["12 m", "18 m", "36 m", "24 m"],
                correcta: 1 // d = 1/2 * a * t^2 = 0.5 * 4 * 9 = 18
            },
            {
                id: 32,
                curso: "Física",
                texto: "Fenómeno físico por el cual un rayo de luz cambia de dirección al pasar de un medio a otro con diferente densidad:",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Reflexión", "Difracción", "Refracción", "Dispersión"],
                correcta: 2
            },
            {
                id: 33,
                curso: "Física",
                texto: "Determine la dimensión de la fuerza [F] en el sistema internacional.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "LT⁻²"],
                correcta: 1 // Masa * Aceleración
            },
            {
                id: 34,
                curso: "Física",
                texto: "Dos resistencias de 6Ω y 3Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["9 Ω", "4.5 Ω", "2 Ω", "18 Ω"],
                correcta: 2 // (6*3)/(6+3) = 18/9 = 2
            },

            // --- QUÍMICA (3 Preguntas) ---
            {
                id: 35,
                curso: "Química",
                texto: "Indique el número de oxidación del azufre en el ácido sulfúrico (H₂SO₄).",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["+2", "+4", "+6", "-2"],
                correcta: 2 // 2(+1) + x + 4(-2) = 0 -> 2 + x - 8 = 0 -> x = +6
            },
            {
                id: 36,
                curso: "Química",
                texto: "¿Cuál de las siguientes partículas subatómicas posee carga eléctrica negativa?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Protón", "Neutrón", "Electrón", "Positrón"],
                correcta: 2
            },
            {
                id: 37,
                curso: "Química",
                texto: "El enlace químico formado por la compartición de pares de electrones entre no metales se denomina:",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Iónico", "Covalente", "Metálico", "Puente de Hidrógeno"],
                correcta: 1
            },

            // --- BIOLOGÍA Y ANATOMÍA (3 Preguntas) ---
            {
                id: 38,
                curso: "Biología",
                texto: "Es la unidad anatómica, funcional y genética de todo ser vivo.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tejido", "Órgano", "Célula", "Sistema"],
                correcta: 2
            },
            {
                id: 39,
                curso: "Anatomía",
                texto: "¿Cuál es la glándula endocrina conocida como la 'glándula maestra' que regula a las demás?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tiroides", "Hipófisis", "Páncreas", "Suprarrenal"],
                correcta: 1 // Pituitaria o Hipófisis
            },
            {
                id: 40,
                curso: "Biología",
                texto: "Nivel de organización ecológica formado por individuos de la misma especie que habitan en un lugar y tiempo determinado.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Comunidad", "Población", "Ecosistema", "Biósfera"],
                correcta: 1
            }
        ]
    },
    "Faustino_D": {
        titulo: "Simulacro UNJFSC - BLOQUE D",
        tiempo: 110, // Minutos

        // 1. REGLAS GENERALES (Se usan si la pregunta no especifica nada)
        puntos: { correcta: 4, incorrecta: -0.10, vacia: 0 },

        preguntas: [
            // --- EJEMPLO 1: Pregunta que usa el puntaje GENERAL (3.5 pts) ---
            // ====================================================
            // BLOQUE 1: COMUNICACIÓN (10 Preguntas) - [2.0 Puntos]
            // Cursos: Lenguaje, Literatura, Razonamiento Verbal
            // ====================================================

            // --- LENGUAJE (3 Preguntas) ---
            {
                id: 1,
                curso: "Lenguaje",
                texto: "Marque la alternativa que presenta un caso de tildación diacrítica correcta.",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["A mí no me dijeron nada.", "El té helado está servido.", "Sé bueno con tus padres.", "Todas las anteriores."],
                correcta: 3
            },
            {
                id: 2,
                curso: "Lenguaje",
                texto: "En la oración 'Los alumnos que estudian ingresan', la proposición subordinada funciona como:",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Objeto Directo", "Adjetiva", "Adverbial", "Sustantiva"],
                correcta: 1 // (que estudian) modifica a alumnos
            },
            {
                id: 3,
                curso: "Lenguaje",
                texto: "Identifique la palabra que contiene un diptongo creciente.",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Caimán", "Ciudad", "Cuota", "Baúl"],
                correcta: 2 // Cuo-ta (Cerrada + Abierta)
            },

            // --- LITERATURA (3 Preguntas) ---
            {
                id: 4,
                curso: "Literatura",
                texto: "¿A qué género literario pertenece la obra 'Ollantay'?",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Épico", "Lírico", "Dramático", "Narrativo"],
                correcta: 2
            },
            {
                id: 5,
                curso: "Literatura",
                texto: "Es considerado el padre del cuento peruano y autor de 'El caballero Carmelo'.",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Julio Ramón Ribeyro", "Abraham Valdelomar", "Ricardo Palma", "Ciro Alegría"],
                correcta: 1
            },
            {
                id: 6,
                curso: "Literatura",
                texto: "En la 'Divina Comedia', ¿quién guía a Dante a través del Infierno y el Purgatorio?",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Beatriz", "San Bernardo", "Caronte", "Virgilio"],
                correcta: 3
            },

            // --- RAZONAMIENTO VERBAL (4 Preguntas) ---
            {
                id: 7,
                curso: "RV",
                texto: "Sinónimo de: LOCUAZ",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Hablador", "Callado", "Breve", "Tímido"],
                correcta: 0
            },
            {
                id: 8,
                curso: "RV",
                texto: "Antónimo de: EFÍMERO",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Fugaz", "Pasajero", "Duradero", "Momentáneo"],
                correcta: 2
            },
            {
                id: 9,
                curso: "RV",
                texto: "Analogía - CÉLULA : ORGANISMO ::",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Ladrillo : Pared", "Pata : Mesa", "Hoja : Árbol", "Átomo : Materia"],
                correcta: 0 // Parte fundamental : Todo
            },
            {
                id: 10,
                curso: "RV",
                texto: "Término Excluido: MANADA",
                puntos: { correcta: 3.0, incorrecta: -0.1 },
                img: "",
                opciones: ["Boyada", "Rebaño", "Jauría", "Establo"],
                correcta: 3 // Establo es lugar, los otros son conjuntos de animales
            },
            // ===================================================================
            // BLOQUE 2: CIENCIAS SOCIALES Y PERSONA (10 Preguntas) - [1.0 Punto]
            // Cursos: Historia, Geografía, Economía, Cívica, Psicología, Filosofía
            // ===================================================================

            // --- HISTORIA DEL PERÚ Y UNIVERSAL (3 Preguntas) ---
            {
                id: 11,
                curso: "Historia del Perú",
                texto: "La cultura preinca que destacó por su arquitectura lítica y las 'Cabezas Clavas' fue:",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Paracas", "Mochica", "Chavín", "Tiahuanaco"],
                correcta: 2
            },
            {
                id: 12,
                curso: "Historia del Perú",
                texto: "¿Qué virrey organizó las reducciones de indios y estableció la mita minera?",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Manuel Amat", "Francisco de Toledo", "Fernando de Abascal", "Agustín de Jáuregui"],
                correcta: 1
            },
            {
                id: 13,
                curso: "Historia Universal",
                texto: "El sistema económico, político y social que predominó en Europa durante la Edad Media se denominó:",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Capitalismo", "Esclavismo", "Feudalismo", "Socialismo"],
                correcta: 2
            },

            // --- GEOGRAFÍA (2 Preguntas) ---
            {
                id: 14,
                curso: "Geografía",
                texto: "Según la tesis de Javier Pulgar Vidal, la región natural ubicada entre los 2300 y 3500 m.s.n.m. es la:",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Yunga", "Suni", "Quechua", "Puna"],
                correcta: 2 // Clima templado, despensa del Perú
            },
            {
                id: 15,
                curso: "Geografía",
                texto: "Es el planeta más grande del sistema solar y posee la 'Gran Mancha Roja'.",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Saturno", "Júpiter", "Urano", "Marte"],
                correcta: 1
            },

            // --- ECONOMÍA (2 Preguntas) ---
            {
                id: 16,
                curso: "Economía",
                texto: "Fase del proceso económico donde se trasladan los bienes desde las unidades de producción a los mercados:",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Producción", "Consumo", "Circulación", "Inversión"],
                correcta: 2
            },
            {
                id: 17,
                curso: "Economía",
                texto: "Organismo encargado de preservar la estabilidad monetaria en el Perú.",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Banco de la Nación", "SUNAT", "BCRP", "SBS"],
                correcta: 2
            },

            // --- CÍVICA (1 Pregunta) ---
            {
                id: 18,
                curso: "Cívica",
                texto: "Es el poder del Estado encargado de administrar justicia a través de sus órganos jerárquicos.",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Poder Legislativo", "Poder Ejecutivo", "Poder Judicial", "Tribunal Constitucional"],
                correcta: 2
            },

            // --- PSICOLOGÍA Y FILOSOFÍA (2 Preguntas) ---
            {
                id: 19,
                curso: "Psicología",
                texto: "¿Qué proceso cognitivo nos permite almacenar y recuperar información?",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Percepción", "Atención", "Memoria", "Inteligencia"],
                correcta: 2
            },
            {
                id: 20,
                curso: "Filosofía",
                texto: "Disciplina filosófica que estudia la moral y el comportamiento humano.",
                puntos: { correcta: 4.0, incorrecta: -0.05 },
                img: "",
                opciones: ["Ética", "Estética", "Gnoseología", "Ontología"],
                correcta: 0
            },
            // ==========================================================
            // BLOQUE 3: MATEMÁTICA RAZONADA (10 Preguntas)
            // Puntos: [4.0 Correcta] | Cursos: Aritm., Alg., Geo., Trig., Est.
            // ==========================================================

            // --- ARITMÉTICA (2 Preguntas) ---
            {
                id: 21,
                curso: "Aritmética",
                texto: "Si al numerador de una fracción se le agrega la quinta parte del denominador, el valor de la fracción aumenta en su décima parte. Calcule la fracción original.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "3/5", "2/3", "1/4"],
                correcta: 0 // Sea f = n/d. (n + d/5)/d = n/d + (1/10)(n/d). Resolviendo: n/d = 1/2
            },
            {
                id: 22,
                curso: "Aritmética",
                texto: "En una reunión, el 40% de los asistentes son hombres. Si se retiran el 25% de las mujeres, ¿qué porcentaje del nuevo total son hombres?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["45%", "47%", "50%", "52%"],
                correcta: 1 // Total 100 (40H, 60M). Se van 15M (25% de 60). Quedan 45M + 40H = 85. %H = (40/85)*100 ≈ 47.05%
            },

            // --- TRIGONOMETRÍA (2 Preguntas) ---
            {
                id: 23,
                curso: "Trigonometría",
                texto: "Simplifique la expresión: E = (Sen x + Cos x)² - 1",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["Sen 2x", "Cos 2x", "2", "1"],
                correcta: 0 // Sen² + Cos² + 2SenCos - 1 = 1 + Sen2x - 1 = Sen2x
            },
            {
                id: 24,
                curso: "Trigonometría",
                texto: "Calcule el valor de 'x' agudo si: Sen(2x + 10°) . Sec(x + 20°) = 1",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10°", "15°", "20°", "30°"],
                correcta: 2 // Sen A . Sec B = 1 => A + B = 90°. 2x+10 + x+20 = 90 -> 3x = 60 -> x = 20
            },

            // --- ÁLGEBRA (2 Preguntas) ---
            {
                id: 25,
                curso: "Álgebra",
                texto: "Si: a + b = 5  y  a . b = 3. Calcule el valor de: E = a² + b²",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["19", "25", "22", "16"],
                correcta: 0 // (a+b)² = a² + b² + 2ab  -> 5² = E + 2(3) -> 25 = E + 6 -> E = 19
            },
            {
                id: 26,
                curso: "Álgebra",
                texto: "Halle el resto de dividir: P(x) = x³ + 2x² - x + 4  entre  (x - 1)",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["4", "5", "6", "7"],
                correcta: 2 // Teorema del Resto: x-1=0 -> x=1. P(1) = 1+2-1+4 = 6
            },

            // --- GEOMETRÍA (2 Preguntas) ---
            {
                id: 27,
                curso: "Geometría",
                texto: "En un triángulo rectángulo, la altura relativa a la hipotenusa determina dos segmentos de 4m y 9m. Calcule la longitud de dicha altura.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["5 m", "6 m", "6.5 m", "12 m"],
                correcta: 1 // h² = m*n -> h² = 4*9 = 36 -> h = 6
            },
            {
                id: 28,
                curso: "Geometría",
                texto: "Calcule el volumen de un cilindro de revolución si su altura mide 5m y el radio de su base mide 2m.",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["10π m³", "20π m³", "25π m³", "15π m³"],
                correcta: 1 // V = π*r²*h = π*4*5 = 20π
            },

            // --- ESTADÍSTICA (2 Preguntas) ---
            {
                id: 29,
                curso: "Estadística",
                texto: "De un grupo de 5 números, el promedio de 3 de ellos es 10 y el promedio de los otros 2 es 15. ¿Cuál es el promedio de los 5 números?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["11", "12", "12.5", "13"],
                correcta: 1 // Suma total = (3*10) + (2*15) = 30 + 30 = 60. Promedio = 60/5 = 12
            },
            {
                id: 30,
                curso: "Estadística",
                texto: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número primo?",
                puntos: { correcta: 2.0, incorrecta: -0.25 },
                img: "",
                opciones: ["1/2", "1/3", "2/3", "1/6"],
                correcta: 0 // Primos en un dado: 2, 3, 5 (Total 3). 3/6 = 1/2
            },
            // ==========================================================
            // BLOQUE 4: CIENCIA, TECNOLOGÍA Y AMBIENTE (10 Preguntas)
            // Puntos: [3.0 Correcta] | Cursos: Física, Química, Biología
            // ==========================================================

            // --- FÍSICA (4 Preguntas) ---
            {
                id: 31,
                curso: "Física",
                texto: "Si un móvil parte del reposo con una aceleración constante de 4 m/s². ¿Qué distancia recorre en los primeros 3 segundos?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["12 m", "18 m", "36 m", "24 m"],
                correcta: 1 // d = 1/2 * a * t^2 = 0.5 * 4 * 9 = 18
            },
            {
                id: 32,
                curso: "Física",
                texto: "Fenómeno físico por el cual un rayo de luz cambia de dirección al pasar de un medio a otro con diferente densidad:",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Reflexión", "Difracción", "Refracción", "Dispersión"],
                correcta: 2
            },
            {
                id: 33,
                curso: "Física",
                texto: "Determine la dimensión de la fuerza [F] en el sistema internacional.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "LT⁻²"],
                correcta: 1 // Masa * Aceleración
            },
            {
                id: 34,
                curso: "Física",
                texto: "Dos resistencias de 6Ω y 3Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["9 Ω", "4.5 Ω", "2 Ω", "18 Ω"],
                correcta: 2 // (6*3)/(6+3) = 18/9 = 2
            },

            // --- QUÍMICA (3 Preguntas) ---
            {
                id: 35,
                curso: "Química",
                texto: "Indique el número de oxidación del azufre en el ácido sulfúrico (H₂SO₄).",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["+2", "+4", "+6", "-2"],
                correcta: 2 // 2(+1) + x + 4(-2) = 0 -> 2 + x - 8 = 0 -> x = +6
            },
            {
                id: 36,
                curso: "Química",
                texto: "¿Cuál de las siguientes partículas subatómicas posee carga eléctrica negativa?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Protón", "Neutrón", "Electrón", "Positrón"],
                correcta: 2
            },
            {
                id: 37,
                curso: "Química",
                texto: "El enlace químico formado por la compartición de pares de electrones entre no metales se denomina:",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Iónico", "Covalente", "Metálico", "Puente de Hidrógeno"],
                correcta: 1
            },

            // --- BIOLOGÍA Y ANATOMÍA (3 Preguntas) ---
            {
                id: 38,
                curso: "Biología",
                texto: "Es la unidad anatómica, funcional y genética de todo ser vivo.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tejido", "Órgano", "Célula", "Sistema"],
                correcta: 2
            },
            {
                id: 39,
                curso: "Anatomía",
                texto: "¿Cuál es la glándula endocrina conocida como la 'glándula maestra' que regula a las demás?",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Tiroides", "Hipófisis", "Páncreas", "Suprarrenal"],
                correcta: 1 // Pituitaria o Hipófisis
            },
            {
                id: 40,
                curso: "Biología",
                texto: "Nivel de organización ecológica formado por individuos de la misma especie que habitan en un lugar y tiempo determinado.",
                puntos: { correcta: 1.0, incorrecta: -0.10 },
                img: "",
                opciones: ["Comunidad", "Población", "Ecosistema", "Biósfera"],
                correcta: 1
            }
        ]
    },
};
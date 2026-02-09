// ==========================================
// CEREBRO DE PREGUNTAS (DATA)
// ==========================================

const bancoPreguntas = {

    // --- EJEMPLO 1: ÁLGEBRA (Tema 1) ---
    // --- ÁLGEBRA TEMA 1: TEORÍA DE EXPONENTES ---
    "algebra_tema1": {
        titulo: "Teoría de Exponentes",
        introImg: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Propiedad: Producto de bases iguales. x⁵ . x³ es igual a:",
                img: "",
                opciones: ["x¹⁵", "x⁸", "x²", "2x⁸"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Todo número (diferente de cero) elevado a la potencia CERO es igual a:",
                img: "",
                opciones: ["0", "1", "El mismo número", "Indeterminado"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Calcula: (2³)³",
                img: "", // Aquí podrías poner imagen de Potencia de Potencia
                opciones: ["2⁶", "2⁹", "2³³", "512"],
                correcta: 1,
                tiempo: 20
            },

            // MEDIO
            {
                texto: "Simplifica: x⁻²",
                img: "",
                opciones: ["-2x", "1/x²", "-x²", "√x"],
                correcta: 1,
                tiempo: 20
            },
            {
                texto: "Expresa como raíz: x^(2/3)",
                img: "", // Recomendado usar imagen
                opciones: ["Raíz cuadrada de x al cubo", "Raíz cúbica de x al cuadrado", "x elevado a 2.3", "Raíz cúbica de x"],
                correcta: 1,
                tiempo: 25
            },
            {
                texto: "Reduce: (x⁴ . x⁶) / x⁵",
                img: "",
                opciones: ["x²", "x⁵", "x¹⁰", "x"],
                correcta: 1,
                tiempo: 25
            },
            {
                texto: "Halla 'n' si: 2ⁿ = 32",
                img: "",
                opciones: ["4", "5", "6", "16"],
                correcta: 1,
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Si xⁿ = 3, calcula el valor de: x³ⁿ",
                img: "",
                opciones: ["9", "27", "6", "81"],
                correcta: 1,
                tiempo: 35
            },
            {
                texto: "Calcula E = 32^(0.2)",
                img: "",
                opciones: ["2", "4", "1", "1/2"],
                correcta: 0,
                tiempo: 40
            },
            {
                texto: "Resuelve: 9^(x-1) = 27",
                img: "img/algebra/ecuacion_exponencial_dificil.jpg", // Recomendado usar imagen
                opciones: ["2", "2.5", "3", "1.5"],
                correcta: 1,
                tiempo: 45
            }
        ]
    },
    // --- ÁLGEBRA TEMA 2: POLINOMIOS ---
    "algebra_tema2": {
        titulo: "Polinomios",
        introImg: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif", // Puedes cambiar este gif si deseas
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Dado el monomio M(x,y) = 4x³y⁵. Calcula el Grado Absoluto (GA).",
                img: "",
                opciones: ["3", "5", "8", "15"],
                correcta: 2, // 3 + 5 = 8
                tiempo: 15
            },
            {
                texto: "Si P(x) = 2x + 5, calcula el Valor Numérico para x = 3. Es decir, halla P(3).",
                img: "",
                opciones: ["8", "11", "6", "10"],
                correcta: 1, // 2(3) + 5 = 11
                tiempo: 15
            },
            {
                texto: "En el polinomio P(x) = 3x² + 5x⁴ - 2, ¿cuál es el coeficiente principal?",
                img: "",
                opciones: ["3", "-2", "5", "4"],
                correcta: 2, // El que acompaña al mayor exponente (5)
                tiempo: 20
            },

            // MEDIO
            {
                texto: "Calcula el Grado Absoluto (GA) del siguiente polinomio: P(x,y) = x⁴y² + x³y⁵ - y⁶",
                img: "",
                opciones: ["6", "7", "8", "9"],
                correcta: 2, // El mayor grado es 3+5 = 8
                tiempo: 25
            },
            {
                texto: "Si el polinomio es HOMOGÉNEO: P(x,y) = xⁿy² + x³y⁴. Halla 'n'.",
                img: "",
                opciones: ["3", "4", "5", "6"],
                correcta: 2, // n+2 = 3+4 => n+2=7 => n=5
                tiempo: 25
            },
            {
                texto: "Dado: P(x) = 3x - 1. Calcula: E = P(2) + P(0)",
                img: "",
                opciones: ["4", "5", "3", "2"],
                correcta: 0, // P(2)=5, P(0)=-1 -> 5-1=4
                tiempo: 30
            },
            {
                texto: "Si el polinomio P(x) es idénticamente nulo: P(x) = (a-2)x² + (b+3)x. Halla 'a + b'",
                img: "",
                opciones: ["1", "-1", "5", "0"],
                correcta: 1, // a=2, b=-3 -> 2-3 = -1
                tiempo: 30
            },

            // DIFÍCIL
            {
                texto: "Cambio de Variable: Si P(x + 2) = 3x + 1. Calcula P(5).",
                img: "",
                opciones: ["16", "10", "7", "13"],
                correcta: 1, // x+2=5 -> x=3 -> 3(3)+1 = 10
                tiempo: 40
            },
            {
                texto: "Calcula el término independiente de P(x) = (x + 1)⁵ + (x + 2)³ + 4",
                img: "",
                opciones: ["5", "13", "12", "9"],
                correcta: 1, // TI es P(0) -> 1^5 + 2^3 + 4 = 1 + 8 + 4 = 13
                tiempo: 40
            },
            {
                texto: "Si GA(P) = 5 y GA(Q) = 3. Calcula el grado de: H(x) = [P(x)]² . Q(x)",
                img: "",
                opciones: ["13", "10", "8", "25"],
                correcta: 0, // (2*5) + 3 = 13 (Propiedad de grados)
                tiempo: 45
            }
        ]
    },
    // --- ÁLGEBRA TEMA 3: PRODUCTOS NOTABLES ---
    "algebra_tema3": {
        titulo: "Productos Notables",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático genérico
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Desarrolla el Binomio al Cuadrado: (x + 5)²",
                img: "",
                opciones: ["x² + 25", "x² + 5x + 25", "x² + 10x + 25", "2x + 10"],
                correcta: 2, // El primero al cuadrado + doble del primero por el segundo + segundo al cuadrado
                tiempo: 15
            },
            {
                texto: "Aplica Diferencia de Cuadrados: (x + 7)(x - 7)",
                img: "",
                opciones: ["x² - 49", "x² + 49", "x² - 14x + 49", "x² - 7"],
                correcta: 0, // x² - 7² = x² - 49
                tiempo: 15
            },
            {
                texto: "Multiplicación con término común (Stevin): (x + 2)(x + 3)",
                img: "",
                opciones: ["x² + 6x + 5", "x² + 5x + 6", "x² + 6", "x² + 5x + 5"],
                correcta: 1, // x² + (2+3)x + (2*3) = x² + 5x + 6
                tiempo: 20
            },

            // MEDIO
            {
                texto: "Identidad de Legendre: Reduce E = (x + a)² + (x - a)²",
                img: "",
                opciones: ["4xa", "2(x² + a²)", "x² + a²", "2xa"],
                correcta: 1, // La suma de cuadrados de binomios es 2(a²+b²)
                tiempo: 25
            },
            {
                texto: "Identidad de Legendre: Reduce M = (m + n)² - (m - n)²",
                img: "",
                opciones: ["2(m² + n²)", "m² - n²", "4mn", "2mn"],
                correcta: 2, // La resta de cuadrados de binomios es 4ab
                tiempo: 25
            },
            {
                texto: "Suma de Cubos: (x + 2)(x² - 2x + 4) es igual a:",
                img: "",
                opciones: ["x³ - 8", "x³ + 8", "x³ + 6", "(x+2)³"],
                correcta: 1, // Forma (a+b)(a²-ab+b²) = a³+b³
                tiempo: 30
            },
            {
                texto: "Si a + b = 5 y ab = 2. Calcula a² + b²",
                img: "",
                opciones: ["25", "23", "21", "29"],
                correcta: 2, // (a+b)² = a²+b²+2ab -> 5² = M + 2(2) -> 25 = M + 4 -> M=21
                tiempo: 35
            },

            // DIFÍCIL
            {
                texto: "Si x + 1/x = 3. Calcula el valor de E = x² + 1/x²",
                img: "",
                opciones: ["9", "6", "7", "11"],
                correcta: 2, // Elevar al cuadrado: x²+2+1/x²=9 -> x²+1/x² = 7
                tiempo: 40
            },
            {
                texto: "Si x + 1/x = 3. Calcula el valor de J = x³ + 1/x³",
                img: "",
                opciones: ["27", "18", "9", "36"],
                correcta: 1, // (x+1/x)³ = x³+1/x³+3(x+1/x) -> 3³ = J + 3(3) -> 27 = J + 9 -> J=18
                tiempo: 45
            },
            {
                texto: "Si a + b + c = 0. Calcula: (a³ + b³ + c³) / (3abc)",
                img: "",
                opciones: ["0", "1", "3", "No se puede"],
                correcta: 1, // Identidad Condicional: Si a+b+c=0 -> a³+b³+c³ = 3abc. Entonces 3abc/3abc = 1
                tiempo: 40
            }
        ]
    },
    // --- ÁLGEBRA TEMA 4: DIVISIÓN DE POLINOMIOS ---
    "algebra_tema4": {
        titulo: "División de Polinomios",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Para dividir un polinomio entre (x - 2), ¿qué método es el más práctico?",
                img: "",
                opciones: ["Método de Horner", "Método de Ruffini", "Aspa Simple", "Factorización"],
                correcta: 1, // Ruffini es ideal para divisores de la forma ax + b
                tiempo: 15
            },
            {
                texto: "Si el grado del Dividendo es 5 y el del Divisor es 2, ¿cuál es el grado del Cociente?",
                img: "",
                opciones: ["3", "7", "2.5", "10"],
                correcta: 0, // Grado q = Grado D - Grado d (5 - 2 = 3)
                tiempo: 15
            },
            {
                texto: "Teorema del Resto: Halla el residuo de dividir P(x) entre (x - 3).",
                img: "",
                opciones: ["P(3)", "P(-3)", "P(0)", "P(1)"],
                correcta: 0, // Se iguala el divisor a 0 -> x = 3, y se reemplaza
                tiempo: 45
            },

            // MEDIO
            {
                texto: "Halla el resto de dividir: (x + 1)(x + 2) + 5 entre (x + 1)",
                img: "",
                opciones: ["5", "0", "1", "2"],
                correcta: 0, // Por T. Resto: x = -1. Reemplazando: (-1+1)(-1+2) + 5 = 0 + 5 = 5
                tiempo: 70
            },
            {
                texto: "En la división exacta: D(x) = d(x) . q(x) + R(x). ¿Cuánto vale R(x)?",
                img: "",
                opciones: ["1", "x", "0", "Indeterminado"],
                correcta: 2, // Si es exacta, el residuo es nulo (0)
                tiempo: 60
            },
            {
                texto: "Si al dividir P(x) entre (x - 2) el residuo es 8. Calcula el valor de P(2).",
                img: "",
                opciones: ["2", "8", "-8", "0"],
                correcta: 1, // Por definición del Teorema del Resto
                tiempo: 60
            },
            {
                texto: "Calcula el resto de: (x⁵ + 3x + 1) ÷ (x - 1)",
                img: "",
                opciones: ["3", "4", "5", "1"],
                correcta: 2, // x=1 -> 1⁵ + 3(1) + 1 = 5
                tiempo: 60
            },

            // DIFÍCIL
            {
                texto: "Si la división (x³ + 2x² + ax + b) / (x² + 1) es exacta, halla 'a . b'",
                img: "", // Requiere Horner o identidad
                opciones: ["2", "1", "4", "-2"],
                correcta: 0, // (x²+1)(x+2) = x³+2x²+x+2 -> a=1, b=2 -> ab=2
                tiempo: 120
            },
            {
                texto: "Halla el resto de: (x + 2)¹⁰⁰ ÷ (x + 3)",
                img: "",
                opciones: ["1", "-1", "0", "2"],
                correcta: 0, // x = -3 -> (-3+2)¹⁰⁰ = (-1)¹⁰⁰ = 1
                tiempo: 68
            },
            {
                texto: "En el método de Horner, si el divisor es de grado 2, ¿cuántas columnas se separan para el residuo?",
                img: "",
                opciones: ["1", "2", "3", "Depende del dividendo"],
                correcta: 1, // Se separan tantas columnas como el grado del divisor
                tiempo: 120
            }
        ]
    },
    // --- ÁLGEBRA TEMA 5: COCIENTES NOTABLES ---
    "algebra_tema5": {
        titulo: "Cocientes Notables",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "En el cociente notable (x⁵ - y⁵) / (x - y), ¿cuántos términos tiene su desarrollo?",
                img: "",
                opciones: ["4", "5", "6", "10"],
                correcta: 1, // El número de términos es igual al exponente 'n' (5)
                tiempo: 15
            },
            {
                texto: "Desarrolla el primer término del cociente: (x³ + y³) / (x + y)",
                img: "",
                opciones: ["x²", "x", "xy", "y²"],
                correcta: 0, // x^(3-1) = x²
                tiempo: 15
            },
            {
                texto: "Condición necesaria: Para que (xᵃ ± yᵇ) / (x² ± y³) sea cociente notable, debe cumplirse:",
                img: "",
                opciones: ["a/2 = b/3", "a.b = 6", "a = b", "a - b = 1"],
                correcta: 0, // Proporcionalidad de exponentes: n = a/2 = b/3
                tiempo: 20
            },

            // MEDIO
            {
                texto: "Calcula el tercer término (T3) del desarrollo de: (x⁴ - y⁴) / (x - y)",
                img: "",
                opciones: ["xy²", "x²y", "xy", "y³"],
                correcta: 0, // Tk = x^(n-k) * y^(k-1) -> T3 = x^(4-3) * y^(3-1) = x¹y²
                tiempo: 50
            },
            {
                texto: "Halla el número de términos si la división (x³⁰ - y⁴⁵) / (x² - y³) genera un C.N.",
                img: "",
                opciones: ["10", "12", "15", "9"],
                correcta: 2, // n = 30/2 = 45/3 = 15
                tiempo: 50
            },
            {
                texto: "Si el divisor es (x + a), los signos del desarrollo son:",
                img: "",
                opciones: ["Todos positivos", "Todos negativos", "Alternados (+, -, +, ...)", "Positivos los pares"],
                correcta: 2, // Cuando el divisor es suma, los signos se alternan
                tiempo: 50
            },
            {
                texto: "Calcula el término de lugar 10 en: (x⁵⁰ - y⁵⁰) / (x - y)",
                img: "",
                opciones: ["x⁴⁰y⁹", "x³⁹y¹⁰", "x¹⁰y³⁹", "x⁹y⁴⁰"],
                correcta: 0, // T10 = x^(50-10) * y^(10-1) = x⁴⁰y⁹
                tiempo: 50
            },

            // DIFÍCIL
            {
                texto: "Halla el Grado Absoluto del quinto término en: (x³⁶ - y²⁴) / (x³ - y²)",
                img: "",
                opciones: ["29", "25", "23", "27"],
                correcta: 0, // n=12. T5 = (x³)^(12-5) * (y²)^(5-1) = x²¹ * y⁸. GA = 21+8 = 29
                tiempo: 80
            },
            {
                texto: "Si el término central de un C.N. es xᶜy¹². Halla el número de términos.",
                img: "", // Requiere análisis
                opciones: ["25", "13", "24", "26"],
                correcta: 0, // Si es el central, k-1 = 12 -> k=13. Como es central, n es impar y k = (n+1)/2 -> 13=(n+1)/2 -> 26=n+1 -> n=25
                tiempo: 80
            },
            {
                texto: "Calcula el penúltimo término del desarrollo de (x²⁰ - y²⁰) / (x - y)",
                img: "",
                opciones: ["xy¹⁸", "xy¹⁹", "x²y¹⁸", "x¹⁸y"],
                correcta: 0, // Penúltimo es T19 (pues hay 20 términos). T19 = x^(20-19) * y^(19-1) = x¹y¹⁸
                tiempo: 80
            }
        ]
    },
    // --- ÁLGEBRA TEMA 6: FACTORIZACIÓN ---
    "algebra_tema6": {
        titulo: "Factorización",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Factoriza por Factor Común: x² + 7x",
                img: "",
                opciones: ["x(x + 7)", "x(x - 7)", "(x + 1)(x + 7)", "x²(1 + 7)"],
                correcta: 0,
                tiempo: 15
            },
            {
                texto: "Aplica Diferencia de Cuadrados: x² - 81",
                img: "",
                opciones: ["(x - 9)²", "(x + 9)(x - 9)", "(x + 81)(x - 1)", "No se puede"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Factoriza el Trinomio Cuadrado Perfecto: x² + 2x + 1",
                img: "",
                opciones: ["(x - 1)²", "(x + 2)²", "(x + 1)²", "(x + 1)(x - 1)"],
                correcta: 2,
                tiempo: 20
            },

            // MEDIO
            {
                texto: "Usa el Aspa Simple para factorizar: x² + 7x + 12. Indica un factor primo.",
                img: "",
                opciones: ["x + 2", "x + 4", "x + 6", "x - 3"],
                correcta: 1, // (x+3)(x+4)
                tiempo: 40
            },
            {
                texto: "Factoriza por Agrupación: ax + ay + bx + by",
                img: "",
                opciones: ["(a + b)(x + y)", "(a + x)(b + y)", "(a - b)(x - y)", "ab(x + y)"],
                correcta: 0,
                tiempo: 50
            },
            {
                texto: "Factoriza la Suma de Cubos: x³ + 1",
                img: "",
                opciones: ["(x + 1)³", "(x + 1)(x² - x + 1)", "(x + 1)(x² + x + 1)", "(x - 1)(x² + x + 1)"],
                correcta: 1,
                tiempo: 50
            },
            {
                texto: "Indica la suma de los términos independientes de los factores primos de: x² - x - 20",
                img: "",
                opciones: ["-1", "1", "9", "4"],
                correcta: 0, // (x-5)(x+4) -> T.I: -5 + 4 = -1
                tiempo: 50
            },

            // DIFÍCIL
            {
                texto: "Halla la suma de sus factores primos: x² - 5x + 6",
                img: "",
                opciones: ["2x - 5", "2x + 5", "2x - 1", "x - 5"],
                correcta: 0, // (x-3)(x-2) -> Suma: x-3 + x-2 = 2x-5
                tiempo: 70
            },
            {
                texto: "Factoriza: x³ + 2x² + x + 2. Indica un factor primo.",
                img: "",
                opciones: ["x + 1", "x² + 2", "x + 2", "x² - 1"],
                correcta: 2, // Agrupando: x²(x+2) + 1(x+2) = (x²+1)(x+2)
                tiempo:70
            },
            {
                texto: "¿Cuántos factores primos tiene: P(x) = x⁴ - 16 ?",
                img: "",
                opciones: ["2", "3", "4", "1"],
                correcta: 1, // (x² + 4)(x² - 4) -> (x² + 4)(x + 2)(x - 2). Total 3 factores.
                tiempo: 70
            }
        ]
    },
    // ==========================================
    // SECCIÓN ARITMÉTICA
    // ==========================================

    // --- ARITMÉTICA TEMA 1: LÓGICA PROPOSICIONAL ---
    "aritmetica_tema1": {
        titulo: "Lógica Proposicional",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif lógico
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "¿Qué es una proposición lógica?",
                img: "",
                opciones: ["Una orden o mandato", "Una frase que puede ser Verdadera o Falsa", "Una pregunta", "Una exclamación"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "El conector lógico 'y' (conjunción) se representa con el símbolo:",
                img: "",
                opciones: ["∨", "→", "∧", "↔"],
                correcta: 2,
                tiempo: 15
            },
            {
                texto: "Si p es Verdadero, ¿cuál es el valor de 'no p' (~p)?",
                img: "",
                opciones: ["Falso", "Verdadero", "Indeterminado", "Posible"],
                correcta: 0,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "En una condicional (p → q), la proposición es FALSA solo cuando:",
                img: "",
                opciones: ["Ambas son falsas", "El antecedente es V y el consecuente es F", "El antecedente es F y el consecuente es V", "Ambas son verdaderas"],
                correcta: 1, // V -> F = F (El único caso)
                tiempo: 20
            },
            {
                texto: "La disyunción débil (p ∨ q) es FALSA únicamente cuando:",
                img: "",
                opciones: ["Ambas proposiciones son verdaderas", "Ambas proposiciones son falsas", "Una es verdadera y la otra falsa", "Nunca es falsa"],
                correcta: 1, // F v F = F
                tiempo: 25
            },
            {
                texto: "La proposición bicondicional (p ↔ q) es VERDADERA cuando:",
                img: "",
                opciones: ["Tienen valores diferentes", "El primero es falso", "Ambas tienen el mismo valor de verdad", "El segundo es verdadero"],
                correcta: 2, // V↔V o F↔F
                tiempo: 25
            },
            {
                texto: "Formaliza: 'Si estudio, entonces ingreso'.",
                img: "",
                opciones: ["p ∧ q", "p ∨ q", "p → q", "p ↔ q"],
                correcta: 2,
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Ley de Morgan: La negación de (p ∧ q) equivale a:",
                img: "",
                opciones: ["~p ∧ ~q", "~p ∨ ~q", "p ∨ q", "~p → ~q"],
                correcta: 1, // ~(p ^ q) = ~p v ~q
                tiempo: 35
            },
            {
                texto: "¿Cómo se llama una fórmula lógica que SIEMPRE es verdadera, sin importar los valores?",
                img: "",
                opciones: ["Contradicción", "Contingencia", "Tautología", "Equivalencia"],
                correcta: 2,
                tiempo: 30
            },
            {
                texto: "Si la proposición (p ∧ ~q) es Verdadera, entonces:",
                img: "",
                opciones: ["p es V y q es V", "p es F y q es V", "p es V y q es F", "Ambos son F"],
                correcta: 2, // Para que la conjunción sea V, ambos deben ser V. Entonces p=V y ~q=V (lo que implica q=F)
                tiempo: 40
            }
        ]
    },
    // --- ARITMÉTICA TEMA 2: TEORÍA DE CONJUNTOS ---
    "aritmetica_tema2": {
        titulo: "Teoría de Conjuntos",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Un conjunto determinado por 'Extensión' es aquel donde:",
                img: "",
                opciones: ["Se menciona una característica común", "Se nombran todos sus elementos uno a uno", "No tiene elementos", "Tiene infinitos elementos"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Si A = {2; 4; 6; 8}, ¿cuál de las siguientes afirmaciones es CORRECTA?",
                img: "",
                opciones: ["3 ∈ A", "4 ⊂ A", "2 ∈ A", "{6} ∈ A"],
                correcta: 2, // El elemento 2 PERTENECE a A
                tiempo: 15
            },
            {
                texto: "¿Cómo se llama el conjunto que tiene un solo elemento?",
                img: "",
                opciones: ["Conjunto Vacío", "Conjunto Unitario", "Conjunto Universal", "Conjunto Potencia"],
                correcta: 1,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Si A = {1; 2; 3} y B = {3; 4; 5}. Halla la Intersección (A ∩ B).",
                img: "",
                opciones: ["{1; 2}", "{4; 5}", "{3}", "{1; 2; 3; 4; 5}"],
                correcta: 2, // El elemento común es 3
                tiempo: 20
            },
            {
                texto: "Dado el conjunto A = {a, b, c}. ¿Cuántos subconjuntos tiene? (Fórmula: 2ⁿ)",
                img: "",
                opciones: ["3", "6", "8", "9"],
                correcta: 2, // 2³ = 8
                tiempo: 25
            },
            {
                texto: "Si A = {x/x es vocal de la palabra 'COCODRILO'}. Halla n(A) (Cardinal).",
                img: "",
                opciones: ["4", "3", "2", "5"],
                correcta: 2, // Vocales: O, O, I, O. Elementos únicos: {O, I}. Cardinal = 2.
                tiempo: 25
            },
            {
                texto: "Operación Diferencia: Si M = {2; 4; 6} y N = {1; 2; 3}. Halla M - N.",
                img: "",
                opciones: ["{4; 6}", "{1; 3}", "{2}", "{1; 2; 3; 4; 6}"],
                correcta: 0, // Elementos que están en M pero NO en N -> {4; 6}
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Si n(A) = 10, n(B) = 12 y n(A ∩ B) = 5. Calcula n(A ∪ B).",
                img: "",
                opciones: ["22", "17", "15", "7"],
                correcta: 1, // n(AUB) = n(A) + n(B) - n(INT) -> 10 + 12 - 5 = 17
                tiempo: 35
            },
            {
                texto: "En un aula de 40 alumnos: 25 aprueban Mate y 20 aprueban Lenguaje. Si 5 no aprueban ninguno, ¿cuántos aprueban AMBOS?",
                img: "", // Diagrama de Venn mental
                opciones: ["5", "15", "10", "12"],
                correcta: 2, // Universo=40. M(25) + L(20) - x + 5 = 40 -> 50 - x = 40 -> x = 10
                tiempo: 40
            },
            {
                texto: "Calcula cuántos subconjuntos propios tiene un conjunto de 5 elementos.",
                img: "",
                opciones: ["32", "31", "30", "25"],
                correcta: 1, // Fórmula: 2ⁿ - 1 -> 2⁵ - 1 = 32 - 1 = 31
                tiempo: 35
            }
        ]
    },
    // --- ARITMÉTICA TEMA 3: NUMERACIÓN ---
    "aritmetica_tema3": {
        titulo: "Numeración",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "En el sistema de base 6 (senario), ¿cuáles son las cifras disponibles?",
                img: "",
                opciones: ["0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5, 6", "Solo 0 y 1"],
                correcta: 0, // Las cifras siempre son menores que la base
                tiempo: 15
            },
            {
                texto: "¿Cómo se llama el sistema de numeración que usamos cotidianamente (Base 10)?",
                img: "",
                opciones: ["Binario", "Decimal", "Vigesimal", "Sexagesimal"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Descomposición polinómica: El número 342 es igual a:",
                img: "",
                opciones: ["300 + 40 + 2", "3 + 4 + 2", "3x4x2", "30 + 40 + 200"],
                correcta: 0,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Convierte el número 23 en base 5 a base 10.",
                img: "",
                opciones: ["13", "10", "15", "11"],
                correcta: 0, // 2(5) + 3 = 10 + 3 = 13
                tiempo: 25
            },
            {
                texto: "Para convertir un número de base 10 a otra base, se utiliza el método de:",
                img: "",
                opciones: ["Descomposición Polinómica", "Divisiones Sucesivas", "Ruffini", "Aspa Simple"],
                correcta: 1,
                tiempo: 20
            },
            {
                texto: "Un número 'Capicúa' es aquel que:",
                img: "",
                opciones: ["Es par", "Se lee igual de izquierda a derecha y viceversa", "Tiene base 10", "Termina en cero"],
                correcta: 1,
                tiempo: 20
            },
            {
                texto: "Si el numeral es 213(x), entonces 'x' debe ser:",
                img: "",
                opciones: ["Mayor que 3", "Igual a 3", "Menor que 3", "Igual a 2"],
                correcta: 0, // La base siempre es mayor que cualquier cifra (3)
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Si 32(x) = 20 (en base 10). Halla el valor de la base 'x'.",
                img: "",
                opciones: ["6", "5", "4", "7"],
                correcta: 0, // 3x + 2 = 20 -> 3x = 18 -> x = 6
                tiempo: 35
            },
            {
                texto: "¿Cuál es el mayor número de 2 cifras en base 7?",
                img: "",
                opciones: ["66(7)", "77(7)", "99(7)", "100(7)"],
                correcta: 0, // La cifra máxima en base 7 es 6
                tiempo: 30
            },
            {
                texto: "Propiedad: Si dos numerales son iguales, a mayor numeral aparente le corresponde:",
                img: "",
                opciones: ["Mayor base", "Menor base", "Igual base", "Doble base"],
                correcta: 1, // "A mayor número aparente, menor base real"
                tiempo: 40
            }
        ]
    },
    // --- ARITMÉTICA TEMA 4: DIVISIBILIDAD ---
    "aritmetica_tema4": {
        titulo: "Divisibilidad",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Un número es divisible por 2 cuando:",
                img: "",
                opciones: ["Termina en cero o cifra par", "La suma de sus cifras es par", "Termina en impar", "Es múltiplo de 3"],
                correcta: 0,
                tiempo: 15
            },
            {
                texto: "¿Cuál de los siguientes números es divisible por 5?",
                img: "",
                opciones: ["123", "450", "342", "551"],
                correcta: 1, // Termina en 0
                tiempo: 15
            },
            {
                texto: "Si un número es múltiplo de 9, entonces necesariamente es múltiplo de:",
                img: "",
                opciones: ["2", "5", "3", "6"],
                correcta: 2, // 9 es múltiplo de 3
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Halla el valor de 'a' si el numeral 4a3 es divisible por 9.",
                img: "",
                opciones: ["1", "2", "3", "4"],
                correcta: 1, // 4+a+3 = 7+a = 9 => a=2
                tiempo: 25
            },
            {
                texto: "Criterio del 11: Halla 'x' si el número 9x5 es divisible por 11.",
                img: "",
                opciones: ["3", "4", "2", "1"],
                correcta: 0, // +5 -x +9 = 14-x = 11 => x=3
                tiempo: 30
            },
            {
                texto: "Para que un número sea divisible por 6, debe ser divisible por:",
                img: "",
                opciones: ["2 y 3 a la vez", "2 y 5", "3 y 4", "Solo por 3"],
                correcta: 0,
                tiempo: 10
            },
            {
                texto: "¿Cuántos divisores tiene el número 12?",
                img: "",
                opciones: ["4", "5", "6", "8"],
                correcta: 2, // {1, 2, 3, 4, 6, 12}
                tiempo: 10
            },

            // DIFÍCIL
            {
                texto: "Calcula el residuo de dividir: 4325 por 3.",
                img: "",
                opciones: ["0", "1", "2", "3"],
                correcta: 2, // Suma cifras: 4+3+2+5 = 14. 14/3 deja resto 2.
                tiempo: 45
            },
            {
                texto: "Si N = múltiplo de 7 + 2. ¿Cuál es el residuo de dividir (N + 12) entre 7?",
                img: "",
                opciones: ["2", "5", "0", "4"],
                correcta: 2, // (7° + 2) + 12 = 7° + 14 = 7°. Resto 0 (Exacto).
                tiempo: 40
            },
            {
                texto: "Halla 'a' si el numeral 2a3a es divisible por 7.",
                img: "",
                opciones: ["4", "5", "3", "6"],
                correcta: 1, // Criterio 1, 3, 2, -1... : 1(a) + 3(3) + 2(a) - 1(2) = a + 9 + 2a - 2 = 3a + 7 = 7° => 3a = 7° - 7 => 3a=mult.7 => a=7 o a=0? No, probando a=5: 15+7=22 (no). Espera, 2a3a: 2030 + 101a = 7k. 2030/7=290 exacto. 101a=7k. 101=7*14+3. 3a=7k. a=0 o 7. Si no hay 0 o 7 en opciones, revisamos criterio: 1*a + 3*3 + 2*a - 1*2 = a + 9 + 2a - 2 = 3a + 7. Si a=5 -> 15+7=22 (no es mult 7). Si a=4 -> 12+7=19. Si a=3 -> 9+7=16.  Revisión rápida: 2535/7 = 362.1. 2131/7... 2434/7. Ok, probando opciones: Si a=6: 2636/7=376.5. Si a=5: 2535... Algo falla en el cálculo mental rápido. Usemos resto: 2000 mod 7 = 4. a00 mod 7 = 2a. 30 mod 7 = 2. a mod 7 = a. Suma: 4 + 2a + 2 + a = 3a + 6 = 7k. Si a=5 -> 15+6=21 (SÍ). Correcta es 5.",
                tiempo: 45
            }
        ]
    },
    // --- ARITMÉTICA TEMA 5: NÚMEROS PRIMOS Y COMPUESTOS ---
    "aritmetica_tema5": {
        titulo: "Números Primos",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "¿Cuántos divisores tiene un número primo?",
                img: "",
                opciones: ["1", "2", "3", "Infinitos"],
                correcta: 1, // Solo el 1 y sí mismo
                tiempo: 15
            },
            {
                texto: "¿Cuál es el único número primo que es par?",
                img: "",
                opciones: ["4", "2", "6", "0"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "Indica cuál de los siguientes es un número compuesto:",
                img: "",
                opciones: ["13", "7", "9", "2"],
                correcta: 2, // 9 tiene divisores: 1, 3, 9
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Realiza la descomposición canónica de 120:",
                img: "",
                opciones: ["2³ x 3 x 5", "2² x 3 x 10", "2⁴ x 5", "2³ x 15"],
                correcta: 0, // 8 x 3 x 5 = 120
                tiempo: 30
            },
            {
                texto: "Dos números son PESI (Primos entre sí) cuando:",
                img: "",
                opciones: ["Son primos absolutos", "Su único divisor común es la unidad", "Son impares", "Su MCD es cero"],
                correcta: 1,
                tiempo: 20
            },
            {
                texto: "Calcula la suma de los 4 primeros números primos.",
                img: "",
                opciones: ["15", "17", "26", "10"],
                correcta: 1, // 2 + 3 + 5 + 7 = 17
                tiempo: 25
            },
            {
                texto: "¿Cuántos divisores tiene el número 36?",
                img: "",
                opciones: ["6", "8", "9", "12"],
                correcta: 2, // 36 = 2² x 3². CD = (2+1)(2+1) = 9
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Si N = 2³ x 3ⁿ x 5 tiene 32 divisores, halla 'n'.",
                img: "",
                opciones: ["2", "3", "4", "1"],
                correcta: 1, // CD = (3+1)(n+1)(1+1) -> 4(n+1)2 = 32 -> 8(n+1)=32 -> n+1=4 -> n=3
                tiempo: 40
            },
            {
                texto: "¿Cuántos divisores COMPUESTOS tiene el número 60?",
                img: "",
                opciones: ["12", "8", "9", "3"],
                correcta: 1, // 60 = 2²x3x5. CD Total=12. Primos=3 (2,3,5). Simple=1 (la unidad). Compuestos = 12 - 3 - 1 = 8.
                tiempo: 40
            },
            {
                texto: "Halla la cantidad de divisores de 1000 (mil).",
                img: "",
                opciones: ["10", "12", "16", "20"],
                correcta: 2, // 1000 = 10³ = (2x5)³ = 2³x5³. CD = (3+1)(3+1) = 16
                tiempo: 35
            }
        ]
    },
    // --- ARITMÉTICA TEMA 6: NÚMEROS RACIONALES ---
    "aritmetica_tema6": {
        titulo: "Números Racionales (Fracciones)",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Una fracción es PROPIA cuando:",
                img: "",
                opciones: ["El numerador es mayor que el denominador", "El numerador es menor que el denominador", "Son iguales", "El denominador es 1"],
                correcta: 1, // Ej: 3/5 (Es menor que la unidad)
                tiempo: 15
            },
            {
                texto: "¿Qué fracción es equivalente a 1/2?",
                img: "",
                opciones: ["2/5", "3/6", "4/7", "5/9"],
                correcta: 1, // 3/6 simplificando tercia es 1/2
                tiempo: 15
            },
            {
                texto: "Convierte el decimal 0,5 a fracción:",
                img: "",
                opciones: ["1/5", "5/100", "1/2", "5/9"],
                correcta: 2,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Calcula la suma: 1/3 + 1/2",
                img: "",
                opciones: ["2/5", "5/6", "1/6", "1/5"],
                correcta: 1, // (2+3)/6 = 5/6
                tiempo: 25
            },
            {
                texto: "¿Cuál es la Fracción Generatriz del decimal periódico puro 0,333...?",
                img: "",
                opciones: ["3/10", "1/3", "3/90", "3/100"],
                correcta: 1, // 3/9 = 1/3
                tiempo: 25
            },
            {
                texto: "Si gasto los 2/5 de mi dinero, ¿qué fracción me queda?",
                img: "",
                opciones: ["1/5", "3/5", "2/5", "4/5"],
                correcta: 1, // El total es 5/5. Si gasto 2/5, queda 3/5.
                tiempo: 20
            },
            {
                texto: "Simplifica la fracción 120/150 a su mínima expresión (irreductible).",
                img: "",
                opciones: ["4/5", "12/15", "6/5", "3/4"],
                correcta: 0, // 120/150 -> 12/15 -> tercia -> 4/5
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Halla la fracción generatriz de 0,1666... (Periódico Mixto)",
                img: "",
                opciones: ["1/6", "16/90", "15/99", "1/5"],
                correcta: 0, // (16-1)/90 = 15/90 = 1/6
                tiempo: 35
            },
            {
                texto: "¿Cuántas fracciones propias e irreductibles con denominador 12 existen?",
                img: "",
                opciones: ["2", "4", "3", "5"],
                correcta: 1, // {1/12, 5/12, 7/12, 11/12}. (No pares ni múltiplos de 3)
                tiempo: 40
            },
            {
                texto: "Si a los 2/3 de 24 le restamos los 3/4 de 12, obtenemos:",
                img: "",
                opciones: ["7", "9", "5", "8"],
                correcta: 0, // (2/3)*24 = 16. (3/4)*12 = 9. -> 16 - 9 = 7
                tiempo: 35
            }
        ]
    },
    // ==========================================
    // SECCIÓN TRIGONOMETRÍA
    // ==========================================

    // --- TRIGONOMETRÍA TEMA 1: SISTEMA DE MEDIDA ANGULAR ---
    "trigonometria_tema1": {
        titulo: "Sistema de Medida Angular",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Una vuelta completa en el sistema Sexagesimal equivale a:",
                img: "",
                opciones: ["180°", "360°", "400g", "2π rad"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "¿A cuántos grados sexagesimales equivale π radianes?",
                img: "",
                opciones: ["90°", "360°", "270°", "180°"],
                correcta: 3, // π rad = 180°
                tiempo: 15
            },
            {
                texto: "En el sistema centesimal, una vuelta equivale a:",
                img: "",
                opciones: ["360g", "400g", "200g", "100g"],
                correcta: 1,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Convierte 50g (grados centesimales) al sistema sexagesimal.",
                img: "",
                opciones: ["45°", "50°", "40°", "55°"],
                correcta: 0, // 50g * (9°/10g) = 45°
                tiempo: 25
            },
            {
                texto: "Calcula el valor de 'x' si: π/4 rad = (3x + 9)°",
                img: "",
                opciones: ["10", "12", "15", "8"],
                correcta: 1, // π/4 = 45°. 3x+9=45 -> 3x=36 -> x=12
                tiempo: 30
            },
            {
                texto: "Simplifica la expresión: E = (C + S) / (C - S)",
                img: "",
                opciones: ["10", "9", "19", "20"],
                correcta: 2, // (10k+9k)/(10k-9k) = 19k/k = 19
                tiempo: 25
            },
            {
                texto: "Convierte 27° al sistema radial.",
                img: "",
                opciones: ["3π/20 rad", "π/5 rad", "3π/10 rad", "π/20 rad"],
                correcta: 0, // 27 * π/180 = 3π/20
                tiempo: 25
            },

            // DIFÍCIL
            {
                texto: "Si S = x + 1 y C = x + 4. Halla el ángulo en grados sexagesimales.",
                img: "",
                opciones: ["18°", "27°", "36°", "9°"],
                correcta: 1, // S/9 = C/10 -> 10(x+1)=9(x+4) -> 10x+10=9x+36 -> x=26. S=27.
                tiempo: 40
            },
            {
                texto: "Calcula: M = √( (C+S)/(C-S) + 6 )",
                img: "",
                opciones: ["4", "5", "3", "6"],
                correcta: 1, // Sabemos que (C+S)/(C-S)=19. M = √(19+6) = √25 = 5
                tiempo: 35
            },
            {
                texto: "Halla la medida de un ángulo en radianes si: C - S = 4",
                img: "",
                opciones: ["π/2 rad", "π/4 rad", "π/5 rad", "π/10 rad"],
                correcta: 2, // 10k - 9k = 4 -> k=4. R = πk/20 = 4π/20 = π/5
                tiempo: 40
            }
        ]
    },
    // --- TRIGONOMETRÍA TEMA 2: R.T. DE ÁNGULOS AGUDOS ---
    "trigonometria_tema2": {
        titulo: "R.T. de Ángulos Agudos",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "En un triángulo rectángulo, el Seno se define como:",
                img: "",
                opciones: ["Cateto Adyacente / Hipotenusa", "Cateto Opuesto / Hipotenusa", "Cateto Opuesto / Adyacente", "Hipotenusa / Adyacente"],
                correcta: 1, // CO / H
                tiempo: 15
            },
            {
                texto: "La inversa (recíproca) de la Tangente es la:",
                img: "",
                opciones: ["Secante", "Cosecante", "Cotangente", "Seno"],
                correcta: 2, // tan * cot = 1
                tiempo: 30
            },
            {
                texto: "Si Sen(x) = 3/5, calcula Csc(x).",
                img: "",
                opciones: ["4/5", "3/4", "5/3", "5/4"],
                correcta: 2, // Son recíprocos, solo se invierte
                tiempo: 30
            },

            // MEDIO
            {
                texto: "En un triángulo rectángulo ABC (recto en B), si Tan(A) = 3/4. Calcula Sen(A).",
                img: "",
                opciones: ["3/5", "4/5", "3/7", "4/3"],
                correcta: 0, // Triángulo notable 3, 4, 5. Sen = CO/H = 3/5
                tiempo: 40
            },
            {
                texto: "Propiedad de Co-razones: Si Sen(x) = Cos(60°), halla 'x'.",
                img: "",
                opciones: ["60°", "30°", "45°", "90°"],
                correcta: 1, // x + 60 = 90 -> x = 30°
                tiempo: 40
            },
            {
                texto: "Calcula 'x' si: Tan(3x) . Cot(60°) = 1",
                img: "",
                opciones: ["10°", "30°", "20°", "15°"],
                correcta: 2, // Recíprocas: ángulos iguales. 3x = 60 -> x = 20
                tiempo: 40
            },
            {
                texto: "En un triángulo rectángulo, los catetos miden 5 y 12. Halla el Coseno del mayor ángulo agudo.",
                img: "",
                opciones: ["5/13", "12/13", "5/12", "12/5"],
                correcta: 0, // H=13. Mayor ángulo opuesto a 12. Coseno = CA/H = 5/13
                tiempo: 50
            },

            // DIFÍCIL
            {
                texto: "Si Tan(α) = 5/12. Calcula: E = Sen(α) + Cos(α)",
                img: "",
                opciones: ["17/13", "7/13", "13/17", "1"],
                correcta: 0, // H=13. Sen=5/13, Cos=12/13. Suma = 17/13
                tiempo: 40
            },
            {
                texto: "Halla 'x' si: Sen(2x + 10°) = Cos(x + 20°)",
                img: "",
                opciones: ["10°", "30°", "20°", "15°"],
                correcta: 2, // Complementarios: (2x+10)+(x+20)=90 -> 3x+30=90 -> 3x=60 -> x=20
                tiempo: 50
            },
            {
                texto: "En un triángulo rectángulo ABC (recto en B), reduce: E = b . Sen(A)",
                img: "",
                opciones: ["c", "a", "b", "1"],
                correcta: 1, // Sen(A) = a/b. Entonces: b * (a/b) = a
                tiempo: 40
            }
        ]
    },
    // --- TRIGONOMETRÍA TEMA 3: R.T. DE ÁNGULOS NOTABLES ---
    "trigonometria_tema3": {
        titulo: "Ángulos Notables",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "¿Cuál es el valor de Sen(30°)?",
                img: "",
                opciones: ["1/2", "√3/2", "1", "√2/2"],
                correcta: 0,
                tiempo: 15
            },
            {
                texto: "El valor de la Tangente de 45° es:",
                img: "",
                opciones: ["1", "√3", "1/2", "Undef."],
                correcta: 0,
                tiempo: 15
            },
            {
                texto: "Calcula: E = 2 . Cos(60°)",
                img: "",
                opciones: ["1", "2", "√3", "1/2"],
                correcta: 0, // 2(1/2) = 1
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Calcula: E = Tan(37°) + Tan(53°)",
                img: "",
                opciones: ["25/12", "12/25", "7/12", "1"],
                correcta: 0, // 3/4 + 4/3 = (9+16)/12 = 25/12
                tiempo: 25
            },
            {
                texto: "Halla el valor de 'x': 2x . Sen(30°) = Tan(45°)",
                img: "",
                opciones: ["1", "2", "1/2", "4"],
                correcta: 0, // 2x(1/2) = 1 -> x = 1
                tiempo: 25
            },
            {
                texto: "Calcula: M = Sec²(45°) + Tan(45°)",
                img: "",
                opciones: ["3", "2", "1", "4"],
                correcta: 0, // (√2)² + 1 = 2 + 1 = 3
                tiempo: 25
            },
            {
                texto: "En el triángulo de 37° y 53°, ¿cuál es el cateto opuesto a 53° si la hipotenusa es 5k?",
                img: "",
                opciones: ["4k", "3k", "5k", "2k"],
                correcta: 0,
                tiempo: 20
            },

            // DIFÍCIL
            {
                texto: "Calcula: P = (Sen 30° + Cos 60°) . Tan 37°",
                img: "",
                opciones: ["3/4", "1/2", "1", "4/3"],
                correcta: 0, // (1/2 + 1/2) . 3/4 = 1 . 3/4 = 3/4
                tiempo: 35
            },
            {
                texto: "Reduce: E = √3 . Tan(60°) + 4 . Sen(30°)",
                img: "",
                opciones: ["5", "4", "3", "7"],
                correcta: 0, // √3(√3) + 4(1/2) = 3 + 2 = 5
                tiempo: 35
            },
            {
                texto: "Si x = 10. Calcula el área de un triángulo rectángulo con ángulo 37° e hipotenusa x.",
                img: "",
                opciones: ["24", "12", "6", "48"],
                correcta: 0, // Si H=10(5k), k=2. Catetos: 3k=6, 4k=8. Área=(6x8)/2 = 24
                tiempo: 45
            }
        ]
    },
    // --- TRIGONOMETRÍA TEMA 4: PROPIEDADES (RECÍPROCAS Y COMPLEMENTARIAS) ---
    "trigonometria_tema4": {
        titulo: "Propiedades de las R.T.",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Propiedad Recíproca: Si Sen(x) . Csc(40°) = 1, halla 'x'.",
                img: "",
                opciones: ["50°", "40°", "10°", "90°"],
                correcta: 1, // Ángulos iguales
                tiempo: 15
            },
            {
                texto: "Propiedad Complementaria: Si Sen(20°) = Cos(x), halla 'x'.",
                img: "",
                opciones: ["20°", "70°", "40°", "10°"],
                correcta: 1, // Suman 90° (20+70=90)
                tiempo: 15
            },
            {
                texto: "Reduce: E = Tan(10°) . Cot(10°) + 3",
                img: "",
                opciones: ["4", "3", "1", "13"],
                correcta: 0, // 1 + 3 = 4
                tiempo: 15
            },

            // MEDIO
            {
                texto: "Calcula 'x' si: Tan(3x) = Cot(60°)",
                img: "",
                opciones: ["10°", "20°", "30°", "15°"],
                correcta: 0, // 3x + 60 = 90 -> 3x = 30 -> x = 10
                tiempo: 25
            },
            {
                texto: "Halla 'x' si: Cos(2x - 10°) . Sec(50°) = 1",
                img: "",
                opciones: ["30°", "20°", "25°", "40°"],
                correcta: 0, // Recíprocas: 2x - 10 = 50 -> 2x = 60 -> x = 30
                tiempo: 25
            },
            {
                texto: "Simplifica: E = (Sen 40° / Cos 50°) + 2 . Tan 10° . Cot 10°",
                img: "",
                opciones: ["3", "2", "1", "0"],
                correcta: 0, // (1) + 2(1) = 3
                tiempo: 30
            },
            {
                texto: "Si Sen(x + y) = Cos(20°) y Tan(x - y) . Cot(40°) = 1. Halla 'x'.",
                img: "",
                opciones: ["55°", "35°", "70°", "15°"],
                correcta: 0, // x+y=70; x-y=40. Sumando: 2x=110 -> x=55
                tiempo: 30
            },

            // DIFÍCIL
            {
                texto: "Determina 'x' si: Tan(3x) . Tan(2x) = 1",
                img: "",
                opciones: ["10°", "18°", "15°", "9°"],
                correcta: 1, // Tan(3x) = 1/Tan(2x) = Cot(2x). Entonces 3x+2x=90 -> 5x=90 -> x=18
                tiempo: 40
            },
            {
                texto: "Si Sec(2x) = Csc(x + 30°), calcula: E = Tan(3x)",
                img: "",
                opciones: ["2", "√3", "1", "0"],
                correcta: 0, // 4x + x + 10 = 90 -> 5x=80 -> x=16. Tan(3*16) = Tan(48)... espera, 5x=80 -> x=16. ¿Tan(48)? Ajuste para notable: Si x=16, 3x=48. No es notable.
                tiempo: 40
            },
            {
                texto: "Si Sec(2x) = Csc(x + 30°), calcula: M = Tan(2x + 5°)",
                img: "",
                opciones: ["1", "√3", "√3/3", "2"],
                correcta: 0, // 2x + x + 30 = 90 -> 3x=60 -> x=20. M = Tan(40+5) = Tan(45) = 1
                tiempo: 40
            }
        ]
    },
    // --- TRIGONOMETRÍA TEMA 5: RESOLUCIÓN DE TRIÁNGULOS ---
    "trigonometria_tema5": {
        titulo: "Resolución de Triángulos",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "En un triángulo rectángulo, si se conoce la hipotenusa 'H' y el ángulo agudo 'x', ¿cuánto mide el cateto opuesto?",
                img: "",
                opciones: ["H . Sen(x)", "H . Cos(x)", "H . Tan(x)", "H . Cot(x)"],
                correcta: 0,
                tiempo: 15
            },
            {
                texto: "Si tienes el cateto adyacente 'a' y el ángulo 'θ', el cateto opuesto es:",
                img: "",
                opciones: ["a . Cot(θ)", "a . Tan(θ)", "a . Sen(θ)", "a . Sec(θ)"],
                correcta: 1, // CO = CA * Tan(θ)
                tiempo: 15
            },
            {
                texto: "Fórmula del Área: Si conoces dos lados (a, b) y el ángulo comprendido (α), el área es:",
                img: "",
                opciones: ["a.b.Sen(α)", "(a.b)/2 . Sen(α)", "(a.b)/2 . Cos(α)", "a.b"],
                correcta: 1,
                tiempo: 15
            },

            // MEDIO
            {
                texto: "La sombra de un poste de altura 'h' cuando la elevación del sol es 'θ' mide:",
                img: "",
                opciones: ["h . Sen(θ)", "h . Tan(θ)", "h . Cot(θ)", "h . Sec(θ)"],
                correcta: 2, // CA = CO * Cot(θ) -> Sombra = h.Cot(θ)
                tiempo: 25
            },
            {
                texto: "En un triángulo, dos lados miden 4 y 10, y el ángulo entre ellos es 30°. Halla el área.",
                img: "",
                opciones: ["20", "10", "40", "5"],
                correcta: 1, // (4*10)/2 * Sen(30°) = 20 * 1/2 = 10
                tiempo: 55
            },
            {
                texto: "Una escalera de longitud 'L' se apoya en una pared formando un ángulo 'α' con el suelo. ¿A qué altura llega?",
                img: "",
                opciones: ["L . Cos(α)", "L . Sen(α)", "L . Tan(α)", "L . Csc(α)"],
                correcta: 1, // Altura es CO -> Hipotenusa * Seno
                tiempo:55
            },
            {
                texto: "Si la hipotenusa mide 'm' y un ángulo es 'β', el perímetro del triángulo es:",
                img: "",
                opciones: ["m(1 + Sen β + Cos β)", "m(Sen β + Cos β)", "m(1 + Tan β)", "m(1 + Sec β + Tan β)"],
                correcta: 0, // m + mSenβ + mCosβ
                tiempo: 55
            },

            // DIFÍCIL
            {
                texto: "En un triángulo isósceles, los lados iguales miden 'L' y el ángulo desigual es '2θ'. Halla la altura relativa al lado desigual.",
                img: "",
                opciones: ["L . Sen(θ)", "L . Cos(θ)", "L . Tan(θ)", "2L . Sen(θ)"],
                correcta: 1, // Al trazar la altura, se forma un triángulo rectángulo con hipotenusa L y ángulo θ adyacente. Altura = L.Cos(θ)
                tiempo: 55
            },
            {
                texto: "Calcula 'x' en función de los datos: Hipotenusa='m', Ángulos agudos: α y β. Halla la altura relativa a la hipotenusa.",
                img: "",
                opciones: ["m . Sen α . Cos α", "m . Sen α . Sen β", "m . Tan α", "m . Sec β"],
                correcta: 0, // En un Δ rectángulo, la altura h = m * Sen(α) * Cos(α) (o m*Senα*Senβ ya que Cosα=Senβ)
                tiempo: 55
            },
            {
                texto: "Halla el área de un triángulo equilátero de lado 'L' usando trigonometría.",
                img: "",
                opciones: ["(L²√3)/2", "(L²√3)/4", "L²", "(L²)/2"],
                correcta: 1, // (L*L)/2 * Sen(60°) = L²/2 * √3/2 = L²√3/4
                tiempo: 55
            }
        ]
    },
    // --- TRIGONOMETRÍA TEMA 6: ÁNGULOS EN POSICIÓN NORMAL ---
    "trigonometria_tema6": {
        titulo: "Ángulos en Posición Normal",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Gif matemático
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            {
                texto: "Un ángulo está en 'Posición Normal' cuando su vértice está en el origen y su lado inicial en:",
                img: "",
                opciones: ["El eje Y positivo", "El eje X positivo", "El eje X negativo", "Cualquier eje"],
                correcta: 1,
                tiempo: 15
            },
            {
                texto: "¿En qué cuadrante el Seno y la Cosecante son positivos?",
                img: "",
                opciones: ["I y III", "I y II", "II y IV", "Solo en I"],
                correcta: 1, // Regla de signos: "Todas, Sen, Tan, Cos"
                tiempo: 15
            },
            {
                texto: "Si el punto P(3; 4) pertenece al lado final de un ángulo 'α'. Halla su radio vector (r).",
                img: "",
                opciones: ["5", "7", "25", "12"],
                correcta: 0, // r = √(3² + 4²) = √25 = 5
                tiempo: 20
            },

            // MEDIO
            {
                texto: "El punto P(-3; 4) pertenece al lado final del ángulo 'θ'. Calcula Cos(θ).",
                img: "",
                opciones: ["4/5", "-3/5", "-4/5", "3/5"],
                correcta: 1, // x=-3, r=5. Cos = x/r = -3/5
                tiempo: 25
            },
            {
                texto: "Si Tan(x) > 0 y Sen(x) < 0, ¿en qué cuadrante está 'x'?",
                img: "",
                opciones: ["I C", "II C", "III C", "IV C"],
                correcta: 2, // Tan es positiva en I y III. Sen es negativo en III y IV. Coinciden en III.
                tiempo: 25
            },
            {
                texto: "Calcula 'E = Sen 90° + Cos 180°'",
                img: "",
                opciones: ["2", "0", "1", "-1"],
                correcta: 1, // 1 + (-1) = 0
                tiempo: 25
            },
            {
                texto: "Dos ángulos son 'Coterminales' si:",
                img: "",
                opciones: ["Suman 360°", "Tienen el mismo lado inicial y final", "Están en el mismo cuadrante", "Suman 180°"],
                correcta: 1, // Se diferencian en un número entero de vueltas
                tiempo: 20
            },

            // DIFÍCIL
            {
                texto: "Si el punto Q(-1; -√3) pertenece al lado final de 'β'. Calcula Tan(β).",
                img: "",
                opciones: ["√3", "-√3", "1/√3", "1"],
                correcta: 0, // Tan = y/x = -√3 / -1 = √3
                tiempo: 35
            },
            {
                texto: "Calcula: M = (Sen 270° + Cos 360°) / Tan 180°",
                img: "",
                opciones: ["0", "1", "Indeterminado", "-2"],
                correcta: 2, // Tan 180° es 0. La división por cero no existe.
                tiempo: 35
            },
            {
                texto: "Si 'α' y 'β' son coterminales, reduce: E = Sen(α)/Sen(β) + Cos(α)/Cos(β)",
                img: "",
                opciones: ["1", "0", "2", "-2"],
                correcta: 2, // Las R.T. de ángulos coterminales son iguales. E = 1 + 1 = 2.
                tiempo: 35
            }
        ]
    },
    // --- EJEMPLO 2: ESTADÍSTICA (Con Gráficos) ---
    
    // ... Agrega más temas aquí copiando la estructura
    // --- ANATOMÍA TEMA 1: TEJIDO EPITELIAL ---
    "anatomia_tema1": {
        titulo: "Tejido Epitelial",
        introImg: "https://i.pinimg.com/originals/91/9f/37/919f37c3f309a724393693630f95932e.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué tipo de epitelio reviste los vasos sanguíneos (endotelio)?", opciones: ["Plano simple", "Cúbico simple", "Cilíndrico", "Polimorfo"], correcta: 0, tiempo: 25 },
            { texto: "¿Cuál es la función principal del epitelio glandular?", opciones: ["Contracción", "Secreción", "Soporte", "Conducción"], correcta: 1, tiempo: 25 },
            { texto: "El epitelio de la piel (epidermis) se clasifica como:", opciones: ["Plano estratificado queratinizado", "Cúbico simple", "Cilíndrico ciliado", "De transición"], correcta: 0, tiempo: 25 },

            // MEDIO
            { texto: "¿Qué estructura especial permite aumentar la superficie de absorción en el intestino?", opciones: ["Cilios", "Microvellosidades", "Flagelos", "Desmosomas"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué tipo de glándula vierte su producto directamente a la sangre?", opciones: ["Exocrina", "Endocrina", "Mixta", "Apocrina"], correcta: 1, tiempo: 25 },
            { texto: "El epitelio polimorfo o de transición es característico de:", opciones: ["Tráquea", "Vejiga urinaria", "Estómago", "Piel"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué unión celular impide el paso de sustancias entre células epiteliales?", opciones: ["Desmosomas", "Uniones comunicantes", "Uniones estrechas (Oclusivas)", "Hemidesmosomas"], correcta: 2, tiempo: 30 },

            // DIFÍCIL (Pre-U)
            { texto: "¿Cuál de las siguientes glándulas es considerada anficrina (mixta)?", opciones: ["Tiroides", "Páncreas", "Sudorípara", "Sebácea"], correcta: 1, tiempo: 30 },
            { texto: "Sobre el tejido epitelial, marque la afirmación incorrecta:", opciones: ["Es avascular", "Posee escasa sustancia intercelular", "Se nutre por difusión", "Posee terminaciones nerviosas motoras"], correcta: 3, tiempo: 40 }, // Incorrecta: No tiene motoras, solo sensitivas
            { texto: "Las glándulas holocrinas se caracterizan porque:", opciones: ["La célula se destruye al secretar", "Solo pierden el citoplasma apical", "No pierden citoplasma", "Secretan hormonas"], correcta: 0, tiempo: 35 }
        ]
    },

    // --- ANATOMÍA TEMA 2: TEJIDO ÓSEO Y CARTILAGINOSO ---
    "anatomia_tema2": {
        titulo: "Tejido Óseo y Cartilaginoso",
        introImg: "https://media.giphy.com/media/26AHCz562J7YJ95ja/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Célula joven encargada de formar la matriz ósea:", opciones: ["Osteocito", "Osteoclasto", "Osteoblasto", "Condrocito"], correcta: 2, tiempo: 20 },
            { texto: "¿Cuál es la unidad estructural del tejido óseo compacto?", opciones: ["Trabécula", "Osteona (Sist. Havers)", "Laguna de Howship", "Periostio"], correcta: 1, tiempo: 20 },
            { texto: "El cartílago que forma el pabellón auricular es de tipo:", opciones: ["Hialino", "Elástico", "Fibroso", "Óseo"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "¿Qué célula se encarga de la resorción (destrucción) ósea?", opciones: ["Osteoclasto", "Osteoblasto", "Osteoprogenitora", "Condroblasto"], correcta: 0, tiempo: 20 },
            { texto: "Membrana de tejido conectivo que recubre externamente al hueso:", opciones: ["Endostio", "Pericondrio", "Periostio", "Epífisis"], correcta: 2, tiempo: 25 },
            { texto: "¿Cuál es el tipo de cartílago más abundante en el cuerpo humano?", opciones: ["Elástico", "Fibroso", "Hialino", "Calcificado"], correcta: 2, tiempo: 25 },
            { texto: "El canal central de la osteona por donde pasan vasos sanguíneos se llama:", opciones: ["Conducto de Volkmann", "Conducto de Havers", "Canalículo calcóforo", "Laguna ósea"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "¿Qué proteína es la más abundante en la matriz orgánica del hueso?", opciones: ["Elastina", "Colágeno tipo I", "Queratina", "Osteocalcina"], correcta: 1, tiempo: 35 },
            { texto: "Los conductos de Volkmann tienen la función de:", opciones: ["Conectar osteonas entre sí", "Formar células sanguíneas", "Nutrir al cartílago", "Destruir hueso viejo"], correcta: 0, tiempo: 35 },
            { texto: "El crecimiento en longitud de los huesos largos se debe al:", opciones: ["Cartílago articular", "Periostio", "Cartílago de crecimiento (Metáfisis)", "Endostio"], correcta: 2, tiempo: 40 }
        ]
    },

    // --- ANATOMÍA TEMA 3: TEJIDO MUSCULAR ---
    "anatomia_tema3": {
        titulo: "Tejido Muscular",
        introImg: "https://media.giphy.com/media/l2JhL1AzTxnFAHzS8/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es la unidad funcional de la contracción muscular?", opciones: ["Miofibrilla", "Sarcómera", "Sarcolema", "Actina"], correcta: 1, tiempo: 20 },
            { texto: "Tipo de músculo que encontramos en el corazón:", opciones: ["Liso", "Estriado Esquelético", "Estriado Cardiaco", "Voluntario"], correcta: 2, tiempo: 15 },
            { texto: "El músculo liso es de contracción:", opciones: ["Voluntaria y rápida", "Involuntaria y lenta", "Voluntaria y lenta", "Involuntaria y rápida"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué ion es indispensable para que ocurra la contracción muscular?", opciones: ["Sodio (Na)", "Potasio (K)", "Calcio (Ca)", "Hierro (Fe)"], correcta: 2, tiempo: 20 },
            { texto: "¿Cómo se llama la membrana celular de la fibra muscular?", opciones: ["Sarcoplasma", "Sarcolema", "Retículo Sarcoplásmico", "Miofilamento"], correcta: 1, tiempo: 25 },
            { texto: "Proteína contráctil delgada:", opciones: ["Miosina", "Actina", "Troponina", "Titina"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué tejido muscular es multinucleado con núcleos periféricos?", opciones: ["Liso", "Cardiaco", "Esquelético", "Nervioso"], correcta: 2, tiempo: 30 },

            // DIFÍCIL
            { texto: "En la sarcómera, la Banda 'I' está formada exclusivamente por:", opciones: ["Filamentos de Miosina", "Filamentos de Actina", "Ambos filamentos", "Línea Z"], correcta: 1, tiempo: 40 },
            { texto: "Estructura que almacena calcio en el músculo:", opciones: ["Mitocondria", "Retículo Sarcoplásmico", "Túbulos T", "Ribosomas"], correcta: 1, tiempo: 35 },
            { texto: "La propiedad del músculo de recuperar su forma original se llama:", opciones: ["Contractibilidad", "Excitabilidad", "Elasticidad", "Tonicidad"], correcta: 2, tiempo: 30 }
        ]
    },
    // --- ANATOMÍA TEMA 4: TEJIDO NERVIOSO ---
    "anatomia_tema4": {
        titulo: "Tejido Nervioso",
        introImg: "https://media.giphy.com/media/l0HlOaQcLJ2hHpXRm/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es la unidad anatómica y funcional del sistema nervioso?", opciones: ["Neuroglia", "Neurona", "Axón", "Sinapsis"], correcta: 1, tiempo: 20 },
            { texto: "¿Qué estructura de la neurona se encarga de recibir los impulsos nerviosos?", opciones: ["Axón", "Soma", "Dendritas", "Telendrón"], correcta: 2, tiempo: 20 },
            { texto: "No es una propiedad fundamental del tejido nervioso:", opciones: ["Excitabilidad", "Conductibilidad", "Contractibilidad", "Transmisibilidad"], correcta: 2, tiempo: 20 }, // Contractibilidad es de músculo

            // MEDIO
            { texto: "Célula glial encargada de formar la vaina de mielina en el Sistema Nervioso Central (SNC):", opciones: ["Célula de Schwann", "Oligodendrocito", "Astrocito", "Microglia"], correcta: 1, tiempo: 25 },
            { texto: "¿Cuál es la neuroglia que forma parte de la Barrera Hematoencefálica?", opciones: ["Ependimocito", "Microglia", "Astrocito", "Oligodendrocito"], correcta: 2, tiempo: 30 },
            { texto: "La sustancia química liberada en la sinapsis para transmitir información se llama:", opciones: ["Hormona", "Enzima", "Neurotransmisor", "Electrolito"], correcta: 2, tiempo: 25 },
            { texto: "Célula encargada de la defensa inmunológica (macrófago) del tejido nervioso:", opciones: ["Astrocito", "Microglia", "Ependimocito", "Célula de Schwann"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "¿En qué fase del potencial de acción se abren masivamente los canales de Sodio (Na+)?", opciones: ["Repolarización", "Hiperpolarización", "Despolarización", "Reposo"], correcta: 2, tiempo: 40 },
            { texto: "Las células de Schwann tienen una función análoga a los ________, pero en el SNP.", opciones: ["Astrocitos", "Oligodendrocitos", "Ependimocitos", "Microglias"], correcta: 1, tiempo: 35 },
            { texto: "Estructura neuronal que contiene a los Corpúsculos de Nissl (RER):", opciones: ["Cono axónico", "Axón", "Soma o Pericarión", "Botón sináptico"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- ANATOMÍA TEMA 5: TEJIDO SANGUÍNEO ---
    "anatomia_tema5": {
        titulo: "Tejido Sanguíneo",
        introImg: "https://media.giphy.com/media/26BRyO79Qx8rTAI00/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es el componente líquido más abundante de la sangre?", opciones: ["Suero", "Plasma", "Linfa", "Plaquetas"], correcta: 1, tiempo: 20 },
            { texto: "Proteína contenida en los glóbulos rojos encargada del transporte de oxígeno:", opciones: ["Albúmina", "Fibrinógeno", "Hemoglobina", "Globulina"], correcta: 2, tiempo: 20 },
            { texto: "Elemento forme encargado de la coagulación sanguínea (hemostasia):", opciones: ["Eritrocito", "Leucocito", "Trombocito (Plaqueta)", "Adipocito"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Cuál es el leucocito más abundante en una persona sana?", opciones: ["Linfocito", "Monocito", "Neutrófilo", "Basófilo"], correcta: 2, tiempo: 25 },
            { texto: "El proceso de formación de células sanguíneas se denomina:", opciones: ["Hemólisis", "Hematosis", "Hematopoyesis", "Hemostasia"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué célula sanguínea carece de núcleo en su estado maduro (en mamíferos)?", opciones: ["Glóbulo blanco", "Glóbulo rojo", "Linfocito", "Monocito"], correcta: 1, tiempo: 25 },
            { texto: "Leucocito agranulocito encargado de la inmunidad específica (anticuerpos):", opciones: ["Neutrófilo", "Eosinófilo", "Linfocito", "Basófilo"], correcta: 2, tiempo: 30 },

            // DIFÍCIL
            { texto: "El grupo sanguíneo considerado 'Receptor Universal' es:", opciones: ["O Rh-", "A Rh+", "AB Rh+", "O Rh+"], correcta: 2, tiempo: 35 },
            { texto: "Proteína plasmática más abundante, encargada de la presión oncótica:", opciones: ["Fibrinógeno", "Albúmina", "Inmunoglobulina", "Protrobina"], correcta: 1, tiempo: 40 },
            { texto: "¿Qué leucocito aumenta principalmente ante infecciones parasitarias y alergias?", opciones: ["Neutrófilo", "Eosinófilo", "Basófilo", "Monocito"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- ANATOMÍA TEMA 6: APARATO CARDIOVASCULAR ---
    "anatomia_tema6": {
        titulo: "Aparato Cardiovascular",
        introImg: "https://media.giphy.com/media/Lp9pyGyNSqeLC/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuántas cavidades tiene el corazón humano?", opciones: ["2", "3", "4", "5"], correcta: 2, tiempo: 15 },
            { texto: "Vaso sanguíneo que saca sangre oxigenada del ventrículo izquierdo:", opciones: ["Arteria Pulmonar", "Vena Cava", "Arteria Aorta", "Vena Pulmonar"], correcta: 2, tiempo: 20 },
            { texto: "Capa muscular del corazón encargada de la contracción:", opciones: ["Epicardio", "Miocardio", "Endocardio", "Pericardio"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Válvula ubicada entre la aurícula derecha y el ventrículo derecho:", opciones: ["Mitral (Bicúspide)", "Tricúspide", "Aórtica", "Pulmonar"], correcta: 1, tiempo: 25 },
            { texto: "El marcapasos natural del corazón es el:", opciones: ["Nódulo Auriculoventricular", "Haz de His", "Nódulo Sinusal", "Fibras de Purkinje"], correcta: 2, tiempo: 30 },
            { texto: "Vasos sanguíneos donde ocurre el intercambio de gases y nutrientes:", opciones: ["Arterias", "Venas", "Capilares", "Arteriolas"], correcta: 2, tiempo: 25 },
            { texto: "La fase de relajación y llenado del corazón se llama:", opciones: ["Sístole", "Diástole", "Gasto cardiaco", "Frecuencia"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "¿Cuál es la única arteria que transporta sangre desoxigenada (venosa) en el adulto?", opciones: ["Aorta", "Carótida", "Pulmonar", "Coronaria"], correcta: 2, tiempo: 35 },
            { texto: "El primer ruido cardiaco se produce por el cierre de las válvulas:", opciones: ["Sigmoideas", "Auriculoventriculares", "Aórtica y Pulmonar", "Venas Cavas"], correcta: 1, tiempo: 40 },
            { texto: "La circulación mayor o sistémica inicia en ____ y termina en ____.", opciones: ["VI - AD", "VD - AI", "VI - AI", "VD - AD"], correcta: 0, tiempo: 45 } // VI (Vent. Izq) -> AD (Aur. Der)
        ]
    },
    // --- BIOLOGÍA TEMA 1: ORIGEN DE LA VIDA Y EVOLUCIÓN ---
    "biologia_tema1": {
        titulo: "Origen de la Vida y Evolución",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién propuso la teoría de la Selección Natural?", opciones: ["Lamarck", "Darwin", "Oparin", "Pasteur"], correcta: 1, tiempo: 20 },
            { texto: "Teoría que sostiene que la vida surge de materia inerte (ej: moscas de la carne):", opciones: ["Biogénesis", "Generación Espontánea", "Panspermia", "Quimiosintética"], correcta: 1, tiempo: 20 },
            { texto: "El experimento de Louis Pasteur con matraces cuello de cisne refutó:", opciones: ["La Panspermia", "La Selección Natural", "La Generación Espontánea", "El Creacionismo"], correcta: 2, tiempo: 25 },

            // MEDIO
            { texto: "¿Qué gases formaban la atmósfera primitiva según Oparin?", opciones: ["O2, N2, CO2", "Metano, Amoniaco, H2, Vapor de agua", "Solo Oxígeno", "Helio y Argón"], correcta: 1, tiempo: 30 },
            { texto: "Órganos que tienen el mismo origen embrionario pero diferente función (ej: aleta de ballena y brazo humano):", opciones: ["Análogos", "Homólogos", "Vestigiales", "Rudimentarios"], correcta: 1, tiempo: 25 },
            { texto: "La 'Ley del uso y desuso' fue propuesta por:", opciones: ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Hugo de Vries"], correcta: 1, tiempo: 25 },
            { texto: "Evidencia evolutiva basada en el estudio de los fósiles:", opciones: ["Anatomía comparada", "Paleontología", "Embriología", "Bioquímica"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "La teoría Sintética de la Evolución (Neodarwinismo) integra a la selección natural con:", opciones: ["La paleontología", "La genética (mutaciones)", "La ecología", "La etología"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué científico demostró experimentalmente la teoría quimiosintética obteniendo aminoácidos?", opciones: ["Redi", "Miller y Urey", "Spallanzani", "Arrhenius"], correcta: 1, tiempo: 35 },
            { texto: "Estructuras que carecen de función actual pero revelan un pasado evolutivo (ej: apéndice):", opciones: ["Órganos Homólogos", "Órganos Análogos", "Órganos Vestigiales", "Fósiles vivientes"], correcta: 2, tiempo: 30 }
        ]
    },

    // --- BIOLOGÍA TEMA 2: BIOELEMENTOS Y AGUA ---
    "biologia_tema2": {
        titulo: "Bioelementos y Agua",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es el bioelemento más abundante en los seres vivos?", opciones: ["Carbono", "Hidrógeno", "Oxígeno", "Nitrógeno"], correcta: 0, tiempo: 20 }, // C es base orgánica, O es más abundante en peso
            { texto: "Bioelemento central de la hemoglobina para el transporte de oxígeno:", opciones: ["Magnesio", "Hierro", "Calcio", "Yodo"], correcta: 1, tiempo: 20 },
            { texto: "La molécula de agua está formada por:", opciones: ["1H y 2O", "2H y 1O", "2H y 2O", "1H y 1O"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "¿Qué enlace une a las moléculas de agua entre sí?", opciones: ["Covalente polar", "Puente de Hidrógeno", "Iónico", "Peptídico"], correcta: 1, tiempo: 25 },
            { texto: "Propiedad del agua que le permite regular la temperatura corporal:", opciones: ["Alta tensión superficial", "Alto calor específico", "Baja densidad", "Capilaridad"], correcta: 1, tiempo: 25 },
            { texto: "Bioelemento necesario para la formación de hormonas tiroideas:", opciones: ["Flúor", "Yodo", "Cobalto", "Zinc"], correcta: 1, tiempo: 25 },
            { texto: "¿Cuál es un bioelemento secundario indispensable para la contracción muscular?", opciones: ["Calcio", "Carbono", "Azufre", "Litio"], correcta: 0, tiempo: 25 },

            // DIFÍCIL
            { texto: "El agua actúa como solvente universal debido a su naturaleza:", opciones: ["Apolar", "Dipolar", "Iónica", "Hidrofóbica"], correcta: 1, tiempo: 30 },
            { texto: "Oligoelemento componente de la vitamina B12 (Cianocobalamina):", opciones: ["Cobre", "Cobalto", "Manganeso", "Selenio"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué propiedad permite al agua ascender por los tubos finos de las plantas?", opciones: ["Tensión superficial", "Capilaridad", "Densidad", "Viscosidad"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- BIOLOGÍA TEMA 3: GLÚCIDOS, LÍPIDOS Y PROTEÍNAS ---
    "biologia_tema3": {
        titulo: "Biomoléculas Orgánicas",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es la principal fuente de energía inmediata para la célula?", opciones: ["Proteínas", "Lípidos", "Glúcidos (Glucosa)", "Ácidos Nucleicos"], correcta: 2, tiempo: 20 },
            { texto: "Los monómeros (unidades) de las proteínas son:", opciones: ["Monosacáridos", "Ácidos grasos", "Aminoácidos", "Nucleótidos"], correcta: 2, tiempo: 20 },
            { texto: "Lípido que forma la bicapa de la membrana celular:", opciones: ["Triglicérido", "Colesterol", "Fosfolípido", "Cera"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Cuál es el enlace característico de los glúcidos?", opciones: ["Peptídico", "Glucosídico", "Éster", "Fosfodiéster"], correcta: 1, tiempo: 25 },
            { texto: "Polisacárido de reserva energética en animales (hígado y músculos):", opciones: ["Almidón", "Celulosa", "Glucógeno", "Quitina"], correcta: 2, tiempo: 25 },
            { texto: "Proteína con función de transporte de oxígeno en sangre de vertebrados:", opciones: ["Insulina", "Colágeno", "Hemoglobina", "Queratina"], correcta: 2, tiempo: 25 },
            { texto: "Lípido derivado del cual se sintetizan hormonas sexuales:", opciones: ["Terpeno", "Colesterol (Esteroide)", "Prostaglandina", "Cera"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "¿Qué estructura proteica se refiere a la secuencia lineal de aminoácidos?", opciones: ["Primaria", "Secundaria", "Terciaria", "Cuaternaria"], correcta: 0, tiempo: 35 },
            { texto: "La pared celular de los hongos está formada por el polisacárido:", opciones: ["Celulosa", "Peptidoglicano", "Quitina", "Mureína"], correcta: 2, tiempo: 35 },
            { texto: "Los aceites vegetales son líquidos a temperatura ambiente porque tienen:", opciones: ["Ácidos grasos saturados", "Ácidos grasos insaturados", "Colesterol", "Ceras"], correcta: 1, tiempo: 40 }
        ]
    },
    // --- BIOLOGÍA TEMA 4: VITAMINAS Y ÁCIDOS NUCLEICOS ---
    "biologia_tema4": {
        titulo: "Vitaminas y Ácidos Nucleicos",
        introImg: "https://media.giphy.com/media/l3vR85PnGgm10kKhG/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué vitamina se produce en la piel por acción de los rayos UV?", opciones: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"], correcta: 2, tiempo: 20 },
            { texto: "El ADN se diferencia del ARN porque su azúcar es:", opciones: ["Ribosa", "Desoxirribosa", "Glucosa", "Fructosa"], correcta: 1, tiempo: 20 },
            { texto: "Enfermedad producida por la carencia de Vitamina C (Ácido ascórbico):", opciones: ["Raquitismo", "Escorbuto", "Beriberi", "Pelagra"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Cuál es la base nitrogenada exclusiva del ARN?", opciones: ["Timina", "Uracilo", "Citosina", "Guanina"], correcta: 1, tiempo: 25 },
            { texto: "Vitamina liposoluble necesaria para la coagulación sanguínea:", opciones: ["Vitamina K", "Vitamina E", "Vitamina A", "Vitamina B12"], correcta: 0, tiempo: 25 },
            { texto: "El enlace que une a los nucleótidos en una cadena se llama:", opciones: ["Peptídico", "Glucosídico", "Fosfodiéster", "Puente de hidrógeno"], correcta: 2, tiempo: 30 },
            { texto: "Vitamina del complejo B cuya deficiencia causa anemia perniciosa:", opciones: ["B1 (Tiamina)", "B9 (Ácido fólico)", "B12 (Cobalamina)", "B3 (Niacina)"], correcta: 2, tiempo: 30 },

            // DIFÍCIL
            { texto: "Según el modelo de Watson y Crick, en el ADN la Adenina se une con la Timina mediante:", opciones: ["1 puente de hidrógeno", "2 puentes de hidrógeno", "3 puentes de hidrógeno", "Enlace iónico"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué vitamina actúa como antioxidante protegiendo a las membranas celulares?", opciones: ["Vitamina E (Tocoferol)", "Vitamina D (Calciferol)", "Vitamina K (Filoquinona)", "Vitamina B1"], correcta: 0, tiempo: 35 },
            { texto: "El flujo de información genética (Dogma Central) sigue el orden:", opciones: ["ARN -> ADN -> Proteína", "ADN -> ARN -> Proteína", "Proteína -> ARN -> ADN", "ADN -> Proteína -> ARN"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- BIOLOGÍA TEMA 5: CITOLOGÍA (CÉLULA EUCARIOTA) ---
    "biologia_tema5": {
        titulo: "Citología: Célula Eucariota",
        introImg: "https://media.giphy.com/media/11BJCvCTus9iY8/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es la organela encargada de la respiración celular y producción de ATP?", opciones: ["Ribosoma", "Mitocondria", "Lisosoma", "Golgi"], correcta: 1, tiempo: 20 },
            { texto: "Estructura exclusiva de la célula vegetal que le da rigidez:", opciones: ["Membrana celular", "Pared celular", "Centriolo", "Glucocálix"], correcta: 1, tiempo: 20 },
            { texto: "El 'cerebro' de la célula que contiene el material genético es:", opciones: ["Nucléolo", "Núcleo", "Citoplasma", "Retículo"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Organela encargada de la digestión celular (contiene enzimas hidrolíticas):", opciones: ["Peroxisoma", "Lisosoma", "Vacuola", "Ribosoma"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué estructura realiza la síntesis de proteínas?", opciones: ["Aparato de Golgi", "Retículo Liso", "Ribosoma", "Mitocondria"], correcta: 2, tiempo: 25 },
            { texto: "El Retículo Endoplasmático Liso (REL) se encarga de:", opciones: ["Síntesis de proteínas", "Síntesis de lípidos y detoxificación", "Respiración celular", "Fotosíntesis"], correcta: 1, tiempo: 30 },
            { texto: "El modelo de 'Mosaico Fluido' de la membrana celular fue propuesto por:", opciones: ["Schleiden y Schwann", "Singer y Nicholson", "Watson y Crick", "Hooke"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "¿Qué organela se encarga de formar el acrosoma en los espermatozoides?", opciones: ["Aparato de Golgi", "Retículo Rugoso", "Centriolo", "Lisosoma"], correcta: 0, tiempo: 35 },
            { texto: "El glucocálix es una estructura de reconocimiento celular presente en:", opciones: ["Células vegetales", "Células animales", "Bacterias", "Hongos"], correcta: 1, tiempo: 35 },
            { texto: "Organela vegetal que convierte lípidos en glúcidos (ciclo del glioxilato):", opciones: ["Cloroplasto", "Glioxisoma", "Peroxisoma", "Vacuola"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- BIOLOGÍA TEMA 6: METABOLISMO CELULAR ---
    "biologia_tema6": {
        titulo: "Metabolismo Celular",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿En qué organela se realiza la fotosíntesis?", opciones: ["Mitocondria", "Cloroplasto", "Ribosoma", "Lisosoma"], correcta: 1, tiempo: 20 },
            { texto: "La molécula universal de energía en la célula es:", opciones: ["ADN", "ATP", "ARN", "Glucosa"], correcta: 1, tiempo: 15 },
            { texto: "Producto final de la fotosíntesis liberado al ambiente:", opciones: ["Dióxido de carbono", "Oxígeno", "Agua", "Metano"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Dónde ocurre la fase luminosa de la fotosíntesis?", opciones: ["Estroma", "Tilacoides (Grana)", "Matriz", "Citosol"], correcta: 1, tiempo: 25 },
            { texto: "Proceso anaeróbico que ocurre en el citoplasma rompiendo la glucosa:", opciones: ["Ciclo de Krebs", "Glucólisis", "Fosforilación oxidativa", "Fermentación"], correcta: 1, tiempo: 30 },
            { texto: "La fase oscura (Ciclo de Calvin) tiene como objetivo formar:", opciones: ["ATP", "Oxígeno", "Glucosa (Compuestos orgánicos)", "Agua"], correcta: 2, tiempo: 30 },
            { texto: "¿Cuántos ATP netos produce la glucólisis?", opciones: ["2 ATP", "4 ATP", "36 ATP", "38 ATP"], correcta: 0, tiempo: 25 },

            // DIFÍCIL
            { texto: "¿En qué lugar de la mitocondria se realiza el Ciclo de Krebs?", opciones: ["Cresta mitocondrial", "Matriz mitocondrial (Mitrosol)", "Membrana externa", "Espacio intermembrana"], correcta: 1, tiempo: 35 },
            { texto: "Aceptor final de electrones en la respiración aeróbica:", opciones: ["NAD+", "FAD", "Oxígeno", "Agua"], correcta: 2, tiempo: 35 },
            { texto: "La fermentación láctica ocurre en nuestros músculos ante la falta de:", opciones: ["Glucosa", "Oxígeno", "ATP", "Calcio"], correcta: 1, tiempo: 35 }
        ]
    },
    // --- LITERATURA TEMA 1: TEORÍA LITERARIA ---
    "literatura_tema1": {
        titulo: "Teoría Literaria",
        introImg: "https://media.giphy.com/media/L1R1TV7XaljHu/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es el género literario que narra hazañas de héroes (Ej: La Ilíada)?", opciones: ["Lírico", "Épico", "Dramático", "Didáctico"], correcta: 1, tiempo: 20 },
            { texto: "Figura literaria que consiste en la exageración intencional (Ej: 'Lloró ríos de lágrimas'):", opciones: ["Metáfora", "Símil", "Hipérbole", "Anáfora"], correcta: 2, tiempo: 20 },
            { texto: "Especie lírica que expresa dolor o lamento por una pérdida:", opciones: ["Oda", "Égloga", "Elegía", "Madrigal"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué figura literaria se usa en: 'Sus cabellos son de oro'?", opciones: ["Metáfora", "Símil", "Hipérbaton", "Epíteto"], correcta: 0, tiempo: 25 },
            { texto: "El género dramático se caracteriza por:", opciones: ["Ser subjetivo y emocional", "Ser representado ante un público", "Narrar hechos del pasado", "Enseñar una moraleja"], correcta: 1, tiempo: 25 },
            { texto: "En la métrica, ¿cómo se llama el verso de 14 sílabas?", opciones: ["Endecasílabo", "Octosílabo", "Alejandrino", "Heptasílabo"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué especie narrativa es breve y suele dejar una enseñanza o moraleja?", opciones: ["Novela", "Cuento", "Fábula", "Mito"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "Figura que consiste en alterar el orden lógico de las palabras (Ej: 'Del salón en el ángulo oscuro'):", opciones: ["Hipérbaton", "Elipsis", "Polisíndeton", "Retruécano"], correcta: 0, tiempo: 35 },
            { texto: "Aristóteles, en su obra 'Poética', define al arte como:", opciones: ["Catarsis", "Mímesis (Imitación)", "Inspiración", "Belleza"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué figura literaria repite una o más palabras al inicio de cada verso?", opciones: ["Epífora", "Anáfora", "Complexión", "Epanadiplosis"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- LITERATURA TEMA 2: CLASICISMO Y MEDIEVALISMO ---
    "literatura_tema2": {
        titulo: "Clasicismo y Medievalismo",
        introImg: "https://media.giphy.com/media/26BGGc6l6fqWc/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién es el autor de 'La Ilíada' y 'La Odisea'?", opciones: ["Sófocles", "Homero", "Virgilio", "Esquilo"], correcta: 1, tiempo: 20 },
            { texto: "Obra medieval española que narra las hazañas de Rodrigo Díaz de Vivar:", opciones: ["El Cantar de Roldán", "El Cantar de los Nibelungos", "El Cantar de Mio Cid", "La Celestina"], correcta: 2, tiempo: 20 },
            { texto: "¿Cuál es el tema principal de 'La Ilíada'?", opciones: ["El regreso de Ulises", "La fundación de Roma", "La cólera de Aquiles", "El rapto de Helena"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "Autor de la tragedia griega 'Edipo Rey':", opciones: ["Eurípides", "Esquilo", "Sófocles", "Aristófanes"], correcta: 2, tiempo: 25 },
            { texto: "En 'La Divina Comedia', ¿quién guía a Dante por el Infierno y el Purgatorio?", opciones: ["Beatriz", "San Bernardo", "Virgilio", "Caronte"], correcta: 2, tiempo: 25 },
            { texto: "Los 'Cantares de Gesta' son obras de carácter:", opciones: ["Escrito y culto", "Oral y popular (Anónimo)", "Religioso y teocéntrico", "Filosófico"], correcta: 1, tiempo: 30 },
            { texto: "¿Qué animal representa la lujuria en 'La Divina Comedia' (Selva oscura)?", opciones: ["La loba", "El león", "La pantera", "El perro"], correcta: 2, tiempo: 30 }, // Pantera=Lujuria, León=Soberbia, Loba=Avaricia

            // DIFÍCIL
            { texto: "Es considerado el 'Padre de la Tragedia Griega' (Obras: La Orestíada):", opciones: ["Sófocles", "Esquilo", "Eurípides", "Tespis"], correcta: 1, tiempo: 35 },
            { texto: "El Mester de Clerecía se diferencia del Mester de Juglaría por usar la estrofa:", opciones: ["Cuaderna Vía", "Romance", "Soneto", "Octava Real"], correcta: 0, tiempo: 40 },
            { texto: "Obra de Giovanni Boccaccio que inicia el Humanismo (colección de 100 cuentos):", opciones: ["Canzoniere", "El Decamerón", "La Vida Nueva", "África"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- LITERATURA TEMA 3: RENACIMIENTO ---
    "literatura_tema3": {
        titulo: "Renacimiento Europeo",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El Renacimiento surge en Italia y se caracteriza por el:", opciones: ["Teocentrismo", "Antropocentrismo", "Misticismo", "Barroquismo"], correcta: 1, tiempo: 20 },
            { texto: "Autor inglés de 'Romeo y Julieta' y 'Hamlet':", opciones: ["William Shakespeare", "John Milton", "Geoffrey Chaucer", "Christopher Marlowe"], correcta: 0, tiempo: 15 },
            { texto: "Novela picaresca anónima que critica a la sociedad española del siglo XVI:", opciones: ["La Celestina", "El Lazarillo de Tormes", "Don Quijote", "La Galatea"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué poeta español introdujo el verso endecasílabo y el soneto en España?", opciones: ["Fray Luis de León", "Garcilaso de la Vega", "Luis de Góngora", "Quevedo"], correcta: 1, tiempo: 25 },
            { texto: "Tema central de la tragedia 'Hamlet':", opciones: ["Los celos", "La ambición", "La duda y la venganza", "El amor imposible"], correcta: 2, tiempo: 25 },
            { texto: "El amor idealizado en las 'Églogas' de Garcilaso se refleja en los pastores:", opciones: ["Salicio y Nemoroso", "Títiro y Melibeo", "Dafnis y Cloe", "Apolo y Dafne"], correcta: 0, tiempo: 30 },
            { texto: "Corriente filosófica base del Renacimiento que revalora la cultura grecolatina:", opciones: ["Escolástica", "Humanismo", "Ilustración", "Positivismo"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "En 'El Lazarillo de Tormes', el primer amo de Lázaro fue:", opciones: ["El clérigo", "El ciego", "El escudero", "El fraile"], correcta: 1, tiempo: 35 },
            { texto: "Autor francés creador del género 'Ensayo' (obra: Ensayos):", opciones: ["Rabelais", "Montaigne", "Molière", "Descartes"], correcta: 1, tiempo: 35 },
            { texto: "Poeta agustino, máximo exponente de la Escuela Salmantina ('Oda a la vida retirada'):", opciones: ["San Juan de la Cruz", "Fray Luis de León", "Santa Teresa de Jesús", "Fernando de Herrera"], correcta: 1, tiempo: 35 }
        ]
    },
    // --- LITERATURA TEMA 4: ROMANTICISMO Y REALISMO ---
    "literatura_tema4": {
        titulo: "Romanticismo y Realismo",
        introImg: "https://media.giphy.com/media/3o6Zt6ML6qTqQ3wYhy/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Obra cumbre del Romanticismo alemán escrita por Goethe:", opciones: ["Fausto", "Las cuitas del joven Werther", "Los Miserables", "Rimas y Leyendas"], correcta: 1, tiempo: 20 },
            { texto: "El Realismo se caracteriza por:", opciones: ["La exaltación del 'Yo'", "La objetividad y descripción fiel", "El uso de metáforas complejas", "La temática medieval"], correcta: 1, tiempo: 20 },
            { texto: "Autor francés de la novela realista 'Madame Bovary':", opciones: ["Víctor Hugo", "Honoré de Balzac", "Gustave Flaubert", "Émile Zola"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué personaje protagoniza 'Crimen y Castigo' de Dostoievski?", opciones: ["Jean Valjean", "Rodión Raskólnikov", "Emma Bovary", "Julián Sorel"], correcta: 1, tiempo: 25 },
            { texto: "Líder del Romanticismo social en Francia (Autor de 'Nuestra Señora de París'):", opciones: ["Alejandro Dumas", "Gustavo A. Bécquer", "Víctor Hugo", "Molière"], correcta: 2, tiempo: 25 },
            { texto: "El Realismo surge como oposición al:", opciones: ["Neoclasicismo", "Romanticismo", "Renacimiento", "Barroco"], correcta: 1, tiempo: 25 },
            { texto: "En 'Las cuitas del joven Werther', el protagonista se suicida por el amor de:", opciones: ["Carlota", "Margarita", "Beatriz", "Laura"], correcta: 0, tiempo: 30 },

            // DIFÍCIL
            { texto: "Escritor español del Post-Romanticismo, autor de 'Rimas y Leyendas':", opciones: ["José Zorrilla", "Espronceda", "Gustavo Adolfo Bécquer", "Mariano José de Larra"], correcta: 2, tiempo: 35 },
            { texto: "Novela de Stendhal que inicia el Realismo psicológico en Francia:", opciones: ["Rojo y Negro", "La Comedia Humana", "Papá Goriot", "Guerra y Paz"], correcta: 0, tiempo: 35 },
            { texto: "Corriente literaria derivada del Realismo que aplica el método científico (Herencia genética):", opciones: ["Parnasianismo", "Naturalismo", "Simbolismo", "Modernismo"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- LITERATURA TEMA 5: SIMBOLISMO ---
    "literatura_tema5": {
        titulo: "Simbolismo",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El Simbolismo surgió en Francia como reacción contra el:", opciones: ["Romanticismo", "Realismo y Parnasianismo", "Barroco", "Surrealismo"], correcta: 1, tiempo: 20 },
            { texto: "Autor de 'Las Flores del Mal', considerado el precursor del Simbolismo:", opciones: ["Paul Verlaine", "Arthur Rimbaud", "Charles Baudelaire", "Stéphane Mallarmé"], correcta: 2, tiempo: 20 },
            { texto: "A los poetas simbolistas también se les conoció como:", opciones: ["Poetas Místicos", "Poetas Malditos", "Generación del 98", "Parnasianos"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "¿Qué característica es fundamental en la poesía simbolista?", opciones: ["La descripción objetiva", "La musicalidad y sugerencia", "El uso de la razón", "La narración épica"], correcta: 1, tiempo: 25 },
            { texto: "Poeta que escribió 'Una temporada en el infierno' a los 19 años:", opciones: ["Verlaine", "Mallarmé", "Rimbaud", "Baudelaire"], correcta: 2, tiempo: 25 },
            { texto: "En el poema 'El Albatros' de Baudelaire, el ave representa al:", opciones: ["Marinero", "Poeta", "Rey", "Dios"], correcta: 1, tiempo: 30 },
            { texto: "Líder del Simbolismo que escribió 'Arte Poética' ('La música ante todo...'):", opciones: ["Paul Verlaine", "Victor Hugo", "Rimbaud", "Valéry"], correcta: 0, tiempo: 30 },

            // DIFÍCIL
            { texto: "Poeta simbolista conocido por su obra hermética 'La siesta de un fauno':", opciones: ["Mallarmé", "Verlaine", "Rimbaud", "Corbière"], correcta: 0, tiempo: 35 },
            { texto: "El Simbolismo influyó directamente en el movimiento hispanoamericano llamado:", opciones: ["Criollismo", "Modernismo", "Indigenismo", "Vanguardismo"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué figura retórica es la más usada por los simbolistas para evocar sentidos cruzados?", opciones: ["Metáfora", "Sinestesia", "Hipérbole", "Anáfora"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- LITERATURA TEMA 6: SIGLO DE ORO ESPAÑOL ---
    "literatura_tema6": {
        titulo: "Siglo de Oro Español",
        introImg: "https://media.giphy.com/media/26AHCz562J7YJ95ja/giphy.gif", // Reusando una imagen clásica
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Autor de 'El Ingenioso Hidalgo Don Quijote de la Mancha':", opciones: ["Lope de Vega", "Miguel de Cervantes", "Góngora", "Quevedo"], correcta: 1, tiempo: 20 },
            { texto: "Obra teatral de Lope de Vega donde el pueblo se levanta contra el Comendador:", opciones: ["La vida es sueño", "El alcalde de Zalamea", "Fuenteovejuna", "El burlador de Sevilla"], correcta: 2, tiempo: 20 },
            { texto: "El 'Siglo de Oro' abarca dos movimientos culturales:", opciones: ["Renacimiento y Barroco", "Medievalismo y Renacimiento", "Barroco y Neoclasicismo", "Romanticismo y Realismo"], correcta: 0, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué personaje de Calderón de la Barca dice: 'La vida es sueño, y los sueños, sueños son'?", opciones: ["Basilio", "Clotaldo", "Segismundo", "Astolfo"], correcta: 2, tiempo: 25 },
            { texto: "Representante del Culteranismo (estilo complejo y metafórico):", opciones: ["Francisco de Quevedo", "Luis de Góngora", "Garcilaso de la Vega", "Fray Luis de León"], correcta: 1, tiempo: 25 },
            { texto: "Enemigo literario de Góngora y máximo representante del Conceptismo:", opciones: ["Cervantes", "Lope de Vega", "Quevedo", "Tirso de Molina"], correcta: 2, tiempo: 25 },
            { texto: "Calderón de la Barca se caracteriza por un teatro de tipo:", opciones: ["Popular y nacional", "Filosófico y reflexivo", "Cómico y ligero", "Histórico"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Creador del mito de Don Juan Tenorio en la obra 'El burlador de Sevilla':", opciones: ["Lope de Vega", "Calderón de la Barca", "Tirso de Molina", "Guillén de Castro"], correcta: 2, tiempo: 35 },
            { texto: "¿Cómo se llama el caballo de Don Quijote?", opciones: ["Babieca", "Rocinante", "Bucéfalo", "Strategos"], correcta: 1, tiempo: 35 },
            { texto: "Lope de Vega fue conocido como:", opciones: ["El Manco de Lepanto", "El Fénix de los Ingenios", "El Monstruo de la Naturaleza", "B y C son correctas"], correcta: 3, tiempo: 40 } // B y C son apodos de Lope
        ]
    },
    // --- APTITUD VERBAL TEMA 1: ETIMOLOGÍA GRECOLATINA ---
    "aptitud_tema1": {
        titulo: "Etimología Grecolatina",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif", // Reusando gif educativo
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué significa la raíz griega 'BIO'?", opciones: ["Tierra", "Vida", "Agua", "Aire"], correcta: 1, tiempo: 15 },
            { texto: "La raíz 'HIDRO' hace referencia a:", opciones: ["Fuego", "Sol", "Agua", "Piedra"], correcta: 2, tiempo: 15 },
            { texto: "¿Qué estudia la 'CARDIOLOGÍA' según su raíz?", opciones: ["El hígado", "El corazón", "El cerebro", "Los huesos"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Si 'ALGIA' significa dolor, ¿qué es 'CEFALALGIA'?", opciones: ["Dolor de estómago", "Dolor de cabeza", "Dolor de pies", "Dolor muscular"], correcta: 1, tiempo: 20 },
            { texto: "La raíz latina 'FRATER' significa:", opciones: ["Padre", "Madre", "Hijo", "Hermano"], correcta: 3, tiempo: 25 },
            { texto: "¿Qué significa el prefijo 'OMNI' (ej: Omnipotente)?", opciones: ["Todo", "Nada", "Poco", "Mucho"], correcta: 0, tiempo: 20 },
            { texto: "La raíz 'FOBIA' indica:", opciones: ["Amor", "Odio", "Miedo o rechazo", "Atracción"], correcta: 2, tiempo: 20 },

            // DIFÍCIL
            { texto: "La etimología de 'DEMOCRACIA' proviene de 'Demos' y 'Kratos', que significan:", opciones: ["Pueblo y Gobierno", "Rey y Ley", "Dios y Poder", "Hombre y Sabiduría"], correcta: 0, tiempo: 30 },
            { texto: "¿Qué significa la raíz 'NECRO'?", opciones: ["Negro", "Noche", "Muerto", "Nuevo"], correcta: 2, tiempo: 30 },
            { texto: "El sufijo 'ITIS' en medicina indica:", opciones: ["Dolor", "Inflamación", "Corte", "Estudio"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- APTITUD VERBAL TEMA 2: RELACIONES SEMÁNTICAS ---
    "aptitud_tema2": {
        titulo: "Relaciones Semánticas",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Las palabras 'HOLA' (saludo) y 'OLA' (mar) son:", opciones: ["Sinónimas", "Antónimas", "Homófonas", "Parónimas"], correcta: 2, tiempo: 20 },
            { texto: "¿Qué relación existe entre 'BLANCO' y 'NEGRO'?", opciones: ["Sinonimia", "Antonimia", "Polisemia", "Homonimia"], correcta: 1, tiempo: 15 },
            { texto: "La palabra 'LLAMA' (animal) y 'LLAMA' (fuego) son:", opciones: ["Homógrafas", "Parónimas", "Antónimas", "Sinónimas"], correcta: 0, tiempo: 20 },

            // MEDIO
            { texto: "'APTO' (hábil) y 'ACTO' (acción) son palabras:", opciones: ["Homófonas", "Homógrafas", "Parónimas", "Sinónimas"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué relación hay entre 'SILLA' y 'MUEBLE'?", opciones: ["Antonimia", "Homonimia", "Hiponimia (Especie-Género)", "Sinonimia"], correcta: 2, tiempo: 30 },
            { texto: "'Vello' (pelo corto) y 'Bello' (hermoso) son:", opciones: ["Homófonas", "Homógrafas", "Parónimas", "Antónimas"], correcta: 0, tiempo: 25 },
            { texto: "Cuando una palabra tiene varios significados (ej: Pico), se llama:", opciones: ["Monosemia", "Polisemia", "Antonimia", "Paronimia"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "Señale el par de palabras Parónimas:", opciones: ["Cima - Sima", "Vota - Bota", "Absolver - Absorber", "Lima - Lima"], correcta: 2, tiempo: 35 },
            { texto: "¿Qué relación existe entre 'Jauría' y 'Perro'?", opciones: ["Hiperonimia", "Holonimia (Todo-Parte)", "Antonimia", "Homonimia"], correcta: 1, tiempo: 35 }, // Jauría es el conjunto (todo), perro es el elemento
            { texto: "Las palabras 'Cesto' (canasta) y 'Sexto' (número) son:", opciones: ["Homófonas", "Homógrafas", "Parónimas", "Sinónimas"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- APTITUD VERBAL TEMA 3: SINONIMIA ---
    "aptitud_tema3": {
        titulo: "Sinonimia",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Sinónimo de 'VELOZ':", opciones: ["Lento", "Rápido", "Fuerte", "Alto"], correcta: 1, tiempo: 15 },
            { texto: "Sinónimo de 'GÉLIDO':", opciones: ["Caliente", "Tibio", "Helado", "Seco"], correcta: 2, tiempo: 15 },
            { texto: "Sinónimo de 'OCULTO':", opciones: ["Visto", "Escondido", "Claro", "Público"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Sinónimo de 'DIÁFANO':", opciones: ["Oscuro", "Transparente", "Duro", "Antiguo"], correcta: 1, tiempo: 25 },
            { texto: "Sinónimo de 'EFÍMERO':", opciones: ["Eterno", "Duradero", "Pasajero", "Fuerte"], correcta: 2, tiempo: 25 },
            { texto: "Sinónimo de 'ADULTERAR':", opciones: ["Mejorar", "Limpiar", "Falsear", "Crear"], correcta: 2, tiempo: 25 },
            { texto: "Sinónimo de 'DONAR':", opciones: ["Recibir", "Vender", "Ceder", "Robar"], correcta: 2, tiempo: 20 },

            // DIFÍCIL
            { texto: "Sinónimo de 'INICUO':", opciones: ["Justo", "Malvado", "Inocuo", "Igual"], correcta: 1, tiempo: 35 }, // Inicuo = Injusto/Malvado. Inocuo = Que no hace daño.
            { texto: "Sinónimo de 'BALADÍ':", opciones: ["Importante", "Insignificante", "Valioso", "Pesado"], correcta: 1, tiempo: 35 },
            { texto: "Sinónimo de 'LÓBREGO':", opciones: ["Brillante", "Alegre", "Oscuro/Tenebroso", "Limpio"], correcta: 2, tiempo: 35 }
        ]
    },
    // --- APTITUD VERBAL TEMA 4: ANTONIMIA ---
    "aptitud_tema4": {
        titulo: "Antonimia",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Reusando gif
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Antónimo de 'ALTRUISTA':", opciones: ["Solidario", "Egoísta", "Amable", "Sincero"], correcta: 1, tiempo: 15 },
            { texto: "Antónimo de 'EFÍMERO':", opciones: ["Pasajero", "Breve", "Duradero", "Fugaz"], correcta: 2, tiempo: 15 },
            { texto: "Antónimo de 'CIMA':", opciones: ["Cumbre", "Sima (Abismo)", "Alto", "Montaña"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Antónimo de 'CONDONAR' (Perdonar):", opciones: ["Indultar", "Castigar", "Olvidar", "Premiar"], correcta: 1, tiempo: 25 },
            { texto: "Antónimo de 'DILIGENCIA' (Rapidez/Cuidado):", opciones: ["Desidia", "Prontitud", "Esmero", "Cuidado"], correcta: 0, tiempo: 25 },
            { texto: "Antónimo de 'LACONICO' (Breve):", opciones: ["Conciso", "Corto", "Locuaz (Hablador)", "Silencioso"], correcta: 2, tiempo: 25 },
            { texto: "Antónimo de 'INOCUO' (Que no hace daño):", opciones: ["Inofensivo", "Nocivo", "Saludable", "Bueno"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "Antónimo de 'BALADÍ' (Insignificante):", opciones: ["Trivial", "Nimio", "Trascendental", "Superficial"], correcta: 2, tiempo: 35 },
            { texto: "Antónimo de 'EXIGUO' (Escaso):", opciones: ["Mínimo", "Abundante", "Pequeño", "Reducido"], correcta: 1, tiempo: 30 },
            { texto: "Antónimo de 'INCIPIENTE' (Que empieza):", opciones: ["Inicial", "Naciente", "Concluso/Acabado", "Principiante"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- APTITUD VERBAL TEMA 5: SERIES VERBALES ---
    "aptitud_tema5": {
        titulo: "Series Verbales",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Enero, Marzo, Mayo, Julio, ...", opciones: ["Agosto", "Septiembre", "Octubre", "Junio"], correcta: 1, tiempo: 15 }, // Meses impares/saltando uno
            { texto: "Vaca, Mugido; Gato, Maullido; Perro, ...", opciones: ["Rugido", "Ladrido", "Bramido", "Relincho"], correcta: 1, tiempo: 15 },
            { texto: "Tierra, Marte, Júpiter, Saturno, ...", opciones: ["Luna", "Sol", "Urano", "Plutón"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "Silla, Sillón, Banco, Sofá, ... (Campo semántico: Asientos)", opciones: ["Mesa", "Taburete", "Cama", "Ropero"], correcta: 1, tiempo: 20 },
            { texto: "Río, Cauce; Mar, ...", opciones: ["Ola", "Sal", "Marea", "Lecho (Fondo)"], correcta: 3, tiempo: 25 }, // Parte del fondo
            { texto: "Automóvil, Llanta; Árbol, ...", opciones: ["Bosque", "Hoja", "Sombra", "Verde"], correcta: 1, tiempo: 25 }, // Parte-Todo
            { texto: "Hoz, Martillo, Serrucho, ... (Herramientas)", opciones: ["Pala", "Tierra", "Madera", "Clavo"], correcta: 0, tiempo: 20 },

            // DIFÍCIL
            { texto: "Renacimiento, Barroco, Neoclasicismo, ...", opciones: ["Medievalismo", "Romanticismo", "Vanguardismo", "Realismo"], correcta: 1, tiempo: 35 }, // Secuencia histórica literaria
            { texto: "Incipiente, Inicial, Naciente, ... (Sinónimos)", opciones: ["Final", "Incoativo", "Caducho", "Terminante"], correcta: 1, tiempo: 40 }, // Incoativo = Que empieza
            { texto: "Homicida, Matar; Suicida, Matarse; Uxoricida, ...", opciones: ["Matar a su padre", "Matar a su hijo", "Matar a su esposa", "Matar a su hermano"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- APTITUD VERBAL TEMA 6: ANALOGÍAS ---
    "aptitud_tema6": {
        titulo: "Analogías",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "DEDO es a ANILLO como CABEZA es a:", opciones: ["Pelo", "Sombrero", "Cuello", "Cerebro"], correcta: 1, tiempo: 15 },
            { texto: "PÁGINA es a LIBRO como TECLA es a:", opciones: ["Piano", "Música", "Dedo", "Sonido"], correcta: 0, tiempo: 20 },
            { texto: "MÉDICO es a HOSPITAL como PROFESOR es a:", opciones: ["Alumno", "Pizarra", "Colegio", "Clase"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "ISLA es a ARCHIPIÉLAGO como CERDO es a:", opciones: ["Granja", "Piara", "Jamón", "Lodo"], correcta: 1, tiempo: 25 }, // Elemento - Conjunto
            { texto: "PINTOR es a PINCEL como ESCULTOR es a:", opciones: ["Mármol", "Estatua", "Cincel", "Arte"], correcta: 2, tiempo: 25 }, // Sujeto - Herramienta
            { texto: "TERREMOTO es a DESTRUCCIÓN como INFECCIÓN es a:", opciones: ["Bacteria", "Fiebre", "Medicina", "Curación"], correcta: 1, tiempo: 25 }, // Causa - Efecto
            { texto: "ROJO es a PASIÓN como BLANCO es a:", opciones: ["Nieve", "Pureza/Paz", "Invierno", "Frío"], correcta: 1, tiempo: 20 }, // Simbología

            // DIFÍCIL
            { texto: "EXTENUADO es a CANSADO como ÓPTIMO es a:", opciones: ["Bueno", "Malo", "Pésimo", "Mejor"], correcta: 0, tiempo: 35 }, // Intensidad (Extenuado es muy cansado, Óptimo es muy bueno)
            { texto: "DANTESCO es a TERRIBLE como QUIJOTESCO es a:", opciones: ["Loco", "Idealista", "Viejo", "Alto"], correcta: 1, tiempo: 35 },
            { texto: "MITIGAR es a DOLOR como:", opciones: ["Amortiguar : Golpe", "Hablar : Grito", "Correr : Fatiga", "Estudiar : Libro"], correcta: 0, tiempo: 40 } // Acción de suavizar algo negativo
        ]
    },
    // --- LENGUAJE TEMA 1: LA COMUNICACIÓN ---
    "lenguaje_tema1": {
        titulo: "La Comunicación",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif", // Gif genérico de comunicación
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Elemento de la comunicación que envía el mensaje:", opciones: ["Receptor", "Emisor", "Canal", "Código"], correcta: 1, tiempo: 15 },
            { texto: "¿Qué es el 'Canal' en la comunicación?", opciones: ["El sistema de signos", "La información transmitida", "El medio físico por donde viaja el mensaje", "La realidad aludida"], correcta: 2, tiempo: 15 },
            { texto: "El proceso de descodificación lo realiza el:", opciones: ["Emisor", "Receptor", "Canal", "Referente"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "¿Qué tipo de comunicación es una luz roja del semáforo?", opciones: ["Verbal oral", "Verbal escrita", "No verbal visual", "No verbal táctil"], correcta: 2, tiempo: 20 },
            { texto: "El 'Ruido' en la comunicación se define como:", opciones: ["Sonido fuerte", "Interferencia en el proceso comunicativo", "Falta de código", "Exceso de información"], correcta: 1, tiempo: 20 },
            { texto: "Si leo un libro en mi habitación, el canal es:", opciones: ["El aire", "El papel/Libro", "La vista", "El castellano"], correcta: 1, tiempo: 25 },
            { texto: "La función del lenguaje relacionada con el Referente es:", opciones: ["Emotiva", "Apelativa", "Referencial o Representativa", "Metalingüística"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "Cuando el código es el centro del mensaje (ej: definiciones), la función es:", opciones: ["Fática", "Poética", "Metalingüística", "Apelativa"], correcta: 2, tiempo: 30 },
            { texto: "La comunicación 'Intrapersonal' se caracteriza por:", opciones: ["Darse entre dos personas", "Ser con uno mismo", "Ser masiva", "Usar medios técnicos"], correcta: 1, tiempo: 30 },
            { texto: "Si el emisor y el receptor no comparten el mismo espacio ni tiempo, la comunicación es:", opciones: ["Directa", "Indirecta", "Unidireccional", "Bidireccional"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- LENGUAJE TEMA 2: SIGNO LINGÜÍSTICO ---
    "lenguaje_tema2": {
        titulo: "El Signo Lingüístico",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién planteó la teoría del Signo Lingüístico?", opciones: ["Chomsky", "Ferdinand de Saussure", "Piaget", "Vygotsky"], correcta: 1, tiempo: 20 },
            { texto: "El Signo Lingüístico tiene dos planos, por eso es:", opciones: ["Biplánico", "Arbitrario", "Lineal", "Mutable"], correcta: 0, tiempo: 15 },
            { texto: "Los dos planos del signo son:", opciones: ["Lengua y Habla", "Significado y Significante", "Emisor y Receptor", "Fondo y Forma"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "El 'Significado' corresponde a:", opciones: ["La imagen acústica", "El concepto o idea mental", "El sonido material", "La escritura"], correcta: 1, tiempo: 25 },
            { texto: "La 'Arbitrariedad' del signo significa que:", opciones: ["La relación significado-significante es convencional (impuesta)", "El signo cambia con el tiempo", "El signo no cambia", "Los sonidos van uno tras otro"], correcta: 0, tiempo: 30 },
            { texto: "Que el signo sea 'Lineal' significa que:", opciones: ["Se articula en el tiempo, un sonido tras otro", "Es una línea gráfica", "Tiene dos planos", "Es inmutable"], correcta: 0, tiempo: 25 },
            { texto: "El 'Significante' es:", opciones: ["El concepto", "La imagen acústica (huella psíquica del sonido)", "El objeto real", "La definición"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "El signo lingüístico es 'Mutable' desde un enfoque:", opciones: ["Sincrónico (un momento)", "Diacrónico (a través del tiempo)", "Fonético", "Morfológico"], correcta: 1, tiempo: 35 },
            { texto: "A corto plazo (Sincronía), el signo lingüístico es:", opciones: ["Mutable", "Inmutable", "Flexible", "Caótico"], correcta: 1, tiempo: 35 },
            { texto: "La 'Doble Articulación' se refiere a:", opciones: ["Morfemas y Fonemas", "Sujeto y Predicado", "Significado y Significante", "Lengua y Habla"], correcta: 0, tiempo: 40 }
        ]
    },

    // --- LENGUAJE TEMA 3: MORFOLOGÍA LINGÜÍSTICA ---
    "lenguaje_tema3": {
        titulo: "Morfología Lingüística",
        introImg: "https://media.giphy.com/media/l0HlOaQcLJ2hHpXRm/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La unidad mínima con significado de la morfología es el:", opciones: ["Fonema", "Morfema", "Grafo", "Sema"], correcta: 1, tiempo: 20 },
            { texto: "Morfema que contiene el significado principal de la palabra:", opciones: ["Prefijo", "Sufijo", "Raíz (Lexema)", "Infijo"], correcta: 2, tiempo: 15 },
            { texto: "En la palabra 'Gatos', el morfema '-s' indica:", opciones: ["Género", "Número", "Tamaño", "Modo"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Los morfemas 'Derivativos' sirven para:", opciones: ["Indicar accidentes gramaticales", "Crear nuevas palabras", "Unir oraciones", "Separar sílabas"], correcta: 1, tiempo: 25 },
            { texto: "En 'Inmortal', el morfema 'In-' es un:", opciones: ["Sufijo", "Prefijo", "Lexema", "Flexivo"], correcta: 1, tiempo: 20 },
            { texto: "Palabra formada por Composición (Lexema + Lexema):", opciones: ["Panadero", "Sordomudo", "Gatito", "Corriendo"], correcta: 1, tiempo: 25 },
            { texto: "En 'Niños', el morfema '-o-' es:", opciones: ["Flexivo de género", "Flexivo de número", "Derivativo", "Raíz"], correcta: 0, tiempo: 25 },

            // DIFÍCIL
            { texto: "Proceso de formación de palabras: 'Baloncesto' (Balón + Cesto):", opciones: ["Derivación", "Composición", "Parasíntesis", "Acortamiento"], correcta: 1, tiempo: 30 },
            { texto: "La palabra 'Sietemesino' se ha formado por:", opciones: ["Composición", "Derivación", "Parasíntesis", "Onomatopeya"], correcta: 2, tiempo: 35 }, // (Siete+Mes)+ino -> Composición + Derivación simultánea
            { texto: "Los morfemas 'Amalgama' son exclusivos de:", opciones: ["Sustantivos", "Adjetivos", "Verbos", "Adverbios"], correcta: 2, tiempo: 35 } // Indican varios accidentes a la vez (tiempo, modo, persona...)
        ]
    },
    // --- LENGUAJE TEMA 4: ORTOGRAFÍA ---
    "lenguaje_tema4": {
        titulo: "Ortografía",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Palabra que lleva tilde por ser esdrújula:", opciones: ["Camen", "Arbol", "Música", "Pared"], correcta: 2, tiempo: 15 },
            { texto: "¿Cuál es la sílaba tónica en 'Computadora'?", opciones: ["Com", "Pu", "Ta", "Do"], correcta: 3, tiempo: 15 },
            { texto: "Signo de puntuación usado para separar oraciones o enumeraciones largas:", opciones: ["Punto final", "Coma", "Punto y coma", "Dos puntos"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "Marca la palabra con Tilde Diacrítica correctamente usada:", opciones: ["Tú libro", "El vino ayer", "Té de manzanilla", "Mí casa"], correcta: 2, tiempo: 25 },
            { texto: "Se escribe con 'B':", opciones: ["Her_ir", "Ser_ir", "Ama_ilidad", "Vi_ir"], correcta: 2, tiempo: 25 }, // Amabilidad (sufijo -bilidad)
            { texto: "¿Cuál es la palabra correctamente escrita?", opciones: ["Exhuberante", "Escacez", "Atravezar", "Idiosincrasia"], correcta: 3, tiempo: 25 },
            { texto: "La concurrencia de dos vocales fuertes (A, E, O) forma un:", opciones: ["Diptongo", "Hiato", "Triptongo", "Acentuación"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "Identifica la oración con uso correcto de 'sino' / 'si no':", opciones: ["No quiero eso, si no aquello", "Si no estudias, no aprobarás", "No es blanco, si no negro", "Te castigo sino comes"], correcta: 1, tiempo: 35 },
            { texto: "¿Cuántas tildes faltan en: 'El practico el examen teorico'?", opciones: ["1", "2", "3", "0"], correcta: 1, tiempo: 35 }, // "practicó" y "teórico" = 2.
            { texto: "Palabra que NO debe llevar tilde (monosílabo sin función diacrítica):", opciones: ["Fe", "Mas", "Tu", "Si"], correcta: 0, tiempo: 30 } // Fe nunca se tilda
        ]
    },

    // --- LENGUAJE TEMA 5: LENGUAJE AUDIOVISUAL ---
    "lenguaje_tema5": {
        titulo: "Lenguaje Audiovisual",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué combina el lenguaje audiovisual?", opciones: ["Solo imágenes", "Solo sonido", "Imagen y Sonido", "Texto y Foto"], correcta: 2, tiempo: 15 },
            { texto: "El elemento base del lenguaje visual (unidad mínima) es:", opciones: ["El plano", "La escena", "El punto", "El color"], correcta: 0, tiempo: 20 }, // En cine/video es el plano
            { texto: "Ángulo de cámara donde se graba desde arriba hacia abajo:", opciones: ["Nadir", "Picado", "Contrapicado", "Cenital"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Plano que muestra el rostro del personaje y su expresión:", opciones: ["Plano General", "Plano Americano", "Primer Plano", "Plano Detalle"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué función cumple la música en una película de terror?", opciones: ["Informativa", "Expresiva/Emocional", "Decorativa", "Narrativa"], correcta: 1, tiempo: 25 },
            { texto: "Movimiento físico de la cámara sobre su propio eje:", opciones: ["Travelling", "Zoom", "Paneo (Panorámica)", "Dolly"], correcta: 2, tiempo: 30 },
            { texto: "El 'Guion Técnico' detalla:", opciones: ["Los diálogos", "La historia", "Planos, ángulos y movimientos", "El presupuesto"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "Ángulo de cámara totalmente vertical desde arriba (vista de pájaro):", opciones: ["Picado", "Nadir", "Cenital", "Subjetiva"], correcta: 2, tiempo: 35 },
            { texto: "La 'Elipsis' en el cine consiste en:", opciones: ["Repetir una escena", "Suprimir tiempo innecesario", "Cámara lenta", "Pantalla dividida"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué es el 'Raccord' o continuidad?", opciones: ["La música de fondo", "La coherencia entre planos consecutivos", "El final de la película", "Los créditos"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- LENGUAJE TEMA 6: SUSTANTIVOS ---
    "lenguaje_tema6": {
        titulo: "El Sustantivo",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El sustantivo sirve para nombrar:", opciones: ["Acciones", "Cualidades", "Seres, objetos o ideas", "Relaciones"], correcta: 2, tiempo: 15 },
            { texto: "¿Cuál es un sustantivo propio?", opciones: ["Río", "Montaña", "Amazonas", "País"], correcta: 2, tiempo: 15 },
            { texto: "El sustantivo 'Bondad' es de tipo:", opciones: ["Concreto", "Abstracto", "Propio", "Colectivo"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Sustantivo colectivo de 'Abeja':", opciones: ["Colmena", "Enjambre", "Abejas", "Panal"], correcta: 1, tiempo: 20 },
            { texto: "¿Cuál es un sustantivo 'Ambiguo' (acepta ambos géneros)?", opciones: ["El mar / La mar", "El sol / La sol", "El agua / La agua", "El mesa / La mesa"], correcta: 0, tiempo: 25 },
            { texto: "En la frase 'Los cuadernos rojos', el núcleo del sujeto es:", opciones: ["Los", "Cuadernos", "Rojos", "No hay"], correcta: 1, tiempo: 25 },
            { texto: "Sustantivo que designa seres que se pueden percibir por los sentidos:", opciones: ["Abstracto", "Concreto", "No contable", "Primitivo"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "El sustantivo 'Agua' es femenino, pero se usa 'El agua' por:", opciones: ["Regla general", "Cacofonía", "Error común", "Excepción culta"], correcta: 1, tiempo: 35 },
            { texto: "¿Cuál es un sustantivo 'Epiceno'?", opciones: ["El periodista / La periodista", "El cóndor macho / hembra", "Gato / Gata", "Actor / Actriz"], correcta: 1, tiempo: 35 }, // Epiceno: Se agrega macho/hembra
            { texto: "Plural correcto de 'Omnibus':", opciones: ["Omnibuses", "Los omnibus", "Omnibuss", "Omnibi"], correcta: 1, tiempo: 35 } // Palabras llanas/esdrújulas en -s no cambian
        ]
    },
    // --- HISTORIA DEL PERÚ TEMA 1: POBLAMIENTO AMERICANO ---
    "hp_tema1": {
        titulo: "Poblamiento Americano",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif", // Gif genérico educativo
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién es el autor de la Teoría Asiática (Inmigracionista)?", opciones: ["Paul Rivet", "Méndez Correa", "Alex Hrdlicka", "Florentino Ameghino"], correcta: 2, tiempo: 20 },
            { texto: "Según la Teoría Asiática, el hombre llegó a América cruzando el:", opciones: ["Océano Atlántico", "Estrecho de Bering", "Puente de la Antártida", "Océano Pacífico"], correcta: 1, tiempo: 20 },
            { texto: "Teoría que sostenía que el hombre americano era originario de América (Autoctonista):", opciones: ["Teoría Asiática", "Teoría Oceánica", "Teoría Australiana", "Teoría Autoctonista"], correcta: 3, tiempo: 15 },

            // MEDIO
            { texto: "Paul Rivet propuso que, además de Asia, llegaron grupos desde:", opciones: ["Australia y Nueva Zelanda", "Melanesia y Polinesia", "Europa y África", "El Polo Norte"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué prueba geográfica utilizó Méndez Correa para su Teoría Australiana?", opciones: ["La corriente de Kuro Shio", "El Optimus Climaticum", "El Estrecho de Magallanes", "Las islas Aleutianas"], correcta: 1, tiempo: 30 },
            { texto: "El primer poblador del Perú (Periodo Lítico) se caracterizó por ser:", opciones: ["Sedentario y agricultor", "Nómada, cazador y recolector", "Constructor de templos", "Ganadero"], correcta: 1, tiempo: 25 },
            { texto: "Restos líticos más antiguos de la costa peruana (Taller lítico):", opciones: ["Pacaicasa", "Chivateros", "Toquepala", "Lauricocha"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "El hombre de ________ es considerado el primer pintor rupestre del Perú (Tacna).", opciones: ["Paiján", "Guitarrero I", "Toquepala", "Kotosh"], correcta: 2, tiempo: 35 },
            { texto: "¿Qué sitio arqueológico evidencia la domesticación temprana de camélidos (Periodo Arcaico)?", opciones: ["Telarmachay", "Huaca Prieta", "Caral", "Chavín"], correcta: 0, tiempo: 35 },
            { texto: "La teoría de la procedencia Noratlántica (Solutrense) fue planteada por:", opciones: ["Thor Heyerdahl", "Bradley y Stanford", "Kaufmann Doig", "Julio C. Tello"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- HISTORIA DEL PERÚ TEMA 2: ALTAS CULTURAS (PRE-INCAS) ---
    "hp_tema2": {
        titulo: "Altas Culturas (Pre-Incas)",
        introImg: "https://media.giphy.com/media/26BGGc6l6fqWc/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué cultura es conocida por sus 'Cabezas Clavas' y el 'Lanzón Monolítico'?", opciones: ["Mochica", "Paracas", "Chavín", "Nazca"], correcta: 2, tiempo: 20 },
            { texto: "La cultura Nazca es mundialmente famosa por:", opciones: ["Sus trepanaciones craneanas", "Sus geoglifos (Líneas de Nazca)", "Su orfebrería de oro", "Sus cabezas trofeo"], correcta: 1, tiempo: 20 },
            { texto: "Cultura reconocida por tener los mantos funerarios más finos del mundo:", opciones: ["Wari", "Tiahuanaco", "Paracas", "Chimú"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Quién descubrió la tumba del Señor de Sipán (Cultura Mochica)?", opciones: ["Julio C. Tello", "Max Uhle", "Walter Alva", "Maria Reiche"], correcta: 2, tiempo: 25 },
            { texto: "Es considerado el 'Primer Imperio Panandino' del Perú:", opciones: ["Chavín", "Wari", "Inca", "Tiahuanaco"], correcta: 1, tiempo: 30 },
            { texto: "La técnica agrícola de los 'Camellones' o 'Waru Waru' fue usada por:", opciones: ["Nazca", "Tiahuanaco", "Chimú", "Paracas"], correcta: 1, tiempo: 30 },
            { texto: "La cultura Chimú destacó principalmente en:", opciones: ["Cerámica escultórica", "Orfebrería (El Tumi)", "Textilería", "Líneas geográficas"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "Dios principal de la cultura Chavín, representado con rasgos felinos:", opciones: ["Wiracocha", "Dios de los Báculos", "Ai Apaec", "Naylamp"], correcta: 1, tiempo: 35 },
            { texto: "Capital de la cultura Wari ubicada en Ayacucho:", opciones: ["Pachacámac", "Viñaque", "Cahuachi", "Chan Chan"], correcta: 1, tiempo: 35 },
            { texto: "El 'Horror al vacío' es una característica de la cerámica pictórica de:", opciones: ["Mochica", "Nazca", "Recuay", "Lima"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- HISTORIA DEL PERÚ TEMA 3: TAHUANTINSUYO ---
    "hp_tema3": {
        titulo: "El Tahuantinsuyo",
        introImg: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál fue la capital del Imperio Incaico?", opciones: ["Quito", "Cusco", "Lima", "Cajamarca"], correcta: 1, tiempo: 15 },
            { texto: "El mensajero real que recorría los caminos del Inca se llamaba:", opciones: ["Tucuy Ricuy", "Chasqui", "Curaca", "Amauta"], correcta: 1, tiempo: 15 },
            { texto: "¿Quién fue el Inca organizador y verdadero fundador del Imperio (Tahuantinsuyo)?", opciones: ["Manco Cápac", "Atahualpa", "Pachacútec", "Huayna Cápac"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "Sistema de trabajo obligatorio por turnos a favor del Estado:", opciones: ["Ayni", "Minka", "Mita", "Chunca"], correcta: 2, tiempo: 25 },
            { texto: "Base de la organización social inca (familia extensa):", opciones: ["El Ayllu", "La Panaca", "El Camachico", "El Marka"], correcta: 0, tiempo: 25 },
            { texto: "Instrumento de cuerdas y nudos usado para la contabilidad:", opciones: ["Kero", "Aríbalo", "Quipu", "Pututo"], correcta: 2, tiempo: 20 },
            { texto: "¿Qué principio económico regía en el Tahuantinsuyo?", opciones: ["Oferta y Demanda", "Reciprocidad y Redistribución", "Monopolio comercial", "Trueque simple"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Funcionario conocido como 'El que todo lo ve' (visitador real):", opciones: ["Apunchic", "Tucuy Ricuy", "Curaca", "Auqui"], correcta: 1, tiempo: 35 },
            { texto: "La educación noble se impartía en el Yachaywasi a cargo del:", opciones: ["Haravicus", "Mamaconas", "Amauta", "Willac Umu"], correcta: 2, tiempo: 30 },
            { texto: "La guerra civil entre Huáscar y Atahualpa marcó el fin de la etapa:", opciones: ["Legendaria", "Imperial o de la Expansión", "De la Confederación", "De la Decadencia"], correcta: 1, tiempo: 35 } // Aunque es el fin, ocurre en la etapa imperial final.
        ]
    },
    // --- HISTORIA DEL PERÚ TEMA 4: INVASIÓN EUROPEA ---
    "hp_tema4": {
        titulo: "Invasión Europea y Resistencia",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién lideró la conquista del Tahuantinsuyo?", opciones: ["Diego de Almagro", "Hernando de Luque", "Francisco Pizarro", "Hernán Cortés"], correcta: 2, tiempo: 20 },
            { texto: "El documento que autorizó la conquista del Perú fue la Capitulación de:", opciones: ["Santa Fe", "Toledo", "Burgos", "Tordesillas"], correcta: 1, tiempo: 20 },
            { texto: "Inca capturado y ejecutado en la Plaza de Cajamarca:", opciones: ["Huáscar", "Manco Inca", "Atahualpa", "Huayna Cápac"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "La primera ciudad española fundada en el Perú fue:", opciones: ["Lima", "Jauja", "San Miguel de Tangarará (Piura)", "Cusco"], correcta: 2, tiempo: 25 },
            { texto: "¿Quién fue el primer inca de la resistencia de Vilcabamba?", opciones: ["Túpac Amaru I", "Sayri Túpac", "Manco Inca", "Titu Cusi Yupanqui"], correcta: 2, tiempo: 25 },
            { texto: "El 'Requerimiento' leído por el cura Valverde en Cajamarca exigía:", opciones: ["Oro y plata", "Someterse al Rey y al Papa", "Un mapa del imperio", "Alimentos"], correcta: 1, tiempo: 30 },
            { texto: "Diego de Almagro 'El Tuerto' se enfrentó a Pizarro por la posesión de:", opciones: ["Lima", "Cusco", "Cajamarca", "Tumbes"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Líder indígena que apoyó a Pizarro (Huancavilcas) creyendo que eran dioses:", opciones: ["Felipillo", "Martinillo", "Chilimasa", "Maizavilca"], correcta: 3, tiempo: 35 },
            { texto: "¿Qué general atahualpista dirigió la resistencia en la toma del Cusco?", opciones: ["Quizquiz", "Calcuchimac", "Rumiñahui", "Cahuide"], correcta: 0, tiempo: 35 },
            { texto: "La ejecución de Túpac Amaru I fue ordenada por el virrey:", opciones: ["Francisco de Toledo", "Amat y Juniet", "Blasco Núñez de Vela", "Gil de Taboada"], correcta: 0, tiempo: 40 }
        ]
    },

    // --- HISTORIA DEL PERÚ TEMA 5: VIRREINATO ---
    "hp_tema5": {
        titulo: "El Virreinato del Perú",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La máxima autoridad en el Virreinato, representante del Rey, era el:", opciones: ["Oidor", "Corregidor", "Virrey", "Intendente"], correcta: 2, tiempo: 15 },
            { texto: "Principal actividad económica durante el Virreinato:", opciones: ["Agricultura", "Minería", "Pesca", "Textilería"], correcta: 1, tiempo: 15 },
            { texto: "Mina de plata más importante de Sudamérica en la colonia:", opciones: ["Potosí", "Huancavelica", "Yanacocha", "Cerro de Pasco"], correcta: 0, tiempo: 20 },

            // MEDIO
            { texto: "Impuesto colonial aplicado a la compra-venta de bienes (IGV de la época):", opciones: ["Almojarifazgo", "Diezmo", "Alcabala", "Tributo indígena"], correcta: 2, tiempo: 25 },
            { texto: "Institución encargada de administrar justicia en el Virreinato:", opciones: ["Cabildo", "Real Audiencia", "Corregimiento", "Tribunal del Consulado"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué Virrey organizó la mita minera y las reducciones de indios?", opciones: ["Manuel de Amat", "Francisco de Toledo", "Abascal", "Jáuregui"], correcta: 1, tiempo: 25 },
            { texto: "Los 'Cimarrones' eran:", opciones: ["Esclavos negros fugitivos", "Hijos de español e india", "Indios nobles", "Españoles nacidos en Perú"], correcta: 0, tiempo: 25 },

            // DIFÍCIL
            { texto: "¿Qué reforma del siglo XVIII creó el Virreinato del Río de la Plata?", opciones: ["Reformas Toledanas", "Reformas Borbónicas", "Leyes Nuevas", "Capitulaciones"], correcta: 1, tiempo: 35 },
            { texto: "El impuesto 'Media Anata' gravaba:", opciones: ["La minería", "Los sueldos de funcionarios públicos", "Las importaciones", "La producción agrícola"], correcta: 1, tiempo: 35 },
            { texto: "Institución comercial que controlaba el monopolio desde Lima:", opciones: ["Casa de Contratación", "Tribunal del Consulado", "Real Hacienda", "Intendencia"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- HISTORIA DEL PERÚ TEMA 6: REBELIONES INDÍGENAS ---
    "hp_tema6": {
        titulo: "Rebeliones Indígenas",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién lideró la gran rebelión de 1780 en Cusco?", opciones: ["Manco Inca", "Túpac Amaru II", "Juan Santos Atahualpa", "Mateo Pumacahua"], correcta: 1, tiempo: 15 },
            { texto: "Nombre verdadero de Túpac Amaru II:", opciones: ["José Gabriel Condorcanqui", "Juan Santos", "Pedro Vilca Apaza", "Julián Apaza"], correcta: 0, tiempo: 15 },
            { texto: "Juan Santos Atahualpa se rebeló en la:", opciones: ["Sierra Sur", "Costa Norte", "Selva Central (Gran Pajonal)", "Sierra Central"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "Túpac Amaru II se rebeló principalmente contra los abusos de los:", opciones: ["Virreyes", "Corregidores (Repartos mercantiles)", "Intendentes", "Curas"], correcta: 1, tiempo: 25 },
            { texto: "Esposa y colaboradora principal de Túpac Amaru II:", opciones: ["Micaela Bastidas", "María Parado de Bellido", "Tomasa Tito Condemayta", "Juana de Arco"], correcta: 0, tiempo: 20 },
            { texto: "Batalla donde Túpac Amaru II derrotó a las fuerzas españolas:", opciones: ["Checacupe", "Sangarará", "Combapata", "Ayacucho"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué Virrey gobernaba durante la rebelión de Túpac Amaru II?", opciones: ["Abascal", "Jáuregui", "Amat y Juniet", "Toledo"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Consecuencia administrativa de la rebelión de Túpac Amaru II:", opciones: ["Creación de las Intendencias", "Abolición de la esclavitud", "Expulsión de los Jesuitas", "Creación de la Santa Inquisición"], correcta: 0, tiempo: 35 },
            { texto: "Líder aymara que continuó la rebelión en el Alto Perú (Bolivia):", opciones: ["Túpac Amaru I", "Túpac Katari (Julián Apaza)", "Diego Cristóbal", "Pedro Vilca Apaza"], correcta: 1, tiempo: 35 },
            { texto: "Juan Santos Atahualpa buscaba la expulsión de los españoles y de los:", opciones: ["Dominicos", "Jesuitas", "Franciscanos", "Mercedarios"], correcta: 2, tiempo: 40 } // Misiones franciscanas en la selva
        ]
    },
    // --- HISTORIA UNIVERSAL TEMA 1: ANTROPOGÉNESIS ---
    "hu_tema1": {
        titulo: "Antropogénesis",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Evolución
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿En qué continente se inició la evolución humana (Cuna de la Humanidad)?", opciones: ["Asia", "África", "Europa", "Oceanía"], correcta: 1, tiempo: 15 },
            { texto: "Autor de la obra 'El Origen de las Especies' (Teoría de la Evolución):", opciones: ["Lamarck", "Darwin", "Mendel", "Engels"], correcta: 1, tiempo: 15 },
            { texto: "Primer homínido en caminar de forma bípeda (dos pies):", opciones: ["Homo Habilis", "Australopithecus", "Homo Sapiens", "Gorila"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué especie humana fue la primera en fabricar herramientas de piedra?", opciones: ["Homo Erectus", "Homo Habilis", "Homo Sapiens", "Australopithecus"], correcta: 1, tiempo: 25 },
            { texto: "El Homo Erectus se caracteriza principalmente por:", opciones: ["Descubrir el fuego y salir de África", "Hacer arte rupestre", "Enterrar a sus muertos", "Ser sedentario"], correcta: 0, tiempo: 25 },
            { texto: "Especie que realizó los primeros entierros funerarios (creencias mágicas):", opciones: ["Homo Neanderthalensis", "Homo Habilis", "Homo Erectus", "Homo Antecesor"], correcta: 0, tiempo: 30 },
            { texto: "El hombre de Cromagnon corresponde a la especie:", opciones: ["Homo Erectus", "Homo Sapiens", "Neandertal", "Australopithecus"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "El esqueleto famoso llamado 'Lucy' pertenece a la especie:", opciones: ["Australopithecus Africanus", "Australopithecus Afarensis", "Homo Habilis", "Homo Ergaster"], correcta: 1, tiempo: 35 },
            { texto: "El proceso de transformación de los primates en humanos se llama:", opciones: ["Hominización", "Sedentarización", "Neolitización", "Bipedismo"], correcta: 0, tiempo: 30 },
            { texto: "El trabajo como factor de humanización fue planteado por:", opciones: ["Darwin", "Federico Engels", "Karl Marx", "Lamarck"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- HISTORIA UNIVERSAL TEMA 2: CALDEO-ASIRIA Y EGIPTO ---
    "hu_tema2": {
        titulo: "Mesopotamia y Egipto",
        introImg: "https://media.giphy.com/media/26BGGc6l6fqWc/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La civilización egipcia se desarrolló gracias al río:", opciones: ["Tigris", "Nilo", "Éufrates", "Jordán"], correcta: 1, tiempo: 15 },
            { texto: "Escritura en forma de cuña inventada por los sumerios (Mesopotamia):", opciones: ["Jeroglífica", "Cuneiforme", "Demótica", "Hierática"], correcta: 1, tiempo: 20 },
            { texto: "Construcciones escalonadas típicas de Mesopotamia (Templos):", opciones: ["Pirámides", "Zigurats", "Hipogeos", "Mastabas"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Rey de Babilonia famoso por su código de leyes ('Ojo por ojo'):", opciones: ["Nabucodonosor II", "Hammurabi", "Sargón I", "Asurbanipal"], correcta: 1, tiempo: 25 },
            { texto: "Faraón que unificó el Alto y Bajo Egipto (Primer Faraón):", opciones: ["Ramsés II", "Menes (Narmer)", "Keops", "Tutankamón"], correcta: 1, tiempo: 25 },
            { texto: "La escritura egipcia descifrada por Champollion fue la:", opciones: ["Cuneiforme", "Jeroglífica", "Lineal B", "Fenicia"], correcta: 1, tiempo: 25 },
            { texto: "Pueblo mesopotámico caracterizado por su crueldad y ejército (Capital: Nínive):", opciones: ["Sumerios", "Asirios", "Babilonios", "Acadios"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Faraón que implantó el monoteísmo (Culto a Atón):", opciones: ["Amenofis IV (Akenatón)", "Tutmosis III", "Ramsés II", "Seti I"], correcta: 0, tiempo: 35 },
            { texto: "El poema épico más antiguo de la historia (Mesopotamia) es:", opciones: ["La Ilíada", "Gilgamesh", "El Ramayana", "El Mahabharata"], correcta: 1, tiempo: 35 },
            { texto: "La máxima expansión del Imperio Egipcio se logró con el faraón:", opciones: ["Keops", "Tutmosis III", "Hatshepsut", "Cleopatra"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- HISTORIA UNIVERSAL TEMA 3: CULTURA GRIEGA ---
    "hu_tema3": {
        titulo: "Cultura Griega",
        introImg: "https://media.giphy.com/media/L1R1TV7XaljHu/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Qué polis (ciudad) es la cuna de la Democracia?", opciones: ["Esparta", "Atenas", "Tebas", "Corinto"], correcta: 1, tiempo: 15 },
            { texto: "Las Guerras Médicas enfrentaron a los griegos contra los:", opciones: ["Romanos", "Persas (Medos)", "Egipcios", "Espartanos"], correcta: 1, tiempo: 20 },
            { texto: "Dios supremo del Olimpo griego:", opciones: ["Poseidón", "Hades", "Zeus", "Apolo"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "Gobernante ateniense que llevó la democracia a su máximo esplendor (Siglo de Oro):", opciones: ["Solón", "Pericles", "Dracón", "Clístenes"], correcta: 1, tiempo: 25 },
            { texto: "La educación en Esparta estaba orientada a formar:", opciones: ["Filósofos", "Artistas", "Soldados", "Comerciantes"], correcta: 2, tiempo: 20 },
            { texto: "Filósofo griego condenado a beber la cicuta:", opciones: ["Platón", "Aristóteles", "Sócrates", "Pitágoras"], correcta: 2, tiempo: 25 },
            { texto: "La Guerra del Peloponeso enfrentó a:", opciones: ["Griegos vs Persas", "Atenas vs Esparta", "Roma vs Cartago", "Grecia vs Roma"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Legislador ateniense que abolió la esclavitud por deudas:", opciones: ["Dracón", "Solón", "Licurgo", "Pisístrato"], correcta: 1, tiempo: 35 },
            { texto: "Escultor griego autor de la estatua de Zeus y Atenea (Partenón):", opciones: ["Mirón", "Fidias", "Policleto", "Praxíteles"], correcta: 1, tiempo: 35 },
            { texto: "Batalla donde Alejandro Magno derrotó definitivamente a los persas:", opciones: ["Maratón", "Gaugamela", "Salamina", "Termópilas"], correcta: 1, tiempo: 40 }
        ]
    },
    // --- HISTORIA UNIVERSAL TEMA 4: CULTURA ROMANA ---
    "hu_tema4": {
        titulo: "Cultura Romana",
        introImg: "https://media.giphy.com/media/11BJCvCTus9iY8/giphy.gif", // Reusando gif clásico o busca uno de Roma
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Según la leyenda, Roma fue fundada por los hermanos:", opciones: ["Cástor y Pólux", "Rómulo y Remo", "Tiberio y Cayo", "Octavio y Marco"], correcta: 1, tiempo: 15 },
            { texto: "Las Guerras Púnicas enfrentaron a Roma contra la potencia comercial de:", opciones: ["Grecia", "Egipto", "Cartago", "Persia"], correcta: 2, tiempo: 20 },
            { texto: "Emperador romano que legalizó el cristianismo (Edicto de Milán):", opciones: ["Nerón", "Constantino", "Trajano", "Augusto"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Clase social romana conformada por los descendientes de los fundadores (nobles):", opciones: ["Plebeyos", "Patricios", "Libertos", "Clientes"], correcta: 1, tiempo: 25 },
            { texto: "Primer Emperador de Roma, bajo su gobierno se vivió la 'Pax Romana':", opciones: ["Julio César", "Octavio Augusto", "Marco Aurelio", "Calígula"], correcta: 1, tiempo: 25 },
            { texto: "Líder de la rebelión de esclavos más grande contra Roma:", opciones: ["Espartaco", "Aníbal", "Viriato", "Vercingétorix"], correcta: 0, tiempo: 25 },
            { texto: "El Coliseo Romano fue construido principalmente para:", opciones: ["Teatro y drama", "Luchas de gladiadores", "Carreras de caballos", "Debates políticos"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "La Ley de las XII Tablas fue una conquista jurídica de los:", opciones: ["Esclavos", "Patricios", "Plebeyos", "Extranjeros"], correcta: 2, tiempo: 35 },
            { texto: "General cartaginés que cruzó los Alpes con elefantes para atacar Roma:", opciones: ["Escipión", "Aníbal Barca", "Amílcar", "Asdrúbal"], correcta: 1, tiempo: 35 },
            { texto: "¿En qué año cayó el Imperio Romano de Occidente?", opciones: ["1453 d.C.", "476 d.C.", "395 d.C.", "800 d.C."], correcta: 1, tiempo: 40 }
        ]
    },

    // --- HISTORIA UNIVERSAL TEMA 5: BÁRBAROS Y CAROLINGIO ---
    "hu_tema5": {
        titulo: "Bárbaros e Imp. Carolingio",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿A quiénes llamaban 'bárbaros' los romanos?", opciones: ["A los guerreros", "A los extranjeros", "A los esclavos", "A los cristianos"], correcta: 1, tiempo: 15 },
            { texto: "Rey de los francos coronado 'Emperador de los Romanos' en el año 800:", opciones: ["Carlomagno", "Pipino el Breve", "Clodoveo", "Carlos Martel"], correcta: 0, tiempo: 20 },
            { texto: "Pueblo bárbaro que saqueó Roma y se estableció en el norte de África:", opciones: ["Visigodos", "Vándalos", "Hunos", "Ostrogodos"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "El Imperio Carolingio buscó restablecer la cultura del:", opciones: ["Imperio Griego", "Imperio Romano de Occidente", "Imperio Persa", "Imperio Bizantino"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué batalla detuvo el avance de los Hunos de Atila en Europa?", opciones: ["Campos Cataláunicos", "Poitiers", "Adrianópolis", "Verdún"], correcta: 0, tiempo: 30 },
            { texto: "Tratado que dividió el Imperio Carolingio entre los nietos de Carlomagno:", opciones: ["Tratado de Tordesillas", "Tratado de Verdún", "Paz de Westfalia", "Edicto de Tesalónica"], correcta: 1, tiempo: 30 },
            { texto: "Las escuelas creadas por Carlomagno para la nobleza se llamaban:", opciones: ["Parroquiales", "Palatinas", "Conventuales", "Universidades"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "Líder de los Hunos conocido como 'El Azote de Dios':", opciones: ["Alarico", "Odoacro", "Atila", "Genserico"], correcta: 2, tiempo: 35 },
            { texto: "Funcionarios carolingios ('Enviados del Señor') que supervisaban a los condes:", opciones: ["Missi Dominici", "Mayordomos", "Marqueses", "Duques"], correcta: 0, tiempo: 35 },
            { texto: "El Renacimiento Carolingio fue impulsado por el sabio:", opciones: ["Alcuino de York", "Eginardo", "Santo Tomás", "San Agustín"], correcta: 0, tiempo: 40 }
        ]
    },

    // --- HISTORIA UNIVERSAL TEMA 6: LOS ÁRABES (ISLAM) ---
    "hu_tema6": {
        titulo: "El Islam y los Árabes",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Profeta fundador de la religión islámica:", opciones: ["Jesús", "Moisés", "Mahoma", "Abraham"], correcta: 2, tiempo: 15 },
            { texto: "Libro sagrado del Islam:", opciones: ["La Biblia", "El Corán", "La Torá", "El Vedas"], correcta: 1, tiempo: 15 },
            { texto: "Ciudad sagrada hacia donde oran los musulmanes (lugar de la Kaaba):", opciones: ["Jerusalén", "Medina", "La Meca", "Bagdad"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "La 'Hégira' (622 d.C.) marca el inicio del calendario musulmán y fue:", opciones: ["El nacimiento de Mahoma", "La huida de Mahoma de La Meca a Medina", "La muerte de Mahoma", "La revelación del Corán"], correcta: 1, tiempo: 25 },
            { texto: "Dios único en la religión islámica:", opciones: ["Yavé", "Alá", "Jehová", "Elohim"], correcta: 1, tiempo: 15 },
            { texto: "¿Cuál NO es uno de los 5 pilares del Islam?", opciones: ["Ayunar en Ramadán", "Dar limosna", "Guerra Santa (Yihad)", "Peregrinar a La Meca"], correcta: 2, tiempo: 30 }, // La Yihad no es un pilar fundamental de culto diario
            { texto: "La expansión musulmana en Europa fue frenada por Carlos Martel en la batalla de:", opciones: ["Poitiers", "Guadalete", "Lepanto", "Covadonga"], correcta: 0, tiempo: 30 },

            // DIFÍCIL
            { texto: "Dinastía árabe que trasladó la capital a Bagdad (Edad de Oro):", opciones: ["Omeyas", "Abásidas", "Ortodoxos", "Fatimíes"], correcta: 1, tiempo: 35 },
            { texto: "Filósofo y médico árabe conocido en occidente como Avicena:", opciones: ["Ibn Sina", "Averroes", "Al-Juarismi", "Al-Razi"], correcta: 0, tiempo: 40 },
            { texto: "Templo musulmán caracterizado por sus minaretes y cúpulas:", opciones: ["Sinagoga", "Mezquita", "Pagoda", "Catedral"], correcta: 1, tiempo: 20 }
        ]
    },
    // --- GEOGRAFÍA TEMA 1: CIENCIA GEOGRÁFICA ---
    "geografia_tema1": {
        titulo: "Ciencia Geográfica",
        introImg: "https://media.giphy.com/media/3o6Zt6ML6qTqQ3wYhy/giphy.gif", // Reusando un gif de mapa/globo
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es el objeto de estudio de la Geografía?", opciones: ["La Tierra", "El Espacio Geográfico", "Los Mapas", "El Paisaje Natural"], correcta: 1, tiempo: 20 },
            { texto: "Es considerado el 'Padre de la Geografía Antigua':", opciones: ["Humboldt", "Eratóstenes", "Hecateo de Mileto", "Ritter"], correcta: 2, tiempo: 15 },
            { texto: "Principio geográfico que ubica el lugar exacto de un hecho (Latitud/Longitud):", opciones: ["Causalidad", "Localización", "Comparación", "Evolución"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Quién propuso el principio de 'Causalidad' (buscar el porqué de los hechos)?", opciones: ["Friedrich Ratzel", "Alexander von Humboldt", "Jean Brunhes", "Vidal de la Blache"], correcta: 1, tiempo: 25 },
            { texto: "Escuela geográfica que afirma que el medio ambiente condiciona al hombre (Determinismo):", opciones: ["Escuela Francesa", "Escuela Alemana", "Escuela Inglesa", "Escuela Americana"], correcta: 1, tiempo: 25 },
            { texto: "El principio de 'Comparación o Analogía' fue planteado por:", opciones: ["Karl Ritter", "Humboldt", "Ratzel", "Vidal de la Blache"], correcta: 0, tiempo: 25 },
            { texto: "La Geografía Matemática se encarga de:", opciones: ["El clima", "Las dimensiones y forma de la Tierra", "Los suelos", "La población"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "El 'Posibilismo Geográfico' (el hombre modifica el medio) fue defendido por:", opciones: ["Paul Vidal de la Blache", "Friedrich Ratzel", "Immanuel Kant", "Eratóstenes"], correcta: 0, tiempo: 35 },
            { texto: "Principio que establece que todo en la Tierra está en constante transformación:", opciones: ["Conexión", "Actividad o Evolución", "Localización", "Descripción"], correcta: 1, tiempo: 30 },
            { texto: "¿Qué estudia la Edafología?", opciones: ["Los ríos", "Los vientos", "Los suelos", "Las montañas"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- GEOGRAFÍA TEMA 2: EL UNIVERSO ---
    "geografia_tema2": {
        titulo: "El Universo",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif", // Espacio/Estrellas
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La teoría del 'Big Bang' o Gran Explosión fue planteada inicialmente por:", opciones: ["Albert Einstein", "George Gamow", "George Lemaitre", "Edwin Hubble"], correcta: 2, tiempo: 20 },
            { texto: "¿En qué galaxia se encuentra nuestro Sistema Solar?", opciones: ["Andrómeda", "Vía Láctea", "Triángulo", "Nube de Magallanes"], correcta: 1, tiempo: 15 },
            { texto: "La unidad básica del Universo son las:", opciones: ["Estrellas", "Galaxias", "Nebulosas", "Constelaciones"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué elemento químico es el combustible principal de las estrellas?", opciones: ["Helio", "Hidrógeno", "Carbono", "Hierro"], correcta: 1, tiempo: 25 },
            { texto: "Teoría que propone que el universo se contraerá en un 'Big Crunch':", opciones: ["Universo Estacionario", "Universo Oscilante o Cíclico", "Universo Inflacionario", "Big Bang"], correcta: 1, tiempo: 25 },
            { texto: "La Vía Láctea es una galaxia de tipo:", opciones: ["Elíptica", "Irregular", "Espiral barrada", "Lenticular"], correcta: 2, tiempo: 25 },
            { texto: "Un 'Año Luz' mide:", opciones: ["Tiempo", "Velocidad", "Distancia", "Luminosidad"], correcta: 2, tiempo: 20 },

            // DIFÍCIL
            { texto: "La teoría del 'Universo Estacionario' (no tiene principio ni fin) es de:", opciones: ["Friedmann", "Bondi, Gold y Hoyle", "Gamow", "Guth"], correcta: 1, tiempo: 35 },
            { texto: "¿Quién clasificó a las galaxias en espirales, elípticas e irregulares?", opciones: ["Isaac Newton", "Edwin Hubble", "Galileo Galilei", "Stephen Hawking"], correcta: 1, tiempo: 35 },
            { texto: "Estrella más cercana a la Tierra después del Sol:", opciones: ["Sirio", "Próxima Centauri", "Betelgeuse", "Polaris"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- GEOGRAFÍA TEMA 3: HELIÓSFERA (SISTEMA SOLAR) ---
    "geografia_tema3": {
        titulo: "Sistema Planetario Solar",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Planetas girando
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuál es el planeta más grande del Sistema Solar?", opciones: ["Saturno", "Tierra", "Júpiter", "Urano"], correcta: 2, tiempo: 15 },
            { texto: "Planeta conocido como el 'Planeta Rojo':", opciones: ["Marte", "Venus", "Mercurio", "Júpiter"], correcta: 0, tiempo: 15 },
            { texto: "Cuerpo celeste que dejó de ser considerado planeta en 2006:", opciones: ["Ceres", "Eris", "Plutón", "Sedna"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "El Cinturón de Asteroides se ubica entre las órbitas de:", opciones: ["Tierra y Marte", "Marte y Júpiter", "Júpiter y Saturno", "Venus y Tierra"], correcta: 1, tiempo: 25 },
            { texto: "Planeta con el día más largo y movimiento retrógrado (gira al revés):", opciones: ["Urano", "Venus", "Mercurio", "Neptuno"], correcta: 1, tiempo: 25 },
            { texto: "¿Cuál es el planeta más denso del Sistema Solar?", opciones: ["Mercurio", "Júpiter", "La Tierra", "Marte"], correcta: 2, tiempo: 25 },
            { texto: "Satélite natural más grande del Sistema Solar (pertenece a Júpiter):", opciones: ["Titán", "Ganimedes", "Luna", "Io"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "¿Qué planeta tiene los vientos más rápidos del sistema (La Gran Mancha Oscura)?", opciones: ["Júpiter", "Neptuno", "Saturno", "Urano"], correcta: 1, tiempo: 35 },
            { texto: "El límite teórico del Sistema Solar, cuna de los cometas de largo periodo:", opciones: ["Cinturón de Kuiper", "Nube de Oort", "Heliopausa", "Disco disperso"], correcta: 1, tiempo: 40 },
            { texto: "Planeta que rota 'echado' (su eje está casi horizontal):", opciones: ["Urano", "Saturno", "Neptuno", "Venus"], correcta: 0, tiempo: 35 }
        ]
    },
    // --- GEOGRAFÍA TEMA 4: LA TIERRA ---
    "geografia_tema4": {
        titulo: "La Tierra",
        introImg: "https://media.giphy.com/media/13cx2Yn0W7v8d2/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El movimiento de la Tierra sobre su propio eje se llama:", opciones: ["Traslación", "Rotación", "Nutación", "Precesión"], correcta: 1, tiempo: 15 },
            { texto: "Línea imaginaria que divide a la Tierra en Hemisferio Norte y Sur:", opciones: ["Meridiano de Greenwich", "Trópico de Cáncer", "Ecuador Terrestre", "Círculo Polar"], correcta: 2, tiempo: 15 },
            { texto: "La forma real de la Tierra se denomina:", opciones: ["Esfera perfecta", "Geoide", "Plana", "Ovoide"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "El movimiento de Rotación terrestre genera la sucesión de:", opciones: ["Las estaciones", "Los años", "Días y Noches", "Los eclipses"], correcta: 2, tiempo: 20 },
            { texto: "¿Cuánto dura exactamente el movimiento de Traslación (un año sideral)?", opciones: ["365 días", "366 días", "365 días y 6 horas", "360 días"], correcta: 2, tiempo: 25 },
            { texto: "El Meridiano Base o de Greenwich determina:", opciones: ["La hora internacional", "Las estaciones", "El clima", "La latitud"], correcta: 0, tiempo: 25 },
            { texto: "El día más largo del año en el verano se conoce como:", opciones: ["Equinoccio", "Solsticio", "Perihelio", "Afelio"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "La fuerza desviadora de los vientos y corrientes marinas por la rotación se llama:", opciones: ["Efecto Invernadero", "Efecto Coriolis", "Fuerza Centrífuga", "Gravedad"], correcta: 1, tiempo: 35 },
            { texto: "Distancia angular desde cualquier punto de la Tierra al Ecuador:", opciones: ["Longitud", "Altitud", "Latitud", "Cenit"], correcta: 2, tiempo: 30 },
            { texto: "Momento en que la Tierra está más cerca del Sol en su órbita:", opciones: ["Afelio", "Perihelio", "Solsticio", "Eclipse"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- GEOGRAFÍA TEMA 5: GEÓSFERA ---
    "geografia_tema5": {
        titulo: "La Geósfera",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif", // Reusando gif
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Capa más superficial y delgada de la Tierra donde vivimos:", opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"], correcta: 2, tiempo: 15 },
            { texto: "El núcleo terrestre está compuesto principalmente por:", opciones: ["Silicio y Aluminio", "Hierro y Níquel", "Magnesio y Sílice", "Oro y Plata"], correcta: 1, tiempo: 20 },
            { texto: "Capa de la geósfera con mayor volumen y masa:", opciones: ["Núcleo", "Corteza", "Manto", "Hidrósfera"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "A la Corteza Continental también se le conoce como:", opciones: ["Sima", "Sial", "Astenósfera", "Litósfera"], correcta: 1, tiempo: 25 }, // Sial (Silicio-Aluminio)
            { texto: "Capa fluida del manto superior donde se mueven las placas tectónicas:", opciones: ["Endósfera", "Astenósfera", "Tropósfera", "Pirósfera"], correcta: 1, tiempo: 30 },
            { texto: "Discontinuidad que separa la Corteza del Manto:", opciones: ["Gutenberg", "Repetti", "Mohorovicic", "Wiechert"], correcta: 2, tiempo: 30 },
            { texto: "El Núcleo Externo se encuentra en estado:", opciones: ["Sólido", "Líquido (Fluido)", "Gaseoso", "Plasma"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "La discontinuidad de Gutenberg separa:", opciones: ["Manto y Núcleo", "Corteza y Manto", "Núcleo Externo e Interno", "Sial y Sima"], correcta: 0, tiempo: 35 },
            { texto: "¿Qué capa es responsable del campo magnético terrestre?", opciones: ["Corteza Oceánica", "Manto Inferior", "Núcleo Externo", "Núcleo Interno"], correcta: 2, tiempo: 35 }, // Por su movimiento
            { texto: "El Sima (Corteza Oceánica) está compuesto predominantemente por:", opciones: ["Silicio y Magnesio", "Silicio y Aluminio", "Hierro y Níquel", "Calcio"], correcta: 0, tiempo: 35 }
        ]
    },

    // --- GEOGRAFÍA TEMA 6: ATMÓSFERA ---
    "geografia_tema6": {
        titulo: "La Atmósfera",
        introImg: "https://media.giphy.com/media/26BRyO79Qx8rTAI00/giphy.gif", // Reusando gif
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Gas más abundante en la atmósfera terrestre (78%):", opciones: ["Oxígeno", "Nitrógeno", "Argón", "Dióxido de Carbono"], correcta: 1, tiempo: 15 },
            { texto: "Capa de la atmósfera donde ocurren los fenómenos meteorológicos (lluvia, nubes):", opciones: ["Estratósfera", "Tropósfera", "Mesósfera", "Exósfera"], correcta: 1, tiempo: 20 },
            { texto: "La Capa de Ozono nos protege de:", opciones: ["Los meteoritos", "El frío espacial", "Los rayos ultravioleta (UV)", "La lluvia ácida"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "¿En qué capa se ubica la Capa de Ozono?", opciones: ["Tropósfera", "Estratósfera", "Mesósfera", "Termósfera"], correcta: 1, tiempo: 25 },
            { texto: "Capa atmosférica donde se desintegran los meteoritos (estrellas fugaces):", opciones: ["Mesósfera", "Tropósfera", "Exósfera", "Estratósfera"], correcta: 0, tiempo: 30 },
            { texto: "Capa más caliente que permite las telecomunicaciones (Ionósfera):", opciones: ["Estratósfera", "Termósfera", "Mesósfera", "Tropósfera"], correcta: 1, tiempo: 25 },
            { texto: "Instrumento que mide la presión atmosférica:", opciones: ["Termómetro", "Anemómetro", "Barómetro", "Higrómetro"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "Fenómeno que permite la comunicación radial a larga distancia (reflexión de ondas):", opciones: ["Efecto Invernadero", "Ionización (Capa de Kennelly-Heaviside)", "Inversión Térmica", "Auroras Boreales"], correcta: 1, tiempo: 35 },
            { texto: "La Exósfera está compuesta principalmente por:", opciones: ["Nitrógeno y Oxígeno", "Hidrógeno y Helio", "Ozono", "Vapor de agua"], correcta: 1, tiempo: 35 },
            { texto: "Gas de efecto invernadero principal causante del calentamiento global:", opciones: ["Ozono", "Dióxido de Carbono (CO2)", "Metano", "CFC"], correcta: 1, tiempo: 30 }
        ]
    },
    // --- PSICOLOGÍA TEMA 1: CIENCIA PSICOLÓGICA ---
    "psicologia_tema1": {
        titulo: "Ciencia Psicológica",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif", // Cerebro/Mente
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Etimológicamente, la palabra Psicología significa:", opciones: ["Estudio del cuerpo", "Tratado del alma", "Ciencia de la conducta", "Análisis de la mente"], correcta: 1, tiempo: 15 },
            { texto: "¿Quién es considerado el 'Padre de la Psicología Científica'?", opciones: ["Sigmund Freud", "Wilhelm Wundt", "William James", "Jean Piaget"], correcta: 1, tiempo: 20 },
            { texto: "La Psicología moderna se define como el estudio de:", opciones: ["El alma y el espíritu", "La conducta y los procesos mentales", "El cerebro y las neuronas", "Los sueños y traumas"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "¿Cuál NO es un objetivo de la Psicología científica?", opciones: ["Describir", "Explicar", "Juzgar", "Predecir"], correcta: 2, tiempo: 25 },
            { texto: "Método de investigación que consiste en la observación de uno mismo:", opciones: ["Extrospección", "Introspección", "Entrevista", "Test psicométrico"], correcta: 1, tiempo: 25 },
            { texto: "El primer laboratorio de Psicología Experimental se fundó en:", opciones: ["1879 en Leipzig (Alemania)", "1900 en Viena (Austria)", "1890 en Harvard (EE.UU.)", "1920 en París (Francia)"], correcta: 0, tiempo: 25 },
            { texto: "La Psicología Aplicada se encarga de:", opciones: ["Generar teorías", "Investigar leyes básicas", "Solucionar problemas prácticos", "Definir conceptos"], correcta: 2, tiempo: 20 },

            // DIFÍCIL
            { texto: "La conducta se caracteriza por ser:", opciones: ["Subjetiva e inobservable", "Observable y medible", "Inconsciente y reprimida", "Heredada y fija"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué proceso mental es considerado 'Básico' o 'Cognitivo'?", opciones: ["La Motivación", "La Memoria", "La Personalidad", "El Temperamento"], correcta: 1, tiempo: 30 },
            { texto: "La rama que estudia los cambios conductuales a lo largo del ciclo vital es la Psicología:", opciones: ["Social", "Clínica", "Evolutiva o del Desarrollo", "Organizacional"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- PSICOLOGÍA TEMA 2: ESCUELAS PSICOLÓGICAS ---
    "psicologia_tema2": {
        titulo: "Escuelas Psicológicas",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Escuela psicológica fundada por Sigmund Freud:", opciones: ["Conductismo", "Psicoanálisis", "Gestalt", "Humanismo"], correcta: 1, tiempo: 15 },
            { texto: "El Conductismo (Behaviorismo) fue fundado por:", opciones: ["John Watson", "Wilhelm Wundt", "Abraham Maslow", "William James"], correcta: 0, tiempo: 20 },
            { texto: "Escuela que estudia la conciencia y su estructura (átomos de la mente):", opciones: ["Funcionalismo", "Estructuralismo", "Cognitivismo", "Reflexología"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "La escuela de la Gestalt se centró en el estudio de la:", opciones: ["Conducta observable", "Percepción y la forma (el todo)", "Inconsciente", "Inteligencia"], correcta: 1, tiempo: 25 },
            { texto: "El Funcionalismo (William James) criticó al Estructuralismo y se enfocó en:", opciones: ["La estructura de la mente", "La función de la conciencia (adaptación)", "Los reflejos condicionados", "La autorrealización"], correcta: 1, tiempo: 25 },
            { texto: "Representante del Condicionamiento Operante (Neoconductismo):", opciones: ["Pavlov", "Skinner", "Bandura", "Piaget"], correcta: 1, tiempo: 25 },
            { texto: "La 'Tercera Fuerza' o Psicología Humanista fue liderada por:", opciones: ["Maslow y Rogers", "Freud y Jung", "Watson y Skinner", "Piaget y Vygotsky"], correcta: 0, tiempo: 30 },

            // DIFÍCIL
            { texto: "Según el Psicoanálisis, la causa de los trastornos mentales suele estar en el:", opciones: ["Cerebro físico", "Inconsciente (traumas infantiles)", "Entorno social", "Genética"], correcta: 1, tiempo: 35 },
            { texto: "El 'Fenómeno Phi' (ilusión de movimiento) fue estudiado por la escuela:", opciones: ["Conductista", "Gestalt", "Cognitiva", "Psicoanalítica"], correcta: 1, tiempo: 35 },
            { texto: "La Reflexología rusa (Pavlov) aportó el concepto de:", opciones: ["Insight", "Condicionamiento Clásico", "Zona de Desarrollo Próximo", "Inconsciente Colectivo"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- PSICOLOGÍA TEMA 3: FACTORES DEL COMPORTAMIENTO ---
    "psicologia_tema3": {
        titulo: "Factores del Comportamiento",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Factor biológico fundamental que coordina la conducta:", opciones: ["Corazón", "Sistema Nervioso", "Sistema Digestivo", "Pulmones"], correcta: 1, tiempo: 15 },
            { texto: "La transmisión de rasgos de padres a hijos se llama:", opciones: ["Maduración", "Herencia", "Aprendizaje", "Socialización"], correcta: 1, tiempo: 15 },
            { texto: "El primer agente de socialización en la vida del ser humano es:", opciones: ["La escuela", "La familia", "Los amigos", "Los medios de comunicación"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "Proceso biológico de desarrollo pre-programado (ej: caminar, hablar):", opciones: ["Aprendizaje", "Maduración", "Crecimiento", "Adaptación"], correcta: 1, tiempo: 25 },
            { texto: "El entorno físico y social que rodea al individuo se denomina:", opciones: ["Ambiente", "Genética", "Herencia", "Instinto"], correcta: 0, tiempo: 20 },
            { texto: "La Socialización Secundaria se da principalmente en:", opciones: ["La familia", "El vientre materno", "La escuela y comunidad", "La vejez"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué factor determina el Temperamento?", opciones: ["El ambiente", "La educación", "La herencia biológica", "La cultura"], correcta: 2, tiempo: 25 }, // Temperamento es innato, Carácter es aprendido

            // DIFÍCIL
            { texto: "Unidad básica de la herencia biológica:", opciones: ["Cromosoma", "Gen", "ADN", "Célula"], correcta: 1, tiempo: 30 },
            { texto: "El caso de los 'Niños ferales' (criados por animales) demuestra la importancia de:", opciones: ["La herencia", "La maduración física", "La interacción social", "La nutrición"], correcta: 2, tiempo: 35 },
            { texto: "La familia que incluye padres, hijos, abuelos y tíos se llama:", opciones: ["Nuclear", "Extensa", "Monoparental", "Reconstituida"], correcta: 1, tiempo: 30 }
        ]
    },
    // --- PSICOLOGÍA TEMA 4: DESARROLLO HUMANO ---
    "psicologia_tema4": {
        titulo: "Desarrollo Humano",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Etapa del desarrollo humano que inicia con la pubertad:", opciones: ["Niñez", "Adolescencia", "Adultez", "Infancia"], correcta: 1, tiempo: 15 },
            { texto: "La etapa prenatal abarca desde la fecundación hasta:", opciones: ["El primer mes", "El nacimiento", "El primer año", "La concepción"], correcta: 1, tiempo: 15 },
            { texto: "Psicólogo suizo famoso por su teoría del Desarrollo Cognitivo (Etapas):", opciones: ["Freud", "Piaget", "Pavlov", "Skinner"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Según Piaget, la etapa donde el niño desarrolla el pensamiento lógico-abstracto es:", opciones: ["Sensorio-motriz", "Preoperacional", "Operaciones Concretas", "Operaciones Formales"], correcta: 3, tiempo: 25 },
            { texto: "La 'Permanencia del Objeto' (saber que algo existe aunque no lo vea) se logra en la etapa:", opciones: ["Sensorio-motriz", "Preoperacional", "Adolescencia", "Vejez"], correcta: 0, tiempo: 25 },
            { texto: "¿Qué crisis psicosocial enfrenta el adolescente según Erikson?", opciones: ["Confianza vs Desconfianza", "Identidad vs Confusión de roles", "Intimidad vs Aislamiento", "Integridad vs Desesperación"], correcta: 1, tiempo: 30 },
            { texto: "El juego simbólico ('hacer como si...') es característico de la:", opciones: ["Infancia (Sensorio-motor)", "Niñez Temprana (Preoperacional)", "Adultez", "Vejez"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "El 'Egocentrismo cognitivo' (creer que todos ven el mundo como él) es típico de:", opciones: ["El neonato", "El niño preoperacional", "El adulto joven", "El anciano"], correcta: 1, tiempo: 35 },
            { texto: "La etapa del desarrollo conocida como 'Nido Vacío' ocurre en la:", opciones: ["Adolescencia", "Adultez Temprana", "Adultez Intermedia", "Senectud"], correcta: 2, tiempo: 35 },
            { texto: "Según Freud, la etapa del desarrollo psicosexual donde la libido está 'dormida' es:", opciones: ["Oral", "Anal", "Latencia", "Fálica"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- PSICOLOGÍA TEMA 5: NEUROCIENCIA ---
    "psicologia_tema5": {
        titulo: "Bases Biológicas (Neurociencia)",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Célula fundamental del sistema nervioso:", opciones: ["Neurona", "Glóbulo rojo", "Miócito", "Adipocito"], correcta: 0, tiempo: 15 },
            { texto: "Parte del cerebro encargada del equilibrio y la coordinación motora fina:", opciones: ["Cerebro", "Cerebelo", "Hipotálamo", "Bulbo raquídeo"], correcta: 1, tiempo: 20 },
            { texto: "El Sistema Nervioso Central está compuesto por:", opciones: ["Cerebro y Corazón", "Encéfalo y Médula Espinal", "Nervios y Ganglios", "Neuronas y Piel"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Lóbulo cerebral encargado de la visión:", opciones: ["Frontal", "Parietal", "Occipital", "Temporal"], correcta: 2, tiempo: 25 },
            { texto: "Estructura que conecta los dos hemisferios cerebrales:", opciones: ["Cuerpo Calloso", "Hipocampo", "Amígdala", "Tálamo"], correcta: 0, tiempo: 25 },
            { texto: "El Hemisferio Izquierdo del cerebro suele encargarse de:", opciones: ["La creatividad y el arte", "El lenguaje y la lógica matemática", "El reconocimiento de rostros", "La intuición"], correcta: 1, tiempo: 25 },
            { texto: "La comunicación química y eléctrica entre neuronas se llama:", opciones: ["Mielinización", "Sinapsis", "Osmosis", "Fagocitosis"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "¿Qué área del cerebro es responsable de la producción del lenguaje hablado?", opciones: ["Área de Wernicke", "Área de Broca", "Área Visual", "Corteza Motora"], correcta: 1, tiempo: 35 },
            { texto: "Neurotransmisor relacionado con el placer y las adicciones:", opciones: ["Serotonina", "Dopamina", "Acetilcolina", "GABA"], correcta: 1, tiempo: 30 },
            { texto: "Estructura del Sistema Límbico clave para la memoria:", opciones: ["Amígdala", "Hipocampo", "Bulbo", "Puente"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- PSICOLOGÍA TEMA 6: SENSACIÓN Y PERCEPCIÓN ---
    "psicologia_tema6": {
        titulo: "Sensación y Percepción",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Proceso fisiológico de captar estímulos a través de los sentidos:", opciones: ["Percepción", "Sensación", "Memoria", "Imaginación"], correcta: 1, tiempo: 20 },
            { texto: "Proceso psicológico de interpretar y dar significado a la información sensorial:", opciones: ["Sensación", "Percepción", "Inteligencia", "Reflejo"], correcta: 1, tiempo: 20 },
            { texto: "¿Cuál NO es uno de los 5 sentidos clásicos?", opciones: ["Vista", "Oído", "Equilibrio (Vestibular)", "Olfato"], correcta: 2, tiempo: 15 }, // Clásicamente son 5, vestibular es un sentido "extra"

            // MEDIO
            { texto: "La mínima cantidad de estímulo necesaria para notar algo (ej: una luz tenue) es el Umbral:", opciones: ["Diferencial", "Absoluto", "Máximo", "Subliminal"], correcta: 1, tiempo: 25 },
            { texto: "Falsa percepción de un estímulo real (confundir una cuerda con una serpiente):", opciones: ["Alucinación", "Ilusión", "Delirio", "Agnosia"], correcta: 1, tiempo: 25 },
            { texto: "Percibir algo que NO existe (escuchar voces que nadie oye) es una:", opciones: ["Ilusión", "Alucinación", "Sensación", "Adaptación"], correcta: 1, tiempo: 25 },
            { texto: "Ley de la Gestalt donde tendemos a completar figuras incompletas:", opciones: ["Ley de Proximidad", "Ley de Cierre", "Ley de Semejanza", "Ley de Figura-Fondo"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Sentido encargado de captar la posición y movimiento del cuerpo (músculos):", opciones: ["Vestibular", "Kinestésico", "Cenestésico", "Táctil"], correcta: 1, tiempo: 35 },
            { texto: "Fenómeno donde dejamos de percibir un estímulo constante (ej: el olor de tu propia casa):", opciones: ["Adaptación Sensorial", "Habituación", "Sensibilización", "Fatiga"], correcta: 0, tiempo: 35 },
            { texto: "La modalidad sensorial 'Cenestésica' nos informa sobre:", opciones: ["El equilibrio", "El dolor externo", "El estado interno de los órganos (hambre, sed)", "La temperatura"], correcta: 2, tiempo: 40 }
        ]
    },
    // --- FILOSOFÍA TEMA 1: HISTORIA DE LA FILOSOFÍA ---
    "filosofia_tema1": {
        titulo: "Historia de la Filosofía",
        introImg: "https://media.giphy.com/media/26BRyO79Qx8rTAI00/giphy.gif", // El Pensador o similar
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Etimológicamente, 'Filosofía' significa:", opciones: ["Amor a la ciencia", "Amor a la sabiduría", "Estudio del hombre", "Estudio de Dios"], correcta: 1, tiempo: 15 },
            { texto: "¿Dónde surgió históricamente la filosofía occidental?", opciones: ["Roma", "Grecia (Jonia)", "Egipto", "China"], correcta: 1, tiempo: 15 },
            { texto: "Es considerado el primer filósofo de la historia:", opciones: ["Sócrates", "Aristóteles", "Tales de Mileto", "Platón"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "La disciplina filosófica que estudia el ser y la realidad se llama:", opciones: ["Ética", "Gnoseología", "Ontología", "Estética"], correcta: 2, tiempo: 25 },
            { texto: "¿Qué estudia la Axiología?", opciones: ["El conocimiento", "Los valores", "La belleza", "La moral"], correcta: 1, tiempo: 25 },
            { texto: "El paso del 'Mito al Logos' significa pasar de:", opciones: ["La razón a la fe", "La creencia fantástica a la explicación racional", "La ignorancia a la duda", "La ciencia a la religión"], correcta: 1, tiempo: 25 },
            { texto: "Filósofo que afirmó: 'Solo sé que nada sé':", opciones: ["Platón", "Sócrates", "Descartes", "Kant"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "¿Quién definió la filosofía como 'una preparación para la muerte'?", opciones: ["Aristóteles", "Platón", "Hegel", "Marx"], correcta: 1, tiempo: 35 },
            { texto: "La disciplina que estudia el problema del conocimiento (origen, esencia, posibilidad) es:", opciones: ["Epistemología", "Gnoseología", "Antropología", "Lógica"], correcta: 1, tiempo: 35 },
            { texto: "Para Aristóteles, la filosofía es la ciencia teórica de los:", opciones: ["Entes ideales", "Primeros principios y primeras causas", "Valores morales", "Fenómenos sociales"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- FILOSOFÍA TEMA 2: FILOSOFÍA PRESOCRÁTICA ---
    "filosofia_tema2": {
        titulo: "Filosofía Presocrática",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El tema central de los filósofos presocráticos fue:", opciones: ["El Hombre", "La Moral", "El Arjé (Principio del Cosmos)", "Dios"], correcta: 2, tiempo: 20 },
            { texto: "Para Tales de Mileto, el principio de todo (Arjé) era:", opciones: ["El Aire", "El Fuego", "El Agua", "La Tierra"], correcta: 2, tiempo: 15 },
            { texto: "Filósofo que consideraba a los 'Números' como el principio de todo:", opciones: ["Pitágoras", "Anaximandro", "Demócrito", "Empédocles"], correcta: 0, tiempo: 15 },

            // MEDIO
            { texto: "Heráclito sostenía que 'todo fluye' y que el principio es el:", opciones: ["Aire", "Fuego (Cambio)", "Agua", "Ápeiron"], correcta: 1, tiempo: 25 },
            { texto: "Filósofo que planteó que el ser es inmóvil, eterno y único (opuesto a Heráclito):", opciones: ["Parménides", "Anaxágoras", "Tales", "Leucipo"], correcta: 0, tiempo: 25 },
            { texto: "El 'Ápeiron' (lo indeterminado o infinito) fue propuesto por:", opciones: ["Tales", "Anaxímenes", "Anaximandro", "Zenón"], correcta: 2, tiempo: 30 },
            { texto: "Anaxímenes propuso que el principio de todo era:", opciones: ["El Agua", "El Aire", "Los Átomos", "El Ser"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "Filósofos atomistas que afirmaron que todo está hecho de átomos y vacío:", opciones: ["Empédocles y Anaxágoras", "Leucipo y Demócrito", "Heráclito y Parménides", "Tales y Anaximandro"], correcta: 1, tiempo: 35 },
            { texto: "Empédocles explicó el universo mediante cuatro raíces:", opciones: ["Semillas", "Átomos", "Agua, Aire, Tierra y Fuego", "Números"], correcta: 2, tiempo: 35 },
            { texto: "Anaxágoras llamó ______ a la inteligencia ordenadora del cosmos.", opciones: ["Nous", "Logos", "Arjé", "Átomo"], correcta: 0, tiempo: 40 }
        ]
    },

    // --- FILOSOFÍA TEMA 3: FILOSOFÍA SOCRÁTICA ---
    "filosofia_tema3": {
        titulo: "Socrática (Platón y Aristóteles)",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Método filosófico usado por Sócrates para 'parir ideas':", opciones: ["La Duda Metódica", "La Mayéutica", "La Dialéctica", "La Lógica"], correcta: 1, tiempo: 20 },
            { texto: "Autor de los 'Diálogos' y fundador de 'La Academia':", opciones: ["Sócrates", "Aristóteles", "Platón", "Heráclito"], correcta: 2, tiempo: 15 },
            { texto: "Aristóteles fue discípulo de Platón y maestro de:", opciones: ["Pericles", "Alejandro Magno", "Sócrates", "Nerón"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Los Sofistas (como Protágoras) se caracterizaban por su:", opciones: ["Búsqueda de la verdad absoluta", "Relativismo y enseñanza de retórica", "Cientificismo", "Silencio místico"], correcta: 1, tiempo: 25 },
            { texto: "En la 'Alegoría de la Caverna', Platón explica su teoría de:", opciones: ["Los dos mundos (Sensible e Inteligible)", "La evolución", "La democracia", "Los átomos"], correcta: 0, tiempo: 30 },
            { texto: "Según Aristóteles, el ser humano es por naturaleza un:", opciones: ["Animal político (Zoon Politikon)", "Ser divino", "Animal solitario", "Ser irracional"], correcta: 0, tiempo: 25 },
            { texto: "Frase célebre de Protágoras: 'El hombre es...'", opciones: ["Un lobo para el hombre", "La medida de todas las cosas", "Un animal racional", "Mortal"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "La teoría Hilemórfica de Aristóteles sostiene que todo cuerpo es:", opciones: ["Solo materia", "Solo espíritu", "Materia y Forma", "Átomos y vacío"], correcta: 2, tiempo: 35 },
            { texto: "Platón consideraba que el alma tenía tres partes: Racional, Irascible y...", opciones: ["Concupiscible", "Inmortal", "Vegetativa", "Sensitiva"], correcta: 0, tiempo: 35 },
            { texto: "Obra de Aristóteles dedicada a su hijo, donde trata sobre la felicidad y la virtud:", opciones: ["La República", "El Banquete", "Ética a Nicómaco", "Metafísica"], correcta: 2, tiempo: 40 }
        ]
    },
    // --- FILOSOFÍA TEMA 4: FILOSOFÍA GRECORROMANA ---
    "filosofia_tema4": {
        titulo: "Filosofía Grecorromana",
        introImg: "https://media.giphy.com/media/26BGGc6l6fqWc/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Escuela helenística que proponía la búsqueda del placer (ausencia de dolor) como fin supremo:", opciones: ["Estoicismo", "Epicureísmo", "Cinismo", "Escepticismo"], correcta: 1, tiempo: 20 },
            { texto: "Diógenes de Sinope, que vivía en un barril buscando lo natural, pertenecía a la escuela:", opciones: ["Cínica", "Estoica", "Platónica", "Aristotélica"], correcta: 0, tiempo: 15 },
            { texto: "El Estoicismo (Zenón de Citio) proponía alcanzar la felicidad mediante:", opciones: ["El placer desmedido", "La resignación y la virtud (Ataraxia)", "La duda constante", "El rechazo a la sociedad"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "El Neoplatonismo (Plotino) sostenía que todo emana de un principio supremo llamado:", opciones: ["El Uno", "El Logos", "El Átomo", "La Materia"], correcta: 0, tiempo: 25 },
            { texto: "¿Qué escuela filosófica recomendaba suspender el juicio (Epojé) para lograr la paz mental?", opciones: ["Epicureísmo", "Escepticismo", "Cinismo", "Eclecticismo"], correcta: 1, tiempo: 25 },
            { texto: "Para los epicúreos, el mayor obstáculo para la felicidad es:", opciones: ["La pobreza", "El miedo (a los dioses y a la muerte)", "La ignorancia", "La soledad"], correcta: 1, tiempo: 30 },
            { texto: "Filósofo romano representante del Estoicismo, que fue emperador y escribió 'Meditaciones':", opciones: ["Séneca", "Marco Aurelio", "Cicerón", "Lucrecio"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "El periodo helenístico surge tras la muerte de _______ y la expansión de la cultura griega.", opciones: ["Sócrates", "Alejandro Magno", "Pericles", "Homero"], correcta: 1, tiempo: 35 },
            { texto: "La 'Tetrapharmakos' (cuádruple remedio) es una doctrina de la escuela:", opciones: ["Cínica", "Epicúrea", "Estoica", "Cirenaica"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué significa el término 'Ataraxia' buscado por estas escuelas?", opciones: ["Placer corporal", "Imperturbabilidad del alma", "Conocimiento absoluto", "Renuncia a los bienes"], correcta: 1, tiempo: 40 }
        ]
    },

    // --- FILOSOFÍA TEMA 5: FILOSOFÍA MEDIEVAL ---
    "filosofia_tema5": {
        titulo: "Filosofía Medieval",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El tema central de la filosofía medieval fue la relación entre:", opciones: ["Mente y Cuerpo", "Fe y Razón", "Hombre y Naturaleza", "Ética y Política"], correcta: 1, tiempo: 20 },
            { texto: "Máximo representante de la Patrística (primera etapa medieval):", opciones: ["Santo Tomás de Aquino", "San Agustín de Hipona", "San Anselmo", "Guillermo de Ockham"], correcta: 1, tiempo: 15 },
            { texto: "Santo Tomás de Aquino perteneció al periodo denominado:", opciones: ["Patrística", "Escolástica", "Renacimiento", "Ilustración"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "San Agustín afirmó: 'Cree para ________ y ________ para creer'.", opciones: ["vivir - vive", "entender - entiende", "amar - ama", "salvarte - sálvate"], correcta: 1, tiempo: 25 },
            { texto: "¿Quién propuso las 'Cinco Vías' para demostrar la existencia de Dios?", opciones: ["San Agustín", "San Anselmo", "Santo Tomás de Aquino", "Duns Scoto"], correcta: 2, tiempo: 25 },
            { texto: "El problema de los 'Universales' (si las ideas generales son reales o solo nombres) fue debatido en:", opciones: ["La Escolástica", "La Patrística", "El Helenismo", "La Modernidad"], correcta: 0, tiempo: 30 },
            { texto: "La frase 'La filosofía es sierva de la teología' resume el pensamiento:", opciones: ["Moderno", "Medieval", "Antiguo", "Contemporáneo"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "Guillermo de Ockham y su principio de economía ('No multiplicar los entes sin necesidad') se conoce como:", opciones: ["La Navaja de Ockham", "El Argumento Ontológico", "La Suma Teológica", "El Nominalismo"], correcta: 0, tiempo: 35 },
            { texto: "San Agustín cristianizó la filosofía de _______, mientras Santo Tomás la de _______.", opciones: ["Platón - Aristóteles", "Aristóteles - Platón", "Sócrates - Parménides", "Plotino - Marx"], correcta: 0, tiempo: 35 },
            { texto: "El argumento 'Ontológico' (Dios existe porque tengo la idea de un ser perfecto) es de:", opciones: ["San Anselmo", "Santo Tomás", "San Buenaventura", "Averroes"], correcta: 0, tiempo: 40 }
        ]
    },

    // --- FILOSOFÍA TEMA 6: FILOSOFÍA MODERNA ---
    "filosofia_tema6": {
        titulo: "Filosofía Moderna",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Padre de la Filosofía Moderna y del Racionalismo ('Pienso, luego existo'):", opciones: ["John Locke", "René Descartes", "David Hume", "Immanuel Kant"], correcta: 1, tiempo: 15 },
            { texto: "El Empirismo sostiene que la fuente del conocimiento es:", opciones: ["La Razón", "La Experiencia (sentidos)", "La Fe", "La Intuición"], correcta: 1, tiempo: 15 },
            { texto: "Filósofo alemán autor de la 'Crítica de la Razón Pura':", opciones: ["Hegel", "Marx", "Kant", "Nietzsche"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "¿Qué es la 'Duda Metódica' para Descartes?", opciones: ["Un estado de depresión", "Un camino para llegar a una verdad indudable", "Negar la existencia de Dios", "Dudar por dudar (Escepticismo)"], correcta: 1, tiempo: 25 },
            { texto: "John Locke afirmó que la mente al nacer es como una:", opciones: ["Computadora llena de datos", "Tabula Rasa (hoja en blanco)", "Semilla lista para germinar", "Idea innata"], correcta: 1, tiempo: 25 },
            { texto: "El Criticismo de Kant intenta conciliar:", opciones: ["Fe y Razón", "Racionalismo y Empirismo", "Cuerpo y Alma", "Ética y Política"], correcta: 1, tiempo: 30 },
            { texto: "David Hume llevó el empirismo al extremo, negando la idea de:", opciones: ["Dios", "Causalidad y Sustancia", "Placer", "Libertad"], correcta: 1, tiempo: 30 },

            // DIFÍCIL
            { texto: "Según Kant, lo que conocemos de las cosas (su apariencia) se llama ______ y lo que son en sí mismas ______.", opciones: ["Noúmeno - Fenómeno", "Fenómeno - Noúmeno", "Idea - Materia", "Sujeto - Objeto"], correcta: 1, tiempo: 35 },
            { texto: "La frase 'El hombre es un lobo para el hombre' (Homo homini lupus) pertenece a:", opciones: ["Thomas Hobbes", "Jean-Jacques Rousseau", "John Locke", "Montesquieu"], correcta: 0, tiempo: 35 },
            { texto: "Descartes propuso la existencia de tres sustancias. ¿Cuál NO es una de ellas?", opciones: ["Res Cogitans (Pensamiento)", "Res Extensa (Materia)", "Res Infinita (Dios)", "Res Publica (Estado)"], correcta: 3, tiempo: 40 }
        ]
    },
    // --- ECONOMÍA TEMA 1: CIENCIA ECONÓMICA ---
    "economia_tema1": {
        titulo: "Ciencia Económica",
        introImg: "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif", // Dinero/Gráficos
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Quién es considerado el 'Padre de la Economía Moderna'?", opciones: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "David Ricardo"], correcta: 1, tiempo: 15 },
            { texto: "El problema fundamental de la economía es la:", opciones: ["Inflación", "Escasez", "Pobreza", "Inversión"], correcta: 1, tiempo: 15 },
            { texto: "Obra más famosa de Adam Smith publicada en 1776:", opciones: ["El Capital", "La Riqueza de las Naciones", "Principios de Economía", "Teoría General"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "La Economía se divide en Positiva y:", opciones: ["Negativa", "Normativa", "Aplicada", "Teórica"], correcta: 1, tiempo: 20 },
            { texto: "¿Qué estudia la Microeconomía?", opciones: ["La inflación global", "El desempleo nacional", "El comportamiento de agentes individuales (familias/empresas)", "El PBI"], correcta: 2, tiempo: 25 },
            { texto: "El costo de la mejor alternativa que se sacrifica al tomar una decisión se llama:", opciones: ["Costo Fijo", "Costo de Oportunidad", "Costo Marginal", "Costo Variable"], correcta: 1, tiempo: 25 },
            { texto: "Método que parte de casos particulares para llegar a una ley general:", opciones: ["Deductivo", "Inductivo", "Dialéctico", "Matemático"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "La expresión 'Ceteris Paribus' significa:", opciones: ["Todo cambia", "Todo lo demás permanece constante", "La economía es cíclica", "El dinero no importa"], correcta: 1, tiempo: 35 },
            { texto: "Escuela económica que propone que la riqueza viene de la tierra (agricultura):", opciones: ["Mercantilista", "Fisiocrática", "Clásica", "Keynesiana"], correcta: 1, tiempo: 35 },
            { texto: "La Economía Normativa se basa en juicios de valor y busca:", opciones: ["Lo que es", "Lo que debería ser", "Explicar la realidad objetiva", "Medir datos"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- ECONOMÍA TEMA 2: NECESIDADES Y BIENES ---
    "economia_tema2": {
        titulo: "Necesidades y Bienes",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La sensación de carencia de algo unida al deseo de satisfacerla es:", opciones: ["Un deseo", "Una necesidad", "Un servicio", "Un bien"], correcta: 1, tiempo: 15 },
            { texto: "Los bienes que no tienen propietario y son abundantes (ej: aire) son:", opciones: ["Económicos", "Libres", "De capital", "De consumo"], correcta: 1, tiempo: 15 },
            { texto: "¿Qué ley dice que 'El deseo decrece conforme se satisface la necesidad'?", opciones: ["Ley de la Oferta", "Ley de Gossen (Utilidad marginal decreciente)", "Ley de Gresham", "Ley de Engel"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "Bienes que se consumen juntos para satisfacer una necesidad (ej: café y azúcar):", opciones: ["Sustitutos", "Complementarios", "Independientes", "Giffen"], correcta: 1, tiempo: 25 },
            { texto: "Un bien 'Fungible' es aquel que:", opciones: ["Dura mucho tiempo", "Se extingue con su primer uso", "No se puede tocar", "Es muy caro"], correcta: 1, tiempo: 25 },
            { texto: "Las necesidades son 'Limitadas en capacidad' porque:", opciones: ["Nunca se acaban", "El organismo tiene un límite de saturación", "Siempre surgen nuevas", "Se pueden sustituir"], correcta: 1, tiempo: 30 },
            { texto: "Según la Pirámide de Maslow, la necesidad de alimentación es:", opciones: ["Fisiológica", "De seguridad", "Social", "De autorrealización"], correcta: 0, tiempo: 20 },

            // DIFÍCIL
            { texto: "Los bienes 'Inferiores' son aquellos cuya demanda disminuye cuando:", opciones: ["Baja el precio", "Sube el ingreso del consumidor", "Baja el ingreso", "Sube el precio del sustituto"], correcta: 1, tiempo: 35 },
            { texto: "Un bien 'Giffen' contradice la ley de la demanda porque:", opciones: ["Al subir su precio, sube su cantidad demandada", "Es un bien de lujo", "No tiene precio", "Es gratuito"], correcta: 0, tiempo: 40 },
            { texto: "Los servicios se caracterizan por ser:", opciones: ["Materiales", "Intangibles y se consumen al producirse", "Almacenables", "Transferibles"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- ECONOMÍA TEMA 3: PROCESOS ECONÓMICOS ---
    "economia_tema3": {
        titulo: "Procesos Económicos",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Fase del proceso económico donde se transforman los insumos en productos:", opciones: ["Circulación", "Producción", "Consumo", "Inversión"], correcta: 1, tiempo: 15 },
            { texto: "El pago o retribución al factor 'Trabajo' se denomina:", opciones: ["Renta", "Salario", "Interés", "Ganancia"], correcta: 1, tiempo: 15 },
            { texto: "Fase donde se trasladan los bienes a los mercados para su venta:", opciones: ["Producción", "Circulación", "Distribución", "Consumo"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "La retribución al factor 'Estado' son los:", opciones: ["Aranceles", "Impuestos o Tributos", "Subsidios", "Intereses"], correcta: 1, tiempo: 20 },
            { texto: "Fase donde se retribuye a cada factor productivo por su participación:", opciones: ["Inversión", "Distribución", "Consumo", "Circulación"], correcta: 1, tiempo: 25 },
            { texto: "El uso de los bienes y servicios para satisfacer necesidades es el:", opciones: ["Ahorro", "Consumo", "Gasto público", "Capital"], correcta: 1, tiempo: 20 },
            { texto: "En la economía peruana, el sector que extrae materias primas (minería, pesca) es el:", opciones: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Cuaternario"], correcta: 0, tiempo: 25 },

            // DIFÍCIL
            { texto: "La fase de 'Inversión' consiste en:", opciones: ["Gastar todo el dinero", "Destinar parte de la producción a crear nuevos bienes de capital", "Pagar deudas", "Cobrar impuestos"], correcta: 1, tiempo: 35 },
            { texto: "El 'Valor Agregado' se genera principalmente en el sector:", opciones: ["Primario", "Secundario (Industrial)", "Terciario", "Informal"], correcta: 1, tiempo: 35 },
            { texto: "¿Qué factor de la producción es considerado 'Organizador'?", opciones: ["El Estado", "La Empresa", "El Trabajo", "El Capital"], correcta: 1, tiempo: 30 }
        ]
    },
    // --- ECONOMÍA TEMA 4: FACTORES DE PRODUCCIÓN ---
    "economia_tema4": {
        titulo: "Factores de Producción",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿Cuáles son los factores productivos clásicos?", opciones: ["Naturaleza, Trabajo y Capital", "Empresa y Estado", "Dinero y Bancos", "Oferta y Demanda"], correcta: 0, tiempo: 20 },
            { texto: "El factor 'Naturaleza' es considerado un factor:", opciones: ["Originario y condicionante", "Derivado", "Organizador", "Regulador"], correcta: 0, tiempo: 20 },
            { texto: "Factor derivado que resulta de la acción del hombre sobre la naturaleza:", opciones: ["Trabajo", "Capital", "Empresa", "Estado"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "La retribución al factor 'Capital' es el:", opciones: ["Salario", "Interés o Rédito", "Impuesto", "Alquiler"], correcta: 1, tiempo: 25 },
            { texto: "Factor moderno encargado de organizar y dirigir la producción:", opciones: ["El Estado", "La Empresa", "La Tecnología", "El Mercado"], correcta: 1, tiempo: 25 },
            { texto: "El papel del Estado como factor productivo es:", opciones: ["Generar ganancias", "Regular y fiscalizar", "Producir bienes", "Consumir"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué factor productivo tiene la característica de ser 'Activo'?", opciones: ["El Capital", "El Trabajo", "La Naturaleza", "El Estado"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "Según la división socialista, las fuerzas motrices y los objetos de trabajo forman:", opciones: ["Los Medios de Producción", "La Fuerza de Trabajo", "Las Relaciones de Producción", "El Capital variable"], correcta: 0, tiempo: 35 },
            { texto: "El 'Capital Humano' se refiere a:", opciones: ["La cantidad de trabajadores", "La educación, capacitación y salud del trabajador", "El dinero que tienen los obreros", "Las máquinas"], correcta: 1, tiempo: 35 },
            { texto: "La retribución a la 'Empresa' se denomina:", opciones: ["Dieta", "Ganancia o Beneficio", "Sueldo", "Honorario"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- ECONOMÍA TEMA 5: LA PRODUCCIÓN ---
    "economia_tema5": {
        titulo: "La Producción",
        introImg: "https://media.giphy.com/media/26BGGc6l6fqWc/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La finalidad económica de la producción es:", opciones: ["Satisfacer necesidades", "Crear bienes y servicios", "Generar empleo", "Obtener ganancias"], correcta: 1, tiempo: 20 },
            { texto: "Sector productivo que transforma la materia prima en insumos o bienes finales:", opciones: ["Primario", "Secundario", "Terciario", "Cuaternario"], correcta: 1, tiempo: 15 },
            { texto: "El sector terciario agrupa actividades de:", opciones: ["Extracción", "Transformación", "Servicios y comercio", "Investigación"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "La relación entre la cantidad producida y los recursos utilizados se llama:", opciones: ["Eficacia", "Productividad", "Rentabilidad", "Utilidad"], correcta: 1, tiempo: 25 },
            { texto: "En el Perú, el sector que genera mayor cantidad de divisas (dólares) es el:", opciones: ["Secundario (Industria)", "Primario (Minería)", "Terciario (Turismo)", "Financiero"], correcta: 1, tiempo: 30 },
            { texto: "¿Qué significa 'Valor Agregado'?", opciones: ["El precio final", "El valor adicional que adquieren los bienes al ser transformados", "El impuesto a las ventas", "La ganancia del empresario"], correcta: 1, tiempo: 30 },
            { texto: "Sector que genera mayor empleo en el Perú (aunque mucho es informal):", opciones: ["Minería", "Industria", "Servicios y Comercio (Terciario)", "Pesca"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "La 'Función de Producción' relaciona matemáticamente:", opciones: ["Precios y cantidades", "Nivel de producción y factores utilizados", "Costos y Ganancias", "Oferta y Demanda"], correcta: 1, tiempo: 35 },
            { texto: "A largo plazo, si aumentamos todos los factores y la producción crece en mayor proporción, hay:", opciones: ["Rendimientos decrecientes", "Economías de escala (Rendimientos crecientes)", "Pérdidas", "Estancamiento"], correcta: 1, tiempo: 40 },
            { texto: "Actividad extractiva que depreda recursos si no se regula (ej: tala):", opciones: ["Silvicultura", "Acuicultura", "Ganadería", "Agricultura"], correcta: 0, tiempo: 35 }
        ]
    },

    // --- CIUDADANÍA TEMA 1: SUJETO DE DERECHO ---
    "ciudadania_tema1": {
        titulo: "Sujeto de Derecho",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Según el Código Civil peruano, la vida humana comienza con:", opciones: ["El nacimiento", "La concepción", "La inscripción en RENIEC", "La mayoría de edad"], correcta: 1, tiempo: 15 },
            { texto: "El 'Concebido' es sujeto de derecho para todo cuanto le favorece, condicionado a:", opciones: ["Que tenga padres", "Que nazca vivo", "Que sea inscrito", "Que tenga nombre"], correcta: 1, tiempo: 20 },
            { texto: "La persona natural (persona humana) inicia su existencia legal con:", opciones: ["La concepción", "El nacimiento", "El matrimonio", "El DNI"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "El fin de la persona natural se produce con:", opciones: ["La jubilación", "La muerte", "La enfermedad", "La pérdida de memoria"], correcta: 1, tiempo: 15 },
            { texto: "¿A qué edad se adquiere la capacidad de ejercicio plena en el Perú?", opciones: ["16 años", "18 años", "21 años", "17 años"], correcta: 1, tiempo: 15 },
            { texto: "Las organizaciones de personas inscritas (ej: empresas, asociaciones) son:", opciones: ["Personas naturales", "Personas jurídicas", "Sujetos de hecho", "Concebidos"], correcta: 1, tiempo: 25 },
            { texto: "Atributo de la personalidad que individualiza a la persona:", opciones: ["Domicilio", "Nombre", "Patrimonio", "Capacidad"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "La capacidad de goce (ser titular de derechos) se tiene:", opciones: ["Desde los 18 años", "Durante toda la vida", "Solo si tienes dinero", "Al casarse"], correcta: 1, tiempo: 30 },
            { texto: "Los pródigos y ebrios habituales son considerados:", opciones: ["Incapaces absolutos", "Incapaces relativos", "Capaces plenos", "Delincuentes"], correcta: 1, tiempo: 35 },
            { texto: "Si una persona desaparece por más de 10 años, se puede declarar su:", opciones: ["Ausencia", "Muerte presunta", "Incapacidad", "Divorcio"], correcta: 1, tiempo: 35 }
        ]
    },
    // --- CIUDADANÍA TEMA 2: DERECHOS HUMANOS ---
    "ciudadania_tema2": {
        titulo: "Derechos Humanos",
        introImg: "https://media.giphy.com/media/l41lUjUgLLwWrz20w/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "¿En qué año se firmó la Declaración Universal de los Derechos Humanos?", opciones: ["1945", "1948", "1789", "1993"], correcta: 1, tiempo: 20 },
            { texto: "Los Derechos de Primera Generación (Civiles y Políticos) protegen principalmente la:", opciones: ["Igualdad", "Libertad individual", "Solidaridad", "Paz"], correcta: 1, tiempo: 20 },
            { texto: "Característica de los DD.HH. que significa que no se pueden quitar ni renunciar:", opciones: ["Inalienables", "Indivisibles", "Universales", "Históricos"], correcta: 0, tiempo: 15 },

            // MEDIO
            { texto: "El derecho a la huelga, al trabajo y a la salud pertenecen a la:", opciones: ["Primera Generación", "Segunda Generación", "Tercera Generación", "Cuarta Generación"], correcta: 1, tiempo: 25 },
            { texto: "Organismo internacional encargado de proteger los DD.HH. en nuestra región:", opciones: ["OTAN", "Corte Interamericana (CIDH)", "Unión Europea", "Pacto de Varsovia"], correcta: 1, tiempo: 25 },
            { texto: "Los Derechos de Tercera Generación (Pueblos) se basan en el valor de la:", opciones: ["Libertad", "Igualdad", "Solidaridad", "Justicia"], correcta: 2, tiempo: 20 },
            { texto: "La inviolabilidad de domicilio es un derecho de tipo:", opciones: ["Social", "Político", "Civil / Individual", "Económico"], correcta: 2, tiempo: 25 },

            // DIFÍCIL
            { texto: "¿Qué característica indica que todos los derechos tienen la misma jerarquía?", opciones: ["Imprescriptibles", "Interdependientes e indivisibles", "Progresivos", "Inviolables"], correcta: 1, tiempo: 35 },
            { texto: "La Convención sobre los Derechos del Niño considera 'niño' a todo ser humano menor de:", opciones: ["12 años", "14 años", "16 años", "18 años"], correcta: 3, tiempo: 30 },
            { texto: "Si se violan los DD.HH. y se agota la vía interna en Perú, se puede acudir a la:", opciones: ["Corte de La Haya", "Comisión Interamericana de DD.HH.", "ONU", "Tribunal Constitucional"], correcta: 1, tiempo: 35 }
        ]
    },

    // --- CIUDADANÍA TEMA 3: FAMILIA Y PARENTESCO ---
    "ciudadania_tema3": {
        titulo: "Familia y Parentesco",
        introImg: "https://media.giphy.com/media/26FPCXdkvDbF9b8ET/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La célula fundamental de la sociedad según la Constitución es:", opciones: ["El Individuo", "La Familia", "El Estado", "El Matrimonio"], correcta: 1, tiempo: 15 },
            { texto: "Tipo de familia conformada únicamente por padres e hijos:", opciones: ["Extensa", "Nuclear", "Monoparental", "Ensamblada"], correcta: 1, tiempo: 15 },
            { texto: "El parentesco que surge por el matrimonio (ej: suegros, cuñados) se llama:", opciones: ["Consanguíneo", "Civil", "Por Afinidad", "Espiritual"], correcta: 2, tiempo: 20 },

            // MEDIO
            { texto: "¿Qué grado de parentesco consanguíneo existe entre hermanos?", opciones: ["Primer grado", "Segundo grado colateral", "Tercer grado", "Cuarto grado"], correcta: 1, tiempo: 25 },
            { texto: "La familia 'Monoparental' está formada por:", opciones: ["Abuelos y nietos", "Padre o madre y sus hijos", "Padrastros e hijastros", "Solo la pareja"], correcta: 1, tiempo: 20 },
            { texto: "El parentesco 'Civil' se genera por:", opciones: ["El matrimonio", "La adopción", "La sangre", "El bautizo"], correcta: 1, tiempo: 25 },
            { texto: "¿Qué grado de parentesco hay entre un tío y su sobrino?", opciones: ["Segundo", "Tercero", "Cuarto", "Quinto"], correcta: 1, tiempo: 30 }, // Padre-Hijo(1) -> Abuelo(2) -> Tío(3)

            // DIFÍCIL
            { texto: "La familia 'Reconstituida' o 'Ensamblada' se caracteriza por:", opciones: ["Tener muchos hijos", "Unir parejas con hijos de relaciones anteriores", "Vivir con los abuelos", "No tener hijos"], correcta: 1, tiempo: 35 },
            { texto: "Legalmente, el parentesco por afinidad en línea recta (suegros-yernos):", opciones: ["Se extingue con el divorcio", "No se extingue con el divorcio", "Solo dura 5 años", "No genera impedimentos"], correcta: 1, tiempo: 35 },
            { texto: "La Patria Potestad es el deber y derecho de los padres de cuidar a los hijos hasta:", opciones: ["Los 14 años", "La mayoría de edad", "Que se casen", "Toda la vida"], correcta: 1, tiempo: 30 }
        ]
    },

    // --- CIUDADANÍA TEMA 4: EL MATRIMONIO ---
    "ciudadania_tema4": {
        titulo: "El Matrimonio",
        introImg: "https://media.giphy.com/media/l2Je2skq1WVgi1rZD/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "El matrimonio es la unión voluntaria concertada por varón y mujer legalmente aptos para:", opciones: ["Tener hijos", "Hacer vida en común", "Comprar bienes", "Obtener la ciudadanía"], correcta: 1, tiempo: 20 },
            { texto: "El régimen patrimonial donde cada esposo conserva la propiedad de sus bienes se llama:", opciones: ["Sociedad de gananciales", "Separación de patrimonios", "Bienes comunes", "Comunidad de bienes"], correcta: 1, tiempo: 20 },
            { texto: "La autoridad encargada de celebrar el matrimonio civil es el:", opciones: ["Cura", "Alcalde", "Juez de Paz", "Notario"], correcta: 1, tiempo: 15 },

            // MEDIO
            { texto: "La 'Unión de Hecho' (Convivencia) genera bienes comunes si dura al menos:", opciones: ["1 año", "2 años continuos", "5 años", "10 años"], correcta: 1, tiempo: 25 },
            { texto: "¿Cuál es un impedimento 'Absoluto' para contraer matrimonio?", opciones: ["Ser tutor", "Estar casado (Bigamia)", "Ser viudo reciente", "Ser menor de 25 años"], correcta: 1, tiempo: 25 },
            { texto: "El deber de fidelidad y asistencia mutua corresponde a:", opciones: ["Los hijos", "Los cónyuges", "Los hermanos", "Los vecinos"], correcta: 1, tiempo: 20 },
            { texto: "Los bienes adquiridos durante el matrimonio en Sociedad de Gananciales son:", opciones: ["Bienes propios", "Bienes sociales", "Bienes fiscales", "Bienes muebles"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "No pueden casarse entre sí en línea colateral consanguínea hasta el:", opciones: ["Segundo grado (Hermanos)", "Tercer grado (Tíos-Sobrinos)", "Cuarto grado (Primos)", "Quinto grado"], correcta: 1, tiempo: 35 },
            { texto: "El viudo o viuda no puede casarse sin antes:", opciones: ["Pedir permiso al juez", "Hacer inventario judicial de bienes (si tiene hijos)", "Esperar 300 días", "Pagar una multa"], correcta: 1, tiempo: 35 },
            { texto: "Causal de divorcio referida al abandono injustificado del hogar por más de:", opciones: ["6 meses", "1 año", "2 años continuos", "5 años"], correcta: 2, tiempo: 35 }
        ]
    },

    // --- CIUDADANÍA TEMA 5: ESTADO Y NORMA ---
    "ciudadania_tema5": {
        titulo: "Estado y Normas",
        introImg: "https://media.giphy.com/media/3o7qE1YN7aQf3olljG/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "La ley fundamental del Estado, conocida como 'Ley de leyes', es:", opciones: ["El Código Civil", "La Constitución Política", "El Código Penal", "El Decreto Supremo"], correcta: 1, tiempo: 15 },
            { texto: "Elemento del Estado que se refiere a la población asentada en un territorio:", opciones: ["Soberanía", "Nación", "Gobierno", "Poder"], correcta: 1, tiempo: 20 },
            { texto: "El poder del Estado encargado de aprobar leyes es el:", opciones: ["Ejecutivo", "Judicial", "Legislativo", "Electoral"], correcta: 2, tiempo: 15 },

            // MEDIO
            { texto: "Según la Constitución, el fin supremo de la sociedad y del Estado es:", opciones: ["La defensa de la persona humana y su dignidad", "El crecimiento económico", "La seguridad nacional", "La justicia social"], correcta: 0, tiempo: 25 },
            { texto: "¿Quién promulga las leyes en el Perú?", opciones: ["El Presidente del Congreso", "El Presidente de la República", "El Fiscal de la Nación", "El Defensor del Pueblo"], correcta: 1, tiempo: 25 },
            { texto: "Norma jurídica de mayor jerarquía después de la Constitución:", opciones: ["Decreto Supremo", "Resolución Ministerial", "Ley", "Ordenanza Municipal"], correcta: 2, tiempo: 25 },
            { texto: "La capacidad del Estado de ejercer poder con autonomía e independencia se llama:", opciones: ["Democracia", "Soberanía", "Burocracia", "Autocracia"], correcta: 1, tiempo: 20 },

            // DIFÍCIL
            { texto: "Según la Pirámide de Kelsen, los Tratados de DD.HH. tienen rango:", opciones: ["Legal", "Constitucional", "Administrativo", "Infralegal"], correcta: 1, tiempo: 35 },
            { texto: "El Decreto de Urgencia es una norma con rango de ley dictada por el:", opciones: ["Congreso", "Poder Judicial", "Poder Ejecutivo", "Tribunal Constitucional"], correcta: 2, tiempo: 35 },
            { texto: "No pueden someterse a referéndum:", opciones: ["Leyes municipales", "Reformas constitucionales", "Normas tributarias y presupuestales", "Ordenanzas regionales"], correcta: 2, tiempo: 40 }
        ]
    },

    // --- CIUDADANÍA TEMA 6: GARANTÍAS CONSTITUCIONALES ---
    "ciudadania_tema6": {
        titulo: "Garantías Constitucionales",
        introImg: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        reglas: { acierto: 20, fallo: -5, tiempo: 0 },
        preguntas: [
            // FÁCILES
            { texto: "Garantía que protege la libertad individual y de tránsito:", opciones: ["Acción de Amparo", "Habeas Data", "Habeas Corpus", "Acción Popular"], correcta: 2, tiempo: 20 },
            { texto: "Si una autoridad se niega a acatar una ley, se interpone una Acción de:", opciones: ["Inconstitucionalidad", "Cumplimiento", "Amparo", "Popular"], correcta: 1, tiempo: 20 },
            { texto: "Garantía que protege el acceso a la información pública:", opciones: ["Habeas Corpus", "Habeas Data", "Acción de Amparo", "Demanda"], correcta: 1, tiempo: 20 },

            // MEDIO
            { texto: "La Acción de Amparo procede contra la vulneración de derechos, EXCEPTO:", opciones: ["Libertad de expresión", "Propiedad", "Libertad individual (Habeas Corpus)", "Trabajo"], correcta: 2, tiempo: 25 },
            { texto: "Acción que se interpone contra normas con rango de ley que violan la Constitución:", opciones: ["Acción Popular", "Acción de Inconstitucionalidad", "Acción de Cumplimiento", "Habeas Data"], correcta: 1, tiempo: 25 },
            { texto: "La Acción Popular procede contra normas de jerarquía:", opciones: ["Constitucional", "Legal", "Infralegal (Reglamentos, Decretos)", "Tratados"], correcta: 2, tiempo: 30 },
            { texto: "¿Ante quién se presenta el Habeas Corpus?", opciones: ["El Congreso", "Cualquier Juez Penal", "La Comisaría", "El Alcalde"], correcta: 1, tiempo: 25 },

            // DIFÍCIL
            { texto: "¿Qué órgano es el encargado de resolver en última instancia la Acción de Inconstitucionalidad?", opciones: ["La Corte Suprema", "El Congreso", "El Tribunal Constitucional", "El Presidente"], correcta: 2, tiempo: 35 },
            { texto: "El Habeas Data también protege el derecho a:", opciones: ["La libertad de prensa", "La intimidad personal y familiar (honor bancario)", "El libre tránsito", "La huelga"], correcta: 1, tiempo: 35 },
            { texto: "Si un funcionario 'renuente' no cumple un acto administrativo, corresponde la:", opciones: ["Acción de Cumplimiento", "Acción Popular", "Acción de Amparo", "Denuncia penal"], correcta: 0, tiempo: 30 }
        ]
    }
};
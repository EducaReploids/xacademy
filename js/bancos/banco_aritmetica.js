window.bancoPreguntas = Object.assign(window.bancoPreguntas || {}, {
    "aritmetica_tema1": {
        "titulo": "Lógica Proposicional",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "¿Qué es una proposición lógica?",
                "img": "",
                "opciones": [
                    "Una orden o mandato",
                    "Una frase que puede ser Verdadera o Falsa",
                    "Una pregunta",
                    "Una exclamación"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "El conector lógico 'y' (conjunción) se representa con el símbolo:",
                "img": "",
                "opciones": [
                    "∨",
                    "→",
                    "∧",
                    "↔"
                ],
                "correcta": 2,
                "tiempo": 15
            },
            {
                "texto": "Si p es Verdadero, ¿cuál es el valor de 'no p' (~p)?",
                "img": "",
                "opciones": [
                    "Falso",
                    "Verdadero",
                    "Indeterminado",
                    "Posible"
                ],
                "correcta": 0,
                "tiempo": 15
            },
            {
                "texto": "En una condicional (p → q), la proposición es FALSA solo cuando:",
                "img": "",
                "opciones": [
                    "Ambas son falsas",
                    "El antecedente es V y el consecuente es F",
                    "El antecedente es F y el consecuente es V",
                    "Ambas son verdaderas"
                ],
                "correcta": 1,
                "tiempo": 20
            },
            {
                "texto": "La disyunción débil (p ∨ q) es FALSA únicamente cuando:",
                "img": "",
                "opciones": [
                    "Ambas proposiciones son verdaderas",
                    "Ambas proposiciones son falsas",
                    "Una es verdadera y la otra falsa",
                    "Nunca es falsa"
                ],
                "correcta": 1,
                "tiempo": 25
            },
            {
                "texto": "La proposición bicondicional (p ↔ q) es VERDADERA cuando:",
                "img": "",
                "opciones": [
                    "Tienen valores diferentes",
                    "El primero es falso",
                    "Ambas tienen el mismo valor de verdad",
                    "El segundo es verdadero"
                ],
                "correcta": 2,
                "tiempo": 25
            },
            {
                "texto": "Formaliza: 'Si estudio, entonces ingreso'.",
                "img": "",
                "opciones": [
                    "p ∧ q",
                    "p ∨ q",
                    "p → q",
                    "p ↔ q"
                ],
                "correcta": 2,
                "tiempo": 25
            },
            {
                "texto": "Ley de Morgan: La negación de (p ∧ q) equivale a:",
                "img": "",
                "opciones": [
                    "~p ∧ ~q",
                    "~p ∨ ~q",
                    "p ∨ q",
                    "~p → ~q"
                ],
                "correcta": 1,
                "tiempo": 35
            },
            {
                "texto": "¿Cómo se llama una fórmula lógica que SIEMPRE es verdadera, sin importar los valores?",
                "img": "",
                "opciones": [
                    "Contradicción",
                    "Contingencia",
                    "Tautología",
                    "Equivalencia"
                ],
                "correcta": 2,
                "tiempo": 30
            },
            {
                "texto": "Si la proposición (p ∧ ~q) es Verdadera, entonces:",
                "img": "",
                "opciones": [
                    "p es V y q es V",
                    "p es F y q es V",
                    "p es V y q es F",
                    "Ambos son F"
                ],
                "correcta": 2,
                "tiempo": 40
            }
        ]
    },
    "aritmetica_tema2": {
        "titulo": "Teoría de Conjuntos",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "Un conjunto determinado por 'Extensión' es aquel donde:",
                "img": "",
                "opciones": [
                    "Se menciona una característica común",
                    "Se nombran todos sus elementos uno a uno",
                    "No tiene elementos",
                    "Tiene infinitos elementos"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Si A = {2; 4; 6; 8}, ¿cuál de las siguientes afirmaciones es CORRECTA?",
                "img": "",
                "opciones": [
                    "3 ∈ A",
                    "4 ⊂ A",
                    "2 ∈ A",
                    "{6} ∈ A"
                ],
                "correcta": 2,
                "tiempo": 15
            },
            {
                "texto": "¿Cómo se llama el conjunto que tiene un solo elemento?",
                "img": "",
                "opciones": [
                    "Conjunto Vacío",
                    "Conjunto Unitario",
                    "Conjunto Universal",
                    "Conjunto Potencia"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Si A = {1; 2; 3} y B = {3; 4; 5}. Halla la Intersección (A ∩ B).",
                "img": "",
                "opciones": [
                    "{1; 2}",
                    "{4; 5}",
                    "{3}",
                    "{1; 2; 3; 4; 5}"
                ],
                "correcta": 2,
                "tiempo": 20
            },
            {
                "texto": "Dado el conjunto A = {a, b, c}. ¿Cuántos subconjuntos tiene? (Fórmula: 2ⁿ)",
                "img": "",
                "opciones": [
                    "3",
                    "6",
                    "8",
                    "9"
                ],
                "correcta": 2,
                "tiempo": 25
            },
            {
                "texto": "Si A = {x/x es vocal de la palabra 'COCODRILO'}. Halla n(A) (Cardinal).",
                "img": "",
                "opciones": [
                    "4",
                    "3",
                    "2",
                    "5"
                ],
                "correcta": 2,
                "tiempo": 25
            },
            {
                "texto": "Operación Diferencia: Si M = {2; 4; 6} y N = {1; 2; 3}. Halla M - N.",
                "img": "",
                "opciones": [
                    "{4; 6}",
                    "{1; 3}",
                    "{2}",
                    "{1; 2; 3; 4; 6}"
                ],
                "correcta": 0,
                "tiempo": 25
            },
            {
                "texto": "Si n(A) = 10, n(B) = 12 y n(A ∩ B) = 5. Calcula n(A ∪ B).",
                "img": "",
                "opciones": [
                    "22",
                    "17",
                    "15",
                    "7"
                ],
                "correcta": 1,
                "tiempo": 35
            },
            {
                "texto": "En un aula de 40 alumnos: 25 aprueban Mate y 20 aprueban Lenguaje. Si 5 no aprueban ninguno, ¿cuántos aprueban AMBOS?",
                "img": "",
                "opciones": [
                    "5",
                    "15",
                    "10",
                    "12"
                ],
                "correcta": 2,
                "tiempo": 40
            },
            {
                "texto": "Calcula cuántos subconjuntos propios tiene un conjunto de 5 elementos.",
                "img": "",
                "opciones": [
                    "32",
                    "31",
                    "30",
                    "25"
                ],
                "correcta": 1,
                "tiempo": 35
            }
        ]
    },
    "aritmetica_tema3": {
        "titulo": "Numeración",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "En el sistema de base 6 (senario), ¿cuáles son las cifras disponibles?",
                "img": "",
                "opciones": [
                    "0, 1, 2, 3, 4, 5",
                    "1, 2, 3, 4, 5, 6",
                    "0, 1, 2, 3, 4, 5, 6",
                    "Solo 0 y 1"
                ],
                "correcta": 0,
                "tiempo": 15
            },
            {
                "texto": "¿Cómo se llama el sistema de numeración que usamos cotidianamente (Base 10)?",
                "img": "",
                "opciones": [
                    "Binario",
                    "Decimal",
                    "Vigesimal",
                    "Sexagesimal"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Descomposición polinómica: El número 342 es igual a:",
                "img": "",
                "opciones": [
                    "300 + 40 + 2",
                    "3 + 4 + 2",
                    "3x4x2",
                    "30 + 40 + 200"
                ],
                "correcta": 0,
                "tiempo": 15
            },
            {
                "texto": "Convierte el número 23 en base 5 a base 10.",
                "img": "",
                "opciones": [
                    "13",
                    "10",
                    "15",
                    "11"
                ],
                "correcta": 0,
                "tiempo": 25
            },
            {
                "texto": "Para convertir un número de base 10 a otra base, se utiliza el método de:",
                "img": "",
                "opciones": [
                    "Descomposición Polinómica",
                    "Divisiones Sucesivas",
                    "Ruffini",
                    "Aspa Simple"
                ],
                "correcta": 1,
                "tiempo": 20
            },
            {
                "texto": "Un número 'Capicúa' es aquel que:",
                "img": "",
                "opciones": [
                    "Es par",
                    "Se lee igual de izquierda a derecha y viceversa",
                    "Tiene base 10",
                    "Termina en cero"
                ],
                "correcta": 1,
                "tiempo": 20
            },
            {
                "texto": "Si el numeral es 213(x), entonces 'x' debe ser:",
                "img": "",
                "opciones": [
                    "Mayor que 3",
                    "Igual a 3",
                    "Menor que 3",
                    "Igual a 2"
                ],
                "correcta": 0,
                "tiempo": 25
            },
            {
                "texto": "Si 32(x) = 20 (en base 10). Halla el valor de la base 'x'.",
                "img": "",
                "opciones": [
                    "6",
                    "5",
                    "4",
                    "7"
                ],
                "correcta": 0,
                "tiempo": 35
            },
            {
                "texto": "¿Cuál es el mayor número de 2 cifras en base 7?",
                "img": "",
                "opciones": [
                    "66(7)",
                    "77(7)",
                    "99(7)",
                    "100(7)"
                ],
                "correcta": 0,
                "tiempo": 30
            },
            {
                "texto": "Propiedad: Si dos numerales son iguales, a mayor numeral aparente le corresponde:",
                "img": "",
                "opciones": [
                    "Mayor base",
                    "Menor base",
                    "Igual base",
                    "Doble base"
                ],
                "correcta": 1,
                "tiempo": 40
            }
        ]
    },
    "aritmetica_tema4": {
        "titulo": "Divisibilidad",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "Un número es divisible por 2 cuando:",
                "img": "",
                "opciones": [
                    "Termina en cero o cifra par",
                    "La suma de sus cifras es par",
                    "Termina en impar",
                    "Es múltiplo de 3"
                ],
                "correcta": 0,
                "tiempo": 15
            },
            {
                "texto": "¿Cuál de los siguientes números es divisible por 5?",
                "img": "",
                "opciones": [
                    "123",
                    "450",
                    "342",
                    "551"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Si un número es múltiplo de 9, entonces necesariamente es múltiplo de:",
                "img": "",
                "opciones": [
                    "2",
                    "5",
                    "3",
                    "6"
                ],
                "correcta": 2,
                "tiempo": 15
            },
            {
                "texto": "Halla el valor de 'a' si el numeral 4a3 es divisible por 9.",
                "img": "",
                "opciones": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "correcta": 1,
                "tiempo": 25
            },
            {
                "texto": "Criterio del 11: Halla 'x' si el número 9x5 es divisible por 11.",
                "img": "",
                "opciones": [
                    "3",
                    "4",
                    "2",
                    "1"
                ],
                "correcta": 0,
                "tiempo": 30
            },
            {
                "texto": "Para que un número sea divisible por 6, debe ser divisible por:",
                "img": "",
                "opciones": [
                    "2 y 3 a la vez",
                    "2 y 5",
                    "3 y 4",
                    "Solo por 3"
                ],
                "correcta": 0,
                "tiempo": 10
            },
            {
                "texto": "¿Cuántos divisores tiene el número 12?",
                "img": "",
                "opciones": [
                    "4",
                    "5",
                    "6",
                    "8"
                ],
                "correcta": 2,
                "tiempo": 10
            },
            {
                "texto": "Calcula el residuo de dividir: 4325 por 3.",
                "img": "",
                "opciones": [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                "correcta": 2,
                "tiempo": 45
            },
            {
                "texto": "Si N = múltiplo de 7 + 2. ¿Cuál es el residuo de dividir (N + 12) entre 7?",
                "img": "",
                "opciones": [
                    "2",
                    "5",
                    "0",
                    "4"
                ],
                "correcta": 2,
                "tiempo": 40
            },
            {
                "texto": "Halla 'a' si el numeral 2a3a es divisible por 7.",
                "img": "",
                "opciones": [
                    "4",
                    "5",
                    "3",
                    "6"
                ],
                "correcta": 1,
                "tiempo": 45
            }
        ]
    },
    "aritmetica_tema5": {
        "titulo": "Números Primos",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "¿Cuántos divisores tiene un número primo?",
                "img": "",
                "opciones": [
                    "1",
                    "2",
                    "3",
                    "Infinitos"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "¿Cuál es el único número primo que es par?",
                "img": "",
                "opciones": [
                    "4",
                    "2",
                    "6",
                    "0"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Indica cuál de los siguientes es un número compuesto:",
                "img": "",
                "opciones": [
                    "13",
                    "7",
                    "9",
                    "2"
                ],
                "correcta": 2,
                "tiempo": 15
            },
            {
                "texto": "Realiza la descomposición canónica de 120:",
                "img": "",
                "opciones": [
                    "2³ x 3 x 5",
                    "2² x 3 x 10",
                    "2⁴ x 5",
                    "2³ x 15"
                ],
                "correcta": 0,
                "tiempo": 30
            },
            {
                "texto": "Dos números son PESI (Primos entre sí) cuando:",
                "img": "",
                "opciones": [
                    "Son primos absolutos",
                    "Su único divisor común es la unidad",
                    "Son impares",
                    "Su MCD es cero"
                ],
                "correcta": 1,
                "tiempo": 20
            },
            {
                "texto": "Calcula la suma de los 4 primeros números primos.",
                "img": "",
                "opciones": [
                    "15",
                    "17",
                    "26",
                    "10"
                ],
                "correcta": 1,
                "tiempo": 25
            },
            {
                "texto": "¿Cuántos divisores tiene el número 36?",
                "img": "",
                "opciones": [
                    "6",
                    "8",
                    "9",
                    "12"
                ],
                "correcta": 2,
                "tiempo": 25
            },
            {
                "texto": "Si N = 2³ x 3ⁿ x 5 tiene 32 divisores, halla 'n'.",
                "img": "",
                "opciones": [
                    "2",
                    "3",
                    "4",
                    "1"
                ],
                "correcta": 1,
                "tiempo": 40
            },
            {
                "texto": "¿Cuántos divisores COMPUESTOS tiene el número 60?",
                "img": "",
                "opciones": [
                    "12",
                    "8",
                    "9",
                    "3"
                ],
                "correcta": 1,
                "tiempo": 40
            },
            {
                "texto": "Halla la cantidad de divisores de 1000 (mil).",
                "img": "",
                "opciones": [
                    "10",
                    "12",
                    "16",
                    "20"
                ],
                "correcta": 2,
                "tiempo": 35
            }
        ]
    },
    "aritmetica_tema6": {
        "titulo": "Números Racionales (Fracciones)",
        "introImg": "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif",
        "reglas": {
            "acierto": 20,
            "fallo": -5,
            "tiempo": 0
        },
        "preguntas": [
            {
                "texto": "Una fracción es PROPIA cuando:",
                "img": "",
                "opciones": [
                    "El numerador es mayor que el denominador",
                    "El numerador es menor que el denominador",
                    "Son iguales",
                    "El denominador es 1"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "¿Qué fracción es equivalente a 1/2?",
                "img": "",
                "opciones": [
                    "2/5",
                    "3/6",
                    "4/7",
                    "5/9"
                ],
                "correcta": 1,
                "tiempo": 15
            },
            {
                "texto": "Convierte el decimal 0,5 a fracción:",
                "img": "",
                "opciones": [
                    "1/5",
                    "5/100",
                    "1/2",
                    "5/9"
                ],
                "correcta": 2,
                "tiempo": 15
            },
            {
                "texto": "Calcula la suma: 1/3 + 1/2",
                "img": "",
                "opciones": [
                    "2/5",
                    "5/6",
                    "1/6",
                    "1/5"
                ],
                "correcta": 1,
                "tiempo": 25
            },
            {
                "texto": "¿Cuál es la Fracción Generatriz del decimal periódico puro 0,333...?",
                "img": "",
                "opciones": [
                    "3/10",
                    "1/3",
                    "3/90",
                    "3/100"
                ],
                "correcta": 1,
                "tiempo": 25
            },
            {
                "texto": "Si gasto los 2/5 de mi dinero, ¿qué fracción me queda?",
                "img": "",
                "opciones": [
                    "1/5",
                    "3/5",
                    "2/5",
                    "4/5"
                ],
                "correcta": 1,
                "tiempo": 20
            },
            {
                "texto": "Simplifica la fracción 120/150 a su mínima expresión (irreductible).",
                "img": "",
                "opciones": [
                    "4/5",
                    "12/15",
                    "6/5",
                    "3/4"
                ],
                "correcta": 0,
                "tiempo": 25
            },
            {
                "texto": "Halla la fracción generatriz de 0,1666... (Periódico Mixto)",
                "img": "",
                "opciones": [
                    "1/6",
                    "16/90",
                    "15/99",
                    "1/5"
                ],
                "correcta": 0,
                "tiempo": 35
            },
            {
                "texto": "¿Cuántas fracciones propias e irreductibles con denominador 12 existen?",
                "img": "",
                "opciones": [
                    "2",
                    "4",
                    "3",
                    "5"
                ],
                "correcta": 1,
                "tiempo": 40
            },
            {
                "texto": "Si a los 2/3 de 24 le restamos los 3/4 de 12, obtenemos:",
                "img": "",
                "opciones": [
                    "7",
                    "9",
                    "5",
                    "8"
                ],
                "correcta": 0,
                "tiempo": 35
            }
        ]
    }
});
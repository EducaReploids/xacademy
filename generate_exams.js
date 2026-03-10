const fs = require('fs');
const path = require('path');

const bancoPath = path.join(__dirname, 'banco_admision.js');

// 1. Leer el archivo actual
let rawContent = fs.readFileSync(bancoPath, 'utf8');

// Extraer el objeto JSON
const jsonStart = rawContent.indexOf('{');
const jsonEnd = rawContent.lastIndexOf('}');
const jsonString = rawContent.substring(jsonStart, jsonEnd + 1);

let bancoAdmision;
try {
    // Usamos new Function para evaluar el objeto de forma segura ya que es JS, no JSON estricto
    bancoAdmision = new Function('return ' + jsonString + ';')();
} catch (e) {
    console.error("Error parseando banco_admision.js", e);
    process.exit(1);
}

// 2. Recopilar todas las preguntas existentes para tener un pool grande
let pool = [];
const existingExams = Object.values(bancoAdmision);
for (const exam of existingExams) {
    if (exam && exam.preguntas) {
        for (const q of exam.preguntas) {
            // Evitamos duplicados exactos usando el texto de la pregunta
            if (!pool.find(p => p.texto === q.texto)) {
                // Removemos puntajes específicos de la vieja pregunta, lo inyectaremos nuevo
                const cleanQ = { ...q };
                delete cleanQ.puntos; 
                pool.push(cleanQ);
            }
        }
    }
}

console.log(`Pool de preguntas generado exitosamente con ${pool.length} preguntas únicas.`);

// 3. Función auxiliar para barajar y extraer N preguntas
function getQuestions(num, pointsRules) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, num);
    
    // Inyectar IDs frescos y puntajes
    return selected.map((q, index) => ({
        ...q,
        id: index + 1,
        puntos: {
            correcta: pointsRules.correcta,
            incorrecta: pointsRules.incorrecta
        }
    }));
}

// 4. Exámenes requeridos por el usuario
const newExams = [
    { key: 'unmsm_A', titulo: "Simulacro UNMSM - Área A (Ciencias de la Salud)", tiempo: 180, count: 100, p: { correcta: 20, incorrecta: -1.125, vacia: 0 } },
    { key: 'unmsm_B', titulo: "Simulacro UNMSM - Área B (Ciencias Básicas)", tiempo: 180, count: 100, p: { correcta: 20, incorrecta: -1.125, vacia: 0 } },
    { key: 'unmsm_C', titulo: "Simulacro UNMSM - Área C (Ingenierías)", tiempo: 180, count: 100, p: { correcta: 20, incorrecta: -1.125, vacia: 0 } },
    { key: 'unab_ord', titulo: "Examen Ordinario UNAB", tiempo: 120, count: 80, p: { correcta: 10, incorrecta: -1, vacia: 0 } },
    { key: 'untels_gen', titulo: "Examen General UNTELS", tiempo: 120, count: 100, p: { correcta: 10, incorrecta: -1, vacia: 0 } },
    { key: 'unsa_ord', titulo: "Ordinario UNSA I Fase", tiempo: 120, count: 60, p: { correcta: 4, incorrecta: -0.5, vacia: 0 } },
    { key: 'unsa_cep', titulo: "CEPRUNSA", tiempo: 120, count: 60, p: { correcta: 4, incorrecta: -0.5, vacia: 0 } },
    { key: 'unc_gen', titulo: "Examen General UNC", tiempo: 150, count: 90, p: { correcta: 4, incorrecta: -1, vacia: 0 } },
    { key: 'usmp_ord', titulo: "Simulacro General USMP", tiempo: 120, count: 100, p: { correcta: 10, incorrecta: 0, vacia: 0 } }
];

// 5. Generar los objetos
for (const examDef of newExams) {
    bancoAdmision[examDef.key] = {
        titulo: examDef.titulo,
        tiempo: examDef.tiempo,
        puntos: examDef.p,
        preguntas: getQuestions(Math.min(examDef.count, pool.length), examDef.p)
    };
    console.log(`Examen generado: ${examDef.key} con ${bancoAdmision[examDef.key].preguntas.length} preguntas.`);
}

// 6. Volver a escribir el archivo
const newFileContent = `const bancoAdmision = ${JSON.stringify(bancoAdmision, null, 4)};`;
fs.writeFileSync(bancoPath, newFileContent, 'utf8');

console.log("¡Bancos guardados en banco_admision.js exitosamente!");

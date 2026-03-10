const fs = require('fs');
const path = require('path');

const bancosDir = path.join(__dirname, 'js', 'bancos');
const files = fs.readdirSync(bancosDir).filter(f => f.endsWith('.js'));

global.window = { bancoPreguntas: {} };

for (const file of files) {
    const filePath = path.join(bancosDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Solo evaluar la primera parte del archivo antes de las preguntas autogeneradas
    const splitIndex = content.indexOf('// --- TEMAS AUTOGENERADOS');
    if (splitIndex !== -1) {
        content = content.substring(0, splitIndex);
    }

    try {
        eval(content);
        console.log(`Cargado: ${file}`);
    } catch (e) {
        console.error(`Error evaling ${file}:`, e.message);
    }
}

const allQuestions = [];
let temasCount = 0;

for (const temaId in window.bancoPreguntas) {
    temasCount++;
    const temaData = window.bancoPreguntas[temaId];
    const courseTitle = temaData.titulo || temaId;

    if (temaData.preguntas && Array.isArray(temaData.preguntas)) {
        for (const q of temaData.preguntas) {
            // Determine course name
            let materia = 'General';
            if (temaId.startsWith('algebra')) materia = 'Álgebra';
            else if (temaId.startsWith('anatomia')) materia = 'Anatomía';
            else if (temaId.startsWith('aptitud')) materia = 'Aptitúd Académica';
            else if (temaId.startsWith('aritmetica')) materia = 'Aritmética';
            else if (temaId.startsWith('biologia')) materia = 'Biología';
            else if (temaId.startsWith('ciudadania')) materia = 'Educación Cívica';
            else if (temaId.startsWith('economia')) materia = 'Economía';
            else if (temaId.startsWith('estadistica')) materia = 'Estadística';
            else if (temaId.startsWith('filosofia')) materia = 'Filosofía';
            else if (temaId.startsWith('fisica')) materia = 'Física';
            else if (temaId.startsWith('geografia')) materia = 'Geografía';
            else if (temaId.startsWith('geometria')) materia = 'Geometría';
            else if (temaId.startsWith('hp')) materia = 'Historia del Perú';
            else if (temaId.startsWith('hu')) materia = 'Historia Universal';
            else if (temaId.startsWith('lenguaje')) materia = 'Lenguaje';
            else if (temaId.startsWith('literatura')) materia = 'Literatura';
            else if (temaId.startsWith('psicologia')) materia = 'Psicología';
            else if (temaId.startsWith('quimica')) materia = 'Química';
            else if (temaId.startsWith('rm') || temaId.startsWith('aptitud')) materia = 'Razonamiento Matemático';
            else if (temaId.startsWith('rv')) materia = 'Razonamiento Verbal';
            else if (temaId.startsWith('trigonometria')) materia = 'Trigonometría';

            const newQ = { ...q, curso: materia, tema: courseTitle };
            allQuestions.push(newQ);
        }
    }
}

console.log(`Se encontraron ${temasCount} temas reales en total.`);
console.log(`Encontradas ${allQuestions.length} preguntas reales en total.`);

if (allQuestions.length === 0) {
    console.log("No se extrajeron preguntas. Revisa el eval().");
    process.exit(1);
}

// Shuffle array
for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
}

// Select 200
const selectedQuestions = allQuestions.slice(0, 200);

console.log(`Seleccionadas ${selectedQuestions.length} preguntas para el JSON.`);

const jsonPath = path.join(__dirname, 'js', 'preguntas_rapidas.json');
fs.writeFileSync(jsonPath, JSON.stringify(selectedQuestions, null, 2), 'utf8');
console.log(`JSON guardado exitosamente en: ${jsonPath}`);

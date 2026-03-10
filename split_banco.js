const fs = require('fs');
const path = require('path');

// 1. Read the monolithic file
const monolithicPath = path.join(__dirname, 'banco_preguntas.js');
let content = fs.readFileSync(monolithicPath, 'utf8');

// The file defines `const bancoPreguntas = { ... }`.
// We need to evaluate it to get the object in memory.
// To avoid `const` redefinition issues if run multiple times, or window not being defined:
global.window = {};
let extractedData = {};

try {
    // We can replace `const bancoPreguntas =` with `global.extractedData =`
    // or just wrap it in a function.
    const script = content + `\nmodule.exports = bancoPreguntas;`;
    
    // Create a temporary file to require it
    const tempPath = path.join(__dirname, 'temp_banco.js');
    fs.writeFileSync(tempPath, script, 'utf8');
    
    extractedData = require('./temp_banco.js');
    
    // Clean up
    fs.unlinkSync(tempPath);
} catch (e) {
    console.error("Error al parsear banco_preguntas.js:", e);
    process.exit(1);
}

// 2. Group topics by course
const courses = {};

for (const temaId in extractedData) {
    const topicData = extractedData[temaId];
    
    // Extract course name (e.g., "algebra_tema1" -> "algebra")
    const match = temaId.match(/^([a-z]+)_tema/);
    let courseName = "";
    
    if (match) {
        courseName = match[1];
    } else {
        // Handle special cases if any
        if (temaId.startsWith('aptitud')) courseName = 'aptitud';
        else if (temaId.startsWith('hu')) courseName = 'hu';
        else if (temaId.startsWith('hp')) courseName = 'hp';
        else if (temaId.startsWith('rv')) courseName = 'rv';
        else if (temaId.startsWith('rm')) courseName = 'rm';
        else courseName = 'general';
    }

    if (!courses[courseName]) {
        courses[courseName] = {};
    }
    
    courses[courseName][temaId] = topicData;
}

// 3. Write individual files
const bancosDir = path.join(__dirname, 'js', 'bancos');
if (!fs.existsSync(bancosDir)) {
    fs.mkdirSync(bancosDir, { recursive: true });
}

let writtenFiles = 0;
let totalTopics = 0;

for (const courseName in courses) {
    const courseTopics = courses[courseName];
    const filePath = path.join(bancosDir, `banco_${courseName}.js`);
    
    const topicsCount = Object.keys(courseTopics).length;
    totalTopics += topicsCount;
    
    // Format the output JS string
    const stringifiedData = JSON.stringify(courseTopics, null, 4);
    
    const fileContent = `window.bancoPreguntas = Object.assign(window.bancoPreguntas || {}, ${stringifiedData});`;
    
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Guardado banco_${courseName}.js con ${topicsCount} temas.`);
    writtenFiles++;
}

console.log(`\n¡Éxito! Se escribieron ${writtenFiles} archivos de curso conteniendo un total de ${totalTopics} temas.`);

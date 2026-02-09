let currentQuestion = 0;
let answers = [0, 0, 0, 0];
const questions = [
    { text: "¿Te gustaría trabajar en un laboratorio investigando nuevos medicamentos?", 
        answers: ["Prefiero investigar sobre nuevas tecnologías digitales.", "Sí, me gustaria investigas sobre medicamentos.", "Me gustaria investigar sobre tecnologías que apoyen a la sociedad vulnerable.", "No me interesa"],
        type: 1 },
    { text: "¿Prefieres planificar eventos sociales y/o trabajar tras bambalinas?", 
        answers: ["No, no me interesa", "Prefiero considerar eventos más cientificos.", "Claro, me encantaria", "En desacuerdo"],
        type: 2 },
    { text: "¿Te interesa diseñar edificios y estructuras modernas?", 
        answers: ["Me encantaría", "No es lo mío", "Preferiria trabajar en campo (frente a la realidad)", "Quisiera trabajar en un edificio."],
        type: 0 },
    { text: "¿Disfrutas resolver problemas matemáticos y puzzles lógicos?", 
        answers: ["Me llama mucho la atención", "Podria intentar", "Neutral", "En desacuerdo"],
        type: 0 },
    { text: "¿Te atrae trabajar con niños en su desarrollo educativo?", 
        answers: ["No me interesa", "Neutral", "Si, me gustaria trabajar con niños", "Prefiero manejar una empresa que promueva el desarrollo educativo"],
        type: 2 },
    { text: "¿Te gustaría dirigir un equipo en una empresa tecnológica?", 
        answers: ["Me gustaria dirigir o trabajar en un equipo así", "No es lo mio", "Quisiera trabajar en empresas relacionadas con la sociedad", "Yo siento que seria un buen administrador de una empresa"],
        type: 0 },
    { text: "¿Prefieres explorar artes visuales y/o escribir historias creativas?", 
        answers: ["No, prefiero los enfoques tecnológicos y matemáticos.", "Siento que prefiero leer sobre naturaleza y biologia.", "Claro, es algo que me gustaria hacer como profesional", "Yo considero que prefiero ver el mundo financiero."],
        type: 2 },
    { text: "¿Te interesa ayudar a personas con problemas de salud mental?", 
        answers: ["No es algo que quisiera hacer.", "Me encantaria descubrir nuevos enfoques de la salud mental.", "Se ve enfocado en ayudar a la sociedad, pero no va conmigo", "Si hay algun problema con el trato o servicio, podre ayudarte con una demanda."],
        type: 1 },
    { text: "¿Te gustaría analizar datos financieros para tomar decisiones empresariales?", 
        answers: ["Me gustaria analizar sus datos, pero no tomar decesiones asi de grandes.", "Considero que no va conmigo.", "No me veo en ese ambito.", "Siento que seria lo mio."],
        type: 3 },
    { text: "¿Te atrae el trabajo relacionado con la naturaleza y/o la conservación del medio ambiente?", 
        answers: ["No siento que sea lo mio.", "No me molestaria trabajar en ello.", "Si me gustaria trabajar algo relacionado con la naturaleza.", "Mi enfoque es más con respecto a empresas que apoyan y conservan la naturaleza."],
        type: 2 },
    { text: "¿Prefieres programar sistemas informáticos y/o gestionar redes?", 
        answers: ["Si, definitivamente seria lo mio.", "No es lo mio.", "Podria intentarlo, pero realmente no creo que sea lo mio.", "Me gustaria dirigir una empresa dedicada a ello."],
        type: 0 },
    { text: "¿Te interesa crear contenido multimedia como videos o animaciones?", 
        answers: ["No, pero me gustarias diseñar ese tipo de programas.", "No va conmigo ello.", "Seria algo increible aprender y trabajar de ello.", "Preferiria comprar los servicios y que trabajen para mi."],
        type: 2 },
    { text: "¿Disfrutas colaborar en proyectos sociales que beneficien a la comunidad?", 
        answers: ["No tendria problema con ello.", "Claro, pero en el ambito de la salud.", "Me encantaria, todo sea por el bienestar de mi País.", "Podria dirigir un equipo para que se encarguen de ello."],
        type: 2 },
    { text: "¿Te gustaría ser entrenador deportivo y/o fisioterapeuta?", 
        answers: ["No, no es lo mio.", "Me gustaria aprender y quizas trabajar de ello", "Siento que podria intentar dominar una de las áreas.", "Probablemente."],
        type: 1 },
    { text: "¿Te atrae el diseño de modas y/o la creación de productos?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 3 },
    { text: "¿Preferirias investigar nuevas tecnologías médicas y/o trabajar en un hospital?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 1 },
    { text: "¿Te interesaria trabajar en producción agrícola o manejo de alimentos?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 0 },
    { text: "¿Te gustaría asesorar a empresas en estrategias de marketing?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 3 },
    { text: "¿Te gustaria ser docente en una universidad y/o investigador científico?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 2 },
    { text: "¿Te interesaria explorar el espacio o trabajar en proyectos de aviación?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 0 },
    { text: "¿Te gustaría ser responsable de las redes sociales de una marca?", 
        answers: ["Muy de acuerdo", "De acuerdo", "Neutral", "En desacuerdo"],
        type: 3 },
];

const blocks = {
    A: [
        { name: "Matemática Aplicada", img: "https://noticias.unsl.edu.ar/wp-content/uploads/2020/09/64521_geometry-1044090_960_720.jpg", desc: "Analiza problemas complejos utilizando modelos matemáticos para aplicaciones prácticas en áreas como finanzas, ciencias y tecnología." },
        { name: "Estadística e Informática", img: "https://industrial.unmsm.edu.pe/wp-content/uploads/2021/08/228989471_113540251022379_506580554430333045_n.jpg", desc: "Desarrolla métodos para recopilar, analizar e interpretar datos, y diseña sistemas informáticos para gestionar esa información." },
        { name: "Ingeniería Agronómica", img: "https://www.carreras.una.ac.cr/wp-content/uploads/092_agronomia-1280x640.jpg", desc: "Optimiza la producción agrícola, mejora cultivos y protege el medio ambiente en actividades agrícolas." },
        { name: "Ingeniería Ambiental", img: "https://d5tnfl9agh5vb.cloudfront.net/uploads/2016/11/upn_blog_ing_ingenieros-ambientales_23-nov.jpg", desc: "Diseña soluciones para proteger los recursos naturales y garantizar la sostenibilidad ambiental." },
        { name: "Ingeniería en Industrias Alimentarias", img: "https://usil-blog.s3.amazonaws.com/PROD/blog/image/ingenieria-industrias-alimentarias.jpg", desc: "Controla la producción y transformación de alimentos para garantizar su calidad y seguridad." },
        { name: "Ingeniería Zootécnica", img: "https://cipcajamarca.org.pe/wp-content/uploads/2024/01/Zootecnia.jpg", desc: "Maneja y mejora la cría de animales para maximizar la producción ganadera y preservar especies." },
        { name: "Ingeniería Civil", img: "https://micarrerauniversitaria.com/wp-content/uploads/2018/01/construction.jpg", desc: "Diseña y construye infraestructuras como edificios, puentes y carreteras." },
        { name: "Ingeniería Industrial", img: "https://ucontinental.edu.pe/carrera/assets/img/ing-industrial.webp", desc: "Optimiza procesos de producción y gestión en empresas para mejorar la eficiencia." },
        { name: "Ingeniería de Sistemas", img: "https://worldcampus.saintleo.edu/img/article/estudiar-ingenieria-en-sistemas-cuales-son-los-retos-de-ser-ingenierio-en-sistemas.webp", desc: "Diseña y mejora sistemas computacionales, aplicaciones y redes." },
        { name: "Ingeniería Informática", img: "https://universidadeuropea.com/resources/media/images/que-es-ingenieria-informatica-1200x630.original.jpg", desc: "Crea y gestiona software y hardware, centrándose en el diseño de soluciones tecnológicas." },
        { name: "Ingeniería Electrónica", img: "https://www1.utec.edu.pe/sites/default/files/styles/blog_full/public/blog/que_hace_un_ingeniero_electronico_conoce_10_funciones_de_este_profesional.jpg", desc: "Desarrolla y mantiene sistemas electrónicos, como telecomunicaciones y automatización." },
        { name: "Ingeniería Pesquera", img: "https://unjfsc.edu.pe/wp-content/uploads/2020/04/ING-PESQUERA-1.jpg", desc: "Gestiona recursos pesqueros, desarrolla tecnologías para la pesca y preserva ecosistemas marinos." },
        { name: "Ingeniería Acuícola", img: "https://web-media.cientifica.edu.pe/wp-content/medios/2023/10/12155907/imagen-hombre-ingenieria-pesquera-acuicultura-universidad-cientifica-del-sur-scaled.webp", desc: "Diseña sistemas para el cultivo de peces, moluscos y otros organismos acuáticos." },
        { name: "Ingeniería Química", img: "https://cba.ucb.edu.bo/blog/wp-content/uploads/2021/04/quimico-adulto-mujer-belleza-caucasica-proteccion_151013-1823.jpg", desc: "Transforma materias primas en productos químicos y mejora procesos industriales." },
        { name: "Ingeniería Metalúrgica", img: "https://www.noticias.ucn.cl/wp-content/uploads/2017/01/ingmetalurgia.jpg", desc: "Estudia la extracción y procesamiento de metales para aplicaciones industriales." }
    ],
    B: [
        { name: "Enfermería", img: "https://www.tuproyectodevida.pe/wp-content/uploads/2022/02/especialidades-enfermeria-1200x628.jpg", desc: "Brinda atención médica y emocional a pacientes, participando en tratamientos y promoción de la salud." },
        { name: "Medicina Humana", img: "https://utelesup.edu.pe/wp-content/uploads/2018/11/MEDICINA_HUMANA_TODO_LO_QUE_NECESITAS_SABER.jpg", desc: "Diagnostica, trata y previene enfermedades en seres humanos." },
        { name: "Bromatología y Nutrición", img: "https://unjfsc.edu.pe/wp-content/uploads/2020/04/D-BROMATOLOGIA-1.jpg", desc: "Analiza alimentos, promueve una dieta saludable y previene enfermedades relacionadas con la alimentación." },
        { name: "Educación Física y Deportes", img: "https://guiadocente.net/wp-content/uploads/2020/01/yt.jpg", desc: "Promueve el ejercicio y el bienestar físico mediante la enseñanza de actividades deportivas." },
        { name: "Biología con mención en Biotecnología", img: "https://unjfsc.edu.pe/wp-content/uploads/2020/03/ebb-1.jpg", desc: "Investiga procesos biológicos para desarrollar soluciones en agricultura, salud y medio ambiente." }
    ],
    C: [
        { name: "Ciencias de la Comunicación", img: "https://dondeestudiar.pe/wp-content/uploads/2022/09/carrera-ciencias-de-la-comubicacion.jpg", desc: "Desarrolla estrategias para la comunicación en medios, empresas y organizaciones." },
        { name: "Trabajo Social", img: "https://dondeestudiar.pe/wp-content/uploads/2022/10/trabajo-social-donde-estudiar-en-el-peru.jpg", desc: "Ayuda a comunidades vulnerables a mejorar su calidad de vida mediante programas sociales." },
        { name: "Sociología", img: "https://calculadoracts.pe/wp-content/uploads/2023/12/cuanto-ganan-los-sociologos-y-antropologos-en-peru-una-mirada-a-sus-ingresos.jpg", desc: "Estudia las sociedades y sus estructuras, buscando comprender y resolver problemas sociales." },
        { name: "Derecho y Ciencias Políticas", img: "https://unsm.edu.pe/wp-content/uploads/2016/09/derecho1.jpg", desc: "Asesora y representa legalmente a personas y organizaciones, además de analizar sistemas políticos." },
        { name: "Educación Inicial y Arte", img: "https://www2.ucsm.edu.pe/wp-content/uploads/2021/04/Educacion-Inicial-blurred.v2.jpg", desc: "Enseña y estimula el aprendizaje creativo en niños pequeños mediante técnicas artísticas." },
        { name: "Educación Primaria", img: "https://facultad-educacion.pucp.edu.pe/wp-content/uploads/2023/05/Colegio-La-Union0066_2-scaled.jpg", desc: "Forma a estudiantes en conocimientos básicos para su desarrollo académico y personal." },
        { name: "Educación Secundaria", img: "https://admision.pucp.edu.pe/sites/default/files/2024-03/PORTADA_EDUC%20SECUNDARIA.png", desc: "Especializa a jóvenes en áreas como matemáticas, ciencias sociales, comunicación y tecnología." },
        { name: "Educación en Tecnología y Construcciones Metálicas", img: "https://i.ytimg.com/vi/EXRJV3_qOHs/maxresdefault.jpg", desc: "Prepara profesionales en diseño y manejo de tecnologías para la construcción." }
    ],
    D: [
        { name: "Administración", img: "https://isil.pe/blog/wp-content/uploads/2023/09/administracion-empresas.webp", desc: "Gestiona recursos humanos, financieros y materiales para alcanzar los objetivos de una organización." },
        { name: "Gestión en Turismo y Hotelería", img: "https://isil.pe/blog/wp-content/uploads/2024/02/recepcionistas-trajes-elegantes-horas-trabajo-2.jpg", desc: "Organiza y administra servicios turísticos y de hospitalidad." },
        { name: "Negocios Internacionales", img: "https://merida.anahuac.mx/hubfs/apreu/Blog/2020%20Blog%20APREU/Portadas/Negocios%20Internacionales%20campo%20laboral.jpg", desc: "Gestiona operaciones comerciales entre diferentes países, considerando aspectos legales y culturales." },
        { name: "Ciencias Contables y Financieras", img: "https://posgrado.ujcm.edu.pe/wp-content/uploads/2022/06/AAiXt5E.img_.jpg", desc: "Gestiona la contabilidad y finanzas de una empresa, asegurando su rentabilidad y eficiencia." }
    ]
};
function startTest() {
    document.getElementById("tutorial-screen").classList.remove("active");
    document.getElementById("question-screen").classList.add("active");
    nextQuestion();
}

function nextQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("current-question").textContent = currentQuestion + 1;
    document.getElementById("question-text").textContent = question.text;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.answers[index];
        option.onclick = () => selectAnswer(index);
    });
}

function selectAnswer(answerIndex) {
    const question = questions[currentQuestion];
    answers[question.type] += answerIndex; // Incrementamos el puntaje para el bloque correspondiente
    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const maxScore = Math.max(...answers);
    let block;
    if (maxScore === answers[0]) {
        block = blocks.A;
    } else if (maxScore === answers[1]) {
        block = blocks.B;
    } else if (maxScore === answers[2]) {
        block = blocks.C;
    } else {
        block = blocks.D;
    }

    const careersList = document.getElementById("careers-list");
    careersList.innerHTML = ""; // Limpiamos los resultados anteriores

    block.forEach(career => {
        careersList.innerHTML += `
            <div class="career">
                <h3>${career.name}</h3>
                <img src="${career.img}" alt="${career.name}" style="width:250px; height:150px;">
                <p>${career.desc}</p>
            </div>
        `;
    });

    document.getElementById("question-screen").classList.remove("active");
    document.getElementById("results-screen").classList.add("active");
}

function resetTest() {
    currentQuestion = 0;
    answers = [0, 0, 0, 0];
    document.getElementById("results-screen").classList.remove("active");
    document.getElementById("tutorial-screen").classList.add("active");
}

document.getElementById("start-test-btn").onclick = startTest;

// Lista de motivos
const motivos = [
    "Seu sorriso tem o poder de transformar qualquer dia ruim em um dia perfeito.",
    "Cada abraço seu me faz sentir que estou exatamente onde deveria estar.",
    "O jeito como você me olha me faz sentir a pessoa mais especial do mundo.",
    "Com você, até os momentos simples se tornam inesquecíveis.",
    "Amo a forma como você me entende sem que eu precise dizer uma palavra.",
    "Você é minha paz em meio ao caos, meu refúgio e minha felicidade.",
    "Seu toque me dá arrepio na alma e aquece meu coração.",
    "Você me inspira a ser melhor todos os dias, e sou grato por te ter ao meu lado.",
    "A nossa história é a minha favorita, e eu quero escrevê-la com você para sempre.",
    "Te amo não só pelo que você é, mas pelo que sou quando estou com você."
];


function novoMotivo() {
    let motivoTexto = document.getElementById("motivo-texto");
    let randomIndex = Math.floor(Math.random() * motivos.length);
    motivoTexto.textContent = motivos[randomIndex];
}

// Contador de dias juntos
function calcularDiasJuntos() {
    const dataInicio = new Date(2024, 4, 11); // Mês começa do 0 (4 = maio)
    const hoje = new Date();

    let anos = hoje.getFullYear() - startDate.getFullYear();
    let meses = hoje.getMonth() - startDate.getMonth();
    let dias = hoje.getDate() - startDate.getDate();

    // Se os dias forem negativos, pegamos os dias do mês anterior
    if (dias < 0) {
        const previousMonth = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += previousMonth;
        meses--;
    }

    // Se os meses forem negativos, ajustamos o ano
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("contador").innerHTML = 
        `${anos} anos, ${meses} meses e ${dias} dias`;
}

// Data do início do namoro
const startDate = new Date(2024, 4, 11); // Mês começa do 0 (4 = maio)

function updateCounter() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Se os dias forem negativos, pegamos os dias do mês anterior
    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
    }

    // Se os meses forem negativos, ajustamos o ano
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("contador").innerHTML = 
        `${years} anos, ${months} meses e ${days} dias`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter();

// Quiz - Perguntas sobre o relacionamento
const perguntas = [
    { 
        pergunta: "Onde nos conhecemos?", 
        opcoes: ["Igreja", "Festa de aniverssário", "Retiro/acampamento"],
        resposta: "Festa de aniverssário"
    },
    { 
        pergunta: "Qual foi o destino da nossa primeira viagem juntos?", 
        opcoes: ["Ubatuba", "Monte Verde", "Jacutinga"],
        resposta: "Monte Verde"
    },
    { 
        pergunta: "Onde foi nosso primeiro beijo?", 
        opcoes: ["Cinema", "Mc Donald's", "Burguer King"],
        resposta: "Burguer King"
    },
    { 
        pergunta: "Quando é o nosso aniverssário de namoro?", 
        opcoes: ["11 de Maio", "11 de Março", "26 de Maio"],
        resposta: "11 de Maio"
    },
    { 
        pergunta: "Qual o nosso cantor favorito?", 
        opcoes: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes"],
        resposta: "Shawn Mendes"
    }
];

function iniciarQuiz() {
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    
    perguntas.forEach((item, index) => {
        let perguntaHTML = `<div>
            <p>${item.pergunta}</p>`;
        
        item.opcoes.forEach(opcao => {
            perguntaHTML += `
                <input type="radio" name="resposta-${index}" value="${opcao}"> ${opcao} <br>
            `;
        });

        perguntaHTML += `</div>`;
        quizContainer.innerHTML += perguntaHTML;
    });

    quizContainer.innerHTML += `<button class="btn btn-danger btn-custom" onclick="verificarRespostas()">Verificar</button>`;
}

function verificarRespostas() {
    let acertos = 0;

    perguntas.forEach((item, index) => {
        let opcoes = document.getElementsByName(`resposta-${index}`);
        let respostaSelecionada = "";

        opcoes.forEach(opcao => {
            if (opcao.checked) {
                respostaSelecionada = opcao.value;
            }
        });

        if (respostaSelecionada === item.resposta) {
            acertos++;
        }
    });

    if (acertos >= 3) {
        alert(`Você acertou ${acertos} de ${perguntas.length}! Que tal sairmos para um jantar especial no sábado? ❤️`);
    } else {
        alert(`Você acertou ${acertos} de ${perguntas.length}! Mas tente de novo, amor, sei que você consegue! 💕`);
    }
}


// Animação fade-in
document.addEventListener("DOMContentLoaded", () => {
    calcularDiasJuntos();
    document.querySelectorAll(".fade-in").forEach((el) => {
        setTimeout(() => el.classList.add("visible"), 300);
    });
});

/* Reprodução automática do vídeo ao passar o mouse
document.querySelectorAll("video.media-item").forEach(video => {
    video.addEventListener("mouseover", () => video.play());
    video.addEventListener("mouseout", () => video.pause());
}); */

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const source = document.getElementById("music-source");
    const button = document.getElementById("music-toggle");

    // Lista de músicas
    const playlist = [
        "audio/Easy.mp3",
        "audio/NeverBeAlone.mp3",
    ];
    
    let currentTrack = 0;

    // Função para tocar a próxima música
    function playNextTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        source.src = playlist[currentTrack];
        audio.load();
        audio.play();
    }

    // Iniciar música automaticamente
    audio.volume = 0.5;
    audio.play().catch(() => console.log("Autoplay bloqueado pelo navegador"));

    // Alternar reprodução ao clicar no botão
    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            button.innerHTML = "🎵";
        } else {
            audio.pause();
            button.innerHTML = "▶️";
        }
    });

    // Quando a música acabar, toca a próxima
    audio.addEventListener("ended", playNextTrack);
});


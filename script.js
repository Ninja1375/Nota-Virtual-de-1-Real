// Efeito de brilho e zoom na superfície da nota
const nota = document.querySelector('.nota');
nota.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const xPercent = (offsetX / target.offsetWidth) * 100;
    const yPercent = (offsetY / target.offsetHeight) * 100;

    nota.style.background = `linear-gradient(
        135deg,
        #13ADA2 ${xPercent}%, 
        #139DD1 100%
    )`;

});
nota.addEventListener('mouseleave', () => {
    nota.style.background = 'linear-gradient(135deg, #8fbca2, #6d987e)';
});
nota.addEventListener('mouseover', () => {
    nota.style.transform = 'scale(1.05)';
    nota.style.transition = 'transform 0.3s ease-in-out';
});
nota.addEventListener('mouseout', () => {
    nota.style.transform = 'scale(1)';
});

// Configuração do modal
const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal-message');
const closeModalBtn = document.querySelector('.close-btn');

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('show');
});

// Informações interativas ao clicar em diferentes partes da nota
const info = [
    { elemento: '.banco-central', mensagem: 'Banco Central do Brasil: A entidade emissora das cédulas.' },
    { elemento: '.numero-grande-esquerdo', mensagem: 'Número "1": Indica o valor da cédula.' },
    { elemento: '.numero-grande-direito', mensagem: 'Número "1" à direita: Reflete o valor nominal.' },
    { elemento: '.rosto', mensagem: 'Rosto clássico: Simboliza cultura e história.' },
    { elemento: '.valor', mensagem: 'Texto "REAL": Representa a moeda oficial do Brasil.' },
    { elemento: '.educacional', mensagem: 'Texto educacional: Este projeto é apenas para fins de aprendizado.' },
    { elemento: '.serie', mensagem: 'Número de Série: Identificação única de cada cédula.' },
    { elemento: '.texto-adicional', mensagem: 'Deus Seja Louvado": Frase tradicional presente nas cédulas brasileiras.' }
];

info.forEach(item => {
    const elemento = document.querySelector(item.elemento);
    if (elemento) {
        elemento.style.cursor = 'pointer';
        elemento.addEventListener('click', () => {
            modalMessage.textContent = item.mensagem;
            modal.classList.remove('hidden');
            modal.classList.add('show');
        });
    }
});

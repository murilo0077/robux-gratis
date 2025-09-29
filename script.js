document.addEventListener('DOMContentLoaded', () => {
    // Agora o elemento clicável é o parágrafo de texto
    const clickableButton = document.getElementById('clickableButton');
    const overlay = document.getElementById('overlay');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Adiciona um ouvinte de evento de clique ao novo botão de texto
    clickableButton.addEventListener('click', () => {
        // Adiciona a classe 'active' ao overlay para torná-lo visível
        overlay.classList.add('active');

        // Tenta tocar a música
        backgroundMusic.play()
            .then(() => {
                console.log('Música tocando!');
            })
            .catch(error => {
                console.error('Erro ao tentar tocar a música:', error);
                // Pode adicionar um alerta para o usuário ou um fallback aqui
                alert('Não foi possível tocar a música automaticamente. Por favor, interaja com o site para permitir a reprodução.');
            });
    });

    // Adiciona um ouvinte de evento de clique ao overlay para escondê-lo e parar a música
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        backgroundMusic.pause(); // Pausa a música
        backgroundMusic.currentTime = 0; // Reinicia a música para o começo (para quando for tocada novamente)
    });
});
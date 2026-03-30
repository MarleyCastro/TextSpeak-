# 🎙️ Text-to-Speech App (Leitor de Texto)

![Capa do Projeto](https://via.placeholder.com/1000x300/0d0d0d/e8ff47?text=Text-to-Speech+App)
> *Substitua o link acima pela URL de uma captura de tela real da sua aplicação.*

## 🏅 Badges
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-e8ff47?style=for-the-badge&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📑 Índice
- [Descrição do Projeto](#-descrição-do-projeto)
- [Status do Projeto](#-status-do-projeto)
- [Funcionalidades e Demonstração](#-funcionalidades-e-demonstração-da-aplicação)
- [Acesso ao Projeto](#-acesso-ao-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pessoas Contribuidoras](#-pessoas-contribuidoras)
- [Pessoas Desenvolvedoras do Projeto](#-pessoas-desenvolvedoras-do-projeto)
- [Licença](#-licença)

## 📝 Descrição do Projeto
Uma aplicação web interativa que converte texto digitado em fala (Text-to-Speech). O projeto possui uma interface moderna com tema escuro (Dark Mode) e detalhes em neon, oferecendo ao usuário controle total sobre a reprodução do áudio, incluindo opções de pausa, parada e aceleração da velocidade da voz para 2x. Além disso, conta com uma barra de progresso dinâmica que estima o tempo de leitura.

## 🚧 Status do Projeto
**Em Desenvolvimento** ⚠️
*(A lógica de áudio e o estilo estão finalizados, mas o arquivo HTML atual precisa ser atualizado para incluir os identificadores como `<textarea id="text">`, `<button id="click">`, etc., que o JavaScript aguarda).*

## ✨ Funcionalidades e Demonstração da Aplicação
- **Síntese de Voz:** Converte qualquer texto inserido em áudio utilizando a Web Speech API.
- **Controles de Reprodução:** - `Play / Falar`: Inicia a leitura do texto.
  - `Pausar / Retomar`: Pausa ou continua a leitura do ponto onde parou.
  - `Parar`: Interrompe completamente o áudio e zera o tempo.
  - `Velocidade 2x`: Reproduz o texto com o dobro da velocidade padrão.
- **Feedback Visual:** Animação de ondas de áudio (`wave`) enquanto o texto é lido.
- **Barra de Progresso:** Estima a duração da leitura (baseado em uma média de 150 palavras por minuto) e exibe o progresso em tempo real.

## 📁 Acesso ao Projeto
Para rodar este projeto localmente na sua máquina:
1. Faça o clone ou baixe este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador de preferência.

## 💻 Tecnologias Utilizadas
- **HTML5:** Estruturação da página.
- **CSS3:** Estilização avançada com variáveis nativas (`:root`), design responsivo, animações de `keyframes` (ondas sonoras) e UI focada em acessibilidade (cores de contraste).
- **JavaScript (ES6+):** Manipulação da DOM, cálculos de tempo e integração com a **Web Speech API** (`SpeechSynthesisUtterance`).

## 🤝 Pessoas Contribuidoras
Atualmente, este é um projeto pessoal e de estudo. Pull Requests com melhorias ou sugestões de novas funcionalidades (como escolha de diferentes vozes e sotaques) são sempre bem-vindos!

## 👩‍💻 Pessoas Desenvolvedoras do Projeto
Desenvolvido com dedicação por:
* **Marley 🚀** - *Desenvolvedor(a) Front-end* ## 📜 Licença
Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para usá-lo, modificá-lo e compartilhá-lo!

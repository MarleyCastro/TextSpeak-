# Política de Privacidade — TextSpeak 🔊

**Última atualização:** 01 de agosto de 2026

Esta Política de Privacidade descreve como a extensão **TextSpeak** ("a extensão", "nós") lida com informações ao ser utilizada no navegador Google Chrome.

## 1. Resumo

O TextSpeak é uma extensão de **síntese de voz (text-to-speech)** que permite ao usuário ouvir em voz alta qualquer texto selecionado em uma página web, ou digitado diretamente no popup da extensão. Todo o processamento de voz é feito **localmente no navegador**, utilizando a Web Speech API nativa do Chrome.

**O TextSpeak não coleta, armazena, transmite ou vende nenhum dado pessoal do usuário.**

## 2. Quais dados a extensão acessa

Para funcionar, a extensão acessa temporariamente:

- **Texto selecionado pelo usuário** na página ativa, ou texto digitado no popup — usado exclusivamente para ser convertido em áudio pela API de síntese de voz do navegador.

Esse texto:
- É processado **apenas localmente**, no próprio navegador do usuário;
- **Não é enviado a nenhum servidor**, seja da extensão, de terceiros ou do desenvolvedor;
- **Não é armazenado** em disco, cache ou qualquer forma de persistência;
- Deixa de existir na memória assim que a leitura em voz alta termina ou o popup/aba é fechado.

## 3. Permissões utilizadas e justificativa

| Permissão | Finalidade |
|---|---|
| `activeTab` | Capturar o texto selecionado na aba ativa quando o popup é aberto. |
| `scripting` | Executar a função que lê a seleção de texto (`window.getSelection()`) na aba ativa. |
| Acesso a todos os sites (`<all_urls>`) | Exibir a barra de ferramentas flutuante de leitura em voz alta quando o usuário seleciona texto em qualquer página. |

Nenhuma dessas permissões é usada para rastrear a navegação do usuário, coletar histórico, cookies ou qualquer outro dado além do texto momentaneamente selecionado.

## 4. Compartilhamento de dados com terceiros

O TextSpeak **não compartilha, vende ou transfere** nenhum dado a terceiros, pois **nenhum dado é coletado ou armazenado** em primeiro lugar.

## 5. Serviços de terceiros

A extensão **não utiliza** serviços externos de analytics, publicidade, rastreamento ou APIs de terceiros. Toda a funcionalidade de voz depende exclusivamente da Web Speech API já integrada ao navegador.

## 6. Armazenamento local

A extensão não utiliza `chrome.storage` nem qualquer outro mecanismo de armazenamento persistente. Nenhuma preferência, histórico ou dado do usuário é salvo entre sessões.

## 7. Dados de crianças

O TextSpeak não coleta dados de nenhum usuário, incluindo crianças, e não é direcionado especificamente ao público infantil.

## 8. Alterações nesta política

Esta política pode ser atualizada eventualmente para refletir mudanças na extensão. A data da última atualização estará sempre indicada no topo deste documento.

## 9. Contato

Em caso de dúvidas sobre esta Política de Privacidade, entre em contato através do e-mail de suporte informado na página da extensão na Chrome Web Store.

<p align="center">
  <img src="docs/icone.png" width="128" alt="PortFlix">
</p>

<h1 align="center">PortFlix</h1>

<p align="center">
  Todos os <b>ports, recompilações e decompilações</b> de jogos feitos por fãs, num lugar só.<br>
  Para <b>Windows</b> e <b>Linux</b>, em português.
</p>

<p align="center">
  <a href="https://github.com/Isago2508/PortFlix/releases/latest"><img src="https://img.shields.io/github/v/release/Isago2508/PortFlix?label=vers%C3%A3o&color=f5a623&style=for-the-badge" alt="versão"></a>
  <a href="https://github.com/Isago2508/PortFlix/releases"><img src="https://img.shields.io/github/downloads/Isago2508/PortFlix/total?label=downloads&color=2ea043&style=for-the-badge" alt="downloads"></a>
  <img src="https://img.shields.io/badge/Windows%20%7C%20Linux-4a4f57?style=for-the-badge" alt="Windows e Linux">
</p>

<p align="center"><b><a href="https://isago2508.github.io/PortFlix/">🌐 Site oficial</a> · <a href="https://isago2508.github.io/PortFlix/conta.html">Comprar o PRO (R$ 30, vitalício)</a></b></p>

<p align="center">
  <a href="https://github.com/Isago2508/PortFlix/releases/latest/download/PortFlix-Setup.exe"><img src="https://img.shields.io/badge/Baixar%20para%20Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Baixar para Windows"></a>
  <a href="https://github.com/Isago2508/PortFlix/releases/latest/download/PortFlix-Linux-x86_64.tar.gz"><img src="https://img.shields.io/badge/Baixar%20para%20Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Baixar para Linux"></a>
</p>

<p align="center">
  <img src="docs/biblioteca-escuro.png" width="900" alt="Biblioteca do PortFlix">
</p>

---


## O que é

O PortFlix é um catálogo que se atualiza sozinho com os projetos da comunidade que trazem jogos de console para o PC, como Ship of Harkinian, Zelda64Recomp, sm64 e recomps de Xbox 360, PS2 e outros. Ele varre o GitHub e listas da comunidade, mostra capas, avisa quando sai versão nova e organiza os jogos que você já tem.

> **O PortFlix não inclui nem distribui jogos.** Os ports pedem a sua própria cópia original (ROM, ISO ou arquivos do console). Os créditos de cada projeto são dos seus criadores: em cada jogo do app aparecem o autor e o link do repositório original.

## Funções

| | Free | PRO |
|---|:-:|:-:|
| Catálogo de ports, recomps e decomps, atualizado sozinho | ✅ | ✅ |
| Aba **Softwares** (emuladores, ferramentas e programas dos criadores que você segue) | ✅ | ✅ |
| Capas automáticas, com opção de escolher a capa à mão | ✅ | ✅ |
| Avisos de versão nova, com escolha dos tipos de notificação | ✅ | ✅ |
| **Meus jogos**: abra os seus ports por aqui | ✅ | ✅ |
| Visualização em grade, lista ou só capas, com ajuste de tamanho | ✅ | ✅ |
| Tema claro, escuro ou automático; bandeja do sistema, confirmação ao sair e contador de notificações | ✅ | ✅ |
| Cores de tema: vermelho, rosa, roxo, azul e neon | – | ✅ |
| **Baixar dentro do app**, com barra de progresso e opção de extrair | – | ✅ |
| **Assistente com IA** grátis já incluso (ou use o Gemini, ChatGPT, Claude ou Ollama) | – | ✅ |
| **Arquivo do jogo original**: vincula a sua ROM/ISO ao port e coloca na pasta certa | – | ✅ |
| Adicionar projetos próprios e seguir criadores do GitHub | – | ✅ |
| Conectar a conta do GitHub (buscas mais rápidas) | – | ✅ |

O app é o mesmo para todo mundo: ele abre como **Free** e vira **PRO** quando você ativa uma chave.

## Telas

<table>
  <tr>
    <td><img src="docs/biblioteca-claro.png" alt="Tema claro"></td>
    <td><img src="docs/lista.png" alt="Modo lista com tema neon"></td>
  </tr>
  <tr>
    <td align="center">Tema claro</td>
    <td align="center">Modo lista · cor Neon (PRO)</td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/temas.png" alt="Configurações"></td>
  </tr>
  <tr>
    <td colspan="2" align="center">Configurações em seções: temas, bandeja do sistema, notificações e mais</td>
  </tr>
</table>

## Download

Baixe em **[Releases](https://github.com/Isago2508/PortFlix/releases/latest)**:

| Sistema | Arquivo |
|---|---|
| Windows 10 / 11 | `PortFlix-Setup.exe` |
| Linux (x86_64: a maioria dos PCs e o Steam Deck) | `PortFlix-Linux-x86_64.tar.gz` |
| Linux ARM64 (Raspberry Pi e similares) | `PortFlix-Linux-arm64.tar.gz` |

### Windows

1. Abra o `PortFlix-Setup.exe`.
2. Se aparecer **"O Windows protegeu o computador"**, clique em **Mais informações → Executar assim mesmo**. O aviso aparece porque o PortFlix é um programa novo e ainda não tem assinatura digital. Não é vírus.
3. Leia e aceite os termos, escolha a pasta (o padrão é `C:\PortFlix`) e pronto.

Para desinstalar, use **Configurações do Windows → Aplicativos → PortFlix**. Ao instalar uma versão nova, o instalador oferece atualizar mantendo as suas capas e jogos.

> Precisa do Microsoft Edge WebView2, que já vem no Windows 11 e na maioria dos Windows 10.

### Linux

```bash
tar -xzf PortFlix-Linux-x86_64.tar.gz
cd PortFlix
./instalar.sh
```

O PortFlix entra no menu de aplicativos, em **Jogos**. Ele abre numa janela própria usando o Chrome, Chromium, Brave, Edge ou Vivaldi. Sem nenhum deles, abre no seu navegador padrão.

- **Jogos que só têm versão para Windows:** o app abre pelo **Wine**, se ele estiver instalado. Outra opção é adicionar o jogo ao Steam como "jogo não Steam" e ativar o Proton.
- **Programas opcionais:** `zenity` ou `kdialog` (janela para escolher pastas), `wl-clipboard` ou `xclip` (copiar texto).
- **Desinstalar:** `~/.local/share/PortFlix/portflix --desinstalar`

## Ativar o PRO

1. Compre a sua chave com o vendedor. Informe o **e-mail da conta Google, Hotmail ou Outlook** que você vai usar.
2. No PortFlix, clique em **Ativar PRO** (canto superior direito).
3. Entre com **a mesma conta do e-mail informado na compra**. Com outra conta, a ativação não funciona.
4. Cole a chave (`PRADAR-XXXXX-XXXXX-XXXXX-XXXXX`) e clique em **Ativar**.

**Como funciona a licença:**
- **Validade:** a chave vale pelo prazo comprado e conta a partir da ativação.
- **Computadores:** cada chave vale para um número de PCs. Para trocar de computador, use **Sua licença → Remover licença deste PC** antes, ou peça ao vendedor para liberar a vaga.
- **Sem internet:** o app confere a licença de tempos em tempos e funciona até **7 dias** sem internet.
- **Perfil:** em **Configurações → Perfil** você atualiza o seu nome, apelido, data de nascimento, telefone e cidade.

## Dicas

- **Arquivo do jogo original:** no **⋯** de um jogo, escolha a ROM ou ISO que **você extraiu do seu próprio cartucho ou disco**. Se o port pedir, informe também o nome do arquivo (por exemplo `baserom.us.z64`). O PortFlix coloca o arquivo na pasta do jogo sempre que você instala ou atualiza. A janela tem um link para o guia de como extrair o jogo do seu console.
- **Criadores que sigo:** em Configurações, siga qualquer usuário ou organização do GitHub. Todos os projetos dessa pessoa entram no catálogo.
- **Assistente:**
  - O assistente grátis já vem incluso no PRO, com um limite de mensagens por dia.
  - Para conversar sem limite, use a sua própria chave em **Configurações → Assistente**. O Gemini tem cota gratuita.
  - O assistente não indica onde baixar jogos.
- **Atalhos:** `F5` varre de novo e `Ctrl+F` busca.

## Privacidade

O PortFlix guarda as suas configurações só no seu computador. Para ativar o PRO, o servidor de licenças recebe:
- o **nome** e o **e-mail** da conta com que você entrou;
- um **código do computador**, que não identifica você.

Ele não acessa os seus e-mails, arquivos nem contatos. Política completa: https://portsradar-licencas.portsradar-hugo.workers.dev/privacidade

## Termos de uso

- **Uso pessoal.** O PortFlix serve para reunir, num lugar só, os projetos da comunidade.
- **Os créditos são dos criadores.** Cada port pertence a quem o desenvolveu. O PortFlix não é autor de nenhum desses projetos nem tem ligação com eles. Apoie os criadores pelos links de cada projeto.
- **Nada de jogos.** O app não inclui, não busca e não distribui ROMs, ISOs ou arquivos de jogos.
- **Marcas** de jogos, consoles e empresas pertencem aos seus donos. O PortFlix não é ligado nem aprovado pela Nintendo, Sony, Microsoft, Sega ou outras empresas.
- **Sem garantia.** Os ports são projetos de fãs, muitas vezes em desenvolvimento. Use por sua conta.
- O PRO cobra pelas **funções do aplicativo**, nunca pelos jogos ou pelos ports.

**É criador de um port e não quer o seu projeto no catálogo?** Abra uma *issue* ou mande um e-mail que ele é removido.

## Suporte

- **E-mail:** hugofernandes30@gmail.com
- **Problemas e sugestões:** use a aba [Issues](https://github.com/Isago2508/PortFlix/issues)

# PortFlix · Novidades / Changelog

<details open>
<summary><h2>🇧🇷 Português</h2></summary>

### 1.4.0 (20/10/2026)

#### 💬 Atendimento por chat (site + app + WhatsApp)
- Novo botão **Suporte** no topo do app (ao lado de Site e GitHub): abre um chat para falar com o atendimento do PortFlix. A resposta aparece no próprio chat e chega como aviso no sino e na bandeja.
- O **site** ganhou o balão **Falar com a gente**, no canto da tela, em português e inglês. A conversa fica salva no navegador, e as respostas aparecem ali mesmo.
- Cada mensagem nova avisa o atendimento no **WhatsApp**.
- **Só no PortFlix DEV:** nova aba **Atendimento**, com todas as conversas do site e do app, contador de não lidas, resposta direta, copiar e-mail e apagar conversa. Mensagem nova gera aviso no sino e na bandeja.
- Proteção contra spam: no máximo 20 mensagens por hora de cada lugar.
- Nova opção em Configurações → Notificações: **Mensagens do atendimento**.

#### 🖼️ Aviso sobre as capas
- Na janela **Escolher capa**, em Configurações → Biblioteca, na primeira configuração e no aviso de "Capas atualizadas": as capas automáticas são buscadas pelo nome do jogo e **nem sempre batem com o jogo certo**, e você pode trocar qualquer uma do jeito que quiser (uma sugestão, um link de imagem ou um arquivo do PC). A capa escolhida à mão nunca é trocada pelas automáticas.
- O mesmo aviso foi para o site (com uma pergunta nova nas Dúvidas), o README e o LEIA-ME.

#### 🔗 Site e GitHub no topo do app
- Dois botões novos no topo, ao lado do logo: **Site** abre o site do PortFlix e **GitHub** abre a página do projeto, com as versões, o código e o histórico de novidades.
- Em janelas mais estreitas, os botões ficam só com o ícone, para não apertar o resto do topo.

#### 🎮 Teste do controle novo
- O teste em Configurações → Controle agora mostra um **desenho do controle**, no lugar da fileira de botões.
- Cada botão acende e "afunda" quando é apertado, com brilho na cor do tema.
- Os **analógicos se mexem** em tempo real dentro do círculo, com a zona morta desenhada e uma linha mostrando a direção. Apertar o analógico (L3/R3) acende ele.
- Os **gatilhos** (LT/RT, L2/R2, ZL/ZR) mostram a pressão numa barrinha, de 0% a 100%.
- Embaixo aparece a leitura ao vivo: botões apertados, posição dos dois analógicos e pressão dos gatilhos.
- Controles sem o mapeamento padrão mostram o número de cada botão, para ajudar a remapear.
- **Correção:** o teste não acompanhava os botões em alguns controles. Agora ele tem um acompanhamento próprio enquanto a aba Controle está aberta, e também percebe na hora quando um controle é conectado ou desconectado.
- O desenho segue o tema claro ou escuro e as cores do PRO.

### 1.3.0 (19/10/2026)

#### 🎮 Controle no estilo da Steam: nova aba Configurações → Controle
- **Controles conectados:** mostra o nome de cada controle, o tipo reconhecido (Xbox, PlayStation ou Nintendo), quantos botões ele tem e se ele vibra. Quando você conecta um controle, aparece um aviso na tela.
- **Teste ao vivo:** cada botão acende na tela quando é apertado, e os dois analógicos mostram a posição em tempo real, com o círculo da zona morta desenhado.
- **Estilo dos botões na tela:** Automático (reconhece pelo controle), Xbox (A, B, X, Y), PlayStation (✕, ○, □, △) ou Nintendo (B, A, Y, X).
- **Trocar Confirmar e Voltar**, do jeito dos consoles da Nintendo.
- **Remapear cada ação:** Confirmar/abrir, Voltar/fechar, Página do jogo, Fileira de cima, Fileira de baixo, Sair do Modo TV e Abrir o Modo TV. Clique em **Mudar** e aperte o botão que quiser.
- **Zona morta do analógico** ajustável, de 15% a 85%.
- **Velocidade de navegação** ajustável, de 0,5x a 2x.
- **Vibração** leve ao navegar (pode desligar) e botão **Testar vibração**.
- **Restaurar o padrão** volta todos os botões e ajustes.
- As mudanças valem na hora, sem precisar clicar em Salvar.
- Funciona com controles USB e Bluetooth de Xbox, PlayStation, Nintendo e genéricos.

#### 📺 Modo TV (PRO)
- Apertar **Menu / Options / +** no controle abre o Modo TV de qualquer tela. Dá para desligar em Configurações → Controle.
- **Y / △** abre a página do jogo selecionado.
- **LB / RB** (L1 / R1) pulam para a fileira de cima ou de baixo.
- Dá para navegar e confirmar com o controle dentro das janelas que abrem por cima do Modo TV, como a página do jogo e os avisos.
- As dicas no topo mostram os botões do **seu** controle, por exemplo "✕ abrir · ○ voltar · △ detalhes".

#### ⬆️ Atualizar pelo próprio PortFlix
- Novo botão **Instalar atualização** em Configurações → Atualizações: baixa e instala a versão nova sem abrir o navegador, com barra de progresso (que também aparece na barra de atividade, embaixo).
- **Windows:** o instalador roda em segundo plano, sem janelas. Ele atualiza a pasta onde o PortFlix já está e mantém os atalhos da Área de Trabalho e do Menu Iniciar. Capas, downloads e dados não são mexidos.
- **Linux:** o programa é trocado no mesmo lugar.
- No final aparece a janela **Atualização pronta**, com duas opções:
  - **Reiniciar agora:** fecha o PortFlix e abre de novo, já na versão nova.
  - **Atualizar depois:** você continua usando, e a versão nova vale na próxima vez que abrir o PortFlix. Enquanto isso, o botão do topo vira **⟳ Reiniciar**.
- Os botões **Baixar pelo GitHub** e **Abrir o site** continuam lá, para quem preferir baixar na mão.
- Se o arquivo da sua edição não estiver na versão publicada no GitHub, o app avisa e mostra as outras opções.
- PortFlix usado sem instalar (só o .exe) no Windows: abre o instalador normal.

#### 🤖 Assistente
- Nova busca de **projetos em andamento**. Ela junta:
  - os ports, recomps e decomps do catálogo que ainda não lançaram versão ou que estão em teste (alpha, beta, RC, versões 0.x);
  - os repositórios ativos no GitHub nos últimos 3 meses (com 5 estrelas ou mais) que ainda não estão no catálogo.
- Perguntas como **"o que vai sair?"**, **"o que está para lançar?"** ou **"quais projetos estão em andamento?"** são respondidas com uma lista: jogo, projeto, situação (sem versão ainda, em teste ou ativo), última atividade e link do GitHub. O assistente também procura notícias na web.
- Ele avisa que projetos de fãs não têm data de lançamento garantida e oferece colocar no radar os projetos que ainda não estão no catálogo.
- O assistente agora pesquisa direto, sem perguntar "deseja que eu pesquise?", e não mostra mais nomes de comandos internos na resposta (como `search_catalog query=...`).

#### 🔔 Avisos
- Clicar no aviso de **projeto novo no radar** abre a página do projeto no GitHub. Se o aviso tiver vários projetos, aparece uma lista para escolher qual abrir, e o botão **Ver no catálogo**.
- Clicar no aviso de **versão nova** de um jogo ou software abre a página daquela versão no GitHub.
- Antes de abrir qualquer site, aparece a janela **Abrir site externo?** com o endereço completo, para confirmar ou cancelar.
- Os avisos de atualização dos seus jogos e do próprio PortFlix continuam levando para Meus jogos e para Configurações → Atualizações.

#### 🐧 Linux
- **Instalador gráfico** com as mesmas telas do instalador do Windows: boas-vindas, termos de uso, pasta, instalação e concluído.
  - Escolha da pasta (padrão: `~/.local/share/PortFlix`).
  - Atalho no menu de aplicativos (categoria Jogos) e na área de trabalho, cada um com a sua opção.
  - Opção de abrir o PortFlix ao terminar.
- Se o PortFlix já estiver instalado, o instalador mostra a versão e oferece **Atualizar**, **Reinstalar do zero** ou **Desinstalar**.
- Ao atualizar, o instalador fecha o PortFlix aberto. Isso corrige o caso em que a versão antiga continuava aparecendo depois da atualização.
- O `instalar.sh` funciona também a partir de HD externo, pendrive ou partição do Windows (NTFS ou exFAT): ele copia o programa para uma pasta temporária e roda de lá.
- Sem tela gráfica (por exemplo, por SSH), a instalação continua pelo terminal.
- **Desinstalar o PortFlix** aparece no menu do botão direito do atalho do PortFlix.
- O **PortFlix DEV** tem pasta própria e abre ao mesmo tempo que o PortFlix normal, cada um na sua janela e com a sua conta. Na primeira vez, ele traz os avisos, a biblioteca e o catálogo da pasta antiga.
- **Reiniciar** pelo app (depois de atualizar) fecha a janela antiga e abre a nova.

#### 💬 Comunidade e contato
- Nova seção **Ajuda e comunidade** em Configurações → Atualizações, com botões para o **Discord** (em construção), o **WhatsApp**, o **site** e o **histórico de novidades**.
- O Discord também foi adicionado ao LEIA-ME, ao README, ao site e às páginas de privacidade e de termos.

#### 🌐 Site e GitHub
- O site agora tem um **botão de idioma (PT / EN)** no mesmo endereço, e a página **Minha conta** também troca de idioma.
- **Preços** com três cartões clicáveis: Free, PRO 1 PC (R$ 30) e PRO 2 PCs (R$ 50), todos vitalícios com pagamento único.
- Compra pelo **Mercado Pago**, com a chave aparecendo na hora em Minha conta, ou **Pix pelo WhatsApp**.
- README e CHANGELOG em português e inglês na mesma página.

### 1.2.0 (19/10/2026)

**Novo no PRO**
- **Favoritos e listas:** marque jogos com ★ e organize em *Quero jogar*, *Jogando agora* e *Zerados*. Filtro de listas no Explorar e em Meus jogos.
- **Tempo de jogo:** o PortFlix conta quanto tempo você jogou cada port e ordena por "Mais tempo de jogo".
- **Modo TV:** tela cheia estilo Big Picture, com navegação por controle (Xbox, PlayStation e genéricos) ou setas.
- **Página do jogo:** imagens do projeto, novidades da versão, tradução pelo Assistente, vídeos no YouTube e o que você precisa do jogo original.
- **Sincronizar entre PCs:** favoritos, listas, tempo de jogo, ocultos e criadores que você segue nos 2 PCs do plano.
- **Exportar e importar a biblioteca:** um arquivo para levar ao formatar ou trocar de PC.
- **Pendrive (modo técnico):** copie os ports para um pendrive e instale em outro PC sem baixar de novo.
- **Widget na bandeja (Windows):** os últimos lançamentos no menu do ícone da bandeja.
- **Avisos na hora** de versão nova.

**Mudanças no Free**
- Os avisos de versão nova chegam 24 horas depois do lançamento.
- O catálogo atualiza sozinho 1 vez por dia.
- Meus jogos guarda até 5 jogos.
- Filtros por console, ordem, listas e "Últimos 7 dias" e a escolha manual de capa passaram para o PRO.

**Para todos**
- Nova aba **Configurações → Atualizações**: mostra a versão instalada, procura a mais nova no GitHub e atualiza com 1 clique.
- Aviso de versão nova do PortFlix no sino, na bandeja e no botão "⬆ Atualizar".
- Configurações agora abrem direto na aba Geral (antes podia abrir em branco).
- Linux: o PortFlix e o PortFlix DEV agora abrem ao mesmo tempo, cada um na sua janela e com a sua conta.
- Tela de ativação com o botão para comprar o PRO (1 PC R$ 30 · 2 PCs R$ 50).

### 1.1.0 (19/10/2026)
- Temas claro, escuro ou automático; cores vermelho, rosa, roxo, azul e neon (PRO).
- Minimizar para a bandeja, confirmação ao sair, avisos de download na bandeja e contador de notificações no ícone.
- Configurações organizadas em seções.

### 1.0.0
- Primeira versão pública: catálogo de ports, recomps e decomps, capas, avisos, Meus jogos, abas Jogos e Softwares, download no app, Assistente com IA e arquivo do jogo original.

</details>

<details>
<summary><h2>🇺🇸 English</h2></summary>

### 1.4.0 (2026-10-20)

#### 💬 Chat support (website + app + WhatsApp)
- New **Suporte** (Support) button at the top of the app (next to Site and GitHub): opens a chat with PortFlix support. Replies show up in the chat itself and arrive as alerts in the bell and the tray.
- The **website** got a **Talk to us** bubble in the corner of the screen, in Portuguese and English. The conversation is saved in the browser and replies show up right there.
- Every new message notifies support on **WhatsApp**.
- **PortFlix DEV only:** new **Atendimento** (Support) tab with every conversation from the website and the app, unread counter, direct reply, copy e-mail and delete conversation. New messages create alerts in the bell and the tray.
- Spam protection: at most 20 messages per hour from each place.
- New option in Settings → Notifications: **Support messages**.

#### 🖼️ Note about covers
- In the **Choose cover** window, in Settings → Library, in the first-run setup and in the "Covers updated" notice: automatic covers are found by the game's name and **don't always match the right game**, and you can swap any of them however you like (a suggestion, an image link or a file from your PC). A cover chosen by hand is never replaced by automatic ones.
- The same note went to the website (with a new FAQ question), the README and the LEIA-ME.

#### 🔗 Website and GitHub at the top of the app
- Two new buttons at the top, next to the logo: **Site** opens the PortFlix website and **GitHub** opens the project page, with releases, code and changelog.
- In narrower windows the buttons show only the icon, so the rest of the top bar isn't squeezed.

#### 🎮 New controller test
- The test in Settings → Controller now shows a **drawing of the controller** instead of a row of buttons.
- Each button lights up and "presses in" when pressed, with a glow in the theme color.
- The **sticks move** in real time inside their circle, with the dead zone drawn and a line showing the direction. Clicking a stick (L3/R3) lights it up.
- **Triggers** (LT/RT, L2/R2, ZL/ZR) show their pressure in a small bar, from 0% to 100%.
- Below it, a live readout: pressed buttons, position of both sticks and trigger pressure.
- Controllers without the standard mapping show each button's number, to help with remapping.
- **Fix:** the test didn't follow the buttons on some controllers. It now has its own update loop while the Controller tab is open, and notices right away when a controller is connected or disconnected.
- The drawing follows the light or dark theme and the PRO colors.

### 1.3.0 (2026-10-19)

#### 🎮 Steam-style controller settings: new Settings → Controller tab
- **Connected controllers:** shows each controller's name, the detected type (Xbox, PlayStation or Nintendo), how many buttons it has and whether it vibrates. A notice appears on screen when you plug in a controller.
- **Live test:** every button lights up on screen when pressed, and both sticks show their position in real time, with the dead zone circle drawn.
- **On-screen button style:** Automatic (detected from the controller), Xbox (A, B, X, Y), PlayStation (✕, ○, □, △) or Nintendo (B, A, Y, X).
- **Swap Confirm and Back**, the Nintendo way.
- **Remap every action:** Confirm/open, Back/close, Game page, Row up, Row down, Exit TV Mode and Open TV Mode. Click **Mudar** (Change) and press the button you want.
- Adjustable **stick dead zone**, from 15% to 85%.
- Adjustable **navigation speed**, from 0.5x to 2x.
- Light **vibration** while navigating (can be turned off) and a **Test vibration** button.
- **Restore defaults** resets all buttons and settings.
- Changes apply instantly, no need to click Save.
- Works with USB and Bluetooth Xbox, PlayStation, Nintendo and generic controllers.

#### 📺 TV Mode (PRO)
- Pressing **Menu / Options / +** on the controller opens TV Mode from any screen. You can turn this off in Settings → Controller.
- **Y / △** opens the selected game's page.
- **LB / RB** (L1 / R1) jump to the row above or below.
- You can navigate and confirm with the controller inside the windows that open over TV Mode, such as the game page and alerts.
- The hints at the top show **your** controller's buttons, e.g. "✕ open · ○ back · △ details".

#### ⬆️ Update from PortFlix itself
- New **Install update** button in Settings → Updates: downloads and installs the new version without opening the browser, with a progress bar (also shown in the activity bar at the bottom).
- **Windows:** the installer runs in the background, with no windows. It updates the folder where PortFlix already is and keeps the Desktop and Start Menu shortcuts. Covers, downloads and data are not touched.
- **Linux:** the program is replaced in place.
- At the end, the **Update ready** window offers two options:
  - **Restart now:** closes PortFlix and opens it again, already on the new version.
  - **Update later:** keep using it; the new version applies the next time you open PortFlix. Meanwhile, the top button becomes **⟳ Restart**.
- The **Download from GitHub** and **Open the website** buttons are still there, for those who prefer to download manually.
- If the file for your edition isn't in the version published on GitHub, the app tells you and shows the other options.
- PortFlix used without installing (just the .exe) on Windows: opens the regular installer.

#### 🤖 Assistant
- New **projects in progress** search. It brings together:
  - catalog ports, recomps and decomps that haven't released a version yet or are in testing (alpha, beta, RC, 0.x versions);
  - repositories active on GitHub in the last 3 months (with 5 or more stars) that aren't in the catalog yet.
- Questions like **"what's coming?"**, **"what's about to be released?"** or **"which projects are in progress?"** are answered with a list: game, project, status (no release yet, in testing or active), last activity and GitHub link. The assistant also searches the web for news.
- It warns that fan projects have no guaranteed release date and offers to add projects that aren't in the catalog yet to the radar.
- The assistant now searches right away, without asking "do you want me to search?", and no longer shows internal command names in replies (like `search_catalog query=...`).

#### 🔔 Alerts
- Clicking a **new project on the radar** alert opens the project page on GitHub. If the alert has several projects, a list lets you choose which one to open, plus a **See in catalog** button.
- Clicking a **new version** alert for a game or software opens that release's page on GitHub.
- Before opening any website, an **Open external site?** window shows the full address so you can confirm or cancel.
- Update alerts for your games and for PortFlix itself still take you to My games and to Settings → Updates.

#### 🐧 Linux
- **Graphical installer** with the same screens as the Windows installer: welcome, terms of use, folder, installation and done.
  - Folder choice (default: `~/.local/share/PortFlix`).
  - App menu shortcut (Games category) and desktop shortcut, each with its own option.
  - Option to open PortFlix when finished.
- If PortFlix is already installed, the installer shows the version and offers **Update**, **Clean reinstall** or **Uninstall**.
- When updating, the installer closes the running PortFlix. This fixes the case where the old version kept showing up after updating.
- `instalar.sh` also works from external drives, USB sticks and Windows partitions (NTFS or exFAT): it copies the program to a temporary folder and runs it from there.
- Without a graphical session (e.g. over SSH), installation still works in the terminal.
- **Desinstalar o PortFlix** (Uninstall) appears in the right-click menu of the PortFlix shortcut.
- **PortFlix DEV** has its own folder and opens at the same time as regular PortFlix, each in its own window and with its own account. The first time, it brings over alerts, library and catalog from the old folder.
- **Restarting** from the app (after updating) closes the old window and opens the new one.

#### 💬 Community and contact
- New **Help and community** section in Settings → Updates, with buttons for **Discord** (work in progress), **WhatsApp**, the **website** and the **changelog**.
- Discord was also added to the LEIA-ME, the README, the website and the privacy and terms pages.

#### 🌐 Website and GitHub
- The website now has a **language button (PT / EN)** on the same address, and the **My account** page switches language too.
- **Pricing** with three clickable cards: Free, PRO 1 PC (R$ 30) and PRO 2 PCs (R$ 50), all lifetime with a one-time payment.
- Purchase with **Mercado Pago**, with the key showing up instantly in My account, or via **WhatsApp**.
- README and CHANGELOG in Portuguese and English on the same page.

### 1.2.0 (2026-10-19)

**New in PRO**
- **Favorites and lists:** star games and organize them into *Want to play*, *Playing now* and *Finished*. List filter in Explore and My games.
- **Play time:** PortFlix counts how long you played each port and can sort by "Most played".
- **TV Mode:** full screen, Big Picture style, navigable with a controller (Xbox, PlayStation and generic) or the arrow keys.
- **Game page:** project screenshots, release notes, translation by the Assistant, YouTube videos and what you need from the original game.
- **Sync between PCs:** favorites, lists, play time, hidden projects and followed creators across the PCs on your plan.
- **Export and import your library:** one file to take with you when you format or change PCs.
- **USB drive (technician mode):** copy your ports to a USB drive and install them on another PC without downloading again.
- **Tray widget (Windows):** latest releases in the tray icon menu.
- **Instant** new version alerts.

**Changes in Free**
- New version alerts arrive 24 hours after the release.
- The catalog updates by itself once a day.
- My games keeps up to 5 games.
- Filters by console, sorting, lists and "Last 7 days", and picking covers by hand, are now PRO.

**For everyone**
- New **Settings → Updates** tab: shows your version, checks GitHub for the newest one and updates with 1 click.
- PortFlix update alert in the bell, in the tray and on the "⬆ Atualizar" button.
- Settings now open on the General tab (they could open blank before).
- Activation screen with a button to buy PRO (1 PC R$ 30 · 2 PCs R$ 50).
- Linux: PortFlix and PortFlix DEV now open at the same time, each in its own window and with its own account.

### 1.1.0 (2026-10-19)
- Light, dark or automatic theme; red, pink, purple, blue and neon colors (PRO).
- Minimize to tray, exit confirmation, download alerts in the tray and notification counter on the icon.
- Settings organized in sections.

### 1.0.0
- First public version: catalog of ports, recomps and decomps, covers, alerts, My games, Games and Software tabs, in-app download, AI Assistant and original game file.

</details>

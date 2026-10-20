<p align="center">
  <img src="docs/icone.png" width="128" alt="PortFlix">
</p>

<h1 align="center">PortFlix</h1>

<p align="center"><b>🇺🇸 English</b> · <a href="README.pt-BR.md">🇧🇷 Português</a></p>

<p align="center">
  Every fan-made <b>PC port, recompilation and decompilation</b> of console games, in one place.<br>
  For <b>Windows</b> and <b>Linux</b>.
</p>

<p align="center">
  <a href="https://github.com/Isago2508/PortFlix/releases/latest"><img src="https://img.shields.io/github/v/release/Isago2508/PortFlix?label=version&color=f5a623&style=for-the-badge" alt="version"></a>
  <a href="https://github.com/Isago2508/PortFlix/releases"><img src="https://img.shields.io/github/downloads/Isago2508/PortFlix/total?label=downloads&color=2ea043&style=for-the-badge" alt="downloads"></a>
  <img src="https://img.shields.io/badge/Windows%20%7C%20Linux-4a4f57?style=for-the-badge" alt="Windows and Linux">
</p>

<p align="center"><b><a href="https://isago2508.github.io/PortFlix/en/">🌐 Official website</a> · <a href="https://isago2508.github.io/PortFlix/en/account.html">Get PRO for life (1 PC R$ 30 · 2 PCs R$ 50)</a></b></p>

<p align="center">
  <a href="https://github.com/Isago2508/PortFlix/releases/latest/download/PortFlix-Setup.exe"><img src="https://img.shields.io/badge/Download%20for%20Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download for Windows"></a>
  <a href="https://github.com/Isago2508/PortFlix/releases/latest/download/PortFlix-Linux-x86_64.tar.gz"><img src="https://img.shields.io/badge/Download%20for%20Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download for Linux"></a>
</p>

<p align="center">
  <img src="docs/biblioteca-escuro.png" width="900" alt="PortFlix library">
</p>

---

## What it is

PortFlix is a self-updating catalog of the community projects that bring console games to the PC, like Ship of Harkinian, Zelda64Recomp, sm64 and Xbox 360, PS2 and N64 recomps. It scans GitHub and community lists, finds covers, tells you when a new version is out and organizes the games you already have.

> **PortFlix does not include or distribute games.** Ports require your own original copy (ROM, ISO or console files). Every project belongs to its creators: each game in the app shows the author and a link to the original repository.

> **Language:** the app interface is currently in Brazilian Portuguese. The website, this page and the release notes are available in English and Portuguese.

## Features

| | Free | PRO |
|---|:-:|:-:|
| Catalog of ports, recomps and decomps | ✅ once a day | ✅ every hour or whenever you want |
| New version alerts | ✅ 24 h later | ✅ **instantly** |
| **Software** tab and automatic covers | ✅ | ✅ |
| **My games** | ✅ up to 5 | ✅ unlimited |
| Light or dark theme, system tray, app update alerts | ✅ | ✅ |
| Filters by console, sorting and "Last 7 days"; pick covers by hand | – | ✅ |
| **Favorites and lists** (Want to play, Playing now, Finished) | – | ✅ |
| **Play time** for each port | – | ✅ |
| **TV Mode** with controller support (Big Picture style) | – | ✅ |
| **Game page**: screenshots, translated patch notes, videos | – | ✅ |
| **Download inside the app**, with progress bar and extraction | – | ✅ |
| Free **AI Assistant** included | – | ✅ |
| **Original game file** placed in the right folder | – | ✅ |
| **Sync between PCs**, export and import your library | – | ✅ |
| **USB drive (technician mode)**: take your ports to another PC | – | ✅ |
| Latest releases widget in the tray (Windows) | – | ✅ |
| Theme colors: red, pink, purple, blue and neon | – | ✅ |
| Your own projects, follow creators and connect GitHub | – | ✅ |

**PRO for life:** 1 PC for **R$ 30** or 2 PCs for **R$ 50** (Brazilian reais), one-time payment. Buy it on the [website](https://isago2508.github.io/PortFlix/en/#pricing) (Mercado Pago) or [message us on WhatsApp](https://wa.me/5548988516188) to pay another way.

The app is the same for everyone: it opens as **Free** and becomes **PRO** when you activate a key.

## What's new

See what changed in each version in the **[CHANGELOG](CHANGELOG.md)**. PortFlix itself tells you when a new version is out and updates from **Configurações → Atualizações** (Settings → Updates).

## Screenshots

<table>
  <tr>
    <td><img src="docs/biblioteca-claro.png" alt="Light theme"></td>
    <td><img src="docs/lista.png" alt="List view with neon theme"></td>
  </tr>
  <tr>
    <td align="center">Light theme</td>
    <td align="center">List view · Neon color (PRO)</td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/temas.png" alt="Settings"></td>
  </tr>
  <tr>
    <td colspan="2" align="center">Settings organized in sections: themes, system tray, notifications and more</td>
  </tr>
</table>

## Download

Get it from **[Releases](https://github.com/Isago2508/PortFlix/releases/latest)**:

| System | File |
|---|---|
| Windows 10 / 11 | `PortFlix-Setup.exe` |
| Linux (x86_64: most PCs and the Steam Deck) | `PortFlix-Linux-x86_64.tar.gz` |
| Linux ARM64 (Raspberry Pi and similar) | `PortFlix-Linux-arm64.tar.gz` |

### Windows

1. Run `PortFlix-Setup.exe`.
2. If you see **"Windows protected your PC"**, click **More info → Run anyway**. The warning shows up because PortFlix is a new program without a digital signature yet. It is not a virus.
3. Read and accept the terms, choose the folder (default `C:\PortFlix`) and you're done.

To uninstall, use **Windows Settings → Apps → PortFlix**. When you install a new version, the installer offers to update while keeping your covers and games.

> Requires Microsoft Edge WebView2, which already comes with Windows 11 and most Windows 10 installs.

### Linux

```bash
tar -xzf PortFlix-Linux-x86_64.tar.gz
cd PortFlix
./instalar.sh
```

PortFlix shows up in your app menu under **Games**. It opens in its own window using Chrome, Chromium, Brave, Edge or Vivaldi. Without any of them, it opens in your default browser.

- **Windows-only games:** the app opens them with **Wine**, if installed. You can also add the game to Steam as a "non-Steam game" and enable Proton.
- **Optional tools:** `zenity` or `kdialog` (folder picker), `wl-clipboard` or `xclip` (copy text).
- **Uninstall:** `~/.local/share/PortFlix/portflix --desinstalar`

## Activating PRO

1. Buy your key and give the **Google, Hotmail or Outlook e-mail** you are going to use.
2. In PortFlix, click **Ativar PRO** (top right corner).
3. Sign in with **the same e-mail used for the purchase**. With another account, activation won't work.
4. Paste the key (`PRADAR-XXXXX-XXXXX-XXXXX-XXXXX`) and click **Ativar**.

**How the license works:**
- **Lifetime:** keys sold on the website never expire.
- **Computers:** each key is valid for 1 or 2 PCs. To switch computers, use **Sua licença → Remover licença deste PC** first, or ask us to free the slot.
- **Offline:** the app checks the license from time to time and works up to **7 days** without internet.

## Tips

- **Original game file:** in a game's **⋯** menu, pick the ROM or ISO that **you dumped from your own cartridge or disc**. PortFlix places it in the game folder every time you install or update.
- **Followed creators:** in Settings, follow any GitHub user or organization and all their projects join the catalog.
- **Assistant:** the free assistant comes with PRO, with a daily message limit. For unlimited use, add your own key (Gemini has a free tier). The assistant never points to game downloads.
- **TV Mode:** click the TV icon at the top. Use the arrow keys or a controller; **A/Enter** opens and **B/Esc** exits.
- **USB drive:** in My games → **Pendrive…**, copy your games to a USB drive and, on the other PC, use **Install from USB drive**.
- **Shortcuts:** `F5` scans again and `Ctrl+F` searches.

## Privacy

PortFlix keeps your settings on your own computer. To activate PRO, the license server receives:
- the **name** and **e-mail** of the account you signed in with;
- a **computer code** that does not identify you.

It never accesses your e-mails, files or contacts. Full policy (Portuguese): https://portsradar-licencas.portsradar-hugo.workers.dev/privacidade

## Terms of use

- **Personal use.** PortFlix gathers community projects in one place.
- **Credit goes to the creators.** Each port belongs to whoever made it. PortFlix is not the author of these projects and is not affiliated with them. Support the creators through each project's links.
- **No games.** The app does not include, search for or distribute ROMs, ISOs or game files.
- **Trademarks** of games, consoles and companies belong to their owners. PortFlix is not affiliated with or endorsed by Nintendo, Sony, Microsoft, Sega or any other company.
- **No warranty.** Ports are fan projects, often in development. Use at your own risk.
- PRO charges for the **app features**, never for games or ports.

**Are you a port creator and don't want your project in the catalog?** Open an *issue* or send an e-mail and it will be removed.

## Support

- **WhatsApp:** [+55 48 98851-6188](https://wa.me/5548988516188)
- **E-mail:** hugofernandes30@gmail.com
- **Bugs and suggestions:** [Issues](https://github.com/Isago2508/PortFlix/issues)

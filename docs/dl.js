// Os arquivos da release levam a versão no nome (PortFlix-1.5.0-Setup.exe).
// Este script acha os arquivos da versão mais nova e liga os botões de download direto neles.
(function () {
  const links = document.querySelectorAll("a[data-asset]");
  if (!links.length) return;
  const norm = n => n.replace(/-v?\d+\.\d+(\.\d+)?/g, "").toLowerCase();
  fetch("https://api.github.com/repos/Isago2508/PortFlix/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
    .then(r => (r.ok ? r.json() : null))
    .then(rel => {
      if (!rel || !rel.assets) return;
      const map = {};
      for (const a of rel.assets) map[norm(a.name)] = a.browser_download_url;
      links.forEach(l => { const u = map[l.dataset.asset.toLowerCase()]; if (u) l.href = u; });
    })
    .catch(() => {}); // sem resposta: o botão abre a página da versão mais nova
})();

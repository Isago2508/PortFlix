// Fundo do topo do site: luz ambiente de setup gamer + avisos do PortFlix aparecendo,
// mostrando o que o app faz (avisar quando sai port novo ou versão nova).
(function () {
  const heroes = document.querySelectorAll(".hero");
  if (!heroes.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FEED = [
    ["PS4", "port", "God of War III Remastered", { pt: "Port novo para PC", en: "New PC port" }],
    ["N64", "port", "Zelda: Ocarina of Time", { pt: "Versão nova disponível", en: "New version available" }],
    ["X360", "recomp", "Sonic Unleashed", { pt: "Recompilação atualizada", en: "Recompilation updated" }],
    ["PS4", "port", "Bloodborne", { pt: "Versão nova disponível", en: "New version available" }],
    ["PS2", "decomp", "Jak and Daxter", { pt: "Decompilação atualizada", en: "Decompilation updated" }],
    ["N64", "recomp", "Zelda: Majora's Mask", { pt: "Versão nova disponível", en: "New version available" }],
    ["XBOX", "recomp", "Mortal Kombat: Shaolin Monks", { pt: "Port novo para PC", en: "New PC port" }],
    ["PS4", "port", "Uncharted", { pt: "Versão nova disponível", en: "New version available" }],
    ["N64", "port", "Mario Kart 64", { pt: "Versão nova disponível", en: "New version available" }],
    ["X360", "recomp", "Sonic the Hedgehog (2006)", { pt: "Port novo para PC", en: "New PC port" }],
  ];
  const COL = { port: "#3d9bff", recomp: "#ff5c8a", decomp: "#38d07f" };
  const lang = () => (document.documentElement.dataset.lang === "en" ? "en" : "pt");

  heroes.forEach((hero, hi) => {
    const fx = document.createElement("div");
    fx.className = "bgfx"; fx.setAttribute("aria-hidden", "true");
    fx.innerHTML = '<i class="glow g1"></i><i class="glow g2"></i><i class="glow g3"></i><div class="bgdots"></div><div class="feed l"></div><div class="feed r"></div><div class="grain"></div>';
    hero.prepend(fx);
    const cols = [fx.querySelector(".feed.l"), fx.querySelector(".feed.r")];
    let i = hi * 3, side = 0;
    function push() {
      const [plat, type, game, msg] = FEED[i++ % FEED.length];
      const col = cols[side++ % 2];
      const n = document.createElement("div"); n.className = "ntf";
      n.innerHTML = `<span class="ic" style="--c:${COL[type]}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/></svg></span><span class="tx"><small><b style="color:${COL[type]}">${type.toUpperCase()}</b> · ${plat} · ${lang() === "en" ? "now" : "agora"}</small><b></b><em></em></span>`;
      n.querySelector(".tx > b").textContent = game;
      n.querySelector("em").textContent = msg[lang()];
      col.prepend(n);
      requestAnimationFrame(() => n.classList.add("in"));
      while (col.children.length > 4) col.lastElementChild.remove();
    }
    for (let k = 0; k < 6; k++) push();
    if (!reduce) setInterval(push, 3200 + hi * 400);
  });
})();

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

  const POST = [
    ["N64", "Ocarina of Time", "port"], ["PS4", "God of War III", "port"], ["X360", "Sonic Unleashed", "recomp"], ["PS2", "Jak and Daxter", "decomp"],
    ["N64", "Majora's Mask", "recomp"], ["PS4", "Bloodborne", "port"], ["XBOX", "Shaolin Monks", "recomp"], ["N64", "Mario Kart 64", "port"],
    ["PS2", "Gran Turismo 3", "decomp"], ["PS4", "Uncharted", "port"], ["X360", "Forza", "port"], ["N64", "Banjo-Kazooie", "recomp"],
    ["GC", "Super Mario Sunshine", "decomp"], ["PS2", "Resident Evil 4", "port"], ["PS3", "Demon's Souls", "port"], ["N64", "Perfect Dark", "port"],
  ];
  function buildWall(wall, seed) {
    for (let r = 0; r < 3; r++) {
      const row = document.createElement("div"); row.className = "wrow r" + r;
      const tr = document.createElement("div"); tr.className = "wtrack";
      const items = [];
      for (let k = 0; k < 16; k++) items.push(POST[(k * 5 + r * 7 + seed * 3) % POST.length]);
      let h = "";
      for (const rep of [0, 1]) for (const [pl, g, ty] of items) {
        const hue = (g.length * 37 + pl.charCodeAt(0) * 11) % 360;
        h += `<div class="pst" style="--h:${hue};--c:${COL[ty]}"><span class="pl">${pl}</span><span class="sh"></span><b>${g}</b><i>${ty}</i></div>`;
      }
      tr.innerHTML = h; row.append(tr); wall.append(row);
    }
  }
  heroes.forEach((hero, hi) => {
    const fx = document.createElement("div");
    fx.className = "bgfx"; fx.setAttribute("aria-hidden", "true");
    fx.innerHTML = '<i class="glow g1"></i><i class="glow g2"></i><div class="wall"></div><div class="radar"><i></i><i></i><i></i><u></u></div><div class="feed l"></div><div class="feed r"></div><div class="vig"></div><div class="grain"></div>';
    buildWall(fx.querySelector(".wall"), hi);
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

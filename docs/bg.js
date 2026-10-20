// Fundo animado do topo do site: parede de "capas" originais + grade neon retrô.
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fx = document.createElement("div");
  fx.className = "bgfx"; fx.setAttribute("aria-hidden", "true");
  hero.prepend(fx);

  // ícones originais (desenhados aqui) para as capas
  const ICONS = [
    '<path d="M20 44 44 20M24 20h20v20" stroke-width="5" fill="none"/><circle cx="18" cy="46" r="5"/>',            // espada/flecha
    '<path d="M32 8l6 16 17 1-13 11 4 17-14-9-14 9 4-17L9 25l17-1z"/>',                                              // estrela
    '<path d="M32 6c10 10 12 24 6 36h-12C20 30 22 16 32 6zM22 42l-8 10 12-4M42 42l8 10-12-4"/><circle cx="32" cy="24" r="4" fill="#0006"/>', // foguete
    '<path d="M32 10 52 26 32 56 12 26z"/><path d="M12 26h40M24 26l8 30 8-30" stroke="#0005" stroke-width="2" fill="none"/>', // gema
    '<path d="M14 50V28a18 18 0 0 1 36 0v22l-6-5-6 5-6-5-6 5-6-5z"/><circle cx="25" cy="28" r="4" fill="#0007"/><circle cx="39" cy="28" r="4" fill="#0007"/>', // fantasminha
    '<circle cx="32" cy="32" r="18" fill="none" stroke-width="7"/><circle cx="32" cy="32" r="5"/>',                   // anel
    '<path d="M10 40h44l-6-14H18zM16 40v8M48 40v8"/><circle cx="20" cy="48" r="5"/><circle cx="44" cy="48" r="5"/>',   // carro
    '<path d="M18 54V12l28 10-28 10"/>',                                                                              // bandeira
    '<rect x="10" y="22" width="44" height="22" rx="11"/><circle cx="22" cy="33" r="4" fill="#0007"/><circle cx="42" cy="30" r="2.5" fill="#0007"/><circle cx="46" cy="35" r="2.5" fill="#0007"/>', // controle
    '<path d="M32 12c-6 8-14 10-14 22a14 14 0 0 0 28 0c0-12-8-14-14-22z"/>',                                          // chama
    '<path d="M32 8 40 24 56 26 44 38 48 54 32 46 16 54 20 38 8 26 24 24z" fill="none" stroke-width="4"/>',           // estrela vazada
    '<path d="M12 46 24 18l8 16 6-8 14 20z"/>',                                                                        // montanha
  ];
  const PLATS = ["N64", "PS2", "X360", "GC", "PS1", "WII", "SNES", "DC", "XBOX", "PS3", "MD", "PSP"];
  const HUES = [[32, 95], [8, 85], [330, 80], [270, 75], [215, 85], [185, 85], [140, 60], [48, 95]];
  const rnd = n => Math.floor(Math.random() * n);

  function tile() {
    const [h, s] = HUES[rnd(HUES.length)];
    const t = document.createElement("div");
    t.className = "bgtile";
    t.style.background = `linear-gradient(160deg,hsl(${h} ${s}% 52%),hsl(${(h + 40) % 360} ${s}% 22%))`;
    t.innerHTML = `<small>${PLATS[rnd(PLATS.length)]}</small><svg viewBox="0 0 64 64" fill="hsl(${h} 100% 92%)" stroke="hsl(${h} 100% 92%)" stroke-linecap="round" stroke-linejoin="round">${ICONS[rnd(ICONS.length)]}</svg><i></i><i></i>`;
    return t;
  }
  const wall = document.createElement("div"); wall.className = "bgwall";
  for (let r = 0; r < 4; r++) {
    const row = document.createElement("div"); row.className = "bgrow" + (r % 2 ? " rev" : "");
    row.style.animationDuration = (60 + r * 14) + "s";
    const set = []; for (let i = 0; i < 12; i++) set.push(tile());
    // duas cópias seguidas para o movimento não ter emenda
    for (const t of [...set, ...set.map(x => x.cloneNode(true))]) row.append(t);
    wall.append(row);
  }
  fx.append(wall);

  // grade neon com perspectiva e partículas
  const cv = document.createElement("canvas"); cv.className = "bggrid"; fx.append(cv);
  const ctx = cv.getContext("2d");
  const acc = getComputedStyle(document.documentElement).getPropertyValue("--acc").trim() || "#ffb627";
  let W = 0, H = 0, dpr = 1, t0 = performance.now();
  const stars = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random() * .55, r: Math.random() * 1.4 + .3, p: Math.random() * 6 }));
  function size() { dpr = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function frame(now) {
    const t = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) { ctx.globalAlpha = .25 + .35 * Math.sin(t * 1.5 + s.p) ** 2; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, 7); ctx.fill(); }
    const hz = H * .58; // linha do horizonte
    const g = ctx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, acc + "00"); g.addColorStop(1, acc + "55");
    ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.2;
    for (let i = -14; i <= 14; i++) { ctx.beginPath(); ctx.moveTo(W / 2 + i * 18, hz); ctx.lineTo(W / 2 + i * W * .16, H); ctx.stroke(); }
    const off = (t * .35) % 1;
    for (let k = 0; k < 14; k++) { const z = (k + off) / 14, y = hz + (H - hz) * z * z; ctx.globalAlpha = z; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(frame);
  }
  addEventListener("resize", size); size(); requestAnimationFrame(frame);
})();

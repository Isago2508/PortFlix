// Fundo gamer do topo do site (arte 100% original): sol synthwave, grade neon,
// silhuetas de personagens genéricos, carro esportivo correndo, sprites em pixel art e HUD.
(function () {
  const heroes = document.querySelectorAll(".hero");
  if (!heroes.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // silhuetas originais (formas simples), viewBox 0 0 220 320
  const FIG = {
    guerreiro: `<circle cx="104" cy="58" r="23"/><path d="M84 66q20 52 40 0z"/><path d="M66 96h76l-10 96H78z"/><ellipse cx="66" cy="102" rx="22" ry="15"/><ellipse cx="142" cy="102" rx="22" ry="15"/><path d="M52 104 34 176l13 5 22-70z"/><path d="M146 100l38-46 11 10-36 50z"/><rect x="76" y="184" width="58" height="14" rx="3"/><path d="M80 196 66 312h24l16-110zM110 202l16 110h24l-14-116z"/><path d="M172 96 204 8" stroke-width="7" fill="none"/><path d="M196 4q40 18 18 58l-14-26-12 4z"/><path d="M200 22q-34-4-34 26l20-14z"/>`,
    ninja: `<circle cx="118" cy="70" r="20"/><path d="M100 64h38v10h-38z" fill="#0008"/><path d="M136 66q34-6 54-26-16 28-50 34z"/><path d="M96 92l50 2 16 70-34 24-44-26z"/><path d="M146 100l46 30-8 12-50-24z"/><path d="M98 104 52 132l8 12 48-20z"/><path d="M90 160l-44 70 16 10 50-62zM132 182l26 128h-22l-24-110z"/><path d="M190 128 30 30" stroke-width="5" fill="none"/>`,
    heroi: `<path d="M110 92q-80 40-74 220l74-60 74 60q6-180-74-220z" opacity=".55"/><circle cx="110" cy="54" r="24"/><path d="M90 50h40l-4 12H94z" fill="#0008"/><path d="M78 88h64l-6 104H84z"/><path d="M142 92l26-74 14 6-22 78z"/><circle cx="174" cy="18" r="12"/><path d="M78 92 54 176l14 4 22-76z"/><path d="M86 190l-10 120h24l12-112zM110 198l12 112h24l-10-120z"/>`,
    piloto: `<circle cx="110" cy="62" r="30"/><path d="M84 56h52v14H84z" fill="#0008"/><path d="M70 102h80l8 100H62z"/><path d="M70 106 44 190l14 4 28-80zM150 106l26 84-14 4-28-80z"/><path d="M70 200l-6 112h26l18-106zM112 206l18 106h26l-6-112z"/><rect x="88" y="128" width="44" height="22" rx="4" fill="#0006"/>`,
    robo: `<rect x="76" y="20" width="68" height="52" rx="10"/><rect x="88" y="38" width="44" height="12" rx="6" fill="#0008"/><path d="M60 84h100l-8 100H68z"/><rect x="20" y="88" width="34" height="96" rx="12"/><rect x="166" y="88" width="34" height="96" rx="12"/><rect x="70" y="190" width="34" height="122" rx="8"/><rect x="116" y="190" width="34" height="122" rx="8"/><circle cx="110" cy="128" r="16" fill="#0006"/>`,
  };
  const PAL = [["#ff3d6e", "#ff9a3d"], ["#3dd6ff", "#7a5cff"], ["#ffcf3d", "#ff5a3d"], ["#5cff9a", "#3d8bff"], ["#c25cff", "#ff3dc2"]];
  // sprites em pixel art (originais), grade 8x8
  const SPR = [
    ["..XXXX..", ".XXXXXX.", "XXOXXOXX", "XXXXXXXX", "XXXXXXXX", "XX.XX.XX", "X......X", "........"], // gosma
    ["...XX...", "..XXXX..", ".XXOOXX.", ".XXOOXX.", ".XXOOXX.", ".XXOOXX.", "..XXXX..", "...XX..."], // moeda
    [".XX..XX.", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX", ".XXXXXX.", "..XXXX..", "...XX...", "........"], // coração
    ["...XX...", "...XX...", "..XXXX..", ".XXOOXX.", "XXOOOOXX", "XXOOOOXX", ".XXXXXX.", "..XXXX.."], // poção
    ["......XX", ".....XX.", "....XX..", "X..XX...", ".XXX....", "..X.....", ".X.X....", "X......."], // espada
  ];
  const SPRC = ["#5cff9a", "#ffcf3d", "#ff3d6e", "#7a5cff", "#3dd6ff"];

  function svgFig(name, i) {
    const [a, b] = PAL[i % PAL.length], id = "g" + name + i;
    return `<svg viewBox="0 0 220 320" class="bgfig f${i}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}" stop-opacity=".15"/></linearGradient></defs><g fill="url(#${id})" stroke="url(#${id})" stroke-linecap="round">${FIG[name]}</g></svg>`;
  }

  heroes.forEach((hero, hi) => {
    const fx = document.createElement("div");
    fx.className = "bgfx"; fx.setAttribute("aria-hidden", "true");
    hero.prepend(fx);
    const cv = document.createElement("canvas"); cv.className = "bggrid"; fx.append(cv);

    // personagens: dois de cada lado, tipo tela de seleção
    const figs = document.createElement("div"); figs.className = "bgfigs";
    const names = Object.keys(FIG), start = Math.floor(Math.random() * names.length);
    for (let i = 0; i < 4; i++) figs.insertAdjacentHTML("beforeend", svgFig(names[(start + i) % names.length], i));
    fx.append(figs);

    // HUD estilo luta
    fx.insertAdjacentHTML("beforeend", `<div class="bghud"><div class="hp l"><b>P1</b><i><s></s></i></div><div class="tm">99</div><div class="hp r"><i><s></s></i><b>P2</b></div></div><div class="bgscore">SCORE <span>000000</span></div><div class="bgcombo"></div><div class="bgstart">PRESS START</div>`);
    const tm = fx.querySelector(".tm"), sc = fx.querySelector(".bgscore span"), cb = fx.querySelector(".bgcombo"), hps = fx.querySelectorAll(".hp s");
    let time = 99, score = 0, hp = [100, 100];
    if (!reduce) {
      setInterval(() => { time = time > 0 ? time - 1 : 99; tm.textContent = String(time).padStart(2, "0"); }, 1000);
      setInterval(() => {
        const who = Math.random() < .5 ? 0 : 1, dmg = 6 + Math.floor(Math.random() * 14);
        hp[who] -= dmg; if (hp[who] <= 0) hp = [100, 100];
        hps[0].style.width = hp[0] + "%"; hps[1].style.width = hp[1] + "%";
        score += dmg * 130; sc.textContent = String(score % 1e6).padStart(6, "0");
        cb.textContent = ["COMBO x" + (2 + Math.floor(Math.random() * 18)), "PERFECT!", "K.O.!", "+1UP", "NEW RECORD", "LEVEL UP!"][Math.floor(Math.random() * 6)];
        cb.classList.remove("on"); void cb.offsetWidth; cb.classList.add("on");
        cb.style.left = (12 + Math.random() * 70) + "%"; cb.style.top = (30 + Math.random() * 40) + "%";
      }, 1700 + hi * 230);
    }

    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1;
    const t0 = performance.now();
    const stars = Array.from({ length: 80 }, () => ({ x: Math.random(), y: Math.random() * .5, r: Math.random() * 1.4 + .3, p: Math.random() * 6 }));
    const sprites = Array.from({ length: 14 }, () => newSprite(true));
    function newSprite(any) { return { k: Math.floor(Math.random() * SPR.length), x: Math.random(), y: any ? Math.random() : 1.05, s: 2 + Math.random() * 3, v: .02 + Math.random() * .04, w: Math.random() * 6 }; }
    function size() { dpr = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; if (!W) return; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function drawSprite(sp, t) {
      const m = SPR[sp.k], c = SPRC[sp.k], px = sp.s, x0 = sp.x * W + Math.sin(t + sp.w) * 12, y0 = sp.y * H;
      ctx.globalAlpha = .55;
      for (let r = 0; r < 8; r++) for (let q = 0; q < 8; q++) {
        const ch = m[r][q]; if (ch === ".") continue;
        ctx.fillStyle = ch === "O" ? "#fff" : c; ctx.fillRect(x0 + q * px, y0 + r * px, px, px);
      }
    }
    function car(x, y, s, col) {
      // carro esportivo genérico de perfil
      ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
      ctx.shadowColor = col; ctx.shadowBlur = 18; ctx.fillStyle = "#0b0e10"; ctx.strokeStyle = col; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(-60, 0); ctx.lineTo(-58, -12); ctx.lineTo(-30, -16); ctx.lineTo(-12, -28); ctx.lineTo(22, -28); ctx.lineTo(44, -15); ctx.lineTo(62, -11); ctx.lineTo(64, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-8, -25); ctx.lineTo(20, -25); ctx.lineTo(36, -15); ctx.lineTo(-22, -15); ctx.closePath(); ctx.stroke();
      ctx.fillStyle = col; for (const wx of [-38, 40]) { ctx.beginPath(); ctx.arc(wx, 0, 9, 0, 7); ctx.fill(); }
      ctx.fillStyle = "#0b0e10"; for (const wx of [-38, 40]) { ctx.beginPath(); ctx.arc(wx, 0, 4.5, 0, 7); ctx.fill(); }
      ctx.restore();
    }
    function frame(now) {
      const t = (now - t0) / 1000;
      if (W) {
        ctx.clearRect(0, 0, W, H);
        const hz = H * .7;
        // sol synthwave
        const R = Math.min(W * .16, 170), cx = W / 2, cy = hz - R * .35;
        const sg = ctx.createLinearGradient(0, cy - R, 0, cy + R); sg.addColorStop(0, "#ffcf3d"); sg.addColorStop(.6, "#ff3d6e"); sg.addColorStop(1, "#7a5cff");
        ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, hz); ctx.clip();
        ctx.globalAlpha = .55; ctx.fillStyle = sg; ctx.shadowColor = "#ff3d6e"; ctx.shadowBlur = 60; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        ctx.globalAlpha = 1; ctx.fillStyle = "#0b0e10";
        for (let k = 0; k < 7; k++) { const yy = cy + R * (.05 + k * .14) + ((t * 8) % (R * .14)); ctx.fillRect(cx - R, yy, R * 2, 2 + k * 1.3); }
        ctx.restore();
        // estrelas
        for (const s of stars) { ctx.globalAlpha = .2 + .4 * Math.sin(t * 1.5 + s.p) ** 2; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, 7); ctx.fill(); }
        // montanhas
        ctx.globalAlpha = .9; ctx.fillStyle = "#12091f"; ctx.strokeStyle = "#7a5cff"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, hz);
        for (let x = 0; x <= W; x += W / 16) ctx.lineTo(x, hz - (Math.abs(Math.sin(x * .013) * 60 + Math.sin(x * .031) * 25)) * (Math.abs(x - cx) > R * 1.1 ? 1 : .25));
        ctx.lineTo(W, hz); ctx.closePath(); ctx.fill(); ctx.stroke();
        // grade
        ctx.globalAlpha = 1; ctx.fillStyle = "#0b0e10"; ctx.fillRect(0, hz, W, H - hz);
        const g = ctx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, "#ff3d6e22"); g.addColorStop(1, "#ff3d6eaa");
        ctx.strokeStyle = g; ctx.lineWidth = 1.3;
        for (let i = -16; i <= 16; i++) { ctx.beginPath(); ctx.moveTo(cx + i * 22, hz); ctx.lineTo(cx + i * W * .14, H); ctx.stroke(); }
        const off = (t * .5) % 1;
        for (let k = 0; k < 16; k++) { const z = (k + off) / 16, y = hz + (H - hz) * z * z; ctx.globalAlpha = z; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // carros correndo com rastro de luz
        const lane = hz + (H - hz) * .3;
        [[.18, "#3dd6ff", 1, 0], [.12, "#ffcf3d", -1, 3.3]].forEach(([sp, col, dir, ph], j) => {
          const p = ((t * sp + ph / 10) % 1.3) - .15, x = dir > 0 ? p * W : W - p * W, y = lane + j * 34, s = .9 + j * .25;
          const tr = ctx.createLinearGradient(x - dir * 260, 0, x, 0); tr.addColorStop(0, col + "00"); tr.addColorStop(1, col + "aa");
          ctx.globalAlpha = 1; ctx.fillStyle = tr; ctx.fillRect(Math.min(x, x - dir * 260), y - 6 * s, 260, 3 * s);
          ctx.save(); if (dir < 0) { ctx.translate(x, 0); ctx.scale(-1, 1); ctx.translate(-x, 0); } car(x, y, s, col); ctx.restore();
        });
        // sprites subindo
        for (const sp of sprites) { sp.y -= sp.v / 60; if (sp.y < -.1) Object.assign(sp, newSprite(false)); drawSprite(sp, t); }
        ctx.globalAlpha = 1;
      }
      if (!reduce) requestAnimationFrame(frame);
    }
    addEventListener("resize", size);
    new ResizeObserver(size).observe(cv);
    size(); requestAnimationFrame(frame);
  });
})();

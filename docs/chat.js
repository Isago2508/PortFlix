/* PFEmoji: seletor de emojis + emojis animados para os chats do PortFlix (PC, Android e site) */
window.PFEmoji = (function () {
  const CATS = [
    ["😀", "Rostos", "Faces", "😀😃😄😁😆😅😂🤣🙂😉😊😍🥰😘😎🤩🥳🤔😏😴😭😢😡🤯😱🥺🙄😬🤗😇🤪😤🥵🥶"],
    ["👍", "Gestos", "Gestures", "👍👎👏🙌🙏💪👌✌️🤞🤝👋🤙👀🫡🤌🖖👊✊"],
    ["❤️", "Corações", "Hearts", "❤️🧡💛💚💙💜🖤🤍💔💖💯🔥✨⭐🌟💥🎉🎊"],
    ["🎮", "Games", "Games", "🎮🕹️👾🏆🎯🎲🧩🚗🏎️🏁⚔️🛡️💣🚀🎧🏴‍☠️🐉👑🪙"],
    ["💻", "Objetos", "Objects", "💻🖥️📱⌨️🖱️🔧🛠️💾📦📥🔔✅❌⚠️💡🔒🔑📌"],
    ["✨", "Animados", "Animated", "🔥❤️🎉🚀💥⭐👍😂😍🎮🏆💯👏🤯🥳😎🙌"],
  ];
  const EN = () => (document.documentElement.dataset.lang || document.documentElement.lang || navigator.language || "").toLowerCase().startsWith("en");
  const CSS = `
.pfemo-btn{flex:none;align-self:flex-end;width:38px;height:38px;border-radius:9px;border:1px solid var(--line,#2a323a);background:var(--panel2,var(--bg2,#161b20));color:inherit;font-size:20px;line-height:1;cursor:pointer;padding:0}
.pfemo-btn:hover{border-color:var(--accent,var(--acc,#ffb627))}
.pfemo-row{position:relative}
.pfemo-pan{position:absolute;left:0;right:0;bottom:calc(100% + 6px);z-index:50;background:var(--panel,var(--card,#12171c));border:1px solid var(--line,#2a323a);border-radius:12px;box-shadow:0 14px 34px rgba(0,0,0,.5);overflow:hidden}
.pfemo-pan[hidden]{display:none}
.pfemo-tabs{display:flex;border-bottom:1px solid var(--line,#2a323a);background:var(--panel2,var(--bg2,#161b20))}
.pfemo-tabs button{flex:1;border:0;background:transparent;font-size:18px;padding:7px 0;cursor:pointer;border-bottom:2px solid transparent;color:inherit}
.pfemo-tabs button.on{border-bottom-color:var(--accent,var(--acc,#ffb627));background:rgba(255,255,255,.05)}
.pfemo-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;padding:8px;max-height:176px;overflow-y:auto}
.pfemo-grid button{border:0;background:transparent;font-size:22px;line-height:1;padding:6px 0;border-radius:8px;cursor:pointer}
.pfemo-grid button:hover{background:rgba(255,255,255,.1)}
.pfemo-lbl{font-size:11px;opacity:.6;padding:6px 10px 0}
.pfemo-big{display:flex;gap:6px;font-size:44px;line-height:1.1;padding:4px 0}
.pfemo-big i{font-style:normal;display:inline-block}
.pfemo-a0{animation:pfemo-bounce 1.1s ease-in-out infinite}
.pfemo-a1{animation:pfemo-wig 1.4s ease-in-out infinite}
.pfemo-a2{animation:pfemo-pulse 1.2s ease-in-out infinite}
.pfemo-a3{animation:pfemo-float 2.2s ease-in-out infinite}
.pfemo-a4{animation:pfemo-shake 1.6s ease-in-out infinite}
@keyframes pfemo-bounce{0%,100%{transform:translateY(0)}40%{transform:translateY(-12px)}60%{transform:translateY(-4px)}}
@keyframes pfemo-wig{0%,100%{transform:rotate(0)}25%{transform:rotate(-14deg)}75%{transform:rotate(14deg)}}
@keyframes pfemo-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.28)}}
@keyframes pfemo-float{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-8px) rotate(4deg)}}
@keyframes pfemo-shake{0%,70%,100%{transform:translateX(0)}75%{transform:translateX(-5px)}80%{transform:translateX(5px)}85%{transform:translateX(-4px)}90%{transform:translateX(4px)}}
@media (prefers-reduced-motion:reduce){[class*="pfemo-a"]{animation:none!important}}`;
  let styled = false;
  function style() { if (styled) return; styled = true; const s = document.createElement("style"); s.textContent = CSS; document.head.append(s); }
  const seg = s => (window.Intl && Intl.Segmenter) ? [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(s)].map(x => x.segment) : (s.match(/\p{Extended_Pictographic}[️‍\u{1F3FB}-\u{1F3FF}\p{Extended_Pictographic}]*/gu) || []);
  const ONLY = /^(?:\p{Extended_Pictographic}[️‍\u{1F3FB}-\u{1F3FF}\p{Extended_Pictographic}]*\s*){1,3}$/u;
  const anim = (e, i) => "pfemo-a" + (((e.codePointAt(0) || 0) + i) % 5);
  const list = str => seg(str).filter(x => x.trim());
  // preenche o nó com o texto; se só tiver 1 a 3 emojis, mostra grande e animado
  function text(node, str) {
    style(); node.textContent = "";
    if (str && str.length < 40 && ONLY.test(str.trim())) {
      node.classList.add("pfemo-big");
      list(str).forEach((e, i) => { const x = document.createElement("i"); x.textContent = e; x.className = anim(e, i); node.append(x); });
    } else { node.classList.remove("pfemo-big"); node.textContent = str; }
    return node;
  }
  // põe o botão 😊 ao lado do campo e o painel acima dele
  function attach(ta) {
    style();
    const row = ta.parentElement; if (!row || ta.dataset.emo) return; ta.dataset.emo = "1"; row.classList.add("pfemo-row");
    const btn = document.createElement("button"); btn.type = "button"; btn.className = "pfemo-btn"; btn.textContent = "😊"; btn.title = EN() ? "Emojis" : "Emojis";
    const pan = document.createElement("div"); pan.className = "pfemo-pan"; pan.hidden = true;
    const tabs = document.createElement("div"); tabs.className = "pfemo-tabs";
    const lbl = document.createElement("div"); lbl.className = "pfemo-lbl";
    const grid = document.createElement("div"); grid.className = "pfemo-grid";
    pan.append(tabs, lbl, grid);
    const insert = e => {
      const f = document.activeElement === ta, a = f ? ta.selectionStart : ta.value.length, b = f ? ta.selectionEnd : a;
      if (ta.maxLength > 0 && ta.value.length - (b - a) + e.length > ta.maxLength) return;
      ta.value = ta.value.slice(0, a) + e + ta.value.slice(b); const p = a + e.length;
      try { ta.setSelectionRange(p, p); } catch (_) {}
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    };
    const show = k => {
      [...tabs.children].forEach((t, i) => t.classList.toggle("on", i === k));
      const c = CATS[k]; lbl.textContent = EN() ? c[2] : c[1]; grid.textContent = "";
      list(c[3]).forEach((e, i) => { const b = document.createElement("button"); b.type = "button"; b.textContent = e; if (k === CATS.length - 1) b.className = anim(e, i); b.onmousedown = ev => ev.preventDefault(); b.onclick = () => insert(e); grid.append(b); });
    };
    CATS.forEach((c, k) => { const t = document.createElement("button"); t.type = "button"; t.textContent = c[0]; t.title = EN() ? c[2] : c[1]; t.onclick = () => show(k); tabs.append(t); });
    btn.onclick = () => { pan.hidden = !pan.hidden; if (!pan.hidden) show(0); };
    row.insertBefore(btn, ta.nextSibling); row.append(pan);
    document.addEventListener("click", ev => { if (!pan.hidden && !pan.contains(ev.target) && ev.target !== btn) pan.hidden = true; });
  }
  return { attach, text };
})();

// Chat de suporte do PortFlix (site). As mensagens vão para o atendimento do PortFlix (WhatsApp e PortFlix DEV).
(function () {
  const API = "https://portsradar-licencas.portsradar-hugo.workers.dev";
  const L = () => (document.documentElement.dataset.lang === "en" ? "en" : "pt");
  const T = {
    pt: { open: "Falar com a gente", title: "Atendimento PortFlix", sub: "Respondemos por aqui, normalmente no mesmo dia.", name: "Seu nome", email: "Seu e-mail (para avisarmos)", msg: "Escreva sua mensagem…", send: "Enviar", sending: "Enviando…", you: "Você", team: "PortFlix", empty: "Mande sua dúvida. A resposta aparece aqui nesta janela.", wa: "Prefere WhatsApp?", err: "Não foi possível enviar. Tente de novo ou chame no WhatsApp.", newr: "Nova resposta do PortFlix", newc: "Nova conversa", newq: "Começar uma conversa nova? A atual some desta janela (o atendimento continua com ela)." },
    en: { open: "Talk to us", title: "PortFlix support", sub: "We reply right here, usually the same day.", name: "Your name", email: "Your e-mail (so we can let you know)", msg: "Write your message…", send: "Send", sending: "Sending…", you: "You", team: "PortFlix", empty: "Send your question. The answer shows up right here in this window.", wa: "Prefer WhatsApp?", err: "Couldn't send. Try again or message us on WhatsApp.", newr: "New reply from PortFlix", newc: "New chat", newq: "Start a new conversation? The current one disappears from this window (support still keeps it)." },
  };
  const t = k => T[L()][k];
  const st = {
    get(k) { try { return localStorage.getItem("pf_chat_" + k) || ""; } catch { return ""; } },
    set(k, v) { try { localStorage.setItem("pf_chat_" + k, v); } catch {} },
  };
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let msgs = [], open = false, seen = Number(st.get("seen") || 0), timer = 0;

  const box = document.createElement("div");
  box.className = "pfchat";
  box.innerHTML = `
    <button class="pfchat-fab" type="button" aria-label="Chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v11H9l-5 4z"/></svg><span class="pfchat-lbl"></span><i class="pfchat-dot" hidden></i></button>
    <div class="pfchat-win" hidden>
      <header><div><b class="pfchat-title"></b><small class="pfchat-sub"></small></div><button type="button" class="pfchat-new" hidden></button><button type="button" class="pfchat-x" aria-label="Fechar">✕</button></header>
      <div class="pfchat-list"></div>
      <form class="pfchat-form">
        <div class="pfchat-who"><input class="pfchat-name" maxlength="80" autocomplete="name"><input class="pfchat-email" type="email" maxlength="160" autocomplete="email"></div>
        <div class="pfchat-row"><textarea class="pfchat-text" rows="2" maxlength="2000" required></textarea><button class="btn pri sm pfchat-send" type="submit"></button></div>
      </form>
    </div>`;
  document.body.append(box);
  const $ = s => box.querySelector(s);

  function labels() {
    $(".pfchat-lbl").textContent = t("open"); $(".pfchat-title").textContent = t("title"); $(".pfchat-sub").textContent = t("sub");
    $(".pfchat-name").placeholder = t("name"); $(".pfchat-email").placeholder = t("email"); $(".pfchat-text").placeholder = t("msg");
    $(".pfchat-send").textContent = t("send");
    $(".pfchat-name").value = $(".pfchat-name").value || st.get("name"); $(".pfchat-email").value = $(".pfchat-email").value || st.get("email");
    $(".pfchat-who").hidden = !!(st.get("id") && st.get("name"));
    $(".pfchat-new").textContent = t("newc"); $(".pfchat-new").hidden = !st.get("id");
    draw();
  }
  function draw() {
    const l = $(".pfchat-list"); l.innerHTML = "";
    if (!msgs.length) { l.innerHTML = `<p class="pfchat-empty">${esc(t("empty"))}</p>`; return; }
    for (const m of msgs) {
      const d = document.createElement("div"); d.className = "pfchat-m " + (m.side === "dev" ? "them" : "me");
      const when = new Date(m.created).toLocaleString(L() === "en" ? "en-US" : "pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
      d.innerHTML = `<small>${esc(m.side === "dev" ? t("team") : t("you"))} · ${when}</small><p></p>`;
      PFEmoji.text(d.querySelector("p"), m.text);
      l.append(d);
    }
    l.scrollTop = l.scrollHeight;
  }
  async function load() {
    const id = st.get("id"), secret = st.get("secret");
    if (!id) return;
    try {
      const r = await fetch(`${API}/v1/support/thread?id=${encodeURIComponent(id)}&secret=${encodeURIComponent(secret)}`);
      if (r.status === 404) { st.set("id", ""); st.set("secret", ""); msgs = []; draw(); return; }
      const j = await r.json(); msgs = j.messages || [];
      const lastDev = Math.max(0, ...msgs.filter(m => m.side === "dev").map(m => m.created));
      if (open) { seen = lastDev; st.set("seen", String(seen)); }
      $(".pfchat-dot").hidden = !(lastDev > seen);
      if (open) draw();
    } catch {}
  }
  function schedule() { clearInterval(timer); if (st.get("id")) timer = setInterval(load, open ? 10000 : 60000); }
  function toggle(v) { open = v; $(".pfchat-win").hidden = !v; box.classList.toggle("on", v); if (v) { labels(); load(); setTimeout(() => $(".pfchat-text").focus(), 50); } schedule(); }
  $(".pfchat-fab").onclick = () => toggle(!open);
  $(".pfchat-x").onclick = () => toggle(false);
  $(".pfchat-new").onclick = () => { if (!confirm(t("newq"))) return; st.set("id", ""); st.set("secret", ""); st.set("seen", "0"); msgs = []; labels(); schedule(); };
  PFEmoji.attach($(".pfchat-text"));
  $(".pfchat-text").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $(".pfchat-form").requestSubmit(); } });
  $(".pfchat-form").onsubmit = async e => {
    e.preventDefault();
    const text = $(".pfchat-text").value.trim(); if (!text) return;
    const name = $(".pfchat-name").value.trim(), email = $(".pfchat-email").value.trim();
    st.set("name", name); st.set("email", email);
    const b = $(".pfchat-send"); b.disabled = true; b.textContent = t("sending");
    try {
      const r = await fetch(API + "/v1/support/send", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: st.get("id"), secret: st.get("secret"), name, email, text, origin: "site" }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.message || "erro");
      st.set("id", j.id); st.set("secret", j.secret);
      $(".pfchat-text").value = ""; msgs.push({ side: "user", text, created: Date.now() }); draw(); $(".pfchat-who").hidden = !!name; $(".pfchat-new").hidden = false;
      schedule();
    } catch (err) { alert(err.message && err.message !== "erro" ? err.message : t("err")); }
    b.disabled = false; b.textContent = t("send");
  };
  // troca de idioma do site
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
  labels(); load(); schedule();
})();

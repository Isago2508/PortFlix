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
        <a class="pfchat-wa" href="https://wa.me/5548988516188" target="_blank" rel="noopener"></a>
      </form>
    </div>`;
  document.body.append(box);
  const $ = s => box.querySelector(s);

  function labels() {
    $(".pfchat-lbl").textContent = t("open"); $(".pfchat-title").textContent = t("title"); $(".pfchat-sub").textContent = t("sub");
    $(".pfchat-name").placeholder = t("name"); $(".pfchat-email").placeholder = t("email"); $(".pfchat-text").placeholder = t("msg");
    $(".pfchat-send").textContent = t("send"); $(".pfchat-wa").textContent = t("wa") + " (48) 98851-6188";
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
      d.innerHTML = `<small>${esc(m.side === "dev" ? t("team") : t("you"))} · ${when}</small><p>${esc(m.text)}</p>`;
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

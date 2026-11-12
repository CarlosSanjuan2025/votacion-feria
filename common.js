const C = window.CONFIG;
const BASE = (C.FIREBASE_URL || "").replace(/\/$/, "");
const DEMO = !BASE;

function deviceId() {
  let id = localStorage.getItem("device_id");
  if (!id) {
    id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2)).replace(/[^a-zA-Z0-9-]/g, "");
    localStorage.setItem("device_id", id);
  }
  return id;
}

async function enviarVoto(p) {
  const id = deviceId();
  if (DEMO) {
    const v = JSON.parse(localStorage.getItem("votos_demo") || "{}");
    v[id] = { p, t: Date.now() };
    localStorage.setItem("votos_demo", JSON.stringify(v));
    return;
  }
  const r = await fetch(BASE + "/votos/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ p, t: Date.now() })
  });
  if (!r.ok) throw new Error("No se pudo registrar el voto (" + r.status + ")");
}

async function leerVotos() {
  let data;
  if (DEMO) data = JSON.parse(localStorage.getItem("votos_demo") || "{}");
  else {
    const r = await fetch(BASE + "/votos.json", { cache: "no-store" });
    if (!r.ok) throw new Error("Error " + r.status);
    data = (await r.json()) || {};
  }
  const conteo = {};
  C.PROYECTOS.forEach(x => (conteo[x.id] = 0));
  Object.values(data).forEach(v => { if (v && conteo[v.p] !== undefined) conteo[v.p]++; });
  return conteo;
}

function crearFoto(p, clase) {
  const img = document.createElement("img");
  img.className = clase;
  img.alt = "Foto del proyecto de " + p.lider;
  img.loading = "lazy";
  img.src = p.foto;
  img.onerror = () => {
    const d = document.createElement("div");
    d.className = clase + " nofoto";
    d.textContent = p.id;
    img.replaceWith(d);
  };
  return img;
}

function ampliar(src) {
  const o = document.createElement("div");
  o.className = "lb";
  const i = document.createElement("img");
  i.src = src;
  o.appendChild(i);
  o.onclick = () => o.remove();
  document.body.appendChild(o);
}

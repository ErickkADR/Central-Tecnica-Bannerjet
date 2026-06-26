/* === Bannerjet Group — script.js === */

// ─── AUTH ────────────────────────────────────────────────────────────────────
const BJ_AUTH_KEY = 'bj-auth-v1';

// ╔══════════════════════════════════════════════╗
// ║  CREDENCIAIS — altere usuário e senha aqui  ║
// ╚══════════════════════════════════════════════╝
const BJ_USERS = [
  { user: 'bannerjet', pass: 'bannerjet2025' }
];

function bjIsLoggedIn() { return !!localStorage.getItem(BJ_AUTH_KEY); }
function bjLogout() { localStorage.removeItem(BJ_AUTH_KEY); window.location.href = 'login.html'; }

// Redireciona para login se não autenticado (exceto na própria login.html)
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'login.html') return;
  if (!bjIsLoggedIn()) window.location.replace('login.html');
})();

// Injeta botão "Sair" e botão de busca no header de todas as páginas
document.addEventListener('DOMContentLoaded', function () {
  const headerRight = document.querySelector('.header-right');
  if (!headerRight) return;

  // Botão de logout
  const btn = document.createElement('button');
  btn.className = 'header-logout-btn';
  btn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Sair';
  btn.onclick = bjLogout;
  headerRight.appendChild(btn);

  // Botão de busca (inserido antes do tema toggle)
  const searchBtn = document.createElement('button');
  searchBtn.className = 'bj-search-btn';
  searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
  searchBtn.title = 'Pesquisar — pressione /';
  searchBtn.setAttribute('aria-label', 'Abrir busca');
  headerRight.insertBefore(searchBtn, headerRight.firstChild);
  searchBtn.addEventListener('click', bjSearchOpen);
});


// ─── TEMA (dark / light) ────────────────────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('bj-theme', theme);
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    toggleBtn.setAttribute('aria-label',
      theme === 'dark' ? 'Modo claro' : 'Modo escuro');
  }
}

// Aplica tema salvo sem flash
(function () {
  const saved = localStorage.getItem('bj-theme') || 'light';
  html.setAttribute('data-theme', saved);
})();

if (toggleBtn) {
  const saved = localStorage.getItem('bj-theme') || 'light';
  applyTheme(saved);
  toggleBtn.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

// ─── FADE-UP AO SCROLL ───────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── COPIAR RESPOSTA DO FAQ ──────────────────────────────────────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const p = btn.closest('.faq-item')?.querySelector('.faq-answer-inner p');
    if (!p) return;
    navigator.clipboard.writeText(p.innerText).then(() => {
      btn.textContent = 'Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1600);
    }).catch(() => {
      btn.textContent = 'Erro';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 1600);
    });
  });
});

// ─── PESQUISA DE FIRMWARES ───────────────────────────────────────────────────
const searchInput = document.getElementById('firmware-search');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('#firmware-table tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ─── ICON MENU — pulso ao clicar ─────────────────────────────────────────────
document.querySelectorAll('.icon-item').forEach(item => {
  item.addEventListener('click', () => {
    const c = item.querySelector('.icon-circle');
    if (!c) return;
    c.style.transform = 'scale(0.88)';
    setTimeout(() => { c.style.transform = ''; }, 180);
  });
});

// ─── BUSCA GLOBAL ────────────────────────────────────────────────────────────
const BJ_SEARCH = [
  // ── Plotters
  { title: 'A3 Pro', url: 'A3.html', cat: 'Plotter', desc: 'Plotter de recorte compacto com câmera CameraCut WiFi', icon: 'fa-scissors', kw: 'a3 pro plotter recorte câmera contorno vinil sticker película' },
  { title: 'A3 Pro Max', url: 'A3.html', cat: 'Plotter', desc: 'Versão avançada da série A3 com novas funcionalidades', icon: 'fa-scissors', kw: 'a3 pro max plotter recorte promax' },
  { title: 'A3 Light / Servo', url: 'A3.html', cat: 'Plotter', desc: 'Modelos A3 Light e A3 Servo da linha Bannercut', icon: 'fa-scissors', kw: 'a3 light servo plotter recorte qrcode' },
  { title: 'Craft', url: 'craft.html', cat: 'Plotter', desc: 'Plotter de recorte de vinil e papel para uso profissional', icon: 'fa-scissors', kw: 'craft plotter recorte vinil papel touchscreen' },
  { title: 'Profissional V48', url: 'profissional-v48.html', cat: 'Plotter', desc: 'Plotter profissional de grande formato para comunicação visual', icon: 'fa-scissors', kw: 'v48 profissional plotter grande formato câmera colorido fast scan' },
  { title: 'Saga 5373', url: 'saga-5373.html', cat: 'Plotter', desc: 'Plotter de rolo de grande porte com câmera de contorno G1/G2', icon: 'fa-scissors', kw: 'saga 5373 plotter rolo sg1400 g1 g2 câmera serial upg' },
  // ── Laminadoras
  { title: 'Termolaminadora Pro', url: 'termolaminadora-pro.html', cat: 'Laminadora', desc: 'Termolaminadora profissional para plastificação a quente', icon: 'fa-layer-group', kw: 'termolaminadora laminadora plastificação quente pro standard' },
  { title: 'Laminadora L1', url: 'laminadora-l1.html', cat: 'Laminadora', desc: 'Laminadora de frio para aplicação de laminado adesivo', icon: 'fa-layer-group', kw: 'laminadora l1 frio laminado adesivo rolo' },
  { title: 'Laminadora L2', url: 'laminadora-l2.html', cat: 'Laminadora', desc: 'Laminadora de frio de maior capacidade', icon: 'fa-layer-group', kw: 'laminadora l2 frio laminado capacidade' },
  // ── Lasers
  { title: 'Fibra Laser', url: 'fibra-laser.html', cat: 'Laser', desc: 'Laser de fibra para gravação e marcação em metais', icon: 'fa-bolt', kw: 'fibra laser metal gravação marcação aço alumínio ezcad rotativa foco' },
  { title: 'Laser CO2', url: 'laser-co2.html', cat: 'Laser', desc: 'Laser CO2 para corte e gravação em madeira, acrílico e couro', icon: 'fa-bolt', kw: 'co2 laser corte gravação madeira acrílico couro lightburn' },
  // ── Impressoras
  { title: 'UV 90 cm', url: 'uv-90cm.html', cat: 'Impressora', desc: 'Impressora UV 90 cm para materiais rígidos e flexíveis', icon: 'fa-print', kw: 'uv 90cm impressora rígido vinil acrílico mdf vidro' },
  { title: 'Eco Solvente 180 cm', url: 'eco-solvente-180cm.html', cat: 'Impressora', desc: 'Impressora eco solvente 180 cm com cabeça Epson I3200', icon: 'fa-print', kw: 'eco solvente 180 impressora banner lona i3200 photoprint hosson' },
  { title: 'UV A3', url: 'uv-a3.html', cat: 'Impressora', desc: 'Impressora UV A3 com cabeça Epson TX800 — CMYK + branco + verniz', icon: 'fa-print', kw: 'uv a3 impressora tx800 branco verniz brindes cmyk ya3uv1tx' },
  { title: 'Infiniti Challenger', url: 'infiniti-challenger.html', cat: 'Impressora', desc: 'Impressora solvente 320 cm 8 cores — Print Factory e SQL Print', icon: 'fa-print', kw: 'infiniti challenger solvente 320 8 cores print factory sql rip grande formato' },
  // ── Acabamentos
  { title: 'Guilhotina Hidráulica', url: 'guilhotina-hidraulica.html', cat: 'Acabamento', desc: 'Guilhotina hidráulica para corte preciso de materiais gráficos', icon: 'fa-cut', kw: 'guilhotina hidráulica corte lâmina painel erro 6' },
  { title: 'Refiladora T1', url: 'refiladora-t1.html', cat: 'Acabamento', desc: 'Refiladora T1 para acabamento de impressos com manual PDF', icon: 'fa-cut', kw: 'refiladora t1 refile acabamento drive manual' },
  { title: 'Refiladora T2', url: 'refiladora-t2.html', cat: 'Acabamento', desc: 'Refiladora T2 modelo avançado com Drive 10', icon: 'fa-cut', kw: 'refiladora t2 refile drive 10 acabamento' },
  // ── Recursos
  { title: 'Firmwares', url: 'firmwares.html', cat: 'Recurso', desc: 'Todos os firmwares disponíveis para plotters Bannercut', icon: 'fa-microchip', kw: 'firmware atualização bin a3 craft v48 saga servo sv celcut vupdate campro' },
  { title: 'Erros Bannercut', url: 'erros-bannercut.html', cat: 'Recurso', desc: 'Tabela de erros e soluções para as plotters Bannercut', icon: 'fa-triangle-exclamation', kw: 'erro err código solução problema motor sensor eeprom pid cache placa' },
  { title: 'Manuais Técnicos', url: 'manuais.html', cat: 'Recurso', desc: 'Manuais e documentação técnica de todos os equipamentos', icon: 'fa-book-open', kw: 'manual pdf documentação técnico equipamento guia instrução' },
  { title: 'Biblioteca de Vídeos', url: 'videos.html', cat: 'Recurso', desc: 'Todos os tutoriais em vídeo organizados por categoria', icon: 'fa-circle-play', kw: 'vídeo tutorial youtube montagem configuração operação carrossel busca' },
  { title: 'Programas e Plugins', url: 'programas.html', cat: 'Recurso', desc: 'Softwares e plugins para uso com os equipamentos Bannerjet', icon: 'fa-plug', kw: 'programa software plugin drive cameracut corel ezcad lightburn rip' },
  { title: 'Parâmetros Fibra Laser', url: 'parametros.html', cat: 'Recurso', desc: 'Parâmetros de velocidade, potência e frequência para fibra laser', icon: 'fa-bolt', kw: 'parâmetros velocidade potência frequência pulso laser ezcad material aço alumínio' },
  { title: 'Perfil de Cores', url: 'perfil-cores.html', cat: 'Recurso', desc: 'Perfis ICC para calibração de cor das impressoras Bannerjet', icon: 'fa-palette', kw: 'perfil cores icc icm calibração cor impressora rip gerenciamento' },
  { title: 'Protótipo Display SkyCut', url: 'prototipo-display.html', cat: 'Recurso', desc: 'Protótipo da interface de display SkyCut', icon: 'fa-display', kw: 'protótipo display skycut interface tela painel' },
  // ── Ferramentas
  { title: 'Suas Anotações', url: 'anotacoes.html', cat: 'Ferramenta', desc: 'App de anotações técnicas pessoais com editor rico — estilo Notion', icon: 'fa-pen-nib', kw: 'anotações notas editor texto pessoal notion rich text formatar' },
  { title: 'Curso Técnico', url: 'curso-tecnico.html', cat: 'Curso', desc: 'Curso técnico completo sobre os equipamentos Bannerjet', icon: 'fa-graduation-cap', kw: 'curso técnico treinamento aprendizado quiz certificado aula' },
  // ── Auxílios
  { title: 'Auxílios Plotter', url: 'auxilio-plotter.html', cat: 'Auxílio', desc: 'Firmwares e tabela de erros das plotters Bannercut em um lugar', icon: 'fa-scissors', kw: 'auxílio plotter firmware erro bannercut a3 craft v48 saga tabela' },
  { title: 'Auxílios Laser', url: 'auxilio-laser.html', cat: 'Auxílio', desc: 'Parâmetros e lógica de configuração da fibra laser', icon: 'fa-bolt', kw: 'auxílio laser parâmetros configuração fibra velocidade potência frequência foco hatch' },
  { title: 'Auxílios Impressoras', url: 'auxilio-impressoras.html', cat: 'Auxílio', desc: 'Perfil de cores, parâmetros e lógica de configuração para impressoras', icon: 'fa-print', kw: 'auxílio impressora cores icc parâmetros configuração rip passes resolução manutenção' },
];

// ─── UI da busca ─────────────────────────────────────────────────────────────
let bjSearchOverlay = null;
let bjSearchInput   = null;
let bjSearchList    = null;
let bjSearchFocused = -1;

document.addEventListener('DOMContentLoaded', function () {
  // Cria overlay
  bjSearchOverlay = document.createElement('div');
  bjSearchOverlay.className = 'bj-search-overlay';
  bjSearchOverlay.setAttribute('role', 'dialog');
  bjSearchOverlay.setAttribute('aria-modal', 'true');
  bjSearchOverlay.innerHTML = `
    <div class="bj-search-panel" id="bj-search-panel">
      <div class="bj-search-input-wrap">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="bj-search-input" id="bj-search-input" type="search"
          placeholder="Pesquisar equipamentos, recursos, vídeos…" autocomplete="off" spellcheck="false">
        <button class="bj-search-close" id="bj-search-close" aria-label="Fechar">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="bj-search-results" id="bj-search-results"></div>
      <div class="bj-search-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>
        <span><kbd>Enter</kbd> abrir</span>
        <span><kbd>Esc</kbd> fechar</span>
      </div>
    </div>
  `;
  document.body.appendChild(bjSearchOverlay);

  bjSearchInput = document.getElementById('bj-search-input');
  bjSearchList  = document.getElementById('bj-search-results');

  // Eventos
  document.getElementById('bj-search-close').addEventListener('click', bjSearchClose);
  bjSearchOverlay.addEventListener('click', e => { if (e.target === bjSearchOverlay) bjSearchClose(); });
  bjSearchInput.addEventListener('input', bjSearchRender);
  bjSearchInput.addEventListener('keydown', bjSearchKey);
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      e.preventDefault();
      bjSearchOpen();
    }
    if (e.key === 'Escape' && bjSearchOverlay.classList.contains('open')) bjSearchClose();
  });

  // Mostra todos ao abrir (sem query)
  bjSearchRender();
});

function bjSearchOpen() {
  bjSearchOverlay.classList.add('open');
  bjSearchFocused = -1;
  setTimeout(() => bjSearchInput.focus(), 60);
}
function bjSearchClose() {
  bjSearchOverlay.classList.remove('open');
  bjSearchInput.value = '';
  bjSearchRender();
}

function bjSearchRender() {
  const q = bjSearchInput.value.toLowerCase().trim();
  const hits = q
    ? BJ_SEARCH.filter(p => (p.title + p.desc + p.cat + p.kw).toLowerCase().includes(q))
    : BJ_SEARCH.slice(0, 12);

  bjSearchFocused = -1;
  bjSearchList.innerHTML = '';

  if (!hits.length) {
    bjSearchList.innerHTML = `
      <div class="bj-search-empty">
        <i class="fa-solid fa-magnifying-glass"></i>
        Nenhum resultado para "<strong>${q}</strong>"
      </div>`;
    return;
  }

  hits.forEach((p, i) => {
    const a = document.createElement('a');
    a.className = 'bj-search-result';
    a.href = p.url;
    a.setAttribute('tabindex', '-1');
    a.innerHTML = `
      <div class="bj-sr-icon"><i class="fa-solid ${p.icon}"></i></div>
      <div class="bj-sr-body">
        <div class="bj-sr-title">${p.title}</div>
        <div class="bj-sr-desc">${p.desc}</div>
      </div>
      <span class="bj-sr-badge">${p.cat}</span>
      <i class="fa-solid fa-arrow-right bj-sr-arrow"></i>
    `;
    a.addEventListener('click', bjSearchClose);
    bjSearchList.appendChild(a);
  });
}

function bjSearchKey(e) {
  const items = bjSearchList.querySelectorAll('.bj-search-result');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    bjSearchFocused = Math.min(bjSearchFocused + 1, items.length - 1);
    bjSearchHighlight(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    bjSearchFocused = Math.max(bjSearchFocused - 1, -1);
    bjSearchHighlight(items);
  } else if (e.key === 'Enter' && bjSearchFocused >= 0) {
    e.preventDefault();
    items[bjSearchFocused].click();
  }
}

function bjSearchHighlight(items) {
  items.forEach((el, i) => el.classList.toggle('focused', i === bjSearchFocused));
  if (bjSearchFocused >= 0) items[bjSearchFocused].scrollIntoView({ block: 'nearest' });
}

// ─── ICON CAROUSEL (Index) ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('icon-menu');
  const btnPrev = document.getElementById('icon-prev');
  const btnNext = document.getElementById('icon-next');
  if (!track || !btnPrev || !btnNext) return;

  // Clona itens no início e no fim para loop infinito
  const origItems = Array.from(track.children);
  const n = origItems.length;

  origItems.forEach(function (el) {
    const c = el.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    track.appendChild(c);
  });
  origItems.forEach(function (el) {
    const c = el.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    track.insertBefore(c, track.firstChild);
  });

  const itemW = 104 + 16; // largura + gap
  const loopW = n * itemW;
  const step  = itemW * 3; // avança 3 itens por clique

  // Posiciona no início do conjunto real (sem animação)
  track.scrollLeft = loopW;

  // Teleporta silenciosamente ao atingir as bordas dos clones
  function checkLoop() {
    if (track.scrollLeft < loopW * 0.4) {
      track.scrollLeft += loopW;
    } else if (track.scrollLeft >= loopW * 1.6) {
      track.scrollLeft -= loopW;
    }
  }

  // Lock para evitar cliques simultâneos que causam duplicação
  let locked = false;

  function slide(dir) {
    if (locked) return;
    locked = true;

    const target = track.scrollLeft + dir * step;
    track.scrollTo({ left: target, behavior: 'smooth' });

    // Aguarda o scroll terminar (~350ms) e só então libera + verifica loop
    setTimeout(function () {
      checkLoop();
      locked = false;
    }, 380);
  }

  btnNext.addEventListener('click', function () { slide(1); });
  btnPrev.addEventListener('click', function () { slide(-1); });
});

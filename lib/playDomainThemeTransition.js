const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function domainHandSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="52" height="52" fill="none" stroke="${color}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 50V28c0-3 2-5 4-5s4 2 4 5v20" />
      <path d="M30 52V24c0-3 2-5 4-5s4 2 4 5v26" />
      <path d="M58 50V28c0-3-2-5-4-5s-4 2-4 5v20" />
      <path d="M50 52V24c0-3-2-5-4-5s-4 2-4 5v26" />
      <path d="M34 40l6 8M46 40l-6 8" stroke-width="1" />
      <path d="M36 38l4 6M44 38l-4 6" stroke-width="0.8" opacity="0.7" />
      <path d="M18 42c2-6 5-10 10-10" opacity="0.7" />
      <path d="M62 42c-2-6-5-10-10-10" opacity="0.7" />
      <path d="M14 56c3 4 8 6 12 6M66 56c-3 4-8 6-12 6" opacity="0.45" />
      <circle cx="40" cy="40" r="34" stroke-width="0.4" opacity="0.15" />
    </svg>
  `;
}

export async function playDomainThemeTransition({ newTheme, onThemeSwap }) {
  if (REDUCED_MOTION) {
    onThemeSwap();
    return;
  }

  const toLight = newTheme === "light";
  const fill = toLight ? "#0a0a2e" : "#f0f0ff";
  const sealColor = toLight ? "rgba(255,255,255,0.92)" : "rgba(20,20,43,0.88)";
  const barrierColor = toLight ? "rgba(138,43,226,0.5)" : "rgba(100,100,180,0.4)";
  const textColor = toLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,43,0.55)";

  const root = document.createElement("div");
  root.className = "domain-expansion-root";
  root.innerHTML = `
    <div class="domain-backdrop"></div>
    <div class="domain-sphere" style="
      background:${fill}; 
      box-shadow: 
        0 0 80px 40px ${toLight ? 'rgba(138,43,226,0.15)' : 'rgba(200,200,255,0.2)'},
        inset 0 0 60px 30px ${toLight ? 'rgba(138,43,226,0.05)' : 'rgba(200,200,255,0.08)'};
    "></div>
    <div class="domain-barrier" style="border-color:${barrierColor}"></div>
    <div class="domain-content">
      <div class="domain-seal">
        ${domainHandSvg(sealColor)}
        <span class="domain-text" style="color:${textColor}; text-align:center; width:100%;">UNLIMITED VOID</span>

      </div>
    </div>
  `;

  document.body.appendChild(root);

  await wait(50);
  root.classList.add("active");

  await wait(600);
  onThemeSwap();
  await wait(200);

  root.classList.add("expand");
  await wait(500);
  root.classList.add("exit");
  await wait(400);
  root.remove();
}
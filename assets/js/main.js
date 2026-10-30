const navItems = [
  ["Home","index.html"],["About","about.html"],["Portfolio","portfolio.html"],["Services","services.html"],["Contact","contact.html"]
];
const currentPage = location.pathname.split("/").pop() || "index.html";
const header = document.getElementById("site-header");
if (header) {
  header.innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><span class="brand-mark">D</span><span>DEXTER<span class="brand-muted">GUIBONE</span></span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button><nav class="main-nav">${navItems.map(([label,url])=>`<a href="${url}" class="${currentPage===url?'active':''}">${label}</a>`).join("")}</nav><a class="nav-cta" href="contact.html">Let's talk ↗</a></div></header>`;
  const toggle = header.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const nav = header.querySelector(".main-nav");
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
}
const footer = document.getElementById("site-footer");
if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container footer-inner"><a class="brand" href="index.html"><span class="brand-mark">D</span><span>DEXTER<span class="brand-muted">GUIBONE</span></span></a><p>AI Video Creator · Video Editor · Graphic Designer</p><span>© ${new Date().getFullYear()} Dexter Guibone. All rights reserved.</span></div></footer>`;
const form = document.getElementById("contact-form");
if (form) form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Project inquiry: ${data.get("project")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\n\n${data.get("message")}`);
  window.location.href = `mailto:dynamicdemands88@gmail.com?subject=${subject}&body=${body}`;
});
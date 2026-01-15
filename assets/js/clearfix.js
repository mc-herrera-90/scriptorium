document.addEventListener("DOMContentLoaded", () => {
  const container = 'div[class~="language-md"]';

  // **texto** → texto
  document.querySelectorAll(`${container} .gs`).forEach((el) => {
    el.textContent = el.textContent.replace(/\*\*(.*?)\*\*/g, "$1");
  });

  // ## texto → texto
  document.querySelectorAll(`${container} .gu`).forEach((el) => {
    el.textContent = el.textContent.replace(/^#{2}\s*(.*)/, "$1");
  });

  // ![alt](src) → <img>
  document.querySelectorAll(`${container} .sx`).forEach((el) => {
    const src = el.textContent.trim();
    if (!src) return;

    const pOpen = el.previousElementSibling;
    const altEl = pOpen?.previousElementSibling;
    const pBang = altEl?.previousElementSibling;
    const pClose = el.nextElementSibling;

    if (
      !pBang ||
      !altEl ||
      !pOpen ||
      !pClose ||
      pBang.textContent !== "![" ||
      pOpen.textContent !== "](" ||
      pClose.textContent !== ")"
    )
      return;

    const img = document.createElement("img");
    img.src = src;
    img.alt = altEl.textContent;
    img.style.maxWidth = "100%";
    img.style.width = "89%";
    img.style.display = "block";
    img.style.margin = "0 auto";
    img.loading = "lazy";

    pBang.before(img);

    pBang.remove();
    altEl.remove();
    pOpen.remove();
    el.remove();
    pClose.remove();
  });
});

const menuLinks = document.querySelectorAll("#menu a");
const currentPath = window.location.pathname;

menuLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (currentPath.startsWith(linkPath)) {
    link.classList.add("active");
  }
});

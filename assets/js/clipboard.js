document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".code-copy").forEach((button) => {
    button.addEventListener("click", () => {
      const wrapper = button.closest(".highlighter-rouge");
      if (!wrapper) return;

      const code = wrapper.querySelector("code");
      if (!code) return;

      let text;

      // 👉 solo markdown
      if (wrapper.classList.contains("language-md")) {
        // clonar para no tocar el DOM real
        const clone = code.cloneNode(true);

        // reemplazar cada <img> por su URL en texto
        clone.querySelectorAll("img").forEach((img) => {
          const url = img.getAttribute("src") || "";
          const text = "URL imagen: " + url;
          img.replaceWith(document.createTextNode(text));
        });

        text = clone.innerText;
      } else {
        // otros lenguajes: copia normal
        text = code.innerText;
      }

      navigator.clipboard
        .writeText(text)
        .then(() => {
          button.textContent = "✅";
          setTimeout(() => (button.textContent = "📋"), 1500);
        })
        .catch(() => {
          button.textContent = "❌";
          setTimeout(() => (button.textContent = "📋"), 1500);
        });
    });
  });
});

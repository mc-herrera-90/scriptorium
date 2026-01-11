document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".code-copy");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const wrapper = button.closest("div.highlighter-rouge");
      if (!wrapper) return;

      const code = wrapper.querySelector("div.highlight code");
      if (!code) {
        console.warn("No se encontró <code> en el wrapper");
        return;
      }

      // Copia el texto plano ignorando los spans de resaltado
      const text = code.innerText;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          button.textContent = "✅";
          setTimeout(() => (button.textContent = "📋"), 1500);
        })
        .catch(() => {
          button.textContent = "❌ Error";
          setTimeout(() => (button.textContent = "📋"), 1500);
        });
    });
  });
});

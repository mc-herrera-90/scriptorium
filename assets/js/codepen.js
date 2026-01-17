function openCodepenFromBlock(codeBlock) {
  const code = codeBlock.querySelector("code").textContent;

  let html = "";
  let css = "";
  let js = "";

  if (codeBlock.classList.contains("language-html")) {
    html = code;
  }

  if (codeBlock.classList.contains("language-css")) {
    css = code;
  }

  if (codeBlock.classList.contains("language-js")) {
    js = code;
  }

  const data = {
    title: "Placeholder",
    html,
    css,
    js,
    editors: "101", // html | css | js
  };

  const form = document.createElement("form");
  form.action = "https://codepen.io/pen/define";
  form.method = "POST";
  form.target = "_blank";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "data";
  input.value = JSON.stringify(data);

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}
document.querySelectorAll(".code-codepen").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".highlighter-rouge");
    openCodepenFromBlock(wrapper);
  });
});

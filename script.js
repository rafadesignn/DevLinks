function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt", "Foto de Rafael Cavalcante sorrindo com óculos escuro e fundo claro."
    )
  } else {
    img.setAttribute("alt", "Foto de Rafael Cavalcante sorrindo e fundo claro.")
  }
}

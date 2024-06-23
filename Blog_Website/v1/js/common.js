function changeCert() {
  let cert_img = document.getElementById("github-cert");
  if (cert_img.getAttribute("data-cert") === "GL") {
    cert_img.src = "./images/git_testdome certificate.png";
    cert_img.setAttribute("data-cert", "TD");
  } else {
    cert_img.src = "./images/git_GreatLearning certificate.png";
    cert_img.setAttribute("data-cert", "GL");
  }
}

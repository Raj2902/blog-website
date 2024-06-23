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
function temp_select() {
  let data = document.getElementById("temp").value;
  if (data === "advance") {
    alert("we are working on this template...");
  } else if (data === "intermidiate") {
    document.getElementById("stylesheet").href =
      "./css/intermidiateTemplate.css";
  } else {
    document.getElementById("stylesheet").href = "./css/basicTemplate.css";
  }
}

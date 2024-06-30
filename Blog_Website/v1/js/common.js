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
    document.getElementById("stylesheet").href = "./css/advanceTemplate.css";
  } else if (data === "intermidiate") {
    document.getElementById("stylesheet").href =
      "./css/intermidiateTemplate.css";
  } else {
    document.getElementById("stylesheet").href = "./css/basicTemplate.css";
  }
}
/*To show dropdown skills*/
function showDropdown() {
  let show = document.getElementById("skill-drop");
  show.style.display = "block";
}
function hideDropdown() {
  let show = document.getElementById("skill-drop");
  show.style.display = "none";
}
/*To show dropdown certificates*/
function showDropdown_cert() {
  let show = document.getElementById("skill-drop-cert");
  show.style.display = "block";
}
function hideDropdown_cert() {
  let show = document.getElementById("skill-drop-cert");
  show.style.display = "none";
}
document.addEventListener("click", function (event) {
  const clickedSkillsDrop = document.getElementById("skill-drop");
  const clickedSkillsDropId = document.getElementById("skill-drop-id");
  const clickedCertDrop = document.getElementById("skill-drop-cert");
  const clickedCertDropId = document.getElementById("cert-drop-id");
  // Check if clicked element is not the div itself or any of its children
  if (
    !clickedSkillsDrop.contains(event.target) &&
    !clickedSkillsDropId.contains(event.target)
  ) {
    let show = document.getElementById("skill-drop");
    show.style.display = "none";
  }
  if (
    !clickedCertDrop.contains(event.target) &&
    !clickedCertDropId.contains(event.target)
  ) {
    let show = document.getElementById("skill-drop-cert");
    show.style.display = "none";
  }
});
function showOverlayHtml() {
  let show = document.getElementById("text-over-img-html");
  show.style.display = "block";
}
function showOverlayGit() {
  let show = document.getElementById("text-over-img-git");
  show.style.display = "block";
}
function showOverlayJS() {
  let show = document.getElementById("text-over-img-JS");
  show.style.display = "block";
}
function hideOverlayHtml() {
  let show = document.getElementById("text-over-img-html");
  show.style.display = "none";
}
function hideOverlayGit() {
  let show = document.getElementById("text-over-img-git");
  show.style.display = "none";
}
function hideOverlayJS() {
  let show = document.getElementById("text-over-img-JS");
  show.style.display = "none";
}
function changeCertHtml() {
  let changeCert = document.getElementById("html-cert-html");
  changeCert.src = "";
}
function changeCertGit() {
  let changeCert = document.getElementById("github-cert");
  let data = changeCert.getAttribute("data-git-cert");
  if (data === "1") {
    changeCert.src = "./images/git_testdome certificate.png";
    changeCert.setAttribute("data-git-cert", "2");
  } else {
    changeCert.src = "./images/git_GreatLearning certificate.png";
    changeCert.setAttribute("data-git-cert", "1");
  }
}

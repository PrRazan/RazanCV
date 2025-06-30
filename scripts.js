document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("langToggle");

  const url = window.location.href;
  const path = window.location.pathname;
  const hash = window.location.hash;
  const fileName = path.substring(path.lastIndexOf("/") + 1);
  const basePath = "/RazanCV/";

  const isArabic = fileName.includes("-ar") || url.includes("arbFiles");

  toggle.checked = !isArabic;

  toggle.addEventListener("change", function () {
    let newPath = "";

    if (fileName === "" || fileName === "index.html" || fileName === "index-ar.html") {
      newPath = this.checked
        ? window.location.origin + basePath + "index.html"
        : window.location.origin + basePath + "index-ar.html";
    } else {
      if (this.checked && isArabic) {
        const newFileName = fileName.replace("-ar", "");
        newPath = window.location.origin + path.replace("arbFiles/", "engFiles/").replace(fileName, newFileName);
      } else if (!this.checked && !isArabic) {
        const dotIndex = fileName.lastIndexOf(".");
        const nameWithoutExt = fileName.substring(0, dotIndex);
        const ext = fileName.substring(dotIndex);
        const newFileName = nameWithoutExt + "-ar" + ext;
        newPath = window.location.origin + path.replace("engFiles/", "arbFiles/").replace(fileName, newFileName);
      }
    }

    if (newPath !== "") {
      window.location.href = newPath + hash;
    }
  });
});



  document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('formMessage').innerText = "Message sent successfully!";
      document.getElementById('formMessage').style.color = 'green';
      form.reset();
    } else {
      response.json().then(data => {
        if (data.errors) {
          document.getElementById('formMessage').innerText = data.errors.map(error => error.message).join(", ");
        } else {
          document.getElementById('formMessage').innerText = "Oops! There was a problem sending your message.";
        }
        document.getElementById('formMessage').style.color = 'red';
      });
    }
  })
  .catch(() => {
    document.getElementById('formMessage').innerText = "Oops! There was a problem sending your message.";
    document.getElementById('formMessage').style.color = 'red';
  });
});

document.getElementById("playBtn1").addEventListener("click", function () {
    const video = document.getElementById("BlackBoard");
    if (video) video.play();
  });

  document.getElementById("playBtn2").addEventListener("click", function () {
    const video = document.getElementById("Emergency");
    if (video) video.play();
  });
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("langToggle");

  const path = window.location.pathname;
  const hash = window.location.hash; 
  const isArabic = path.includes("-ar");

  toggle.checked = !isArabic;

  toggle.addEventListener("change", function () {
    let newPath = "";

    if (this.checked) {
  
      if (path.includes("index-ar.html")) {
        newPath = "index.html";
      } else if (path.includes("AMI-ar.html")) {
        newPath = "AllMyInfo.html";
      }
    } else {

      if (path.includes("index.html")) {
        newPath = "index-ar.html";
      } else if (path.includes("AllMyInfo.html")) {
        newPath = "AMI-ar.html";
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
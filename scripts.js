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

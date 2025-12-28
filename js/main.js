document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('signupForm');
  const msg = document.getElementById('formMessage');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;
    const terms = form.terms.checked;

    if(!name || !email || !password || !confirm){
      msg.textContent = 'Please fill all required fields.';
      msg.style.color = 'crimson';
      return;
    }
    if(password !== confirm){
      msg.textContent = 'Passwords do not match.';
      msg.style.color = 'crimson';
      return;
    }
    if(!terms){
      msg.textContent = 'You must accept the terms.';
      msg.style.color = 'crimson';
      return;
    }

    // Demo: store in localStorage and show success message
    const users = JSON.parse(localStorage.getItem('demoUsers')||'[]');
    users.push({name,email,created:Date.now()});
    localStorage.setItem('demoUsers', JSON.stringify(users));

    msg.textContent = 'Thanks! Your account was created (demo).';
    msg.style.color = 'green';
    form.reset();
  });
});

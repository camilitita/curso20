document.getElementById('singup').addEventListener('submit', function (event) {
  event.preventDefault();


  let firstname = document.getElementById('first_name').value.trim();
  let lastname = document.getElementById('last_name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('user_password').value.trim();
  let passwordconfirm = document.getElementById('password_confirm').value.trim();


  let namevalid = /^[A-Za-z\s]+$/;
  let emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  let correct_input = true;

  if (!namevalid.test(firstname)) {
    alert('Please submit a valid first name.');
    correct_input = false;
  }

  if (!namevalid.test(lastname)) {
    alert('Please submit a valid last name.');
    correct_input = false;
  }

  if (!emailvalid.test(email)) {
    alert('Please submit a valid email address.');
    correct_input = false;
  }

  const errors = [];
  if (!passwordvalid.test(password)) {
    if (!/.{8,}/.test(password)) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must include at least one digit.");
    }
    if (!/[@$!%*?&]/.test(password)) {
      errors.push("Password must include at least one special character (@, $, !, %, *, ?, &).");
    }

    alert("Your password is invalid because:\n\n" + errors.join("\n"));
    correct_input = false;
  }

  if (password !== passwordconfirm) {
    errors.push("Passwords must be the same!.");
  }

  if (correct_input) {
    alert("Form submitted successfully!");
    event.target.submit();
  }
});



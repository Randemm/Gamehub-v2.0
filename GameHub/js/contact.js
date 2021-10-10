const formContainer = document.getElementById("form");

function validateForm() {
  var formError = false;
  var fnamePointer = "first name";
  var firstName = document.forms["contactForm"][fnamePointer].value;
  if (validateString(firstName, 0)) {
    document.getElementById("fnameerror").innerHTML =
      "First name cannot be empty.";
    formError = true;
    document.getElementById("fname").classList.add("input-error");
  } else {
    document.getElementById("fname").classList.remove("input-error");
    document.getElementById("fnameerror").innerHTML = "";
  }

  var lnamePointer = "last name";
  var lastName = document.forms["contactForm"][lnamePointer].value;
  if (validateString(lastName, lnamePointer, 0)) {
    document.getElementById("lnameerror").innerHTML =
      "Last name cannot be empty.";
    document.getElementById("lname").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("lname").classList.remove("input-error");
  }
  var emailPointer = "email";
  var email = document.forms["contactForm"][emailPointer].value;
  if (validateString(email, emailPointer, 0)) {
    formError = true;
  }

  if (!validateEmail(email)) {
    document.getElementById("emailerror").innerHTML = "Email not valid.";
    document.getElementById("email").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("email").classList.remove("input-error");
  }

  var subjectPointer = "subject";
  var subject = document.forms["contactForm"][subjectPointer].value;
  if (validateString(subject, subjectPointer, 10)) {
    document.getElementById("subjecterror").innerHTML =
      "Subject cannot be empty or less than 10 characters.";
    document.getElementById("subject").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("subjecterror").innerHTML = "";
    document.getElementById("subject").classList.remove("input-error");
  }
  if (formError == false) {
    formContainer.innerHTML =
      '<h1 class="complete"> Form was submitted successfully.</h1><p>Your question has been recieved and you will recieve an answer within one week.</p><button onClick="window.location.reload();">Send new form</button>';
  } else {
    return false;
  }
}

function validateString(string, nameOfValue, minLength) {
  if (string == "") {
    return true;
  }

  if (minLength != 0) {
    if (string.length < minLength) {
      return true;
    }
  }

  return false;
}

function validateEmail(email) {
  const re = /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
}

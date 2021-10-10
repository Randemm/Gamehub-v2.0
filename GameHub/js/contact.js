const formContainer = document.getElementById("form");

function validateForm() {
  var formError = false;
  var fnamePointer = "first name";
  var firstName = document.forms["contactForm"][fnamePointer].value;
  if (validateString(firstName, fnamePointer, 0)) {
    document.getElementById("fnameerror").innerHTML =
      "First name cannot be empty.";
    formError = true;
  }

  var lnamePointer = "last name";
  var lastName = document.forms["contactForm"][lnamePointer].value;
  if (validateString(lastName, lnamePointer, 0)) {
    document.getElementById("lnameerror").innerHTML =
      "Last name cannot be empty.";
    formError = true;
  }
  var emailPointer = "email";
  var email = document.forms["contactForm"][emailPointer].value;
  if (validateString(email, emailPointer, 0)) {
    formError = true;
  }
  console.log(validateEmail(email));

  if (!validateEmail(email)) {
    document.getElementById("emailerror").innerHTML = "Email not valid.";
    formError = true;
  }

  var subjectPointer = "subject";
  var subject = document.forms["contactForm"][subjectPointer].value;
  if (validateString(subject, subjectPointer, 10)) {
    document.getElementById("subjecterror").innerHTML =
      "Subject cannot be empty or less than 10 characters.";
    formError = true;
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

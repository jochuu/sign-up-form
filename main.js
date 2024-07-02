function animateCreateAccountButton() {

    var fields = ["first_name", "last_name", "email", "phone_number", "password", "confirm_password"]

    var i, l = fields.length;
    var fieldname;
    var counter = 0;
    for (i = 0; i < l; i++) {
      fieldname = fields[i];
      if (document.forms[0][fieldname].value !== "") {
        counter++;
      }
    }
    document.getElementById("create-button").className = "create-account-button rounded-border animate-button-step-"+counter;
    return true;
  }
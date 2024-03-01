function Send() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("Contact").value;
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;

  var body =
    "Name:" +
    name +
    "<br/> Email: " +
    email +
    "<br/> Contact Number:" +
    contact +
    "<br/> Subject:" +
    sub +
    "<br/> Message:" +
    mess;

  console.log(body);

  Email.send({
    SecureToken: "21970f2f-335a-4aed-a80a-79c3c5fb71c3",
    // Host: "smtp.elasticemail.com",
    // Username: "choudharitrupti2020@gmail.com",
    // Password: "6B1D7413F972C1CDC98300132DCAC8067D30",
    To: "choudharitrupti2020@gmail.com",
    From: "choudharitrupti2020@gmail.com",
    Subject: sub,
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Successfull!", "Your Data is successfully Received!", "success");
    } else {
      swal("Something went wrong!", "Your Data is not Received!", "error");
    }
  });
}

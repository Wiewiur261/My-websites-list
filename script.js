alert("Username: Websites_list\nPassword: Wiewiur261");

document
  .getElementById("forgot-password")
  .addEventListener("click", function () {
    alert("Username: Websites_list\nPassword: Wiewiur261");
  });

document.getElementById("register").addEventListener("click", function () {
  alert(
    "On this page you can only log in on one account. If you want to log in click Forgot password and you will see the username and password."
  );
});

function valiadate() {
  document
    .getElementsByClassName("btn")[0]
    .addEventListener("click", function () {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (username === "Websites_list" && password === "Wiewiur261") {
        window.location.href = "weblist.html";
      } else {
        alert("Invalid username and/or password. Please try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return false;
      }
    });
}

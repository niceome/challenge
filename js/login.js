document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    alert("로그인 성공!");
    localStorage.setItem("currentUser", username);
    window.location.href = "todo.html";
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
});

document.getElementById("signupBtn").addEventListener("click", function () {
  window.location.href = "signup.html";
});

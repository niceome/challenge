const completeSignupBtn = document.querySelector(".complete");

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password && password.length >= 7) {
    localStorage.setItem(username, password);
    alert("회원가입 성공~");
  } else {
    alert("회원 가입 실패~");
  }
});

completeSignupBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

const currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  alert("로그인을 먼저 해주세요.");
  window.locate.href = "index.html";
}

document.getElementById("welcome").textContent = `환영합니다! ${currentUser}`;

// 로그아웃
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});

const todoList = JSON.parse(localStorage.getItem(`${currentUser}_todos`)) || [];
const todoListEl = document.getElementById("todoList");

// todo list 렌더링
function renderTodos() {
  todoListEl.innerHTML = "";
  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => {
      todoList.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    //todo list 수정
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.classList.add("edit");
    editBtn.onclick = () => {
      const newText = prompt("새로운 내용을 입력하세요:", todo.text);
      if (newText) {
        todo.text = newText;
        saveTodos();
        renderTodos();
      }
    };
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    todoListEl.appendChild(li);
  });
}

// todo list 저장
function saveTodos() {
  localStorage.setItem(`${currentUser}_todos`, JSON.stringify(todoList));
}

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const todoInput = document.getElementById("todoInput");
  const newTodo = { text: todoInput.value };
  todoList.push(newTodo);
  saveTodos();
  renderTodos();
  todoInput.value = "";
});

renderTodos();

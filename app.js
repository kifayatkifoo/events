let tasks = [
  { title: "Create an app", isCompleted: false },
  { title: "Go to Market", isCompleted: false },
];

function renderUsers() {
  document.body.querySelector(".users-list").innerHTML = "";
  const ul = document.createElement("ul");
  tasks.forEach((user, key) => {
    let li = document.createElement("li");
    let closeButton = document.createElement("button");
    let clickButton = document.createElement('button');
    closeButton.innerHTML = "&times;";
    li.innerHTML = key.title;

    clickButton.innerHTML = "&times;";
    clickButton.style.backgroundColor ="crimson";
    clickButton.style.Color ="#fff";
    li.innerHTML = tasks[key].title;
    clickButton.onclick = function () {
        if (tasks.isCompleted== false){
            li.style.textDecoration= "line-through"
            tasks.isCompleted=true;
        }
        else{
            li.style.textDecoration= "none"
            tasks.isCompleted=false;
        }
    }

    closeButton.onclick = function () {
      tasks.splice(key, 1);
      renderUsers();
    };
    li.append(closeButton);
    li.append(clickButton)
    ul.append(li);
  });

  if(tasks.length == 0){
    alert(' There are no tasks available')
}
  document.body.querySelector(".users-list").append(ul);
}
const input = document.createElement("input");
const inputButton = document.createElement("button");
inputButton.innerHTML = "Create User";
input.placeholder = "Create a new user";
document.body.querySelector(".user-add-form").append(input);
document.body.querySelector(".user-add-form").append(inputButton);
inputButton.onclick = function () {
  if (input.value) {
    tasks.push({ title: input.value, isCompleted: false });
    input.value = "";
  }
  renderUsers();
};

renderUsers();

var cricketer = document.querySelector("h2");
var Add_Friend = document.querySelector("#Add_Friend");
var flag = 0;

// console.log(cricketer);
// console.log(Add_Friend);

Add_Friend.addEventListener("click", () => {
  if (flag == 0) {
    cricketer.innerHTML = "Friends";
    cricketer.style.color = "green";
    Add_Friend.innerHTML = "Remove";
    Add_Friend.style.backgroundColor = "red";
    flag = 1;
  } else if (flag == 1) {
    cricketer.innerHTML = "Stranger";
    cricketer.style.color = "green";
    Add_Friend.innerHTML = "Add Friend";
    flag = 0;
  }
});

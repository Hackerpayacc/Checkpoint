// Bài 1:
let user = prompt("Vui lòng nhập 1 trong 4 kí tự C, R, U, D");
if (user === "") {
  alert("Vui lòng nhập 1 trong 4 kí tự C, R, U, D");
} else if (user === "C") {
  creat();
} else if (user === "R") {
  read();
} else if (user === "U") {
  update();
} else if (user === "D") {
  deleteMenu();
} else {
  alert("Lựa chọn không hợp lệ.");
}
function getMenu() {
  let menujson = localStorage.getItem("Menu");
  return menujson ? JSON.parse(menujson) : ["rau xào", "thịt luộc", "gà rán"];
}

function saveMenu(menu) {
  localStorage.setItem("Menu", JSON.stringify(menu));
}

function creat() {
  let menu = getMenu();
  let monan = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
  menu.push(monan);
  saveMenu(menu);
}

function read() {
  let menu = getMenu();
  alert(menu.join(", "));
}

function update() {
  let user_want = prompt("Mời người dùng nhập vào tên món muốn update");
  let menu = getMenu();
  let monan_update = menu.indexOf(user_want);
  if (monan_update !== -1) {
    let user_update = prompt("Mời người dùng nhập vào tên món ăn mới");
    menu[monan_update] = user_update;
    saveMenu(menu);
  } else {
    alert("Món ăn không tồn tại trong menu.");
  }
}

function deleteMenu() {
  let user_delete = prompt("Mời người dùng nhập vào tên món muốn xóa");
  let menu = getMenu();
  let monan_delete = menu.indexOf(user_delete);
  if (monan_delete !== -1) {
    menu.splice(monan_delete, 1);
    saveMenu(menu);
  } else {
    alert("Món ăn không tồn tại trong menu.");
  }
}
// Bài 2

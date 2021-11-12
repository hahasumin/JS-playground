document.write("<h1>어서오세요</h1>");
var name = prompt("이름을 입력해주세요");
document.write(`<b>${name}</b>님, 환영합니다<br />`);
console.log(`${name}님, 환영합니다`);

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

document.write(date);

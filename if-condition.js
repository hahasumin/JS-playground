var userNumber = prompt("Type your number");

if (userNumber != 0) {
  if (userNumber !== null) {
    if (userNumber % 3 === 0) {
      alert("3의 배수입니다");
    } else {
      alert("3의 배수가 아닙니다");
    }
  } else {
    alert("입력이 취소 되었습니다");
  }
} else {
  alert("배수가 존재하지 않습니다");
}

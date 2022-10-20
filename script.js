var textArr = "";
document.getElementById("arr").value = "-1,1,3,2,4,";
document.getElementById("numInEx09").value = "1.1,2.2,4,5,6,7,8.8";
textArr = document.getElementById("arr").value;
function Ex00() {
  var numi = parseFloat(document.getElementById("arri").value);
  textArr += numi + ",";
  document.getElementById("arr").value = textArr;
}

function converseArr() {
  var arr = textArr.split(",");
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = parseFloat(arr[i]);
  }
  arr.pop();
  return arr;
}

function Ex01() {
  var arr = converseArr();
  console.log(arr);
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("numOutEx01").value = " " + sum;
}

function Ex02() {
  var arr = converseArr();
  var cont = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      cont++;
    }
  }
  document.getElementById("numOutEx02").value = " " + cont;
}

function Ex03() {
  var arr = converseArr();
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.getElementById("numOutEx03").value = " " + min;
}

function Ex04() {
  var arr = converseArr();
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      min = arr[i];
      break;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i] && arr[i] > 0) {
      min = arr[i];
    }
  }
  document.getElementById("numOutEx04").value = " " + min;
}

function Ex05() {
  var arr = converseArr();
  var Even;
  var isEven = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Even = arr[i];
      isEven = true;
    }
  }
  if (isEven === true) document.getElementById("numOutEx05").value = " " + Even;
  else document.getElementById("numOutEx05").value = " -1";
}

function Ex06() {
  var arr = converseArr();
  var numPos1 = parseFloat(document.getElementById("numPos1").value);
  var numPos2 = parseFloat(document.getElementById("numPos2").value);
  var temp;
  temp = arr[numPos1];
  arr[numPos1] = arr[numPos2];
  arr[numPos2] = temp;
  document.getElementById("numOutEx06").value = " " + arr;
}

function Ex07() {
  var arr = converseArr();
  var temp;
  for (var k = arr.length - 1; k >= 0; k--) {
    for (var i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  document.getElementById("numOutEx07").value = " " + arr;
}

function Ex08() {
  var arr = converseArr();
  var flag = false;
  var count = 0;
  for (var k = 0; k < arr.length; k++) {
    for (var i = 2; i < arr[k]; i++) {
      if (arr[k] % i === 0) {
        flag = true;
      }
    }
    if (flag === false) {
      document.getElementById("numOutEx08").value = " " + arr[k];
      count++;
      break;
    } else {
      flag = false;
    }
  }
  if (count === 0) {
    document.getElementById("numOutEx08").value = " -1";
  }
}

function Ex09() {
  var arrNumIn = document.getElementById("numInEx09").value;
  var arr = arrNumIn.split(",");
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = parseFloat(arr[i]);
  }
  var numtxt = parseFloat(document.getElementById("arri").value);
  var cont = 0;
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] - Math.floor(arr[k]) === 0) {
      cont++;
    }
  }
  document.getElementById("numOutEx09").value = " " + cont;
}

function Ex10() {
  var arr = converseArr();
  var contPosi = 0;
  var contNega = 0;
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] > 0) {
      contPosi++;
    }
    if (arr[k] < 0) {
      contNega++;
    }
  }
  if (contPosi > contNega)
    document.getElementById("numOutEx10").value =
      " Số dương nhiều hơn số âm " + (contPosi - contNega) + " số";
  else
    document.getElementById("numOutEx10").value =
      " Số âm nhiều hơn số dương " + (-contPosi + contNega) + " số";
}

const questions = document.querySelectorAll(".question");

for (var i = 0; i < questions.length; i++) {
  const element = questions[i];
  const btn = questions[i].querySelector(".question-btn");
  btn.onclick = function (e) {
    console.log(e);
    handleCollapse(element);
  };
}

function handleCollapse(element) {
  for (var i = 0; i < questions.length; i++) {
    if (element !== questions[i]) {
      questions[i].classList.remove("show-text");
    }
  }
  element.classList.toggle("show-text");
}

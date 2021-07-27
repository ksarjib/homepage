
function everyTenMinutes() {
  alert('10 minutes have passed');
}
window.onload = function () {

  setInterval(everyTenMinutes, 60000);
}

function earliestSpace(str1, str2, str3) {
  let str1Arr = str1.split(' ');
  let str2Arr = str2.split(' ');
  let str3Arr = str3.split(' ');

  if(str1Arr[0].length < str2Arr[0].length && str1Arr[0].length < str3Arr[0].length) {
      return str1;
  } else if (str2Arr[0].length < str3Arr[0].length) {
      return str2;
  } else {
      return
  }
}

let result = earliestSpace("This is a test", "Where it checks for spaces",
              "bla bla bla");
console.log(result);
console.log('App started');
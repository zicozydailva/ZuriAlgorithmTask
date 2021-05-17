function convertFahrToCelsuis(fahr) {
  if(fahr == null) {
    console.log("Please enter a value of fahrenheit for conversion!");
  } else {
    let regEx = /[a-zA-Z]/
    let regexResult = regEx.test(fahr)

    if(regexResult === true && typeof fahr !== 'object' && fahr !== null) {
      console.log(`"${fahr}"`, `Is not a valid number but a`, `${typeof(fahr)}`);
    } else if (Array.isArray(fahr) === true) {
      console.log(fahr, `is not a valid number but a/an array`);
    } else if(typeof fahr === 'object' && typeof fahr !== null && !Array.isArray(fahr)) {
      console.log(fahr, `is not valid number but a/an object`);
    } else {
      let F = Number(fahr);
      let C = ((F - 32) * 5/9)
      console.log(C.toFixed(4),"Deg C");
    }
  }
}
convertFahrToCelsuis('100')








// *************************** NUMBER 2 ****************************

function checkYUGiOh(n) {
  let output = [];
  let count = 1;
  while (count <= n) {

    if (count % 2 === 0 && count % 3 === 0 && count % 5 === 0) {
      output.push("Yu-Gi-Oh")
    } else if (count % 2 === 0 && count % 3 === 0) {
      output.push("Yu-Gi")
    } else if (count % 2 === 0 && count % 5 === 0) {
      output.push("Yu-Oh")
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.push("Gi-Oh")
    } else if (count % 2 === 0) {
      output.push("Yu")
    } else if (count % 3 === 0) {
      output.push("Gi")
    } else if (count % 5 === 0) {
      output.push("Oh")
    } else {
      output.push(count)
    }
    count++;
  }
  console.log(output);
}

checkYUGiOh(100)

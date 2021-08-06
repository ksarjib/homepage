const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const sumTotal = (sum) => {
    readline.question("Enter a number: ", (n) => {
      if (n === "stop") {
        readline.close();
        console.log("sum=" + sum);
        return;
      }
      return sumTotal(sum + parseInt(n));
    });
  };
  sumTotal(0);
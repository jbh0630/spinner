const spinner = ["|", "/", "-", "\\", "|"];
let time = 100;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    if (i === spinner.length - 1) {
      process.stdout.write(`\r${spinner[i]} \n`);
    } else {
      process.stdout.write(`\r${spinner[i]}`);
    }
  }, time);
  time += 200;
}
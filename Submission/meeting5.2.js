var x = 5;
var y = 3;

if (x > 0 && y > 0) {
  console.log("Top Right");
} else if (x < 0 && y > 0) {
  console.log("Top Left");
} else if (x > 0 && y < 0) {
  console.log("Bottom Right");
} else if (x < 0 && y < 0) {
  console.log("Bottom Left");
} else {
  console.log("In the Middle");
}
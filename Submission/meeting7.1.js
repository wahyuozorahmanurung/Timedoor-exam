var playTime = [2, 2, 3, 3, 1, 4, 5];
var limit = 2;

var totalTime = 0;
var exceededCount = 0;

for (var i = 0; i < playTime.length; i++) {
  totalTime += playTime[i];

  if (playTime[i] > limit) {
    exceededCount++;
  }
}

console.log("Total Time: " + totalTime + " hours");
console.log("Exceeded Limit: " + exceededCount + " times");
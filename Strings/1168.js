let nTestes = Number(lines.shift());
let totalLeds = 0;
let leds;

for (let j = 0; j < nTestes; j++) {
  leds = lines[j];

  for (let i = 0; i < leds.length; i++) {
    if (leds[i] == 1) {
      totalLeds += 2;
    } else if (leds[i] == 2 || leds[i] == 3 || leds[i] == 5) {
      totalLeds += 5;
    } else if (leds[i] == 4) {
      totalLeds += 4;
    } else if (leds[i] == 7) {
      totalLeds += 3;
    } else if (leds[i] == 0 || leds[i] == 6 || leds[i] == 9) {
      totalLeds += 6;
    } else if (leds[i] == 8) {
      totalLeds += 7;
    }
  }

  console.log(`${totalLeds} leds`);
  totalLeds = 0;
}

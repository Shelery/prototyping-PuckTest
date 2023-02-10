import { Espruino } from "https://unpkg.com/ixfx/dist/io.js";

const btn1 = document.querySelector("#btn1");
console.log(btn1);
const btn2 = document.querySelector("#btn2");
console.log(btn2);
btn1.addEventListener("click", () => {
  Puck.write("LED1.set();\n");
});
btn2.addEventListener("click", () => {
  Puck.write("LED1.reset();\n");
});

const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = () => {
      console.log("Cannot read data from the NFC tag. Try another one?");
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  })
  .catch((error) => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });

//https://www.espruino.com/Web+NFC

/* var data = new Uint8Array(10 + 64);
var header = NRF.nfcStart();
var written = false;
data.set(header, 0); // NFC device header
data.set([0, 0, 0xe1, 0x10, (data.length - 10) / 8, 0, 0, 3, 0, 0xfe], 0x0a); // NDEF tag header
// 0,0,e1
Puck.write(`
NRF.on("NFCrx", function (rx) {
  var idx = rx[1] * 4;
  switch (rx[0]) {
    case 0x30: //command: READ
      NRF.nfcSend(new Uint8Array(data.buffer, idx, 16));
      break;
    case 0xa2: //command: WRITE
      written = true;
      if (idx > data.length) {
        NRF.nfcSend(0x0);
      } else {
        data.set(new Uint8Array(rx, 2, 4), idx);
        NRF.nfcSend(0xa);
      }
      break;
    default: //just, re-enable rx
      NRF.nfcSend();
      break;
  }
});`);
Puck.write(`
NRF.on("NFCoff", function () {
  console.log("off");
  if (written)
    onWritten(E.toString(new Uint8Array(data.buffer, 26, data[21] - 3)));
  // write your function here

  written = false;
});`);

function onWritten(data) {
  console.log("NFC written", data);
  var colors = {
    red: 1,
    green: 2,
    blue: 4,
  };
  // Only light LEDs if we actually have 3 LEDs! Allows Pixl.js upload
  if (colors[data] && global.LED1 && global.LED2 && global.LED3) {
    digitalWrite([LED3, LED2, LED1], colors[data]);
    setTimeout(function () {
      digitalWrite([LED3, LED2, LED1], 0);
    }, 1000);
  }
}
 */
// https://www.espruino.com/Web%20Bluetooth

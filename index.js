const usbDetect = require("usb-detection");
const crypto = require("crypto");
const encryptor = require("file-encryptor");

const mode = process.argv[2];
const filepath = process.argv[3];


function makeHash(id) {
  return crypto.createHash("sha256").update(id, "utf8").digest("hex");
}

function makeUniqueId(device) {
  return makeHash(device.deviceName + ":" + device.manufacturer + ":" + device.serialNumber);
}

if (mode === "encrypt") {
  usbDetect.on("add", device => {
    const id = makeUniqueId(device);
    encryptor.encryptFile(filepath, "encrypted.dat", id, (err) => { 
      usbDetect.stopMonitoring();
      process.exit(0);
    });
  });
} else if (mode === "decrypt") {
  usbDetect.on("add", device => {
    const id = makeUniqueId(device);
    encryptor.decryptFile(filepath, "decrypted.dat", id, (err) => { 
      usbDetect.stopMonitoring();
      process.exit(0);
    });
  });
}

usbDetect.startMonitoring();

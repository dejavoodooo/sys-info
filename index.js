// const HID = require("node-hid");
const si = require("systeminformation");
const fs = require("fs");
const os = require("os");
const wifi = require("node-wifi")


si.getAllData()
  .then((data) =>
    fs.writeFile("sysinfo-output.json", JSON.stringify(data, null, 4), (err) => {
      if (err) throw err;
      console.log("File saved to " + "sysinfo-output.json");
    })
  )
  .catch((error) => console.error(error));

wifi.init({
    iface: null // network interface, choose a random wifi interface if set to null
});

wifi.getCurrentConnections()
  .then((currentConnections) =>
    fs.writeFile("wifi-connection-output.json", JSON.stringify(currentConnections, null, 4), (err) => {
      if (err) throw err;
      console.log("File saved to " + "wifi-connection-output.json");
    })
  )
  .catch((error) => console.error(error));

  wifi.scan()
  .then((networks) =>
    fs.writeFile("wifi-networks-output.json", JSON.stringify(networks, null, 4), (err) => {
      if (err) throw err;
      console.log("File saved to " + "wifi-networks-output.json");
    })
  )
  .catch((error) => console.error(error));
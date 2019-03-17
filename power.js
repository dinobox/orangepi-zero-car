const process = require('child_process');
const Promise = require("bluebird");
exports.set = function (pin, value) {
    console.log(pin, value);
    return new Promise(function (resolve, reject) {
        process.exec(`./power.sh ${pin} ${value}`, function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}
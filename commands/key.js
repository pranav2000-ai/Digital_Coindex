const color = require('colors')
const inquirer = require('inquirer')
const KeyManager = require('../lib/key_manager.js')
const isRequired = input => (input === '' ? 'Key is Required' : true)
const keyStruct = {
    async setM() {
        const keyManager = new KeyManager()
        const input = await inquirer.prompt([{
            type: 'input',
            name: 'key',
            message: 'Enter the API KEY '.green + 'https://nomics.com',
            validate: isRequired
        }]);
        const keyTemp = keyManager.setKey(input.key)
        if (keyTemp) {
            console.log('API KEY SET'.blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager()
            const keyTemp = keyManager.getKey()
            console.log('Current API Key: ', keyTemp.yellow)
            return keyTemp;
        } catch (err) {
            console.log(err.message.red)
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager()
            keyManager.deleteKey()
            console.log('Key Removed'.blue)
            return;
        } catch (err) {
            console.log(err.message.red)
        }
    }
}
module.exports = keyStruct;
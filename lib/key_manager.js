const pkg = require('../package.json');
const Configstore = require('configstore')
class keyManager {
    constructor() {
        this.conf = new Configstore(pkg.name)
    }
    setKey(key) {
        this.conf.set('ApiKey', key)
        return key;
    }
    getKey() {
        const keyTemp = this.conf.get('ApiKey')
        if (!keyTemp) {
            throw new Error('Could not find key. Get it at https://nomics.com')
        }
        return keyTemp;
    }
    deleteKey() {
        const keyTemp = this.conf.get('ApiKey')
        if (!keyTemp) {
            throw new Error('Could not find key. Get it at https://nomics.com')
        }
        this.conf.delete('ApiKey')
        return;
    }
}

module.exports = keyManager
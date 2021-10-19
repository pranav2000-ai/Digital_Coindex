const KeyManager = require('../lib/key_manager');
const CryptoAPI = require('../lib/cryptoAPI');

const check = {
    async Price(cmd) {
        try {
            const keyManager = new KeyManager();
            const keyTemp = keyManager.getKey();

            const api = new CryptoAPI(keyTemp);
            const pirceInfo = await api.getPriceData(cmd.coin, cmd.cur);
            console.log(pirceInfo);
        } catch (err) {
            console.log(err.message.red);
        }
    }
}

module.exports = check
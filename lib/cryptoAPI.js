const axios = require('axios')
const colors = require('colors')

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }
    async getPriceData(coinOptions, curOptions) {
        try {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOptions
            })
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOptions}&convert=${curOptions}`)
            let output = "";
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`
            });
            return output;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = CryptoAPI;
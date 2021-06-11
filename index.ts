import express from "express";

import tiny from 'tiny-json-http';
const app = express();
const PORT = 8000;


const bscapi = 'https://api.bscscan.com/api?module=account&action=txlist&address=0x27AA192A1C257C9B93174660E1c9328E58F0132b&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken'

function bruh() {
    return tiny.get({url: bscapi}, function _get(err, result) {
        if (err) {
            console.error('[ledge]', err);
        } else {
            console.log(result);
        }
    })
}

app.get('/', (req, res) => res.send(bruh()
));

app.listen(PORT, () => {
    console.log(`⚡️ eee err`);
});
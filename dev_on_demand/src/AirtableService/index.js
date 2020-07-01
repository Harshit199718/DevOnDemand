import { API_KEY } from '../config/config'

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: API_KEY
});
const base = Airtable.base('app0kebqTFfmEWOET');

const addRecords = (data) => {

    base('favourites').create(data, function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
}

export default {
    addRecords
}
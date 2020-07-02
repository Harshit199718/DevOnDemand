import { API_KEY } from '../config/config'

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: window.AIRTABLE_API_KEY
});
const base = Airtable.base(window.AIRTABLE_BASE_ID);

const addRecords = (data) => {
    base(window.AIRTABLE_BASE_NAME).create(data, function (err, records) {
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
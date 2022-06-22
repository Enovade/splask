const axios = require('axios');
const core = require('@actions/core');

const splaskurl = core.getInput('splaskurl', { required: true });
const url = core.getInput('url', { required: true });
const scope = core.getInput('scope', { required: true });
let payload = {
    "url" : url,
    "scope": scope
}
let getSplask = axios.post(splaskurl, payload)
.then(res => {
    console.log(res.data)
    let myData = JSON.stringify(res.data)
    core.setOutput('jawapan', myData);
})
.catch(err => {
    console.error(err); 
})
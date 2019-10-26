module.exports = process.env.INCOMING_HOOK_BODY === undefined ?
    {status: false, title: ''} :
    JSON.parse(process.env.INCOMING_HOOK_BODY);

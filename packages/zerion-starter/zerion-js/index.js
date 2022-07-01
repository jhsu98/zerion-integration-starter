const { IFB } = require('zerion-js');

async function main(args) {
    const IFB_SERVER = process.env.SERVER;
    const IFB_CLIENT_KEY = process.env.IFB_CLIENT_KEY;
    const IFB_CLIENT_SECRET = process.env.IFB_CLIENT_SECRET;
    const IFB_REGION = process.env.REGION;
    const IFB_VERSION = process.env.VERSION;

    const api = IFB(IFB_SERVER, IFB_REGION, IFB_CLIENT_KEY, IFB_CLIENT_SECRET, IFB_VERSION);
    
}

exports.main = main;
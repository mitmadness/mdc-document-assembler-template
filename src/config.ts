import baseConfig, { asNumber, asString, getConfig } from '@mitm/config';

const config = {
    ...baseConfig.default,
    get port() {
        return getConfig('documentassembler.port', asNumber)
    },
    mydecocloud: {
        get graphqlUrl() {
            return getConfig('mydecocloud.graphqlUrl', asString)
        }
    }
};

export default config;

import baseConfig, { asNumber, getConfig } from '@mitm/config';

const config = {
    ...baseConfig.default,
    get port() {
        return getConfig('documentassembler.port', asNumber)
    }
};

export default config;

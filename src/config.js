export const config = {
    RPC_URL: 'http://localhost:26657',
    REST_URL: 'http://localhost:1317',
    EXPLORER_URL: 'https://www.mintscan.io/rizon',
    NETWORK_NAME: 'RIZON',
    NETWORK_TYPE: 'mainnet',
    CHAIN_ID: 'titan-1',
    CHAIN_NAME: 'RIZON',
    COIN_DENOM: 'ATOLO',
    COIN_MINIMAL_DENOM: 'uatolo',
    COIN_DECIMALS: 6,
    PREFIX: 'rizon',
    COIN_TYPE: 118,
    COINGECKO_ID: 'rizon',
    DEFAULT_GAS: 200000,
    GAS_PRICE_STEP_LOW: 0.00033,
    GAS_PRICE_STEP_AVERAGE: 0.000825,
    GAS_PRICE_STEP_HIGH: 0.00132,
    FEATURES: ['ibc-transfer', 'ibc-go'],
};

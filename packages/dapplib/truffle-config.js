require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth outside coin grace casino slot gate'; 
let testAccounts = [
"0xe2ecd82f8fd2954194defd4c0468d5c53a4829c21a5b8a959d85d12087b16db1",
"0x1b83b20588453ef38d6a69a95aa5ad1959f34eb7a750c455b6336282ecb3a8d5",
"0x1ca6ff05f50ddb9057c10e38e4d155b4bdc13c3dddd9a9dc88e6c530432fb9a5",
"0xc64cfef42076166bb10f11f84ee8e5504053ef5845b5337309f7cbd989003d8e",
"0x141cdd8a37105968809d1b8acb9f309d0ea1fb8c45f5c7dbbc49aa2841de5174",
"0xd91a5015f8623d9431d55e74ff32eea0fe340ea4c2518921aea3dade286dca41",
"0x7bbceb7ed1cfe15c05db636392d00dfd161ad1965818e48e54821ed93a06f226",
"0xb128afe8f358a7a0e02a925a1b3060adfffed07d10f4aa1b925a3825d35baa8f",
"0x7aafd351fc2a7f3892cdfc4b7eef60b8357308615e85d43c91f1e745ff84523c",
"0x6037c7251e1ba802136c0f7534fb3c629e7a930a02b66922998ef3ae8ec42584"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


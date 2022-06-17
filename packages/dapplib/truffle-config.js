require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin problem obscure sweet'; 
let testAccounts = [
"0x6b16d908ffabb636b53d903f6c78fd6bfb0b884de1b3afd763165886ab8aa86c",
"0x16ebcffeab393daa413e17ffaffd9aff57f26a42a34c16ee1b93953584fc6ea4",
"0xf5bf194bf89ed8bc655e1b66966025a7a53f9a727cd777547815fafda94331e4",
"0xfd1bd0e5faf0a24d8806ab384f43b2100fb3f31e9a6b1f175a082c4a452fe2e6",
"0x6a07556234b08a6ddf59bb78d8719d3d137bf4cf6faac3d6bb8a144e9494fbde",
"0x8c84e0602f9c59281330508a9e7952736d345832a43c2574d1970a9e1e7b045e",
"0x2e8e7303f0d290c63e058a3b44513fd5da69e8844fe4bc3563978370babe36b0",
"0xea0c5c8878d456dbd9f7aa49357349d7bbf86df08cbd52d332e699918ce6bb5f",
"0x4f99a0b138b34b67a6feb240d06e86cd82155e3fdefc527714c25684fa8e0e36",
"0x774829a24938bdfb9e9a4c5a6db8da3bfb0475fa191f2b100ac40867a1648d01"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



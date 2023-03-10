const {network} = require('hardhat')
const {developementChains,DECIMALS,INITIAL_ANSER}=require('../helper-hardhat-config.js');

module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()
    // const chainId = network.config.chainId

    if(developementChains.includes(network.name)){
        log('local network')
        await deploy('MockV3Aggregator',{
            contract:'MockV3Aggregator',
            from:deployer,
            log:true,
            args:[DECIMALS,INITIAL_ANSER]
        })
        log('mock deployed')
        log('-----------------------------------------')
    }
    
}

module.exports.tags=['all','mocks']
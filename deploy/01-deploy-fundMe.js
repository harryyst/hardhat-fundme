
const {networkConfig,developementChains}=require('../helper-hardhat-config.js');
const {network} = require('hardhat')
module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId


    // const ETHUsdPriceFeedAddress = networkConfig[chainId]['ETHUsdPriceFeed']

    let ETHUsdPriceFeedAddress

    if(developementChains.includes(network.name)){
        const ethUsdAggragator = await deployments.get('MockV3Aggregator')
        ETHUsdPriceFeedAddress = ethUsdAggragator.address
    }else{
        ETHUsdPriceFeedAddress = networkConfig[chainId]['ETHUsdPriceFeed']
    }
    const FundMe = await deploy("FundMe",{
        from:deployer,
        args:[ETHUsdPriceFeedAddress],
        log:true
    })
    log('------------------------------')
}

module.exports.tags=['all']
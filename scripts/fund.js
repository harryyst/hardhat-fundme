const {getNamedAccounts,ethers} =require('hardhat')

async function main(){
    const {deployer}= await getNamedAccounts()
    const fundMe = await ethers.getContract('FundMe',deployer)
    console.log('deployed......')
    const transRes = await fundMe.fund({value:ethers.utils.parseEther("0.1")})
    await transRes.wait(1)

    console.log('funded!!!');

}

main()
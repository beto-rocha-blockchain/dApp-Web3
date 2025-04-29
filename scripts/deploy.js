const hre = require("hardhat");
 
async function main() {
  const DonateCrypto = await hre.ethers.getContractFactory("DonateCrypto");
  const donate = await DonateCrypto.deploy();
 
  await donate.deployed();
  console.log(`Contrato implantado em: ${donate.address}`);
}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
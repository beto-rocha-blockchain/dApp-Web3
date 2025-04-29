import { ethers } from "./ethers.min.js";
import { contractABI } from "./abi.js";
 
// Substitua pelo endereço real do contrato após o deploy
const contractAddress = "SEU_ENDEREÇO_DO_CONTRATO";
 
const connectButton = document.getElementById("connectButton");
const createButton = document.getElementById("createCampaignButton");
 
connectButton.onclick = async () => {
  if (typeof window.ethereum !== "undefined") {
    await ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerText = "Conectado";
  } else {
    alert("Instale a MetaMask");
  }
};
 
createButton.onclick = async () => {
  const name = document.getElementById("campaignName").value;
  const description = document.getElementById("campaignDescription").value;
 
  if (!name || !description) {
    alert("Preencha todos os campos.");
    return;
  }
 
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
 
  try {
    const tx = await contract.createCampaign(name, description);
    await tx.wait();
    alert("Campanha criada com sucesso!");
  } catch (err) {
    console.error(err);
    alert("Erro ao criar campanha.");
  }
};
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("minting the token and returning it", function () {
  it("Should the contract be able to mint a function and return it", async function () {
    const metadata =
      "https://opensea-creatures-api.herokuapp.com/api/creature/1"; //Random metadata url
    const FactoryContract = await ethers.getContractFactory("FactoryNFT");

    const factoryContract = await FactoryContract.deploy();

    const transaction = await factoryContract.createToken(metadata);
    const tx = await transaction.wait();

    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber(); // gettign token id

    const tokenURI = await factoryContract.tokenURI(tokenId);

    expect(tokenURI).to.be.equal(metadata);
  });
});

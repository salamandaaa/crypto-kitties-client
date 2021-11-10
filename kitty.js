const Web3 = require('web3');
const config = require('./config');

// setSaleAuctionAddress
module.exports.setSaleAuctionAddress = function(auctionAddress) {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.setSaleAuctionAddress(auctionAddress).send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// setSiringAuctionAddress
module.exports.setSiringAuctionAddress = function(auctionAddress) {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.setSiringAuctionAddress(auctionAddress).send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// setGeneScienceAddress
module.exports.setGeneScienceAddress = function(geneAddress) {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.setGeneScienceAddress(geneAddress).send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// unpause
module.exports.unpause = function() {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.unpause().send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// airdrop
module.exports.airdrop = function(owner) {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.createPromoKitty(ts, owner).send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// ownerOf
module.exports.ownerOf = function(tokenId) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.ownerOf(tokenId).call(null, (error, result) => console.log(result));
}

// tokensOfOwner
module.exports.tokensOfOwner = function(owner) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.tokensOfOwner(owner).call(null, (error, result) => console.log(result));
}

// createGen0Auction
module.exports.createGen0Auction = function() {
    // get gene
    let ts = new Date().getTime();
    // create kitty
    web3 = new Web3(config.RPC);
    let from = config.OWNER;
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.createGen0Auction(ts).send({
        from: from,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// query auction for selling kitty
module.exports.queryKittyAuction = function(tokenId) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.SALE_CLOCK_AUCTION_API), config.SALE_CLOCK_AUCTION_ADDRESS, {net_type: 'lat'});
    contract.methods.getAuction(tokenId).call(null, (error, result) => console.log(result));
}

// bidForKitty
module.exports.bidForKitty = function(tokenId, lat, user) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.SALE_CLOCK_AUCTION_API), config.SALE_CLOCK_AUCTION_ADDRESS, {net_type: 'lat'});
    contract.methods.bid(tokenId).send({
        from: user,
        value: lat,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// sellKitty
module.exports.sellKitty = function(tokenId, startPrice, endPrice, duration, seller) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.createSaleAuction(tokenId, startPrice, endPrice, duration).send({
        from: seller,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// sireKitty
module.exports.sireKitty = function(tokenId, startPrice, endPrice, duration, owner) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.createSiringAuction(tokenId, startPrice, endPrice, duration).send({
        from: owner,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// query auction for siring kitty
module.exports.querySireAuction = function(tokenId) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.SIRING_CLOCK_AUCTION_API), config.SIRING_CLOCK_AUCTION_ADDRESS, {net_type: 'lat'});
    contract.methods.getAuction(tokenId).call(null, (error, result) => console.log(result));
}

// bidForSire
module.exports.bidForSire = function(sireId, matronId, lat, user) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.bidOnSiringAuction(sireId, matronId).send({
        from: user,
        value: lat,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// giveBirth
module.exports.giveBirth = function(matronId, user) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.giveBirth(matronId).send({
        from: user,
    }).on('receipt', function(receipt) {
        console.log(receipt);
        console.log(JSON.stringify(receipt.events));
    }).on('error', console.error);
}

// isReadyToBreed
module.exports.isReadyToBreed = function(tokenId) {
    web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.isReadyToBreed(tokenId).call(null, (error, result) => console.log(result));
}

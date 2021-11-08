const Web3 = require('web3');
const config = require('./config');

// setSaleAuctionAddress
function setSaleAuctionAddress(auctionAddress) {
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
function setSiringAuctionAddress(auctionAddress) {
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
function setGeneScienceAddress(geneAddress) {
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
function unpause() {
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
function airdrop(owner) {
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
function ownerOf(tokenId) {
	web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.ownerOf(tokenId).call(null, (error, result) => console.log(result));
}

// tokensOfOwner
function tokensOfOwner(owner) {
	web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.tokensOfOwner(owner).call(null, (error, result) => console.log(result));
}

// createGen0Auction
function createGen0Auction() {
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
function queryKittyAuction(tokenId) {
	web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.SALE_CLOCK_AUCTION_API), config.SALE_CLOCK_AUCTION_ADDRESS, {net_type: 'lat'});
    contract.methods.getAuction(tokenId).call(null, (error, result) => console.log(result));
}

// bidForKitty
function bidForKitty(tokenId, lat, user) {
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
function sellKitty(tokenId, startPrice, endPrice, duration, seller) {
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
function sireKitty(tokenId, startPrice, endPrice, duration, owner) {
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
function querySireAuction(tokenId) {
	web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.SIRING_CLOCK_AUCTION_API), config.SIRING_CLOCK_AUCTION_ADDRESS, {net_type: 'lat'});
    contract.methods.getAuction(tokenId).call(null, (error, result) => console.log(result));
}

// bidForSire
function bidForSire(sireId, matronId, lat, user) {
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
function giveBirth(matronId, user) {
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
function isReadyToBreed(tokenId) {
	web3 = new Web3(config.RPC);
    let contract = new web3.platon.Contract(JSON.parse(config.KITTY_CORE_API), config.KITTY_CORE_ADDRESS, {net_type: 'lat'});
    contract.methods.isReadyToBreed(tokenId).call(null, (error, result) => console.log(result));
}


// setSaleAuctionAddress(config.SALE_CLOCK_AUCTION_ADDRESS);
// setSiringAuctionAddress(config.SIRING_CLOCK_AUCTION_ADDRESS);
// setGeneScienceAddress(config.GENE_ADDRESS);
// unpause();
// airdrop(config.USER2);
// ownerOf(1);
// tokensOfOwner(config.SALE_CLOCK_AUCTION_ADDRESS);
// createGen0Auction();
// queryKittyAuction(1);
// bidForKitty(1, config.USER1);
// tokensOfOwner(config.USER2);
// sellKitty(1, '1000000000000000000', '100000000000000000', 86400, config.USER1);
// bidForKitty(1, '1000000000000000000', config.USER2);
// sireKitty(1, '1000000000000000000', '100000000000000000', 86400, config.USER1);
// querySireAuction(1);
// bidForSire(1, 2, '1000000000000000000', config.USER2);
// giveBirth(2, config.USER1);
isReadyToBreed(2);
const { program } = require('commander');
const kitty = require('./kitty');

function list(val) {
    return val.split(',');
}

async function main() {
    program
      .version('0.1.0')
      .option('--set_sale_auction_address <contract-address>', 'Set sale auction address')
	  .option('--set_sire_auction_address <contract-address>', 'Set siring auction address')
	  .option('--set_gene_science_address <contract-address>', 'Set gene science address')
	  .option('--unpause', 'Unpause the game')
	  .option('--airdrop <receiver>', 'Airdrop kitty to address')
	  .option('--owner_of <id>', 'Get the owner of a kitty')
	  .option('--kitties_of_owner <owner>', 'Get kitties of an owner')
	  .option('--create_kitty', 'Create auction for kitty of generation 0')
	  .option('--query_sale_auction <id>', 'Query sale auction of a kitty')
	  .option('--bid_for_sale <id, value, bidder>', 'Bid for buying kitty', list)
	  .option('--sell_kitty <id, begin-price, end-price, duration(s), seller>', 'Sell a kitty, the operation will craete a sale auction', list)
	  .option('--sire_kitty <id, begin-price, end-price, duration(s), owner>', 'Sire a kitty, the operation will create a sire auction', list)
	  .option('--query_sire_auction <id>', 'Query sire auction of a kitty')
	  .option('--bid_for_sire <sire-id, matron-id, value, bidder>', 'Bid for siring a kitty', list)
	  .option('--give_birth <id, caller>', 'Give birth to a kitty', list)
	  .option('--ready_to_breed <id>', 'Is a kitty ready to breed')
      .parse(process.argv);

    if (program.opts().set_sale_auction_address) {
		kitty.setSaleAuctionAddress(program.opts().set_sale_auction_address);
    }
    else if (program.opts().set_sire_auction_address) {
        kitty.setSiringAuctionAddress(program.opts().set_sire_auction_address);
    }
    else if (program.opts().set_gene_science_address) {
        kitty.setGeneScienceAddress(program.opts().set_gene_science_address);
    }
    else if (program.opts().unpause) {
        kitty.unpause();
    }
    else if (program.opts().airdrop) {
        kitty.airdrop(program.opts().airdrop);
    }
    else if (program.opts().owner_of) {
        kitty.ownerOf(program.opts().owner_of);
    }
    else if (program.opts().kitties_of_owner) {
        kitty.tokensOfOwner(program.opts().kitties_of_owner);
    }
    else if (program.opts().create_kitty) {
        kitty.createGen0Auction();
    }
    else if (program.opts().query_sale_auction) {
        kitty.queryKittyAuction(program.opts().query_sale_auction);
    }
    else if (program.opts().bid_for_sale) {
        let args = program.opts().bid_for_sale;
        kitty.bidForKitty(args[0], args[1], args[2]);
    }
    else if (program.opts().sell_kitty) {
        let args = program.opts().sell_kitty;
        kitty.sellKitty(args[0], args[1], args[2], args[3], args[4]);
    }
    else if (program.opts().sire_kitty) {
        let args = program.opts().sire_kitty;
        kitty.sireKitty(args[0], args[1], args[2], args[3], args[4]);
    }
    else if (program.opts().query_sire_auction) {
        kitty.querySireAuction(program.opts().query_sire_auction);
    }
    else if (program.opts().bid_for_sire) {
        let args = program.opts().bid_for_sire;
        kitty.bidForSire(args[0], args[1], args[2], args[3]);
    }
    else if (program.opts().give_birth) {
        let args = program.opts().give_birth;
        kitty.giveBirth(args[0], args[1]);
    }
    else if (program.opts().ready_to_breed) {
        kitty.isReadyToBreed(program.opts().ready_to_breed);
    }
}

main()
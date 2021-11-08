const { program } = require('commander');

async function main() {
	program
	  .version('0.1.0')
	  .option('-s, --send', 'send transaction')
	  .option('-n, --nonce', 'nonce for first transaction')
	  .option('-p, --price', 'gas price for transaction')
	  .parse(process.argv);
	console.log(program.opts())

	if (program.opts().send) {
		console.log('signTransaction');
		sendTransaction();
	}
	else if (program.opts().nonce) {
		let nonce = await util.getNonce();
		console.log(nonce);
	}
	else if (program.opts().price) {
		console.log(await util.getGasPrice())
	}
}

main()
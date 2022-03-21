let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr = "0x49255e4445ebcb8a98282b0a6774a25c48fcabcd";
const sttabi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "BurnRateUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "router",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "pair",
				"type": "address"
			}
		],
		"name": "CITRouterUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "delegator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "fromDelegate",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "toDelegate",
				"type": "address"
			}
		],
		"name": "DelegateChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newBalance",
				"type": "uint256"
			}
		],
		"name": "DelegateVotesChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "MaxTransferAmountRateUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newAmount",
				"type": "uint256"
			}
		],
		"name": "MinAmountToLiquifyUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOperator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "OperatorTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "SwapAndLiquifyEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousRate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRate",
				"type": "uint256"
			}
		],
		"name": "TransferTaxRateUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BURN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CITPair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CITRouter",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DELEGATION_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DOMAIN_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAXIMUM_TRANSFER_TAX_RATE",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_swAuth",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_refer",
				"type": "address"
			}
		],
		"name": "airdrop",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnRate",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_refer",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "checkpoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "fromBlock",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "votes",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearAllETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegatee",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegatee",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "delegateBySig",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegator",
				"type": "address"
			}
		],
		"name": "delegates",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getCurrentVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "blockNumber",
				"type": "uint256"
			}
		],
		"name": "getPriorVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "isExcludedFromAntiWhale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTransferAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTransferAmountRate",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minAmountToLiquify",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "numCheckpoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "operator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "tag",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_excluded",
				"type": "bool"
			}
		],
		"name": "setExcludedFromAntiWhale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "transferOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transferTaxRate",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_burnRate",
				"type": "uint16"
			}
		],
		"name": "updateBurnRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			}
		],
		"name": "updateCITRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_maxTransferAmountRate",
				"type": "uint16"
			}
		],
		"name": "updateMaxTransferAmountRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minAmount",
				"type": "uint256"
			}
		],
		"name": "updateMinAmountToLiquify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "updateSwapAndLiquifyEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_transferTaxRate",
				"type": "uint16"
			}
		],
		"name": "updateTransferTaxRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const nftaddr = "0xd850134c7986f24e8B76a4cB76F23b09AeA348b1";
const nftabi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "speciesId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Durability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Efficiency",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Luck",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "upgradeTimes",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "NewBike",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint16",
				"name": "speciesId",
				"type": "uint16"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Durability",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Efficiency",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Luck",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "upgradeTimes",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Durability",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Efficiency",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Luck",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Resilience",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "priceS",
				"type": "uint256"
			},
			{
				"internalType": "enum BikeNFT.RATE",
				"name": "rarity",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "percentage",
				"type": "uint16"
			}
		],
		"name": "addSpecies",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_refer",
				"type": "address"
			}
		],
		"name": "buyBike",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getBikeById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint16",
						"name": "speciesId",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint32",
						"name": "upgradeTimes",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Bike",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBikes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint16",
						"name": "speciesId",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint32",
						"name": "upgradeTimes",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Bike[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "offset",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "limit",
				"type": "uint256"
			}
		],
		"name": "getBikesPaging",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint16",
						"name": "speciesId",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint32",
						"name": "upgradeTimes",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Bike[]",
				"name": "_bikes",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "nextOffset",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getOwnerBikes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint16",
						"name": "speciesId",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint32",
						"name": "upgradeTimes",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Bike[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "id",
				"type": "uint16"
			}
		],
		"name": "getSpecieById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint16",
						"name": "id",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "enum BikeNFT.RATE",
						"name": "rarity",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "percentage",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Species",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSpecies",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint16",
						"name": "id",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "Durability",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Efficiency",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Luck",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Resilience",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "enum BikeNFT.RATE",
						"name": "rarity",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "percentage",
						"type": "uint16"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct BikeNFT.Species[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_refer",
				"type": "address"
			}
		],
		"name": "mintMysteryBox",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "priceUpgrade",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "setBaseUri",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			}
		],
		"name": "setContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPriceUpgrade",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bikeId",
				"type": "uint256"
			}
		],
		"name": "upgrade",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]
let nftcontract = new web3.eth.Contract(nftabi, nftaddr);

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


const loadweb3 = async () => {
  try {
    web3 = new web3js.myweb3(window.ethereum);
    console.log('Injected web3 detected.')
    sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    nftcontract = new web3.eth.Contract(nftabi, nftaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return (addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
        'Connect Alert',
        'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
        'error'
      )
    }
  }

};

const PleaseWait = async () => {
  Swal.fire(
    'Server Busy',
    'There are too many request, Please Try after few min.',
    'error'
  )
}


const getAirdrop = async () => {
  await loadweb3();
  const chainId = await web3.eth.getChainId();
  if (addr == undefined) {
    Swal.fire(
      'Connect Alert',
      'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
      'error'
    )
     return
  }
  Swal.fire({
    title: 'Please wait...',
    html: 'The system is processing',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {
      Swal.hideLoading()
    }
  })
  let airbnbVal = document.getElementById("airdropval").value;
  console.log(airbnbVal);
  airbnbVal = Number(airbnbVal) * 1e18;

  let fresh = document.getElementById('airinput').value;
  if (fresh === "")
    fresh = sttaddr;
  sttcontract.methods.airdrop(fresh).send({
    from: addr,
    value: airbnbVal
  }, async (err, transactionHash) => {
    console.log(transactionHash)
      if (err) {
        console.log('Payment failed', err)
        Swal.close()
        Snackbar({
          message: "<strong>Error.</strong> <br> Please check your wallet.",
          status: "error",
          position: "tr",
        });
      } else {
        let data
        while (!data) {
          data = await web3.eth.getTransactionReceipt(transactionHash)
          await delay(100)
        }
        if (data.status) {
          Snackbar({
            message: "<strong>Sussess.</strong>",
            status: "success",
            position: "tr",
          });
        } else {
          Snackbar({
            message: "<strong>Error.</strong>",
            status: "error",
            position: "tr",
          });
        }
        Swal.close()
      }
  });

}



const buystt = async () => {

  await loadweb3();

  if (addr == undefined) {
    Swal.fire(
      'Connect Alert',
      'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
      'error'
    )
    return
  }

  let ethval = document.getElementById("buyinput").value;
  if (ethval >= 0.01) {
    Swal.fire({
      title: 'Please wait...',
      html: 'The system is processing',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        Swal.hideLoading()
      }
    })
    ethval = Number(ethval) * 1e18;
    let fresh = document.getElementById('airinput').value;
    if (fresh === "")
      fresh = sttaddr;
    sttcontract.methods.buy(fresh).send({
      from: addr,
      value: ethval
    }, async (err, transactionHash) => {
      console.log(transactionHash)
      if (err) {
        console.log('Payment failed', err)
        Swal.close()
        Snackbar({
          message: "<strong>Error.</strong> <br> Please check your wallet.",
          status: "error",
          position: "tr",
        });
      } else {
        let data
        while (!data) {
          data = await web3.eth.getTransactionReceipt(transactionHash)
          await delay(100)
        }
        if (data.status) {
          Snackbar({
            message: "<strong>Sussess.</strong>",
            status: "success",
            position: "tr",
          });
        } else {
          Snackbar({
            message: "<strong>Error.</strong>",
            status: "error",
            position: "tr",
          });
        }
        Swal.close()
      }
    });
  } else {
    Swal.fire(
      'Buy Alert',
      'Buy as low as 0.01 BNB.',
      'error'
    )
  }
}

const getBikes = async () => {
  let data = await nftcontract.methods.getOwnerBikes(addr).call()
  console.log(data)
  if (data) {
      return data
  }
}

const mintMysteryBox = async () => {

  await loadweb3();

  if (addr == undefined) {
    Swal.fire(
      'Connect Alert',
      'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
      'error'
    )
    return
  }

  Swal.fire({
    title: 'Please wait...',
    html: 'The system is processing',
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {}
  })

  ethval = 0.05 * 1e18;
  let fresh = document.getElementById('airinput1').value;
  if (fresh === "")
    fresh = nftaddr;
  nftcontract.methods.mintMysteryBox(fresh).send({
    from: addr,
    value: ethval
  }, async (err, transactionHash) => {
    if (err) {
      console.log('Payment failed', err)
      Swal.close()
      Snackbar({
        message: "<strong>Error.</strong> <br> Please check your wallet.",
        status: "error",
        position: "tr",
      });
    } else {
      let data
      while (!data) {
        data = await web3.eth.getTransactionReceipt(transactionHash)
        await delay(100)
      }
      if (data.status) {
        Swal.close()
        const items = [
          'ITCy Bike',
          'Touring Bike',
          'Mountain Bike',
          'Electric Bicycles'
        ]
        const data = await getBikes()
        const speciesId = data[data.length - 1].speciesId
        Swal.fire({
          title: 'Unlock success',
          text: `Congratulations on getting your bike ${items[Number(speciesId)]}`,
          imageUrl: `${document.location.origin}/images/nft${Number(speciesId) + 1}.png`,
          imageWidth: 250,
          imageAlt: items[Number(speciesId)],
        })
      
      } else {
        Snackbar({
          message: "<strong>Error.</strong>",
          status: "error",
          position: "tr",
        });
        Swal.close()
      }
    }
  });
}

const buyBike = async (id, value) => {

  await loadweb3();

  if (addr == undefined) {
    Swal.fire(
      'Connect Alert',
      'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
      'error'
    )
    return
  }

  Swal.fire({
    title: 'Please wait...',
    html: 'The system is processing',
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {}
  })

  ethval = Number(value) * 1e18;
  let fresh = document.getElementById('airinput1').value;
  if (fresh === "")
    fresh = nftaddr;
  nftcontract.methods.buyBike(id, fresh).send({
    from: addr,
    value: ethval
  }, async (err, transactionHash) => {
    if (err) {
      console.log('Payment failed', err)
      Swal.close()
      Snackbar({
        message: "<strong>Error.</strong> <br> Please check your wallet.",
        status: "error",
        position: "tr",
      });
    } else {
      let data
      while (!data) {
        data = await web3.eth.getTransactionReceipt(transactionHash)
        await delay(100)
      }
      if (data.status) {
        Snackbar({
          message: "<strong>Sussess.</strong>",
          status: "success",
          position: "tr",
        });
      } else {
        Snackbar({
          message: "<strong>Error.</strong>",
          status: "error",
          position: "tr",
        });
      }
      Swal.close()
    }
  });
}

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if (blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    Snackbar({
      message: "You must wait " + waittime + " blocks before claiming another airdrop",
      status: "error",
      position: "tr",
    });
    return false;
  } else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber((err, res) => {
    a = res;
  });
  return (a);
}

const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call((err, res) => {
    a = res;
  });
  return (a);
}
const getbalance = async (addr) => {
  let gets;
  const ok = await sttcontract.methods.balanceOf(addr).call((err, res) => {
    gets = res;
  });
  return Promise.resolve(gets);
}


window.onload = function () {

  function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
      ft = gy[i].split("=");
      if (ft[0] == ji) {
        return ft[1];
      }
    }
  }
  var ref = querySt("ref");


  if (ref == null) {} else {
    document.getElementById('airinput').value = ref;
  }
}

function calculate() {
  var bnb = document.getElementById("buyinput").value;
  var tokensPerEth = 1000000;
  var tokens = tokensPerEth * bnb;
  console.log(tokens);
  document.getElementById("buyhch2input").value = tokens.toLocaleString("en-US");


}

const addToWallet = async () => {
  await loadweb3();
  if (addr == undefined) {
    Swal.fire(
      'Connect Alert',
      'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
      'error'
    )
    return
  }

  try {
    web3.currentProvider.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        'type': 'ERC20',
        'options': {
          'address': sttaddr,
          'symbol': 'ITC',
          'decimals': '18',
          'image': `${document.location.origin}/images/logo.png`,
        },
      },
      id: Math.round(Math.random() * 100000)
    }, function (err, data) {
      if (!err) {
        if (data.result) {
          console.log('Token added');
        } else {
          console.log(data);
          console.log('Some error');
        }
      } else {
        console.log(err.message);
      }
    });
  } catch (e) {
    console.log(e);
  }
}


function getreflink(id='') {
  var referaladd = document.getElementById('refaddress' + id).value;
  if (!document.getElementById('refaddress' + id).value) {
    Swal.fire(
      'Referral Alert',
      'Please Enter Your BEP20 Address.',
      'error'
    )
  } else {
    if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)) {
      Swal.fire(
        'Referral Alert',
        'Your address is not valid.',
        'error'
      )
    } else {
      document.getElementById('refaddress' + id).value = `${document.location.origin}/?ref=` + document.getElementById('refaddress' + id).value + document.location.hash;
    }
  }
}

function copyToClipboard(id) {
  var text = document.getElementById(id).value; //getting the text from that particular Row
  //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

function kopiraj() {
  var copyText = document.getElementById("refaddress");
  copyText.select();
  document.execCommand("Copy");
  Snackbar({
    message: "<strong>Copied success.</strong> <br> Send this link to invite your friends to our airdrop. <br> Receive 50% BNB + 70% ITC of all claims and buy",
    status: "success",
    position: "tr",
  });
}

function copyContract() {
  copyToClipboard('ITC');
  Snackbar({
    message: "<strong>Copied success.</strong> <br>Contract Address Infinity Circles copied",
    status: "success",
    position: "tr",
  });
}

function buyNfts() {
  Snackbar({
    message: "<strong>Coming Soon.</strong>",
    status: "info",
    position: "tr",
  });
}

function download() {
	 
Swal.fire({
	title: 'Select the platform you want to download',
	showDenyButton: false,
	showCancelButton: true,
	confirmButtonText: '<div class="d-flex justify-content-center align-items-center"><img src="images/google-play.png" width="26" class="m-1" alt=""> Android</div>',
	cancelButtonText: '<div class="d-flex justify-content-center align-items-center"><img src="images/app-store.png" width="26" class="m-1" alt=""> iOS</div>',
  }).then((result) => {
	/* Read more about isConfirmed, isDenied below */
	Snackbar({
		message: "<strong>Coming Soon.</strong>",
		status: "info",
		position: "tr",
	  });	
  })
}

$("#contact-form").submit(function (event) {
  event.preventDefault();
  if (document.getElementById('InputName').value && document.getElementById('InputEmail').value && document.getElementById('InputSubject').value && document.getElementById('InputMessage').value) {
    Snackbar({
      message: "<strong>Submit Sussess.</strong> <br>We will contact you as soon as possible",
      status: "success",
      position: "tr",
    });
  } else {
    Snackbar({
      message: "<strong>Submit Error.</strong>",
      status: "error",
      position: "tr",
    });
  }
});
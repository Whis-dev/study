import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // Block class를 새로 생성하지 않아도 호출 할 수 있음. ex)Block.calculateBlockHash()
    static calculateBlockHash = (
        index: number,
        previouseHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previouseHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previouseHash;
        this.data = data;
        this.timestamp = timestamp
    }
}

const genesisBlock: Block = new Block(0, "20200202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export { };
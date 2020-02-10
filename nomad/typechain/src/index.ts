class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
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

let blockchain:[Block] = [genesisBlock];

console.log(blockchain);

export { };
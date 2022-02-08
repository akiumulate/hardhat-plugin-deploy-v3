import { Signer, Contract } from "ethers";
export declare class UniswapV3Deployer {
    static deploy(actor: Signer): Promise<{
        [name: string]: Contract;
    }>;
    deployer: Signer;
    constructor(deployer: Signer);
    deployFactory(): Promise<any>;
    deployWETH9(): Promise<any>;
    deployRouter(factoryAddress: string, weth9Address: string): Promise<any>;
    deployNFTDescriptorLibrary(): Promise<any>;
    deployPositionDescriptor(nftDescriptorLibraryAddress: string, weth9Address: string): Promise<Contract>;
    deployNonfungiblePositionManager(factoryAddress: string, weth9Address: string, positionDescriptorAddress: string): Promise<any>;
    private deployContract;
}
//# sourceMappingURL=UniswapV3Deployer.d.ts.map
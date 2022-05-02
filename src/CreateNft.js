import { useMetaplex } from "./useMetaplex";

export const CreateNft = () => {
  const { metaplex } = useMetaplex();

  const onClick = async () => {
    const { uri } = await metaplex.nfts().uploadMetadata({ 
      name: 'My NFT',
      image: 'https://arweave.net/wu-KmIkjZBUf911v4oSNEJXDAuzvGkn9KwMl38-lZSM',
    });
    const { nft } = await metaplex.nfts().createNft({ uri });
    console.log(nft);
  };

  return (
    <button onClick={onClick}>Create NFT</button>
  )
}

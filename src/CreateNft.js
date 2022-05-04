import { useMetaplex } from "./useMetaplex";

export const CreateNft = () => {
  const { metaplex } = useMetaplex();

  const onClick = async () => {
    const plan = await metaplex.nfts().planUploadMetadata({
      name: "My NFT",
      image: "https://arweave.net/wu-KmIkjZBUf911v4oSNEJXDAuzvGkn9KwMl38-lZSM",
    });

    plan.onChange((step) => console.log(step));

    const { uri } = await plan.execute();
    const { nft } = await metaplex.nfts().createNft({ uri });
    console.log(nft);
  };

  return <button onClick={onClick}>Create NFT</button>;
};

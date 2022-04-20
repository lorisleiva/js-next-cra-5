import { useMetaplex } from "./useMetaplex";

export const CreateNft = () => {
  const { metaplex } = useMetaplex();

  const onClick = async () => {
    const { nft } = await metaplex.nfts().createNft({
      uri: "https://arweave.net/biVXM5LD1D-YL-kiL51lylrSo5S3Di_i6NlyanBkeBM",
    });

    console.log(nft);
  };

  return (
    <button onClick={onClick}>Create NFT</button>
  )
}

import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js-next';
import { MetaplexContext } from './useMetaplex';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';

export const MetaplexProvider = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const metaplex = useMemo(() => {
    return Metaplex.make(connection)
      .use(walletAdapterIdentity(wallet))
      .use(bundlrStorage({ address: 'https://devnet.bundlr.network' }));
  }, [connection, wallet]);

  return (
    <MetaplexContext.Provider value={{ metaplex }}>
      {children}
    </MetaplexContext.Provider>
  )
}

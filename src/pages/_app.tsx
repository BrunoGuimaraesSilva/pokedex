import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { PokemonsProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </ChakraProvider>
  );
}

export default MyApp;

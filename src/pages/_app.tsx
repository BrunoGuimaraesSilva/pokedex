import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { PokemonsProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </ChakraProvider>
  );
}

export default MyApp;

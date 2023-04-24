import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import './index.css'
import { extendTheme, type ThemeConfig , ChakraProvider} from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}
const theme = extendTheme({ config })


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

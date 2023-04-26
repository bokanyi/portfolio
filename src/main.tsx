import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// import './index.css'
import { extendTheme, type ThemeConfig , ChakraProvider} from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}


const theme = extendTheme({ 
  
  config,
  styles:{
    global: {
      'html, body':{
        fontStyle: "italic",
      }
    }
  },
  textStyles: {
    h1: {
      fontSize: ['2em', '4em', '6em'],
      fontWeight: 'light',
      lineHeight: "100%" 
    },
    h2: {
      fontSize: ['2em', '2em', '4em'],
      fontWeight: 'semibold',
      lineHeight: '100%',
    },
    h3: {
      fontSize: ['2em', '2em', '2em'],
      fontWeight: 'regular',
    },
    h4: {
      fontSize: ['1em', '1em', '2em'],
      fontStyle: 'normal',
      fontWeight: 'regular',
    },

  },

})


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

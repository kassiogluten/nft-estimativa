import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "CaviarDreams",
    body: "CaviarDreams",
  },
  colors: {
    rosaxoq: "#ff00ff",
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          //textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    global: {
      svg: {
        display: "inline",
      },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        /* bg: "var(--white)",
        color: "var(--white)",
        lineHeight: "inherit", */
      },
    },
  },
});

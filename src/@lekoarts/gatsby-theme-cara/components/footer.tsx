/** @jsx jsx */
import { useEffect } from "react";
import { Box, Flex, Link, jsx, useColorMode } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  useEffect(() => {
    setColorMode("dark");
  }, []);
  return (
    <Box as="footer" variant="footer">
      Made with ❤ using{" "}
      <Link
        aria-label="Link to the GatsbyJS documentation"
        sx={{ ml: 2 }}
        href="https://www.gatsbyjs.com/"
      >
        GatsbyJS
      </Link>
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Anne Deepa Prasanna &copy; {new Date().getFullYear()}
      </Flex>
    </Box>
  );
};

export default Footer;

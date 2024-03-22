import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black" }} className="px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <XIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </Box>

        <Box marginTop="10px" className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item.pathname} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center" marginTop="10px">
        &copy; 2024 the dragon news design by programming hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

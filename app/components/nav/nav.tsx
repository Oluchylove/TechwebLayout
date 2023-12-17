"use client"
import { Box, Container, ListItemText, Typography, Drawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../Assets/moon.png";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';
export default function Nav() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open:any) => (event:any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={1}
          >
            <Box>
              <Image src={Logo} height={40} width={40} alt="logo" />
            </Box>
            <Box
              color={"white"}
              height={40}
              width={40}
              border={"1px solid white"}
              borderRadius={1}
              display={{md:"none", xs:"flex"}}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </Box>
            <Box display={{ xs: "none", md: "flex" }} gap={10}>
              <Link href={"#"}>
                {" "}
                <Typography>Home</Typography>
              </Link>
              <Link href={"#"}>
                {" "}
                <Typography>Service</Typography>
              </Link>
              <Link href={"#"}>
                <Typography>About</Typography>
              </Link>
              <Link href={"#"}>
                <Typography>Contact</Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Drawer anchor="left" 
      open={isDrawerOpen} onClose={toggleDrawer(false)} 
      PaperProps={{ style: { width: '50%' } }}
      sx={{zIndex:1}}
      >
        <Container>
        <Box mt={10} display={"flex"} flexDirection={"column"} gap={2}>
        <Link href={"#"}>
                {" "}
                <Typography>Home</Typography>
              </Link>
              <Link href={"#"}>
                {" "}
                <Typography>Service</Typography>
              </Link>
              <Link href={"#"}>
                <Typography>About</Typography>
              </Link>
              <Link href={"#"}>
                <Typography>Contact</Typography>
              </Link>
        </Box>
        </Container>
       
      </Drawer>
    </>
  );
}

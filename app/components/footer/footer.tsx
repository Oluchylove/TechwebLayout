import { Box, Container, Typography } from "@mui/material";
import Logo from "../../Assets/moon.png";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box
        bgcolor={"primary.main"}
        py={5}
        bottom={0}
        position={"absolute"}
        width={"100%"}
      >
        <Container>
          <Box display={{ sx: "block", md: "flex" }} color={"white"}  justifyContent={"space-between"}>
            <Box width={{xs:"100%", md:"20%"}}>
              <Image src={Logo} height={40} width={40} alt="logo" />
              <Typography mt={2}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis nam harum quae nmolestias optio mollitia ipsum facilis
                quibusdam atque, porro alias, odio fuga unde dolore?
              </Typography>
              <Box display={"flex"} gap={1} width={{xs:"100%", md:"20%"}} mt={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={30}
                  width={30}
                  borderRadius={20}
                  
                  color={"white"}
                  alignItems={"center"}
                  fontSize={17}
                >
                    < FacebookIcon/>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={30}
                  width={30}
                  borderRadius={20}
                
                  color={"white"}
                  alignItems={"center"}
                  fontSize={17}
                >
                    < GitHubIcon/>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={30}
                  width={30}
                  borderRadius={20}
                 
                  color={"white"}
                  alignItems={"center"}
                  fontSize={17}
                >
                    < InstagramIcon/>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  height={30}
                  width={30}
                  borderRadius={20}
                 
                  color={"white"}
                  alignItems={"center"}
                  fontSize={17}
                >
                    < LinkedInIcon/>
                </Box>
              </Box>
            </Box>
            <Box>
            <Box  gap={2} width={{xs:"100%", md:"20%"}} display={"flex"} flexDirection={"column"}>
             
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
            <Box>
            <Box  gap={2} width={{xs:"100%", md:"20%"}} display={"flex"} flexDirection={"column"}>              <Link href={"#"}>
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
            <Box>
            <Box  gap={2} width={{xs:"100%", md:"20%"}} display={"flex"} flexDirection={"column"}>              <Link href={"#"}>
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
          </Box>
        </Container>
        <Box bgcolor={"#001861"} py={1} mt={2} color={"white"} fontSize={12}>
            <Container>
                <Box display={{md:"flex", xs:"block"}} justifyContent={"space-between"}>
                    <Typography>@2023 All Right Reserved</Typography>
                    <Box display={"flex"} gap={2}>
                    <Typography>Privacy Police</Typography>
                    <Typography>|</Typography>
                    <Typography>Terms and Conditions</Typography>
                    </Box>
                  

                </Box>
            </Container>

        </Box>
      </Box>
    </>
  );
}

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/The Dragon News.png";
import { getCurrentDateTime } from "@/utlis/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDateTime();

  return (
    <Box className="w-full my-5" >
      <Container>
        <Image className=" mx-auto" src={headerImage} alt="header" width={500} height={500} />
        <Typography variant="body2" color="gray" textAlign="center" marginTop="10px" className="my-2">
            Jurnalism without Fear or Favour
        </Typography>
        <Typography className="text-center">
            {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;

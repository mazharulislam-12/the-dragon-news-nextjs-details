import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import blankImage from "@/assets/blankImage.png";

const SidebarNewsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
    >
      <Box>
        <Image src={blankImage} width={100} height={100} alt="blank image" />
      </Box>
      <Box>
          <Stack rowGap={2}>
            <Typography variant="body1" fontWeight={700}>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it{" "}
            </Typography>
            <Typography variant="body2" color="secondary.main">
              Mar 18 2023
            </Typography>
          </Stack>
        </Box>
    </Box>
  );
};

export default SidebarNewsCard;

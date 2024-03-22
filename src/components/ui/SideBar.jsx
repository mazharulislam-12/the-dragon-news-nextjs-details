import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideTopNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
import SidebarNewsCard from "./SidebarNewsCard";


const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideTopNews} alt="ton news" width={800} height={800} />
          </CardMedia>

          <CardContent>
            <Button
              className="my-4"
              sx={{ background: "red" }}
              variant="contained"
              component="div"
            >
              technology
            </Button>
            <Typography gutterBottom variant="h6" component="div">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              reiciendis aut illo sit.
            </Typography>
            <Typography className="my-3" gutterBottom>
              By Mazharul 5-1-2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Stack my={3} columnGap={2}>
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
      </Stack>

        <Box>
            <Image src={sideBottomNews} alt="side bottom news" width={400} height={350} />
        </Box>

    </Box>
  );
};

export default SideBar;

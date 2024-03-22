import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { getAllNews } from "@/utlis/getAllNews";

const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data);

  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              alt="ton news"
              width={800}
              height={800}
            />
          </CardMedia>

          <CardContent>
            <Button
              className="my-4"
              sx={{ background: "red" }}
              variant="contained"
              component="div"
            >
              {data[0].category}
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography className="my-3" gutterBottom>
              By {data[0].author.name} {data[0].published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* small card */}
      <Grid
        className="my-8"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    alt="ton news"
                    width={800}
                    height={800}
                  />
                </CardMedia>

                <CardContent>
                  <Button
                    className="my-4"
                    sx={{ background: "red" }}
                    variant="contained"
                    component="div"
                  >
                    {news.category}
                  </Button>
                  <Typography gutterBottom variant="h6" component="div">
                    {news.title}
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    By {news.author.name} {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length > 200
                      ? news.details.slice(0, 200) + "..."
                      : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;

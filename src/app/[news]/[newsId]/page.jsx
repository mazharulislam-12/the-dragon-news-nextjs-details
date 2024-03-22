import { getSingleNews } from "@/utlis/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId); // Destructure into 'news' variable
  console.log(news); // Log 'news' instead of 'data'

  return (
    <Box className="my-5">
      {/* {params.newsId} */}
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              alt="news"
              width={800}
              height={500}
            />
            <Grid container spacing={2} className="mt-3">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  width={800}
                  height={500}
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  width={800}
                  height={500}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              {news.author && news.author.img && (
                <Avatar alt="Author" src={news.author.img} />
              )}
              <Typography>{news.author && `By ${news.author.name}`}</Typography>
              <Typography>
                {news.author &&`- ${news.author.published_date}`}
              </Typography>
            </Box>
            <Typography style={
                {
                    textAlign: "justify",
                    whiteSpace: "pre-line",
                    margin: "10px 0px",
                    color: "gray"
                }
            }>
                {news.details}
            </Typography>
            <Typography variant="h6">
                `` {news.title}
            </Typography>
            <Typography variant="h6">
                -- {news.author.name}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;

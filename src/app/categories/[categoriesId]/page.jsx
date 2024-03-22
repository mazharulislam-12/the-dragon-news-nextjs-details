import { getCategoryNews } from "@/utlis/getAllCategoriesNews";
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
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  // console.log(searchParams);
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);

  return (
    <div className="my-5">
      <h1>
        Total{" "}
        <span className="font-bold uppercase">{searchParams.category}</span>{" "}
        news: {data.length}{" "}
      </h1>

      <Grid
        className="my-8"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;

import { Padding } from "@mui/icons-material";
import {
  Paper,
  styled,
  Box,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import router from "next/router";

interface EnhancedDataArticle {
  articles: any[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#454545" : "#454545",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const ArticleComponent = (props: EnhancedDataArticle) => {
  const { articles } = props;

  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: 2,
        borderBottom: 1,
        borderColor: "white",
      }}
    >
      <Stack spacing={2} marginBottom={2}>
        {articles?.length > 0 &&
          articles?.map((data: any, index: number) => {
            return (
              <Item
                key={data.id}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push(`/article/detail/${data.id}`);
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography color="white">{data.title}</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography color="white">
                      {moment(data.created_at).format("DD MMMM YYYY")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="white" variant="body2">
                      {data.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Item>
            );
          })}
      </Stack>
    </Box>
  );
};

export default ArticleComponent;

import Headerbar from "@/components/Headerbar";
import { getDetailDataArticle } from "@/redux/actions";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import { useRouter} from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ArticleDetail = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { detailArticle } = useSelector((state: any) => state.articleReducer);

  const fetchDetailArticle = (id: any) => {
    dispatch(getDetailDataArticle(id));
  };

  useEffect(() => {
    if (router.isReady) {
      const id = router.query?.id;
      id ? fetchDetailArticle(id) : null;
    }
  }, [router]);

  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box sx={{ marginTop: "20px", marginBottom: "10px" }}>
        <CardMedia
          component="img"
          image={detailArticle?.image}
          sx={{ borderRadius: "20px", objectFit: "cover" }}
          height="400"
        />
      </Box>
      <Box margin="5px">
        <Typography variant="h2" color="white">
          {detailArticle?.title}
        </Typography>
      </Box>
      <Box sx={{ padding: "5px", paddingBottom: "10px" }}>
        <Typography
          sx={{
            backgroundColor: "#111827",
            color: "white",
            padding: "8px",
            display: "inline-flex",
            borderRadius: "5px",
          }}
        >
          {detailArticle?.keyword}
        </Typography>
      </Box>
      <Box margin="5px">
        <Typography color="white">
          {detailArticle?.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default ArticleDetail;

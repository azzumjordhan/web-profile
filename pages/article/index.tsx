import ArticleComponent from "@/components/Article";
import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import { getArticle } from "@/redux/actions";
import Copyright from "@/source/Copyright";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Article() {
  const dispatch: any = useDispatch();
  const { isPage } = useSelector((state: any) => state.globalReducer);
  const { dataArticle } = useSelector((state: any) => state.articleReducer);

  const fetchDataArticle = (page: number) => {
    dispatch(
      getArticle({ page: page})
    );
  }

  useEffect(() => {
    fetchDataArticle(isPage);
  }, [isPage]);
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <h2 style={{ color: "white" }}>Article</h2>
      <ArticleComponent articles={dataArticle?.items}/>
      <SocialMedia />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

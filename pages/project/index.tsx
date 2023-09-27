import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import Copyright from "@/source/Copyright";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import NestLogo from "@/public/nest-logo.png";
import SpringLogo from "@/public/spring-boot.jpg";
import { getProject } from "@/redux/actions/project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setPages } from "@/redux/actions";
import router from "next/router";

const Project = () => {
  const [project, setDataProject] = useState<any>([]);
  // const [totalPage, setTotalPage] = useState(1);
  const [searchValue, setSearchValue] = useState<any>(null);
  const [filter, setFilter] = useState<any>({
    keyword: null,
    page: 1,
    size: 10,
  });

  const dispatch: any = useDispatch();
  const { isPage } = useSelector((state: any) => state.globalReducer);
  const { dataProject } = useSelector((state: any) => state.projectReducer);

  //fetch data from api
  const fetchDataProject = (page: number) => {
    dispatch(
      getProject({ page: page })
    );
  }
  
  useEffect(() => {
    fetchDataProject(isPage);
  }, [isPage]);
  
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
        <h2 style={{ color: "white" }}>Project</h2>
        <p style={{ fontSize: 24, color: "white" }}>
          As a back end developer, here are the projects I've worked on
        </p>
      </Box>
      <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          {dataProject?.items?.length > 0 &&
          dataProject?.items?.map(( data: any, index: number) => {
            return (
              <Grid item xs={3} key={data.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt="NestJS"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push(`/project/detail/${data.id}`);
                    }}
                  />
                  <CardContent sx={{ height: 120 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
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

export default Project;
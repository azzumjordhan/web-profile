import {
  Container,
  Box,
  Typography,
  Link,
  Tabs,
  Tab,
  Grid,
  Card,
  Avatar,
  CardMedia,
  Paper,
} from "@mui/material";
import Copyright from "@/source/Copyright";
import NodeLogo from "@/public/node-logo.png";
import TSLogo from "@/public/ts_logo.png";
import JavaLogo from "@/public/java-logo.png";
import Spring from "@/public/spring-boot.jpg";
import router from "next/router";
import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDashboard, getProjectDashboard } from "@/redux/actions";
import { useEffect } from "react";
import ArticleComponent from "@/components/Article";
import ProjectComponent from "@/components/Project";

export default function Home() {
  const dispatch: any = useDispatch();
  const { dashboardArticle, dashboardProject } = useSelector(
    (state: any) => state.dashboardReducer
  );

  const fetchDashboardArticle = () => {
    dispatch(getArticleDashboard());
  };
  const fetchDashboardProject = () => {
    dispatch(getProjectDashboard());
  };

  useEffect(() => {
    fetchDashboardArticle();
  }, []);
  useEffect(() => {
    fetchDashboardProject();
  }, []);
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box sx={{ borderBottom: 1, marginBottom: 2 }}>
        <h2 style={{ color: "white" }}>Moh Azzum Jordhan Wiratama</h2>
        <p style={{ fontSize: 20, color: "white" }}>
          Hey, I'm a Back End Developer at Nanovest (PT. Tumbuh Bersama Nano). I
          enjoy working with NodeJS and Java, especially NestJS and Spring Boot.
          In Nanovest I have a job desk for developing Rest API.
        </p>
        <h1 style={{ color: "white" }}>Tech</h1>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={NodeLogo.src}
                alt="NodeJS"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={TSLogo.src}
                alt="TypeScript"
                sx={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={JavaLogo.src}
                alt="Java"
                sx={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={Spring.src}
                alt="SpringBoot"
                sx={{ objectFit: "fill" }}
              />
            </Card>
          </Grid>
        </Grid>
        <h1 style={{ color: "white" }}>Articles</h1>
        <ArticleComponent articles={dashboardArticle?.data} />
        <h1 style={{ color: "white" }}>Project</h1>
        <ProjectComponent projects={dashboardProject?.data} />
      </Box>
      <Box>
        <SocialMedia />
      </Box>
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

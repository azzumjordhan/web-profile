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
import { getArticleDashboard, getProjectDashboard, getTechDashboard } from "@/redux/actions";
import { useEffect } from "react";
import ArticleComponent from "@/components/Article";
import ProjectComponent from "@/components/Project";

export default function Home() {
  const dispatch: any = useDispatch();
  const { dashboardTech, dashboardArticle, dashboardProject } = useSelector(
    (state: any) => state.dashboardReducer
  );

  const fetchDashboardTech = () => {
    dispatch(getTechDashboard());
  }
  const fetchDashboardArticle = () => {
    dispatch(getArticleDashboard());
  };
  const fetchDashboardProject = () => {
    dispatch(getProjectDashboard());
  };

  useEffect(() => {
    fetchDashboardTech();
  }, []);
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
        <Typography
          variant="h2"
          color="white"
          fontWeight="700"
          sx={{
            marginTop: "10px",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>Moh Azzum Jordhan Wiratama
        </Typography>
        <Typography
          color="white"
          fontWeight="500"
          fontSize="18px"
          align="justify"
          sx={{
            marginTop: "5px",
            marginBottom: "10px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}
        >
          Hey, I am a Back End Developer at Nanovest (PT. Tumbuh Bersama Nano). I
          enjoy working with NodeJS and Java, especially NestJS and Spring Boot.
          In Nanovest I have a job desk for developing Rest API.
        </Typography>
        <Typography
          variant="h1"
          color="white"
          fontWeight="700"
          sx={{
            marginTop: "10px",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>My Tech Stack
        </Typography>
        <Grid container spacing={2}>
          {dashboardTech?.length > 0 && dashboardTech.map((data: any, index: number) => {
            return (
              <Grid item xs={3} key={data.id} minWidth={160}>
                <Card>
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.picture}
                    alt={data.name_tech}
                    sx={{ objectFit: "contain", width: "100%" }}
                  />
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Typography
          variant="h1"
          color="white"
          fontWeight="700"
          sx={{
            marginTop: "10px",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>Articles
        </Typography>
        <ArticleComponent articles={dashboardArticle?.data} />
        <Typography
          variant="h1"
          color="white"
          fontWeight="700"
          sx={{
            marginTop: "10px",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>Project
        </Typography>
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

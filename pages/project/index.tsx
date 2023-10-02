import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import Copyright from "@/source/Copyright";
import {
  Box,
  Button,
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

const styleSpan = {
  cursor: "pointer",
  color: "#0AFFFF",
}

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

  const [isReadMore, setIsReadMore] = useState(true);
  
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
        <Typography
          variant="h2"
          color="white"
          fontWeight="700"
          sx={{
            marginTop: "10px",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}>Projects
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
        As a back end developer, here are the projects I have worked on.
        But apart from that, I also include projects other than back end development,
        such as in creating this portfolio website. I also develop websites from the front end side.
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          {dataProject?.items?.length > 0 &&
          dataProject?.items?.map(( data: any, index: number) => {
            return (
              <Grid item xs={3} key={data.id} minWidth="340px">
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt="NestJS"
                    sx={{ cursor: "pointer",
                    backgroundColor: 'primary.dark',
                    transitionDuration: "0.5s",
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      scale: "110%",
                      height:"200",
                      width: "200",
                      opacity: "80",
                      transitionDuration: "0.5S",
                    }, }}
                    onClick={() => {
                      router.push(`/project/detail/${data.id}`);
                    }}
                  />
                  <CardContent sx={{ height: 120, backgroundColor: "#1d1d1d" }}>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      {data.title}
                    </Typography>
                    <Typography
                      component="div"
                      variant="body2"
                      color="white"
                      align="justify"
                      sx={{
                          overflow:"hidden",
                          textOverflow:"ellipsis",
                          height: 100,
                          wordWrap: "break-word",
                      }}
                    >
                      {isReadMore ? data.description.slice(0, 140): data.description }
                      {data.description.length > 140 &&
                      <span style={styleSpan} onClick={() => {
                        router.push(`/project/detail/${data.id}`);
                      }}>
                        {isReadMore ? ' ..read more' : ' ...show less'}
                      </span>}
                    </Typography>
                  </CardContent>
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
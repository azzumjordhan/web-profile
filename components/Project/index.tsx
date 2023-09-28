import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { hoverImage } from "./style";
import router from "next/router";
import { useState } from "react";

const styleSpan = {
  cursor: "pointer",
  color: "#0AFFFF",
}

interface EnhancedProject {
  projects: any[];
}

const ProjectComponent = (props: EnhancedProject) => {
  const {
    projects
  } = props;

  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {projects?.length > 0 &&
          projects?.map((data: any, index: number) => {
            return (
              <Grid item xs={3} key={data.id}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt="NestJS"
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      cursor: "pointer",
                      transitionDuration: "0.5s",
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        scale: "110%",
                        height:"200",
                        width: "200",
                        opacity: "80",
                        transitionDuration: "0.5S",
                      },
                    }}
                    onClick={() => {
                      router.push(`/project/detail/${data.id}`);
                    }}
                  />
                  <CardContent sx={{ height: 120, backgroundColor: "#1d1d1d" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="white"
                    >
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
  );
}

export default ProjectComponent;
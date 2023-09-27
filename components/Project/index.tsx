import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { hoverImage } from "./style";
import router from "next/router";

interface EnhancedProject {
  projects: any[];
}

const ProjectComponent = (props: EnhancedProject) => {
  const {
    projects
  } = props;

  return (
    <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {projects?.length > 0 &&
          projects?.map((data: any, index: number) => {
            return (
              <Grid item xs={3} key={data.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt="NestJS"
                    sx={{ objectFit: "cover", width: "100%", cursor: "pointer" }}
                    onClick={() => {
                      router.push("/project");
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
                    <Typography variant="body2" color="white">
                      {data.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

export default ProjectComponent;
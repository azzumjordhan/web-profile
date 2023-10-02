import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

interface EnhancedDataTech {
  backend: any[],
  frontend: any[],
  database: any[],
  another: any[],
  learning: any[],
}
const TechStack = (props: EnhancedDataTech) => {
  const { backend, frontend, database, another, learning } = props;
  return (
    <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
      <Box sx={{ backgroundColor: "#1F2937", borderRadius: "10px" }}>
        <Box sx={{ margin: "10px", paddingTop: "2px" }}>
          <h3 style={{ color: "white" }}>Tech for Back End</h3>
          <Grid container spacing={2} alignContent="space-around" alignItems="center">
            {backend?.length > 0 && backend.map((data: any, index: number) => {
              return(
                <Grid item xs={3} key={data.id} minWidth={160}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="180"
                      image={data.picture}
                      alt={data.name_tech}
                      sx={{ objectFit: "contain" }}
                    />
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box sx={{ margin: "10px", padding: "5px", paddingBottom: "10px" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                NodeJS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                NestJS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                Java
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                Spring Boot
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#1F2937", borderRadius: "10px" }}>
        <Box sx={{ margin: "10px", paddingTop: "2px" }}>
          <h3 style={{ color: "white" }}>Tech for Front End</h3>
          <Grid container spacing={2} alignContent="space-around" alignItems="center">
            {frontend?.length > 0 && frontend?.map((data: any, index: number) => {
              return(
                <Grid item xs={3} key={data.id} minWidth={160}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="180"
                      width="180"
                      image={data.picture}
                      alt={data.name_tech}
                      sx={{ objectFit: "contain" }}
                    />
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box sx={{ margin: "10px", padding: "5px", paddingBottom: "10px" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                ReactJs
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                NextJS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                Material UI
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                Redux
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#1F2937", borderRadius: "10px" }}>
        <Box sx={{ margin: "10px", paddingTop: "2px" }}>
          <h3 style={{ color: "white" }}>Database</h3>
          <Grid container spacing={2} sx={{ marginBottom: 2 }} alignContent="space-around" alignItems="center">
            {database?.length > 0 && database?.map((data: any, index: number) => {
              return(
                <Grid item xs={3} key={data.id} minWidth={160}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="180"
                      width="180"
                      image={data.picture}
                      alt={data.name_tech}
                      sx={{ objectFit: "contain" }}
                    />
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box sx={{ margin: "10px", padding: "5px", paddingBottom: "10px" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                PostgreSQL
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                MySQL
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundColor: "#111827",
                  color: "white",
                  padding: "8px",
                  display: "inline-flex",
                  borderRadius: "5px",
                }}
              >
                MongoDB
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid sx={{ backgroundColor: "#033E3E", borderRadius: "6px" }}>
        <Box sx={{ marginBottom: 2, paddingBottom: 2 }}>
          <Box sx={{ marginLeft: "10px", paddingTop: "1px" }}>
            <h3 style={{ color: "white" }}>Another Tools</h3>
            <p style={{ fontSize: 18, color: "white" }}>
              Apart from the main stack, here are the libraries that I usually
              use to web development.
            </p>
          </Box>
          <Box>
          {another?.length > 0 && another?.map((data: any, index: number) => {
              return(
                <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
              key={data.id}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {data.name_tech}
              </Typography>
            </Grid>
              )
            })}
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ backgroundColor: "#228B22", borderRadius: "6px" }}>
        <Box sx={{ marginBottom: 2, paddingBottom: 2 }}>
          <Box sx={{ marginLeft: "10px", paddingTop: "1px" }}>
            <h3 style={{ color: "white" }}>Currently Learning</h3>
            <p style={{ fontSize: 18, color: "white" }}>
              Things that caught my attention to learning.
            </p>
          </Box>
          <Box>
            {learning?.length > 0 && learning?.map((data: any, index: number) => {
              return(
                <Grid
              sx={{
                backgroundColor: "#12AD2B",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
              key={data.id}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {data.name_tech}
              </Typography>
            </Grid>
              )
            })}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default TechStack;

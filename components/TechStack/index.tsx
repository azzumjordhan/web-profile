import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

export default function TechStack() {
  return (
    <Box sx={{ borderBottom: 1, marginBottom: 2, borderColor: "white" }}>
      <Box sx={{ backgroundColor: "#1F2937", borderRadius: "10px" }}>
        <Box sx={{ margin: "10px", paddingTop: "2px" }}>
          <h3 style={{ color: "white" }}>Tech for Back End</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1694843739/web-profile/nwic6w7piqf4tqu8rj70.png"
                  }
                  alt="NodeJS"
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695113468/web-profile/py6adj6hye8jew2sy2h4.jpg"
                  }
                  alt="SpringBoot"
                  sx={{ objectFit: "fill" }}
                />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695191417/web-profile/isbxmokwinfikd2dfvg0.png"
                  }
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
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695191488/web-profile/oqvptzj363wpgqmcxkxg.png"
                  }
                  alt="TypeScript"
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
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
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  width="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695191658/web-profile/kbu4ex1pbrfkpt69eyvq.png"
                  }
                  alt="React"
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  width="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695191684/web-profile/csitkkezhwu1z3mqqdpw.jpg"
                  }
                  alt="Next"
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
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
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  width="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695190985/web-profile/osaqq9kv8yggm5xxcbaa.webp"
                  }
                  alt="PostgreSQL"
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  width="180"
                  image={
                    "https://res.cloudinary.com/dwd5gbkbb/image/upload/v1695191013/web-profile/wetmtrcwxqixfnervcga.png"
                  }
                  alt="MySQL"
                  sx={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
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
            <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"TypeORM"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Hibernate"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"SendGrid"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Cloudinary"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#045D5D",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Express"}
              </Typography>
            </Grid>
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
            <Grid
              sx={{
                backgroundColor: "#12AD2B",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Next with Redux"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#12AD2B",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Block Chain and Smart Contract"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#12AD2B",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Go"}
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#12AD2B",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                padding: "2px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="body2"
                color="white"
                sx={{ paddingLeft: "2px" }}
              >
                {"Python with Django"}
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

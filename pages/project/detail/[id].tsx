import Headerbar from "@/components/Headerbar";
import { getDetailDataProject } from "@/redux/actions";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetail = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { detailProject } = useSelector((state: any) => state.projectReducer);

  const fetchDetailProject = (id: any) => {
    dispatch(getDetailDataProject(id));
  };

  useEffect(() => {
    if (router.isReady) {
      const id = router.query?.id;
      id ? fetchDetailProject(id) : null;
    }
  }, [router]);

  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box sx={{ marginTop: "20px", marginBottom: "10px" }}>
        <CardMedia
          component="img"
          image={detailProject?.data?.image}
          sx={{ borderRadius: "20px", objectFit: "cover" }}
          height="400"
        />
      </Box>
      <Box margin="5px">
        <Typography variant="h2" color="white">
          {detailProject?.data?.title}
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
          {detailProject?.data?.keyword}
        </Typography>
      </Box>
      <Box margin="5px">
        <Typography variant="h4" color="white">
          {detailProject?.data?.subtitle}
        </Typography>
      </Box>
      <Box margin="5px">
        <Typography color="white" align="justify">
          {detailProject?.data?.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProjectDetail;

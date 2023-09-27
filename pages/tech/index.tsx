import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import TechStack from "@/components/TechStack";
import Copyright from "@/source/Copyright";
import { Box, Container } from "@mui/material";

export default function Tech() {
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <h2 style={{ color: "white" }}>Tech Stack</h2>
      <p style={{ fontSize: 18, color: "white" }}>
        Here I listed all the technologies that I currently use for web development and familiar
        with as well as some that I've planned to learn.
      </p>
      <TechStack />
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

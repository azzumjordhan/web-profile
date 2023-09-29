import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import Copyright from "@/source/Copyright";
import { Box, CardContent, Container, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "white",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h1"
          color="white"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          About Me
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Me
        </Typography>
        <Typography variant="body1" color="white" align="justify">
          Hi, My name is Moh. Azzum Jordhan Wiratama. A software engineer based
          in Indonesia, mainly focused on Web Development, especially back-end
          development. I graduated from college in the middle 2022 with a
          Bachelor of Engineering degree, majoring in Software Engineering at
          Universitas Gadjah Mada. I have included more through information
          related to my work and study on my LinkedIn or you can download my
          resume.
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Past experience
        </Typography>
        <Typography variant="body1" color="white" align="justify">
          Several years ago while still in college, I focused on the front end.
          My first front end project was during my internship at PT. Delta Neva
          Angkasa (DomaiNesia) in 2018. Here I have the task of changing the
          appearance of the payment page from the companys website.
          <br></br>
          <br></br>
          While working on my final project for my thesis, I created a realtime
          chat application that can be run on other web applications, or it can
          be called an embedded chat app. To make the application, the
          requirements that I use are (NodeJS, Express, Socket.IO, MongoDB, and
          Bootstrap as HTML and CSS frameworks).
          <br></br>
          <br></br>
          In September 2022, I received an internship offer from PT. Tumbuh
          Bersama Nano (Nanovest) and got a contract for 9 months. here I have
          the task of developing the web, and focusing as a back-end developer
          to make REST API. And since July 2023, I have been contracted as an
          employee of the company PT. Tumbuh Bersama Nano. I have listed my tech
          knowledge that I have worked with and that I am currently learning in
          tech page.
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Hobbies
        </Typography>
        <Typography variant="body1" color="white" align="justify">
          My hobbies are playing basketball and watching movies. My favorite
          basketball team is Golden State Warriors, and My favorite movies are
          Marvel Studios movies and Game of Thrones.
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          About this site
        </Typography>
        <Typography variant="body1" color="white" align="justify" sx={{ marginBottom: "10px"}}>
          This site was developed to document my personal journey. This website
          was developed using NestJS as a back-end and Next as a front-end
          framework.
        </Typography>
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

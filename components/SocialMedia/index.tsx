import { Grid, Link } from "@mui/material";
import * as React from "react";
import { hoverText } from "./style";

type Props = {
  underline: string;
};
export default function SocialMedia() {
  return (
      <Grid container maxWidth="lg">
        <Grid item xs={4}>
          <Link
            color="white"
            href="https://github.com/azzumjordhan"
            underline="hover"
          >
            Github
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            color="white"
            href="https://www.linkedin.com/in/azzum-jordhan"
            underline="hover"
          >
            LinkedIn
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            color="white"
            href="https://instagram.com/azzumjordhan"
            underline="hover"
          >
            Instagram
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link color="white" href="#" underline="hover">
            Email
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link color="white" href="#" underline="hover">
            Resume
          </Link>
        </Grid>
      </Grid>
  );
}

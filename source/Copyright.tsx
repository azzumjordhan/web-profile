import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      {"Moh Azzum Jordhan Wiratama "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

import { Avatar, Box, Stack, Typography } from "@mui/material";

interface BlankPageProps {
  text: string;
  icon: any;
}
const BlankPage = ({ text, icon }: BlankPageProps) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Box>
        <Avatar
          src={icon?.src}
          variant='square'
          sx={{
            width: '60px',
            height: '60px',
            marginBottom: '10px',
            marginTop: '10px'
          }}
        />
      </Box>
      <Typography variant="subtitle2" sx={{ paddingBottom: "20px" }}>
        {text}
      </Typography>
    </Stack>
  )
}

export default BlankPage;

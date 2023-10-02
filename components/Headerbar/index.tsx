import { Box, Tab, Tabs, tabsClasses } from "@mui/material";
import router, { useRouter } from "next/router";
import { tabStyle } from "./style";
import { useEffect, useState } from "react";

export default function Headerbar() {
  const router = useRouter();
  const pathSelected = `/${router.pathname.replaceAll("/", " ").split(" ")[1]}`;
  const selectTab = () => {
    if (pathSelected === "/project") {
      return "2";
    }
    if (pathSelected === "/tech") {
      return "3";
    }
    if (pathSelected === "/article") {
      return "4";
    }
    if (pathSelected === "/aboutme") {
      return "5";
    }
    return "1";
  };
  const [tabValue, setTabValue] = useState<any>(selectTab);
  
  const [value, setValue] = useState<any>(tabValue);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "white" }}>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <Tabs 
          sx={{
            backgroundColor: "#000000",
            [`& .${tabsClasses.scrollButtons}`]: {
              color: "white",
              '&.Mui-disabled': { opacity: 0.3 },
            }, }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab
            sx={{ color: "white" }}
            label="Home"
            value="1"
            onClick={() => {
              router.push("/");
            }}
          ></Tab>
          <Tab
            sx={{ color: "white" }}
            label="Project"
            value="2"
            onClick={() => {
              router.push("/project");
            }}
          ></Tab>
          <Tab
            sx={{ color: "white" }}
            label="Tech"
            value="3"
            onClick={() => {
              router.push("/tech");
            }}
          ></Tab>
          <Tab
            sx={{ color: "white" }}
            label="Article"
            value="4"
            onClick={() => {
              router.push("/article");
            }}
          ></Tab>
          <Tab
            sx={{ color: "white" }}
            label="About Me"
            value="5"
            onClick={() => {
              router.push("/aboutme");
            }}
          ></Tab>
        </Tabs>
      </Box>
    </Box>
  );
}

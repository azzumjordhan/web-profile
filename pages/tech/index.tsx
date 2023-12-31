import Headerbar from "@/components/Headerbar";
import SocialMedia from "@/components/SocialMedia";
import TechStack from "@/components/TechStack";
import { getTechByCategory, getTechStack } from "@/redux/actions";
import Copyright from "@/source/Copyright";
import { Box, Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Tech() {
  // const [backEnd, setBackEnd] = useState<any>([]);
  // const [frontEnd, setFronEnd] = useState<any>([]);
  // const [dataBase, setDatabase] = useState<any>([]);
  // const [anotherTools, setAnother] = useState<any>([]);
  // const [currentLearning, setLearning] = useState<any>([]);
  const dispatch: any = useDispatch();
  const { isPage } = useSelector((state: any) => state.globalReducer);
  const { dataTechStack, dataCategoryTech } = useSelector((state: any) => state.techReducer);

  const [filter, setFilter] = useState<any>({
    sort: 'ASC',
    order_by: 'priority',
    page: 1,
    size: 15,
  });

  const fetchDataTechStack = (page: number, type: any) => {
    dispatch(
      getTechStack({
        ...filter,
        type: type,
        page: page,
      }),
    );
  }

  const fetchDataCategoryTech = () => {
    dispatch(
      getTechByCategory(),
    );
  };

  useEffect(() => {
    const dataBE = fetchDataTechStack(isPage, 'backend');
  }, [isPage, filter]);

  useEffect(() => {
    fetchDataCategoryTech();
  }, []);

  return (
    <Container maxWidth="lg">
      <Headerbar />
      <Typography
        variant="h2"
        color="white"
        fontWeight="700"
        sx={{
          marginTop: "10px",
          marginBottom: "5px",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>Tech Stack
      </Typography>
      <Typography
        color="white"
        fontWeight="500"
        fontSize="18px"
        align="justify"
        sx={{
          marginTop: "5px",
          marginBottom: "10px",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}
      >
        Here I listed all the technologies that I currently use for web development and familiar
        with as well as some that I have planned to learn.
      </Typography>
      <TechStack
        backend={dataCategoryTech?.backend}
        frontend={dataCategoryTech?.frontend}
        database={dataCategoryTech?.database}
        another={dataCategoryTech?.another_tools}
        learning={dataCategoryTech?.current_learning}
      />
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

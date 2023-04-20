import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Heading, LearnMoreLight, LoginButton } from "../utils";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import ShippingDetails from "../ShippingDetailsPage/ShippingDetails";

const HomePage = () => {
  const [logIn, setLogIn] = useState(true);
  const [page, setPage] = useState(true);
  const LandingPage = () => {
    const Footer = () => (
      <Stack
        style={{ position: "fixed", bottom: "-2rem", right: "0", left: "0" }}
      >
        <Box
          component="img"
          alt=""
          src="Vector1.png"
          style={{ position: "absolute", zIndex: 1, width: "130%" }}
        />
        <Box
          component="img"
          alt=""
          src="Vector2.png"
          style={{ position: "relative", right: "6px" }}
        />
        <Box
          component="img"
          alt=""
          src="message.png"
          style={{
            position: "absolute",
            right: "0",
            zIndex: "1",
            width: "7%",
            cursor: "pointer",
          }}
        />
      </Stack>
    );

    const SerachField = () => (
      <Stack
        style={{
          width: "86%",
          padding: "1rem",
          margin: "0 auto",
          justifyContent: "space-between",
          borderRadius: "15px",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          alignItems: "center",
        }}
        direction={"row"}
        color="gray"
      >
        <Stack
          direction={"row"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <LocationOnIcon color="disabled" />
          Origin, Port, City
        </Stack>
        <Stack
          direction={"row"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <LocationOnIcon color="disabled" />
          Destination, Port, City
        </Stack>
        <Box
          sx={{
            borderLeft: "1px solid #b2b2b2",
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Icon
            sx={{ zIndex: 10, backgroundColor: "#fff", cursor: "pointer" }}
            color="error"
          />
          <CalendarMonthIcon color="disabled" />
          13 April 2023
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid #b2b2b2",
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Icon
            sx={{ zIndex: 10, backgroundColor: "#fff", cursor: "pointer" }}
            color="error"
          />
          <DirectionsBoatFilledIcon color="disabled" />
          Load
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid #b2b2b2",
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Icon
            sx={{
              zIndex: 10,
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            color="error"
          />
          <Button>
            <Box component="img" alt="Login" src="arrowright.png" />
          </Button>
        </Box>
      </Stack>
    );

    const CardBody = ({ title, desc, imgs }) => (
      <Card
        sx={{
          maxWidth: 310,
          borderRadius: 3,
          boxShadow:
            " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        }}
      >
        <CardContent>
          <Stack direction={"row"} style={{ paddingBottom: "1rem" }}>
            <Box
              component="img"
              alt="Login"
              src={imgs}
              sx={{ paddingRight: "2.3rem" }}
            />
            <Typography gutterBottom variant="h7" component="div">
              {title}
            </Typography>
          </Stack>
          <Divider />
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ paddingTop: "1rem" }}
          >
            {desc}
          </Typography>
        </CardContent>
      </Card>
    );

    return (
      <>
        <Grid>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ padding: 2 }}
          >
            <Heading />
            <Stack direction={"row"} gap={1.5} style={{ alignItems: "center" }}>
              <LoginButton logIn={logIn} setLogIn={setLogIn} />
              <LearnMoreLight logIn={logIn} page={page} setPage={setPage} />
            </Stack>
          </Stack>
          <Stack alignItems={"center"} style={{ marginBottom: "3.4rem" }}>
            <Typography style={{ fontSize: "3rem", fontWeight: 600 }}>
              Hassle-Free Shipping Solutions
            </Typography>
            <Typography style={{ fontSize: "1.7rem", fontWeight: 500 }}>
              Compare, book, and manage your freight across the world’s top
              logistics providers, all on one platform.
            </Typography>
          </Stack>

          <SerachField />
          {/* Services */}
          <Stack
            style={{
              marginTop: "2.5rem",
              alignItems: "center",
            }}
            direction="column"
          >
            <Typography style={{ fontSize: "2rem", fontWeight: 600 }}>
              Services
            </Typography>
            <Stack
              direction="row"
              sx={{
                marginTop: 4,
                marginBottom: 4,
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly", // center the items horizontally
              }}
            >
              <CardBody
                title="Freight Services"
                desc="Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door."
                imgs="ship.png"
              />
              <CardBody
                title="Business Services"
                desc="We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level."
                imgs="briefcase.png"
              />
              <CardBody
                title="Shipping & Logistics"
                desc="Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs."
                imgs="globalsearch.png"
              />
              <CardBody
                title="24/7 Support"
                desc="Receive support from our experts all over the world at every stage of the process, 24/7."
                imgs="i24support.png"
              />
            </Stack>
          </Stack>

          {/* footeer */}
          <Footer />
        </Grid>
      </>
    );
  };

  return (
    <div>
      {page ? (
        <LandingPage />
      ) : (
        <ShippingDetails
          logIn={logIn}
          setLogIn={setLogIn}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default HomePage;

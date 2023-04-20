import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Icon,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Heading, LearnMoreLight, LoginButton, STEPS } from "../utils";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import FlightIcon from "@mui/icons-material/Flight";
import CheckoutPage from "./CheckoutPage";

const ShippingDetails = ({ page, setPage, logIn, setLogIn }) => {
  const [activeStep, setActiveStep] = useState(2);
  const [check, setCheck] = useState(true);
  const handleSelect = () => {
    setActiveStep(activeStep + 1);
    setCheck(false);
  };

  const [index, setIndex] = useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const styles = {
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
      textAlign: "center",
    },
  };
  const renderCard = (cardIndex) => {
    switch (cardIndex) {
      case 0:
        return (
          <Stack
            sx={{
              width: 700,
              borderRadius: 3,
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <CardContent>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack>
                  <Stack
                    direction={"row"}
                    style={{ paddingBottom: "1rem" }}
                    alignItems={"center"}
                  >
                    <Box
                      component="img"
                      alt="Login"
                      src={"Bestvalue.png"}
                      sx={{ paddingRight: "2.3rem" }}
                    />
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="div"
                      color={"red"}
                    >
                      Express
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ gap: "0.5rem", paddingTop: "0.5rem" }}
                  >
                    <LocationOnIcon />
                    <Typography variant="body2" color="text.secondary">
                      110003, Delhi
                    </Typography>
                    - <FlightIcon /> -
                    <LocationOnIcon />
                    <Typography variant="body2" color="text.secondary">
                      200080, Shanghai
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} sx={{ paddingTop: "1rem" }} gap={1}>
                    <img src="premire.png" />
                    <img src="star.png" />
                  </Stack>
                </Stack>
                <Stack direction={"row"}>
                  <Stack
                    sx={{
                      borderLeft: "1px solid #b2b2b2",
                      justifyContent: "space-between",
                      padding: "0 1rem",
                    }}
                    alignItems="center"
                  >
                    <Typography>$ 3,982.63</Typography>
                    <Button
                      style={{
                        color: "white",
                        border: "1.5px solid #6F57E9",
                        textTransform: "none",
                        padding: "0.63rem 2.1rem 0.63rem 2.1rem",
                        borderRadius: "12px",
                        backgroundColor: "#6F57E9",
                      }}
                      onClick={handleSelect}
                    >
                      Select
                    </Button>
                    <Typography>View Details</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Stack>
        );
      case 1:
        return (
          <Paper style={styles.paper}>
            <h2>Card 2</h2>
          </Paper>
        );
      case 2:
        return (
          <Paper style={styles.paper}>
            <h2>Card 3</h2>
          </Paper>
        );
      default:
        return null;
    }
  };

  const BookingPage = () => (
    <Stack>
      <Stack
        style={{
          width: "86%",
          padding: "0.8rem",
          margin: "0 auto",
          justifyContent: "space-between",
          borderRadius: "15px",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          alignItems: "center",
          marginBottom: "2rem",
          marginTop: "3rem",
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
          <DriveFileRenameOutlineIcon sx={{ padding: "1rem" }} />
        </Box>
      </Stack>
      {/* Slider */}
      <Divider />
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ marginTop: "2rem" }}
      >
        <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
          {" "}
          <Stack style={{ width: "20%", height: "15%" }}>
            <Paper
              onClick={() => handleChangeIndex(0)}
              elevation={index === 0 ? 10 : 2}
              style={{
                backgroundColor: index === 0 ? "#ffffff" : "#ebe8ff",
                color: index === 0 ? "#9747FF" : "gray",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              Best Value 5-5 days. $3,121
            </Paper>
          </Stack>
          <Stack style={{ width: "20%", height: "15%" }}>
            <Paper
              onClick={() => handleChangeIndex(1)}
              elevation={index === 1 ? 10 : 2}
              style={{
                backgroundColor: index === 1 ? "#ffffff" : "#ebe8ff",
                color: index === 1 ? "#9747FF" : "gray",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              Quickest 5-5 days. $3,121{" "}
            </Paper>
          </Stack>
          <Stack style={{ width: "20%", height: "15%" }}>
            <Paper
              onClick={() => handleChangeIndex(2)}
              elevation={index === 2 ? 10 : 2}
              style={{
                backgroundColor: index === 2 ? "#ffffff" : "#ebe8ff",
                color: index === 2 ? "#9747FF" : "gray",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              Cheapest 5-5 days. $3,121{" "}
            </Paper>
          </Stack>
        </Stack>
        <Stack sx={{ marginTop: "2rem" }}>
          <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            {renderCard(0)}
          </SwipeableViews>
        </Stack>
      </Stack>
    </Stack>
  );

  const StepperSteps = () => (
    <>
      <Grid>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ padding: 3 }}
        >
          <Heading />
          {check ? (
            <Stack direction={"row"} gap={1.5} style={{ alignItems: "center" }}>
              <LoginButton setLogIn={setLogIn} />
              <LearnMoreLight setPage={setPage} />
            </Stack>
          ) : (
            ""
          )}
        </Stack>
      </Grid>
      <Stack direction={"row"} sx={{ width: "100%", justifyContent: "center" }}>
        {check ? (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              width: "13%",
              padding: "0.3rem",
              borderRadius: "12px",
              color: "gray",
            }}
          >
            <DirectionsBoatFilledIcon
              color="disabled"
              sx={{ marginRight: "0.7rem" }}
            />
            Load
            <TextField
              sx={{
                marginLeft: "0.7rem",
                "& fieldset": { border: "none" },
                margin: "0",
                padding: "0",
              }}
            />
          </Box>
        ) : (
          ""
        )}

        <Stack
          position={"sticky"}
          bgcolor="white"
          justifyContent="space-between"
          style={{ width: "50%" }}
        >
          <Stack padding={2} className="w-30 align-self-center">
            <Stepper activeStep={activeStep}>
              {Object.values(STEPS).map(({ label }) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Stack>
      </Stack>
    </>
  );

  return (
    <>
      <StepperSteps />
      {check ? <BookingPage /> : <CheckoutPage page={page} setPage={setPage} />}
    </>
  );
};

export default ShippingDetails;

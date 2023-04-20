import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";

const CheckoutPage = ({ page, setPage }) => {
  const CheckoutDetails = () => (
    <Stack
      alignItems={"center"}
      sx={{
        paddingRight: 3,
      }}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        borderRadius: "15px",
      }}
      gap={2}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        gap={2}
        sx={{ margin: 4 }}
      >
        <Typography variant="h5" style={{ fontWeight: "550", color: "black" }}>
          Price details
        </Typography>
        <Button>
          <img src="5.png" />
        </Button>
      </Stack>

      <Stack sx={{ color: "gray" }} direction={"row"} gap={2}>
        <Typography>Seller’s Quote</Typography>
        <Typography>$ 3,659.25</Typography>
      </Stack>
      <Divider />
      <Stack direction={"row"} gap={2}>
        <Typography>Duties and taxes</Typography>
        <Typography>Not Included </Typography>
      </Stack>
      <Divider />
      <Stack direction={"row"} gap={2}>
        <Typography>Platform fee</Typography>
        <Typography>$119.48</Typography>
      </Stack>
      <Divider />

      <Stack direction={"row"} style={{ color: "black" }} gap={2}>
        <Typography variant="h4">Total:</Typography>
        <Typography variant="h4">$ 4,102.13</Typography>
      </Stack>

      <Button
        style={{
          color: "white",
          border: "1.5px solid #9747FF",
          textTransform: "none",
          padding: "0.63rem 4rem 0.63rem 4rem",
          borderRadius: "12px",
          backgroundColor: "#9747FF",
          margin: "2rem",
        }}
        onClick={() => setPage(!page)}
      >
        <Typography variant="h5">Checkout</Typography>
      </Button>
    </Stack>
  );

  const BookingDetails = () => (
    <Stack
      direction={"row"}
      sx={{ width: "100%" }}
      justifyContent={"space-between"}
    >
      <Stack sx={{ width: "60%", paddingLeft: 3 }}>
        <Stack sx={{ margin: 2 }} gap={2}>
          <Card
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              borderRadius: "15px",
            }}
          >
            <Typography sx={{ paddingLeft: 2 }} variant="h6">
              Booking summary
            </Typography>
            <CardContent>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <img src="icon.png" style={{ width: "50%" }} />
                  <Typography variant="subtitle1" alignItems={"center"}>
                    Delhi,
                    <br />
                    110003 India
                  </Typography>
                </Stack>
                <Stack sx={{ position: "relative" }}>
                  <FlightIcon />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      position: "absolute",
                      top: "-1.2rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    Express
                  </Typography>
                  <Divider
                    sx={{
                      marginTop: "0.6rem",
                      marginBottom: "0.6rem",
                      border: "2px solid Black",
                    }}
                  />
                </Stack>
                <Stack>
                  <img src="icon.png" style={{ width: "40%" }} />
                  <Typography variant="subtitle1">
                    Shanghai
                    <br />
                    200080, China
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ margin: 2 }} gap={2}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  borderRadius: "15px",
                }}
                sx={{ padding: 1 }}
              >
                <Stack alignItems={"center"}>
                  <Typography variant="h7">Total Weight/Volume</Typography>
                  <img src="1.png" style={{ width: "30%" }} />
                  114.21KG
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Card
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  borderRadius: "15px",
                }}
              >
                <Stack alignItems={"center"}>
                  <Typography variant="h7">Load</Typography>
                  <img src="2.png" style={{ width: "22.5%" }} />
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Stack>

        <Stack sx={{ margin: 2 }} gap={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  borderRadius: "15px",
                }}
                sx={{ padding: 2 }}
              >
                <Stack sx={{ alignItems: "center" }}>
                  Seller: Primetime Worldwide{" "}
                  <img
                    src="3.png"
                    style={{
                      width: "50%",
                      paddingTop: "2rem",
                      paddingBottom: "1rem",
                    }}
                  />
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  borderRadius: "15px",
                }}
                sx={{ padding: 3.5 }}
              >
                <Stack sx={{ alignItems: "center" }}>
                  Insurance:Xcover.com{" "}
                  <img
                    src="4.png"
                    style={{
                      width: "70%",
                      paddingTop: "2rem",
                      paddingBottom: "1rem",
                    }}
                  />
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "30%",
          paddingRight: 3,
          marginTop: 2,
          color: "gray",
        }}
      >
        <CheckoutDetails />
      </Stack>
    </Stack>
  );

  return (
    <Stack sx={{ marginTop: 7 }}>
      <BookingDetails />
    </Stack>
  );
};

export default CheckoutPage;

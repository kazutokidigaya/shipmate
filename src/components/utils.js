import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#6F57E9",
    },
  },
});

export const LoginButton = ({ logIn, setLogIn }) => {
  return (
    <Button onClick={() => setLogIn(!logIn)}>
      {logIn ? (
        <Box
          component="img"
          alt="Login"
          src="Buttons=LOgin.svg"
          width={"80%"}
          height={"80%"}
        />
      ) : (
        <ThemeProvider theme={theme}>
          <AttachMoneyIcon
            style={{
              border: "3px solid #6F57E9",
              width: "2.3rem",
              height: "2.2rem",
              borderRadius: "10px",
            }}
            color="secondary"
          />
        </ThemeProvider>
      )}
    </Button>
  );
};

export const LearnMoreLight = ({ logIn, page, setPage }) => {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      {logIn ? (
        <Button
          style={{
            color: "Black",
            border: "1.5px solid #6F57E9",
            textTransform: "none",
            padding: "0.63rem 2.1rem 0.63rem 2.1rem",
            borderRadius: "12px",
          }}
        >
          Learn more
        </Button>
      ) : (
        <Button
          style={{
            color: "white",
            border: "1.5px solid #6F57E9",
            textTransform: "none",
            padding: "0.63rem 2.1rem 0.63rem 2.1rem",
            borderRadius: "12px",
            backgroundColor: "#6F57E9",
          }}
          onClick={() => setPage(!page)}
        >
          Track shipment
        </Button>
      )}
    </div>
  );
};

export const Heading = () => {
  return (
    <Typography sx={{ ml: 1, fontSize: "2.2rem" }}>
      <span
        style={{
          color: "black",
          fontFamily: "DM Serif Display",
          fontWeight: "bold",
        }}
      >
        Ship
      </span>
      <span
        style={{
          color: "#6F57E9",
          fontFamily: "DM Serif Display",
          fontWeight: "bold",
        }}
      >
        mate.
      </span>
    </Typography>
  );
};

export const STEPS = {
  RESULTS: { label: "Search", value: 1 },
  SEARCH: { label: "Recomended Service", value: 2 },
  ELIGIBILTY_RULES: { label: "Results", value: 3 },
  SETTLEMENT_ATTRIBUTES: { label: "Booking", value: 4 },
};

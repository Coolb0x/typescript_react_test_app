import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

export default function SelectAndShare() {
  const [inputAddress, setInputAddress] = useState("");
  const googleApiKey = "AIzaSyDCUgbDNPrYAnY0u3v-D2qt-KdzGEDnbG0";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
  };

  const getAddress = () => {
    if (!inputAddress.trim()) {
      console.error("Address input is empty");
      return;
    }
    const addressUrl = encodeURI(inputAddress);
    console.log(inputAddress);
    console.log(addressUrl);

    getCoordinates(addressUrl);
    setInputAddress("");
  };

  const getCoordinates = async (addressUrl: string) => {
    const Url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${googleApiKey}`;
    try {
      const response = await axios.get(Url);
      const data = response.data.results[0].geometry.location;

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>Select & Share a Place</h3>
      <p>Click on the map to select a location</p>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 750,
            height: 750,
          },
        }}>
        <Paper square={false} elevation={3}>
          <div>Map Should be Here</div>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 350,
          },
        }}>
        <Typography sx={{ mt: "13px", mb: "13px", pt: "15px" }} variant='h6' gutterBottom>
          Input the address you are looking for:
        </Typography>

        <TextField
          id='address-input'
          label='Address'
          variant='filled'
          value={inputAddress}
          onChange={handleInputChange}
        />
      </Box>
      <div>
        <Button onClick={getAddress} variant='outlined'>
          Check
        </Button>
      </div>
    </>
  );
}

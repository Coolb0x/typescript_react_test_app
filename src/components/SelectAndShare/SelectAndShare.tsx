import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
import { useState, useRef, useEffect } from "react";

export default function SelectAndShare() {
  const [inputAddress, setInputAddress] = useState("");
  const [address, setAddress] = useState({ lat: -34.397, lng: 150.644 });
  const googleApiKey = "AIzaSyDCUgbDNPrYAnY0u3v-D2qt-KdzGEDnbG0";
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: googleApiKey,
      version: "weekly",
    });

    const initializeMap = async () => {
      try {
        await loader.load();
        if (mapRef.current && !mapInstance.current) {
          mapInstance.current = new google.maps.Map(mapRef.current, {
            center: address,
            zoom: 13,
          });
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initializeMap();
  }, [googleApiKey, address]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
  };

  const getAddress = () => {
    if (!inputAddress.trim()) {
      console.error("Address input is empty");
      return;
    }
    const addressUrl = encodeURIComponent(inputAddress);
    getCoordinates(addressUrl);
    setInputAddress("");
  };

  const getCoordinates = async (addressUrl: string) => {
    const Url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${googleApiKey}`;
    try {
      const response = await axios.get(Url);
      if (response.data.results.length === 0) {
        console.error("No results found for the provided address.");
        return;
      }
      const data = response.data.results[0].geometry.location;

      setAddress(data);
      if (mapInstance.current) {
        mapInstance.current.setCenter(data);
        new google.maps.Marker({
          position: data,
          map: mapInstance.current,
        });
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
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
          <div id='map' ref={mapRef} style={{ width: "100%", height: "100%" }}>
            Map Should be Here
          </div>
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

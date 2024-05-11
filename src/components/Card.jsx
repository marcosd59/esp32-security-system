import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function MediaCover() {
  return (
    <>
      <Typography
        level="h2"
        fontWeight="xl"
        textColor="#000"
        mt={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        Componentes y Tecnologias
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          p: 0,
          m: 0,
          justifyContent: "space-around",
          marginTop: "2rem",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Card
          component="li"
          sx={{
            minWidth: 300,
            maxWidth: "45%",
            flexGrow: 1,
          }}
        >
          <CardCover>
            <img
              src="https://www.espressif.com/sites/default/files/ESP32-CAM-Take-Photo-Display-Web-Server.jpg"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              ESP32 Cam
            </Typography>
          </CardContent>
        </Card>
        <Card
          component="li"
          sx={{
            minWidth: 300,
            maxWidth: "45%",
            flexGrow: 1,
          }}
        >
          <CardCover>
            <img
              src="https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Python
            </Typography>
          </CardContent>
        </Card>
        <Card
          component="li"
          sx={{
            minWidth: 300,
            maxWidth: "45%",
            flexGrow: 1,
          }}
        >
          <CardCover>
            <img
              src="https://media.licdn.com/dms/image/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=txL8oZw9vpsEAev7vCuRj8GQpDmbmG9FMUnRDtRzXaY"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              React
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

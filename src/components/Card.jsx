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
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
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
              Image
            </Typography>
          </CardContent>
        </Card>
        <Card
          component="li"
          sx={{
            minWidth: 300,
            maxWidth: "65%",
            flexGrow: 1,
          }}
        >
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Video
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
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
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
              Image
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

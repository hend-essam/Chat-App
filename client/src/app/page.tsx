import Navbar from "../components/layout/Navbar";
import { Stack, Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link"; // Added for better navigation

const Home = () => {
  return (
    <Box component="main" sx={{ minHeight: "80vh", backgroundColor: "black" }}>
      <Stack
        direction="column"
        gap={{ xs: "65px", md: "90px" }}
        py="24px"
        px={{ xs: "24px", md: "64px" }}
      >
        <Navbar />

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="space-evenly"
          spacing={4}
          gap="40px"
          sx={{ color: "#fff" }}
        >
          <Box sx={{ maxWidth: { md: "50%" } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                width: { xs: "100%", md: "80%", lg: "60%" },
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Connect with ease and chat
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
              Real time messaging for efficient communication
            </Typography>
            <Link href="/register" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#9a885e",
                  width: "fit-content",
                  borderRadius: "30px",
                  color: "black",
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#b89f6a" },
                }}
              >
                Get Started
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "450px" },
              height: { xs: "250px", md: "300px" },
              display: "contents",
            }}
          >
            <Box
              sx={{
                height: { xs: 200, md: 300 },
                position: "relative",
                display: "inline-block",
              }}
            >
              <img
                src="/assets/cat.png"
                alt="Cat"
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "20px -20px 0px 0px #9a885e8f",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;

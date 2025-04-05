import { Stack, Typography, Link, Button, OutlinedInput } from "@mui/material";

const Register = () => {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
      <Stack gap={5} p={2}>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          borderBottom={"3px double #b89f6a"}
          p={1}
        >
          <Typography variant="h3" color="#b89f6a">
            Chatify
          </Typography>
          <Typography variant="h5">Register</Typography>
        </Stack>

        <Stack component="form" gap={5}>
          <Stack gap={{ xs: 1, md: 2 }}>
            <Stack direction={{ xs: "column", md: "row" }} gap={1}>
              <OutlinedInput type="text" placeholder="First Name" required />
              <OutlinedInput type="text" placeholder="Last Name" required />
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} gap={1}>
              <OutlinedInput type="email" placeholder="Username" required />
              <OutlinedInput type="password" placeholder="Password" required />
            </Stack>
          </Stack>

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#b89f6a",
              fontWeight: "semi-bold",
            }}
          >
            Register
          </Button>
        </Stack>

        <Typography textAlign="center">
          Already have an account?{" "}
          <Link
            href="/login"
            underline="none"
            color="primary.main"
            fontWeight="bold"
          >
            Login.
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;

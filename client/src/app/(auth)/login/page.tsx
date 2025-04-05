import { Stack, Typography, Link, Button, OutlinedInput } from "@mui/material";

const Login = () => {
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
          <Typography
            variant="h3"
            color="#b89f6a"
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
            }}
          >
            Chatify
          </Typography>
          <Typography variant="h5">Login</Typography>
        </Stack>

        <Stack component="form" gap={3}>
          <Stack spacing={2} direction="column" gap={2}>
            <OutlinedInput type="email" placeholder="Username" required />
            <OutlinedInput type="password" placeholder="Password" required />
          </Stack>
          <Stack direction="row" gap={2}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#b89f6a",
                fontWeight: "semi-bold",
              }}
            >
              Login
            </Button>
            <Button
              href="/forgot-password"
              variant="outlined"
              type="submit"
              sx={{
                border: "1px solid #b89f6a",
                fontWeight: "semi-bold",
                color: "black",
              }}
            >
              Forget Password?
            </Button>
          </Stack>
        </Stack>

        <Typography>
          Don't have an account?{" "}
          <Link
            href="/register"
            underline="none"
            color="primary.main"
            fontWeight="bold"
          >
            Register here.
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;

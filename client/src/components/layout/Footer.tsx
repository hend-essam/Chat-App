import { Stack, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const sections = [
  { title: "Profile", items: ["Settings", "Chat", "Business"] },
  { title: "Notifications", items: ["Contacts", "Feature"] },
  { title: "Recent", items: ["Customize", "Job", "Latest"] },
  {
    title: "Personalization",
    items: ["Stay Connected", "Knowledge Base", "Customer"],
  },
  { title: "Chat", items: ["Chat", "Feedback", "Contact"] },
];

const Footer = () => {
  return (
    <Grid
      container
      spacing={6}
      gap={5}
      component="footer"
      py="24px"
      p={{ xs: "24px", md: "64px" }}
    >
      <Grid size={5}>
        <Stack direction="column" gap={3}>
          <Stack direction="column" gap={1}>
            <Typography variant="h5">CHATIFY</Typography>
            <Typography variant="subtitle1" color="gray">
              Effortless chat tool for modern communication.
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="subtitle1">User Account Option</Typography>
            <Stack direction="row" gap={2} color="#5E5848">
              <MarkunreadIcon />
              <NotificationsIcon />
              <SettingsIcon />
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      {sections.map((section, index) => (
        <Grid key={index} size="auto">
          <Stack direction="column" gap={1.5}>
            <Typography variant="h6">{section.title}</Typography>
            <Stack direction="column" gap={1} color="gray">
              {section.items.map((item, idx) => (
                <Typography key={idx} variant="subtitle1">
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;

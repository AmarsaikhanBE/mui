"use client";

import { usePathname } from "next/navigation";
import {
  Box,
  Breadcrumbs,
  Button,
  Fab,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

export default function Header({
  title,
  action,
}: {
  title: string;
  action: any;
}) {
  const breadcrumbs = usePathname().split("/");

  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: "secondary.main",
        paddingX: 4,
        paddingY: 2,
      }}
    >
      <Stack direction="row" alignItems="end" justifyContent="space-between">
        <Box>
          <Typography variant="h3" color="secondary.contrastText">
            {title}
          </Typography>
          <Breadcrumbs sx={{ color: "secondary.contrastText" }}>
            {breadcrumbs.map((item) => (
              <Typography variant="body2" key={item}>
                {item}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.contrastText",
            color: "secondary.main",
            display: { xs: "none", sm: "inline-flex" },
            "&:hover": {
              backgroundColor: "secondary.light",
              color: "secondary.contrastText",
            },
          }}
          startIcon={<Add />}
          onClick={() => action()}
        >
          Create
        </Button>
        <Fab
          size="small"
          sx={{
            backgroundColor: "secondary.contrastText",
            color: "secondary.main",
            display: { xs: "inline-flex", sm: "none" },
          }}
          onClick={() => action()}
        >
          <Add />
        </Fab>
      </Stack>
    </Paper>
  );
}

"use client";

import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/utils/swr";
import {
  Paper,
  CircularProgress,
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import Header from "@/components/dashboard/Header";
import { Delete, Edit, MoreVert } from "@mui/icons-material";

export default function NewsCategories() {
  const { data, isLoading } = useSWR("/api/news/categories", fetcher);

  console.log(data);
  return (
    <>
      <Header
        title="Categories"
        action={() => {
          console.log("hello world");
        }}
      />
      {isLoading && (
        <CircularProgress
          color="secondary"
          sx={{ display: "block", my: 10, mx: "auto" }}
        />
      )}
      {data && (
        <Paper elevation={4} sx={{ minWidth: 700 }}>
          <Typography>filter</Typography>
          <Grid
            container
            fontWeight={700}
            gap={2}
            px={2}
            borderBottom={1}
            borderColor="divider"
          >
            <Grid item width={32} textAlign="center">
              Sub
            </Grid>
            <Grid item width={120} textAlign="center">
              Image
            </Grid>
            <Grid item width={250}>
              Name
            </Grid>
            <Grid item xs>
              Description
            </Grid>
            <Grid item width={50} textAlign="center">
              Action
            </Grid>
          </Grid>
          {data.map((main: any) => (
            <>
              <Grid
                container
                key={main._id}
                gap={2}
                px={2}
                py={1}
                alignItems="center"
              >
                <Grid item width={32} textAlign="center">
                  <IconButton size="small" sx={{ width: 31 }}>
                    {main.subCategories.length}
                  </IconButton>
                </Grid>
                <Grid
                  item
                  component={Box}
                  width={120}
                  height={100}
                  position="relative"
                >
                  <Image
                    src={main.img}
                    alt={main.name}
                    fill
                    objectFit="cover"
                  />
                </Grid>
                <Grid item width={250}>
                  {main.name}
                </Grid>
                <Grid item xs>
                  {main.desc}
                </Grid>
                <Grid item width={50} textAlign="center">
                  <Tooltip title="edit">
                    <IconButton
                      size="small"
                      sx={{
                        "&:hover": {
                          color: "secondary.main",
                        },
                      }}
                    >
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Divider variant="middle" />
            </>
          ))}
          <Typography>pagination</Typography>
        </Paper>
      )}
    </>
  );
}

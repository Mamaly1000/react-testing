import { Typography, useTheme } from "@mui/material";

const Mui_Mode = () => {
  const theme = useTheme();
  return (
    <div className="">
      <Typography title="theme-text-element" component={"h1"}>
        {theme.palette.mode} mode
      </Typography>
    </div>
  );
};

export default Mui_Mode;

import Button from "@mui/material/Button";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

export default function MyButton(props: any) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const customTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: "linear-gradient(to right, #e35ff5, #4729a3)",
            color: "white",
            width: "10vw",
            borderRadius: "30px",
            marginTop: "20px",
            "&:hover": {
              opacity: 0.7
            },
            [theme.breakpoints.down("md")]: {
              width: "40vw"
            }
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Button {...rest}>{children}</Button>
    </ThemeProvider>
  );
}

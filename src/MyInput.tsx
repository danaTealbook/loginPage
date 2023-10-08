import { ThemeProvider, createTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";

const customTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "10px",
          backgroundColor: "#cc2fe0",
          color: "white",
          marginBottom: "10px",
          borderRadius: "30px"
          // "&:focus": {
          //   opacity: 0.7,
          //   border: "2px solid #811adb"
          // }
        }
      }
    }
  }
});

export default function MyInput(props: any) {
  const { ...rest } = props;
  return (
    <ThemeProvider theme={customTheme}>
      <Input {...rest} disableUnderline={true} />
    </ThemeProvider>
  );
}

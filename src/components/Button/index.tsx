import { Button } from "@mui/material";

interface ButtonProps {
  onClick?: () => void;
  children: JSX.Element | string;
}
const App = (props: ButtonProps) => {
  const { onClick, children } = props;

  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={{
        width: 190,
        borderRadius: 10,
        cursor: "pointer",
        color: "#fff",
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

export default App;

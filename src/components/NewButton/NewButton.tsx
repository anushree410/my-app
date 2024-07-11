import Button from "@mui/material/Button";

function NewButton(props: any) {
  const { variant = "primary", children, ...rest } = props;

  return (
    <Button variant="contained" className={`button`} color={variant} {...rest}>
      {props.children}
    </Button>
  );
}

export default NewButton;

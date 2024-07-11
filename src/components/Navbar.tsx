import { ReactNode } from "react";
import { AppBar, Box, Button, Typography, Toolbar, Link } from "@mui/material";
const NavLink = ({
  children,
  link,
}: {
  children?: ReactNode;
  link: string;
}) => {
  return (
    <Button color="inherit">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link color="inherit" underline="none" href={link}>
          {children}
        </Link>
      </Typography>
    </Button>
  );
};
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink link="/bmi_calc">BMI Calc</NavLink>
          <NavLink link="/notes">Notes Redux</NavLink>
          <NavLink link="/todo">ToDoList Hooks</NavLink>
          <NavLink link="/todo_redux">ToDoList Redux</NavLink>
          <NavLink link="/todo_spring">ToDoList Spring</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    // <>
    //   <table>
    //     <td>
    //       <a href="/bmi_calc">BMI Calculator</a>
    //     </td>
    //     <td>
    //       <a href="/notes">Notes</a>
    //     </td>
    //     <td>
    //       <a href="/todo">To do list (Hooks)</a>
    //     </td>
    //     <td>
    //       <a href="/todo_redux">To do list (Redux)</a>
    //     </td>
    //   </table>
    // </>
  );
}

export default Navbar;

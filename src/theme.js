import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: cyan[700],
          light: cyan[50],
          dark: cyan[700]
      },
      secondary: pink,
    },
    status: {
      danger: 'orange',
    },
  });

  console.log(theme);

  export default theme
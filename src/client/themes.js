import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

export const light = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    background: {
      default: grey[50],
    },
  },
});

export default light;

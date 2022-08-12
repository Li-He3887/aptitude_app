import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0054a6'
    },
    secondary: {
      main: '#2da44a'
    },
    background: {
      default: '#fff'
    }
  }
})

export default responsiveFontSizes(theme)

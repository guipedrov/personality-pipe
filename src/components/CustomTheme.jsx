import { createTheme } from "@mui/material/styles";

export const CustomTheme = createTheme({
components: {
  MuiMenuItemRoot: {
    variants: [
      {
        props: { variant: 'clean'},
        style: {
          justifyContent: 'center',
          textAlign: 'start',
          //decoration:
          fontFamily: "'Darker Grotesque', sans-serif", 
          color: '#0f0f0f',
          fontSize: '1.3em',
          fontWeight: '600',
          borderBottom: '1px solid #ccccccbb',
          textTransform: 'none',
          textDecoration: 'none',
        }
      }
    ]
  },
  MuiListRoot: {
    variants: [
      {
        props: { variant: 'menu'},
        style: {
          justifyContent: 'center',
          textAlign: 'start',
          //decoration:
          fontFamily: "'Darker Grotesque', sans-serif", 
          color: '#1b1b1b',
          fontSize: '1.2em',
          fontWeight: '600',
          textTransform: 'none',
          textDecoration: 'none',
        }
      }
    ]
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'grotesque'},
        style: {
          textTransform: 'none',
          display: 'inline',
          fontFamily: "'Darker Grotesque', sans-serif",
          fontWeight: '600',
          fontStretch: 'normal',
          color: '#949494',
          fontSize: '1.4em',
          alignItems: 'center',
          alignSelf: 'center',
        }
      },
      {
        props: { variant: 'bond' },
        style: {
          fontFamily: "'Darker Grotesque', sans-serif",
          fontWeight: '700',
          fontSize: '1.9em',
          color: '#ffffff',
          fontSize: '1.55em',
          alignItems: 'center',
          alignSelf: 'center',
      }
    }
    ]
  },
  MuiTable: {
    variants: [
      {
        props: { variant: 'as4letras'},
        style: {
          textTransform: 'none',
          fontFamily: "'Darker Grotesque', sans-erif",
          fontWeight: '700',
          fontSytleIcWidth: '1px',
          fontStretch: 'normal',
          color: '#999999',
          fontSize: '1.5em',
          background: '#ffffff',
          margin: '1em',
          borderRadius: '17px',
          textDecoration: 'none',
        }
      }
    ]
  }
}
});




// const ClearMenu = styled(Menu)(({ theme }) => ({
//   fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"'],
//   backgroundColor: "#fff000",
//   "& .MuiSlider-thumb": {
//     "&:hover, &.Mui-focusVisible": {
//       boxShadow: `0px 0px 0px 8px '#999999'`,
//     },
//     "&.Mui-active": {
//       boxShadow: `0px 0px 0px 14px '#444444'`,
//     },
//   },
// }));
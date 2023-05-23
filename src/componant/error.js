import './error.css'
import { Link } from "react-router-dom";
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';

function Error () {
  
      
      return (
  <div id='errorpage'>
        <img id='errorimg' src="https://www.seekpng.com/png/detail/212-2123411_404-error-error-404.png" alt="404-error - Error 404@seekpng.com"/>
        <div id='oops'>
            <h1>Oops! You seem to be lost.</h1>
        </div>
          
          <Button id='GoBack'
            href="/"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            )}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back to dashboard
          </Button>
  </div>
)};

export default Error;

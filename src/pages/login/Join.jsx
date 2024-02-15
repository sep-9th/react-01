import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Email from './certify/Email';
import Detail from './certify/Detail';
import Review from './certify/Review';
import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const steps = ['이메일 인증', '상세정보 기입', '가입완료'];

const Join = () => {
    const joinLocation = useLocation();
    const [disabled, setDisabled] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    const [nextUnlock1, setNextUnlock1] = useState(false);
    const [nextUnlock2, setNextUnlock2] = useState(false);
    const [emailPanel, setEmailPanel] = useState([]);
    const [detailPanel, setDetailPanel] = useState([]);
    const [finalConfirm, setFinalConfirm] = useState([]);

    useEffect(()=>{
      if(activeStep === 0)
        setDetailPanel([]);
      else if(activeStep === 2)
        setDisabled(false);
    }, [activeStep])

    useEffect(()=>{
      console.log(disabled);
    }, [disabled])

    useEffect(()=>{
      if((activeStep === 0 && nextUnlock1) || (activeStep === 1 && nextUnlock2))
        setDisabled(false);
      else
        setDisabled(true);
    }, [nextUnlock1, nextUnlock2])

    function getStepContent(step) {
      switch (step) {
        case 0:
          return <Email nextUnlock1={nextUnlock1} setNextUnlock1 ={setNextUnlock1}
                  emailPanel={emailPanel} setEmailPanel={setEmailPanel}/>;
        case 1:
          return <Detail nextUnlock2={nextUnlock2} setNextUnlock2 ={setNextUnlock2}
                  detailPanel={detailPanel} setDetailPanel={setDetailPanel}/>;
        case 2:
          return <Review finalConfirm={finalConfirm}/>;
        default:
          throw new Error('Unknown step');
      }
    }

  const handleNext = () => {
    switch(activeStep){
      case 0:
          setFinalConfirm(emailPanel);
          setDisabled(true);
          
          if(detailPanel.length === 0)
            setDetailPanel([
              {key : 'FirstName', value : ''},
              {key : 'LastName', value : ''},
              {key : 'Address Line 1', value : ''},
              {key : 'Address Line 2', value : ''},
              {key : 'City', value : ''},
              {key : 'Zip/Postal Code', value : ''},
              {key : 'State', value : ''},
              {key : 'Country', value : ''}
            ])
        break;
      case 1:
        setFinalConfirm(emailPanel.concat(detailPanel));
        setDisabled(true);
        break;
      case 2:
        alert('');
        break;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={disabled}
                >
                  {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default Join;
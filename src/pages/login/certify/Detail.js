import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function Detail({nextUnlock2, setNextUnlock2, detailPanel, setDetailPanel}) {
  useEffect(()=>{
    setNextUnlock2(false);
  }, [])

  debugger;
  
  const [firstName, setFirstName] = useState(detailPanel[0].value || '');
  const [lastName, setLastName] = useState(detailPanel[1].value || '');
  const [addr1, setAddr1] = useState(detailPanel[2].value || '');
  const [addr2, setAddr2] = useState(detailPanel[3].value || '');
  const [city, setCity] = useState(detailPanel[4].value || '');
  const [zipCode, setZipCode] = useState(detailPanel[5].value || '');
  const [country, setCountry] = useState(detailPanel[6].value || '');
  const [state, setState] = useState(detailPanel[7].value || '');

  useEffect(()=>{
    if(firstName && lastName && addr1 && addr2 && city && zipCode && country){
      setNextUnlock2(true);
      setDetailPanel([
        {key : 'FirstName', value : firstName},
        {key : 'LastName', value : lastName},
        {key : 'Address Line 1', value : addr1},
        {key : 'Address Line 2', value : addr2},
        {key : 'City', value : city},
        {key : 'Zip/Postal Code', value : zipCode},
        {key : 'State', value : state},
        {key : 'Country', value : country}
      ]);
    }else
      setNextUnlock2(false);
  }, [firstName, lastName, addr1, addr2, city, zipCode, country])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value={addr1}
            onChange={(e)=>{setAddr1(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value={addr2}
            onChange={(e)=>{setAddr2(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            value={state}
            onChange={(e)=>{setState(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={zipCode}
            onChange={(e)=>{setZipCode(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={country}
            onChange={(e)=>{setCountry(e.target.value)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
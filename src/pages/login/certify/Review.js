import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Review({finalConfirm}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Check User Info!
      </Typography>
      <List disablePadding>
        {finalConfirm.map((info) => (
          <ListItem key={info.key} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={info.key} secondary={info.value} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
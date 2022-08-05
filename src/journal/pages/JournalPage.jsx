import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NingunaSeleccionadaView, NoteView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Ad amet veniam velit adipisicing aliquip voluptate aliqua nostrud nisi commodo laborum eu.
      </Typography> */}
      <NingunaSeleccionadaView/>
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor:'error.main', opacity: 0.9 },
          position: 'fixed',
          right:50,
          bottom: 50
        }}
      >
        <AddOutlined  sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalLayout>
  );
};

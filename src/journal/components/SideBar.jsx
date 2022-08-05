import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';



export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth}, flexShrink:{ sm:0} }}
    >
      <Drawer
        variant="permanent" // temporary
        open= { true }
        sx= {{
          display: { xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Toolbar>
          <Typography variant="h6"> Bryan Saquic </Typography>
        </Toolbar>
        <Divider/>

        <List>
          {
            ['enero','febrero','marzo', 'abril'].map( texto =>(
              <ListItem key={texto} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={texto} />
                    <ListItemText secondary={'Eu laborum ullamco occaecat cupidatat elit sunt deserunt.'} />

                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  );
};

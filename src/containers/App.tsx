import ThemeSwitch from './ThemeSwitch';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CountrySelect from './CountrySelect';
import Paper from '@material-ui/core/Paper';
import { memo } from 'react';
import AppProvider from './AppProvider';
import Tabs from './Tabs';
import ChartSection from './ChartSection';
import Controls from './Controls';

function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Box display="flex" flexDirection="row-reverse" m={1}>
        <Box>
          <ThemeSwitch />
        </Box>
      </Box>
      <Container>
        <Paper>
          <Box display="flex" p={1}>
            <CountrySelect />
          </Box>
        </Paper>
        <Box p={1}></Box>
        <Paper>
          <Box display="flex">
            <Tabs />
          </Box>
        </Paper>
        <Box p={1}></Box>
        <Paper>
          <Box display="flex" width="100%">
            <div style={{ width: '100%', height: 500 }}>
              <ChartSection />
            </div>
          </Box>
        </Paper>
        <Box p={1}></Box>
        <Paper>
          <Box p={1}>
            <Controls />
          </Box>
        </Paper>
        <Box p={1}></Box>
      </Container>
    </AppProvider>
  );
}

export default memo(App);

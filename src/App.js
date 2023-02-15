import Layout from './components/Layout/Layout';
import './App.css';

import {ThemeProvider} from '@mui/material/styles';
import themePrimary from './components/Themes/theme';


function App() {

  return (
    <ThemeProvider theme={themePrimary}>
      <div className="App">
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import RasterDisplay from './components/connected/Display';
import AppBar from './components/AppBar';

const baseTheme = createMuiTheme();

const appTheme = createMuiTheme({
    ...baseTheme,
    typography: {
        fontSize: 24
    }
});

const store = configureStore();

const App: React.FC = () => (
    <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <div style={{width: '100%', height: '100%'}}>
            <Provider store={store}>
                <AppBar />
                <RasterDisplay />
            </Provider>
        </div> 
    </ThemeProvider>
);

export default App;

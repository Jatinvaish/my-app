import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
const RootNavigation = React.lazy(() => import('./Navigation/RootNavigation'));



function App() {
  return (
    <Suspense>
      <RootNavigation />
    </Suspense>
  );
}

export default App;

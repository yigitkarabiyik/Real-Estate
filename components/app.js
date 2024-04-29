import React, { createContext, useCallback, useState } from 'react'
import Banner from './banner';
import { Container } from '@mui/material';
import navValues from '@/helpers/navValues';
import ComponentPicker from './componentPicker';

const navigationContext = createContext(navValues.home);

const App = () => {

  const navigate = useCallback (
    (navTo, param) => setNav({current: navTo, param, navigate}),
    []
  );
  const [nav, setNav] = useState({current: navValues.home, navigate});

  return (
    <navigationContext.Provider value={nav}>
      <Container>
        <Banner>
          Providing houses all over the world
        </Banner>
        <ComponentPicker currentNavLocation={nav.current}/>
      </Container>
    </navigationContext.Provider>
  )
}

export { navigationContext };
export default App;
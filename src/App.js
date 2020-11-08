import * as R from 'ramda';

import { BaseProvider, LightTheme, styled } from 'baseui';
import { SkynetClient, keyPairFromSeed } from 'skynet-js';
import { getAtPath, pushItemToField } from './services/skydb-service';

import Homepage from './pages/Homepage';
import { StatefulInput } from 'baseui/input';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { useEffect } from 'react';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Homepage />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;

import React from 'react';

import ConnectedNbColors from 'src/containers/ConnectedNbColors';
import ColorButtons from 'src/containers/ConnectedColorButtons';
import ConnectedColorsText from 'src/containers/ConnectedColorsText';
import ConnectedGradient from 'src/containers/ConnectedGradient';
import ConnectedDirectionButtons from 'src/containers/ConnectedDirectionButtons';

const App = () => (
  <div>
    <ConnectedNbColors />
    <ColorButtons />
    <ConnectedColorsText />
    <ConnectedGradient />
    <ConnectedDirectionButtons />
  </div>
);

export default App;

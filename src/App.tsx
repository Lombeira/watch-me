import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleClickButton={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
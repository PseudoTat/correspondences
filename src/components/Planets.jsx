// IMPs - ExtLib
import { Tab } from '@mui/material';
import { useState } from 'react';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@mui/lab';
// IMPs - local
import Planet from './Planet';
import {
  planets,
  planetMap,
} from '../data';

export default function Planets() {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {planets.map((planet, i) => (
          <Tab label={planet} key={i} />
        ))}
      </TabList>
      {planets.map((planet, i) => (
        <TabPanel key={i} value={i}>
          <Planet
            incenseArr={planetMap.get(planet).incense}
            materiaArr={planetMap.get(planet).materia}
          />
        </TabPanel>
      ))}
    </TabContext>
  );
}

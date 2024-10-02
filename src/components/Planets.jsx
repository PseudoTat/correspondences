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
  moonIncenseArr,
  moonMateriaArr,
  mercuryIncenseArr,
  mercuryMateriaArr,
  venusIncenseArr,
  venusMateriaArr,
  sunIncenseArr,
  sunMateriaArr,
  marsIncenseArr,
  marsMateriaArr,
  jupiterIncenseArr,
  jupiterMateriaArr,
  saturnIncenseArr,
  saturnMateriaArr,
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
      <TabPanel value={0}>
        <Planet incenseArr={moonIncenseArr}    materiaArr={moonMateriaArr}    />
      </TabPanel>
      <TabPanel value={1}>
        <Planet incenseArr={mercuryIncenseArr} materiaArr={mercuryMateriaArr} />
      </TabPanel>
      <TabPanel value={2}>
        <Planet incenseArr={venusIncenseArr}   materiaArr={venusMateriaArr}   />
      </TabPanel>
      <TabPanel value={3}>
        <Planet incenseArr={sunIncenseArr}     materiaArr={sunMateriaArr}     />
      </TabPanel>
      <TabPanel value={4}>
        <Planet incenseArr={marsIncenseArr}    materiaArr={marsMateriaArr}    />
      </TabPanel>
      <TabPanel value={5}>
        <Planet incenseArr={jupiterIncenseArr} materiaArr={jupiterMateriaArr} />
      </TabPanel>
      <TabPanel value={6}>
        <Planet incenseArr={saturnIncenseArr}  materiaArr={saturnMateriaArr}  />
      </TabPanel>
    </TabContext>
  );
}

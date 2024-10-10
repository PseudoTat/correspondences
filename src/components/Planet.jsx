// IMPs - ExtLib
import * as React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// IMPs - local
import {
  incenseCols,
  materiaCols,
  makeIncenseRows,
  makeMateriaRows,
} from '../utils';

const CustomAccordion = ({ title, rows, cols }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
      {title}
    </AccordionSummary>
    <AccordionDetails>
      <DataGrid
        rows={rows}
        columns={cols}
        disableRowSelectionOnClick
        disableColumnSelector
        hideFooter
        hideFooterPagination
        hideFooterSelectedRowCount
      />
    </AccordionDetails>
  </Accordion>
);

// MAIN
export default function Planet({ incenseArr, materiaArr }) {
  const incenseRows = makeIncenseRows(incenseArr);
  const materiaRows = makeMateriaRows(materiaArr);

  return (
    <>
      <CustomAccordion
        title="Incense"
        rows={incenseRows}
        cols={incenseCols}
      />
      <CustomAccordion
        title="Materia"
        rows={materiaRows}
        cols={materiaCols}
      />
    </>
  );
}

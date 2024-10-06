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

// MAIN
export default function Planet({ incenseArr, materiaArr }) {
  const incenseRows = makeIncenseRows(incenseArr);
  const materiaRows = makeMateriaRows(materiaArr);

  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          Incense
        </AccordionSummary>
        <AccordionDetails>
          <DataGrid
            rows={incenseRows}
            columns={incenseCols}
            disableRowSelectionOnClick
            disableColumnSelector
            hideFooter
            hideFooterPagination
            hideFooterSelectedRowCount
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          Materia
        </AccordionSummary>
        <AccordionDetails>
          <DataGrid
            rows={materiaRows}
            columns={materiaCols}
            disableRowSelectionOnClick
            disableColumnSelector
            hideFooter
            hideFooterPagination
            hideFooterSelectedRowCount
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

// INCENSE /////////////////////////////////////////////////////////////////////
const incenseCols = [
  { field: 'source',  headerName: 'Source',  minWidth: 150, width: 150 },
  { field: 'incense', headerName: 'Incense', minWidth: 150, width: 300 },
];

const makeIncenseRows = incenseArr => ([
  { id: 1, source: 'PGM',           incense: incenseArr[0] },
  { id: 2, source: 'Abano',         incense: incenseArr[1] },
  { id: 3, source: 'Agrippa',       incense: incenseArr[2] },
  { id: 4, source: 'Liber Juratus', incense: incenseArr[3] },
  { id: 5, source: 'VK Solomon',    incense: incenseArr[4] },
]);


// MATERIA /////////////////////////////////////////////////////////////////////
const materiaCols = [
  { field: 'source',  headerName: 'Source',  minWidth: 150, width: 150 },
  { field: 'materia', headerName: 'Materia', minWidth: 150, width: 600 },
];

const makeMateriaRows = materiaArr =>([
  {
    id: 1,
    source: 'Al-Biruni',
    materia: materiaArr[0],
  },
  {
    id: 2,
    source: 'William Lily',
    materia: materiaArr[1],
  },
  {
    id: 3,
    source: 'Giorgio Anselmi',
    materia: materiaArr[2],
  },
  {
    id: 4,
    source: 'William Ramesey',
    materia: materiaArr[3],
  },
]);


// EXPs ////////////////////////////////////////////////////////////////////////
export {
  incenseCols,
  materiaCols,
  makeIncenseRows,
  makeMateriaRows,
};

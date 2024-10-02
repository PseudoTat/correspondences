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

export {
  materiaCols,
  makeMateriaRows,
};

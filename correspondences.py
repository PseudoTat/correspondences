#!/usr/bin/env python3

# IMPs ########################################################################
from data import (
  win,
  txt,
  tbg,
  tab,
  tab_group_incense,
  tab_group_materia,
)


# DATA ########################################################################
tab_layout_incense = [
  [txt('INCENSE')],
  [tbg([tab_group_incense])],
]

tab_layout_materia = [
  [txt('MATERIA')],
  [tbg([tab_group_materia])],
]

window = win(
  '-=[ Correspondences ]=-',
  [[
    tbg([[
      tab('INCENSE', tab_layout_incense),
      tab('MATERIA', tab_layout_materia),
    ]])
  ]],
)


# MAIN ########################################################################
while True:
  e, vals = window.read()
  if (e == sg.WIN_CLOSED):
    break
window.close()

# IMPs #########################################################################
import PySimpleGUI as sg


# SG ###########################################################################
tab = sg.Tab
txt = lambda x: sg.Text(
  x,
  auto_size_text=True,
  justification='left',
)
tbg = lambda x: sg.TabGroup(
  x,
  expand_x=True,
)
col = lambda x, expand_x=False: sg.Column(
  x,
  expand_x=expand_x,
  justification='left',
  element_justification='left',
)
out = lambda txt: sg.Input(
  txt,
  expand_x=True,
  readonly=True,
  disabled_readonly_background_color='gray',
  justification='left',
)
win = lambda name, arr: sg.Window(
  name,
  arr,
  font=('Arial', 15),
  resizable=True,
  auto_size_text=True,
  text_justification='left',
)


# author cols ##################################################################
incense_author_col = lambda: [
  [txt('PGM')],
  [txt('Abano')],
  [txt('Agrippa')],
  [txt('Liber Juratus')],
  [txt('VK Solomon')],
]

materia_author_col = lambda: [
  [txt('Al-Biruni')],
  [txt('William Lily')],
  [txt('Giorgio Anselmi')],
  [txt('William Ramesey')],
]


# incense ######################################################################
incense_mon_col = [
  [out('myrrh')],
  [out('aloes')],
  [out('myrtle')],
  [out('myrtle')],
  [out('powdered loadstone')],
]

incense_wed_col = [
  [out('cassia')],
  [out('mastic')],
  [out('cinnamon')],
  [out('cinnamon')],
  [out('juniper')],
]

incense_fri_col = [
  [out('spikenard')],
  [out('pepperwort')],
  [out('saffron')],
  [out('saffron')],
  [out('musk')],
]

incense_sun_col = [
  [out('frankincense')],
  [out('red sandalwood')],
  [out('mastic')],
  [out('mastic')],
  [out('mastic')],
]

incense_tue_col = [
  [out('costus')],
  [out('pepperwood')],
  [out('aloes')],
  [out('aloes')],
  [out('aloes')],
]

incense_thu_col = [
  [out('bay laurel')],
  [out('saffron')],
  [out('nutmeg')],
  [out('mace')],
  [out('mace')],
]

incense_sat_col = [
  [out('storax')],
  [out('sulphur')],
  [out('pepperwort')],
  [out('costus')],
  [out('sulphur')],
]


# materia ######################################################################
materia_mon_col = [
  [out('glass, emerald, moonstone, crystal, any white stone, anything made from silver')],
  [out('silver, selenite, all soft stones, crystals')],
  [out('silver')],
  [out('silver')],
]

materia_wed_col = [
  [out('amber, coral, any green stone, any coin struck with a name or number')],
  [out('quicksilver, milestone, topaz, vitriol, stones of mixed colors')],
  [out('congealed quicksilver, silver')],
  [out('quicksilver, books, parchment, paper')],
]

materia_fri_col = [
  [out('pearls, brass, silver, gold')],
  [out('copper, brass, cronelian, sapphire, coral, lapis, alabaster')],
  [out('bright metals, silver')],
  [out('copper, brass, alabaster, white amber, silk linen')],
]

materia_sun_col = [
  [out('lapis lazuli, glass, marble, gold')],
  [out('any shining or fire-like stone, gold, hyacinth, adamant, ruby')],
  [out('gold')],
  [out('gold, yellow amber')],
]

materia_tue_col = [
  [out('magnetic iron, copper')],
  [out('iron, brimstone/sulphur, ochre, lodestone, bloodstone, jasper')],
  [out('iron, copper')],
  [out('iron, steel, brick, flint, charcoal, loadstone')],
]

materia_thu_col = [
  [out('tin, any white or yellow stone, brass, diamond')],
  [out('tin, amethyst, topaz, marble, free stone')],
  [out('white tin')],
  [out('tin, pewter, wool cloth')],
]

materia_sat_col = [
  [out('iron slag, lead, lithic stones')],
  [out('lead, ledstone, any metal waste, dust, sapphire, any black stone')],
  [out('lead')],
  [out('black cloth, wood (esp. cedar), lead, dark stones, clay or earthenware')],
]


# tab group - incense ##########################################################
tab_group_incense = [
  tab('Moon',    [[
    col(incense_author_col()),
    col(incense_mon_col, True),
  ]]),
  tab('Mercury', [[
    col(incense_author_col()),
    col(incense_wed_col, True),
  ]]),
  tab('Venus',   [[
    col(incense_author_col()),
    col(incense_fri_col, True),
  ]]),
  tab('Sun',     [[
    col(incense_author_col()),
    col(incense_sun_col, True),
  ]]),
  tab('Mars',    [[
    col(incense_author_col()),
    col(incense_tue_col, True),
  ]]),
  tab('Jupiter', [[
    col(incense_author_col()),
    col(incense_thu_col, True),
  ]]),
  tab('Saturn',  [[
    col(incense_author_col()),
    col(incense_sat_col, True),
  ]]),
]


# tab group - materia ##########################################################
tab_group_materia = [
  tab('Moon',    [[
    col(materia_author_col()),
    col(materia_mon_col, True),
  ]]),
  tab('Mercury', [[
    col(materia_author_col()),
    col(materia_wed_col, True),
  ]]),
  tab('Venus',   [[
    col(materia_author_col()),
    col(materia_fri_col, True),
  ]]),
  tab('Sun',     [[
    col(materia_author_col()),
    col(materia_sun_col, True),
  ]]),
  tab('Mars',    [[
    col(materia_author_col()),
    col(materia_tue_col, True),
  ]]),
  tab('Jupiter', [[
    col(materia_author_col()),
    col(materia_thu_col, True),
  ]]),
  tab('Saturn',  [[
    col(materia_author_col()),
    col(materia_sat_col, True),
  ]]),
]

interface SearchableItem {
  id: number;
  parent_id: number | null;
  category: string;
}

// Sample data array
const items: SearchableItem[] = [
  {
    id: 1,
    parent_id: null,
    category: "Appliances",
  },
  {
    id: 2,
    parent_id: null,
    category: "Asphalt",
  },
  {
    id: 3,
    parent_id: null,
    category: "Audio Visual Equipment",
  },
  {
    id: 4,
    parent_id: null,
    category: "Bath Accessories",
  },
  {
    id: 5,
    parent_id: null,
    category: "Cabinetry And Casework",
  },
  {
    id: 6,
    parent_id: null,
    category: "Concrete",
  },
  {
    id: 7,
    parent_id: null,
    category: "Conveyance Equipment",
  },
  {
    id: 8,
    parent_id: null,
    category: "Countertops",
  },
  {
    id: 9,
    parent_id: null,
    category: "Doors",
  },
  {
    id: 10,
    parent_id: null,
    category: "Drywall",
  },
  {
    id: 11,
    parent_id: null,
    category: "Electrical",
  },
  {
    id: 12,
    parent_id: null,
    category: "Firesprinklers",
  },
  {
    id: 13,
    parent_id: null,
    category: "Flooring",
  },
  {
    id: 14,
    parent_id: null,
    category: "Furniture/Furnishings",
  },
  {
    id: 15,
    parent_id: null,
    category: "Glass And Glazing",
  },
  {
    id: 16,
    parent_id: null,
    category: "Granite/Marble/Etc. Slabs",
  },
  {
    id: 17,
    parent_id: null,
    category: "Gutters/Downspouts",
  },
  {
    id: 18,
    parent_id: null,
    category: "Hardware",
  },
  {
    id: 19,
    parent_id: null,
    category: "Insulation",
  },
  {
    id: 20,
    parent_id: null,
    category: "Landscaping",
  },
  {
    id: 21,
    parent_id: null,
    category: "Lumber",
  },
  {
    id: 22,
    parent_id: null,
    category: "Masonry",
  },
  {
    id: 23,
    parent_id: null,
    category: "Mechanical",
  },
  {
    id: 24,
    parent_id: null,
    category: "Metals",
  },
  {
    id: 25,
    parent_id: null,
    category: "Millwork - Interior",
  },
  {
    id: 26,
    parent_id: null,
    category: "Millwork - Exterior",
  },
  {
    id: 27,
    parent_id: null,
    category: "Office Equipment",
  },
  {
    id: 28,
    parent_id: null,
    category: "Painting And Wallcovering",
  },
  {
    id: 29,
    parent_id: null,
    category: "Plumbing",
  },
  {
    id: 30,
    parent_id: null,
    category: "Roofing",
  },
  {
    id: 31,
    parent_id: null,
    category: "Sheetmetal",
  },
  {
    id: 32,
    parent_id: null,
    category: "Site",
  },
  {
    id: 33,
    parent_id: null,
    category: "Soil",
  },
  {
    id: 34,
    parent_id: null,
    category: "Specialties",
  },
  {
    id: 35,
    parent_id: null,
    category: "Sports Equipment",
  },
  {
    id: 36,
    parent_id: null,
    category: "Stucco/Plaster",
  },
  {
    id: 37,
    parent_id: null,
    category: "Tile",
  },
  {
    id: 38,
    parent_id: null,
    category: "Underground Infrastructure",
  },
  {
    id: 39,
    parent_id: null,
    category: "Windows",
  },
  {
    id: 40,
    parent_id: 1,
    category: "Barbeque",
  },
  {
    id: 41,
    parent_id: 1,
    category: "Cooktop",
  },
  {
    id: 42,
    parent_id: 1,
    category: "Dishwasher",
  },
  {
    id: 43,
    parent_id: 1,
    category: "Dryer",
  },
  {
    id: 44,
    parent_id: 1,
    category: "Microwave",
  },
  {
    id: 45,
    parent_id: 1,
    category: "Oven",
  },
  {
    id: 46,
    parent_id: 1,
    category: "Range",
  },
  {
    id: 47,
    parent_id: 1,
    category: "Refrigerator",
  },
  {
    id: 48,
    parent_id: 1,
    category: "Refrigerator - Undercounter",
  },
  {
    id: 49,
    parent_id: 1,
    category: "Vacuum",
  },
  {
    id: 50,
    parent_id: 1,
    category: "Washing Machine",
  },
  {
    id: 51,
    parent_id: 2,
    category: "Asphalt",
  },
  {
    id: 52,
    parent_id: 3,
    category: "Boom Boxes",
  },
  {
    id: 53,
    parent_id: 3,
    category: "Projection Screens",
  },
  {
    id: 54,
    parent_id: 3,
    category: "Speakers",
  },
  {
    id: 55,
    parent_id: 4,
    category: "Glass Shelf",
  },
  {
    id: 56,
    parent_id: 4,
    category: "Grab Bars",
  },
  {
    id: 57,
    parent_id: 4,
    category: "Medicine Cabinet",
  },
  {
    id: 58,
    parent_id: 4,
    category: "Paper Towel Dispenser",
  },
  {
    id: 59,
    parent_id: 4,
    category: "Rob Hooks",
  },
  {
    id: 60,
    parent_id: 4,
    category: "Shower Caddie",
  },
  {
    id: 61,
    parent_id: 4,
    category: "Shower Rod/Curtain",
  },
  {
    id: 62,
    parent_id: 4,
    category: "Soap Dispenser",
  },
  {
    id: 63,
    parent_id: 4,
    category: "Toilet Paper Dispenser",
  },
  {
    id: 64,
    parent_id: 4,
    category: "Toilet Paper Holder",
  },
  {
    id: 65,
    parent_id: 4,
    category: "Towel Bar",
  },
  {
    id: 66,
    parent_id: 4,
    category: "Towel Ring",
  },
  {
    id: 67,
    parent_id: 5,
    category: "Cabinets - Painted",
  },
  {
    id: 68,
    parent_id: 5,
    category: "Cabinets - Stain Grade",
  },
  {
    id: 69,
    parent_id: 6,
    category: "Car Bumpers",
  },
  {
    id: 70,
    parent_id: 6,
    category: "Curbs And Gutters",
  },
  {
    id: 71,
    parent_id: 6,
    category: "Flatwork",
  },
  {
    id: 72,
    parent_id: 6,
    category: "Grade Beams",
  },
  {
    id: 73,
    parent_id: 6,
    category: "Piers",
  },
  {
    id: 74,
    parent_id: 6,
    category: "Structural Columns",
  },
  {
    id: 75,
    parent_id: 6,
    category: "Structural Floor Decks",
  },
  {
    id: 76,
    parent_id: 6,
    category: "Structural Slabs",
  },
  {
    id: 77,
    parent_id: 6,
    category: "Structural Walls",
  },
  {
    id: 78,
    parent_id: 7,
    category: "Automated Vehicle Storage And Retrieval Systems",
  },
  {
    id: 79,
    parent_id: 7,
    category: "Dumbwaiters",
  },
  {
    id: 80,
    parent_id: 7,
    category: "Elevators",
  },
  {
    id: 81,
    parent_id: 7,
    category: "Escalators",
  },
  {
    id: 82,
    parent_id: 7,
    category: "Lift Systems For Accessibility",
  },
  {
    id: 83,
    parent_id: 7,
    category: "Moving Walks",
  },
  {
    id: 84,
    parent_id: 7,
    category: "Pneumatic Tube Systems",
  },
  {
    id: 85,
    parent_id: 8,
    category: "Engineered Stone",
  },
  {
    id: 86,
    parent_id: 8,
    category: "Natural Stone",
  },
  {
    id: 87,
    parent_id: 8,
    category: "Plastic Laminate",
  },
  {
    id: 88,
    parent_id: 9,
    category: "Doors No Glass",
  },
  {
    id: 89,
    parent_id: 9,
    category: "Doors With Glass",
  },
  {
    id: 90,
    parent_id: 9,
    category: "Garage Door Opener",
  },
  {
    id: 91,
    parent_id: 9,
    category: "Garage Doors",
  },
  {
    id: 92,
    parent_id: 9,
    category: "Screen Doors",
  },
  {
    id: 93,
    parent_id: 10,
    category: "Drywall",
  },
  {
    id: 94,
    parent_id: 11,
    category: "2X4 Compact Florescent Lghts",
  },
  {
    id: 95,
    parent_id: 11,
    category: "Breaker Boxes",
  },
  {
    id: 96,
    parent_id: 11,
    category: "Ceiling Fans",
  },
  {
    id: 97,
    parent_id: 11,
    category: "Decorative Lights",
  },
  {
    id: 98,
    parent_id: 11,
    category: "Disconnects",
  },
  {
    id: 99,
    parent_id: 11,
    category: "Emergency Lights",
  },
  {
    id: 100,
    parent_id: 11,
    category: "Exit Signs",
  },
  {
    id: 101,
    parent_id: 11,
    category: "Main Panel",
  },
  {
    id: 102,
    parent_id: 11,
    category: "Recessed Can Lights",
  },
  {
    id: 103,
    parent_id: 11,
    category: "Subpanel",
  },
  {
    id: 104,
    parent_id: 11,
    category: "Switchgear",
  },
  {
    id: 105,
    parent_id: 11,
    category: "Track Lighting",
  },
  {
    id: 106,
    parent_id: 11,
    category: "Light Fixtures - Exterior",
  },
  {
    id: 107,
    parent_id: 12,
    category: "Firesprinklers",
  },
  {
    id: 108,
    parent_id: 13,
    category: "Carpet",
  },
  {
    id: 109,
    parent_id: 13,
    category: "Carpet Tiles",
  },
  {
    id: 110,
    parent_id: 13,
    category: "Cork",
  },
  {
    id: 111,
    parent_id: 13,
    category: "Hardwood",
  },
  {
    id: 112,
    parent_id: 13,
    category: "Lvp",
  },
  {
    id: 113,
    parent_id: 13,
    category: "Resilient",
  },
  {
    id: 114,
    parent_id: 13,
    category: "Rubber",
  },
  {
    id: 115,
    parent_id: 13,
    category: "Vct",
  },
  {
    id: 116,
    parent_id: 14,
    category: "Bar Stools",
  },
  {
    id: 117,
    parent_id: 14,
    category: "Bean Bag Seats",
  },
  {
    id: 118,
    parent_id: 14,
    category: "Bed - Frame",
  },
  {
    id: 119,
    parent_id: 14,
    category: "Bed - Mattress",
  },
  {
    id: 120,
    parent_id: 14,
    category: "Chairs",
  },
  {
    id: 121,
    parent_id: 14,
    category: "Chaise Lounge",
  },
  {
    id: 122,
    parent_id: 14,
    category: "Church Pews",
  },
  {
    id: 123,
    parent_id: 14,
    category: "Couches",
  },
  {
    id: 124,
    parent_id: 14,
    category: "Curtains For Dividers",
  },
  {
    id: 125,
    parent_id: 14,
    category: "Curtains For Windows",
  },
  {
    id: 126,
    parent_id: 14,
    category: "Cushions",
  },
  {
    id: 127,
    parent_id: 14,
    category: "Desk",
  },
  {
    id: 128,
    parent_id: 14,
    category: "Dishware",
  },
  {
    id: 129,
    parent_id: 14,
    category: "Drying Racks",
  },
  {
    id: 130,
    parent_id: 14,
    category: "Fireplace Accessories",
  },
  {
    id: 131,
    parent_id: 14,
    category: "Folding Chairs",
  },
  {
    id: 132,
    parent_id: 14,
    category: "Folding Tables",
  },
  {
    id: 133,
    parent_id: 14,
    category: "Glassware",
  },
  {
    id: 134,
    parent_id: 14,
    category: "Mirrors - Framed",
  },
  {
    id: 135,
    parent_id: 14,
    category: "Organizer Trays",
  },
  {
    id: 136,
    parent_id: 14,
    category: "Pillows",
  },
  {
    id: 137,
    parent_id: 14,
    category: "Portable Stages",
  },
  {
    id: 138,
    parent_id: 14,
    category: "Rugs",
  },
  {
    id: 139,
    parent_id: 14,
    category: "Storage Tubs - Plastic",
  },
  {
    id: 140,
    parent_id: 14,
    category: "Table Lamps",
  },
  {
    id: 141,
    parent_id: 14,
    category: "Tables",
  },
  {
    id: 142,
    parent_id: 14,
    category: "Trash Can",
  },
  {
    id: 143,
    parent_id: 14,
    category: "Tv",
  },
  {
    id: 144,
    parent_id: 14,
    category: "Utensiles",
  },
  {
    id: 145,
    parent_id: 14,
    category: "Wind Chime",
  },
  {
    id: 146,
    parent_id: 15,
    category: "Curtain Wall",
  },
  {
    id: 147,
    parent_id: 15,
    category: "Fixed Glass",
  },
  {
    id: 148,
    parent_id: 15,
    category: "Glass Block",
  },
  {
    id: 149,
    parent_id: 15,
    category: "Shower Enclosure",
  },
  {
    id: 150,
    parent_id: 15,
    category: "Stained Glass",
  },
  {
    id: 151,
    parent_id: 15,
    category: "Tub Enclosure",
  },
  {
    id: 152,
    parent_id: 16,
    category: "Granite/Marble/Etc. Slabs",
  },
  {
    id: 153,
    parent_id: 17,
    category: "Downspouts",
  },
  {
    id: 154,
    parent_id: 17,
    category: "Gutters",
  },
  {
    id: 155,
    parent_id: 17,
    category: "Lambs Tongues",
  },
  {
    id: 156,
    parent_id: 18,
    category: "Cabinet Knobs And Pulls",
  },
  {
    id: 157,
    parent_id: 18,
    category: "Deadbolt",
  },
  {
    id: 158,
    parent_id: 18,
    category: "Door Closer",
  },
  {
    id: 159,
    parent_id: 18,
    category: "Door Knob",
  },
  {
    id: 160,
    parent_id: 18,
    category: "Door Lever",
  },
  {
    id: 161,
    parent_id: 18,
    category: "Door Pulls",
  },
  {
    id: 162,
    parent_id: 18,
    category: "Entry Lockset",
  },
  {
    id: 163,
    parent_id: 18,
    category: "Panic Hardware",
  },
  {
    id: 164,
    parent_id: 18,
    category: "Security Lock With Keypad",
  },
  {
    id: 165,
    parent_id: 19,
    category: "Fiberglass Batt",
  },
  {
    id: 166,
    parent_id: 19,
    category: "Mineral Wool",
  },
  {
    id: 167,
    parent_id: 19,
    category: "Ply Iso",
  },
  {
    id: 168,
    parent_id: 20,
    category: "Benderboard",
  },
  {
    id: 169,
    parent_id: 20,
    category: "Brick Pavers",
  },
  {
    id: 170,
    parent_id: 20,
    category: "Fire Pit",
  },
  {
    id: 171,
    parent_id: 20,
    category: "Grass",
  },
  {
    id: 172,
    parent_id: 20,
    category: "Irrigation Controller",
  },
  {
    id: 173,
    parent_id: 20,
    category: "Potted Plants",
  },
  {
    id: 174,
    parent_id: 20,
    category: "Railroad Ties",
  },
  {
    id: 175,
    parent_id: 20,
    category: "Splashblocks",
  },
  {
    id: 176,
    parent_id: 20,
    category: "Stone Pavers",
  },
  {
    id: 177,
    parent_id: 20,
    category: "Stones - Large And Loose",
  },
  {
    id: 178,
    parent_id: 20,
    category: "Stones - Medium And Loose",
  },
  {
    id: 179,
    parent_id: 20,
    category: "Stones - Small And Loose",
  },
  {
    id: 180,
    parent_id: 20,
    category: "Turfblock",
  },
  {
    id: 181,
    parent_id: 21,
    category: "Beams",
  },
  {
    id: 182,
    parent_id: 21,
    category: "Cross Laminated Timbers",
  },
  {
    id: 183,
    parent_id: 21,
    category: "Columns",
  },
  {
    id: 184,
    parent_id: 21,
    category: "Dimensional",
  },
  {
    id: 185,
    parent_id: 21,
    category: "Glu Lams",
  },
  {
    id: 186,
    parent_id: 21,
    category: "Laminated Veneer Lumber",
  },
  {
    id: 187,
    parent_id: 21,
    category: "Trusses",
  },
  {
    id: 188,
    parent_id: 21,
    category: "Composite Decking",
  },
  {
    id: 189,
    parent_id: 22,
    category: "Artificial Stone",
  },
  {
    id: 190,
    parent_id: 22,
    category: "Brick",
  },
  {
    id: 191,
    parent_id: 22,
    category: "Concrete Block",
  },
  {
    id: 192,
    parent_id: 22,
    category: "Stone - Natural - Cut",
  },
  {
    id: 193,
    parent_id: 22,
    category: "Stone - Natural - Random",
  },
  {
    id: 194,
    parent_id: 22,
    category: "Stone - Slabs",
  },
  {
    id: 195,
    parent_id: 23,
    category: "Air Filtration System",
  },
  {
    id: 196,
    parent_id: 23,
    category: "Air Handler",
  },
  {
    id: 197,
    parent_id: 23,
    category: "Bath Fan",
  },
  {
    id: 198,
    parent_id: 23,
    category: "Cassettes - Wall",
  },
  {
    id: 199,
    parent_id: 23,
    category: "Chiller",
  },
  {
    id: 200,
    parent_id: 23,
    category: "Condensers",
  },
  {
    id: 201,
    parent_id: 23,
    category: "Decorative Wall Vents/Registers",
  },
  {
    id: 202,
    parent_id: 23,
    category: "Ductwork",
  },
  {
    id: 203,
    parent_id: 23,
    category: "Floor Vent Registers",
  },
  {
    id: 204,
    parent_id: 23,
    category: "Furnace",
  },
  {
    id: 205,
    parent_id: 23,
    category: "Humidifier",
  },
  {
    id: 206,
    parent_id: 23,
    category: "Return Air Grills",
  },
  {
    id: 207,
    parent_id: 23,
    category: "Supply Grills",
  },
  {
    id: 208,
    parent_id: 23,
    category: "Swamp Coolers",
  },
  {
    id: 209,
    parent_id: 23,
    category: "Thermostat",
  },
  {
    id: 210,
    parent_id: 23,
    category: "Vent Covers (Floor)",
  },
  {
    id: 211,
    parent_id: 24,
    category: "Bollards",
  },
  {
    id: 212,
    parent_id: 24,
    category: "Cable Rail",
  },
  {
    id: 213,
    parent_id: 24,
    category: "Guardrail",
  },
  {
    id: 214,
    parent_id: 24,
    category: "Handrails",
  },
  {
    id: 215,
    parent_id: 24,
    category: "Metal Fences",
  },
  {
    id: 216,
    parent_id: 24,
    category: "Metal Gates",
  },
  {
    id: 217,
    parent_id: 24,
    category: "Roof Deck",
  },
  {
    id: 218,
    parent_id: 24,
    category: "Roof Trusses",
  },
  {
    id: 219,
    parent_id: 24,
    category: "Structural Steel",
  },
  {
    id: 220,
    parent_id: 25,
    category: "Balastrade",
  },
  {
    id: 221,
    parent_id: 25,
    category: "Baseboard",
  },
  {
    id: 222,
    parent_id: 25,
    category: "Crown Moulding",
  },
  {
    id: 223,
    parent_id: 25,
    category: "Door Trim",
  },
  {
    id: 224,
    parent_id: 25,
    category: "Handrails",
  },
  {
    id: 225,
    parent_id: 25,
    category: "Mantel",
  },
  {
    id: 226,
    parent_id: 25,
    category: "Shelf And Pole",
  },
  {
    id: 227,
    parent_id: 25,
    category: "Shelving",
  },
  {
    id: 228,
    parent_id: 25,
    category: "Window Trim",
  },
  {
    id: 229,
    parent_id: 25,
    category: "Wood Paneling",
  },
  {
    id: 230,
    parent_id: 25,
    category: "Wood Shelves",
  },
  {
    id: 231,
    parent_id: 26,
    category: "Arbor",
  },
  {
    id: 232,
    parent_id: 26,
    category: "Channel Siding",
  },
  {
    id: 233,
    parent_id: 26,
    category: "Decking",
  },
  {
    id: 234,
    parent_id: 26,
    category: "Gazebo",
  },
  {
    id: 235,
    parent_id: 26,
    category: "Lap Siding",
  },
  {
    id: 236,
    parent_id: 26,
    category: "Shingle Siding",
  },
  {
    id: 237,
    parent_id: 26,
    category: "Trellis",
  },
  {
    id: 238,
    parent_id: 26,
    category: "Wood Soffit",
  },
  {
    id: 239,
    parent_id: 27,
    category: "Computer Keyboards",
  },
  {
    id: 240,
    parent_id: 27,
    category: "Computer Screens",
  },
  {
    id: 241,
    parent_id: 27,
    category: "Computers",
  },
  {
    id: 242,
    parent_id: 27,
    category: "Copiers",
  },
  {
    id: 243,
    parent_id: 27,
    category: "Printers",
  },
  {
    id: 244,
    parent_id: 28,
    category: "Painting And Wallcovering",
  },
  {
    id: 245,
    parent_id: 29,
    category: "Backflow Preventer",
  },
  {
    id: 246,
    parent_id: 29,
    category: "Bathtub",
  },
  {
    id: 247,
    parent_id: 29,
    category: "Boiler",
  },
  {
    id: 248,
    parent_id: 29,
    category: "Drinking Fountains - Porcelain",
  },
  {
    id: 249,
    parent_id: 29,
    category: "Drinking Fountains - Stainless",
  },
  {
    id: 250,
    parent_id: 29,
    category: "Faucets",
  },
  {
    id: 251,
    parent_id: 29,
    category: "Pressure Reducer Valve",
  },
  {
    id: 252,
    parent_id: 29,
    category: "Shower Head",
  },
  {
    id: 253,
    parent_id: 29,
    category: "Sinks - Pedestal",
  },
  {
    id: 254,
    parent_id: 29,
    category: "Sinks - Porcelain",
  },
  {
    id: 255,
    parent_id: 29,
    category: "Sinks - Stainless Steel",
  },
  {
    id: 256,
    parent_id: 29,
    category: "Toilets - Floor Mount",
  },
  {
    id: 257,
    parent_id: 29,
    category: "Toilets - Wall Mount",
  },
  {
    id: 258,
    parent_id: 29,
    category: "Tub Spout",
  },
  {
    id: 259,
    parent_id: 29,
    category: "Urinal",
  },
  {
    id: 260,
    parent_id: 29,
    category: "Water Heater - Tank",
  },
  {
    id: 261,
    parent_id: 29,
    category: "Water Heater - Tankless",
  },
  {
    id: 262,
    parent_id: 30,
    category: "Composition",
  },
  {
    id: 263,
    parent_id: 30,
    category: "Epdm",
  },
  {
    id: 264,
    parent_id: 30,
    category: "Metal",
  },
  {
    id: 265,
    parent_id: 30,
    category: "Tpo",
  },
  {
    id: 266,
    parent_id: 30,
    category: "Wood Shingle Or Shakes",
  },
  {
    id: 267,
    parent_id: 31,
    category: "Sheetmetal Misc",
  },
  {
    id: 268,
    parent_id: 31,
    category: "Soffit Vent",
  },
  {
    id: 269,
    parent_id: 32,
    category: "Decks",
  },
  {
    id: 270,
    parent_id: 32,
    category: "Fencing -  Wood",
  },
  {
    id: 271,
    parent_id: 32,
    category: "Fencing - Metal",
  },
  {
    id: 272,
    parent_id: 32,
    category: "Sheds",
  },
  {
    id: 273,
    parent_id: 33,
    category: "Soil",
  },
  {
    id: 274,
    parent_id: 34,
    category: "Acoustical Wall Panels",
  },
  {
    id: 275,
    parent_id: 34,
    category: "Baby Changing Table",
  },
  {
    id: 276,
    parent_id: 34,
    category: "Bike Racks",
  },
  {
    id: 277,
    parent_id: 34,
    category: "Chalk Boards",
  },
  {
    id: 278,
    parent_id: 34,
    category: "Cork Boards",
  },
  {
    id: 279,
    parent_id: 34,
    category: "Cup Dispensers",
  },
  {
    id: 280,
    parent_id: 34,
    category: "Fire Extinguisher",
  },
  {
    id: 281,
    parent_id: 34,
    category: "Fireplace",
  },
  {
    id: 282,
    parent_id: 34,
    category: "Flower Boxes - Metal",
  },
  {
    id: 283,
    parent_id: 34,
    category: "Flower Boxes - Wood",
  },
  {
    id: 284,
    parent_id: 34,
    category: "Hooks - Storage",
  },
  {
    id: 285,
    parent_id: 34,
    category: "Mail Slot",
  },
  {
    id: 286,
    parent_id: 34,
    category: "Mailboxes",
  },
  {
    id: 287,
    parent_id: 34,
    category: "Overhead Storage Racks",
  },
  {
    id: 288,
    parent_id: 34,
    category: "Pegboard",
  },
  {
    id: 289,
    parent_id: 34,
    category: "Pin Up Boards",
  },
  {
    id: 290,
    parent_id: 34,
    category: "Portable Clothes Hangers",
  },
  {
    id: 291,
    parent_id: 34,
    category: "Portable Heaters",
  },
  {
    id: 292,
    parent_id: 34,
    category: "Pull Down Ladder",
  },
  {
    id: 293,
    parent_id: 34,
    category: "Shelves With Brackets",
  },
  {
    id: 294,
    parent_id: 34,
    category: "Signage",
  },
  {
    id: 295,
    parent_id: 34,
    category: "Signage - Ada",
  },
  {
    id: 296,
    parent_id: 34,
    category: "Ski Racks",
  },
  {
    id: 297,
    parent_id: 34,
    category: "Toilet Partitions",
  },
  {
    id: 298,
    parent_id: 34,
    category: "Walk Off Matts",
  },
  {
    id: 299,
    parent_id: 34,
    category: "White Boards",
  },
  {
    id: 300,
    parent_id: 34,
    category: "Wire Shelving",
  },
  {
    id: 301,
    parent_id: 34,
    category: "Wood Pallets",
  },
  {
    id: 302,
    parent_id: 35,
    category: "Basketball Hoop",
  },
  {
    id: 303,
    parent_id: 35,
    category: "Bikes",
  },
  {
    id: 304,
    parent_id: 35,
    category: "Ping Pong Table",
  },
  {
    id: 305,
    parent_id: 35,
    category: "Pool Table",
  },
  {
    id: 306,
    parent_id: 35,
    category: "Weights",
  },
  {
    id: 307,
    parent_id: 36,
    category: "Plaster",
  },
  {
    id: 308,
    parent_id: 36,
    category: "Stucco",
  },
  {
    id: 309,
    parent_id: 37,
    category: "Tile",
  },
  {
    id: 310,
    parent_id: 38,
    category: "Electrical Conduits And Wire",
  },
  {
    id: 311,
    parent_id: 38,
    category: "Gas Pipe",
  },
  {
    id: 312,
    parent_id: 38,
    category: "Perforated Pipe",
  },
  {
    id: 313,
    parent_id: 38,
    category: "Sewer Pipe",
  },
  {
    id: 314,
    parent_id: 38,
    category: "Storm Drain Pipe",
  },
  {
    id: 315,
    parent_id: 38,
    category: "Water Pipe - Domestic",
  },
  {
    id: 316,
    parent_id: 38,
    category: "Water Pipe - Fire Suppression",
  },
  {
    id: 317,
    parent_id: 38,
    category: "Water Wells",
  },
  {
    id: 318,
    parent_id: 39,
    category: "Aluminum",
  },
  {
    id: 319,
    parent_id: 39,
    category: "Steel",
  },
  {
    id: 320,
    parent_id: 39,
    category: "Vinyl",
  },
  {
    id: 321,
    parent_id: 39,
    category: "Wood",
  },
];

class SearchHandler {
  private searchInput: HTMLInputElement;
  private resultsList: HTMLUListElement;

  constructor() {
    this.searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    this.resultsList = document.getElementById(
      "results-list"
    ) as HTMLUListElement;

    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    this.searchInput.addEventListener("input", this.handleSearch.bind(this));
    this.searchInput.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  private handleSearch(): void {
    const searchTerm: string = this.searchInput.value.toLowerCase();
    // console.log("Search term:", searchTerm); // Debugging: log the search term

    const filteredItems: SearchableItem[] = this.searchItems(searchTerm);
    // console.log("Filtered items:", filteredItems); // Debugging: log the filtered items

    this.displayResults(filteredItems);
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.searchInput.value = "";
      this.displayResults([]);
      // console.log("Cleared search input and results"); // Debugging: log when clearing input and results
    }
  }

  private searchItems(searchTerm: string): SearchableItem[] {
    const filteredItems: SearchableItem[] = items.filter((item) =>
      item.category.toLowerCase().includes(searchTerm)
    );

    const parentIds = new Set(
      filteredItems.map((item) => item.parent_id).filter((id) => id !== null)
    );
    const parentItems = items.filter((item) => parentIds.has(item.id));

    return [...filteredItems, ...parentItems];
  }

  private highlightMatches(text: string, searchTerm: string): string {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  private displayResults(results: SearchableItem[]): void {
    this.resultsList.innerHTML = "";
    results.forEach((item) => {
      if (item.parent_id === null) {
        const parentLi: HTMLLIElement = document.createElement("li");
        parentLi.innerHTML = this.highlightMatches(
          `id: ${item.id}, ${item.category}`,
          this.searchInput.value
        );
        parentLi.style.fontSize = "2em"; // Set font size to 2x
        this.resultsList.appendChild(parentLi);

        const childItems = items.filter((child) => child.parent_id === item.id);
        if (childItems.length > 0) {
          const childUl: HTMLUListElement = document.createElement("ul");
          childItems.forEach((child) => {
            const childLi: HTMLLIElement = document.createElement("li");
            childLi.innerHTML = this.highlightMatches(
              `id: ${child.id}, ${child.category}`,
              this.searchInput.value
            );
            childLi.style.fontSize = "1.5em"; // Set font size to 1.5x
            childUl.appendChild(childLi);
          });
          this.resultsList.appendChild(childUl);
        }
      }
    });
    // console.log("Displayed results:", results); // Debugging: log the displayed results
  }
}

// Initialize the search handler when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new SearchHandler();
});

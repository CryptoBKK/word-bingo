const GRADE_LEVELS = {
  K2: "Kindergarten - 2nd",
  "3_4": "3rd - 4th",
  "5_6": "5th - 6th"
};

const ROUND_WORDS = {
  "K2": [
    {
      theme: "Animals",
      words: [
        "cat", "dog", "fish", "bird", "frog", "bear", "lion", "duck",
        "owl", "pig", "cow", "hen", "fox", "bat", "bee", "ant",
        "rat", "eel", "ram", "yak", "elk", "emu", "ape", "cub",
        "pup", "kit", "doe", "ram", "jay", "cod", "cob", "ewe"
      ]
    },
    {
      theme: "Colors & Shapes",
      words: [
        "red", "blue", "green", "pink", "gold", "gray", "tan", "teal",
        "circle", "square", "star", "heart", "oval", "cube", "cone", "line",
        "dot", "ring", "arch", "edge", "side", "face", "point", "curve",
        "ruby", "jade", "plum", "rose", "lime", "mint", "sand", "coal"
      ]
    },
    {
      theme: "Food & Drinks",
      words: [
        "cake", "milk", "rice", "bread", "jam", "pie", "egg", "ham",
        "corn", "pear", "plum", "lime", "fig", "nut", "yam", "oat",
        "soup", "stew", "taco", "roll", "bun", "chip", "dip", "pop",
        "tea", "juice", "bean", "pea", "cod", "date", "kiwi", "mango"
      ]
    },
    {
      theme: "Nature",
      words: [
        "sun", "moon", "star", "rain", "snow", "wind", "leaf", "tree",
        "rock", "hill", "lake", "pond", "seed", "root", "vine", "bush",
        "dirt", "sand", "wave", "tide", "cave", "fog", "dew", "ice",
        "clay", "moss", "fern", "palm", "bark", "twig", "bud", "stem"
      ]
    },
    {
      theme: "House & Home",
      words: [
        "door", "wall", "roof", "bed", "lamp", "desk", "chair", "rug",
        "cup", "bowl", "fork", "plate", "sink", "tub", "soap", "mop",
        "fan", "oven", "pan", "pot", "lid", "jar", "bag", "box",
        "mat", "key", "bell", "lock", "hook", "shelf", "tile", "knob"
      ]
    },
    {
      theme: "Action Words",
      words: [
        "run", "jump", "swim", "hop", "skip", "clap", "wave", "kick",
        "spin", "roll", "toss", "pull", "push", "lift", "dig", "cut",
        "mix", "stir", "pour", "fold", "draw", "sing", "hum", "tap",
        "nod", "wink", "grin", "yawn", "sip", "bite", "chew", "blow"
      ]
    },
    {
      theme: "Weather & Sky",
      words: [
        "rain", "snow", "hail", "wind", "storm", "cloud", "fog", "mist",
        "sun", "dawn", "dusk", "noon", "glow", "beam", "ray", "flash",
        "bolt", "boom", "drip", "drop", "pool", "sleet", "gust", "breeze",
        "warm", "cold", "cool", "hot", "dry", "wet", "damp", "crisp"
      ]
    },
    {
      theme: "Music & Sound",
      words: [
        "drum", "bell", "horn", "harp", "flute", "song", "tune", "beat",
        "clap", "snap", "hum", "ring", "buzz", "pop", "bang", "boom",
        "tap", "tone", "note", "rest", "loud", "soft", "high", "low",
        "fast", "slow", "echo", "bass", "chord", "solo", "band", "duet"
      ]
    },
    {
      theme: "School",
      words: [
        "book", "pen", "desk", "map", "test", "read", "math", "art",
        "glue", "tape", "rule", "page", "line", "dot", "mark", "note",
        "quiz", "bell", "hall", "gym", "bus", "bag", "cap", "coat",
        "chalk", "board", "class", "lunch", "play", "team", "club", "flag"
      ]
    },
    {
      theme: "Body & Clothing",
      words: [
        "hand", "foot", "arm", "leg", "head", "nose", "ear", "eye",
        "chin", "lip", "toe", "rib", "hip", "back", "neck", "knee",
        "hat", "coat", "sock", "boot", "belt", "vest", "cape", "robe",
        "mitt", "scarf", "mask", "ring", "band", "bow", "clip", "pin"
      ]
    }
  ],
  "3_4": [
    {
      theme: "Animals",
      words: [
        "elephant", "giraffe", "leopard", "cheetah", "rhinoceros", "hippopotamus", "crocodile", "alligator",
        "chimpanzee", "gorilla", "kangaroo", "koala", "penguin", "porcupine", "badger", "weasel",
        "peacock", "pheasant", "ostrich", "cassowary", "vulture", "falcon", "eagle", "sparrow"
      ]
    },
    {
      theme: "Colors & Shapes",
      words: [
        "turquoise", "magenta", "crimson", "indigo", "scarlet", "bronze", "silver", "copper",
        "triangle", "pentagon", "hexagon", "octagon", "cylinder", "pyramid", "sphere", "prism",
        "rectangle", "diamond", "trapezoid", "polygon", "semicircle", "spiral", "crescent", "cross"
      ]
    },
    {
      theme: "Food & Drinks",
      words: [
        "broccoli", "asparagus", "zucchini", "celery", "spinach", "lettuce", "cabbage", "carrot",
        "blueberry", "strawberry", "raspberry", "blackberry", "tangerine", "papaya", "pineapple", "cantaloupe",
        "spaghetti", "lasagna", "macaroni", "tortilla", "quiche", "omelet", "waffle", "pancake"
      ]
    },
    {
      theme: "Nature",
      words: [
        "volcano", "glacier", "canyon", "plateau", "meadow", "stream", "creek", "marsh",
        "mountain", "valley", "cliff", "waterfall", "desert", "forest", "jungle", "savanna",
        "thunder", "lightning", "cyclone", "tornado", "blizzard", "drizzle", "downpour", "hailstone"
      ]
    },
    {
      theme: "House & Home",
      words: [
        "garage", "basement", "attic", "balcony", "patio", "deck", "chimney", "gutter",
        "kitchen", "bedroom", "bathroom", "living", "hallway", "stairway", "closet", "pantry",
        "chandelier", "sofa", "cabinet", "counter", "furnace", "thermostat", "furniture", "appliance"
      ]
    },
    {
      theme: "Action Words",
      words: [
        "gallop", "trudge", "scurry", "lumber", "sprint", "creep", "dash", "stumble",
        "juggle", "wiggle", "jiggle", "tremble", "quiver", "shudder", "shiver", "sway",
        "pounce", "crouch", "kneel", "squat", "lunge", "wobble", "totter", "swagger"
      ]
    },
    {
      theme: "Weather & Sky",
      words: [
        "meteorite", "eclipse", "meteor", "asteroid", "zodiac", "constellation", "aurora", "atmosphere",
        "humidity", "temperature", "barometer", "thermometer", "latitude", "longitude", "climate", "forecast",
        "cumulus", "cirrus", "stratus", "nimbus", "season", "equinox", "solstice", "pressure"
      ]
    },
    {
      theme: "Music & Sound",
      words: [
        "symphony", "opera", "sonata", "concerto", "melody", "harmony", "rhythm", "tempo",
        "saxophone", "trumpet", "trombone", "clarinet", "oboe", "violin", "cello", "viola",
        "conductor", "orchestra", "ensemble", "quartet", "composer", "musician", "vocalist", "acoustic"
      ]
    },
    {
      theme: "School",
      words: [
        "paragraph", "sentence", "vocabulary", "grammar", "punctuation", "syllable", "alphabet", "manuscript",
        "geometry", "algebra", "fraction", "decimal", "perimeter", "diameter", "radius", "volume",
        "microscope", "telescope", "laboratory", "experiment", "hypothesis", "conclusion", "evidence", "research"
      ]
    },
    {
      theme: "Body & Clothing",
      words: [
        "skeleton", "muscle", "ligament", "tendon", "cartilage", "organ", "artery", "vein",
        "shoulder", "elbow", "wrist", "ankle", "spine", "vertebra", "ribcage", "sternum",
        "cardigan", "sweater", "blazer", "uniform", "overcoat", "windbreaker", "tuxedo", "leotard"
      ]
    }
  ],
  "5_6": [
    {
      theme: "Animals",
      words: [
        "anthropoid", "amphibian", "arthropod", "arachnid", "marsupial", "monotreme", "vertebrate", "invertebrate",
        "scavenger", "predator", "herbivore", "omnivore", "nocturnal", "diurnal", "migratory", "territorial",
        "pinnipeds", "cetaceans", "ungulates", "carnivores", "primates", "rodents", "lagomorphs", "insectivores"
      ]
    },
    {
      theme: "Colors & Shapes",
      words: [
        "complementary", "monochromatic", "saturation", "luminosity", "iridescent", "translucent", "transparent", "opaque",
        "octahedron", "tetrahedron", "icosahedron", "dodecahedron", "polyhedron", "tessellation", "symmetry", "asymmetry",
        "perimeter", "circumference", "quadrilateral", "isosceles", "equilateral", "scalene", "polygon", "vertices"
      ]
    },
    {
      theme: "Food & Drinks",
      words: [
        "carbohydrate", "protein", "nutrient", "calorie", "vitamin", "mineral", "cholesterol", "enzyme",
        "photosynthesis", "fermentation", "pasteurization", "hydrogenation", "oxidation", "decomposition", "preservation", "oxidize",
        "vegetarian", "vegan", "pescatarian", "omnivorous", "cultivation", "agriculture", "irrigation", "pesticide"
      ]
    },
    {
      theme: "Nature",
      words: [
        "geothermal", "seismic", "erosion", "weathering", "sediment", "stalactite", "stalagmite", "limestone",
        "biodiversity", "ecosystem", "habitat", "biome", "conservation", "extinction", "adaptation", "evolution",
        "geological", "tectonic", "mantle", "crust", "magma", "lava", "mineral", "fossil"
      ]
    },
    {
      theme: "House & Home",
      words: [
        "architecture", "blueprint", "foundation", "infrastructure", "insulation", "ventilation", "plumbing", "electricity",
        "residential", "commercial", "industrial", "structural", "aesthetic", "ergonomic", "durable", "sustainable",
        "renovation", "restoration", "construction", "contractor", "apprentice", "superintendent", "framework", "masonry"
      ]
    },
    {
      theme: "Action Words",
      words: [
        "accelerate", "decelerate", "oscillate", "fluctuate", "accumulate", "disseminate", "obliterate", "disintegrate",
        "procrastinate", "perseverate", "vacillate", "exaggerate", "ameliorate", "deteriorate", "penetrate", "permeate",
        "abbreviate", "accentuate", "articulate", "contemplate", "frustrate", "generate", "interrogate", "perpetuate"
      ]
    },
    {
      theme: "Weather & Sky",
      words: [
        "meteorology", "climatology", "atmosphere", "stratosphere", "troposphere", "ionosphere", "thermosphere", "mesosphere",
        "barometric", "hydrologic", "photosynthesis", "evaporation", "precipitation", "condensation", "sublimation", "transpiration",
        "anticyclone", "cyclone", "isobar", "isotherm", "thermal", "humidity", "dew", "pressure"
      ]
    },
    {
      theme: "Music & Sound",
      words: [
        "polyphonic", "monophonic", "homophonic", "cacophony", "euphony", "dissonance", "consonance", "resonance",
        "timbre", "vibrato", "tremolo", "staccato", "legato", "crescendo", "diminuendo", "accelerando",
        "orchestration", "instrumentation", "arrangement", "composition", "harmonization", "modulation", "transposition", "improvisation"
      ]
    },
    {
      theme: "School",
      words: [
        "linguistics", "etymology", "semantics", "syntax", "morphology", "phonology", "pragmatics", "diction",
        "calculus", "trigonometry", "probability", "statistics", "polynomial", "exponent", "coefficient", "variable",
        "bibliography", "citation", "argumentation", "thesis", "dissertation", "pedagogy", "curriculum", "academia"
      ]
    },
    {
      theme: "Body & Clothing",
      words: [
        "physiology", "anatomy", "metabolism", "homeostasis", "respiration", "circulation", "digestion", "excretion",
        "endocrine", "lymphatic", "nervous", "muscular", "skeletal", "integumentary", "reproductive", "urinary",
        "haberdashery", "accessory", "tailoring", "couture", "silhouette", "embellishment", "embroidery", "textile"
      ]
    }
  ]
};

export { GRADE_LEVELS };
export default ROUND_WORDS;

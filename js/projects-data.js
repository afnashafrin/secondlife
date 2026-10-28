/**
 * SecondLife AI - Projects Database & Safety Rules
 * 100% Free, Offline Knowledge Base for Creative Reuse
 */

// List of hazardous items that should NOT be DIY upcycled without professional recycling
const HAZARDOUS_ITEMS = [
    {
        keywords: ['battery', 'batteries', 'lithium', 'car battery', 'lead acid', 'power bank'],
        name: 'Batteries & Accumulators',
        dangerLevel: 'HIGH',
        reason: 'Risk of fire, chemical burns, acid leaks, and toxic heavy metal exposure.',
        guidance: 'Do not puncture, cut, or heat batteries. Take them to a certified electronic waste (e-waste) collection center or local battery drop-off box.'
    },
    {
        keywords: ['fluorescent', 'cfl', 'neon light', 'tube light', 'mercury'],
        name: 'Fluorescent Bulbs & Mercury Items',
        dangerLevel: 'HIGH',
        reason: 'Contains toxic mercury vapor that can cause severe nervous system harm if broken.',
        guidance: 'Never drill, break, or crush fluorescent bulbs or mercury thermometers. Drop them off at designated hazardous waste disposal facilities.'
    },
    {
        keywords: ['crt', 'cathode ray', 'old television', 'old monitor', 'picture tube'],
        name: 'CRT Monitors & Televisions',
        dangerLevel: 'HIGH',
        reason: 'Stores high electrical voltage even when unplugged, contains leaded glass and vacuum implosion risks.',
        guidance: 'Do not open or dismantle CRT televisions. Deliver whole to certified e-waste recyclers.'
    },
    {
        keywords: ['aerosol', 'spray can', 'spray paint can', 'propane', 'butane', 'gas canister'],
        name: 'Pressurized Gas / Aerosol Cans',
        dangerLevel: 'HIGH',
        reason: 'Risk of explosion, violent puncture, or flammable gas fire if punctured or heated.',
        guidance: 'Only recycle aerosol cans if completely empty and depressurized through normal use. Do not pierce with tools.'
    },
    {
        keywords: ['chemical', 'pesticide', 'insecticide', 'weedkiller', 'acid', 'solvent', 'bleach bottle', 'motor oil'],
        name: 'Chemical & Toxic Liquid Containers',
        dangerLevel: 'HIGH',
        reason: 'Toxic residue can leach into household air, food, or skin, causing chemical burns or poisoning.',
        guidance: 'Containers that held motor oil, pesticides, or industrial solvents cannot be made food or skin safe. Dispose of via municipal chemical waste collection.'
    },
    {
        keywords: ['asbestos', 'insulation vintage', 'brake pad'],
        name: 'Asbestos Materials',
        dangerLevel: 'CRITICAL',
        reason: 'Inhalation of microscopic fibers causes permanent lung damage and mesothelioma.',
        guidance: 'Do not disturb or cut. Contact certified hazardous abatement specialists.'
    }
];

// Predefined catalog of upcycling projects categorized by material and purpose
const PROJECTS_DATABASE = [
    // ==========================================
    // GLASS JARS & BOTTLES
    // ==========================================
    {
        id: 'glass-planter-01',
        materialGroup: 'glass',
        keywords: ['glass jar', 'mason jar', 'jam jar', 'pickle jar', 'glass container'],
        title: 'Self-Watering Herb Planter',
        category: 'practical',
        difficulty: 'beginner',
        timeEstimate: '20 mins',
        budgetEstimate: '₹0 (Free with household items)',
        ecoImpact: 'Reuses non-biodegradable glass and promotes home-grown zero-packaging herbs.',
        materials: [
            '1 clean glass jar (any size, jam/mason jar)',
            'Small piece of cotton cord or cotton fabric scrap (for the wick)',
            'Small plastic bottle top or inverted plastic net (to suspend the plant)',
            'Potting soil & herb seeds or cutting (mint, basil, or coriander)',
            'Clean tap water'
        ],
        tools: ['Scissors'],
        safetyNotes: 'Inspect the glass rim for chips or hairline cracks before starting. Never use cracked glass.',
        steps: [
            'Soak your glass jar in warm soapy water for 10 minutes to easily peel off labels and glue residue.',
            'Cut a 15 cm strip of 100% natural cotton string or scrap t-shirt cloth to act as a capillary wick.',
            'Thread the cotton wick through a perforated inner cup or plastic netting placed inside the jar neck.',
            'Fill the inner cup with potting soil, inserting the top half of the wick into the root zone.',
            'Fill the lower half of the glass jar with water, ensuring the bottom of the wick is submerged.',
            'Plant your herb seeds or rooted cutting. The cotton wick will automatically draw water upward as the soil dries!'
        ]
    },
    {
        id: 'glass-lantern-02',
        materialGroup: 'glass',
        keywords: ['glass jar', 'wine bottle', 'beer bottle', 'mason jar', 'jam jar'],
        title: 'Fairy Light Constellation Lantern',
        category: 'decorative',
        difficulty: 'beginner',
        timeEstimate: '15 mins',
        budgetEstimate: '₹0 – ₹50 (if adding micro battery LED string)',
        ecoImpact: 'Transforms single-use glass packaging into warm, reusable ambient room lighting.',
        materials: [
            '1 clean transparent or tinted glass jar or bottle',
            'Fairy lights / micro LED wire (or small tea light candle)',
            'Optional: Jute twine, dried leaves, or pressed flowers',
            'Optional: A few drops of craft glue to fix twine to the rim'
        ],
        tools: ['Scissors'],
        safetyNotes: 'If using a real wax candle, leave the jar open for ventilation and never leave lit candles unattended. Battery or solar micro LEDs are recommended.',
        steps: [
            'Thoroughly wash and dry the glass jar until completely smudge-free.',
            'Wind a few rounds of natural jute twine or leftover ribbon around the neck of the jar, tying a neat bow.',
            'Insert battery-operated warm micro-LED lights inside the jar, coiling the wire loosely so it spreads evenly.',
            'For a frosted winter look, dab diluted white craft glue on the inside and sprinkle table salt or rice grains before inserting lights.',
            'Place on your study desk, balcony, or bedside table for cozy, sustainable mood lighting.'
        ]
    },
    {
        id: 'glass-organizer-03',
        materialGroup: 'glass',
        keywords: ['glass jar', 'baby food jar', 'spice jar', 'jam jar'],
        title: 'Aesthetic Spice & Pantry Organizer',
        category: 'storage',
        difficulty: 'beginner',
        timeEstimate: '25 mins',
        budgetEstimate: '₹0 (Free with scrap paper or chalk)',
        ecoImpact: 'Replaces expensive plastic storage sets and eliminates microplastics in pantry food.',
        materials: [
            '3 to 6 matching or similar glass jars with lids',
            'Scrap paper, cardboard tags, or masking tape for labels',
            'Pen or marker',
            'Optional: Acrylic paint or spray for matching lids'
        ],
        tools: ['Scissors', 'Pen or Marker'],
        safetyNotes: 'Ensure jars and lids are completely bone-dry before storing dry spices, lentils, or tea to prevent moisture buildup.',
        steps: [
            'Sterilize jars and metal lids in warm water with a dash of vinegar to eliminate old food aromas.',
            'If you want a unified look, paint all lids in a single neutral tone (matte black or sage green) using leftover paint.',
            'Cut matching rectangular label strips from brown kraft paper or old notebook paper.',
            'Neatly write spice names, herbs, or pulses with black ink on each label and paste onto the jar fronts with clear glue or tape.',
            'Arrange in your kitchen or study drawer for an Instagram-worthy, zero-cost pantry upgrade!'
        ]
    },

    // ==========================================
    // DENIM & TEXTILES
    // ==========================================
    {
        id: 'denim-tote-01',
        materialGroup: 'textiles',
        keywords: ['denim', 'jeans', 'old jeans', 'torn pants', 'trousers'],
        title: 'Heavy-Duty Upcycled Denim Tote Bag',
        category: 'practical',
        difficulty: 'intermediate',
        timeEstimate: '45 mins',
        budgetEstimate: '₹0 (Free with old jeans and needle/thread)',
        ecoImpact: 'Saves approximately 7,500 liters of water used to produce a single new pair of jeans from going to waste.',
        materials: [
            '1 pair of old, torn, or outgrown denim jeans',
            'Sturdy sewing thread (polyester or nylon) or fabric glue',
            'Fabric scraps for lining (optional)'
        ],
        tools: ['Scissors', 'Needle & Thread or Sewing Machine', 'Ruler / Chalk'],
        safetyNotes: 'Denim is thick; take your time pushing needles through multiple layers to prevent finger pricks or needle breakage.',
        steps: [
            'Lay the jeans flat and cut straight across both legs right below the crotch seam. (Save the lower leg tubes for straps!).',
            'Turn the cut jeans inside out. Align the front and back bottom openings neatly.',
            'Sew a strong, double-stitched straight seam along the bottom opening, or use heavy fabric adhesive if no-sew is preferred.',
            'Cut two 5 cm wide strips along the length of the leftover leg denim. Fold each strip inward and stitch down the center to make sturdy carry handles.',
            'Attach one handle to the front waistband and one to the back waistband using reinforced box-stitching.',
            'Turn the bag right side out. The existing front and back pockets now serve as instant exterior phone and key holders!'
        ]
    },
    {
        id: 'denim-wall-pocket-02',
        materialGroup: 'textiles',
        keywords: ['denim', 'jeans', 'shirt', 'fabric', 'old clothes'],
        title: 'Hanging Denim Pocket Organizer',
        category: 'storage',
        difficulty: 'beginner',
        timeEstimate: '30 mins',
        budgetEstimate: '₹0 (Free using old pockets & a wooden branch or hanger)',
        ecoImpact: 'Diverts post-consumer textile waste from local dumping grounds.',
        materials: [
            'Back pockets carefully cut from 2-4 old pairs of jeans',
            '1 wooden clothes hanger or a smooth dried tree branch',
            '1 piece of canvas, denim, or burlap backing (30x45 cm)',
            'Needle and thread, or fabric craft glue'
        ],
        tools: ['Scissors', 'Needle & Thread or Craft Glue'],
        safetyNotes: 'When cutting pockets off jeans, cut leaving a 5 mm margin around the pocket stitch to avoid unraveling.',
        steps: [
            'Carefully cut around the back pockets of discarded jeans, keeping the existing rivet and stitch detailing intact.',
            'Prepare your backing fabric and fold the top 5 cm over your wooden hanger or branch, stitching or gluing it into a casing.',
            'Arrange the pockets on the front in a clean grid (2 columns of 2 or 3 rows).',
            'Glue or stitch each pocket around the bottom and sides onto the backing fabric, keeping the top open.',
            'Hang on your bedroom or workspace wall to store scissors, pens, cables, earphones, and sunglasses.'
        ]
    },
    {
        id: 'textile-coaster-03',
        materialGroup: 'textiles',
        keywords: ['t-shirt', 'old tee', 'fabric scraps', 'cotton shirt', 'bedsheet'],
        title: 'No-Sew Braided Fabric Coaster Set',
        category: 'decorative',
        difficulty: 'beginner',
        timeEstimate: '20 mins',
        budgetEstimate: '₹0 (Zero cost)',
        ecoImpact: 'Gives small, un-wearable clothing scraps an attractive new life.',
        materials: [
            '1 old cotton T-shirt or soft cotton garment',
            'Craft glue or needle and thread for securing the ends'
        ],
        tools: ['Fabric Scissors'],
        safetyNotes: 'Use sharp fabric scissors to ensure clean cuts without pulling threads.',
        steps: [
            'Cut your old T-shirt into three long, continuous strips roughly 2 to 3 cm wide.',
            'Gently pull each strip along its length—cotton jersey rolls into neat, cord-like yarn automatically!',
            'Knot the three strips together at one end and braid them tightly from top to bottom.',
            'Starting from the knotted center, coil the braided rope around itself in a flat spiral.',
            'Dab dots of craft glue along the spiral edges as you coil (or hand-stitch with needle and thread).',
            'Trim and tuck the outer end securely underneath. Let dry for a soft, absorbent mug coaster.'
        ]
    },

    // ==========================================
    // CARDBOARD & PAPER BOXES
    // ==========================================
    {
        id: 'cardboard-divider-01',
        materialGroup: 'cardboard',
        keywords: ['cardboard', 'box', 'amazon box', 'shipping box', 'carton'],
        title: 'Custom Modular Drawer Divider Grid',
        category: 'storage',
        difficulty: 'beginner',
        timeEstimate: '20 mins',
        budgetEstimate: '₹0 (100% Free)',
        ecoImpact: 'Repurposes single-use delivery packaging boxes before paper recycling cycles.',
        materials: [
            '1 or 2 clean corrugated cardboard shipping boxes',
            'Optional: Old wrapping paper, newspaper comics, or fabric scraps for covering'
        ],
        tools: ['Scissors or Utility Knife', 'Ruler', 'Pencil'],
        safetyNotes: 'Always cut cardboard on a cutting mat or flat scrap board. Cut away from your fingers.',
        steps: [
            'Measure the depth, width, and height of your messy desk or wardrobe drawer.',
            'Cut cardboard strips equal to the drawer height and the corresponding width and length.',
            'Mark matching vertical slots halfway through the strips at 6 cm to 10 cm intervals.',
            'Slide the intersecting strips together at the slots to form an interlocking egg-crate grid.',
            'Optionally wrap strips in newspaper or leftover gift wrap for an elegant finish.',
            'Drop the grid into your drawer to instantly organize socks, stationery, USB cables, or cosmetics.'
        ]
    },
    {
        id: 'cardboard-rope-basket-02',
        materialGroup: 'cardboard',
        keywords: ['cardboard box', 'shoe box', 'small box', 'courier box'],
        title: 'Faux-Wicker Jute Rope Storage Bin',
        category: 'decorative',
        difficulty: 'beginner',
        timeEstimate: '35 mins',
        budgetEstimate: '₹0 – ₹40 (Jute twine is very affordable or free)',
        ecoImpact: 'Replaces synthetic plastic laundry or desktop bins with biodegradable natural materials.',
        materials: [
            '1 sturdy shoe box or cardboard shipping box',
            '1 spool of jute twine, sisal rope, or yarn',
            'Scrap white fabric or old pillowcase for inner lining',
            'Craft glue or glue gun'
        ],
        tools: ['Scissors', 'Glue Gun or Liquid Craft Glue'],
        safetyNotes: 'If using a hot glue gun, avoid touching the hot metal tip or molten glue directly.',
        steps: [
            'Cut off any top lid flaps so you have a clean open-top cardboard rectangular bin.',
            'Starting at the bottom edge, glue the end of your jute rope and wrap it tightly around the exterior.',
            'Continue coiling the rope upward row by row, applying small dabs of glue every few inches to hold it snug.',
            'When you reach the top rim, cut the rope and glue the tip neatly inside.',
            'Take an old white pillowcase or cotton scrap, fold it into the box, and fold the edge over the top rim as a soft fabric liner.',
            'Use as a chic storage basket for books, hand towels, skincare bottles, or desk accessories.'
        ]
    },
    {
        id: 'cardboard-desk-organizer-03',
        materialGroup: 'cardboard',
        keywords: ['toilet paper roll', 'cardboard tube', 'cereal box', 'paper towel tube'],
        title: 'Honeycomb Desktop Stationery Stand',
        category: 'practical',
        difficulty: 'beginner',
        timeEstimate: '15 mins',
        budgetEstimate: '₹0 (Free with paper tubes and cereal box)',
        ecoImpact: 'Keeps cardboard tubes out of municipal waste streams through creative desk utility.',
        materials: [
            '4 to 8 cardboard toilet paper or paper towel tubes',
            '1 piece of flat cardboard (from a cereal box) for the base',
            'Craft glue or tape',
            'Optional: Paint, markers, or scrap magazine paper'
        ],
        tools: ['Scissors', 'Ruler', 'Pencil'],
        safetyNotes: 'Beginner-friendly project suitable for all ages with basic scissors.',
        steps: [
            'Cut the cardboard tubes at varying heights (e.g., 6 cm, 9 cm, 12 cm, and 15 cm) for a stepped tiered look.',
            'Optionally paint each tube or wrap them in decorative paper clippings.',
            'Arrange the tubes in a tight cluster or geometric honeycomb pattern.',
            'Glue the sides of adjacent tubes together and clamp lightly with paper clips while drying.',
            'Trace the cluster footprint onto flat cardboard, cut out the base, and glue it underneath.',
            'Slot your pens, markers, scissors, stylus, and rulers into the dedicated tiered compartments.'
        ]
    },

    // ==========================================
    // PLASTIC BOTTLES & CONTAINERS
    // ==========================================
    {
        id: 'plastic-planter-01',
        materialGroup: 'plastic',
        keywords: ['plastic bottle', 'water bottle', 'soda bottle', 'cola bottle', 'pet bottle'],
        title: 'Hanging Self-Draining Vertical Herb Pod',
        category: 'practical',
        difficulty: 'beginner',
        timeEstimate: '20 mins',
        budgetEstimate: '₹0 (Free with recycled PET bottle & twine)',
        ecoImpact: 'Prevents PET plastic bottles from degrading into hazardous microplastics in waterways.',
        materials: [
            '1 or 2 clean 1L or 2L transparent plastic bottles with caps',
            'String, wire, or twine for hanging',
            'Potting soil and small plants (succulents, pothos, or cherry tomatoes)'
        ],
        tools: ['Scissors or Utility Knife', 'Heated safety pin or small nail (for drainage holes)'],
        safetyNotes: 'Take care when piercing plastic with scissors. Smooth sharp cut edges with sandpaper or cover with tape.',
        steps: [
            'Rinse the bottle thoroughly and remove the plastic label sleeve.',
            'Using scissors, cut a neat rectangular opening (approx 6x10 cm) along the horizontal side of the bottle.',
            'Puncture 3 to 4 tiny drainage pinholes on the opposite underside so excess water can escape.',
            'Poke two holes at both ends near the neck and base, threading strong twine through to make a hanging cradle.',
            'Add a small layer of pebbles for drainage, fill with potting mix, and plant your green cutting.',
            'Hang on your sunny balcony railing or window grill to build a lush vertical garden!'
        ]
    },
    {
        id: 'plastic-cable-caddy-02',
        materialGroup: 'plastic',
        keywords: ['shampoo bottle', 'lotion bottle', 'plastic container', 'detergent bottle'],
        title: 'Wall Socket Phone & Cable Charging Caddy',
        category: 'storage',
        difficulty: 'beginner',
        timeEstimate: '15 mins',
        budgetEstimate: '₹0 (Free upcycling)',
        ecoImpact: 'Reuses HDPE plastic containers that are rarely accepted in standard single-stream recycling.',
        materials: [
            '1 clean, empty flat plastic bottle (shampoo or body wash bottle)',
            'Sandpaper or emery board to smooth cut edges'
        ],
        tools: ['Scissors or Box Cutter', 'Marker', 'Sandpaper'],
        safetyNotes: 'Wash the inside thoroughly to ensure no soap or chemical residue remains before holding electronics.',
        steps: [
            'Wash out all residual shampoo or lotion and dry completely.',
            'With a marker, draw a scoop shape on the bottle: keep the back wall tall and cut the front wall halfway down.',
            'On the tall back wall, draw a square or round cutout slightly larger than your smartphone wall charger plug.',
            'Carefully cut along your outline with scissors or a hobby knife.',
            'Rub sandpaper along all cut edges to make them smooth and round.',
            'When charging your phone, hang the caddy directly over the wall plug adapter, placing your phone safely in the pocket instead of on the floor!'
        ]
    },
    {
        id: 'plastic-vase-03',
        materialGroup: 'plastic',
        keywords: ['plastic bottle', 'milk jug', 'water jug'],
        title: 'Minimalist Fluted Flower Vase',
        category: 'decorative',
        difficulty: 'beginner',
        timeEstimate: '25 mins',
        budgetEstimate: '₹0 – ₹30 (Optional acrylic paint)',
        ecoImpact: 'Converts disposable beverage containers into long-lasting home decor.',
        materials: [
            '1 clear or opaque plastic bottle (1.5L or 2L with straight sides)',
            'Paint (acrylic or tempera in pastel tones) or yarn wrapping',
            'Decorative dry botanicals or fresh flowers with water'
        ],
        tools: ['Scissors', 'Paintbrush'],
        safetyNotes: 'Keep cut plastic edges away from small children until smoothed or bound with tape.',
        steps: [
            'Cut the top tapered cone off the plastic bottle at roughly 18 cm height.',
            'Make even vertical cuts 5 cm deep around the top rim spaced 1 cm apart to create pliable plastic fringe strips.',
            'Carefully fold each strip outward and tuck it diagonally behind its neighboring strip to weave an elegant interlocking rim.',
            'Paint the exterior in matte terracotta or olive green to mimic ceramic pottery.',
            'Fill with water and fresh wildflowers or dried eucalyptus stems.'
        ]
    },

    // ==========================================
    // TIN & ALUMINUM CANS
    // ==========================================
    {
        id: 'tin-lantern-01',
        materialGroup: 'metal',
        keywords: ['tin can', 'aluminum can', 'soda can', 'bean can', 'soup can', 'canned food'],
        title: 'Punched-Tin Moroccan Candle Lantern',
        category: 'decorative',
        difficulty: 'intermediate',
        timeEstimate: '30 mins',
        budgetEstimate: '₹0 (Free with empty food can & nail)',
        ecoImpact: 'Keeps high-energy refined aluminum and steel food cans in functional use.',
        materials: [
            '1 clean empty metal food can (soup, baked beans, or fruit can)',
            'Water (to freeze inside the can)',
            'Small tea light candle or LED light',
            'Wire for handle (optional)'
        ],
        tools: ['Hammer', 'Medium nail', 'Towel or dishcloth', 'Pencil or paper template'],
        safetyNotes: 'CRITICAL: Fill the can with water and freeze solid before hammering! The ice prevents the metal from denting. Watch for sharp metal burrs on the inside.',
        steps: [
            'Remove the paper label and wash the can thoroughly. Check that the opening rim has no jagged burrs.',
            'Fill the can 90% full with tap water and place in your freezer until frozen rock solid.',
            'Wrap a paper template with a dotted pattern (stars, spiral, heart, or geometric lines) around the can with tape.',
            'Lay the frozen can on a folded towel. Using your hammer and nail, tap gently through the paper to punch small holes along your design.',
            'Let the ice melt in the sink, then dry the can completely with a towel.',
            'Place an LED or wax tea light inside—the punched pattern casts mesmerizing shadows across your walls!'
        ]
    },
    {
        id: 'tin-desk-caddy-02',
        materialGroup: 'metal',
        keywords: ['tin can', 'canned food', 'coffee tin', 'metal can'],
        title: 'Rustic Magnetic Desk Organizer',
        category: 'storage',
        difficulty: 'beginner',
        timeEstimate: '20 mins',
        budgetEstimate: '₹0 (Free with scrap rope or paint)',
        ecoImpact: 'Sturdy steel food containers outlast flimsy plastic desk organizers by decades.',
        materials: [
            '1 to 3 clean steel cans of different heights',
            'Jute rope, fabric remnants, or leftover paint',
            'Glue or double-sided tape'
        ],
        tools: ['Pliers (to crimp any sharp lip)', 'Scissors', 'Glue'],
        safetyNotes: 'Use pliers to firmly press down any sharp inner edges from the can opener.',
        steps: [
            'Inspect the inner top rim. Use a pair of pliers to flatten down any sharp edges, or sand them smooth.',
            'Paint the cans with chalkboard paint or wrap them tightly with rustic jute twine from base to lip.',
            'If you have multiple cans, glue their sides together into a cluster (e.g., one tall can for rulers/scissors, two short cans for paperclips and pens).',
            'Since steel is naturally magnetic, you can stick fridge magnets, paperclips, and sticky notes directly to the exterior!',
            'Place on your work table for an organized, stylish workspace.'
        ]
    },

    // ==========================================
    // WOOD & PALLETS
    // ==========================================
    {
        id: 'wood-key-rack-01',
        materialGroup: 'wood',
        keywords: ['wood scrap', 'wooden pallet', 'driftwood', 'plank', 'timber piece'],
        title: 'Rustic Reclaimed Wood Key & Coat Hook',
        category: 'practical',
        difficulty: 'intermediate',
        timeEstimate: '35 mins',
        budgetEstimate: '₹0 – ₹50 (if purchasing simple screw hooks)',
        ecoImpact: 'Diverts timber offcuts from burning or landfill rot, sequestering carbon in home furniture.',
        materials: [
            '1 piece of discarded scrap wood, pallet slat, or smooth driftwood (approx 25-40 cm)',
            '2 to 4 old bent spoons, large vintage nails, or cheap cup hooks',
            'Sandpaper (medium & fine grit)',
            '2 wall mounting screws or hanging picture wire'
        ],
        tools: ['Screwdriver or Hammer', 'Sandpaper', 'Pencil', 'Ruler'],
        safetyNotes: 'Inspect reclaimed wood for old rusty nails or splinters. Wear gloves while sanding.',
        steps: [
            'Carefully remove any protruding staples or old nails with pliers or a claw hammer.',
            'Sand all surfaces along the grain to remove rough splinters while preserving the rustic wood character.',
            'Wipe away sanding dust and seal with a coat of olive oil or vegetable oil for a natural warm sheen.',
            'Mark mounting points evenly along the plank using a pencil.',
            'Screw your hooks (or hammer vintage bent spoons as hooks) into the marked spots.',
            'Attach picture hanging brackets to the back and mount near your entryway to hold keys, bags, and masks.'
        ]
    },
    {
        id: 'wood-shelf-02',
        materialGroup: 'wood',
        keywords: ['wooden crate', 'fruit crate', 'pallet wood', 'wine box'],
        title: 'Modular Rustic Floating Wall Shelf',
        category: 'storage',
        difficulty: 'intermediate',
        timeEstimate: '30 mins',
        budgetEstimate: '₹0 – ₹20 (Just wall screws/anchors)',
        ecoImpact: 'Keeps untreated wooden shipping crates in circulation for long-term domestic storage.',
        materials: [
            '1 sturdy wooden fruit crate or wine crate',
            'Sandpaper',
            '2 heavy-duty wall anchors and screws'
        ],
        tools: ['Screwdriver / Drill or Hammer', 'Sandpaper'],
        safetyNotes: 'Ensure the wall fasteners are securely anchored into solid brick or wall studs before placing heavy books.',
        steps: [
            'Check that all wooden slats of the crate are firmly attached; hammer down any loose tacks.',
            'Sand the rough interior and exterior surfaces to eliminate splinters.',
            'You can leave the natural distressed wood as-is, stain it with brewed black coffee for an antique finish, or paint it white.',
            'Drill two pilot holes through the sturdy back reinforcement corner blocks of the crate.',
            'Mount securely onto your wall. Use it to display potted succulents, small books, or scented candles.'
        ]
    }
];

// Fallback dynamic generator for any input item not explicitly listed
const GENERIC_RECIPE_TEMPLATES = {
    practical: {
        titleSuffix: 'Utility Organizer & Planter',
        ecoNote: 'Eliminates household waste by transforming obsolete materials into functional daily tools.',
        stepAction: 'clean, modify, reinforce, and repurpose'
    },
    decorative: {
        titleSuffix: 'Artisanal Eco Decor Piece',
        ecoNote: 'Elevates everyday discarded objects into creative, sustainable artistic conversation starters.',
        stepAction: 'deconstruct, texture, paint, and assemble'
    },
    storage: {
        titleSuffix: 'Modular Space-Saver Container',
        ecoNote: 'Prevents unnecessary plastic purchases by designing personalized, zero-waste home storage.',
        stepAction: 'segment, reinforce, label, and organize'
    }
};

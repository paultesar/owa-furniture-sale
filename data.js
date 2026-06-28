/* ============================================================================
   OWA FURNITURE SALE  —  THIS IS THE ONLY FILE YOU NEED TO EDIT
   ============================================================================

   After you change something here and click "Commit changes" on GitHub,
   the live website updates by itself in a few minutes. (Refresh the page.)

   ----------------------------------------------------------------------------
   THE 3 THINGS YOU'LL DO MOST:
   ----------------------------------------------------------------------------
   1. RESERVE / SELL an item . change   status: "available"   to   "reserved"  or  "sold"
   2. CHANGE A PRICE .......... edit the number after   price:   (no quotes)
   3. RENAME AN ITEM .......... edit the words inside the quotes after   title:

   OTHER HANDY EDITS:
   • RESERVE an item (deposit) . change its status to   "reserved"  (amber RESERVED badge)
   • HIDE an item completely ... change its status to   "hidden"
   • SHOW it at the TOP ........ set   featured: true   (remove that to un-feature)
   • EDIT the little blurb ..... change the text in quotes after   note:

   RULES (so you don't break the page):
   • status: must be one of   "available"   "reserved"   "sold"   "hidden"
   • Always keep the quotes "" around words, and the comma at the end of a line.
   • Only change the bits inside quotes, or the price numbers. Leave the rest.
   • If the page ever looks broken, use GitHub's "History" to undo your last edit.
   ============================================================================ */

window.SALE = {

  /* ---- Sale-wide settings (change any time) ---------------------------- */
  whatsappNumber: "6581955662",          // Faith's WhatsApp number — digits only, no + or spaces
  contactName:    "Faith",
  pickupLocation: "One Western Avenue (OWA), Apt 1101 — Harvard Business School",
  deadline:       "Sun 28 June",
  currency:       "$",
  headline:       "OWA Moving Sale",
  subhead:        "We're moving out — everything available now through Sunday 28 June. Gently used, priced to clear. Pick-up only at OWA, Apt 1101 (Harvard Business School).",

  /* ---- The items ------------------------------------------------------- */
  /* Tip: photos live in the images folder. Just use the file name, e.g. "IMG_3028.jpg".
     You can list more than one photo per item — the first one shows on the card.
     An item with images:[] (no photo) shows a simple placeholder card. */

  items: [

    /* ===== TAKE-IT-ALL BUNDLE ===== */
    { id:"bundle-all", title:"Whole-home furniture package", price:800, status:"hidden", category:"Bundles", featured:true,
      note:"Furnish a whole 1-bedroom OWA apartment in one go — sofa, velvet chairs, desk + office chair, dining table, coffee table, dresser, bed, shelving & lamps. Well below buying piece by piece. Take it all!",
      images:["pack2.jpg","pack1.jpg","pack3.jpg","pack4.jpg"] },

    /* ===== FURNITURE ===== */
    { id:"standing-desk", title:"Electric standing desk", price:100, status:"reserved", category:"Furniture", featured:true,
      note:"Heavy-duty white sit/stand desk — smooth, quiet motorised height adjust.",
      images:["IMG_3034.jpg","IMG_3042.jpg"] },

    { id:"accent-chairs", title:"Pair of velvet accent chairs", price:100, status:"available", category:"Furniture", featured:true,
      note:"Set of 2. Dusty-blue velvet with gold frames — barely used.",
      images:["IMG_3030.jpg"] },

    { id:"office-chair", title:"Ergonomic office chair", price:90, status:"reserved", category:"Furniture", featured:true,
      note:"Grey high-back, fully adjustable. Very comfortable for long days.",
      images:["IMG_3034.jpg"] },

    { id:"bed", title:"Bed — frame + mattress (full)", price:90, status:"available", category:"Furniture", featured:true,
      note:"Black metal frame + mattress. Bedding can be included — just ask.",
      images:["pack4.jpg"] },

    { id:"dining-table", title:"Drop-leaf dining table", price:65, status:"sold", category:"Furniture", featured:true,
      note:"Folds down to save space. (Table only — chairs sold separately below.)",
      images:["IMG_3027.jpg"] },

    { id:"dining-chairs", title:"2 wooden dining chairs", price:15, status:"available", category:"Furniture",
      note:"Set of 2, solid wood with cushions. (From the dining set.)",
      images:["IMG_3027.jpg"] },

    { id:"dresser", title:"5-drawer fabric dresser", price:40, status:"available", category:"Furniture", featured:true,
      note:"Wood top, soft fabric drawers — great for a bedroom.",
      images:["IMG_3044.jpg"] },

    { id:"sectional", title:"Sectional sofa with chaise", price:60, status:"sold", category:"Furniture", featured:true,
      note:"Comfy light-grey L-shape, seats 4–5. Throw + cushions included.",
      images:["IMG_3028.jpg","IMG_3029.jpg","IMG_3041.jpg"] },

    { id:"bar-cart", title:"Bar cart with wine rack", price:48, status:"available", category:"Furniture", featured:true,
      note:"Industrial wood + metal, glass-stem holder & bottle storage.",
      images:["IMG_3032.jpg"] },

    { id:"coffee-table", title:"Black coffee table", price:42, status:"available", category:"Furniture",
      note:"Two-tier with handy lower shelf.",
      images:["IMG_3029.jpg","IMG_3036.jpg"] },

    { id:"cube-shelf", title:"6-cube storage shelf", price:40, status:"sold", category:"Furniture",
      note:"Classic white cube unit — books, bins or display.",
      images:["IMG_3047.jpg"] },

    { id:"entryway-bundle", title:"Shoe rack + bin + clothing rack", price:40, status:"available", category:"Furniture",
      note:"All three together (shown in the same photo): tall 10-tier shoe rack, stainless motion-sensor bin & the black metal clothing rail behind it.",
      images:["IMG_3037.jpg","IMG_3046.jpg"] },

    { id:"garment-rack-wood", title:"Rolling garment rack with shelf", price:30, status:"available", category:"Furniture",
      note:"Wood + metal clothes rail on wheels, with storage shelf.",
      images:["IMG_3045.jpg"] },

    { id:"clothes-rack-metal", title:"Black metal clothes rack", price:10, status:"sold", category:"Furniture",
      note:"Tall freestanding black metal clothes rail.",
      images:["IMG_3046.jpg"] },

    { id:"coat-rack", title:"Wooden coat stand", price:25, status:"sold", category:"Furniture",
      note:"Free-standing branch-style rack for coats & hats.",
      images:["IMG_3039.jpg"] },

    { id:"air-mattress", title:"Air mattress — queen, built-in pump", price:10, status:"reserved", category:"Furniture",
      note:"Used once, basically new. Intex Dura-Beam Deluxe queen (22 inches high) with a built-in electric pump — inflates itself in minutes. Great spare bed.",
      images:["airmattress.jpg"] },

    /* ===== LIGHTING ===== */
    { id:"arc-lamp", title:"Arc floor lamp", price:42, status:"sold", category:"Lighting",
      note:"Brushed-steel arc with white drum shade — great over a sofa.",
      images:["IMG_3041.jpg"] },

    { id:"column-lamps", title:"Pair of tall paper column lamps", price:34, status:"sold", category:"Lighting",
      note:"Set of 2. Soft, cosy lighting.",
      images:["IMG_3040.jpg"] },

    { id:"white-floor-lamp", title:"White floor lamp", price:32, status:"reserved", category:"Lighting",
      note:"Modern pole lamp with linen drum shade.",
      images:["IMG_3043.jpg"] },

    { id:"desk-lamp", title:"Architect desk lamp", price:30, status:"available", category:"Lighting",
      note:"Adjustable task lamp with wireless-charging base.",
      images:["IMG_3042.jpg"] },

    { id:"table-lamps", title:"Table lamps (several available)", price:16, status:"available", category:"Lighting",
      note:"$16 each — linen cylinder, amber glass & white styles. Ask which is left.",
      images:["IMG_3044.jpg"] },

    /* ===== APPLIANCES ===== */
    { id:"monitor", title:"Desktop monitor", price:40, status:"reserved", category:"Appliances",
      note:"Widescreen monitor (the one on the desk in the photo).",
      images:["IMG_3034.jpg"] },

    { id:"blender", title:"High-power blender", price:30, status:"reserved", category:"Appliances",
      note:"Powerful jug blender — smoothies, soups, the works.",
      images:["IMG_3020.jpg"] },

    { id:"microwave", title:"Countertop microwave", price:25, status:"reserved", category:"Appliances",
      note:"Stainless/black, large capacity (the one on the right in the photo).",
      images:["IMG_3022.jpg"] },

    { id:"instant-pot", title:"Instant Pot pressure cooker", price:25, status:"reserved", category:"Appliances",
      note:"Multi-cooker (left in the photo).",
      images:["IMG_3023.jpg"] },

    { id:"grinder", title:"Mixer-grinder (Preethi)", price:25, status:"available", category:"Appliances",
      note:"Stainless wet/dry grinder — great for spices & batters.",
      images:["IMG_3022.jpg"] },

    { id:"air-fryer", title:"Air fryer", price:20, status:"reserved", category:"Appliances",
      note:"Digital air fryer (right in the photo).",
      images:["IMG_3023.jpg"] },

    { id:"tower-fan", title:"Tower fan (Dreo)", price:20, status:"available", category:"Appliances",
      note:"Tall oscillating fan with remote (the tall one).",
      images:["IMG_3031.jpg"] },

    { id:"vacuum", title:"Bagless vacuum cleaner", price:20, status:"available", category:"Appliances",
      note:"Canister vac with hose & floor head.",
      images:["IMG_3038.jpg"] },

    { id:"space-heater", title:"Ceramic space heater (Dreo)", price:15, status:"available", category:"Appliances",
      note:"Compact Dreo ceramic heater — the small one on the table, shown beside the tower fan.",
      images:["IMG_3031.jpg"] },

    { id:"kettle", title:"Electric gooseneck kettle", price:12, status:"available", category:"Appliances",
      note:"Black pour-over style kettle.",
      images:["IMG_3022.jpg"] },

    { id:"humidifier", title:"Humidifier", price:12, status:"available", category:"Appliances",
      note:"Cool-mist humidifier (sitting on top of the shelf in the photo).",
      images:["IMG_3047.jpg"] },

    { id:"toaster", title:"2-slice toaster", price:8, status:"reserved", category:"Appliances",
      note:"Simple and works great.",
      images:["IMG_3022.jpg"] },

    /* ===== KITCHEN ===== */
    { id:"cream-dinnerware", title:"Cream textured dinnerware set", price:45, status:"available", category:"Kitchen",
      note:"Beautifully crafted ribbed stoneware — quality plates + bowls with a lovely textured finish.",
      images:["IMG_3013.jpg"] },

    { id:"wine-glasses", title:"Wine glasses set", price:40, status:"available", category:"Kitchen",
      note:"Full set — red, white & coupe stemware.",
      images:["IMG_3017.jpg"] },

    { id:"food-storage", title:"Glass food storage set", price:30, status:"reserved", category:"Kitchen",
      note:"Lots of glass containers with lids — meal-prep ready.",
      images:["IMG_3025.jpg"] },

    { id:"cookware", title:"Pots & pans bundle", price:30, status:"reserved", category:"Kitchen",
      note:"Stockpot, frying pans, lids, colander, sieves & thermal carafe.",
      images:["IMG_3019.jpg"] },

    { id:"tumblers", title:"Stemless glasses & tumblers", price:25, status:"available", category:"Kitchen",
      note:"Everyday drinking glasses — a good batch.",
      images:["IMG_3018.jpg"] },

    { id:"dinner-set-green", title:"Sage-green dinnerware set", price:18, status:"reserved", category:"Kitchen",
      note:"Plates + bowls, lovely matte finish.",
      images:["IMG_3012.jpg"] },

    { id:"knives", title:"Kitchen knife set", price:15, status:"reserved", category:"Kitchen",
      note:"Chef, bread & steak knives.",
      images:["IMG_3026.jpg"] },

    { id:"utensils", title:"Utensils, flatware & oven mitts", price:15, status:"reserved", category:"Kitchen",
      note:"Cooking utensils, full cutlery set, can opener & mitts.",
      images:["IMG_3024.jpg"] },

    { id:"saute-pan", title:"Large sauté pan with lid", price:12, status:"available", category:"Kitchen",
      note:"Deep non-stick pan with glass lid.",
      images:["IMG_3021.jpg"] },

    { id:"pitcher-bowls", title:"Glass pitcher, bowls & tray", price:12, status:"available", category:"Kitchen",
      note:"Glass pitcher, mixing/serving bowls and a baking tray.",
      images:["IMG_3014.jpg"] },

    { id:"vases", title:"Glass hurricane vases (set of 3)", price:12, status:"available", category:"Kitchen",
      note:"Tall clear vases for flowers or candles.",
      images:["IMG_3015.jpg"] },

    { id:"bakeware", title:"Bakeware / casserole dishes", price:5, status:"available", category:"Kitchen",
      note:"Sold per piece — 2 small brown $5 each, mint & blue $10 each. (Glass dish with lid is reserved.)",
      images:["IMG_3016.jpg"] },

    { id:"mugs", title:"Set of mugs", price:8, status:"reserved", category:"Kitchen",
      note:"Set of about 7 white/cream mugs.",
      images:["IMG_3011.jpg"] },

    /* ===== PLANTS ===== */
    { id:"plants", title:"House plants — the whole lot", price:120, status:"reserved", category:"Plants",
      note:"All the plants together: lots of real & faux, including big statement trees. Price is for the full collection.",
      images:["IMG_3036.jpg"] },

  ]
};

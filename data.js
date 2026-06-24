/* ============================================================================
   OWA FURNITURE SALE  —  THIS IS THE ONLY FILE YOU NEED TO EDIT
   ============================================================================

   After you change something here and click "Commit changes" on GitHub,
   the live website updates by itself in about a minute. (Refresh the page.)

   ----------------------------------------------------------------------------
   THE 3 THINGS YOU'LL DO MOST:
   ----------------------------------------------------------------------------
   1. MARK SOMETHING SOLD .... change   status: "available"   to   status: "sold"
   2. CHANGE A PRICE .......... edit the number after   price:   (no quotes)
   3. RENAME AN ITEM .......... edit the words inside the quotes after   title:

   OTHER HANDY EDITS:
   • HIDE an item completely ... change its status to   "hidden"
   • SHOW it at the TOP ........ set   featured: true   (remove that to un-feature)
   • EDIT the little blurb ..... change the text in quotes after   note:

   RULES (so you don't break the page):
   • status: must be exactly one of   "available"   "sold"   "hidden"
   • Always keep the quotes "" around words, and the comma at the end of a line.
   • Only change the bits inside quotes, or the price numbers. Leave the rest.
   • If the page ever looks broken, use GitHub's "History" to undo your last edit.
   ============================================================================ */

window.SALE = {

  /* ---- Sale-wide settings (change any time) ---------------------------- */
  whatsappNumber: "6581955662",          // Faith's WhatsApp number — digits only, no + or spaces
  contactName:    "Faith",
  pickupLocation: "One Western Avenue (OWA)",
  deadline:       "Sunday 29 June",
  currency:       "$",
  headline:       "OWA Moving Sale",
  subhead:        "We're moving out — everything must go by 29 June. Gently used, priced to clear. Pick-up only at OWA.",

  /* ---- The items ------------------------------------------------------- */
  /* Tip: photos live in the images folder. Just use the file name, e.g. "IMG_3028.jpg".
     You can list more than one photo per item — the first one shows on the card. */

  items: [

    /* ===== TAKE-IT-ALL BUNDLE ===== */
    { id:"bundle-all", title:"Whole-home furniture package", price:850, status:"available", category:"Bundles", featured:true,
      note:"Take the lot and save big: sofa, chairs, desk + chair, dining table, coffee table, dresser, bed, shelving & lamps. Let's make a deal — everything must go!",
      images:["pack2.jpg","pack1.jpg","pack3.jpg","pack4.jpg"] },

    /* ===== FURNITURE ===== */
    { id:"sectional", title:"Sectional sofa with chaise", price:250, status:"available", category:"Furniture", featured:true,
      note:"Comfy light-grey L-shape, seats 4–5. Throw + cushions included.",
      images:["IMG_3028.jpg","IMG_3029.jpg","IMG_3041.jpg"] },

    { id:"accent-chairs", title:"Pair of velvet accent chairs", price:140, status:"available", category:"Furniture", featured:true,
      note:"Set of 2. Dusty-blue velvet with gold frames — barely used.",
      images:["IMG_3030.jpg"] },

    { id:"standing-desk", title:"Electric standing desk", price:160, status:"available", category:"Furniture", featured:true,
      note:"White sit/stand desk, smooth motorised height adjust.",
      images:["IMG_3034.jpg","IMG_3042.jpg"] },

    { id:"office-chair", title:"Ergonomic office chair", price:130, status:"available", category:"Furniture", featured:true,
      note:"Grey high-back, fully adjustable. Very comfortable for long days.",
      images:["IMG_3034.jpg"] },

    { id:"dining-table", title:"Drop-leaf dining table + 2 chairs", price:90, status:"available", category:"Furniture", featured:true,
      note:"Folds down to save space. Wooden chairs with cushions included.",
      images:["IMG_3027.jpg"] },

    { id:"coffee-table", title:"Black coffee table", price:45, status:"available", category:"Furniture", featured:true,
      note:"Two-tier with handy lower shelf.",
      images:["IMG_3029.jpg","IMG_3036.jpg"] },

    { id:"bar-cart", title:"Bar cart with wine rack", price:65, status:"available", category:"Furniture", featured:true,
      note:"Industrial wood + metal, glass-stem holder & bottle storage.",
      images:["IMG_3032.jpg"] },

    { id:"dresser", title:"5-drawer fabric dresser", price:55, status:"available", category:"Furniture", featured:true,
      note:"Wood top, soft fabric drawers — great for a bedroom.",
      images:["IMG_3044.jpg"] },

    { id:"bed", title:"Bed — frame + mattress (full)", price:140, status:"available", category:"Furniture", featured:true,
      note:"Black metal frame + mattress. Bedding can be included — just ask.",
      images:["pack4.jpg"] },

    { id:"cube-shelf", title:"6-cube storage shelf", price:45, status:"available", category:"Furniture",
      note:"Classic white cube unit — books, bins or display.",
      images:["IMG_3047.jpg"] },

    { id:"coat-rack", title:"Wooden coat stand", price:25, status:"available", category:"Furniture",
      note:"Free-standing branch-style rack for coats & hats.",
      images:["IMG_3039.jpg"] },

    { id:"garment-rack-wood", title:"Rolling garment rack with shelf", price:30, status:"available", category:"Furniture",
      note:"Wood + metal clothes rail on wheels, with storage shelf.",
      images:["IMG_3045.jpg"] },

    { id:"garment-rack-metal", title:"Black metal garment rack", price:20, status:"available", category:"Furniture",
      note:"Tall freestanding clothes rail.",
      images:["IMG_3046.jpg"] },

    /* ===== LIGHTING ===== */
    { id:"arc-lamp", title:"Arc floor lamp", price:45, status:"available", category:"Lighting",
      note:"Brushed-steel arc with white drum shade — great over a sofa.",
      images:["IMG_3041.jpg"] },

    { id:"column-lamps", title:"Pair of tall paper column lamps", price:35, status:"available", category:"Lighting",
      note:"Set of 2. Soft, cosy lighting.",
      images:["IMG_3040.jpg"] },

    { id:"white-floor-lamp", title:"White floor lamp", price:30, status:"available", category:"Lighting",
      note:"Modern pole lamp with linen drum shade.",
      images:["IMG_3043.jpg"] },

    { id:"desk-lamp", title:"Architect desk lamp", price:30, status:"available", category:"Lighting",
      note:"Adjustable task lamp with wireless-charging base.",
      images:["IMG_3042.jpg"] },

    { id:"table-lamps", title:"Table lamps (several available)", price:15, status:"available", category:"Lighting",
      note:"$15 each — linen cylinder, amber glass & white styles. Ask Faith which is left.",
      images:["IMG_3044.jpg"] },

    /* ===== APPLIANCES ===== */
    { id:"microwave", title:"Countertop microwave", price:40, status:"available", category:"Appliances",
      note:"Stainless/black, large capacity (the one on the right in the photo).",
      images:["IMG_3022.jpg"] },

    { id:"blender", title:"High-power blender", price:45, status:"available", category:"Appliances",
      note:"Powerful jug blender — smoothies, soups, the works.",
      images:["IMG_3020.jpg"] },

    { id:"instant-pot", title:"Instant Pot pressure cooker", price:35, status:"available", category:"Appliances",
      note:"Multi-cooker (left in the photo).",
      images:["IMG_3023.jpg"] },

    { id:"air-fryer", title:"Air fryer", price:30, status:"available", category:"Appliances",
      note:"Digital air fryer (right in the photo).",
      images:["IMG_3023.jpg"] },

    { id:"grinder", title:"Mixer-grinder (Preethi)", price:35, status:"available", category:"Appliances",
      note:"Stainless wet/dry grinder — great for spices & batters.",
      images:["IMG_3022.jpg"] },

    { id:"kettle", title:"Electric gooseneck kettle", price:18, status:"available", category:"Appliances",
      note:"Black pour-over style kettle.",
      images:["IMG_3022.jpg"] },

    { id:"toaster", title:"2-slice toaster", price:12, status:"available", category:"Appliances",
      note:"Simple and works great.",
      images:["IMG_3022.jpg"] },

    { id:"tower-fan", title:"Tower fan (Dreo)", price:30, status:"available", category:"Appliances",
      note:"Tall oscillating fan with remote (the tall one).",
      images:["IMG_3031.jpg"] },

    { id:"space-heater", title:"Ceramic space heater (Dreo)", price:25, status:"available", category:"Appliances",
      note:"Compact and quiet (the small one on the table).",
      images:["IMG_3031.jpg"] },

    { id:"vacuum", title:"Bagless vacuum cleaner", price:35, status:"available", category:"Appliances",
      note:"Canister vac with hose & floor head.",
      images:["IMG_3038.jpg"] },

    { id:"humidifier", title:"Humidifier", price:20, status:"available", category:"Appliances",
      note:"Cool-mist humidifier (sitting on top of the shelf in the photo).",
      images:["IMG_3047.jpg"] },

    { id:"trash-can", title:"Stainless sensor bin", price:20, status:"available", category:"Appliances",
      note:"Motion-sensor lid, no-touch.",
      images:["IMG_3037.jpg"] },

    /* ===== KITCHEN ===== */
    { id:"cookware", title:"Pots & pans bundle", price:45, status:"available", category:"Kitchen",
      note:"Stockpot, frying pans, lids, colander, sieves & thermal carafe.",
      images:["IMG_3019.jpg"] },

    { id:"saute-pan", title:"Large sauté pan with lid", price:20, status:"available", category:"Kitchen",
      note:"Deep non-stick pan with glass lid.",
      images:["IMG_3021.jpg"] },

    { id:"dinner-set-green", title:"Sage-green dinnerware set", price:25, status:"available", category:"Kitchen",
      note:"Plates + bowls, lovely matte finish.",
      images:["IMG_3012.jpg"] },

    { id:"dinner-set-cream", title:"Cream textured dinnerware set", price:25, status:"available", category:"Kitchen",
      note:"Plates + bowls with a ribbed, modern look.",
      images:["IMG_3013.jpg"] },

    { id:"mugs", title:"Set of mugs", price:10, status:"available", category:"Kitchen",
      note:"Set of about 7 white/cream mugs.",
      images:["IMG_3011.jpg"] },

    { id:"wine-glasses", title:"Wine glasses set", price:15, status:"available", category:"Kitchen",
      note:"Red, white & coupe stemware.",
      images:["IMG_3017.jpg"] },

    { id:"tumblers", title:"Stemless glasses & tumblers", price:15, status:"available", category:"Kitchen",
      note:"Everyday drinking glasses, a good batch.",
      images:["IMG_3018.jpg"] },

    { id:"food-storage", title:"Glass food storage set", price:25, status:"available", category:"Kitchen",
      note:"Lots of glass containers with lids — meal-prep ready.",
      images:["IMG_3025.jpg"] },

    { id:"knives", title:"Kitchen knife set", price:20, status:"available", category:"Kitchen",
      note:"Chef, bread & steak knives.",
      images:["IMG_3026.jpg"] },

    { id:"utensils", title:"Utensils, flatware & oven mitts", price:20, status:"available", category:"Kitchen",
      note:"Cooking utensils, full cutlery set, can opener & mitts.",
      images:["IMG_3024.jpg"] },

    { id:"bakeware", title:"Bakeware / casserole set", price:25, status:"available", category:"Kitchen",
      note:"Ceramic & glass baking dishes in several sizes.",
      images:["IMG_3016.jpg"] },

    { id:"pitcher-bowls", title:"Glass pitcher, bowls & tray", price:15, status:"available", category:"Kitchen",
      note:"Glass pitcher, mixing/serving bowls and a baking tray.",
      images:["IMG_3014.jpg"] },

    { id:"vases", title:"Glass hurricane vases (set of 3)", price:12, status:"available", category:"Kitchen",
      note:"Tall clear vases for flowers or candles.",
      images:["IMG_3015.jpg"] },

    /* ===== PLANTS ===== */
    { id:"plants", title:"House plants — from $5 each", price:5, status:"available", category:"Plants",
      note:"Lots of real & faux plants, including big statement trees. From $5 — ask Faith what's left.",
      images:["IMG_3036.jpg"] },

  ]
};

# OWA Moving Sale 🛋️

The live page: **https://paultesar.github.io/owa-furniture-sale/**

Buyers browse items, tap the ones they want, and send the list to Faith on
WhatsApp in one tap. Pick-up only at OWA.

---

## ✏️ How to update the sale (the only thing you edit: `data.js`)

You manage everything from one file: **[`data.js`](data.js)**. You can edit it
right here on your phone or laptop — no apps to install.

**To edit on your phone or computer:**
1. Open **[`data.js`](data.js)** (tap the file name above).
2. Tap the **pencil ✏️ icon** (top-right) to edit.
3. Make your change (see below).
4. Scroll down, tap the green **Commit changes** button.
5. Wait ~1 minute, then refresh the sale page. Done. ✅

### The 3 things you'll do most

| I want to… | Do this in `data.js` |
|---|---|
| **Mark something SOLD** | Change `status: "available"` to `status: "sold"` on that item |
| **Change a price** | Edit the number after `price:` (e.g. `price: 250` → `price: 200`) |
| **Rename an item** | Edit the words inside the quotes after `title:` |

### Other handy edits
- **Hide an item completely:** change its `status` to `"hidden"`
- **Show an item at the very top:** add `featured: true` to it
- **Edit the little blurb:** change the text in quotes after `note:`
- **Change Faith's number, the deadline, or pick-up text:** see the settings block at the top of `data.js`

### ⚠️ A couple of rules so nothing breaks
- `status` must be exactly one of: `"available"`, `"sold"`, or `"hidden"` (keep the quotes).
- Keep the quotes `" "` around words, and the comma at the end of each line.
- Only change the bits inside quotes, or the price numbers. Leave the rest alone.
- **If the page ever looks broken:** open `data.js` → click **History** → open your
  last edit → **Revert**. The page fixes itself in a minute. Nothing is ever lost.

---

## Adding a brand-new item later
Copy one existing item line in `data.js`, paste it, and change the `id` (must be
unique), `title`, `price`, and `images`. Put new photos in `images/web/` and
`images/thumb/` using the same file name.

That's it — happy selling! 💛

/* ===== OWA Furniture Sale — app logic (you don't need to edit this file) ===== */
(function () {
  "use strict";

  var CAT_ORDER = ["Bundles", "Furniture", "Lighting", "Appliances", "Kitchen", "Plants"];
  var THUMB = "images/thumb/";
  var FULL = "images/web/";

  var S = window.SALE;
  var selected = new Set();
  var activeFilter = "All";

  // ---------- guard: broken or missing data ----------
  if (!S || !Array.isArray(S.items)) {
    document.getElementById("grid").innerHTML =
      '<div class="notice"><b>Hmm, the item list couldn\'t load.</b><br>' +
      "If you just edited <code>data.js</code>, there's likely a small typo " +
      "(a missing comma or quote). Open <b>data.js</b> on GitHub, click " +
      "<b>History</b>, and restore the previous version — the page will fix itself.</div>";
    return;
  }

  var cur = S.currency || "$";
  function money(n) { return cur + (Math.round(n * 100) / 100).toLocaleString(); }
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // ---------- header text ----------
  function fillHeader() {
    document.getElementById("headline").textContent = S.headline || "Moving Sale";
    document.getElementById("subhead").textContent = S.subhead || "";
    document.getElementById("deadline").textContent = S.deadline || "soon";
    document.getElementById("pickup").textContent = S.pickupLocation || "pick-up only";
    var avail = S.items.filter(function (i) { return i.status === "available"; }).length;
    document.getElementById("livecount").textContent =
      avail + (avail === 1 ? " item" : " items") + " still available";

    var name = S.contactName || "us";
    var hi = "Hi " + name + "! I'm interested in the OWA furniture sale";
    var link = "https://wa.me/" + (S.whatsappNumber || "") + "?text=" + encodeURIComponent(hi);
    var c = document.getElementById("contact");
    c.innerHTML = "Questions? <a href='" + link + "' target='_blank' rel='noopener'>Message " +
      esc(name) + " on WhatsApp →</a>";
  }

  // ---------- sorting ----------
  function catRank(c) { var i = CAT_ORDER.indexOf(c); return i === -1 ? 99 : i; }
  function sortItems(arr) {
    return arr.slice().sort(function (a, b) {
      var sa = a.status === "sold" ? 1 : 0, sb = b.status === "sold" ? 1 : 0;
      if (sa !== sb) return sa - sb;                       // available before sold
      var fa = a.featured ? 0 : 1, fb = b.featured ? 0 : 1;
      if (fa !== fb) return fa - fb;                       // featured first
      return (b.price || 0) - (a.price || 0);             // pricier first
    });
  }

  // ---------- render ----------
  function visibleItems() {
    return S.items.filter(function (i) { return i.status !== "hidden"; });
  }

  function buildFilters() {
    var box = document.getElementById("filters");
    var items = visibleItems();
    var cats = CAT_ORDER.filter(function (c) {
      return items.some(function (i) { return i.category === c; });
    });
    // any categories not in CAT_ORDER
    items.forEach(function (i) {
      if (i.category && cats.indexOf(i.category) === -1) cats.push(i.category);
    });
    var chips = ["All"].concat(cats);
    box.innerHTML = chips.map(function (c) {
      var n = c === "All"
        ? items.filter(function (i) { return i.status === "available"; }).length
        : items.filter(function (i) { return i.category === c && i.status === "available"; }).length;
      return '<button class="chip' + (c === activeFilter ? " active" : "") +
        '" data-cat="' + esc(c) + '">' + esc(c) +
        '<span class="count">' + n + "</span></button>";
    }).join("");
    box.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        activeFilter = b.getAttribute("data-cat");
        buildFilters(); renderGrid();
        window.scrollTo({ top: document.getElementById("grid").offsetTop - 60, behavior: "smooth" });
      });
    });
  }

  function cardHTML(it) {
    var imgs = it.images && it.images.length ? it.images : [];
    var first = imgs.length ? THUMB + imgs[0] : "";
    var sold = it.status === "sold";
    var multi = imgs.length > 1
      ? '<div class="photocount">📷 ' + imgs.length + "</div>" : "";
    var imgInner = first
      ? '<img loading="lazy" src="' + esc(first) + '" alt="' + esc(it.title) + '">'
      : '<div class="noimg"><span class="emoji">🛏️</span><span>No photo yet</span></div>';
    return '<article class="card' + (sold ? " sold" : "") +
      (selected.has(it.id) ? " selected" : "") + '" data-id="' + esc(it.id) + '">' +
      '<div class="imgwrap" data-zoom="' + esc(it.id) + '">' +
        imgInner +
        '<div class="check">✓</div>' +
        (first ? '<div class="zoom">🔍</div>' : "") + multi +
        (sold ? '<div class="sold-ribbon"><span>SOLD</span></div>' : "") +
      "</div>" +
      '<div class="body">' +
        '<div class="title">' + esc(it.title) + "</div>" +
        (it.note ? '<div class="note">' + esc(it.note) + "</div>" : "") +
        '<div class="foot">' +
          '<span class="price">' + money(it.price || 0) + "</span>" +
          (sold ? "" : '<button class="add" data-add="' + esc(it.id) + '">' +
            (selected.has(it.id) ? "✓ Added" : "+ Add") + "</button>") +
        "</div>" +
      "</div></article>";
  }

  function renderGrid() {
    var grid = document.getElementById("grid");
    var items = visibleItems();
    if (activeFilter !== "All") {
      items = items.filter(function (i) { return i.category === activeFilter; });
    }
    if (!items.length) {
      grid.innerHTML = '<div class="notice">Nothing here right now.</div>';
      return;
    }
    var html = "";
    if (activeFilter === "All") {
      var cats = CAT_ORDER.slice();
      items.forEach(function (i) { if (cats.indexOf(i.category) === -1) cats.push(i.category); });
      cats.forEach(function (c) {
        var inCat = sortItems(items.filter(function (i) { return i.category === c; }));
        if (!inCat.length) return;
        html += '<div class="section-label">' + esc(c) + "</div>";
        html += inCat.map(cardHTML).join("");
      });
    } else {
      html = sortItems(items).map(cardHTML).join("");
    }
    grid.innerHTML = html;
    bindCards();
  }

  function bindCards() {
    var grid = document.getElementById("grid");
    grid.querySelectorAll(".imgwrap").forEach(function (w) {
      w.addEventListener("click", function (e) {
        e.stopPropagation();
        openLightbox(w.getAttribute("data-zoom"));
      });
    });
    grid.querySelectorAll(".card").forEach(function (card) {
      var id = card.getAttribute("data-id");
      if (card.classList.contains("sold")) return;
      card.addEventListener("click", function () { toggle(id); });
    });
  }

  // ---------- selection + cart ----------
  function toggle(id) {
    if (selected.has(id)) selected.delete(id); else selected.add(id);
    // update just this card + button
    var card = document.querySelector('.card[data-id="' + cssEsc(id) + '"]');
    if (card) {
      card.classList.toggle("selected", selected.has(id));
      var btn = card.querySelector(".add");
      if (btn) btn.textContent = selected.has(id) ? "✓ Added" : "+ Add";
    }
    updateCart();
  }
  function cssEsc(s) { return String(s).replace(/"/g, '\\"'); }

  function selectedItems() {
    return S.items.filter(function (i) { return selected.has(i.id) && i.status === "available"; });
  }

  function updateCart() {
    var items = selectedItems();
    var bar = document.getElementById("cartbar");
    if (!items.length) { bar.classList.remove("show"); return; }
    var total = items.reduce(function (s, i) { return s + (i.price || 0); }, 0);
    document.getElementById("cart-n").textContent =
      items.length + (items.length === 1 ? " item · " : " items · ") + money(total);
    document.getElementById("cart-t").textContent = "Pick-up at " + (S.pickupLocation || "OWA");
    document.getElementById("wa").href = waLink(items, total);
    bar.classList.add("show");
  }

  function waLink(items, total) {
    var name = S.contactName || "there";
    var lines = items.map(function (i) { return "• " + i.title + " — " + money(i.price || 0); });
    var msg = "Hi " + name + "! I'd like to buy these from the OWA sale:\n\n" +
      lines.join("\n") + "\n\nTotal: " + money(total) +
      "\nPick-up at " + (S.pickupLocation || "OWA") + ". When could I collect?";
    return "https://wa.me/" + (S.whatsappNumber || "") + "?text=" + encodeURIComponent(msg);
  }

  document.getElementById("clear").addEventListener("click", function () {
    selected.clear();
    document.querySelectorAll(".card.selected").forEach(function (c) {
      c.classList.remove("selected");
      var b = c.querySelector(".add"); if (b) b.textContent = "+ Add";
    });
    updateCart();
  });

  // ---------- lightbox ----------
  var lbImgs = [], lbIdx = 0, lbItem = null;
  function openLightbox(id) {
    var it = S.items.filter(function (i) { return i.id === id; })[0];
    if (!it || !it.images || !it.images.length) return;
    lbItem = it; lbImgs = it.images; lbIdx = 0;
    document.getElementById("lb").classList.add("show");
    document.body.style.overflow = "hidden";
    showLb();
  }
  function showLb() {
    document.getElementById("lb-img").src = FULL + lbImgs[lbIdx];
    var more = lbImgs.length > 1 ? "  (" + (lbIdx + 1) + "/" + lbImgs.length + ")" : "";
    document.getElementById("lb-cap").innerHTML =
      esc(lbItem.title) + ' <span class="lb-price">' + money(lbItem.price || 0) + "</span>" + esc(more);
    document.querySelector(".lb-prev").style.display = lbImgs.length > 1 ? "" : "none";
    document.querySelector(".lb-next").style.display = lbImgs.length > 1 ? "" : "none";
  }
  function closeLb() {
    document.getElementById("lb").classList.remove("show");
    document.body.style.overflow = "";
  }
  function lbStep(d) { lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length; showLb(); }
  document.querySelector(".lb-close").addEventListener("click", closeLb);
  document.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); lbStep(-1); });
  document.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); lbStep(1); });
  document.getElementById("lb").addEventListener("click", function (e) {
    if (e.target.id === "lb" || e.target.id === "lb-img") closeLb();
  });
  document.addEventListener("keydown", function (e) {
    if (!document.getElementById("lb").classList.contains("show")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft" && lbImgs.length > 1) lbStep(-1);
    if (e.key === "ArrowRight" && lbImgs.length > 1) lbStep(1);
  });

  // ---------- go ----------
  fillHeader();
  buildFilters();
  renderGrid();
  updateCart();
})();

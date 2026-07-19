(() => {
  "use strict";

  /* ============================
     Product data
     Swap this for a real feed (Shopify Storefront API, Snipcart, etc.)
     when wiring up real checkout.
     ============================ */
  const PRODUCTS = [
    { id: "aurora-catsuit",   name: "Aurora Catsuit",        color: "Black",       swatch: "swatch-black",  price: 420, tag: "Bestseller" },
    { id: "tidal-dress",      name: "Tidal Mini Dress",      color: "Wine Red",    swatch: "swatch-wine",   price: 260, tag: "New" },
    { id: "harbourline-skirt",name: "Harbourline Skirt",     color: "Storm Grey",  swatch: "swatch-storm",  price: 180, tag: "" },
    { id: "rainshell-trench", name: "Rainshell Trench",      color: "Black",       swatch: "swatch-black",  price: 540, tag: "Limited" },
    { id: "northshore-top",   name: "Northshore Corset Top", color: "Forest Green",swatch: "swatch-forest", price: 220, tag: "" },
    { id: "seawall-leggings", name: "Seawall Leggings",      color: "Chrome",      swatch: "swatch-chrome", price: 160, tag: "New" },
  ];

  const CART_KEY = "wetcoast_cart";
  const money = (n) => `$${n.toFixed(2)} CAD`;

  /* ============================
     Cart state (localStorage-backed mock)
     ============================ */
  const getCart = () => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || {};
    } catch {
      return {};
    }
  };
  const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

  const addToCart = (id) => {
    const cart = getCart();
    cart[id] = (cart[id] || 0) + 1;
    saveCart(cart);
    renderCart();
  };
  const changeQty = (id, delta) => {
    const cart = getCart();
    if (!cart[id]) return;
    cart[id] += delta;
    if (cart[id] <= 0) delete cart[id];
    saveCart(cart);
    renderCart();
  };
  const removeFromCart = (id) => {
    const cart = getCart();
    delete cart[id];
    saveCart(cart);
    renderCart();
  };

  function renderCart() {
    const cart = getCart();
    const itemsEl = document.getElementById("cartItems");
    const emptyEl = document.getElementById("cartEmpty");
    const countEl = document.getElementById("cartCount");
    const subtotalEl = document.getElementById("cartSubtotal");

    const entries = Object.entries(cart);
    const totalCount = entries.reduce((sum, [, qty]) => sum + qty, 0);
    countEl.textContent = totalCount;

    itemsEl.innerHTML = "";

    if (entries.length === 0) {
      emptyEl.hidden = false;
      itemsEl.appendChild(emptyEl);
      subtotalEl.textContent = money(0);
      return;
    }
    emptyEl.hidden = true;

    let subtotal = 0;
    entries.forEach(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return;
      subtotal += product.price * qty;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item-swatch ${product.swatch}"></div>
        <div class="cart-item-body">
          <h4>${product.name}</h4>
          <p>${product.color} · ${money(product.price)}</p>
          <div class="cart-item-controls">
            <button type="button" data-action="dec" aria-label="Decrease quantity">−</button>
            <span>${qty}</span>
            <button type="button" data-action="inc" aria-label="Increase quantity">+</button>
            <button type="button" class="cart-item-remove" data-action="remove">Remove</button>
          </div>
        </div>
      `;
      row.querySelector('[data-action="inc"]').addEventListener("click", () => changeQty(id, 1));
      row.querySelector('[data-action="dec"]').addEventListener("click", () => changeQty(id, -1));
      row.querySelector('[data-action="remove"]').addEventListener("click", () => removeFromCart(id));
      itemsEl.appendChild(row);
    });

    subtotalEl.textContent = money(subtotal);
  }

  /* ============================
     Product grid render
     ============================ */
  function renderProducts() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = PRODUCTS.map((p) => `
      <article class="product-card" data-reveal>
        <div class="product-media">
          <div class="swatch ${p.swatch}"></div>
          ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="product-color">${p.color}</p>
          <p class="product-price">${money(p.price)}</p>
          <button type="button" class="add-to-cart" data-id="${p.id}">Add to Bag</button>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.id);
        const original = btn.textContent;
        btn.dataset.added = "true";
        btn.textContent = "Added ✓";
        setTimeout(() => {
          btn.dataset.added = "false";
          btn.textContent = original;
        }, 1400);
      });
    });
  }

  /* ============================
     Cart drawer open/close
     ============================ */
  function initCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    const openBtn = document.getElementById("cartToggle");
    const closeBtn = document.getElementById("cartClose");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const open = () => {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      overlay.hidden = false;
      openBtn.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      overlay.hidden = true;
      openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    checkoutBtn.addEventListener("click", () => {
      const cart = getCart();
      if (Object.keys(cart).length === 0) return;
      // Placeholder: wire this button to a real checkout provider
      // (Shopify Buy Button, Snipcart, Stripe Checkout) when going live.
      alert("This is a demo storefront — connect a checkout provider (Shopify, Snipcart, Stripe) to take real orders.");
    });
  }

  /* ============================
     Mobile nav + search toggle
     ============================ */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("primaryNav");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const searchToggle = document.getElementById("searchToggle");
    const searchBar = document.getElementById("searchBar");
    searchToggle.addEventListener("click", () => {
      const isHidden = searchBar.hidden;
      searchBar.hidden = !isHidden;
      searchToggle.setAttribute("aria-expanded", String(isHidden));
      if (isHidden) searchBar.querySelector("input").focus();
    });
  }

  /* ============================
     Newsletter form (mock submit)
     ============================ */
  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    const status = document.getElementById("newsletterStatus");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if (!email || !form.email.checkValidity()) {
        status.textContent = "Please enter a valid email address.";
        return;
      }
      // Placeholder: POST to a real ESP (Klaviyo, Mailchimp, etc.) when going live.
      status.textContent = `Thanks — check ${email} for your 10% off code.`;
      form.reset();
    });
  }

  /* ============================
     Scroll reveal
     ============================ */
  function initReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
    initCartDrawer();
    initNav();
    initNewsletter();
    initReveal();
  });
})();

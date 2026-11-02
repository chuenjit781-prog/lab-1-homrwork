/**
 * เค้กนะเค้ก (Cake Na Cake) - Interactive Scripts
 * Handles Menu Catalog, Interactive Cake Builder, Cart Drawer & LINE Order Generator
 */

// ==========================================
// 1. Menu Items Data
// ==========================================
const CAKE_PRODUCTS = [
  {
    id: 'cake-1',
    name: 'สตรอว์เบอร์รี่ ช็อตเค้ก สไตล์ญี่ปุ่น',
    category: 'fruit',
    price: 650,
    tag: 'Best Seller',
    tagClass: 'tag-bestseller',
    desc: 'เนื้อสปันจ์เค้กนุ่มละมุน สลับชั้นครีมสดแท้จากฮอกไกโด ท็อปด้วยสตรอว์เบอร์รี่สดลูกโต หวานฉ่ำซ่อนเปรี้ยว',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-2',
    name: 'ดาร์กช็อกโกแลต ฟัดจ์ ลาวา',
    category: 'chocolate',
    price: 590,
    tag: 'เข้มข้น 70%',
    tagClass: '',
    desc: 'สำหรับคนรักช็อกโกแลตแท้ เนื้อเค้กช็อกโกแลตนุ่มหนึบ ราดด้วยซอสกานาชช็อกโกแลตเบลเยียมเข้มข้น หวานน้อยกลมกล่อม',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-3',
    name: 'บาสก์ชีสเค้ก หน้าไหม้ซิกเนเจอร์',
    category: 'cheesecake',
    price: 690,
    tag: 'Signature',
    tagClass: 'tag-bestseller',
    desc: 'ชีสเค้กหน้าไหม้สไตล์สเปน ครีมชีสฟิลาเดลเฟียแท้ เนื้อกึ่งเยิ้ม หอมกลิ่นคาราเมลไหม้ ละลายในปากทันทีที่สัมผัส',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-4',
    name: 'เค้กมินิมอลวันเกิด พาสเทลเรโทร',
    category: 'birthday',
    price: 550,
    tag: 'เขียนข้อความฟรี',
    tagClass: 'tag-new',
    desc: 'เค้กสไตล์เกาหลีมินิมอล บีบครีมระบายรอบขอบ เลือกคู่สีพาสเทลได้ตามใจ พร้อมเขียนข้อความอวยพรสุดพิเศษ',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-5',
    name: 'เค้กมะยงชิด ชีสพายสด (ตามฤดูกาล)',
    category: 'fruit',
    price: 790,
    tag: 'Seasonal',
    tagClass: 'tag-new',
    desc: 'มะยงชิดลูกโตหวานฉ่ำคัดพิเศษ คว้านเมล็ดเรียงเต็มหน้าเค้ก ฐานพายกรุบกรอบหอมเนยสด ครีมชีสนุ่มนวล',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-6',
    name: 'มัทฉะอุจิ เครปเค้ก ซอสถั่วแดง',
    category: 'birthday',
    price: 620,
    tag: 'หวานน้อย',
    tagClass: '',
    desc: 'แป้งเครปบางนุ่มกว่า 20 ชั้น ปาดด้วยครีมชาเขียวมัทฉะแท้จากเมืองอุจิ เกียวโต เสิร์ฟพร้อมซอสสตรอว์เบอร์รี่สดหรือถั่วแดงกวน',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-7',
    name: 'เรดเวลเวท ครีมชีสฟรอสติ้ง',
    category: 'birthday',
    price: 580,
    tag: 'คลาสสิก',
    tagClass: '',
    desc: 'เนื้อเค้กเวลเวทสีแดงกำมะหยี่นุ่มชุ่มฉ่ำ หอมกลิ่นโกโก้อ่อนๆ ตัดรสด้วยครีมชีสฟรอสติ้งเปรี้ยวอมหวานพรีเมียม',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-8',
    name: 'บลูเบอร์รี่ ครัมเบิ้ล ชีสเค้ก',
    category: 'cheesecake',
    price: 650,
    tag: 'ยอดนิยม',
    tagClass: 'tag-bestseller',
    desc: 'ชีสเค้กเนื้อเนียนแน่น สอดไส้ซอสบลูเบอร์รี่โฮมเมด ท็อปด้วยบลูเบอร์รี่สดและครัมเบิ้ลเนยสดกรุบกรอบเคี้ยวเพลิน',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=700&q=80'
  }
];

// ==========================================
// 2. State Management
// ==========================================
let cart = [];

// Builder State
let builderState = {
  sizeValue: '1',
  sizeLabel: '1 ปอนด์ (3-4 คน)',
  sizePrice: 590,
  
  flavorLabel: 'วนิลลาเนยสด',
  flavorPrice: 0,
  
  colorName: 'ชมพูพาสเทล',
  colorTop: '#FFE4E8',
  colorBody: '#FFCCD5',
  textColor: '#831843',
  
  toppingVal: 'strawberry',
  toppingLabel: 'สตรอว์เบอร์รี่สด',
  toppingPrice: 60,
  
  customText: 'สุขสันต์วันเกิด!',
  freeCandle: true
};

// ==========================================
// 3. Initialize on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts('all');
  initTabs();
  initCustomCakeBuilder();
  initCartDrawer();
  initMobileNav();
  initQuickInquiryDefaultDate();
});

// ==========================================
// 4. Products Rendering & Filtering
// ==========================================
function renderProducts(category = 'all') {
  const cakeGrid = document.getElementById('cakeGrid');
  if (!cakeGrid) return;

  const filtered = category === 'all' 
    ? CAKE_PRODUCTS 
    : CAKE_PRODUCTS.filter(p => p.category === category);

  cakeGrid.innerHTML = filtered.map(item => `
    <div class="product-card" data-id="${item.id}">
      <div class="product-thumb-wrap">
        <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
        ${item.tag ? `<span class="product-tag ${item.tagClass}">${item.tag}</span>` : ''}
      </div>
      <div class="product-info">
        <span class="product-cat">${getCategoryName(item.category)}</span>
        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            ฿${item.price.toLocaleString()}
            <span>/ ปอนด์</span>
          </div>
          <button class="btn-add-cart" onclick="addMenuProductToCart('${item.id}')" title="เพิ่มลงตะกร้า">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryName(cat) {
  switch (cat) {
    case 'birthday': return 'เค้กวันเกิดมินิมอล';
    case 'fruit': return 'เค้กผลไม้สด';
    case 'chocolate': return 'ช็อกโกแลต & ฟัดจ์';
    case 'cheesecake': return 'ชีสเค้ก';
    default: return 'เค้กโฮมเมด';
  }
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProducts(cat);
    });
  });
}

// ==========================================
// 5. Custom Cake Builder Simulator
// ==========================================
function initCustomCakeBuilder() {
  // Size options
  const sizeCards = document.querySelectorAll('#sizeOptions .option-card');
  sizeCards.forEach(card => {
    card.addEventListener('click', () => {
      sizeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      
      builderState.sizeValue = card.dataset.value;
      builderState.sizeLabel = card.dataset.label;
      builderState.sizePrice = parseInt(card.dataset.price, 10);
      updateBuilderPreview();
    });
  });

  // Flavor options
  const flavorBtns = document.querySelectorAll('#flavorOptions .pill-btn');
  flavorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flavorBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      builderState.flavorLabel = btn.dataset.label;
      builderState.flavorPrice = parseInt(btn.dataset.price, 10);
      updateBuilderPreview();
    });
  });

  // Color options
  const colorBtns = document.querySelectorAll('#colorOptions .color-circle');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      builderState.colorName = btn.dataset.name;
      builderState.colorTop = btn.dataset.color;
      builderState.colorBody = btn.dataset.body;
      builderState.textColor = btn.dataset.text === '#FFF' ? '#FFFFFF' : '#831843';
      updateBuilderPreview();
    });
  });

  // Topping options
  const toppingBtns = document.querySelectorAll('#toppingOptions .pill-btn');
  toppingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toppingBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      builderState.toppingVal = btn.dataset.val;
      builderState.toppingLabel = btn.dataset.label;
      builderState.toppingPrice = parseInt(btn.dataset.price, 10);
      updateBuilderPreview();
    });
  });

  // Custom text input
  const textInput = document.getElementById('customTextInput');
  if (textInput) {
    textInput.addEventListener('input', (e) => {
      builderState.customText = e.target.value.trim() || 'เค้กนะเค้ก';
      const previewText = document.getElementById('previewCakeText');
      if (previewText) {
        previewText.textContent = builderState.customText;
      }
    });
  }

  // Candle toggle
  const candleCheck = document.getElementById('addCandleCheck');
  if (candleCheck) {
    candleCheck.addEventListener('change', (e) => {
      builderState.freeCandle = e.target.checked;
      const candleEl = document.getElementById('cakeCandle');
      if (candleEl) {
        candleEl.style.display = e.target.checked ? 'flex' : 'none';
      }
    });
  }

  // Add Custom Cake to Cart Button
  const addCartBtn = document.getElementById('addCustomToCartBtn');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', addCustomCakeToCart);
  }

  // Send Direct to LINE Button
  const lineBtn = document.getElementById('orderCustomLineBtn');
  if (lineBtn) {
    lineBtn.addEventListener('click', sendCustomCakeDirectToLine);
  }

  // Initial preview sync
  updateBuilderPreview();
}

function updateBuilderPreview() {
  const cakeTier = document.getElementById('cakeTier');
  const frostingTop = document.getElementById('frostingTop');
  const frostingBody = document.getElementById('frostingBody');
  const previewCakeText = document.getElementById('previewCakeText');
  const toppingsContainer = document.getElementById('toppingsContainer');

  // Update Cake Size Visual
  if (cakeTier) {
    cakeTier.className = `cake-tier size-${builderState.sizeValue.replace('.', '-')}`;
  }

  // Update Frosting Colors
  if (frostingTop) frostingTop.style.backgroundColor = builderState.colorTop;
  if (frostingBody) frostingBody.style.backgroundColor = builderState.colorBody;
  if (previewCakeText) {
    previewCakeText.style.color = builderState.textColor;
    previewCakeText.textContent = builderState.customText || 'เค้กนะเค้ก';
  }

  // Render Topping Icons
  if (toppingsContainer) {
    renderToppingsVisual(builderState.toppingVal, toppingsContainer);
  }

  // Calculate Total
  const total = builderState.sizePrice + builderState.flavorPrice + builderState.toppingPrice;

  // Update Summary DOM
  document.getElementById('summarySize').textContent = builderState.sizeLabel;
  document.getElementById('summaryBase').textContent = builderState.flavorLabel;
  document.getElementById('summaryColor').textContent = builderState.colorName;
  document.getElementById('summaryTopping').textContent = builderState.toppingLabel;
  document.getElementById('builderTotalPrice').textContent = `฿${total.toLocaleString()}`;
}

function renderToppingsVisual(toppingType, container) {
  container.innerHTML = '';
  let emoji = '';
  switch (toppingType) {
    case 'strawberry': emoji = '🍓'; break;
    case 'blueberry': emoji = '🫐'; break;
    case 'macaron': emoji = '🧁'; break;
    case 'flower': emoji = '🌸'; break;
    default: return; // None
  }

  // Positions around top edge of cake
  const coords = [
    { top: '4px', left: '18px' },
    { top: '4px', right: '18px' },
    { top: '22px', left: '6px' },
    { top: '22px', right: '6px' },
    { bottom: '6px', left: '26px' },
    { bottom: '6px', right: '26px' }
  ];

  coords.forEach(pos => {
    const el = document.createElement('span');
    el.className = 'topping-item';
    el.textContent = emoji;
    Object.assign(el.style, pos);
    container.appendChild(el);
  });
}

function addCustomCakeToCart() {
  const total = builderState.sizePrice + builderState.flavorPrice + builderState.toppingPrice;
  const item = {
    id: 'custom-' + Date.now(),
    name: `เค้ก Custom: ${builderState.sizeLabel}`,
    category: 'custom',
    price: total,
    quantity: 1,
    details: `${builderState.flavorLabel} | โทนสี: ${builderState.colorName} | ท็อปปิ้ง: ${builderState.toppingLabel} | ข้อความ: "${builderState.customText}"`,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=300&q=80'
  };

  cart.push(item);
  saveCartToStorage();
  updateCartUI();
  showToast('เพิ่มเค้กที่ออกแบบลงในตะกร้าเรียบร้อยแล้ว!');
  openCart();
}

function sendCustomCakeDirectToLine() {
  const total = builderState.sizePrice + builderState.flavorPrice + builderState.toppingPrice;
  const msg = `🎂 สนใจสั่งทำเค้ก Custom จากร้านเค้กนะเค้ก 🎂
-------------------------
• ขนาด: ${builderState.sizeLabel}
• รสชาติเค้ก: ${builderState.flavorLabel}
• โทนสีครีม: ${builderState.colorName}
• ท็อปปิ้ง: ${builderState.toppingLabel}
• ข้อความหน้าเค้ก: "${builderState.customText}"
• เทียนและมีดฟรี: ${builderState.freeCandle ? 'รับ' : 'ไม่รับ'}
• ราคารวมประเมิน: ฿${total.toLocaleString()}
-------------------------
รบกวนสอบถามคิววันรับเค้กเพิ่มเติมครับ/ค่ะ ✨`;

  const encoded = encodeURIComponent(msg);
  // Copy to clipboard as fallback and redirect to LINE
  navigator.clipboard?.writeText(msg).catch(() => {});
  window.open(`https://line.me/R/msg/text/?${encoded}`, '_blank');
}

// ==========================================
// 6. Cart Drawer & Checkout Functions
// ==========================================
function addMenuProductToCart(productId) {
  const product = CAKE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: 1,
      details: 'ขนาด 1 ปอนด์ (มาตรฐาน)',
      image: product.image
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`);
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('cakenacake_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Cannot save cart to localStorage', e);
  }
}

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem('cakenacake_cart');
    if (data) {
      cart = JSON.parse(data);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartTotalItems = document.getElementById('cartTotalItems');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalPrice = document.getElementById('cartTotalPrice');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCount) cartCount.textContent = totalCount;
  if (cartTotalItems) cartTotalItems.textContent = totalCount;
  if (cartTotalPrice) cartTotalPrice.textContent = `฿${totalPrice.toLocaleString()}`;

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-cake-candles"></i>
        <p>ยังไม่มีรายการในตะกร้า</p>
        <button class="btn btn-outline btn-sm" onclick="closeCart(); location.href='#menu';">เลือกดูเมนูเค้ก</button>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">${item.details || ''}</div>
        <div class="cart-item-price">฿${(item.price * item.quantity).toLocaleString()} (x${item.quantity})</div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="ลบรายการ">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function initCartDrawer() {
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

function checkoutViaLine() {
  if (cart.length === 0) {
    alert('กรุณาเลือกเค้กลงตะกร้าก่อนสั่งซื้อนะคะ');
    return;
  }

  let total = 0;
  let itemsText = cart.map((item, i) => {
    total += item.price * item.quantity;
    return `${i + 1}. ${item.name} x${item.quantity} - ฿${(item.price * item.quantity).toLocaleString()}\n   (${item.details || 'มาตรฐาน'})`;
  }).join('\n');

  const lineOrderMsg = `🍰 รายการสั่งเค้กจากเว็บ "เค้กนะเค้ก" 🍰
------------------------------------
${itemsText}
------------------------------------
ยอดรวมทั้งหมด: ฿${total.toLocaleString()}
(ยังไม่รวมค่าส่งตามระยะทาง)

ต้องการจัดส่งวันที่: 
ชื่อผู้สั่ง: 
เบอร์โทรศัพท์: 
ที่อยู่จัดส่ง: 
------------------------------------
แจ้งรายละเอียดเพิ่มเติมได้เลยค่ะ 💕`;

  navigator.clipboard?.writeText(lineOrderMsg).catch(() => {});
  const encoded = encodeURIComponent(lineOrderMsg);
  window.open(`https://line.me/R/msg/text/?${encoded}`, '_blank');
}

// ==========================================
// 7. Quick Inquiry Form Handler
// ==========================================
function initQuickInquiryDefaultDate() {
  const dateInput = document.getElementById('cakeDate');
  if (dateInput) {
    // Default to 2 days ahead
    const d = new Date();
    d.setDate(d.getDate() + 2);
    dateInput.min = new Date().toISOString().split('T')[0];
    dateInput.value = d.toISOString().split('T')[0];
  }
}

function handleInquirySubmit() {
  const name = document.getElementById('custName')?.value || '';
  const phone = document.getElementById('custPhone')?.value || '';
  const date = document.getElementById('cakeDate')?.value || '';
  const notes = document.getElementById('cakeNotes')?.value || '-';

  const message = `✨ สอบถามคิวเค้กจากร้าน "เค้กนะเค้ก" ✨
--------------------------------
• คุณลูกค้า: ${name}
• เบอร์ติดต่อ / LINE: ${phone}
• วันที่ต้องการรับเค้ก: ${date}
• รายละเอียดที่ต้องการ: ${notes}
--------------------------------
รบกวนแจ้งคิวและราคาให้ด้วยนะคะ ขอบคุณค่ะ`;

  navigator.clipboard?.writeText(message).catch(() => {});
  const encoded = encodeURIComponent(message);
  window.open(`https://line.me/R/msg/text/?${encoded}`, '_blank');
  showToast('เปิดแอป LINE เพื่อส่งข้อความสอบถามแล้วค่ะ!');
}

// ==========================================
// 8. Mobile Navigation & Helpers
// ==========================================
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

function showToast(text) {
  const toast = document.getElementById('toastMessage');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.textContent = text;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

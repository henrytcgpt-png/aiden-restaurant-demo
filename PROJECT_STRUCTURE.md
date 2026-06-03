# AIDEN Restaurant Demo｜建議網站架構

這個資料包包含目前的單一 HTML Demo。你可以先讓 Claude Code 讀取 `index.html`，然後請它重構成 React + Vite 專案。

---

## 目前檔案

```text
aiden-restaurant-demo/
├── index.html
├── PROJECT_STRUCTURE.md
└── CLAUDE_OPTIMIZE_PROMPT.md
```

---

## 建議重構後架構：React + Vite

```text
aiden-restaurant-demo/
├── package.json
├── index.html
├── README.md
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── data/
│   │   ├── menuItems.js
│   │   ├── branches.js
│   │   ├── reviews.js
│   │   └── siteConfig.js
│   ├── utils/
│   │   ├── whatsapp.js
│   │   ├── filtering.js
│   │   └── countdown.js
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── BusinessStatus.jsx
│       ├── OrderModeToggle.jsx
│       ├── PromoCountdown.jsx
│       ├── PopularItems.jsx
│       ├── MenuSection.jsx
│       ├── MenuSearch.jsx
│       ├── CategoryTabs.jsx
│       ├── FoodCard.jsx
│       ├── AddonOptions.jsx
│       ├── CartPanel.jsx
│       ├── FeatureGrid.jsx
│       ├── BranchSelector.jsx
│       ├── MapPreview.jsx
│       ├── ReviewsSection.jsx
│       ├── SmartUpdateSection.jsx
│       ├── CTASection.jsx
│       ├── StickyActionBar.jsx
│       └── Footer.jsx
```

---

## 每個 Component 目的

### `Header.jsx`
- Logo
- 導航
- WhatsApp CTA
- 根據已選分店更新 WhatsApp 連結

### `Hero.jsx`
- 首屏主視覺
- 餐飲網站核心銷售文案
- CTA
- 右側營業狀態卡片

### `BusinessStatus.jsx`
- 今日營業中
- 營業時間
- 最後落單時間
- 等候時間
- 當前分店

### `OrderModeToggle.jsx`
- 堂食 / 自取 / 外賣切換
- 根據模式改變提示文字
- WhatsApp 訊息需要帶入 mode

### `PromoCountdown.jsx`
- 午市套餐 / 節日優惠 Banner
- 倒數時間
- CTA

### `PopularItems.jsx`
- 人氣推介
- 減少客人選擇困難
- 可用作推高毛利餐品

### `MenuSection.jsx`
- 餐牌主區
- 包含搜尋、分類、餐品列表、查詢清單

### `MenuSearch.jsx`
- 菜式搜尋
- 支援搜尋餐名、描述、標籤

### `CategoryTabs.jsx`
- 全部 / 飯餐 / 粉麵 / 飲品 / 小食

### `FoodCard.jsx`
- 餐品卡片
- 圖片/視覺
- 標籤
- 價錢
- 加配選項
- 加入查詢

### `AddonOptions.jsx`
- 加凍飲
- 加小食
- 少甜 / 走冰
- 其他備註

### `CartPanel.jsx`
- 查詢清單
- 已選餐品
- 估算總額
- 清空清單
- WhatsApp 發送查詢

### `FeatureGrid.jsx`
- 展示餐飲網站功能價值
- 今日營業狀態
- 查詢清單
- 分店 WhatsApp
- Google Sheet 更新

### `BranchSelector.jsx`
- 分店列表
- 點擊分店後切換 branch name / phone / address / hours / WhatsApp link

### `MapPreview.jsx`
- Google Map placeholder
- 將來可替換成真正 Google Map embed

### `ReviewsSection.jsx`
- 客戶評價
- 增加信任感

### `SmartUpdateSection.jsx`
- Google Sheet Before / After
- 展示老闆自己更新餐牌概念
- 這是 AIDEN Web Studio 的核心賣點

### `CTASection.jsx`
- 免費網站 / IG 評估
- 引導 potential customer WhatsApp 查詢

### `StickyActionBar.jsx`
- 手機 / 桌面底部固定 CTA
- 顯示已選分店
- 顯示查詢清單數量

### `Footer.jsx`
- 品牌資訊
- Demo 說明
- 聯絡資料

---

## State 建議

```js
const [selectedBranch, setSelectedBranch] = useState(branches[0]);
const [orderMode, setOrderMode] = useState("堂食");
const [selectedCategory, setSelectedCategory] = useState("all");
const [searchQuery, setSearchQuery] = useState("");
const [cart, setCart] = useState([]);
```

---

## Data Structure 建議

### `menuItems.js`

```js
export const menuItems = [
  {
    id: "pork-chop-rice",
    name: "招牌焗豬扒飯",
    category: "rice",
    price: 58,
    description: "香濃茄汁配厚切豬扒，適合作為網站主打招牌產品。",
    labels: ["人氣", "含奶類", "午市"],
    badge: "人氣 No.1",
    addons: [
      { label: "+HK$8 加凍飲", value: "+凍飲 HK$8", price: 8 },
      { label: "+HK$12 加小食", value: "+小食 HK$12", price: 12 }
    ]
  }
];
```

### `branches.js`

```js
export const branches = [
  {
    id: "mong-kok",
    name: "旺角店",
    phone: "85200001111",
    address: "旺角彌敦道 123 號地下",
    hours: "07:00 - 22:00",
    lastOrder: "21:30",
    mapUrl: "#"
  }
];
```

### `reviews.js`

```js
export const reviews = [
  {
    name: "陳小姐",
    role: "附近上班族",
    rating: 5,
    content: "午市套餐清楚，WhatsApp 預訂好方便，去到唔使等太耐。"
  }
];
```

### `siteConfig.js`

```js
export const siteConfig = {
  brandName: "Happy Bowl",
  demoLabel: "餐飲網站 Demo v2",
  studioName: "AIDEN Web Studio",
  defaultOrderMode: "堂食",
  defaultBranchId: "mong-kok",
  colors: {
    navy: "#102A43",
    cream: "#F8F5EF",
    orange: "#FF8A3D",
    green: "#12B886"
  }
};
```

---

## WhatsApp 訊息格式建議

```text
你好，我想查詢以下餐品：
分店：旺角店
模式：自取

1. 招牌焗豬扒飯 HK$58（+凍飲 HK$8）
2. 港式奶茶 HK$18（少甜）

估算總額：HK$84
```

---

## Claude Code 優化重點

1. 先保留功能，不要一開始大改邏輯。
2. 先元件化，再優化 UI。
3. 優化時要特別處理手機版。
4. 所有 CTA 要清楚。
5. 不要移除 WhatsApp、搜尋、分類、分店切換、查詢清單。
6. 保留廣東話文案。
7. 令 Demo 看起來像真實餐廳網站，同時保留 AIDEN 的銷售說明價值。

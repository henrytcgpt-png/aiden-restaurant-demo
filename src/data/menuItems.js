export const menuItems = [
  {
    id: 'pork-chop-rice',
    name: '招牌焗豬扒飯',
    category: 'rice',
    price: 58,
    badge: '人氣 No.1',
    description: '香濃茄汁配厚切豬扒，適合作為網站主打招牌產品。',
    emoji: '🥩',
    gradient: 'linear-gradient(135deg, #FDBA74 0%, #F97316 100%)',
    labels: [
      { text: '人氣', type: 'hot' },
      { text: '含奶類', type: '' },
      { text: '午市', type: 'new' },
    ],
    addons: [
      { label: '+HK$8 加凍飲', value: '+凍飲 HK$8', price: 8 },
      { label: '+HK$12 加小食', value: '+小食 HK$12', price: 12 },
    ],
  },
  {
    id: 'hainan-chicken',
    name: '海南雞飯',
    category: 'rice',
    price: 55,
    badge: '午市熱賣',
    description: '嫩滑雞件配油飯及秘製醬汁，清爽又飽肚。',
    emoji: '🍗',
    gradient: 'linear-gradient(135deg, #A7F3D0 0%, #10B981 100%)',
    labels: [
      { text: '熱賣', type: 'hot' },
      { text: '少油', type: '' },
    ],
    addons: [
      { label: '+HK$10 加例湯', value: '+例湯 HK$10', price: 10 },
      { label: '+HK$8 加凍飲', value: '+凍飲 HK$8', price: 8 },
    ],
  },
  {
    id: 'curry-beef',
    name: '咖喱牛腩飯',
    category: 'rice',
    price: 62,
    badge: '店長推介',
    description: '濃厚咖喱配慢煮牛腩，適合用食物相片突出吸引力。',
    emoji: '🍛',
    gradient: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)',
    labels: [
      { text: '微辣', type: 'spicy' },
      { text: '推介', type: 'hot' },
    ],
    addons: [
      { label: '+HK$8 加凍飲', value: '+凍飲 HK$8', price: 8 },
      { label: '+HK$8 加煎蛋', value: '+煎蛋 HK$8', price: 8 },
    ],
  },
  {
    id: 'satay-noodle',
    name: '沙嗲牛肉公仔麵',
    category: 'noodle',
    price: 42,
    badge: '早餐人氣',
    description: '早餐及下午茶人氣選擇，可加入時段限定標籤。',
    emoji: '🍜',
    gradient: 'linear-gradient(135deg, #FBCFE8 0%, #F472B6 100%)',
    labels: [
      { text: '早餐', type: 'new' },
      { text: '下午茶', type: '' },
    ],
    addons: [
      { label: '+HK$15 火腿奄列', value: '+火腿奄列 HK$15', price: 15 },
      { label: '+HK$6 熱飲', value: '+熱飲 HK$6', price: 6 },
    ],
  },
  {
    id: 'wonton-noodle',
    name: '鮮蝦雲吞麵',
    category: 'noodle',
    price: 48,
    badge: '清爽',
    description: '清楚分類粉麵、飯餐、飲品，減少客人查詢時間。',
    emoji: '🦐',
    gradient: 'linear-gradient(135deg, #BFDBFE 0%, #3B82F6 100%)',
    labels: [
      { text: '粉麵', type: '' },
      { text: '清湯', type: '' },
    ],
    addons: [
      { label: '+HK$10 加菜心', value: '+菜心 HK$10', price: 10 },
      { label: '+HK$8 加凍飲', value: '+凍飲 HK$8', price: 8 },
    ],
  },
  {
    id: 'lemon-tea',
    name: '凍檸茶',
    category: 'drink',
    price: 18,
    badge: '飲品',
    description: '套餐可加配飲品，價錢及描述可由後台快速更新。',
    emoji: '🍋',
    gradient: 'linear-gradient(135deg, #FEF08A 0%, #EAB308 100%)',
    labels: [
      { text: '凍飲', type: '' },
      { text: '港式', type: 'new' },
    ],
    addons: [
      { label: '少甜', value: '少甜', price: 0 },
      { label: '走冰', value: '走冰', price: 0 },
    ],
  },
  {
    id: 'milk-tea',
    name: '港式奶茶',
    category: 'drink',
    price: 18,
    badge: '經典',
    description: '可加入凍熱選項、少甜、走冰等備註，方便 WhatsApp 查詢。',
    emoji: '🧋',
    gradient: 'linear-gradient(135deg, #DDD6FE 0%, #8B5CF6 100%)',
    labels: [
      { text: '含奶類', type: '' },
      { text: '經典', type: 'hot' },
    ],
    addons: [
      { label: '熱飲', value: '熱飲', price: 0 },
      { label: '少甜', value: '少甜', price: 0 },
    ],
  },
  {
    id: 'fried-wings',
    name: '炸雞翼',
    category: 'snack',
    price: 28,
    badge: '小食',
    description: '小食類可以推動加配，提高平均客單價。',
    emoji: '🍗',
    gradient: 'linear-gradient(135deg, #FECACA 0%, #EF4444 100%)',
    labels: [
      { text: '加配', type: '' },
      { text: '小食', type: 'new' },
    ],
    addons: [
      { label: '加辣粉', value: '加辣粉', price: 0 },
      { label: '蜜糖芥末醬', value: '蜜糖芥末醬', price: 0 },
    ],
  },
]

export const categories = [
  { id: 'all', label: '全部' },
  { id: 'rice', label: '飯餐' },
  { id: 'noodle', label: '粉麵' },
  { id: 'drink', label: '飲品' },
  { id: 'snack', label: '小食' },
]

export const popularItems = [
  { rank: 1, name: '招牌焗豬扒飯', subtitle: '人氣 No.1｜午市熱賣', price: 58 },
  { rank: 2, name: '海南雞飯', subtitle: '清爽穩陣｜回頭客推介', price: 55 },
  { rank: 3, name: '咖喱牛腩飯', subtitle: '店長推介｜濃味之選', price: 62 },
]

import { useState, useMemo } from 'react'
import { menuItems, categories } from '../data/menuItems'
import FoodCard from './FoodCard'
import CartPanel from './CartPanel'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return menuItems.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory
      const matchSearch = !q || [item.name, item.description, ...item.labels.map(l => l.text)]
        .join(' ').toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-label">Interactive Menu</div>
          <h2>互動餐牌：搜尋、分類、加配、WhatsApp 查詢</h2>
          <p>呢個比普通 PDF 餐牌更有用。客人可以即時搜尋、揀菜式、加配飲品或小食，最後一鍵發 WhatsApp 查詢。</p>
        </div>

        <div className="menu-controls">
          <div className="search-wrap">
            <span className="search-icon">🔎</span>
            <input
              className="search-input"
              type="text"
              placeholder="搜尋菜式：豬扒 / 雞飯 / 奶茶 / 咖喱"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`cat-tab${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-layout">
          <div className="menu-grid">
            {filtered.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '48px 0', color: 'var(--muted)', fontWeight: 700 }}>
                🔍 找不到相關餐品，請試試其他關鍵字
              </div>
            ) : (
              filtered.map(item => <FoodCard key={item.id} item={item} />)
            )}
          </div>
          <CartPanel />
        </div>
      </div>
    </section>
  )
}

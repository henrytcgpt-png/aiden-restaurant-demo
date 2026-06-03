import { popularItems } from '../data/menuItems'

const rankColors = ['rank-1', 'rank-2', 'rank-3']
const rankEmojis = ['🥇', '🥈', '🥉']

export default function PopularItems() {
  return (
    <section className="section" id="popular">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-label">Best Sellers</div>
          <h2>本店人氣推介</h2>
          <p>幫客人減少選擇困難，亦方便餐廳主力推廣高人氣或高毛利菜式。</p>
        </div>
        <div className="popular-strip">
          {popularItems.map((item, i) => (
            <div className="popular-card" key={item.rank}>
              <div className={`popular-rank ${rankColors[i]}`}>
                {rankEmojis[i]}
              </div>
              <div className="popular-info">
                <strong>{item.name}</strong>
                <span>{item.subtitle}</span>
              </div>
              <div className="popular-price">HK${item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

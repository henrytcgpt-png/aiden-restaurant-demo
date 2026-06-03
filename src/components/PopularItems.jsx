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
          <p>大快活四十年招牌菜式，每日新鮮即製，食客一致好評。</p>
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

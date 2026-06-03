import { reviews } from '../data/reviews'

export default function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-label">Customer Reviews</div>
          <h2>客戶評價區，增加第一次到訪信任感</h2>
          <p>小餐廳網站未必需要好複雜，但一定要有令人安心嘅元素，例如評價、地址、營業時間、清楚餐牌。</p>
        </div>

        <div className="reviews-grid">
          {reviews.map(r => (
            <div className="review-card" key={r.id}>
              <div className="stars">{'★'.repeat(r.rating)}</div>
              <p className="review-text">「{r.content}」</p>
              <div className="reviewer">
                <div className="reviewer-avatar" style={{ background: r.avatarColor }}>
                  {r.initials}
                </div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="#contact" className="btn btn-light" style={{ fontSize: 14 }}>
            ⭐ 想在網站加入 Google 評論？WhatsApp 查詢
          </a>
        </div>
      </div>
    </section>
  )
}

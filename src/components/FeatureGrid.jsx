const features = [
  {
    icon: '🟢',
    title: '今日營業狀態',
    desc: '即時顯示營業中、營業時間、最後落單時間，減少客人打電話查詢。',
    tag: '可售賣',
    bg: '#ECFDF5',
    color: '#059669',
  },
  {
    icon: '🛒',
    title: '查詢清單',
    desc: '客人加入餐品後，一鍵發送 WhatsApp，做到輕量化落單體驗。',
    tag: '轉化',
    bg: '#FFF7ED',
    color: '#EA580C',
  },
  {
    icon: '📍',
    title: '分店 WhatsApp 切換',
    desc: '客人選擇分店後，查詢按鈕自動連去對應分店電話。',
    tag: '多分店',
    bg: '#EFF6FF',
    color: '#2563EB',
  },
  {
    icon: '🧾',
    title: 'Google Sheet 更新',
    desc: '老闆改表格就可以更新餐牌、價錢、優惠及分店資料。',
    tag: '後台',
    bg: '#F0FDF4',
    color: '#16A34A',
  },
]

export default function FeatureGrid() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-label">Useful Functions</div>
          <h2>餐飲網站最值得放嘅功能</h2>
          <p>每一個功能都係為咗減少客人重複查詢、提升信任感、增加落單機會。</p>
        </div>
        <div className="feature-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-demo-tag">{f.tag}</div>
              <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

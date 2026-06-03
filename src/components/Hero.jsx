import { useApp } from '../context/AppContext'
import { buildBranchInquiryUrl } from '../utils/whatsapp'
import { businessStatus, orderModes } from '../data/siteConfig'

export default function Hero() {
  const { state, dispatch } = useApp()
  const { selectedBranch, orderMode } = state

  const waUrl = buildBranchInquiryUrl(selectedBranch.phone, selectedBranch.name)

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        {/* Left */}
        <div>
          <div className="eyebrow">🍛 大快活 Fairwood｜香港茶餐廳經典品牌</div>
          <h1>
            四十年香港味道，{' '}
            <span className="highlight">一鍵 WhatsApp</span>{' '}
            即時查詢落單
          </h1>
          <p className="hero-desc">
            招牌豬扒飯、西冷牛扒、車仔麵⋯⋯大快活經典菜式任你揀。選擇堂食、自取或外賣，加入查詢清單後一鍵發送 WhatsApp，方便又快捷。
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-dark">查看互動餐牌 →</a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-light">
              💬 WhatsApp 即時查詢
            </a>
          </div>
          <div className="trust-pills">
            <span className="pill">✅ 今日營業中</span>
            <span className="pill">🔎 菜式搜尋</span>
            <span className="pill">📍 旺角 / 荃灣 / 沙田</span>
            <span className="pill">🥩 豬扒飯 $58 起</span>
          </div>
        </div>

        {/* Right – Status Card */}
        <div className="status-card">
          <div className="status-top">
            <div>
              <div className="open-badge">
                <span className="pulse" />
                {businessStatus.isOpen ? '今日營業中' : '已休息'}
              </div>
              <div className="status-hours">
                {businessStatus.hours}<br />
                最後落單 {businessStatus.lastOrder}
              </div>
            </div>
            <span className="status-emoji">🍛</span>
          </div>

          <div className="status-grid">
            <div className="status-mini">
              <strong>等候時間</strong>
              <span>{businessStatus.waitTime}</span>
            </div>
            <div className="status-mini">
              <strong>熱門時段</strong>
              <span>{businessStatus.peakHours}</span>
            </div>
            <div className="status-mini">
              <strong>目前分店</strong>
              <span>{selectedBranch.name}</span>
            </div>
          </div>

          <div className="order-mode">
            <div className="mode-tabs">
              {Object.keys(orderModes).map(mode => (
                <button
                  key={mode}
                  className={`mode-tab${orderMode === mode ? ' active' : ''}`}
                  onClick={() => dispatch({ type: 'SET_MODE', payload: mode })}
                >
                  {mode}
                </button>
              ))}
            </div>
            <p className="mode-note">{orderModes[orderMode]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

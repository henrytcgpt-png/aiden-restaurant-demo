import { useState } from 'react'

const SHEET_ROWS = [
  { field: '招牌焗豬扒飯', before: 'HK$58', after: 'HK$62', key: 'price1' },
  { field: '午市優惠 Banner', before: 'FALSE', after: 'TRUE', key: 'promo' },
  { field: '旺角店 WhatsApp', before: '0000 1111', after: '0000 1234', key: 'phone' },
  { field: '沙嗲牛肉麵', before: '—', after: '新增 HK$42', key: 'newItem' },
]

export default function SmartUpdateSection() {
  const [syncState, setSyncState] = useState('idle') // idle | loading | done
  const [synced, setSynced] = useState(false)

  function handleSync() {
    setSyncState('loading')
    setTimeout(() => {
      setSyncState('done')
      setSynced(true)
    }, 2000)
  }

  function handleReset() {
    setSyncState('idle')
    setSynced(false)
  }

  return (
    <section className="section" id="update">
      <div className="container">
        <div className="smart-update-grid">

          {/* Left */}
          <div className="update-left">
            <div className="eyebrow">🧩 Smart Update</div>
            <h2>老闆只需改 Google Sheet，網站內容就可以同步更新</h2>
            <p>
              呢個係 AIDEN Web Studio 最應該主打嘅差異位。你唔係只賣網站，而係賣一個「小老闆自己都管理到」嘅簡單內容系統。
            </p>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <span className="step-text">老闆修改 Google Sheet（餐牌、價錢、優惠）</span>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <span className="step-text">系統自動讀取最新資料並同步</span>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <span className="step-text">客人即時看到更新後嘅餐牌及優惠</span>
              </div>
            </div>
          </div>

          {/* Right – Interactive Demo */}
          <div className="ba-stack">

            {/* Mock Google Sheet */}
            <div className="ba-card sheet-card">
              <div className="sheet-header">
                <span className="sheet-logo">📊</span>
                <div>
                  <div className="sheet-title">Happy Bowl 餐牌管理.xlsx</div>
                  <div className="sheet-sub">Google Sheets · 上次編輯：剛剛</div>
                </div>
              </div>

              <div className="sheet-table">
                <div className="sheet-row-head">
                  <span>欄位</span>
                  <span>目前數值</span>
                  <span>更新後</span>
                </div>
                {SHEET_ROWS.map(row => (
                  <div className={`sheet-data-row${synced ? ' synced' : ''}`} key={row.key}>
                    <span className="sheet-field">{row.field}</span>
                    <span className={`sheet-before${synced ? ' faded' : ''}`}>{row.before}</span>
                    <span className={`sheet-after${synced ? ' highlight' : ''}`}>{row.after}</span>
                  </div>
                ))}
              </div>

              <div className="sheet-action">
                {syncState === 'idle' && (
                  <button className="btn btn-green sync-btn" onClick={handleSync}>
                    ▶ 套用更新到網站
                  </button>
                )}
                {syncState === 'loading' && (
                  <div className="sync-loading">
                    <span className="sync-spinner" />
                    <span>正在同步至網站…</span>
                  </div>
                )}
                {syncState === 'done' && (
                  <div className="sync-success">
                    <span>✅ 網站已更新！</span>
                    <button className="reset-btn" onClick={handleReset}>重置 Demo</button>
                  </div>
                )}
              </div>
            </div>

            {/* Live result card */}
            <div className={`ba-card dark result-card${synced ? ' synced' : ''}`}>
              <h4>
                {synced
                  ? '✨ 網站已即時反映所有更改'
                  : '🌐 網站目前狀態（等待同步）'}
              </h4>
              {SHEET_ROWS.map(row => (
                <div className="ba-row" key={row.key}>
                  <span>{row.field}</span>
                  <span className={synced ? 'new-price pulse-text' : ''}>
                    {synced ? row.after : row.before}
                    {synced && (
                      <span className="live-dot" style={{ marginLeft: 6 }}>
                        <span className="pulse" />已更新
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

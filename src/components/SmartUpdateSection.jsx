export default function SmartUpdateSection() {
  return (
    <section className="section" id="update">
      <div className="container">
        <div className="smart-update-grid">
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

          <div className="ba-stack">
            <div className="ba-card">
              <h4>📊 Before：老闆改 Google Sheet</h4>
              <div className="ba-row">
                <span>招牌焗豬扒飯</span>
                <span><span className="old-price">HK$58</span> → <span className="new-price">HK$60</span></span>
              </div>
              <div className="ba-row">
                <span>午市優惠</span>
                <span style={{ color: 'var(--green)', fontWeight: 800 }}>TRUE</span>
              </div>
              <div className="ba-row">
                <span>旺角店 WhatsApp</span>
                <span>0000 1111</span>
              </div>
            </div>

            <div className="ba-card dark">
              <h4>✨ After：網站即時反映</h4>
              <div className="ba-row">
                <span>招牌焗豬扒飯</span>
                <span className="new-price">HK$60 <span className="live-dot"><span className="pulse" />更新</span></span>
              </div>
              <div className="ba-row">
                <span>優惠 Banner</span>
                <span className="live-dot"><span className="pulse" />顯示中</span>
              </div>
              <div className="ba-row">
                <span>旺角店查詢</span>
                <span className="live-dot"><span className="pulse" />已連接</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

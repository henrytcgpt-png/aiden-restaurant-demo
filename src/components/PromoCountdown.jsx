import { useState, useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

function fmt(n) { return String(n).padStart(2, '0') }

export default function PromoCountdown() {
  const [seconds, setSeconds] = useState(siteConfig.promoCountdownSeconds)

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [])

  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo">
          <div>
            <div className="promo-badge">⏰ 限時優惠</div>
            <h2>午市套餐限時優惠</h2>
            <p>
              優惠 Banner 可以用作午市、下午茶、節日到會、盆菜預訂。
              加埋倒數時間，可以提升即時查詢意欲。
            </p>
          </div>
          <div className="countdown-card">
            <div className="countdown-label">優惠尚餘</div>
            <div className="countdown-time">{fmt(h)}:{fmt(m)}:{fmt(s)}</div>
            <div className="countdown-sub">時 : 分 : 秒</div>
          </div>
        </div>
      </div>
    </section>
  )
}

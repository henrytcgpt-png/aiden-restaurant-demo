import { useApp } from '../context/AppContext'
import { buildBranchInquiryUrl } from '../utils/whatsapp'

const checklist = [
  '招牌靚靚豬扒飯 $58｜午市人氣 No.1',
  '西冷牛扒飯 $82｜嫩滑多汁豪氣之選',
  '車仔麵 $46｜任揀配料港式庶民',
  '三大分店｜旺角、荃灣、沙田',
  '一鍵 WhatsApp 查詢預訂',
]

export default function CTASection() {
  const { state } = useApp()
  const waUrl = buildBranchInquiryUrl(state.selectedBranch.phone, state.selectedBranch.name)

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-section">
          <div className="cta-left">
            <h2>立即 WhatsApp 查詢，輕鬆預訂座位</h2>
            <p>
              選好菜式後，點擊 WhatsApp 查詢按鈕，系統自動整理你的選擇並發送。旺角、荃灣、沙田三間分店，繁忙時間建議先 WhatsApp 確認座位。
            </p>
            <div className="cta-actions">
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                💬 WhatsApp 即時查詢
              </a>
              <a href="#menu" className="btn btn-light">
                再睇互動餐牌
              </a>
            </div>
          </div>

          <div className="checklist">
            {checklist.map(item => (
              <div className="check-item" key={item}>
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

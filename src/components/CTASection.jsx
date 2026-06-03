import { useApp } from '../context/AppContext'
import { buildBranchInquiryUrl } from '../utils/whatsapp'

const checklist = [
  '餐牌是否清楚易讀',
  '手機版是否流暢',
  '客人是否容易聯絡',
  '分店地址是否清楚',
  '是否適合 Google Sheet 更新',
]

export default function CTASection() {
  const { state } = useApp()
  const waUrl = buildBranchInquiryUrl(state.selectedBranch.phone, state.selectedBranch.name)

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-section">
          <div className="cta-left">
            <h2>想將你間餐廳變成呢類網站？</h2>
            <p>
              可以先傳你現有 IG、餐牌相、Google Map 店舖頁面，AIDEN 會幫你簡單分析適合做一頁式網站、完整品牌網站，定係加埋可更新餐牌功能。
            </p>
            <div className="cta-actions">
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                💬 WhatsApp 免費評估
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

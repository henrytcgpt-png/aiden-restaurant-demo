import { useApp } from '../context/AppContext'
import { branches } from '../data/branches'
import { buildBranchInquiryUrl } from '../utils/whatsapp'

export default function BranchSection() {
  const { state, dispatch } = useApp()
  const { selectedBranch } = state

  const waUrl = buildBranchInquiryUrl(selectedBranch.phone, selectedBranch.name)

  return (
    <section className="section" id="branches">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-label">Branches</div>
          <h2>選擇分店後，WhatsApp 自動切換</h2>
          <p>多分店餐廳最實用。每間分店可以有不同地址、營業時間、Google Map 及 WhatsApp 電話。</p>
        </div>

        <div className="branches-grid">
          <div className="branch-list">
            {branches.map(branch => (
              <div
                key={branch.id}
                className={`branch-card${selectedBranch.id === branch.id ? ' active' : ''}`}
                onClick={() => dispatch({ type: 'SET_BRANCH', payload: branch })}
              >
                <div className="branch-card-head">
                  <span className="branch-name">{branch.name}</span>
                  <span className="branch-active-check">✓</span>
                </div>
                <div className="branch-info">
                  <span>📍 {branch.address}</span>
                  <span>🕐 {branch.hours}</span>
                  <span>📞 +852 {branch.phone.replace('852', '')}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="map-panel">
            <div className="map-placeholder">
              <div className="map-placeholder-inner">
                <div className="map-pin-icon">📍</div>
                <strong>{selectedBranch.name}</strong>
                <span>Google Map 可嵌入於此</span>
              </div>
            </div>
            <div className="map-details">
              <h3>{selectedBranch.name}</h3>
              <p>📍 地址：{selectedBranch.address}</p>
              <p>🕐 營業時間：{selectedBranch.hours}</p>
              <p>⏰ 最後落單：{selectedBranch.lastOrder}</p>
              <div className="map-actions">
                <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  💬 WhatsApp 此分店
                </a>
                <a href={selectedBranch.mapUrl} className="btn btn-light">
                  🗺️ 開啟 Google Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

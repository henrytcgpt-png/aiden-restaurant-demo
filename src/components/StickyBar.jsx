import { useApp } from '../context/AppContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function StickyBar() {
  const { state } = useApp()
  const { selectedBranch, cart, orderMode } = state

  const waUrl = buildWhatsAppUrl(selectedBranch.phone, selectedBranch.name, orderMode, cart)

  return (
    <div className="sticky-bar">
      <div className="sticky-text">
        已選分店：<span className="accent">{selectedBranch.name}</span>
        ｜查詢清單：<span className="count-badge">{cart.length}</span> 件
      </div>
      <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
        💬 WhatsApp 查詢
      </a>
    </div>
  )
}

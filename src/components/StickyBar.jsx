import { useApp } from '../context/AppContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function StickyBar() {
  const { state, dispatch } = useApp()
  const { selectedBranch, cart, orderMode } = state

  const waUrl = buildWhatsAppUrl(selectedBranch.phone, selectedBranch.name, orderMode, cart)

  function openCart(e) {
    // on mobile, tap the count badge to open drawer
    if (window.innerWidth < 1080) {
      e.preventDefault()
      dispatch({ type: 'OPEN_CART' })
    }
  }

  return (
    <div className="sticky-bar">
      <button className="sticky-text sticky-cart-btn" onClick={openCart}>
        已選分店：<span className="accent">{selectedBranch.name}</span>
        ｜清單：<span className="count-badge">{cart.length}</span>
        {cart.length > 0 && (
          <span className="sticky-tap-hint"> 點此查看</span>
        )}
      </button>
      <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
        💬 WhatsApp 查詢
      </a>
    </div>
  )
}

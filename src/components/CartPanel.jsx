import { useApp } from '../context/AppContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function CartPanel() {
  const { state, dispatch } = useApp()
  const { cart, selectedBranch, orderMode } = state

  const total = cart.reduce((s, item) => s + item.price, 0)

  function sendWhatsApp() {
    const url = buildWhatsAppUrl(selectedBranch.phone, selectedBranch.name, orderMode, cart)
    window.open(url, '_blank')
  }

  return (
    <aside className="cart-panel">
      <div className="cart-header">
        <h3 className="cart-title">查詢清單</h3>
        <span className="cart-count">{cart.length}</span>
      </div>
      <p className="cart-hint">
        呢個唔係複雜網購系統，而係輕量化 WhatsApp 查詢，最適合小餐廳起步。
      </p>

      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="cart-empty">未加入餐品<br /><span style={{ fontSize: 11, marginTop: 4, display: 'block' }}>選擇餐品後點「加入查詢」</span></div>
        ) : (
          cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-meta">
                  {item.addons.length ? item.addons.join('、') : '無加配'}｜{item.mode}
                </span>
              </div>
              <span className="cart-item-price">HK${item.price}</span>
              <button
                className="remove-btn"
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: i })}
                aria-label="移除"
              >×</button>
            </div>
          ))
        )}
      </div>

      <hr className="cart-divider" />
      <div className="cart-total">
        <span>估算總額</span>
        <span className="cart-total-amount">HK${total}</span>
      </div>

      <div className="cart-actions">
        <button className="btn btn-primary" onClick={sendWhatsApp}>
          💬 WhatsApp 發送查詢
        </button>
        <button
          className="btn-ghost"
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
        >
          清空清單
        </button>
      </div>
    </aside>
  )
}

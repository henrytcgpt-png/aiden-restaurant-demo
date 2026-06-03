import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function CartDrawer() {
  const { state, dispatch } = useApp()
  const { cart, selectedBranch, orderMode, isCartOpen } = state

  const total = cart.reduce((s, item) => s + item.price, 0)

  // prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  function sendWhatsApp() {
    const url = buildWhatsAppUrl(selectedBranch.phone, selectedBranch.name, orderMode, cart)
    window.open(url, '_blank')
  }

  function close() { dispatch({ type: 'CLOSE_CART' }) }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop${isCartOpen ? ' open' : ''}`}
        onClick={close}
      />

      {/* Drawer */}
      <div className={`cart-drawer${isCartOpen ? ' open' : ''}`}>
        <div className="drawer-handle" />

        <div className="drawer-header">
          <div>
            <h3 className="cart-title">查詢清單</h3>
            <p style={{ color: '#94A3B8', fontSize: 13, marginTop: 2 }}>
              {selectedBranch.name}｜{orderMode}
            </p>
          </div>
          <button className="drawer-close" onClick={close}>✕</button>
        </div>

        <div className="drawer-body">
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">
                未加入餐品<br />
                <span style={{ fontSize: 11, marginTop: 4, display: 'block' }}>
                  選擇餐品後點「加入查詢」
                </span>
              </div>
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
                  >×</button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="drawer-footer">
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
        </div>
      </div>
    </>
  )
}

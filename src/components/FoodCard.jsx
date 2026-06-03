import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function FoodCard({ item }) {
  const { dispatch, state } = useApp()
  const [checkedAddons, setCheckedAddons] = useState([])
  const [justAdded, setJustAdded] = useState(false)
  const [imgError, setImgError] = useState(false)

  function toggleAddon(value) {
    setCheckedAddons(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    )
  }

  function handleAdd() {
    const addonPrice = item.addons
      .filter(a => checkedAddons.includes(a.value))
      .reduce((s, a) => s + a.price, 0)

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        name: item.name,
        price: item.price + addonPrice,
        addons: checkedAddons,
        mode: state.orderMode,
      },
    })

    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
    setCheckedAddons([])
  }

  return (
    <article className="food-card">
      <div className="food-img" style={imgError ? { background: item.gradient } : {}}>
        {!imgError ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="food-photo"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <span className="food-emoji">{item.emoji}</span>
        )}
        <span className="food-badge">{item.badge}</span>
      </div>
      <div className="food-body">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-desc">{item.description}</p>
        <div className="food-tags">
          {item.labels.map(l => (
            <span key={l.text} className={`tag ${l.type}`}>{l.text}</span>
          ))}
        </div>
        <div className="addon-section">
          <span className="addon-title">加配選項</span>
          {item.addons.map(addon => (
            <label key={addon.value} className="addon-label">
              <input
                type="checkbox"
                checked={checkedAddons.includes(addon.value)}
                onChange={() => toggleAddon(addon.value)}
              />
              {addon.label}
            </label>
          ))}
        </div>
        <div className="food-footer">
          <span className="food-price">HK${item.price}</span>
          <button
            className={`add-btn${justAdded ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {justAdded ? '✓ 已加入' : '加入查詢'}
          </button>
        </div>
      </div>
    </article>
  )
}

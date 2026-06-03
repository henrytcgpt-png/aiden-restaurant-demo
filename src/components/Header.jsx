import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { buildBranchInquiryUrl } from '../utils/whatsapp'
import { siteConfig } from '../data/siteConfig'

export default function Header() {
  const { state } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const { selectedBranch } = state

  const waUrl = buildBranchInquiryUrl(selectedBranch.phone, selectedBranch.name)

  const links = [
    { href: '#popular', label: '人氣推介' },
    { href: '#menu', label: '餐牌' },
    { href: '#features', label: '功能' },
    { href: '#branches', label: '分店' },
    { href: '#update', label: '更新方式' },
  ]

  return (
    <>
      <div className="ribbon">
        <div className="container">
          <span>🍱 大快活 Fairwood｜互動餐牌 Demo｜WhatsApp 查詢、分店選擇、快速落單</span>
          <span>今日營業中｜07:00 – 23:00｜最後落單 22:30</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#top" className="brand">
            <div className="brand-mark">{siteConfig.brandInitial}</div>
            <div>
              <div className="brand-name">{siteConfig.brandName}</div>
              <span className="brand-sub">{siteConfig.demoLabel}</span>
            </div>
          </a>

          <nav className="nav-links">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              💬 WhatsApp 查詢
            </a>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="選單"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            💬 WhatsApp 查詢
          </a>
        </div>
      )}
    </>
  )
}

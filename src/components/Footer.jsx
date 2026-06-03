import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card">
          <div>
            <div className="footer-brand">
              {siteConfig.brandName} — {siteConfig.demoLabel}
            </div>
            <div className="footer-sub">
              Designed by {siteConfig.studioName}｜AI-powered websites for small businesses.
            </div>
          </div>
          <div className="footer-copy">
            © 2026 {siteConfig.studioName} Demo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

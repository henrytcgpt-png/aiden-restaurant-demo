export function buildWhatsAppUrl(phone, branch, mode, cart) {
  const lines = ['你好，我想查詢以下餐品：', `分店：${branch}`, `模式：${mode}`]

  if (!cart.length) {
    lines.push('我想了解餐牌 / 今日優惠。')
  } else {
    cart.forEach((item, i) => {
      const addons = item.addons.length ? `（${item.addons.join('、')}）` : ''
      lines.push(`${i + 1}. ${item.name} HK$${item.price}${addons}`)
    })
    const total = cart.reduce((s, item) => s + item.price, 0)
    lines.push(`估算總額：HK$${total}`)
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`
}

export function buildBranchInquiryUrl(phone, branch) {
  const text = `你好，我想查詢 ${branch} 嘅餐牌 / 今日優惠。`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

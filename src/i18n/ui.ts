export const ui = {
  zh: {
    'site.title': '起号指南',
    'site.desc': '各赛道起号逻辑与运营策略',
    'hero.title': '从零到一的起号方法论',
    'hero.desc': '汇集各赛道起号核心逻辑，包含定位策略、内容规划、涨粉技巧和变现路径。选择你感兴趣的赛道，开始你的内容创作之旅。',
    'badge.tracks': '个赛道',
    'badge.verified': '实战验证',
    'badge.updating': '持续更新',
    'footer.copy': '© 2025 起号指南 · 持续更新各赛道运营方法论',
    'footer.qr': '扫码关注',
    'nav.home': '首页',
    'back.home': '← 返回首页',
    'lang.switch': 'EN',
  },
  en: {
    'site.title': 'Account Growth Guide',
    'site.desc': 'Niche strategies & growth tactics',
    'hero.title': 'From Zero to One',
    'hero.desc': 'Core growth strategies across niches — positioning, content planning, audience growth, and monetization. Pick a niche and start your creator journey.',
    'badge.tracks': 'Niches',
    'badge.verified': 'Battle-tested',
    'badge.updating': 'Updated Weekly',
    'footer.copy': '© 2025 Account Growth Guide · Niche growth strategies',
    'footer.follow': 'Follow @莫说闲话 on X',
    'nav.home': 'Home',
    'back.home': '← Back to Home',
    'lang.switch': '中文',
  },
} as const;

export function t(lang: 'zh' | 'en', key: keyof typeof ui.zh): string {
  return ui[lang][key] || ui.zh[key];
}

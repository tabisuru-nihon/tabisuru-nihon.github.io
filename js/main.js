/* ===== REGION FILTER ===== */
const REGIONS = {
  all: [],
  hokkaido: ['北海道'],
  tohoku: ['青森','岩手','宮城','秋田','山形','福島'],
  kanto: ['茨城','栃木','群馬','埼玉','千葉','東京','神奈川'],
  chubu: ['新潟','富山','石川','福井','山梨','長野','岐阜','静岡','愛知'],
  kinki: ['三重','滋賀','京都','大阪','兵庫','奈良','和歌山'],
  chugoku: ['鳥取','島根','岡山','広島','山口'],
  shikoku: ['徳島','香川','愛媛','高知'],
  kyushu: ['福岡','佐賀','長崎','熊本','大分','宮崎','鹿児島','沖縄'],
};

const regionTabs = document.querySelectorAll('.region-tab');
const prefCards = document.querySelectorAll('.pref-card');

regionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    regionTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const region = tab.dataset.region;
    const allowed = REGIONS[region];

    prefCards.forEach(card => {
      const name = card.dataset.pref;
      if (!allowed || allowed.length === 0 || allowed.includes(name)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ===== CHAT DEMO ===== */
const NOA_REPLIES = {
  default: [
    '素敵な旅のご相談ですね！もう少し詳しく教えていただけますか？たとえば、ご出発地や旅行期間など。',
    'とても良い旅先候補がいくつかあります！季節はいつ頃をご予定ですか？',
    'ご要望にぴったりの旅行プランをご提案できますよ。ご予算のご希望はありますか？',
  ],
  温泉: [
    '温泉旅といえば…草津・箱根・有馬・由布院・道後温泉などが全国的に人気ですね！どのエリアが気になりますか？',
    '源泉掛け流しの名湯をお探しでしたら、秋田の乳頭温泉や長野の渋温泉もおすすめですよ♨',
  ],
  子連れ: [
    '子連れ旅行は、那須高原・富士山周辺・淡路島あたりが大変人気ですよ！テーマパークや自然体験がバランスよく楽しめます。',
    'お子様の年齢に合わせてご提案します！小学生以下でしたら、沖縄の海遊びもおすすめです。',
  ],
  グルメ: [
    'グルメ旅なら、大阪・金沢・博多が特に食の充実度が高いですよ！食べ歩きスポットもたくさんあります。',
    'どんな食べ物がお好きですか？海鮮・焼き物・ラーメン…などジャンルで絞るとさらにピッタリな旅先をご提案できます！',
  ],
  広島: [
    '広島はお好み焼き・牡蠣・しゃもじスプーン・もみじ饅頭など食べ歩きの宝庫です！宮島の表参道商店街も外せません🍁',
  ],
  沖縄: [
    '沖縄の名産品といえば、紅芋タルト・海ぶどう・シークヮーサー・泡盛・琉球ガラス・やちむんなどが有名ですよ！',
  ],
  雨: [
    '雨の日でも楽しめるスポットなら、京都の寺社仏閣・屋根付き商店街・温泉・博物館などがとても充実していますよ。',
    '雨の鎌倉や金沢もとても風情があっておすすめです。傘をさしながら街歩きするのも旅の醍醐味ですね！',
  ],
};

const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const sendBtn = document.querySelector('.btn-send');
const quickBtns = document.querySelectorAll('.chat-quick-btn');

function addMessage(text, isUser) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${isUser ? 'user-msg' : 'noa-msg'}`;
  msg.innerHTML = `
    <div class="chat-msg-avatar">${isUser ? '👤' : '🧭'}</div>
    <div class="chat-msg-bubble">${text}</div>
  `;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function noaReply(userText) {
  const lower = userText;
  let replies = NOA_REPLIES.default;

  for (const [key, arr] of Object.entries(NOA_REPLIES)) {
    if (key !== 'default' && lower.includes(key)) {
      replies = arr;
      break;
    }
  }

  const text = replies[Math.floor(Math.random() * replies.length)];

  setTimeout(() => {
    addMessage(text, false);
  }, 700);
}

function sendMessage(text) {
  const val = text || (chatInput && chatInput.value.trim());
  if (!val) return;
  addMessage(val, true);
  if (chatInput) chatInput.value = '';
  noaReply(val);
}

if (sendBtn) {
  sendBtn.addEventListener('click', () => sendMessage());
}

if (chatInput) {
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}

quickBtns.forEach(btn => {
  btn.addEventListener('click', () => sendMessage(btn.textContent));
});

/* ===== HAMBURGER ===== */
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');

if (hamburger && headerNav) {
  hamburger.addEventListener('click', () => {
    const open = headerNav.style.display === 'flex';
    headerNav.style.display = open ? '' : 'flex';
    headerNav.style.flexDirection = 'column';
    headerNav.style.position = 'absolute';
    headerNav.style.top = '64px';
    headerNav.style.right = '0';
    headerNav.style.background = 'white';
    headerNav.style.padding = '12px';
    headerNav.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
    headerNav.style.borderRadius = '0 0 12px 12px';
    headerNav.style.zIndex = '99';
    if (open) { headerNav.removeAttribute('style'); }
  });
}

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.purpose-card, .onsen-card, .activity-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

/**
 * Central config to update official channels quickly.
 */
const SOCIAL_LINKS = {
  facebook: {
    label: 'Facebook',
    url: 'https://www.facebook.com/phnompenhpost',
    icon: 'facebook'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/@phnompenhpost',
    icon: 'youtube'
  },
  telegram: {
    label: 'Telegram',
    url: 'https://t.me/phnompenhpost',
    icon: 'telegram'
  },
  tiktok: {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@phnompenhpost',
    icon: 'tiktok'
  },
  instagram: {
    label: 'Instagram',
    url: 'https://www.instagram.com/phnompenhpost',
    icon: 'instagram'
  },
  x: {
    label: 'Twitter / X',
    url: 'https://x.com/phnompenhpost',
    icon: 'x'
  },
  website: {
    label: 'Main Website',
    url: 'https://www.phnompenhpost.com/',
    icon: 'website'
  }
};

const ICONS = {
  facebook:
    '<path d="M14 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H11v8H8v-8H5v-3h3V8a4 4 0 0 1 4-4h2z"/>',
  youtube:
    '<path d="M22 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C16.2 4.5 12 4.5 12 4.5h0s-4.2 0-7.1.3c-.4.1-1.3.1-2.1 1C2.2 6.5 2 8 2 8S1.8 9.8 1.8 11.6v.8C1.8 14.2 2 16 2 16s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 6.8.3 6.8.3s4.2 0 7.1-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-.8C22.2 9.8 22 8 22 8zM9.8 15.3V8.9l6.2 3.2-6.2 3.2z"/>',
  telegram:
    '<path d="M21.5 3.4 2.9 10.6c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.8 5.7c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.3 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.4-1.7zM8.2 13.4l10.8-6.8c.5-.3.9-.1.6.2l-8.9 8-.3 3.3-2.2-4.7z"/>',
  tiktok:
    '<path d="M14 3v11.2a3.2 3.2 0 1 1-2.2-3V8.8A6.2 6.2 0 1 0 16 14.7V9.5c1.3 1 2.8 1.5 4.5 1.6V8.8c-2.3-.2-4-1.8-4.5-3.8z"/>',
  instagram:
    '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
  x: '<path d="M18.9 2H22l-6.9 7.9L23.2 22h-6.4l-5-6.5L6.1 22H3l7.4-8.4L1 2h6.5l4.5 6z"/>',
  website:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.1a15.6 15.6 0 0 0-1.3-5A8 8 0 0 1 19.9 11zM12 4c.9 1.1 1.9 3 2.4 5H9.6c.5-2 1.5-3.9 2.4-5zM4.1 13h3.1a15.6 15.6 0 0 0 1.3 5A8 8 0 0 1 4.1 13zm3.1-2H4.1a8 8 0 0 1 4.4-5 15.6 15.6 0 0 0-1.3 5zm4.8 9c-.9-1.1-1.9-3-2.4-5h4.8c-.5 2-1.5 3.9-2.4 5zm2.8-7H9.2a13.6 13.6 0 0 1 0-2h5.6a13.6 13.6 0 0 1 0 2zm.7 5a15.6 15.6 0 0 0 1.3-5h3.1a8 8 0 0 1-4.4 5z"/>'
};

function createSocialButtons() {
  const grid = document.getElementById('social-grid');
  const entries = Object.values(SOCIAL_LINKS);

  entries.forEach((item) => {
    const anchor = document.createElement('a');
    anchor.className = 'social-button';
    anchor.href = item.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.setAttribute('aria-label', `Visit Phnom Penh Post on ${item.label}`);

    anchor.innerHTML = `
      <span class="social-left">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          ${ICONS[item.icon]}
        </svg>
        <span>${item.label}</span>
      </span>
      <span class="social-arrow" aria-hidden="true">↗</span>
    `;

    grid.appendChild(anchor);
  });
}

async function copyPageLink(statusElement) {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    statusElement.textContent = 'Page link copied to clipboard.';
  } catch {
    statusElement.textContent = 'Could not access clipboard. Please copy the URL manually.';
  }
}

function initShareActions() {
  const shareButton = document.getElementById('share-button');
  const copyButton = document.getElementById('copy-link-button');
  const statusElement = document.getElementById('share-status');

  shareButton.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Official Phnom Penh Post social media channels',
          url: window.location.href
        });
        statusElement.textContent = 'Thanks for sharing.';
      } catch {
        statusElement.textContent = 'Share canceled. You can copy the link instead.';
      }
      return;
    }

    await copyPageLink(statusElement);
  });

  copyButton.addEventListener('click', async () => {
    await copyPageLink(statusElement);
  });
}

function initDarkMode() {
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('ppp-theme');

  if (saved === 'dark') {
    document.body.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('ppp-theme', theme);
  });
}

function initQrCode() {
  const qrImage = document.getElementById('qr-code');
  const encoded = encodeURIComponent(window.location.href);
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encoded}`;
}

function initMeta() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

createSocialButtons();
initShareActions();
initDarkMode();
initQrCode();
initMeta();

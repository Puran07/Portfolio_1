const profile = {
  name: "Puran Singh Rathore",
  title: "Software Developer",
  photo: "./profile-photo.jpg",
  photoFallback: "./profile-photo.svg",
  phoneDisplay: "+91 6367297586",
  phoneLink: "+916367297586",
  whatsappNumber: "916367297586",
  email: "kpuran7773@gmail.com",
  website: "https://yourwebsite.com",
  instagram: "https://instagram.com/its.puru_07",
  linkedin:
    "https://www.linkedin.com/in/puran07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  facebook: "https://www.facebook.com/share/14WmtNoM1cW/",
  maps:
    "https://www.google.com/maps/@24.6127495,73.7307619,19.34z?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
  locationLabel: "Udaipur, Rajasthan, India",
};

const quickActions = [
  {
    label: "Call",
    href: `tel:${profile.phoneLink}`,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsappNumber}`,
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "Website",
    href: profile.website,
    icon: "globe",
    external: true,
  },
];

const linkCards = [
  {
    title: "Call",
    caption: profile.phoneDisplay,
    href: `tel:${profile.phoneLink}`,
    icon: "phone",
  },
  {
    title: "WhatsApp",
    caption: "Chat instantly on WhatsApp",
    href: `https://wa.me/${profile.whatsappNumber}`,
    icon: "whatsapp",
    external: true,
    tone: "whatsapp",
  },
  {
    title: "Email",
    caption: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    title: "Website",
    caption: "Visit portfolio or business site",
    href: profile.website,
    icon: "globe",
    external: true,
  },
  {
    title: "Instagram",
    caption: "Follow on Instagram",
    href: profile.instagram,
    icon: "instagram",
    external: true,
    tone: "instagram",
  },
  {
    title: "LinkedIn",
    caption: "Connect on LinkedIn",
    href: profile.linkedin,
    icon: "linkedin",
    external: true,
    tone: "linkedin",
  },
  {
    title: "Facebook",
    caption: "Follow on Facebook",
    href: profile.facebook,
    icon: "facebook",
    external: true,
    tone: "facebook",
  },
  {
    title: "Google Maps",
    caption: profile.locationLabel,
    href: profile.maps,
    icon: "pin",
    external: true,
    tone: "maps",
  },
  {
    title: "Save Contact",
    caption: "Download contact card",
    href: "./puran-singh.vcf",
    download: "puran-singh.vcf",
    icon: "contact",
    tone: "contact",
  },
];

const icons = {
  phone: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.7 4.5h2.7l1.2 3.4-1.6 1.5a15 15 0 0 0 5.3 5.3l1.5-1.6 3.4 1.2v2.7c0 .7-.6 1.3-1.3 1.3C10.8 18.3 5.7 13.2 5.7 6c0-.8.3-1.5 1-1.5Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.5a7.5 7.5 0 0 0-6.5 11.2L4.5 19.5l3.9-1a7.5 7.5 0 1 0 3.6-14Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.4 10.2c.3-.6.5-.6.7-.6h.6c.2 0 .4 0 .5.4l.6 1.4c.1.3.1.4 0 .6l-.3.4c-.1.1-.2.2-.1.4.2.5 1.1 1.8 2.5 2.4.2.1.4.1.5-.1l.4-.5c.1-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.4v.5c0 .2-.2.5-.4.7-.3.2-.8.5-1.8.3-1.1-.3-2.5-1-3.9-2.5-1.1-1.2-1.7-2.6-1.9-3.5-.2-.9.1-1.4.3-1.6Z" fill="currentColor"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" stroke-width="1.7"/>
    </svg>
  `,
  globe: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.7"/>
      <path d="M4.5 12h15M12 4.3c2.2 2.4 3.3 5 3.3 7.7S14.2 17.3 12 19.7c-2.2-2.4-3.3-5-3.3-7.7S9.8 6.7 12 4.3Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" stroke-width="1.7"/>
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/>
      <circle cx="16.2" cy="7.8" r="1" fill="currentColor"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.2 10.3V18M7.2 6.6v.1M11.4 10.3V18M11.4 12.5c0-1.4 1.1-2.5 2.5-2.5S16.4 11.1 16.4 12.5V18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="currentColor" stroke-width="1.7"/>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13.1 19V12.6H15.3L15.7 10H13.1V8.4C13.1 7.7 13.4 7.2 14.4 7.2H15.8V4.9C15.1 4.8 14.4 4.7 13.8 4.7C11.8 4.7 10.4 5.9 10.4 8.3V10H8.3V12.6H10.4V19H13.1Z" fill="currentColor"/>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="currentColor" stroke-width="1.7"/>
    </svg>
  `,
  pin: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s5-4.7 5-9a5 5 0 1 0-10 0c0 4.3 5 9 5 9Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="11" r="1.8" fill="currentColor"/>
    </svg>
  `,
  contact: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM6.5 18.2a5.5 5.5 0 0 1 11 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.4 7.2h1.8M19.3 6.3v1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4" stroke="currentColor" stroke-width="1.7"/>
    </svg>
  `,
};

function createLinkElement(item, className) {
  const isButton = typeof item.action === "function";
  const element = document.createElement(isButton ? "button" : "a");
  element.className = className;

  if (item.tone) {
    element.dataset.tone = item.tone;
  }

  if (isButton) {
    element.type = "button";
    element.addEventListener("click", item.action);
  } else {
    element.href = item.href;
    if (item.download) {
      element.download = item.download;
    }
    if (item.external) {
      element.target = "_blank";
      element.rel = "noreferrer";
    }
  }

  return element;
}

function renderQuickActions() {
  const container = document.querySelector("#quick-actions");
  quickActions.forEach((item) => {
    const link = createLinkElement(item, "quick-action");
    link.innerHTML = `${icons[item.icon]}<span>${item.label}</span>`;
    container.append(link);
  });
}

function renderLinkCards() {
  const container = document.querySelector("#link-list");
  linkCards.forEach((item) => {
    const link = createLinkElement(item, "link-card");
    link.innerHTML = `
      <div class="link-card__icon">${icons[item.icon]}</div>
      <div class="link-card__content">
        <strong>${item.title}</strong>
        <small>${item.caption}</small>
      </div>
      <div class="link-card__arrow" aria-hidden="true">↗</div>
    `;
    container.append(link);
  });
}

function hydrateProfile() {
  document.querySelector("#profile-name").textContent = profile.name;
  document.querySelector("#profile-title").textContent = profile.title;
}

function hydrateProfilePhoto() {
  const photo = document.querySelector("#profile-photo");
  const image = new Image();

  image.addEventListener("load", () => {
    photo.src = profile.photo;
  });

  image.src = profile.photo;

  photo.addEventListener("error", () => {
    photo.src = profile.photoFallback;
  });
}

hydrateProfile();
hydrateProfilePhoto();
renderQuickActions();
renderLinkCards();

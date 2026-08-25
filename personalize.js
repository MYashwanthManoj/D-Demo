// personalize.js — universal site chrome + per-user personalization
// Loaded on every page so branding, favicon and scroll affordances stay consistent.

/* =====================================================================
   1. Universal chrome — favicon, brand mark, scroll progress, back-to-top
   Runs for everyone (logged in or not), before any personalization.
   ===================================================================== */
(function () {
  function initChrome() {
    // --- Favicon: coffee cup on the brand gradient ---
    if (!document.querySelector('link[rel="icon"]')) {
      var fav =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
          '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#3B62F6"/><stop offset="1" stop-color="#1B37B5"/>' +
          '</linearGradient></defs>' +
          '<rect width="32" height="32" rx="8" fill="url(#g)"/>' +
          '<g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M8 13h11v5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4z"/>' +
          '<path d="M19 14h1.5a2.5 2.5 0 0 1 0 5H19"/>' +
          '<path d="M11 8v2.4M15 8v2.4"/></g></svg>';
      var link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = 'data:image/svg+xml,' + encodeURIComponent(fav);
      document.head.appendChild(link);
    }

    // --- Brand glyph prepended to any "Career Cafe" wordmark link ---
    var GLYPH =
      '<span class="brand-mark" aria-hidden="true">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/>' +
        '<path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/>' +
        '<path d="M8 3.5v2M11.5 3.5v2"/></svg>' +
      '</span>';
    document.querySelectorAll('a').forEach(function (a) {
      if (a.getAttribute('data-brand') === '1') return;
      if (a.textContent.trim() === 'Career Cafe' && !a.querySelector('.brand-mark')) {
        a.classList.add('brand-lockup');
        a.insertAdjacentHTML('afterbegin', GLYPH);
        a.setAttribute('data-brand', '1');
      }
    });

    // --- Scroll progress bar + back-to-top, on tall pages only ---
    if (document.body && document.body.scrollHeight > window.innerHeight * 1.4) {
      var bar = document.getElementById('scrollProgress');
      if (!bar) {
        bar = document.createElement('div');
        bar.id = 'scrollProgress';
        document.body.appendChild(bar);
      }
      var toTop = document.getElementById('backToTop');
      if (!toTop) {
        toTop = document.createElement('button');
        toTop.id = 'backToTop';
        toTop.type = 'button';
        toTop.setAttribute('aria-label', 'Back to top');
        toTop.innerHTML =
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M12 19V5M5 12l7-7 7 7"/></svg>';
        toTop.addEventListener('click', function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(toTop);
      }
      var onScroll = function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
        toTop.classList.toggle('show', window.scrollY > 600);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChrome);
  } else {
    initChrome();
  }
})();

/* =====================================================================
   2. Account state — reads localStorage 'careerCafeUser'.
   Logged in  → show the user's identity + a Log out button.
   Logged out → show a Log in / Create account prompt, never a fake
                profile. App pages stay browsable without a session.
   ===================================================================== */
(function () {
  function readUser() {
    try {
      var raw = localStorage.getItem('careerCafeUser');
      if (!raw) return null;
      var u = JSON.parse(raw);
      return (u && typeof u === 'object') ? u : null;
    } catch (e) { return null; }
  }

  // The header account avatar is the only inline-36px "PS" square inside
  // <header>; scoping here avoids touching testimonial / mockup avatars.
  function headerAvatars() {
    return Array.prototype.filter.call(
      document.querySelectorAll('header div'),
      function (el) {
        return el.style && el.style.width === '36px' &&
               el.style.height === '36px' && el.textContent.trim() === 'PS';
      }
    );
  }

  function initAccount() {
    var user = readUser();
    var avatar = document.getElementById('sidebarAvatar');
    var footer = avatar && avatar.parentElement ? avatar.parentElement.parentElement : null;

    var welcome = document.getElementById('welcomeMsg');
    var hour = new Date().getHours();
    var greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

    if (user) {
      // ---------- Logged in ----------
      var name = user.name || 'You';
      var parts = name.trim().split(/\s+/);
      var initials = parts.map(function (w) { return w[0]; }).join('').toUpperCase().slice(0, 2) || 'U';
      var subtitle = [user.degree, user.branch, user.year].filter(Boolean).join(' · ') || 'Student';

      if (avatar) avatar.textContent = initials;
      var sName = document.getElementById('sidebarName');
      if (sName) sName.textContent = name;
      var sSub = document.getElementById('sidebarSubtitle');
      if (sSub) sSub.textContent = subtitle;

      headerAvatars().forEach(function (el) { el.textContent = initials; });

      if (welcome) welcome.textContent = greeting + ', ' + (parts[0] || 'You');

      if (footer && !document.getElementById('sidebarLogout')) {
        var logout = document.createElement('button');
        logout.id = 'sidebarLogout';
        logout.type = 'button';
        logout.className = 'sidebar-logout';
        logout.setAttribute('aria-label', 'Log out');
        logout.innerHTML =
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>' +
          '<path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>' +
          '<span>Log out</span>';
        logout.addEventListener('click', function () {
          try { localStorage.removeItem('careerCafeUser'); } catch (e) {}
          window.location.href = 'index.html';
        });
        footer.appendChild(logout);
      }
    } else {
      // ---------- Logged out (guest) ----------
      if (footer) {
        footer.innerHTML =
          '<a href="login.html" style="display:flex;align-items:center;justify-content:center;width:100%;' +
          'padding:9px 14px;border-radius:8px;color:#fff;font-size:14px;font-weight:600;text-decoration:none;' +
          'background:linear-gradient(180deg,#4C71F8 0%,#3B62F6 55%,#2549E0 100%);' +
          'box-shadow:0 1px 2px rgba(37,73,224,0.25)">Log in</a>' +
          '<a href="signup.html" style="display:block;text-align:center;margin-top:10px;font-size:13px;' +
          'line-height:20px;font-weight:500;color:#6B7689;text-decoration:none">Create free account</a>';
      }
      headerAvatars().forEach(function (el) {
        var link = document.createElement('a');
        link.href = 'login.html';
        link.textContent = 'Log in';
        link.style.cssText = 'display:inline-flex;align-items:center;height:36px;padding:0 14px;' +
          'border-radius:10px;background:#3B62F6;color:#fff;font-size:13px;font-weight:600;text-decoration:none';
        if (el.parentNode) el.parentNode.replaceChild(link, el);
      });
      if (welcome) welcome.textContent = greeting;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccount);
  } else {
    initAccount();
  }
})();

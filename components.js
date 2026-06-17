/* Shared nav + footer injection */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const pages = [
    { href: 'index.html',      label: 'Home'       },
    { href: 'about.html',      label: 'About'      },
    { href: 'products.html',   label: 'Products'   },
    { href: 'facilities.html', label: 'Facilities' },
    { href: 'catalog.html',    label: 'Catalog'    },
    { href: 'contact.html',    label: 'Contact'    },
  ];

  function navHTML() {
    const links = pages.map(p =>
      `<a href="${p.href}" class="nav-link${currentPage === p.href ? ' active' : ''}">${p.label}</a>`
    ).join('');
    return `
<nav class="nav" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">AG</div>
      <div class="nav-logo-text">AMTIK<span> GROUP</span></div>
    </a>
    <div class="nav-links" id="navLinks">
      ${links}
    </div>
    <a href="contact.html" class="btn btn-nav-cta btn-sm nav-cta">Get a Quote</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
  }

  function footerHTML() {
    return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="nav-logo" style="display:inline-flex;margin-bottom:4px;">
          <div class="nav-logo-mark">AG</div>
          <div class="nav-logo-text">AMTIK<span> GROUP</span></div>
        </a>
        <p class="footer-brand-desc">India's leading manufacturer of precision injection &amp; blow moulded caps and closures since 1990. ISO Certified · Made in India.</p>
        <div class="footer-certs">
          <span class="footer-cert">ISO 9001:2015</span>
          <span class="footer-cert">Est. 1990</span>
          <span class="footer-cert">Mumbai</span>
        </div>
      </div>
      <div class="footer-col">
        <h5>Navigate</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="facilities.html">Facilities</a></li>
          <li><a href="catalog.html">Catalog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Products</h5>
        <ul>
          <li><a href="products.html">Stand Up Caps</a></li>
          <li><a href="products.html">FEZ Caps</a></li>
          <li><a href="products.html">Flip Top Caps</a></li>
          <li><a href="products.html">Pharma Caps</a></li>
          <li><a href="products.html">Containers</a></li>
          <li><a href="products.html">Floral Trays</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <address>801, Kamla Hub, N.S. Road No.1,<br>JVPD Scheme, Vile Parle (W),<br>Mumbai – 400 049, India</address>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <a href="mailto:pratik@amtikgroup.in">pratik@amtikgroup.in</a>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <a href="tel:+912228001234">+91 22 2800 1234</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Amtik Group. All rights reserved.</span>
      <span>Precision Caps &amp; Closures Since 1990</span>
    </div>
  </div>
</footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const navMount = document.getElementById('nav-mount');
    if (navMount) navMount.outerHTML = navHTML();

    const footerMount = document.getElementById('footer-mount');
    if (footerMount) footerMount.outerHTML = footerHTML();

    const nav = document.getElementById('mainNav');
    if (nav) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });
    }

    const ham = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (ham && navLinks) {
      ham.addEventListener('click', () => {
        ham.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
    }
  });
})();

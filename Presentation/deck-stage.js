class DeckStage extends HTMLElement {
  constructor() {
    super();
    this.index = 0;
  }

  connectedCallback() {
    this.style.display = 'block';
    
    // Keyboard navigation
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        this.next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prev();
      }
    });

    // Observer to trigger animations when scrolling into view
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove active state from all
          this.querySelectorAll('.slide').forEach(s => s.removeAttribute('data-deck-active'));
          // Set active state to current
          entry.target.setAttribute('data-deck-active', '');
          
          // Update internal index
          const slides = Array.from(this.querySelectorAll('.slide'));
          this.index = slides.indexOf(entry.target);
        }
      });
    }, {
      threshold: 0.5 // Trigger when slide is 50% visible
    });

    // Observe existing and future slides
    const mutationObserver = new MutationObserver(() => this.refreshObserver());
    mutationObserver.observe(this, { childList: true });
    this.refreshObserver();
  }

  refreshObserver() {
    this.querySelectorAll('.slide').forEach(s => {
      this.observer.observe(s);
    });
  }

  next() {
    const slides = this.querySelectorAll('.slide');
    if (this.index < slides.length - 1) {
      slides[this.index + 1].scrollIntoView({ behavior: 'smooth' });
    }
  }

  prev() {
    const slides = this.querySelectorAll('.slide');
    if (this.index > 0) {
      slides[this.index - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }
}

customElements.define('deck-stage', DeckStage);

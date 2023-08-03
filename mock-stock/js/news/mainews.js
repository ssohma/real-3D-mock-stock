  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        const headlines = this.getElementsByClassName('headline');
        
        if (isActive) {
          for (let j = 0; j < headlines.length; j++) {
            headlines[j].style.display = 'none';
          }
          this.classList.remove('active');
        } else {
          const activeSection = document.querySelector('.active');
          if (activeSection) {
            const activeHeadlines = activeSection.getElementsByClassName('headline');
            for (let j = 0; j < activeHeadlines.length; j++) {
              activeHeadlines[j].style.display = 'none';
            }
            activeSection.classList.remove('active');
          }
          
          this.classList.add('active');
          for (let j = 0; j < headlines.length; j++) {
            headlines[j].style.display = 'block';
          }
        }
      });
    }
  });

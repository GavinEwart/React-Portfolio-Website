export function smoothScroll() {
    let sections = document.querySelectorAll('section');
    let sectionOffsets = Array.from(sections).map(section => section.offsetTop);
    let isScrolling = false;
    let debounceTimeout = null;
  
    console.log('Section Offsets:', sectionOffsets);
  
    const handleScroll = (e) => {
      if (isScrolling) return;
  
      e.preventDefault();
      clearTimeout(debounceTimeout);
  
      debounceTimeout = setTimeout(() => {
        let currentScroll = window.pageYOffset;
        console.log('Current Scroll:', currentScroll);
  
        if (e.deltaY > 0) {
          // Scroll down
          for (let i = 0; i < sectionOffsets.length; i++) {
            if (currentScroll < sectionOffsets[i] - 1) {
              console.log('Scrolling down to:', sectionOffsets[i]);
              scrollTo(sectionOffsets[i]);
              break;
            }
          }
        } else {
          // Scroll up
          for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (currentScroll > sectionOffsets[i] + 1) {
              console.log('Scrolling up to:', sectionOffsets[i]);
              scrollTo(sectionOffsets[i]);
              break;
            }
          }
        }
      }, 100);
    };
  
    window.addEventListener('wheel', handleScroll);
  
    function scrollTo(target) {
      let duration = 500;
      let start = window.pageYOffset;
      let distance = target - start;
      let startTime = null;
  
      console.log('Starting scroll to:', target);
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          console.log('Finished scrolling to:', target);
          isScrolling = false;
        }
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  }
  
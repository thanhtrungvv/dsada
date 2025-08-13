// 1. Thư viện ảnh đơn giản
document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const displayedImage = document.getElementById('displayed-image');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      displayedImage.src = thumb.src;

      thumbnails.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // 2. Scroll effect cho header
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Intersection Observer cho Features
  const featureItems = document.querySelectorAll('.feature-item');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Chỉ chạy một lần
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  featureItems.forEach((item) => {
    observer.observe(item);
  });
});

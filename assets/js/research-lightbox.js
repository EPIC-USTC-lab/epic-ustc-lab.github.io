(() => {
  const zoomLinks = document.querySelectorAll('.research-detail__zoom');

  if (!zoomLinks.length) {
    return;
  }

  const lightbox = document.createElement('div');
  lightbox.className = 'research-lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '图片大图预览');
  lightbox.innerHTML = `
    <div class="research-lightbox__toolbar">
      <button class="research-lightbox__control" type="button" data-action="close" aria-label="关闭" title="关闭">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div class="research-lightbox__stage">
      <img class="research-lightbox__image" alt="">
    </div>
  `;
  document.body.append(lightbox);

  const stage = lightbox.querySelector('.research-lightbox__stage');
  const previewImage = lightbox.querySelector('.research-lightbox__image');
  const closeButton = lightbox.querySelector('[data-action="close"]');
  const minimumScale = 0.5;
  const maximumScale = 6;
  let currentScale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let previouslyFocusedElement = null;

  const renderTransform = () => {
    previewImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${currentScale})`;
  };

  const resetTransform = () => {
    currentScale = 1;
    offsetX = 0;
    offsetY = 0;
    renderTransform();
  };

  const setScale = (nextScale, centerX = 0, centerY = 0) => {
    const clampedScale = Math.min(maximumScale, Math.max(minimumScale, nextScale));
    const scaleRatio = clampedScale / currentScale;
    offsetX = centerX - (centerX - offsetX) * scaleRatio;
    offsetY = centerY - (centerY - offsetY) * scaleRatio;
    currentScale = clampedScale;
    renderTransform();
  };

  const openLightbox = (link) => {
    const sourceImage = link.querySelector('img');
    previouslyFocusedElement = document.activeElement;
    previewImage.src = link.href;
    previewImage.alt = sourceImage ? sourceImage.alt : '';
    lightbox.hidden = false;
    document.body.classList.add('research-lightbox-open');
    resetTransform();
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove('research-lightbox-open');
    previewImage.removeAttribute('src');
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  };

  zoomLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(link);
    });
  });

  lightbox.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;

    if (action === 'close') {
      closeLightbox();
    } else if (event.target === stage) {
      closeLightbox();
    }
  });

  stage.addEventListener('wheel', (event) => {
    event.preventDefault();
    const stageBounds = stage.getBoundingClientRect();
    const centerX = event.clientX - stageBounds.left - stageBounds.width / 2;
    const centerY = event.clientY - stageBounds.top - stageBounds.height / 2;
    const zoomFactor = Math.exp(-event.deltaY * 0.0015);
    setScale(currentScale * zoomFactor, centerX, centerY);
  }, { passive: false });

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
})();

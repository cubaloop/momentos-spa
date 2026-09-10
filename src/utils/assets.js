// Utility for asset paths in SPA and GitHub Pages environments
export function formatAssetUrl(url) {
  if (!url) return './assets/servicios_spa.jpg';
  if (url.startsWith('data:') || url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const clean = url.replace(/^(\.\/|\/)/, '');
  return './' + clean;
}

export function handleImageError(e, fallback = './assets/servicios_spa.jpg') {
  if (e && e.currentTarget && !e.currentTarget.dataset.errorHandled) {
    e.currentTarget.dataset.errorHandled = 'true';
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallback;
  }
}

export const useHtmlToPaper = (options = {}) => {
  const defaultOptions = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
      'https://unpkg.com/kidlat-css/css/kidlat.css'
    ],
    timeout: 1000,
    autoClose: true,
    windowTitle: document?.title,
};


  const finalOptions = { ...defaultOptions, ...options };

  const print = (el: { innerHTML: any; }) => {
    const { name, specs, styles, timeout, autoClose, windowTitle } = finalOptions;
    const printWindow = window.open('', name, specs.join(','));

    printWindow?.document.write(`
      <html>
        <head>
          <title>${windowTitle}</title>
          ${styles.map(url => `<link rel="stylesheet" href="${url}">`).join('')}
        </head>
        <body>
          ${el.innerHTML}
        </body>
      </html>
    `);

    printWindow?.document.close();

    setTimeout(() => {
      printWindow?.focus();
      printWindow?.print();
      
      if (autoClose) {
        printWindow?.close();
      }
    }, timeout);
  };

  return { print };
};
export const useHtmlToPaper = (options = {}) => {
  const defaultOptions = {
    name: '_blank',
    specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
    timeout: 800,
    autoClose: true,
    windowTitle: 'Contrato de Locação - Retal',
  };

  const finalOptions = { ...defaultOptions, ...options };

  const printStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.8;
      color: #000;
      padding: 40px 60px;
      max-width: 210mm;
      margin: 0 auto;
    }

    h2 {
      font-size: 14pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    p {
      text-align: justify;
      margin-bottom: 8px;
      text-indent: 0;
    }

    .text-sm {
      font-size: 12pt;
    }

    .font-bold {
      font-weight: bold;
    }

    .text-center {
      text-align: center;
    }

    .text-xl {
      font-size: 14pt;
    }

    .capitalize {
      text-transform: capitalize;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .py-5 {
      padding-top: 12px;
      padding-bottom: 12px;
    }

    .py-2 {
      padding-top: 6px;
      padding-bottom: 6px;
    }

    .pb-2 {
      padding-bottom: 6px;
    }

    .pt-4 {
      padding-top: 12px;
    }

    .my-2 {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .mt-10 {
      margin-top: 40px;
    }

    @media print {
      body {
        padding: 20px 40px;
      }

      @page {
        size: A4;
        margin: 25mm 20mm;
      }
    }
  `;

  const print = (el: { innerHTML: any }) => {
    const { name, specs, timeout, autoClose, windowTitle } = finalOptions;

    const printWindow = window.open('', name, specs.join(','));

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${windowTitle}</title>
          <style>${printStyles}</style>
        </head>
        <body>
          ${el.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();

      if (autoClose) {
        printWindow.close();
      }
    }, timeout);
  };

  return { print };
};

// gatsby-browser.js (opcional, para desarrollo y cliente)
export const onClientEntry = () => {
    // Asegúrate de que el script no se cargue dos veces
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5546876290559845';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const initTiktok = (value: any): void => {
  let array: any = [];
  array = value?.filter((item) => item.visit === true);

  if (array?.length > 0) {
    for (let index = 0; index < array.length; index++) {
      let valor = value[index].pixelID;
      valor = valor.split('/');

      const scriptElm = document.createElement('script');
      scriptElm.setAttribute('class', 'class-name');
      const inlineCode = document.createTextNode(`{

        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};


          ttq.load('${value[index].pixelID}');
          ttq.instance ( '${value[index].pixelID}' ) .track('InitiateCheckout');

        }(window, document, 'ttq');


         }`);
      scriptElm.appendChild(inlineCode);
      document.body.appendChild(scriptElm);
    }
  }
};


export const initTiktokPixels = (value: any): void => {
  let array: any = value?.pixelID.pixels;
  array = array?.filter((item) => item.sell === true);

  const { paymentMethod } = value;
  if (paymentMethod !== 'CREDIT_CARD') {
    array = array?.filter((item) => item.sellConditions === 0);
  }
  // array.filter((item) => item.sellConditions === 0);

  // value?.filter((item) => item.sellConditions === 0);

  for (let index = 0; index < array?.length; index++) {
    const valor = array[index].pixelID;
    // valor = valor.split('/');

    const scriptElm = document.createElement('script');
    scriptElm.setAttribute('class', 'class-name');
    const inlineCode = document.createTextNode(`{

        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

          ttq.load('${valor}');

         ttq.instance ( '${valor}' ) .track('CompletePayment');

        }(window, document, 'ttq');


         }`);
    scriptElm.appendChild(inlineCode);
    document.body.appendChild(scriptElm);
  }
};

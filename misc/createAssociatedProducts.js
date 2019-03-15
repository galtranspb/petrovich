'use strict';

(function () {
  let clearContainer = function (el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  };

  let createEl = function (template, str) {
    let el = template.cloneNode();
    el.textContent = str;
    return el;
  };

  let getArrOfAssociatedProducts = function (str) {
    const separator = '\n';
    let startPos = 0;
    let arr = [];

    while (true) {
      let endPosition = str.indexOf(separator, startPos);

      if (endPosition === -1) {
        arr.push(str.substring(startPos));
        break;
      }
      arr.push(str.substring(startPos, endPosition));
      startPos = endPosition + 1;
    }

    return arr;
  };

  window.createAssociatedProducts = function (str) {
    let $container = document.querySelector('.product_tags');
    let template = document.querySelector('.product_tags a');
    let fragment = document.createDocumentFragment();

    clearContainer($container);
    let associatedProducts = getArrOfAssociatedProducts(str);
    associatedProducts.forEach(function (el) {
      let item = createEl(template, el);
      fragment.appendChild(item);
    });
    let $p = document.createElement('p');
    $p.textContent = 'Могут понадобиться:';
    $container.appendChild($p);
    $container.appendChild(fragment);
  };
})();

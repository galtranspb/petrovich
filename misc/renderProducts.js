'use strict';

(function () {
  let setAttributes = function (el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  let createProduct = function (o) {
    let template = document.querySelector('.product');
    let product = template.cloneNode(true);
    let goldPrice = product.querySelector('.goldPrice');
    let retailPrice = product.querySelector('.retailPrice');
    let units = product.querySelectorAll('.ng-binding');

    product.setAttribute('id', o.productId);
    product.querySelector('.product_code').textContent = 'Код: ' + +o.code;
    product.querySelector('.product_status').textContent = 'Наличие';
    product.querySelector('.product_photo img').src = 'https:' + o.primaryImageUrl;
    product.querySelector('.product_description .product__link').textContent = o.title;
    window.createAssociatedProducts(o.assocProducts);
    goldPrice.textContent = o.priceGold;
    setAttributes(goldPrice, {
      'data-gold-price': o.priceGold,
      'data-gold-price-alt': o.priceGoldAlt
    });
    retailPrice.textContent = o.priceRetail;
    setAttributes(retailPrice, {
      'data-retail-price': o.priceRetail,
      'data-retail-price-alt': o.priceRetailAlt
    });
    setAttributes(units[0], {
      'data-units': 'm2',
      'data-product-id': o.productId,
      'data-current-active': true
    });
    setAttributes(units[1], {
      'data-units': 'pack',
      'data-product-id': o.productId,
      'data-current-active': false
    });
    product.querySelector('.unit--infoInn').textContent = '1 упак. = ' + o.unitRatioAlt + 'м. кв.';
    product.querySelector('.btn').setAttribute('data-product-id', o.productId);

    return product;
  };

  let renderProducts = function (a) {
    let $container = document.querySelector('.product__area');
    let fragment = document.createDocumentFragment();

    a.forEach(function (el) {
      let $item = createProduct(el);
      fragment.appendChild($item);
    });
    $container.appendChild(fragment);
    $container.addEventListener('click', window.onUnitWrapperClick);
  };

  renderProducts(window.data);
})();

'use strict';

(function () {

  let createProduct = function (o) {
    let template = document.querySelector('.product');
    let product = template.cloneNode(true);

    product.querySelector('.product_code').textContent = 'Код: ' + o.code;
    product.querySelector('.product_status').textContent = 'Наличие';
    product.querySelector('.product_photo img').src = o.primaryImageUrl;
    product.querySelector('.product_description .product__link').textContent = o.title;
    product.querySelector('.product_tags .url--link').textContent = o.assocProducts;
    product.querySelector('.goldPrice').textContent = o.priceGold;
    product.querySelector('.retailPrice').textContent = o.priceRetail;
    product.querySelector('.btn').setAttribute('data-product-id', o.productId);

    return product;
  };

  let renderProducts = function (a) {
    let container = document.querySelector('.product__area');
    let fragment = document.createDocumentFragment();

    a.forEach(function (el) {
      let $item = createProduct(el);
      fragment.appendChild($item);
    });
    container.appendChild(fragment);
  };

  renderProducts(window.data);
})();

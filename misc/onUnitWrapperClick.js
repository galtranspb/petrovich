'use strict';

(function () {
  window.onUnitWrapperClick = function (e) {
    if (e.target.tagName === 'P' && (e.target.getAttribute('data-current-active') !== 'true')) {
      let id = e.target.getAttribute('data-product-id');
      let $product = document.getElementById(id);
      let ngBindings = $product.querySelectorAll('.ng-binding');
      let $goldPrice = $product.querySelector('.goldPrice');
      let $retailPrice = $product.querySelector('.retailPrice');

      Array.from(ngBindings).forEach(function (el) {
        let $parent = el.parentNode;
        let current = el.getAttribute('data-current-active');

        if (current === 'true') {
          el.setAttribute('data-current-active', 'false');
          $parent.classList.remove('unit--active');
          $goldPrice.textContent = $goldPrice.getAttribute('data-gold-price');
          $retailPrice.textContent = $retailPrice.getAttribute('data-retail-price');
        } else {
          el.setAttribute('data-current-active', 'true');
          $parent.classList.add('unit--active');
          $goldPrice.textContent = $goldPrice.getAttribute('data-gold-price-alt');
          $retailPrice.textContent = $retailPrice.getAttribute('data-retail-price-alt');
        }
      })
    }
  }
})();

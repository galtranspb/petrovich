'use strict';

(function () {
  window.onContainerClick = function (e) {
    let getItem = function (e) {
      let target = e.target;

      while (target !== this) {
        if (target.hasAttribute('data-product-id')) {
          return target;
        }
        target = target.parentNode;
      }
    };

    let onUnitClick = function (item) {
      let units = item.querySelectorAll('.unit--select .ng-binding');
      let $goldPrice = item.querySelector('.goldPrice');
      let $retailPrice = item.querySelector('.retailPrice');

      Array.from(units).forEach(function (el) {
        let $parent = el.parentNode;

        if (el.getAttribute('data-current-active') === 'true') {
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
    };

    let $item = getItem(e);

    if (e.target.getAttribute('data-current-active') === 'false') {
      onUnitClick($item);
    }
  }
})();

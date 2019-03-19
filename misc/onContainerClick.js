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

    let onArrowClick = function (e, item) {
      let input = item.querySelector('.stepper-input');
      let value = +input.getAttribute('value');

      if(e.target.classList.contains('up')) {
        ++value;
      }
      if (e.target.classList.contains('down') && value > 0) {
        --value;
      }
      input.setAttribute('value', value);
    };

    let $item = getItem(e);

    if (e.target.getAttribute('data-current-active') === 'false') {
      onUnitClick($item);
    }
    if (e.target.classList.contains('stepper-arrow')) {
      onArrowClick(e, $item);
    }
  }
})();

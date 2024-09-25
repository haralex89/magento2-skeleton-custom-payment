define(
    [
        'Magento_Checkout/js/view/payment/default',
        'MagentoLatam_CustomPaymentAdapter/js/action/custom-payment-action'
    ],
    function (Component, setPaymentMethodAction) {
        'use strict';
        return Component.extend({
            defaults: {
                redirectAfterPlaceOrder: false,
                template: 'MagentoLatam_CustomPaymentAdapter/payment/purchaseorder-form'
            },
            afterPlaceOrder: function () {
                setPaymentMethodAction(this.messageContainer);
                return false;
            }
        });
    }
);

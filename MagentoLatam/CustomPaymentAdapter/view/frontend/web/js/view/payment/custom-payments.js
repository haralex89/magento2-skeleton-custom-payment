define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'custompaymentadapter', // must equals the payment code
                component: 'MagentoLatam_CustomPaymentAdapter/js/view/payment/method-renderer/purchaseorder-method'
            }
        );
        /** Add view logic here if you needed */
        return Component.extend({});
    }
);

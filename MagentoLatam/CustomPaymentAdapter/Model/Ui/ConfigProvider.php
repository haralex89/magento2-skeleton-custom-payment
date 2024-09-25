<?php

namespace MagentoLatam\CustomPaymentAdapter\Model\Ui;

use Magento\Checkout\Model\ConfigProviderInterface;

abstract class ConfigProvider implements ConfigProviderInterface
{
    public const CODE = 'custompaymentadapter';
}

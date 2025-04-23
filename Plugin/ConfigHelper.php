<?php

namespace Swissup\BreezeAlgoliasearch\Plugin;

class ConfigHelper
{
    private \Swissup\Breeze\Helper\Data $helper;

    public function __construct(
        \Swissup\Breeze\Helper\Data $helper
    ) {
        $this->helper = $helper;
    }

    public function afterGetInstantSelector(
        \Algolia\AlgoliaSearch\Helper\ConfigHelper $subject,
        $result
    ) {
        if (!$this->helper->isEnabled()) {
            return $result;
        }

        return $result === '.columns' ? '.page-main .columns' : $result;
    }
}

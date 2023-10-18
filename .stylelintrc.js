module.exports = {
    extends: ["stylelint-config-standard-scss"],
    rules: {
        "no-descending-specificity": null,
        "alpha-value-notation": [
            "percentage",
            {
                exceptProperties: ["opacity"],
            },
        ],
        "property-no-vendor-prefix": [
            true,
            {
                ignoreProperties: ["appearance", "text-size-adjust"],
            },
        ],
        "scss/dollar-variable-colon-space-after": "always-single-line",
    },
};

require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'BonusBlock Docs',
    tagline: 'Rewarding on-chain activities',
    url: 'https://docs.bonusblock.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'favicon.ico',
    organizationName: 'BBlockLabs',
    projectName: 'docs.bonusblock.io',
    trailingSlash: false,
    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB']
    },
    themeConfig: {
        imageZoom: {
            selector: 'article img',
        },
        navbar: {
            title: 'Docs',
        },
        footer: {},
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 3,
        },
    },
    customFields: {
        pageCategories: [
            {
                name: 'overview',
                children: [
                    {name: 'Explore BonusBlock', value: '/docs/about', img: '/img/illustrations/about-us.svg'},
                    {name: 'Connect with Community', value: '/docs/connect-with-community', img: '/img/illustrations/connect-community.svg'},
                    {name: 'Media Kit', value: '/docs/media-kit', img: '/img/illustrations/media-kit.svg'},
                ],
            },
            {
                name: 'nodes',
                children: [],
            },
        ],
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // sidebarItemsGenerator: require('./sidebars.js'),
                    breadcrumbs: true,
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                        require.resolve('./src/css/markdown.css'),
                        require.resolve('./src/css/icons.css'),
                    ],
                },
            },
        ],
    ],
    plugins: [
        'plugin-image-zoom',
        async function docusaurusTailwindcssPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    postcssOptions.plugins.push(require('postcss-nested'));
                    return postcssOptions;
                },
            };
        },
    ],
};

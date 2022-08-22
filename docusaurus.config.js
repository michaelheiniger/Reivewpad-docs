// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reviewpad Documentation',
  url: 'https://docs.reviewpad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'reviewpad',
  projectName: 'maester',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/reviewpad/maester/tree/main',
        },
        blog: false,
      }),
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reviewpad',
        logo: {
          alt: 'Reviewpad Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark_mode.svg',
          href: '/'
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          {
            href: 'https://github.com/reviewpad/reviewpad/discussions',
            label: 'Discussions',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/reviewpad/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      typesense: {
        typesenseCollectionName: 'reviewpad',
        typesenseServerConfig: {
          nodes: [
            {
              host: 'lqetgadks30x62v4p-1.a1.typesense.net',
              port: 443,
              protocol: 'https'
            },
          ],
          apiKey: 'FFR0wUwQ3laHdPMf0cdY9VNJVI9nEl5L',
        },
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About us',
                to: 'https://reviewpad.com/about-us/',
              },
              {
                label: 'Join us',
                to: 'https://reviewpad.com/about-us#careers',
              },
              {
                label: 'Press kit',
                to: 'https://reviewpad.com/press-kit',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/reviewpad',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/reviewpad',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/reviewpad',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms and Conditions',
                to: 'https://reviewpad.com/terms-and-conditions/',
              },
              {
                label: 'Privacy Policy',
                to: 'https://reviewpad.com/privacy-policy',
              },
              {
                label: 'Legal information',
                to: 'https://reviewpad.com/legal-information/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Reviewpad Logo',
          src: 'img/logo_footer.svg',
          href: 'https://reviewpad.com',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Explore.dev. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

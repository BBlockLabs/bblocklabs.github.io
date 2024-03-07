const pageSidebar = [
    {type: 'ref', id: '/about', href: 'docs/about', label: 'About BonusBlock'},
    {type: 'ref', id: '/immediate', href: 'docs/immediate', label: 'Immediate'},
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Engagement',
        items: [
            {type: 'ref', id: 'engagement/market-demand', href: 'docs/engagement/market-demand', label: 'Market Demand and Technological Adoption'},
            {type: 'ref', id: 'engagement/market-challenges-web3', href: 'docs/engagement/market-challenges-web3', label: 'Market Challenges - Web3'},
            {type: 'ref', id: 'engagement/market-challenges-marketing-channels', href: 'docs/engagement/market-challenges-marketing-channels', label: 'Market Challenges - Traditional Marketing Channels'},
            {type: 'ref', id: 'engagement/driving-demand', href: 'docs/engagement/driving-demand', label: 'Driving Demand and Quality User Acquisition for On-Chain Activity with BonusBlock'},
        ],
    },
    {type: 'ref', id: '/economy', href: 'docs/economy', label: 'The BonusBlock Economy'},
    {type: 'ref', id: '/economy', href: 'docs/xp-and-token-strategy', label: 'XP and Token Strategy'},
    {type: 'ref', id: '/economy', href: 'docs/tokenomics', label: 'Tokenomics'},
    {type: 'ref', id: '/economy', href: 'docs/connect-with-community', label: 'Connect with Community'},
    {type: 'ref', id: '/economy', href: 'docs/media-kit', label: 'BonusBlock Media Kit'},
];

export default pageSidebar;

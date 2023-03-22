const baseUrl = 'BonusBlock-docs/docs/';

const pageSidebar = [
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Overview',
        items: [
            {type: 'ref', id: 'overview/about', href: baseUrl + 'overview/about', label: 'About'},
            {type: 'ref', id: 'overview/connect-with-community', href: baseUrl + 'overview/connect-with-community', label: 'Connect With Community'},
            {type: 'ref', id: 'overview/how-rewarding-works', href: baseUrl + 'overview/how-rewarding-works', label: 'How Rewarding Works'},
        ],
    },
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Running a node',
        items: [
            {type: 'ref', id: 'running-a-node/prerequisites', href: baseUrl + 'running-a-node/prerequisites', label: 'Prerequisites'},
            {type: 'ref', id: 'running-a-node/node-installation', href: baseUrl + 'running-a-node/node-installation', label: 'Node Installation'},
            {type: 'ref', id: 'running-a-node/set-up-keys', href: baseUrl + 'running-a-node/set-up-keys', label: 'Set up keys'},
            {type: 'ref', id: 'running-a-node/node-configuration', href: baseUrl + 'running-a-node/node-configuration', label: 'Node configuration'},
            {type: 'ref', id: 'running-a-node/join-a-network', href: baseUrl + 'running-a-node/join-a-network', label: 'Join a network'},
            {type: 'ref', id: 'running-a-node/making-a-service', href: baseUrl + 'running-a-node/making-a-service', label: 'Making a service'},

        ],
    },
    {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Become a Validator',
        items: [
            {type: 'ref', id: 'becoming-a-validator/introduction', href: baseUrl + 'becoming-a-validator/introduction', label: 'Introduction'},
            {type: 'ref', id: 'becoming-a-validator/requirements', href: baseUrl + 'becoming-a-validator/requirements', label: 'Requirements'},
            {type: 'ref', id: 'becoming-a-validator/testnet-faucet', href: baseUrl + 'becoming-a-validator/testnet-faucet', label: 'Testnet faucet'},
            {type: 'ref', id: 'becoming-a-validator/running-a-validator', href: baseUrl + 'becoming-a-validator/running-a-validator', label: 'Running a validator'},
            {type: 'ref', id: 'becoming-a-validator/troubleshooting', href: baseUrl + 'becoming-a-validator/troubleshooting', label: 'Troubleshooting'},
        ],
    },
];

export default pageSidebar;

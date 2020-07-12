module.exports = [
    {
        title: '目录',
        collapsable: false,
        path: '/SUMMARY.md'
    },
    {
        title: '前言',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/introduction/about-me',
            '/introduction/about-the-project',
            '/introduction/guide/quick-start'
        ]
    },
    {
        title: '7月8月',
        path: '/mashibing/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            "/mashibing/JUC"
        ]
    },
    {
        title: 'DSweet',
        collapsable: false,
        sidebarDepth: 2,
        children: []
    },
    {
        title: '附录',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/appendix/markdown',
        ]
    }
]
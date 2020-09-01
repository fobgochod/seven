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
            {
                title: 'JUC',
                path: '/mashibing/juc/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/mashibing/juc/thread1',
                    '/mashibing/juc/thread2',
                    '/mashibing/juc/thread3',
                    '/mashibing/juc/thread4',
                    '/mashibing/juc/thread5',
                    '/mashibing/juc/thread6',
                    '/mashibing/juc/thread7',
                    '/mashibing/juc/thread8',
                    '/mashibing/juc/thread9',
                ]
            },
            {
                title: 'JVM',
                path: '/mashibing/jvm/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/mashibing/jvm/jvm1',
                    '/mashibing/jvm/jvm2',
                    '/mashibing/jvm/jvm3'
                ]
            },
            {
                title: 'MySQL',
                path: '/mashibing/mysql/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/mashibing/mysql/mysql1',
                    '/mashibing/mysql/mysql2'
                ]
            }
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
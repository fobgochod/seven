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
        title: '前端',
        collapsable: false,
        sidebarDepth: 2,
        children: []
    },
    {
        title: '后端',
        collapsable: false,
        sidebarDepth: 2,
        children: []
    },
    {
        title: '学习中 📚',
        path: '/mashibing/',
        collapsable: true,
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
                    '/mashibing/mysql/data',
                    '/mashibing/mysql/mysql1',
                    '/mashibing/mysql/mysql2',
                    '/mashibing/mysql/mysql3',
                    '/mashibing/mysql/mysql4'
                ]
            }
        ]
    },
    {
        title: '读书笔记',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/book/On-Java-8',
            '/book/Understanding-the-JVM',
        ]
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
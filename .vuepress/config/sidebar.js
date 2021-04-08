module.exports = [
    {
        title: '前言',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/introduction/about-me',
            '/zh/introduction/about-the-project',
            '/zh/introduction/guide/quick-start'
        ]
    },
    {
        title: '前端',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/frontend/npm',
            '/zh/frontend/yarn',
            '/zh/frontend/vuepress',
            '/zh/frontend/gitbook',
        ]
    },
    {
        title: '后端',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/backend/nginx',
        ]
    },
    {
        title: '数据库',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: 'MariaDB',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/mariadb/mariadb-install',
                    '/zh/database/mariadb/mariadb-documentation',
                ]
            },
            {
                title: 'Redis',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/redis/redis-install',
                    '/zh/database/redis/redis-install-windows',
                    '/zh/database/redis/redis-commands',
                ]
            }
        ]
    },
    {
        title: 'OS',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/os/linux',
            '/zh/os/windows',
            '/zh/os/docker',
            '/zh/os/nous'
        ]
    },
    {
        title: '学习中 📚',
        path: '/zh/mashibing/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
            {
                title: 'SysIO',
                path: '/zh/mashibing/sysio/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/mashibing/sysio/sysio1',
                    '/zh/mashibing/sysio/sysio2',
                    '/zh/mashibing/sysio/sysio3',
                    '/zh/mashibing/sysio/sysio4',
                    '/zh/mashibing/sysio/sysio5',
                    '/zh/mashibing/sysio/sysio6',
                ]
            },
            {
                title: 'JUC',
                path: '/zh/mashibing/juc/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/mashibing/juc/thread1',
                    '/zh/mashibing/juc/thread2',
                    '/zh/mashibing/juc/thread3',
                    '/zh/mashibing/juc/thread4',
                    '/zh/mashibing/juc/thread5',
                    '/zh/mashibing/juc/thread6',
                    '/zh/mashibing/juc/thread7',
                    '/zh/mashibing/juc/thread8',
                    '/zh/mashibing/juc/thread9',
                ]
            },
            {
                title: 'JVM',
                path: '/zh/mashibing/jvm/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/mashibing/jvm/jvm1',
                    '/zh/mashibing/jvm/jvm2',
                    '/zh/mashibing/jvm/jvm3'
                ]
            },
            {
                title: 'MySQL',
                path: '/zh/mashibing/mysql/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/mashibing/mysql/data',
                    '/zh/mashibing/mysql/mysql1',
                    '/zh/mashibing/mysql/mysql2',
                    '/zh/mashibing/mysql/mysql3',
                    '/zh/mashibing/mysql/mysql4'
                ]
            },
            {
                title: 'Redis',
                path: '/zh/mashibing/redis/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/mashibing/redis/redis1',
                    '/zh/mashibing/redis/redis8'
                ]
            }
        ]
    },
    {
        title: '读书笔记',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/book/On-Java-8',
            '/zh/book/Understanding-the-JVM',
        ]
    },
    {
        title: '附录',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/appendix/markdown',
        ]
    }
]
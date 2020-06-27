module.exports = {
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ["nuggets-style-copy", {
            copyText: '复制代码',
            tip: {
                time: '3000',
                content: '复制成功',
                title: 'Tips'
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github-v4',
            owner: 'fobgochod',
            repo: 'fobgochod.github.io',
            clientId: '86b0873df13688df1cc2',
            clientSecret: '0be83a1ff2a594501e217b9b991de8917998e746',
            locale: 'zh-CN',
            autoCreateIssue: true
        }]
    ],
    title: 'fobgochod',
    description: 'fobgochod的笔记',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '七',
            description: '七的笔记'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Seven',
            description: 'Seven Notes'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    {text: '主页', link: '/'},
                    {text: '目录', link: '/zh/content/'},
                    {text: '指南', link: '/zh/guide/'},
                    {text: '帮助', link: 'https://vuepress.vuejs.org/zh'}
                ],
                sidebar: [
                    {
                        title: '公司',
                        path: '/zh/content/company/'
                    },
                    {
                        title: '系统',
                        path: '/zh/content/system/'
                    },
                    {
                        title: '语言',
                        path: '/zh/content/language/'
                    },
                    {
                        title: '集成开发环境',
                        path: '/zh/content/ide/'
                    },
                    {
                        title: '服务器',
                        path: '/zh/content/server/'
                    },
                    {
                        title: '数据库',
                        path: '/zh/content/database/',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            ['/zh/content/database/MariaDB', 'MariaDB'],
                            ['/zh/content/database/Oracle', 'Oracle']
                        ]
                    },
                    {
                        title: '指南',
                        path: '/zh/guide/'
                    }
                ]
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'Content', link: '/en/content/', target: '_blank'},
                    {text: 'Guide', link: '/en/guide/', target: '_blank'},
                    {text: 'Help', link: 'https://vuepress.vuejs.org'}
                ],
                sidebar: 'auto'
            }
        }
    }
}
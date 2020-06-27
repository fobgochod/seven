module.exports = {
    base: '/',
    title: 'Seven',
    description: 'Seven的笔记',
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    locales: {
        "/": {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        logo: '/images/saber.jpg',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
        activeHeaderLinks: false,
        repo: 'fobgochod/seven',
        repoLabel: 'GitHub',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar')
    },
    markdown: {
        lineNumbers: true,
        plugins: ['task-lists']
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
    ]
}
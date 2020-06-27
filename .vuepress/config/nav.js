module.exports = [
    {text: '主页', link: '/'},
    {text: '目录', link: '/summary'},
    {
        text: '友情链接',
        items: [
            {
                text: 'DevOps', items: [
                    {text: 'GitHub', link: 'https://github.com'},
                    {text: 'Travis CI', link: 'https://travis-ci.com'}
                ]
            },
            {
                text: '其他', items: [
                    {text: '软件架构探索', link: 'https://icyfenix.cn'},
                    {text: 'Java 全栈知识体系', link: 'https://www.pdai.tech'},
                    {text: 'VuePress', link: 'https://vuepress.vuejs.org/zh'},
                    {text: 'Vssue', link: 'https://vssue.js.org/zh'}
                ]
            }
        ]
    }
]
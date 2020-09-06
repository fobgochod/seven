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
                text: '模版', items: [
                    {text: 'Vssue', link: 'https://vssue.js.org/zh'},
                    {text: '软件架构探索', link: 'https://icyfenix.cn'},
                    {text: 'MyBatis-Plus', link: 'https://baomidou.com'},
                    {text: 'Java 全栈知识体系', link: 'https://www.pdai.tech'}
                ]
            },
            {
                text: '其他', items: [
                    {text: 'Vue.js', link: 'https://cn.vuejs.org'},
                    {text: 'VuePress', link: 'https://vuepress.vuejs.org/zh'},
                    {text: 'Awesome VuePress', link: 'https://github.com/vuepressjs/awesome-vuepress'},
                ]
            }
        ]
    }
]
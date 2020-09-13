(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{585:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress"}},[s._v("VuePress")]),s._v(" "),a("ul",[a("li",[s._v("参考：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000015237352?utm_source=tag-newest#articleHeader11",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://segmentfault.com/a/1190000015237352?utm_source=tag-newest#articleHeader11"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/7a2cc8a7f40c",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/7a2cc8a7f40c"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("插件："),a("a",{attrs:{href:"https://vuepress.github.io/zh",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.github.io/zh"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("支持语言："),a("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://prismjs.com/#languages-list"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall -g vuepress\n")])])]),a("h2",{attrs:{id:"插件"}},[s._v("插件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码复制按钮插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress-plugin-nuggets-style-copy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到顶部插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @vuepress/plugin-back-to-top\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress-plugin-go-top\n")])])]),a("h2",{attrs:{id:"faq"}},[s._v("FAQ")]),s._v(" "),a("blockquote",[a("p",[s._v("npm install -D vuepress-plugin-export"),a("br"),s._v('\n报错：ERROR: Failed to download Chromium r686378! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.')])]),s._v(" "),a("p",[s._v("是因为在执行安装的过程中需要执行install.js，这里会下载Chromium,官网建议是进行跳过。\n通过设置环境变量set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 阻止下载 Chromium")]),s._v(" "),a("h2",{attrs:{id:"入门"}},[s._v("入门")]),s._v(" "),a("blockquote",[a("p",[s._v("目录结构如下")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sample\n├── docs\n│   ├── .vuepress\n│   └── README.md\n└── package.json\n")])])]),a("p",[s._v("1.初始化")]),s._v(" "),a("ul",[a("li",[s._v("创建工作文件夹 sample")]),s._v(" "),a("li",[s._v("执行初始化命令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sample"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("npm init -y\n")])])]),a("p",[s._v("2.配置")]),s._v(" "),a("ul",[a("li",[s._v("新建文件夹/docs")]),s._v(" "),a("li",[s._v("创建/docs/README.md文件")]),s._v(" "),a("li",[s._v("修改/package.json，添加下述兩行")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sample"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("3.运行")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("npm run docs:dev\n")])])]),a("p",[s._v("4.编译")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("npm run docs:build\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
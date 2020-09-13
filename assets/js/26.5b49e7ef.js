(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{590:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"npm"}},[s._v("NPM")]),s._v(" "),n("blockquote",[n("p",[s._v("下载："),n("a",{attrs:{href:"https://nodejs.org/en/download/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/en/download/releases"),n("OutboundLink")],1),n("br"),s._v("\n仓库："),n("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),n("blockquote",[n("p",[s._v("版本 node-v10.16.3-x64.msi\nnpm 是 Node.js 的包管理工具，用来安装各种 Node.js 的扩展")])]),s._v(" "),n("div",{staticClass:"language-s extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("node -v\nnpm -v\n")])])]),n("p",[s._v("1.临时使用")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" --registry https://registry.npm.taobao.org "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" express\n")])])]),n("p",[s._v("2.持久使用")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n")])])]),n("p",[s._v("3.验证是否成功")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n")])])]),n("p",[s._v("4.通过cnpm使用")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])])]),n("h2",{attrs:{id:"配置"}},[s._v("配置")]),s._v(" "),n("blockquote",[n("p",[s._v("参考："),n("a",{attrs:{href:"https://www.cnblogs.com/liaojie970/p/9296177.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/liaojie970/p/9296177.html"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("1.配置npm的全局模块的存放路径以及cache的路径")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\install'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("odejs"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_global"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\install'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("odejs"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_cache"')]),s._v("\n")])])]),n("p",[s._v("2.系统环境变量添加系统变量path")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("D:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nodejs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("node_global\n")])])]),n("p",[s._v("3.安装express")]),s._v(" "),n("blockquote",[n("p",[s._v('注：“-g”这个参数意思是装到global目录下，也就是上面说设置的"D:\\install\\nodejs\\node_global"')])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g express\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# express 4.x版本中将命令工具分出来,安装一个命令工具,执行命令:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g express-generator\n")])])]),n("p",[s._v("4.验证")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("express --version\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" info express\n")])])]),n("h2",{attrs:{id:"npm安装时-s-d作用及区别"}},[s._v("npm安装时-S -D作用及区别")]),s._v(" "),n("blockquote",[n("p",[s._v("参考："),n("a",{attrs:{href:"https://www.cnblogs.com/web-record/p/10904907.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/web-record/p/10904907.html"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"安装-2"}},[s._v("安装")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码复制按钮插件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress-plugin-nuggets-style-copy\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到顶部插件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D @vuepress/plugin-back-to-top\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress-plugin-go-top\n")])])]),n("h3",{attrs:{id:"markdown插件"}},[s._v("markdown插件")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D markdown-it-task-lists\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress-plugin-comment\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D @vuepress/plugin-google-analytics\n")])])]),n("h3",{attrs:{id:"卸载"}},[s._v("卸载")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除模块，但不删除模块留在package.json中的对应信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall module_name\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除模块，同时删除模块留在package.json中dependencies下的对应信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall module_name --save\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除模块，同时删除模块留在package.json中devDependencies下的对应信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall module_name --save-dev\n")])])]),n("h3",{attrs:{id:"s、-d、-g"}},[s._v("-S、-D、-g")]),s._v(" "),n("h4",{attrs:{id:"s"}},[s._v("-S")]),s._v(" "),n("ul",[n("li",[s._v("--save-prod")]),s._v(" "),n("li",[s._v("包名会被注册在package.json的dependencies")]),s._v(" "),n("li",[s._v("在生产环境下这个包的依赖依然存在")]),s._v(" "),n("li",[s._v("npm install -s module_name")]),s._v(" "),n("li",[s._v("npm install --save-prod module_name")])]),s._v(" "),n("h4",{attrs:{id:"d"}},[s._v("-D")]),s._v(" "),n("ul",[n("li",[s._v("--save-dev")]),s._v(" "),n("li",[s._v("包名会被注册在package.json的devDependencies")]),s._v(" "),n("li",[s._v("里面的插件只用于开发环境，不用于生产环境")]),s._v(" "),n("li",[s._v("npm install -d module_name")]),s._v(" "),n("li",[s._v("npm install --save-dev module_name")])]),s._v(" "),n("h4",{attrs:{id:"g"}},[s._v("-g")]),s._v(" "),n("ul",[n("li",[s._v("npm install -g module_name")]),s._v(" "),n("li",[s._v("全局安装")])]),s._v(" "),n("h4",{attrs:{id:"不写"}},[s._v("不写")]),s._v(" "),n("ul",[n("li",[s._v("npm install module_name")]),s._v(" "),n("li",[s._v("本地安装，将安装包放在"),n("code",[s._v("./node_modules")]),s._v("下")]),s._v(" "),n("li",[s._v("包名不会进入package.json里面")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{593:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"socket编程bio及tcp参数"}},[s._v("Socket编程BIO及TCP参数")]),s._v(" "),n("p",[s._v("lsof -p\nnetstat -natp\ntcpdump")]),s._v(" "),n("p",[s._v("tcpdump -nn -i eth0 port 9090")]),s._v(" "),n("p",[s._v("socket\n四元组 CIP CPORT + SIP SPORT\n内核级的")]),s._v(" "),n("p",[s._v("ifconfig\nMTU(Maximum Transmission Unit) 1500bytes 总数据包大小 1500字节")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@seven ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth0: "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\ninet "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".231.255  netmask "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".240.0  broadcast "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".239.255\nether 00:16:3e:02:ce:8a  txqueuelen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX packets "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("37642950")]),s._v("  bytes "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7411002555")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" GiB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX errors "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTX packets "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("34207365")]),s._v("  bytes "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21628623014")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.1")]),s._v(" GiB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTX errors "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("tcpdump -nn -i eth0 port 9090\nmms 数据内容大小")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@seven ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcpdump -nn -i eth0 port 9090")]),s._v("\ntcpdump: verbose output suppressed, use -v or -vv "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" full protocol decode\nlistening on eth0, link-type EN10MB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", capture size "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v(" bytes\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":42:29.910181 IP "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.65")]),s._v(".156.171.30077 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".231.255.9090: Flags "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("83533905")]),s._v(", win "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64240")]),s._v(", options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mss "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1400")]),s._v(",nop,wscale "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(",nop,nop,sackOK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", length "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":42:29.910219 IP "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".231.255.9090 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.65")]),s._v(".156.171.30077: Flags "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("S."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3044535540")]),s._v(", ack "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("83533906")]),s._v(", win "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1152")]),s._v(", options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mss "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1460")]),s._v(",nop,nop,sackOK,nop,wscale "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", length "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":42:29.925693 IP "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("117.65")]),s._v(".156.171.30077 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".231.255.9090: Flags "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", ack "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", win "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("257")]),s._v(", length "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("nc ip port")]),s._v(" "),n("h2",{attrs:{id:"网络io-变化-模型"}},[s._v("网络IO 变化 模型")]),s._v(" "),n("p",[s._v("同步\n异步\n阻塞\n非阻塞")]),s._v(" "),n("p",[s._v("strace -ff -o out -cmd")]),s._v(" "),n("p",[s._v("man man")]),s._v(" "),n("h3",{attrs:{id:"bio"}},[s._v("BIO")])])}),[],!1,null,null,null);t.default=e.exports}}]);
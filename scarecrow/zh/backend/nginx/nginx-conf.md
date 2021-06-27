# nginx.conf

> 目录结构

```
/
├── opt
│   ├── install
│   ├── package
│   └── source
│       └── backend
│       │   └── hold-on
│       └── frontend
│           ├── GitBook
│           │   └── OnJava8
│           ├── vue
│           └── vuepress
│               └── fobgochod
├── root(me)
└── usr
```

> 创建目录

```sh
mkdir -p /opt/source/{backend,frontend/{vue,vuepress/fobgochod,GitBook/OnJava8}}
```

> nginx.conf修改

```sh
location /fobgochod {
    alias /opt/source/frontend/vuepress/fobgochod/dist;
    index  index.html index.htm;
    autoindex on;
}

location /onjava8 {
    alias /opt/source/frontend/GitBook/OnJava8/_book;
    index  index.html index.htm;
    autoindex on;
}
```
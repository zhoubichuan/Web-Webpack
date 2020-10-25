(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{182:function(s,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"配置-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-loader"}},[s._v("#")]),s._v(" 配置 loader")]),s._v(" "),a("p",[s._v("在第 1 小节，我们提到过，webpack 的 loader 用于处理不同的文件类型，在日常的项目中使用 loader 时，可能会遇到比较复杂的情况，本小节我们来深入探讨 loader 的一些配置细节。")]),s._v(" "),a("h2",{attrs:{id:"loader-匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-匹配规则"}},[s._v("#")]),s._v(" loader 匹配规则")]),s._v(" "),a("p",[s._v("当我们需要配置 loader 时，都是在 "),a("code",[s._v("module.rules")]),s._v(" 中添加新的配置项，在该字段中，每一项被视为一条匹配使用 loader 的规则。")]),s._v(" "),a("p",[s._v("先来看一个基础的例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n  // ...\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?/, // 条件\n        include: [\n          path.resolve(__dirname, 'src'),\n        ], // 条件\n        use: 'babel-loader', // 规则应用结果\n      }, // 一个 object 即一条规则\n      // ...\n    ],\n  },\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("loader 的匹配规则中有两个最关键的因素：一个是匹配条件，一个是匹配规则后的应用。")]),s._v(" "),a("p",[s._v("匹配条件通常都使用请求资源文件的绝对路径来进行匹配，在官方文档中称为 "),a("code",[s._v("resource")]),s._v("，除此之外还有比较少用到的 "),a("code",[s._v("issuer")]),s._v("，则是声明依赖请求的源文件的绝对路径。举个例子：在 /path/to/app.js 中声明引入 "),a("code",[s._v("import './src/style.scss'")]),s._v("，"),a("code",[s._v("resource")]),s._v(" 是 /path/to/src/style.scss，"),a("code",[s._v("issuer")]),s._v(" 是 /path/to/app.js，规则条件会对这两个值来尝试匹配。")]),s._v(" "),a("p",[s._v("上述代码中的 "),a("code",[s._v("test")]),s._v(" 和 "),a("code",[s._v("include")]),s._v(" 都用于匹配 "),a("code",[s._v("resource")]),s._v(" 路径，是 "),a("code",[s._v("resource.test")]),s._v(" 和 "),a("code",[s._v("resource.include")]),s._v(" 的简写，你也可以这么配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n  // ...\n  rules: [\n      {\n        resource: { // resource 的匹配条件\n          test: /\\.jsx?/,\n          include: [\n            path.resolve(__dirname, 'src'),\n          ],\n        },\n        // 如果要使用 issuer 匹配，便是 issuer: { test: ... }\n        use: 'babel-loader',\n      },\n      // ...\n    ],\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("blockquote",[a("p",[s._v("issuer 规则匹配的场景比较少见，你可以用它来尝试约束某些类型的文件中只能引用某些类型的文件。")])]),s._v(" "),a("p",[s._v("当规则的条件匹配时，便会使用对应的 loader 配置，如上述例子中的 "),a("code",[s._v("babel-loader")]),s._v("。关于 loader 配置后面再详细介绍，这里先来看看如何配置更加复杂的规则匹配条件。")]),s._v(" "),a("h2",{attrs:{id:"规则条件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则条件配置"}},[s._v("#")]),s._v(" 规则条件配置")]),s._v(" "),a("p",[s._v("大多数情况下，配置 loader 的匹配条件时，只要使用 "),a("code",[s._v("test")]),s._v(" 字段就好了，很多时候都只需要匹配文件后缀名来决定使用什么 loader，但也不排除在某些特殊场景下，我们需要配置比较复杂的匹配条件。webpack 的规则提供了多种配置形式：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("{ test: ... }")]),s._v(" 匹配特定条件")]),s._v(" "),a("li",[a("code",[s._v("{ include: ... }")]),s._v(" 匹配特定路径")]),s._v(" "),a("li",[a("code",[s._v("{ exclude: ... }")]),s._v(" 排除特定路径")]),s._v(" "),a("li",[a("code",[s._v("{ and: [...] }")]),s._v("必须匹配数组中所有条件")]),s._v(" "),a("li",[a("code",[s._v("{ or: [...] }")]),s._v(" 匹配数组中任意一个条件")]),s._v(" "),a("li",[a("code",[s._v("{ not: [...] }")]),s._v(" 排除匹配数组中所有条件")])]),s._v(" "),a("p",[s._v("上述的所谓条件的值可以是：")]),s._v(" "),a("ul",[a("li",[s._v("字符串：必须以提供的字符串开始，所以是字符串的话，这里我们需要提供绝对路径")]),s._v(" "),a("li",[s._v("正则表达式：调用正则的 "),a("code",[s._v("test")]),s._v(" 方法来判断匹配")]),s._v(" "),a("li",[s._v("函数：(path) => boolean，返回 "),a("code",[s._v("true")]),s._v(" 表示匹配")]),s._v(" "),a("li",[s._v("数组：至少包含一个条件的数组")]),s._v(" "),a("li",[s._v("对象：匹配所有属性值的条件")])]),s._v(" "),a("p",[s._v("通过例子来帮助理解：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rules: [\n  {\n    test: /\\.jsx?/, // 正则\n    include: [\n      path.resolve(__dirname, 'src'), // 字符串，注意是绝对路径\n    ], // 数组\n    // ...\n  },\n  {\n    test: {\n      js: /\\.js/,\n      jsx: /\\.jsx/,\n    }, // 对象，不建议使用\n    not: [\n      (value) => { /* ... */ return true; }, // 函数，通常需要高度自定义时才会使用\n    ],\n  },\n],\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("上述多个配置形式结合起来就能够基本满足各种各样的构建场景了，通常我们会结合使用 "),a("code",[s._v("test/and")]),s._v(" 和 "),a("code",[s._v("include&exclude")]),s._v(" 来配置条件，如上述那个简单的例子。")]),s._v(" "),a("h2",{attrs:{id:"module-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-type"}},[s._v("#")]),s._v(" module type")]),s._v(" "),a("p",[s._v("webpack 4.x 版本强化了 module type，即模块类型的概念，不同的模块类型类似于配置了不同的 loader，webpack 会有针对性地进行处理，现阶段实现了以下 5 种模块类型。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("javascript/auto")]),s._v("：即 webpack 3 默认的类型，支持现有的各种 JS 代码模块类型 —— CommonJS、AMD、ESM")]),s._v(" "),a("li",[a("code",[s._v("javascript/esm")]),s._v("：ECMAScript modules，其他模块系统，例如 CommonJS 或者 AMD 等不支持，是 "),a("code",[s._v(".mjs")]),s._v(" 文件的默认类型")]),s._v(" "),a("li",[a("code",[s._v("javascript/dynamic")]),s._v("：CommonJS 和 AMD，排除 ESM")]),s._v(" "),a("li",[a("code",[s._v("javascript/json")]),s._v("：JSON 格式数据，"),a("code",[s._v("require")]),s._v(" 或者 "),a("code",[s._v("import")]),s._v(" 都可以引入，是 "),a("code",[s._v(".json")]),s._v(" 文件的默认类型")]),s._v(" "),a("li",[a("code",[s._v("webassembly/experimental")]),s._v("：WebAssembly modules，当前还处于试验阶段，是 "),a("code",[s._v(".wasm")]),s._v(" 文件的默认类型")])]),s._v(" "),a("p",[s._v("如果不希望使用默认的类型的话，在确定好匹配规则条件时，我们可以使用 "),a("code",[s._v("type")]),s._v(" 字段来指定模块类型，例如把所有的 JS 代码文件都设置为强制使用 ESM 类型：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{\n  test: /\\.js/,\n  include: [\n    path.resolve(__dirname, 'src'),\n  ],\n  type: 'javascript/esm', // 这里指定模块类型\n},\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("上述做法是可以帮助你规范整个项目的模块系统，但是如果遗留太多不同类型的模块代码时，建议还是直接使用默认的 "),a("code",[s._v("javascript/auto")]),s._v("。")]),s._v(" "),a("p",[s._v("webpack 后续的开发计划会增加对更多模块类型的支持，例如极其常见的 CSS 和 HTML 模块类型，这个特性值得我们期待一下。")]),s._v(" "),a("h2",{attrs:{id:"使用-loader-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-loader-配置"}},[s._v("#")]),s._v(" 使用 loader 配置")]),s._v(" "),a("p",[s._v("当然，在当前版本的 webpack 中，"),a("code",[s._v("module.rules")]),s._v(" 的匹配规则最重要的还是用于配置 loader，我们可以使用 "),a("code",[s._v("use")]),s._v(" 字段：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rules: [\n  {\n    test: /\\.less/,\n    use: [\n      'style-loader', // 直接使用字符串表示 loader\n      {\n        loader: 'css-loader',\n        options: {\n          importLoaders: 1\n        },\n      }, // 用对象表示 loader，可以传递 loader 配置等\n      {\n        loader: 'less-loader',\n        options: {\n          noIeCompat: true\n        }, // 传递 loader 配置\n      },\n    ],\n  },\n],\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("我们看下上述的例子，先忽略 loader 的使用情况，单纯看看如何配置。"),a("code",[s._v("use")]),s._v(" 字段可以是一个数组，也可以是一个字符串或者表示 loader 的对象。如果只需要一个 loader，也可以这样："),a("code",[s._v("use: { loader: 'babel-loader', options: { ... } }")]),s._v("。")]),s._v(" "),a("p",[s._v("我们还可以使用 "),a("code",[s._v("options")]),s._v(" 给对应的 loader 传递一些配置项，这里不再展开。当你使用一些 loader 时，loader 的说明一般都有相关配置的描述。")]),s._v(" "),a("h2",{attrs:{id:"loader-应用顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-应用顺序"}},[s._v("#")]),s._v(" loader 应用顺序")]),s._v(" "),a("p",[s._v("前面提到，一个匹配规则中可以配置使用多个 loader，即一个模块文件可以经过多个 loader 的转换处理，执行顺序是从最后配置的 loader 开始，一步步往前。例如，对于上面的 "),a("code",[s._v("less")]),s._v(" 规则配置，一个 style.less 文件会途径 less-loader、css-loader、style-loader 处理，成为一个可以打包的模块。")]),s._v(" "),a("p",[s._v("loader 的应用顺序在配置多个 loader 一起工作时很重要，通常会使用在 CSS 配置上，除了 style-loader 和 css-loader，你可能还要配置 less-loader 然后再加个 postcss 的 autoprefixer 等。")]),s._v(" "),a("p",[s._v("上述从后到前的顺序是在同一个 rule 中进行的，那如果多个 rule 匹配了同一个模块文件，loader 的应用顺序又是怎样的呢？看一份这样的配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('rules: [\n  {\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    loader: "eslint-loader",\n  },\n  {\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    loader: "babel-loader",\n  },\n],\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("这样无法法保证 eslint-loader 在 babel-loader 应用前执行。webpack 在 "),a("code",[s._v("rules")]),s._v(" 中提供了一个 "),a("code",[s._v("enforce")]),s._v(" 的字段来配置当前 rule 的 loader 类型，没配置的话是普通类型，我们可以配置 "),a("code",[s._v("pre")]),s._v(" 或 "),a("code",[s._v("post")]),s._v("，分别对应前置类型或后置类型的 loader。")]),s._v(" "),a("blockquote",[a("p",[s._v("eslint-loader 要检查的是人工编写的代码，如果在 babel-loader 之后使用，那么检查的是 Babel 转换后的代码，所以必须在 babel-loader 处理之前使用。")])]),s._v(" "),a("p",[s._v("还有一种行内 loader，即我们在应用代码中引用依赖时直接声明使用的 loader，如 "),a("code",[s._v("const json = require('json-loader!./file.json')")]),s._v(" 这种。不建议在应用开发中使用这种 loader，后续我们还会再提到。")]),s._v(" "),a("p",[s._v("顾名思义，所有的 loader 按照"),a("strong",[s._v("前置 -> 行内 -> 普通 -> 后置")]),s._v("的顺序执行。所以当我们要确保 eslint-loader 在 babel-loader 之前执行时，可以如下添加 "),a("code",[s._v("enforce")]),s._v(" 配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rules: [\n  {\n    enforce: 'pre', // 指定为前置类型\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    loader: \"eslint-loader\",\n  },\n]\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("当项目文件类型和应用的 loader 不是特别复杂的时候，通常建议把要应用的同一类型 loader 都写在同一个匹配规则中，这样更好维护和控制。")]),s._v(" "),a("h2",{attrs:{id:"使用-noparse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-noparse"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("noParse")])]),s._v(" "),a("p",[s._v("在 webpack 中，我们需要使用的 loader 是在 "),a("code",[s._v("module.rules")]),s._v(" 下配置的，webpack 配置中的 module 用于控制如何处理项目中不同类型的模块。")]),s._v(" "),a("p",[s._v("除了 "),a("code",[s._v("module.rules")]),s._v(" 字段用于配置 loader 之外，还有一个 "),a("code",[s._v("module.noParse")]),s._v(" 字段，可以用于配置哪些模块文件的内容不需要进行解析。对于一些"),a("strong",[s._v("不需要解析依赖（即无依赖）")]),s._v(" 的第三方大型类库等，可以通过这个字段来配置，以提高整体的构建速度。")]),s._v(" "),a("blockquote",[a("p",[s._v("使用 "),a("code",[s._v("noParse")]),s._v(" 进行忽略的模块文件中不能使用 "),a("code",[s._v("import")]),s._v("、"),a("code",[s._v("require")]),s._v("、"),a("code",[s._v("define")]),s._v(" 等导入机制。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n  // ...\n  module: {\n    noParse: /jquery|lodash/, // 正则表达式\n\n    // 或者使用 function\n    noParse(content) {\n      return /jquery|lodash/.test(content)\n    },\n  }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("noParse")]),s._v(" 从某种程度上说是个优化配置项，日常也可以不去使用。")])])}],!1,null,null,null);e.default=r.exports}}]);
# Webpack简介

用一种狭隘的方式理解，它是一个翻译器，把写好的JS脚本，通过某种方式打包，使得原本不能直接运行的代码可以运行了。

但实际上，

*webpack* is a module bundler，模块打包工具，把很多个模块打包到一起。

ES Moudule、CommonJS、CMD、AMD这些规范，Webpack都能遵循他们进行打包。

如今的webpack不仅仅可以打包js文件，还可以打包css、png很多格式文件。

阅读官网，可以先阅读documentation-->concepts下的Modules章节和documentation的api部分。

### 环境搭建

Webpack本质上是由Node实现，所以需要node环境。

**npm init**，初始化项目。后面会有一系列基本设置。会生成一个package.json文件。

npm info webpack，webpack的所有版本信息。

npm install webpack webpack-cli -g，全局安装。（这会有一个弊端，如果两个项目之前使用的webpack版本不一致，这回导致日后如果再使用其中一个版本，会有一个项目运行不了）。

**npm install webpack webpack-cli --save-dev**，直接把它们安装在项目中，可以避免全局安装的弊端，--save-dev等价于-D。

**npm install webpack@4.16.5  -D**，可以制定安装webpack的版本，这里制定的使4.16.5版本。

**npx webpack -v**，可以打印出在项目目录中安装的webpack版本。



### 配置文件



npx webpack xxx.js，使用webpack默认配置进行打包，默认打包放在一个dist文件夹下。如果想自己配置，可以在项目中新建webpack.config.js(webpack指定的配置文件，需要自己建立），然后在里面进行配置。然后直接运行npx webpack即可，后面无需跟要打包的文件。（**全局安装的webpack可以直接webpack xxx.js，不需要加npx**）

```
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundles.js',
		path: path.resolve(__dirname, 'bundle')
	}
}
//表示入口（要打包的文件）从bundle目录下输出，文件为bundles.js，__dirname表示webpack.config.js的当前路径，指定path需要引入node的require模块。
```

当然，如果想不想用默认的配置文件名（webpack.config.js），可在项目目录命令行运行**npx webpack --config wpconfig.js**，表示将配置设置在wpconfig中。

**一般来说，根据工程的不同，特点、复杂度也不同，都会根据工程的需求进行设置配置。**

用npx指定可能有些不大习惯，可通过npmscript进行设置。在package.json中的“scripts”中进行设置。如：

```
"scripts": {
	"bundle": "webpack"
}
//表示当你运行bundle这个命令，工具就会执行webpack这个命令。
```

这时，就可以运行npm run bundle进行打包（记得在vue中运行npm run build打包也可以设置）。

**webpack-cli**

它的作用就是可以使我们在命令行能正确运行webpack命令，如webpack、npx webpack等。



阅读官网，可以先阅读documentation-->Guides的Getting started部分。

另外，在之前的配置文件中，还可以设置mode项，该项有两个值，production和development。前者表示打包成压缩文件，后者表示打包成正常文件。默认是前者。

```
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		filename: 'bundles.js',
		path: path.resolve(__dirname, 'bundle')
	}
}
```


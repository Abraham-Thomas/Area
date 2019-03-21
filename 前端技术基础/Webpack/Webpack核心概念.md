# Webpack核心概念

### loader

阅读官网，documentation-->loader，file-loader，url-loader部分。

**file-loader**

```javascript
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.jpg$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},
	output: {
		filename: 'bundles.js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

这是在webpack.config.js（默认配置文件名，需自己建立）中的配置，webpack默认知道如何打包js文件，但无法识别非js接吻的文件，需要我们指示它去怎么做。在module中进行设置，定义规则，遇到.jpg结尾的文件，就借用file-loader依赖进行打包（需要安装npm install file-loader -D）。

file-loader底层做了几件事情，当它发现入口文件（index.js）中引入了图片模块，会先打包到dist目录（名字会自动生成，也可在配置中自己命名），这时它会拿到图片相对于dist目录的名称，然后再把名称作为返回值返回给引入模块的变量之中。

理论上，想要打包什么样的文件，就在module-->rules-->test中进行设置，比如.txt .png等。

**loader其实就是个打包方案。**

设置打包文件名称

```
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'file-loader',
				options: {
					//placeholder
                    name: '[name].[ext]'
				}
			}
		}]
	},
	output: {
		filename: 'bundles.js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

name: '[name].[ext]'，打包出来的图片和原图片名称及后缀一致。这种语法也叫占位符（placeholder）。

如果想要将图片打包到另外的目录（相对于dist），可在options中设置：

```
//代码省略
options: {
	name: '[name].[ext]',
	outputPath: 'images/'
}
//代码省略
```

表示打包到dist目录下的images目录。

**url-loader**，完全可以实现file-loader的一切功能。不过使用前得先安装依赖（npm install url-loader -D）。

唯一的区别是多了一个limit：

```
//代码省略
options: {
	name: '[name].[ext]',
	outputPath: 'images/',
	limit: 10240
}
//代码省略
```

表示如果文件大小大于10kb，就将它打包至images目录，否在直接打包在bundle.js（以base64的形式）。

**样式打包**

比如打包css文件，可在rules再建一个数组值：

```
rules: [{
		test: /\.(jpg|png|gif)$/,
		use: {
			loader: 'file-loader',
			options: {
				//placeholder
                name: '[name].[ext]'
			}
		}
}, {
		test: /\.css$/,
		use: {
			loader: ['style-loader', 'css-loader']
		}
}]
```

使用前需安装依赖（npm install style-loader css-loade -D）

css-loader会分析出所有css文件之间的关系，最终合并成一个css文件。

style-loader会把合成的css挂载到页面的\<head>部分。

如果想要引入scss，需要在配置中修改后缀名，同时安装sass-loader和node-sass依赖。

不过引入多个loader，它们的执行顺序是从下至上，从右至左，（这似乎与浏览解析css相似）

```
{
    test: /\.scss$/,
    use: {
        loader: ['style-loader', 'css-loader', 'sass-loader']
    }
}
```

 当我们去打包一个scss文件，首先会执行sass-loader对scss代码进行一个翻译，翻译成css后，给到csss-loader处理，最后交给style-loader处理，挂载到页面。

postcss-loader，Loader for [webpack](https://webpack.js.org/) to process CSS with [PostCSS](https://postcss.org/)。用法参见官网。

阅读documentation-->guides-->asset management部分和documentation-->loader-->css loader，sass-loader等。
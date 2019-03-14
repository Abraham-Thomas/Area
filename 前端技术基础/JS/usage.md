# usage

#### \<script>元素

HTML4.01为\<script>定义了6个属性：

async：可选。表示立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本，只对外部脚本文件有效。

charset：可选。表示通过src属性指定的代码的字符集。由于大多数浏览器会忽略它的值，所以很少有人用。

defer：可选。表示脚本可以延迟到文档完全被解析和显示之后执行。只对外部脚本文件有效。

language：已废弃。表示用于编写脚本的代码语言。

src：可选。表示包含要执行的脚本文件。

type：可选。可以看成是language的替代属性。表示编写代码使用的脚本语言的内容类型（也称为MIME类型）。虽然text/javasript 和 text/ecmascript 都已经不被推荐使用，但人们一直依赖使用的都还是text/javascript。实际上，服务器在传送Javascript文件时使用的MIME类型通常是application/x-javascript，但在type中设置这个值却可能导致脚本被忽略。text/javascript并不是必需的，就算如果没有制定这个属性，默认也会是它。
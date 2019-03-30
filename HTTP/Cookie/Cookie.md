# Cookie

网站为了辨别用户身份或Session跟踪而存储在用户浏览器端的数据。Cookie信息一般会通过HTTP请求发送到服务器端。

通过**Set-Cookie**设置，下次请求自动带上，键值对，可设置多个。

**属性**：

max-age和expires设置过期时间，Secure只在HTTPS时发送，HttpOnly无法通过document.cookie访问。

控制台，Application区可以查看Cookie。



**持久型Cookie与Session Cookie**

Session Cookie在关闭浏览器后，就会消失。

持久型Cookie关闭后依然有效，直到超过设置的过期时间（max-age）。
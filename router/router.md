
A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.
>一个 router 对象是一个 middleware 和 routes 独立的实例。我们可以认为它是一个 mini-应用，每个 Express 应用都有一个內建的应用路由。


A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
>router 的行为表现的像一个中间件，所以你可以

The top-level express object has a Router() method that creates a new router object.
>顶层 express 对象有一个 Router 方法可以创建一个新的 router 对象。 

Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:
>


```js
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function(req, res, next) {
  // ..
});

```



#### 1. 创建 router 对象

```js
var router = express.Router();
```

#### 2. router 基本方法

router.use
router.all
router.METHOD (get, post, put, delete)
router.param




const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();
const port = 5000;

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = "Index Sayfası";
});
router.get("/hakkimda", (ctx) => {
  ctx.status = 200;
  ctx.body = "Hakkımda Sayfası";
});
router.get("/iletisim", (ctx) => {
  ctx.status = 200;
  ctx.body = "İletisim Sayfası";
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port,()=>{
    console.log(`${port} aktif`);
});

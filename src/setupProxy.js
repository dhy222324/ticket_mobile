var proxy = require("http-proxy-middleware");
// var axios =require("axios");


module.exports = function(app) {
  //app代表 express
  // localhost:5000/login
  app.get("/login",(req,res)=>{
      res.json({name:"Msea",sex:1})
  })

  app.use(
    proxy("/apis", {
      //    我要代理的主机
      target: "https://api.juooo.com",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": ""
      }
    })
  );
  
  app.use(
      proxy("/m", {
        //    我要代理的主机
        target: "https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
          "^/m": ""
        }
      })
    );


//   app.get("/test",(req, res) => {
//         axios({
//             method:"POST",
//             url:"www.xxx.com",
//             headers:{
//                 Referer: "https://m.autohome.com.cn/ ",
//                 host:"www.qq.com",
//                 cookie:"xxxxxxxxxxxxaSDFSARGFSFG"
        
//             }
//         }).then((res)=>{
//             res.json(res);
//         })
//   });
};

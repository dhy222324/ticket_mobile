
const {override,addWebpackAlias,fixBabelImports }=require("customize-cra");
const path=require("path")

module.exports =  override(
    
    // 配置按需引入
    fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css'
     }),
     // 配置别名
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "src")    
    }),

)
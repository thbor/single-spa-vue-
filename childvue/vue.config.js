module.exports = {
  // publicPath: '//localhost:10000',
  configureWebpack:{
    output:{
      library:"singleVue",
      libraryTarget:"umd"
    },
    devServer:{port:10000}  //父應用端口號
  }
}

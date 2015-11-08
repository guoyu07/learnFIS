//配置规则
//(1)格式
//fis.match('资源路径,可正则',{
	//规则
//});
//(2)如果对匹配资源的规则进行了重复定义，则后者覆盖前者
//(3)我们也可以通过fis.media('product').match('*',{})
//在不同的生产环境下，对文件进行不同的配置,默认是dev
//(4)通过fis3 inspect可以获取所有文件上面的定义规则


fis.match('::packager', {
  spriter: fis.plugin('csssprites')
  //启用fis-spriter-cssprites插件，用于图片合并
  //因为此插件并没有像js／css／png优化插件那样是内置的，所以需要优化
});

// fis.match('*', {
//   useHash: false
// });

fis.match('*.js', {
	useHash:true,
	//添加md5值，用于刷新缓存，并同步修改相关文件的引用路径
	optimizer: fis.plugin('uglify-js')
	//资源压缩优化
});

fis.match('*.css', {
	useHash:true,
	useSprite: true,
	//对css里面引用的文件进行图片合并
	optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
	useHash:true,
	optimizer: fis.plugin('png-compressor')
});

//发布项目时，将png文件、js文件、css文件，移动到指定目录
//同时将引用以下类型资源的文件中的相对路径改为对应的绝对路径
fis.match('*.{png,js,css}',{
	release: '/static/$0'
	//‘／’指的是项目的根目录，而不是电脑磁盘的根目录
	//这种差异，造成了本地调试的困难性，提示404错误
	//所以就有了后续FIS里面内置Web Server的功能
});
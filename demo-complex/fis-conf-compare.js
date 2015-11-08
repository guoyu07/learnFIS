/*
*此页面的文件配置方式为将多个css文件、多个js文件打包成
*一个css文件，一个JS文件
*然后所有页面共用同一个JS文件，同一个CSS文件
*/
fis.match('*', {
	useHash: false
});

fis.match('::packager', {
	postpackager: fis.plugin('loader');
});


fis.match('*.less', {
	//先通过插件将less进行编译，然后将格式后缀修改为css
	parser:fis.plugin('less'),
	rExt:'css'
});
/*
*这种写法会导致由less编译过来的css文件将无法合并
＊而且在html里面link中原有less的href标签将无法自动替换
fis.match('*.css',{
	packTo:'/static/aio.css'
});
正确的写法如下:
*/

fis.match('*.{css,less}',{
	packTo:'/static/aio.css'
});

fis.match('*.js',{
	packTo:'/static/aio.js'
});

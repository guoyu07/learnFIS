/*
*此页面的文件配置方式为以页面为单位，将一个页面内的多个CSS文件，多个JS文件进行打包
*/
fis.match('*', {
	useHash: false
});

fis.match('::packager', {
	postpackager: fis.plugin('loader',{
		allInOne:true//重点
	})
});


fis.match('*.less', {
	//先通过插件将less进行编译，然后将格式后缀修改为css
	parser:fis.plugin('less'),
	rExt:'css'
});
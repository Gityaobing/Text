require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

var _util = require('util')
$(function(){
	var type = _util.getParamsFormUrl('type') || 'default'
	if (type == 'payment') {
		var orderNo = _util.getParamsFormUrl('payment') || ''
		var $btn = $('order-detail')
		var url = $btn.attr('href')+orderNo
		$btn.attr('href',url)
	}
	$('.'+type).show()
})
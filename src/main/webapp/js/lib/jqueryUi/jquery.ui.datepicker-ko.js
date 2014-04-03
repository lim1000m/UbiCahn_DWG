﻿/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
jQuery(function($){
	$.datepicker.regional['ko'] = {
		closeText: '?リ린',
		prevText: '?댁쟾??,
		nextText: '?ㅼ쓬??,
		currentText: '?ㅻ뒛',
		monthNames: ['1??,'2??,'3??,'4??,'5??,'6??,
		'7??,'8??,'9??,'10??,'11??,'12??],
		monthNamesShort: ['1??,'2??,'3??,'4??,'5??,'6??,
		'7??,'8??,'9??,'10??,'11??,'12??],
		dayNames: ['?쇱슂??,'?붿슂??,'?붿슂??,'?섏슂??,'紐⑹슂??,'湲덉슂??,'?좎슂??],
		dayNamesShort: ['??,'??,'??,'??,'紐?,'湲?,'??],
		dayNamesMin: ['??,'??,'??,'??,'紐?,'湲?,'??],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '??};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});

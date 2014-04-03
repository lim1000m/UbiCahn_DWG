﻿;(function($){
/**
 * jqGrid Hebrew Translation
 * Shuki Shukrun shukrun.shuki@gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "?屢?? {0} - {1} ?瘻?? {2}",
		emptyrecords: "??? 淚漏???瘻 ??屢??",
		loadtext: "??鬧?...",
		pgtext : "?龍 {0} ?瘻?? {1}"
	},
	search : {
		caption: "??壘漏...",
		Find: "?壘漏",
		Reset: "?瘻??",
		odata: [{ oper:'eq', text:"漏???"},{ oper:'ne', text:"?? 漏???"},{ oper:'lt', text:"樓??"},{ oper:'le', text:"樓?? ?? 漏???"},{ oper:'gt', text:"????"},{ oper:'ge', text:"???? ?? 漏???"},{ oper:'bw', text:"?瘻??? ?"},{ oper:'bn', text:"?? ?瘻??? ?"},{ oper:'in', text:"??屢? ?"},{ oper:'ni', text:"?? ??屢? ?"},{ oper:'ew', text:"?遼瘻??? ?"},{ oper:'en', text:"?? ?遼瘻??? ?"},{ oper:'cn', text:"????"},{ oper:'nc', text:"?? ????"}],
		groupOps: [	{ op: "AND", text: "???" },	{ op: "OR",  text: "??? ?" }	]
	},
	edit : {
		addCaption: "??遼龍 淚漏???",
		editCaption: "鬧淚?? 淚漏???",
		bSubmit: "漏??",
		bCancel: "???",
		bClose: "遼??淚",
		saveData: "?瘻???? ?漏瘻??! ?漏??淚?",
		bYes : "??",
		bNo : "??",
		bExit : "???",
		msg: {
			required:"漏?? ????",
			number:"???, ???遼 ?遼壘淚 瘻樓??",
			minValue:"鬧淚? 屢淚?? ????瘻 ???? ?? 漏??? ? ",
			maxValue:"鬧淚? 屢淚?? ????瘻 樓?? ?? 漏??? ? ",
			email: "??? ?? ?瘻??瘻 ????? 瘻樓???",
			integer: "???, ???遼 ?遼壘淚 漏??",
			date: "???, ???遼 瘻?淚?? 瘻樓??",
			url: "??瘻??瘻 ???? 瘻樓???. ?淚?漏? 瘻????瘻 ('http://' ?? 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
		caption: "?屢? 淚漏???",
		bClose: "遼??淚"
	},
	del : {
		caption: "??樓",
		msg: "??? ????樓 ?瘻 ?淚漏???/?瘻 ??遼????瘻?",
		bSubmit: "??樓",
		bCancel: "???"
	},
	nav : {
		edittext: "",
		edittitle: "鬧淚?? 漏?淚? ?遼???瘻",
		addtext:"",
		addtitle: "??遼龍 漏?淚? ??漏?",
		deltext: "",
		deltitle: "??樓 漏?淚? ?遼???瘻",
		searchtext: "",
		searchtitle: "?壘漏 淚漏???瘻",
		refreshtext: "",
		refreshtitle: "?鬧? ?淚?? ???漏",
		alertcap: "???淚?",
		alerttext: "???, ??淚 漏?淚?",
		viewtext: "",
		viewtitle: "?屢? 漏?淚? ?遼???瘻"
	},
	col : {
		caption: "?屢?/?遼瘻淚 鬧????瘻",
		bSubmit: "漏??",
		bCancel: "???"
	},
	errors : {
		errcap : "漏????",
		nourl : "?? ????淚? ?瘻??瘻 url",
		norecords: "??? 淚漏???瘻 ?鬧??",
		model : "??淚? 漏? colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"?", "?", "?", "?", "?", "?", "漏",
				"淚?漏??", "漏??", "漏??漏?", "淚??鬧?", "???漏?", "漏?漏?", "漏?瘻"
			],
			monthNames: [
				"???", "壘?淚", "?淚婁", "?壘淚", "???", "???", "???", "???", "遼壘?", "??樓", "???", "?屢?",
				"????淚", "壘?淚??淚", "?淚婁", "?壘淚??", "???", "????", "????", "????遼?", "遼壘???淚", "??樓???淚", "?????淚", "?屢??淚"
			],
			AmPm : ["?壘?? ?屢?淚??","??淚 ?屢?淚??","?壘?? ?屢?淚??","??淚 ?屢?淚??"],
			S: function (j) {return j < 11 || j > 13 ? ['', '', '', ''][Math.min((j - 1) % 10, 3)] : ''},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "n/j/Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "g:i A",
				LongTime: "g:i:s A",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "F, Y"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);

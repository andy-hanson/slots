"use strict";
define(["msl/private/boot","exports","msl/at/at","msl/compare","msl/math/methods","msl/math/Number"],(_boot,exports,_64_0,compare_1,methods_2,Number_3)=>{
	_ms.getModule(_boot);
	const _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),empty_63=_ms.get(_$0,"empty?"),all_63=_ms.get(_$0,"all?"),_$1=_ms.getModule(compare_1),_61_63=_ms.get(_$1,"=?"),_$2=_ms.getModule(methods_2),_42=_ms.get(_$2,"*"),_$3=_ms.getModule(Number_3),int_47=_ms.get(_$3,"int/");
	const all_45same_63=exports["all-same?"]=function all_45same_63(_,fun){
		_ms.checkContains(_64,_,"_");
		_ms.checkContains(Function,fun,"fun");
		return (empty_63(_)||(()=>{
			const fst=fun(_ms.sub(_,0));
			return all_63(_,em=>{
				return _61_63(fst,fun(em))
			})
		})())
	};
	const round_45down_45to_45nearest=exports["round-down-to-nearest"]=function round_45down_45to_45nearest(a,b){
		return _42(b,int_47(a,b))
	};
	const name=exports.name=`util`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC91dGlsLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FBQSx5Q0FBWSx1QkFBQSxFQUFJLElBQ1k7b0JBRGQ7b0JBQU07U0FDbkIsQ0FBRyxTQUFBLElBQ08sS0FBQTtHQUFULFVBQU0sWUFBSSxFQUFFO1VBQ1osT0FBSyxFQUFHLElBQ0U7V0FBVCxPQUFHLElBQUssSUFBSTtHQUFBO0VBQUE7Q0FBQTtDQUVmLG1FQUF3QixxQ0FBQSxFQUFFLEVBQ0M7U0FBMUIsSUFBRSxFQUFHLE9BQUssRUFBRTtDQUFBO0NBUGIsd0JBQUEiLCJmaWxlIjoiLi91dGlsLmpzIn0=
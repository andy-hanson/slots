"use strict";
define(["msl/private/boot","exports","msl/math/methods"],(_boot,exports,methods_0)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(methods_0),_43=_ms.get(_$0,"+");
	const sounds=(()=>{
		const built={};
		const win=built.win=new (Audio)(`sound/win.ogg`);
		const lose=built.lose=new (Audio)(`sound/lose.ogg`);
		return built
	})();
	const Scorer=exports.default=class Scorer{
		constructor(){
			_ms.newMutableProperty(this,"score",0);
			this["show!"]()
		}
		"show!"(){
			const _this=this;
			const em=document.getElementById(`score`);
			em.textContent=_this.score
		}
		"on-win!"(){
			const _this=this;
			_this.score=_43(1,_this.score);
			_this["show!"]();
			sounds.win.play()
		}
		"on-lose!"(){
			const _this=this;
			_this.score=0;
			_this["show!"]();
			sounds.lose.play()
		}
	};
	const name=exports.name=`Scorer`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvU2NvcmVyLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FHQSxhQUNRLEtBQUE7O0VBQVAsb0JBQUssS0FBSSxPQUFPO0VBQ2hCLHNCQUFNLEtBQUksT0FBTzs7O0NBRWxCLDZCQUNhO0VBQ0YsYUFBQTswQkFBVCxhQUFXO0dBQ1g7O1dBR1M7U0FVVDtHQVZBLFNBQUssd0JBQXlCO0dBQzlCLGVBU0E7O2FBTlc7U0FNWDtHQUFBLFlBTlUsSUFBRSxFQU1aO0dBQUE7R0FKQTs7Y0FHWTtTQUNaO0dBQUEsWUFEVTtHQUNWO0dBQ0E7OztDQXhCRix3QkFBQSIsImZpbGUiOiIuL1Njb3Jlci5qcyJ9
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9TY29yZXIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztDQUdBLGFBQ1EsS0FBQTs7RUFBUCxvQkFBSyxLQUFJLE9BQU87RUFDaEIsc0JBQU0sS0FBSSxPQUFPOzs7Q0FFbEIsNkJBQ2E7RUFDRixhQUFBOzBCQUFULGFBQVc7R0FDWDs7V0FHUztTQVVUO0dBVkEsU0FBSyx3QkFBeUI7R0FDOUIsZUFTQTs7YUFOVztTQU1YO0dBQUEsWUFOVSxJQUFFLEVBTVo7R0FBQTtHQUpBOztjQUdZO1NBQ1o7R0FBQSxZQURVO0dBQ1Y7R0FDQTs7O0NBeEJGLHdCQUFBIiwiZmlsZSI6Ii4vU2NvcmVyLmpzIn0=
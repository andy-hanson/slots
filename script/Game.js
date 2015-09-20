"use strict";
define(["msl/private/boot","exports","./Scorer","./Slot","./util","msl/compare","msl/math/methods","msl/at/Range"],(_boot,exports,Scorer_0,Slot_1,util_2,compare_3,methods_4,Range_5)=>{
	_ms.getModule(_boot);
	const Scorer=_ms.getDefaultExport(Scorer_0),Slot=_ms.getDefaultExport(Slot_1),_$0=_ms.getModule(util_2),all_45same_63=_ms.get(_$0,"all-same?"),_$1=_ms.getModule(compare_3),_61_63=_ms.get(_$1,"=?"),_60_63=_ms.get(_$1,"<?"),_$2=_ms.getModule(methods_4),_47=_ms.get(_$2,"/"),_43=_ms.get(_$2,"+"),_45=_ms.get(_$2,"-"),Range=_ms.getDefaultExport(Range_5);
	const sounds=(()=>{
		const built={};
		const spin=built.spin=new (Audio)(`sound/spin.ogg`);
		const start=built.start=new (Audio)(`sound/start.ogg`);
		return built
	})();
	const n_45slots=3;
	const Game=exports.default=class Game{
		constructor(canvas){
			_ms.newProperty(this,"canvas",canvas);
			_ms.newProperty(this,"context",canvas.getContext(`2d`));
			_ms.newProperty(this,"scorer",new (Scorer)());
			this["reset-slots!"]();
			this.state=`waiting`;
			canvas.addEventListener(`click`,()=>{
				this["stop-next-slot!"]()
			})
		}
		get width(){
			const _this=this;
			return _this.canvas.width
		}
		get height(){
			const _this=this;
			return _this.canvas.height
		}
		"run!"(){
			const _this=this;
			_this["step!"]();
			_this["draw!"]();
			requestAnimationFrame(()=>{
				_this["run!"]()
			})
		}
		"step!"(){
			const _this=this;
			for(let _ of _this.slots){
				_["step!"]()
			}
		}
		"draw!"(){
			const _this=this;
			const c=_this.context;
			c.clearRect(0,0,_this.width,_this.height);
			for(let _ of _this.slots){
				_["draw!"](c);
				if(_61_63(_this.state,`waiting`)){
					c.textAlign=`center`;
					c.textBaseline=`middle`;
					c.font=`64px impact`;
					c.fillText(`Click me!`,_47(_this.width,2),_47(_this.height,2))
				}
			}
		}
		"stop-next-slot!"(){
			const _this=this;
			switch(_this.state){
				case `waiting`:{
					sounds.start.play();
					_this["reset-slots!"]();
					break
				}
				case `playing`:{
					sounds.spin.play();
					if(_60_63(_this["next-slot"],n_45slots)){
						_ms.sub(_this.slots,_this["next-slot"])["stop!"]();
						_this["next-slot"]=_43(1,_this["next-slot"])
					};
					break
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		}
		"on-slot-stopped!"(slot){
			const _this=this;
			const slots_45so_45far=_this.slots.slice(0,_43(1,slot.slotIndex));
			const get_45idx=function get_45idx(slot){
				return slot["current-slot"]
			};
			if(! all_45same_63(slots_45so_45far,get_45idx)){
				_this.scorer["on-lose!"]();
				_this.state=`waiting`
			} else if(_61_63(slot.slotIndex,_45(n_45slots,1))){
				_this.scorer["on-win!"]();
				_this.state=`waiting`
			} else {}
		}
		"reset-slots!"(){
			const _this=this;
			_this.state=`playing`;
			_this["next-slot"]=0;
			_this.slots=(()=>{
				const built=[];
				for(let i of new (Range)(0,n_45slots)){
					_ms.add(built,new (Slot)(_this,i))
				};
				return built
			})()
		}
	};
	const name=exports.name=`Game`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9HYW1lLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FNQSxhQUNRLEtBQUE7O0VBQVAsc0JBQU0sS0FBSSxPQUFPO0VBQ2pCLHdCQUFPLEtBQUksT0FBTzs7O0NBRW5CLGdCQUFVO0NBRVYsMkJBQ1c7RUFBQyxZQUFBLE9BQ087O21CQUFqQixlQUFXLGtCQUFtQjttQkFDOUIsY0FBVSxLQUFJO0dBQ2Q7R0FDQSxXQUFXO0dBRVgsd0JBQXlCLFFBQ1MsSUFBQTtJQUFqQzs7O0VBRUYsV0FDVztTQXVEQTtVQUFBOztFQXREWCxZQUNZO1NBcUREO1VBQUE7O1VBbERGO1NBa0RFO0dBQUE7R0FBQTtHQWhEVixzQkFDd0IsSUFBQTtJQStDZDs7O1dBNUNEO1NBNENDO0dBNUNMLFFBQUEsS0E0Q0ssWUEzQ0M7SUFBVjs7O1dBR1E7U0F3Q0M7R0F4Q1YsUUF3Q1U7R0F2Q1YsWUFBWSxFQUFFLEVBdUNKO0dBdENMLFFBQUEsS0FzQ0ssWUFyQ0M7SUFBVixXQUFRO0lBQ1IsR0EwQkEsT0FVUyxZQXBDTSxXQUNRO0tBQXRCLFlBQWdCO0tBQ2hCLGVBQW1CO0tBQ25CLE9BQVc7S0FDWCxXQUFZLFlBQXlCLElBZ0M3QixZQWhDeUIsR0FBSSxJQWdDN0IsYUFoQ3VDO0lBQUE7R0FBQTtFQUFBO3FCQUc5QjtTQTZCVDtHQTdCRixPQTZCRTtTQTVCUixVQUNRO0tBQVI7S0EyQlE7OztTQXpCUixVQUNRO0tBQVI7S0FDQSxHQUFJLE9BdUJJLG1CQXZCVSxXQUNPO2NBc0JqQjtNQUFBLG1CQWpCcUIsSUFKWixFQXFCVDs7Ozs7OztxQkFuQlUsS0FDSTtTQWtCZDtHQWpCVix1QkFpQlUsa0JBakJrQixFQUFHLElBQUUsRUFBRTtHQUNuQyxnQkFBVyxtQkFBQSxLQUNJO1dBQWQ7O0dBRUksR0FBSixFQUFJLGNBQVUsaUJBQWEsV0FDTztJQVl6QjtJQUFBLFlBWEc7VUFDWixHQUFBLE9BQUcsZUFBZ0IsSUFBRSxVQUFRLElBQ0U7SUFTdEI7SUFBQSxZQVJHO1VBRVI7RUFBQTtrQkFHVztTQUdOO0dBQUEsWUFIQztHQUdELG1CQUZJO0dBRUosWUFESzs7WUFBQSxLQUFLLEtBQUksT0FBTSxFQUFFLFdBQ087bUJBQXRDLEtBQUksTUFBSyxNQUFLO0lBQUE7Ozs7O0NBOUVqQix3QkFBQSIsImZpbGUiOiIuL0dhbWUuanMifQ==
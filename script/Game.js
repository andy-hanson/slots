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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR2FtZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBTUEsYUFDUSxLQUFBOztFQUFQLHNCQUFNLEtBQUksT0FBTztFQUNqQix3QkFBTyxLQUFJLE9BQU87OztDQUVuQixnQkFBVTtDQUVWLDJCQUNXO0VBQUMsWUFBQSxPQUNPOzttQkFBakIsZUFBVyxrQkFBbUI7bUJBQzlCLGNBQVUsS0FBSTtHQUNkO0dBQ0EsV0FBVztHQUVYLHdCQUF5QixRQUNTLElBQUE7SUFBakM7OztFQUVGLFdBQ1c7U0F1REE7VUFBQTs7RUF0RFgsWUFDWTtTQXFERDtVQUFBOztVQWxERjtTQWtERTtHQUFBO0dBQUE7R0FoRFYsc0JBQ3dCLElBQUE7SUErQ2Q7OztXQTVDRDtTQTRDQztHQTVDTCxRQUFBLEtBNENLLFlBM0NDO0lBQVY7OztXQUdRO1NBd0NDO0dBeENWLFFBd0NVO0dBdkNWLFlBQVksRUFBRSxFQXVDSjtHQXRDTCxRQUFBLEtBc0NLLFlBckNDO0lBQVYsV0FBUTtJQUNSLEdBMEJBLE9BVVMsWUFwQ00sV0FDUTtLQUF0QixZQUFnQjtLQUNoQixlQUFtQjtLQUNuQixPQUFXO0tBQ1gsV0FBWSxZQUF5QixJQWdDN0IsWUFoQ3lCLEdBQUksSUFnQzdCLGFBaEN1QztJQUFBO0dBQUE7RUFBQTtxQkFHOUI7U0E2QlQ7R0E3QkYsT0E2QkU7U0E1QlIsVUFDUTtLQUFSO0tBMkJROzs7U0F6QlIsVUFDUTtLQUFSO0tBQ0EsR0FBSSxPQXVCSSxtQkF2QlUsV0FDTztjQXNCakI7TUFBQSxtQkFqQnFCLElBSlosRUFxQlQ7Ozs7Ozs7cUJBbkJVLEtBQ0k7U0FrQmQ7R0FqQlYsdUJBaUJVLGtCQWpCa0IsRUFBRyxJQUFFLEVBQUU7R0FDbkMsZ0JBQVcsbUJBQUEsS0FDSTtXQUFkOztHQUVJLEdBQUosRUFBSSxjQUFVLGlCQUFhLFdBQ087SUFZekI7SUFBQSxZQVhHO1VBQ1osR0FBQSxPQUFHLGVBQWdCLElBQUUsVUFBUSxJQUNFO0lBU3RCO0lBQUEsWUFSRztVQUVSO0VBQUE7a0JBR1c7U0FHTjtHQUFBLFlBSEM7R0FHRCxtQkFGSTtHQUVKLFlBREs7O1lBQUEsS0FBSyxLQUFJLE9BQU0sRUFBRSxXQUNPO21CQUF0QyxLQUFJLE1BQUssTUFBSztJQUFBOzs7OztDQTlFakIsd0JBQUEiLCJmaWxlIjoiLi9HYW1lLmpzIn0=
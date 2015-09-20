"use strict";
define(["msl/private/boot","exports","msl/math/Number","./util","msl/math/methods","msl/at/Range","msl/compare"],(_boot,exports,Number_0,util_1,methods_2,Range_3,compare_4)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(Number_0),modulo=_ms.get(_$0,"modulo"),_$1=_ms.getModule(util_1),round_45down_45to_45nearest=_ms.get(_$1,"round-down-to-nearest"),_$2=_ms.getModule(methods_2),_42=_ms.get(_$2,"*"),_43=_ms.get(_$2,"+"),_47=_ms.get(_$2,"/"),_45=_ms.get(_$2,"-"),Range=_ms.getDefaultExport(Range_3),_$3=_ms.getModule(compare_4),_60_63=_ms.get(_$3,"<?");
	const n_45images=3;
	const slot_45width=100;
	const image_45height=100;
	const cycle_45height=_42(n_45images,image_45height);
	const ddy=0.05;
	const images=(()=>{
		const built=[];
		for(let i of new (Range)(0,n_45images)){
			_ms.add(built,(_=>{
				_.src=`image/${i}.png`;
				return _
			})(new (Image)()))
		};
		return built
	})();
	const Slot=exports.default=class Slot{
		constructor(game,slotIndex){
			_ms.newProperty(this,"game",game);
			_ms.newProperty(this,"slotIndex",slotIndex);
			_ms.newMutableProperty(this,"state",`running`);
			_ms.newMutableProperty(this,"dy",_43(1,_43(slotIndex,this.game.scorer.score)));
			this.y=_42(Math.random(),cycle_45height);
			this.x=_42(slotIndex,slot_45width)
		}
		get "current-slot"(){
			const _this=this;
			return Math.floor(_47(_this.y,image_45height))
		}
		"step!"(){
			const _this=this;
			const move_33=function move_33(){
				_this.y=modulo(_43(_this.y,_this.dy),cycle_45height)
			};
			switch(_this.state){
				case `stopped`:{
					break
				}
				case `stopping`:{
					_this.dy=_45(_this.dy,ddy);
					if(_60_63(_this.dy,0)){
						_this["-fully-stop!"]()
					};
					move_33();
					break
				}
				case `running`:{
					move_33();
					break
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		}
		"draw!"(c){
			const _this=this;
			let i=0;
			for(let y of new (Range)(_45(_this.y,cycle_45height),_this.game.height,image_45height)){
				const image=_ms.sub(images,i);
				i=modulo(_43(i,1),n_45images);
				c.drawImage(image,_this.x,y)
			}
		}
		"stop!"(){
			const _this=this;
			_this.state=`stopping`
		}
		"-fully-stop!"(){
			const _this=this;
			_this.y=round_45down_45to_45nearest(_this.y,image_45height);
			_this.dy=0;
			_this.state=`stopped`;
			_this.game["on-slot-stopped!"](_this)
		}
	};
	const name=exports.name=`Slot`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9TbG90Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FLQSxpQkFBVztDQUNYLG1CQUFhO0NBQ2IscUJBQWU7Q0FDZixxQkFZUSxJQVpTLFdBQVM7Q0FDMUIsVUFBTTtDQUVOLGFBQWM7O1VBQUEsS0FBSyxLQStCSCxPQS9CYSxFQUFFLFlBQ1E7aUJBQWpDLElBQ1M7SUFBYixNQUFVLFNBQU87O01BRGIsS0FBSTtFQUFBOzs7Q0FHViwyQkFDVztFQUFDLFlBQUEsS0FBTSxVQUNVOzs7MEJBQTFCLGFBQVk7MEJBQ1osVUEwQmMsSUExQkosRUEwQkksSUExQkMsVUFBVTtHQUN6QixPQUNNLElBR04sY0FKc0I7R0FDdEIsT0FBTSxJQUFFLFVBQVU7RUFBQTtFQUVuQixvQkFDa0I7U0ErQk07VUEvQnZCLFdBQVksSUErQlcsUUEvQk47RUFBQTtXQUdSO1NBNEJjO0dBNUJ2QixjQUNVLGtCQUFBO0lBMkJhLFFBM0JoQixPQWlCTyxJQVVTLGtCQTNCRTtHQUFBO0dBRWpCLE9BeUJlO1NBeEJyQixVQUNROzs7U0FDUixXQUNTO0tBcUJZLFNBWkYsSUFZRSxTQXJCUjtLQUNiLEdBQUksT0FvQmlCLFNBcEJWLEdBQ0M7TUFtQlM7O0tBbEJyQjs7O1NBQ0EsVUFDUTtLQUFSOzs7Ozs7VUFFTyxFQUNDO1NBYWE7R0FidkIsTUFBTTtHQUNELFFBQUEsS0FBSyxLQUFJLE9BQU8sSUFZRSxRQVpHLGdCQVlILGtCQVo4QixnQkFDWTtJQUFoRSxvQkFBUSxPQUFPO01BQ1YsT0FBUSxJQUFFLEVBQUUsR0FBRztJQUNwQixZQUFZLE1BU1UsUUFURDtHQUFBO0VBQUE7V0FHYjtTQU1jO0dBQUEsWUFOWjs7a0JBR0s7U0FHTztHQUFBLFFBSGpCLDRCQUdpQixRQUhRO0dBR1IsU0FGaEI7R0FFZ0IsWUFEWjtHQUNZO0VBQUE7Q0FBQTtDQXREekIsd0JBQUEiLCJmaWxlIjoiLi9TbG90LmpzIn0=
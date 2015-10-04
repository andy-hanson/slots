"use strict";
define(["msl/private/boot","exports","./util","msl/math/methods","msl/at/Range","msl/math/Number","msl/compare"],(_boot,exports,util_0,methods_1,Range_2,Number_3,compare_4)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(util_0),round_45down_45to_45nearest=_ms.get(_$0,"round-down-to-nearest"),_$1=_ms.getModule(methods_1),_42=_ms.get(_$1,"*"),_43=_ms.get(_$1,"+"),_47=_ms.get(_$1,"/"),_45=_ms.get(_$1,"-"),Range=_ms.getDefaultExport(Range_2),_$2=_ms.getModule(Number_3),modulo=_ms.get(_$2,"modulo"),_$3=_ms.getModule(compare_4),_60_63=_ms.get(_$3,"<?");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvU2xvdC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUEsaUJBQVc7Q0FDWCxtQkFBYTtDQUNiLHFCQUFlO0NBQ2YscUJBWVEsSUFaUyxXQUFTO0NBQzFCLFVBQU07Q0FFTixhQUFjOztVQUFBLEtBQUssS0ErQkgsT0EvQmEsRUFBRSxZQUNRO2lCQUFqQyxJQUNTO0lBQWIsTUFBVSxTQUFPOztNQURiLEtBQUk7RUFBQTs7O0NBR1YsMkJBQ1c7RUFBQyxZQUFBLEtBQU0sVUFDVTs7OzBCQUExQixhQUFZOzBCQUNaLFVBMEJjLElBMUJKLEVBMEJJLElBMUJDLFVBQVU7R0FDekIsT0FDTSxJQUdOLGNBSnNCO0dBQ3RCLE9BQU0sSUFBRSxVQUFVO0VBQUE7RUFFbkIsb0JBQ2tCO1NBK0JNO1VBL0J2QixXQUFZLElBK0JXLFFBL0JOO0VBQUE7V0FHUjtTQTRCYztHQTVCdkIsY0FDVSxrQkFBQTtJQTJCYSxRQVZqQixPQUFRLElBVVMsa0JBM0JFO0dBQUE7R0FFakIsT0F5QmU7U0F4QnJCLFVBQ1E7OztTQUNSLFdBQ1M7S0FxQlksU0FaRixJQVlFLFNBckJSO0tBQ2IsR0FBSSxPQW9CaUIsU0FwQlYsR0FDQztNQW1CUzs7S0FsQnJCOzs7U0FDQSxVQUNRO0tBQVI7Ozs7OztVQUVPLEVBQ0M7U0FhYTtHQWJ2QixNQUFNO0dBQ0QsUUFBQSxLQUFLLEtBQUksT0FBTyxJQVlFLFFBWkcsZ0JBWUgsa0JBWjhCLGdCQUNZO0lBQWhFLG9CQUFRLE9BQU87TUFDVixPQUFRLElBQUUsRUFBRSxHQUFHO0lBQ3BCLFlBQVksTUFTVSxRQVREO0dBQUE7RUFBQTtXQUdiO1NBTWM7R0FBQSxZQU5aOztrQkFHSztTQUdPO0dBQUEsUUFIakIsNEJBR2lCLFFBSFE7R0FHUixTQUZoQjtHQUVnQixZQURaO0dBQ1k7RUFBQTtDQUFBO0NBckR6Qix3QkFBQSIsImZpbGUiOiIuL1Nsb3QuanMifQ==
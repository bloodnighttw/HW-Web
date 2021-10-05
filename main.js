//import { tbt } from "./TBT";

'use strict';


const e = React.createElement;
let show = false;


class LikeButton extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = { click: 0 ,open:false};
	this.click=this.click.bind(this);
  }

  click(){
	const a = new Audio('./click.wav')
	a.play();
	if(!show){
		show = true;	
	}
	
	this.setState({click:this.state.click+1,open:true})
	setTimeout(()=>{
	this.setState({click:this.state.click,open:false})
	}, 100);
  }

  render() {	  

	if(this.state.open)
	  return (
		<div>
			<img class="photo center" src="https://popcat.click/img/op.353767c3.png"  onClick={this.click}></img>
			<h1 class="center">{this.state.click}</h1>
			<tbt/>
		</div>
	  )
	else
		return (
			<div>
			<img className="photo center" src="https://popcat.click/img/p.1e9d00be.png"  onClick={this.click}></img>
			<h1 className="center">{this.state.click}</h1>
			<tbt/>
			</div>
		)
  }


}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer)




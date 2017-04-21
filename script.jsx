/**** del 1 uppgift 5****/


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input1: ''
		}
		this.handleKeyUp1 = this.handleKeyUp1.bind(this);
		
	}
	handleKeyUp1(event) {
		console.log('handleKeyUp1');
		this.setState({
			input1: event.target.value
		})
	}
	
	render() {
		return (
		  <div className="myinput">
			<Input handleKeyUp={this.handleKeyUp1} result={this.state.input1} />
			
		  </div>
		);
	}
}

function Input(props) {
	return <div>
        <h2>Vad heter du?</h2>
    	<input type="text" onKeyUp={props.handleKeyUp} /> <br/>
        <p className="textsize">Ditt namn är: <span>{props.result}</span></p>
    </div>;
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app-root')
)

/**** del 2 uppgift 5 ***/

class Sum extends React.Component {
	render() {
        let a = Number(numberOne.value) + Number(numberTwo.value)
		return (
		  <div><span className="textsize">= {a}</span></div>
		);
	}
}


let firstNumber = document.getElementById("numberOne");
let secondNumber = document.getElementById("numberTwo");



function addition(event){
    ReactDOM.render(
    <Sum summa = {numberOne + numberTwo} />,
    document.getElementById("summa")
    )
    summa.value = "";
}

firstNumber.addEventListener("keyup", addition);
secondNumber.addEventListener("keyup", addition);



/**** del 3 uppgift 5 ***/

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.btn1Value = this.btn1Value.bind(this);
    this.btn2Value = this.btn2Value.bind(this);
  }
  
  btn1Value(event){
    this.setState({value: this.state.value = "Jag förstår!"})
  }
    
  btn2Value(event){
    this.setState({value: this.state.value = "Jag förstår inte.."})
  }
    
    
  render() {
    return (
    
      <div>
        <span className="textsize">Förstår du?<br/></span>
        <button onClick={this.btn1Value}>Jag förstår!</button>
        <button onClick={this.btn2Value}>Jag förstår inte..</button><br />
        <span className="textsize">{this.state.value}</span>
      
      </div>
     
    )
  }
}
ReactDOM.render(
    <Btn></Btn>,
  document.getElementById('knappar')
)
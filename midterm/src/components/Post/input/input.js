import React from 'react';

 class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text:'',i:0};
      };
   
    handlechange =event=>{
        this.setState({
            text:event.target.value});}
  

    render(){
    return (<form onSubmit={this.handleSubmit}>
                  <input 
                  type="text" 
                  value={this.state.text}
                  onChange={this.handlechange}
                  placeholder="anything to say"
                  />
           </form>);
    }
}

export default Input;

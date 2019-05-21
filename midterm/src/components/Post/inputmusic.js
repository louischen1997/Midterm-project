import React from 'react';



 class Inputmusic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addurl:'',

           

    };
      };

      handlecancle = () => {
      this.props.getcancle()
      }
   
    handlechange =event=>{
        this.setState({
            addurl:event.target.value});


            console.log(this.state.addurl)}


    handleaddurl=()=>{
        if(this.state.addurl!==''){
            this.props.getfun({
             url:this.state.addurl
            });
    //    this.setState({
    //    music:[this.state.addurl,...this.state.music]
    //    })
         
    };
        this.setState({
         addurl:''
        });
    }
    ;

    render(){

        var classtype= String(String(window.location.href).split("/")[3])

    return (
       
         <div class="new"><input placeholder="ADD A NEW SONG URL IN YT(string is not allowed)" class="newinput"  value={this.state.addurl}  onChange={this.handlechange}
      >
      </input >IN {classtype} {" "}
        <button class="newbut" onClick={()=>this.handleaddurl()} >SEND</button><button class="newbut" onClick={() => this.handlecancle()} >CANCEL</button>
        </div>
     
                );
    }
}

export default Inputmusic;

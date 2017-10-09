import React from 'react'  

class RowItemDefaultpg extends React.Component {
 
   
  render() { 
      let txtpriority = null;
       
      if (this.props.priority  === "!" ) {
            txtpriority = <strong className="b dodgerbluecolor" >{this.props.priority}</strong>
        } else{
              if (this.props.priority  === "!!" ) {
            txtpriority = <strong className="b orangedcolor" >{this.props.priority}</strong>
              }else{ 
                   txtpriority = <strong className="b redcolor" >{this.props.priority}</strong>
              }
        } 
    return (  
     <div className="list-group-item row row-default-Item ">
        <div className="col-md-3 label-row c fsize12">
            <span className={this.props.datecolor}>{this.props.dateSVal} </span>
        </div>
        <div className="col-md-9 label-row" >
            <div className="row mleft5" >
                    <i title={this.props.icontitle} className={this.props.iconAct}></i>
                    <a href="TaskView.aspx" className="b" >{this.props.titleText} </a>
                   {txtpriority}
            </div>
            <div className="row mleft5" >
                <span>
                    <a href="#" className="fsize12 b">{this.props.toPerson} </a> 
                </span>
            </div> 
        </div>
    </div>
    );
  }
}

export default RowItemDefaultpg
import React, { Component } from 'react';
import './ContentList.css';
import Content from "../content/Content.js"

class ContentList extends Component {

  partialRender() {
  	var count = Math.ceil(this.props.contents.length/4)
  	let component = []
  	for(let i =0;i<count;i++) {
  		let data = this.props.contents.slice(i*4,i*4+4)

  		component.push(
  			<div className=" row">
  				{
  					data.map((c,index) => {
			      		return (
			      		  <div className="col-md-3" key={index}>
					      	<Content content={c} onClick={this.props.onClick}/>
					      </div>
			      		)
			      	})
  				}
  			</div>
  		)
  	}

  	return component
  }	
  render() {
  	

    return (
      <div className="contentList align-items-center justify-content-center">
	      {this.partialRender()}
      </div>
    );
  }
}

export default ContentList;
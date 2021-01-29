import React, { Component } from 'react';
 
class ContentsListItem extends React.Component {
    
    sendToParent = (id) => {
        this.props.parentFunction(this.props.id);
    }

    render() {
        return (
            <div className="itemListView" onClick={this.sendToParent}>
                <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            </div>
        );
    };
}

export default ContentsListItem;
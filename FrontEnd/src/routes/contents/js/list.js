import React from "react";
//import "../css/meeting.css"
import ContentsListItem from "../../../components/contents/js/listItem";
import ViewItem from "../../../components/contents/js/viewItem";

class contentsList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentDidMount() {
    console.log("aaa");
    console.log(this.state.selected);
  }
  
  showClicked = (id) => {
    this.setState((state) => {
      //console.log(id);
      //console.log(this.state);
      return {selected:id}
    });
  }
  
  render() {
    const { selected } = this.state;
    return (
      <div id="meeting_list">
        <div className="list_view">
          <ContentsListItem id={1} parentFunction={this.showClicked}/>
          <ContentsListItem id={2} parentFunction={this.showClicked}/>
          <ContentsListItem id={3} parentFunction={this.showClicked}/>
          <ContentsListItem id={4} parentFunction={this.showClicked}/>
          <ContentsListItem id={5} parentFunction={this.showClicked} />
          <ViewItem selectedId={selected}/>
        </div>
      </div>
    );
  }
}
export default contentsList;
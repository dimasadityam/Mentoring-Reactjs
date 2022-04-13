import React from "react";



class FormInput extends React.Component{
  constructor(props){
    super(props);
  }
  

  btnSubmit = () => {
    let temp = [...this.props.data];

    temp.push({
      no: this.props.data.length + 1 ,
      name: this.refs.refName.value,
      class: this.refs.refClass.value,
      time: this.refs.refTime.value,
      job: this.refs.refJob.value,
      note: this.refs.refNote.value,
      edit: false,
      filter: true
    })

    this.refs.refName.value=""
    this.refs.refClass.value= ""
    this.refs.refTime.value=""
    this.refs.refJob.value=""
    this.refs.refNote.value=""

    this.props.handleSubmit(temp)
    console.log(this.props.handleSubmit(temp), temp)

  }

  render(){
    return(
      <form>
        <div className="form-group">
          <h4>Data Form Input</h4>
          <h6 className="pt-3">Name</h6>
          <input type="text" ref="refName" className="form-control" placeholder="Input Name" />
          <h6 className="pt-4">Class</h6>
          <select className="form-control" ref="refClass" id="selectClass">
            <option value="">Choose Class</option>
            <option value="JC-Full Stack">JC-Full Stack</option>
            <option value="JC-Digital Marketing">JC-Digital Marketing</option>
            <option value="JC-UI/UX">JC-UI/UX</option>
          </select>
          <h6 className="pt-4">Time</h6>
          <select className="form-control" ref="refTime" id="selectTime">
            <option value="">Choose Time</option>
            <option value="After-hour">After Hour</option>
            <option value="Full-time">Full Time</option>
            <option value="Livestream">Livestream</option>
          </select>
          <h6 className="pt-3">Job</h6>
          <input type="text" ref="refJob" className="form-control" id="inputJob" placeholder="Input Job" />
          <h6 className="pt-3">Note</h6>
          <input type="text" ref="refNote" className="form-control" id="inputNote" placeholder="Input Note" />
            <button className="btn btn-primary w-100" type="button" onClick={this.btnSubmit}>Submit</button>
        </div>
      </form>
    )
  }
  
}

export default FormInput;

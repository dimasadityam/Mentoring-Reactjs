import React from "react";

class Table extends React.Component{
  constructor(props){
    super(props);
  }
  
  printData = () => {
      let temp = [...this.props.data]
      let index = 0
      return temp.map((value) => {
        if (value.edit){
        console.log("printData2")
        return <tr key={value.no}>
          <td>{index + 1}</td>
          <td>
            <input type="text" ref="refNameEdit" defaultValue={value.name}/></td>
          <td>
            <select className="form-control" ref="refClassEdit" id="selectClass" defaultValue={value.class}>
              <option value="">Choose Class</option>
              <option value="JC-Full Stack">JC-Full Stack</option>
              <option value="JC-Digital Marketing">JC-Digital Marketing</option>
              <option value="JC-UI/UX">JC-UI/UX</option>
            </select>
          </td>
          <td>
            <select className="form-control" ref="refTimeEdit" id="selectTime" defaultValue={value.time}>
              <option value="">Choose Time</option>
              <option value="After-hour">After Hour</option>
              <option value="Full-time">Full Time</option>
              <option value="Livestream">Livestream</option>
            </select>
          </td>
          <td>
            <input type="text" ref="refJobEdit" className="form-control" id="inputJob" defaultValue={value.job} />
          </td>
          <td>
            <input type="text" ref="refNoteEdit" className="form-control" id="inputNote" defaultValue={value.note} />
          </td>
          <td>
            <div className="btn-group" role="group">
              <button type="button" onClick={()=> this.handleSave(value.no)} className="btn btn-outline-primary">Save</button>
              <button type="button" onClick={()=> this.handleCancel(value.no)} className="btn btn-outline-danger">Cancel</button>
            </div>
          </td>
        </tr>
        } else if(value.filter) {
            index++
            console.log("printData1")
            return <tr key={value.no}>
              <td>{index}</td>
              <td>{value.name}</td>
              <td>{value.class}</td>
              <td>{value.time}</td>
              <td>{value.job}</td>
              <td>{value.note}</td>
              <td>
                <div className="btn-group" role="group">
                  <button type="button" onClick={()=> this.handleEdit(value.no)} className="btn btn-outline-warning">Edit</button>
                  <button type="button" onClick={()=> this.handleDelete(value.no)} className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
            }  
          })
        }

  handleSave=(no)=>{
    let dbNo = this.props.data.findIndex(val => val.no == no)
    let temp = [...this.props.data];
    
    temp[dbNo].name = this.refs.refNameEdit.value;
    temp[dbNo].class = this.refs.refClassEdit.value;
    temp[dbNo].time = this.refs.refTimeEdit.value;
    temp[dbNo].job = this.refs.refJobEdit.value;
    temp[dbNo].note = this.refs.refNoteEdit.value;
    temp[dbNo].edit = false

    this.props.handleSubmit(temp)
    console.log("no", no, "temp", temp, "temp[dbNo].name", temp[dbNo].name)
    // console.log(temp)
  }

  handleCancel=(no)=>{
    let dbNo = this.props.data.findIndex(val => val.no == no)
    let temp = [...this.props.data];
    temp[dbNo].edit = false
    console.log("temp=>", temp, "no=>", no)
    this.props.handleSubmit(temp);
  }

  handleDelete=(no)=>{
    let dbNo = this.props.data.findIndex(val => val.no == no)
    let temp = [...this.props.data];
    temp.splice(dbNo, 1)
    this.props.handleSubmit(temp);
  }

  handleEdit=(no)=>{
    let temp = [...this.props.data]
    let dbNo = temp.findIndex((val) => val.no == no);
    console.log(temp)
    temp[dbNo].edit = true
    console.log("temp[dbNo].edit=>",temp[dbNo].edit)
    this.props.handleSubmit(temp)
  }

  handleSearch = () =>{
    let temp = [...this.props.data]
    let filterName = this.refs.filterName.value.toLowerCase();
    let filterClass = this.refs.filterClass.value;
    console.log("filterClass",filterClass)
    temp.forEach((val,idx)=>{
      let checkName = (filterName == "" || val.name.toLowerCase().includes(filterName))
      let checkClass = (filterClass == "" || (val.class == filterClass))
      console.log(checkName, checkClass)
      // console.log(  temp[index].filter)
      if (checkName && checkClass){
        temp[idx].filter = true
        console.log("tes true")
      } else {
        temp[idx].filter = false
        console.log("tes false")
      }
    })
    this.props.handleSubmit(temp)
  }

  handleReset=()=>{
    this.refs.filterName.value=""
    this.refs.filterClass.value=""
    let temp = [...this.props.data]
    console.log("temp =>",temp)
    temp.forEach((val)=>{
      val.filter=true;
    })
      this.props.handleSubmit(temp)
  }

  render(){
    return(
      <>
      <fieldset className="pb-4">
        <legend>Filter</legend>
        <form className="d-flex">
          <h6 className="pe-3 pt-2">Name:</h6>
          <input type="text" ref="filterName" className="form-control" placeholder="Input Name"/>
          <h6 className="px-3 pt-2">Class:</h6>
          <select className="form-control" ref="filterClass" id="selectClass">
            <option value="">Choose Class</option>
            <option value="JC-Full Stack">JC-Full Stack</option>
            <option value="JC-Digital Marketing">JC-Digital Marketing</option>
            <option value="JC-UI/UX">JC-UI/UX</option>
          </select>
          <div class="btn-group ps-3" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" onClick={()=> this.handleSearch()}>Search</button>
            <button type="button" class="btn btn-outline-primary" onClick={()=> this.handleReset()}>Reset</button>
          </div>
        </form>
      </fieldset>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Time</th>
            <th scope="col">Job</th>
            <th scope="col">Notes</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.printData()}
        </tbody>
      </table>
      </>
    )
  }
}

export default Table;
import logo from './logo.svg'
import './App.css';
import FormInput from './Components/FormInput';
import Table from './Components/Table';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dbStudent: [
        {
          no: 1,
          name: "Abdi",
          class: "JC-Full Stack",
          time: "After-hour",
          job: "Product Manager",
          note: "Notes",
          edit: false,
          filter: true
        },
        {
          no: 2,
          name: "Edo",
          class: "JC-Full Stack",
          time: "After-hour",
          job: "Product Manager",
          note: "Notes",
          edit: false,
          filter: true
        }
      ]
    }
  }

  dbFilter = []

  handleSubmit = (newData) => {
    this.setState({ dbStudent: newData })
  }

  handleSubmitFilter = (newData) => {
    this.dbFilter.push(newData)
  }

  render() {
    return (
      <div className='container px-5 py-5' >
        <div className='row'>
          <div className='col-3'>
            <FormInput
              data={this.state.dbStudent}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <div className='col-9'>
            <Table
              data={this.state.dbStudent}
              dbFilter={this.dbFilter}
              handleSubmit={this.handleSubmit}
              handleSubmitFilter={this.handleSubmitFilter}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import FormView from './formview.jsx';

export default class Calculator extends React.Component{ 
  render(){
    return <div className="row">    
      <div className="col-md-6">
        <FormView />
      </div>
      <div className="col-md-6">
      </div>
    </div>
  }
}

ReactDOM.render(<Calculator />,document.getElementById('container'));
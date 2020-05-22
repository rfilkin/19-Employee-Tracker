import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class All_Employees extends Component {

    state = {
        employees: []
    };
    
    // When the component mounts, load the employees
    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getUsers()
        .then(res =>
            // this.setState({
            //     employees: [res["results"]]
            // })
            function(){
                console.log("testing");
               console.log(res); 
            }
            
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
                <div>
                    <h1>Employees List</h1>
                        {this.state.employees.map(employee => (
                        <Card
                            title={employee["name"]["title"]}
                            first={employee["name"]["first"]}
                            last={employee["name"]["last"]}
                            gender={employee["gender"]}
                        />
                        ))}
                </div>
            );
            
      }

}

export default All_Employees;
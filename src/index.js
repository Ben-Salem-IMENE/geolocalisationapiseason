import React from "react";
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './style/App.css'

class App extends React.Component{   
    state ={ lat: null, errorMessage: ''}; 
    componentDidMount(){        
        window.navigator.geolocation.getCurrentPosition(
            //setState uodate state value
            (position) =>this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({errorMessage: err.message})            
        ); 
    }
    componentDidUpdate(){
        console.log('My component was just updated - it rendred !!');
    }
    // we have to define renderContent
    renderContent(){
        if(!this.state.lat && this.state.errorMessage){
            return <div> Error : {this.state.errorMessage}  </div>                         
        }

        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat = {this.state.lat} />                    
        }

        return <Spinner messageSpinner="Please accept Location request !!!"/>  
    }
    render(){  
        return(
            <div className="border red">
                {this.renderContent()}
                
            </div>
        );    
            
    }
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


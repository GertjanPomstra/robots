import React , {Component} from "react";
import CardList from '../components/CardList';
import {robots} from '../components/Robots';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        // App component has two states: robots and searchfield (here with 'super()')
        // App owns the state, hence children can use it.
        // Any component that uses state has the class syntax that uses the constructor function.
        // The 'this.state' is what changes in the app.
        // the virtual DOM collects the state and React uses the state to pass them down as props.
        // Then the components, as pure functions, can render with the state.
        super()
        this.Header = React.createRef();
        this.state = {
            robots: [],
            searchfield: '',
            headerHeight: 0 // part of an attempt to save header height to adjust scroll height
        }
        // Note that it is not nessecary for robots to be a state, since it is hard-coded.
        // But most of the time, this information comes from elsewhere, hence state is more handy.
    }

    componentDidMount() {
        this.setState({ robots: robots})
        this.setState({ headerHeight: this.Header.clientHeight}) // for header height
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchfield: event.target.value})
    }

    render() {
        // filteredRobots is a filtered version of the robots state.
        // It finds all robot that have robot.name matching searchfield state.
        // Both set to lower case to prevent caps mojo.
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <Header searchChange={this.onSearchChange} ref={this.Header}/> {/* for header height */}
                <Scroll headerHeight={this.componentDidMount}> {/* for header height */}
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />  
                    </ErrorBoundary>
                </Scroll>      
            </div>
        )
    }
}

export default App
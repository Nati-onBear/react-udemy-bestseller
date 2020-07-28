import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        value: 4
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default:
    //             break;
    //     }
    // }

    render () {
        const { value } = this.state
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={"Add " + value} clicked={() => this.props.onAdditionCounter(value)}  />
                <CounterControl label={"Subtract " + value} clicked={() => this.props.onSubtractionCounter(value)}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {
                        typeof this.props.results === 'object' 
                        && this.props.results.map(res => 
                            <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC' }),
        onDecrementCounter: () => dispatch({ type: 'DEC' }),
        onAdditionCounter: (value) => dispatch({ type: 'ADD', value: value }),
        onSubtractionCounter: (value) => dispatch({ type: 'SUB', value: value }),
        onStoreResult: () => dispatch({ type: 'STORE' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, {Component} from "react";


class ClassCountComponent extends Component {

    state = {
        count: 0
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log(`You clicked ${this.state.count} times`);
        }, 3000);
    }

    render() {
        return (
            <div className='text-center'>
                <button> Click Me </button>
            </div>
        )
    }


}
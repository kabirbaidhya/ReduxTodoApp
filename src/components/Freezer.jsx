import React from 'react';
import Component from './base/Component';

class Freezer extends Component {
    render() {
        return (
            <div className="freezer" hidden={!this.props.freezed}>Please wait..</div>
        );
    }
}

export default Freezer;

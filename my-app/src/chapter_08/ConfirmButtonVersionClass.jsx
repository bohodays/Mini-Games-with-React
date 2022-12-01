import React from 'react';

// 거의 사용하지 않음
class ConfirmButtonVersionClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmd: false,
        };

        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmd: !prevState.isConfirmd,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmd}
            >
                {this.state.isConfirmd ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButtonVersionClass;
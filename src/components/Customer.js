import React from 'react';

class Customer extends React.Component {
    // Customer 의 내용을 그려주는 부분
    render() {
        return (
            // App.js에서 받은 데이터로 출력
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
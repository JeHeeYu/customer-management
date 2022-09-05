import React from 'react';

class Customer extends React.Component {
    // Customer 의 내용을 그려주는 부분
    render() {
        return (
            // App.js에서 받은 데이터로 출력
            <div>
                <CustomerProfile 
                    id={this.props.id} 
                    image={this.props.image}
                    name={this.props.name}
                />
                <CustomerInfo
                    birthday={this.props.birthday} 
                    gender={this.props.gender}
                    job={this.props.job}
                />
            </div>
        )
    }
}

// 사용자의 Profile 이름과 ID 값을 출력할 Class
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

// 사용자의 데이터 출력하기 위한 Class
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
    'name': '홍길동',
    'birthday': '960929',
    'gender': '남자',
    'job': '대학생'
}

class App extends Component {
    render() {
        return (
            // Customer 컴포넌트에 데이터 전송
            <Customer
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
            />
        );
    }
}

export default App;

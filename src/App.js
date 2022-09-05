import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any/1',
    'name': '홍길동1',
    'birthday': '9609291',
    'gender': '남자1',
    'job': '대학생1'
},
{
    'id': 2,
    'image': 'https://placeimg.com/64/64/any/2',
    'name': '홍길동2',
    'birthday': '9609292',
    'gender': '남자2',
    'job': '대학생2'
},
{
    'id': 3,
    'image': 'https://placeimg.com/64/64/any/3',
    'name': '홍길동3',
    'birthday': '9609293',
    'gender': '남자3',
    'job': '대학생3'
}
]

class App extends Component {
    render() {
        return (
            // Customer 컴포넌트에 데이터 전송
            <div>
                {
                    customers.map(c => {
                        return (
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;

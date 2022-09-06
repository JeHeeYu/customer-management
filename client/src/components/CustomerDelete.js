import React from 'react';

class CustomerDelete extends React.Component {

    // 특정 id 데이터 삭제
    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button click={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;
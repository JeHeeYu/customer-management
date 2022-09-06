import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                // 화면 리프레쉬
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        
    }

    handleFileChange = (e) => {
        this.setState({
            // 이벤트가 발생한 input 값
            file: e.target.files[0], 
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.name);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        
        // 데이터를 서버로 전송 시 웹 규격에 맞는 헤더 필요
        const config = {
            headers: {
                // 전달하고자 하는 데이터에 파일이 포함되어 있을 때 필요
                'content-type': 'multipart/form-data'
            }
        }

        // axios 라이브러리에 포함되어 있는 post를 이용해 해당 URL에 데이터 전송
        return post(url, formData, config);
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;
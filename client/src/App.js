import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 1080,
    }
});

class App extends Component {

    // props는 변경될 수 없는 데이터에 사용하므로
    // 변경될 수 있는 변수 선언
    state = {
        customers: ""
    }

    // api에 접근해서 데이터를 받아오는 부분
    // 모든 컴포넌트가 마운트 되었을 때 실행
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
    }

    // 접속하고자 하는 api 주소에서 body parsing 후 body return
    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();

        return body;
    }

    render() {
        const { classes } = this.props;
        return (
            // Customer 컴포넌트에 데이터 전송
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.customers ? this.state.customers.map(c => {
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
                            }) : ""
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

//export default withStyles(styles)(App);
export default App;

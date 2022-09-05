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
})

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
        const { classes } = this.props;
        return (
            // Customer 컴포넌트에 데이터 전송
            <Paper className={classes}>
                <Table className={classes}>
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
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

//export default withStyles(styles)(App);
export default App;
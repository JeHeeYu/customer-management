const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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
    ]);
});

app.listen(port, () => {
    console.log(`Server Start Port : ${port}`)
});
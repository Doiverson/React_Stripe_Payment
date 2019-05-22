let API_URI = '';

console.log("process.env.NODE_ENV : "+process.env.NODE_ENV);

if(process.env.NODE_ENV === 'production'){

    // console.log("Got a Dev URI");
    // API_URI = 'http://localhost:5050';
    API_URI = 'http://shrouded-gorge-90372.herokuapp.com';

}else{

    // console.log("Got a Dev URI");
    // API_URI = 'http://localhost:5050';
    API_URI = 'http://shrouded-gorge-90372.herokuapp.com';
}

console.log('API_URI => '+API_URI);
export default API_URI;

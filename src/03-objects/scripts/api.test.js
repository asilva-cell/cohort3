import {postData} from './api.js';
global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

test('test that the fetch works?', async () => {

    const cities = [
        {key:1, name:'Sydney', latitude: -33.870453, longitude: 151.208755 , population: 4741874},
        {key:2, name:'China', latitude: 33.870453, longitude: -151.208755 , population: 4741874}  
    ]

    // Check that the server is running and clear any data
    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', cities[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Sydney");

    // add a second with the same key which should be an error
    data = await postData(url + 'add', cities[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await postData(url + 'add', cities[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("China");

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Sydney");

    data = await postData(url + 'update', {key:1, name:"Calgary"});
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    data = await postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
});


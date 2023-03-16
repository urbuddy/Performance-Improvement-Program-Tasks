const { get, post, put, patch, Delete } = new (require("./APIRequestMethods"));

describe('Reqres API Automation', () => {

    test("Users Data Response Verification Test", async () => {
        let res = await get(`/api/users?page=2`);
        expect(res.status).toEqual(200);
        expect(res.data).toEqual(
            [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg"
                }
            ]
        );
    });

    test("Single User Data Response Verification Test", async () => {
        let res = await get(`/api/users/2`);
        expect(res.status).toEqual(200);
        expect(res.data).toEqual(
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            }
        );
    });

    test("Single User Data Not Found Response Verification Test", async () => {
        let res = await get(`/api/users/23`);
        expect(res.status).toEqual(404);
        expect(res.data).toEqual({});
    });

    test("Colors Data Response Verification Test", async () => {
        const res = await get("/api/unknown");
        expect(res.status).toEqual(200);
        expect(res.data).toEqual([
            {
                "id": 1,
                "name": "cerulean",
                "year": 2000,
                "color": "#98B2D1",
                "pantone_value": "15-4020"
            },
            {
                "id": 2,
                "name": "fuchsia rose",
                "year": 2001,
                "color": "#C74375",
                "pantone_value": "17-2031"
            },
            {
                "id": 3,
                "name": "true red",
                "year": 2002,
                "color": "#BF1932",
                "pantone_value": "19-1664"
            },
            {
                "id": 4,
                "name": "aqua sky",
                "year": 2003,
                "color": "#7BC4C4",
                "pantone_value": "14-4811"
            },
            {
                "id": 5,
                "name": "tigerlily",
                "year": 2004,
                "color": "#E2583E",
                "pantone_value": "17-1456"
            },
            {
                "id": 6,
                "name": "blue turquoise",
                "year": 2005,
                "color": "#53B0AE",
                "pantone_value": "15-5217"
            }
        ]);
    });

    test("Single Color Data Response Verification Test", async () => {
        const res = await get('/api/unknown/2');
        expect(res.status).toEqual(200);
        expect(res.data).toEqual({
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        });
    });

    test("Color Data Not Found Response Verification Test", async () => {
        const res = await get('/api/unknown/23');
        expect(res.status).toEqual(404);
        expect(res.data).toEqual({});
    });

    test("Create Users Data Response Verification Test", async () => {
        let obj = {
            "name": "morpheus",
            "job": "leader"
        };
        const res = await post('/api/users', obj);
        expect(res.status).toEqual(201);
        expect(res.data.name).toEqual(obj.name);
        expect(res.data.job).toEqual(obj.job);
        expect(res.data.id).not.toBeNull();
    });
   
    test("Update(Put Request) Users Data Response Verification Test", async () => {
        let obj = {
            "name": "morpheus",
            "job": "zion resident"
        };
        const res = await put('/api/users/2', obj);
        expect(res.status).toEqual(200);
        expect(res.data.name).toEqual(obj.name);
        expect(res.data.job).toEqual(obj.job);
    });

    test("Update(Patch Request) Users Data Response Verification Test", async () => {
        let obj = {
            "name": "morpheus",
            "job": "Manager"
        };
        const res = await patch('/api/users/2', obj);
        expect(res.status).toEqual(200);
        expect(res.data.name).toEqual(obj.name);
        expect(res.data.job).toEqual(obj.job);
    });
   
    test("Delete Users Data Response Verification Test", async () => {
        const res = await Delete('/api/users/2');
        expect(res.status).toEqual(204);
        expect(res.data).toEqual("");
    });

    test("Register Successful Response Data Verification Test", async () => {
        let obj = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        const res = await post('/api/register', obj);
        expect(res.status).toEqual(200);
        expect(res.data).toEqual({
            "id": 4,
            "token": "QpwL5tke4Pnpja7X4"
        });
    });

    test("Register Unsuccessful Response Data Verification Test", async () => {
        let obj = {
            "email": "sydney@fife",
        };
        const res = await post('/api/register', obj);
        expect(res.status).toEqual(400);
        expect(res.data).toEqual({
            "error": "Missing password"
        });
    });

    test("Login Successful Response Data Verification Test", async () => {
        let obj = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        const res = await post('/api/login', obj);
        expect(res.status).toEqual(200);
        expect(res.data).toEqual({
            "token": "QpwL5tke4Pnpja7X4"
        });
    });

    test("Login Unsuccessful Response Data Verification Test", async () => {
        let obj = {
            "email": "peter@klaven",
        };
        const res = await post('/api/login', obj);
        expect(res.status).toEqual(400);
        expect(res.data).toEqual({
            "error": "Missing password"
        });
    });

    test("Delay Response Response Data Verification Test", async () => {
        const res = await get('/api/users?delay=3');
        expect(res.status).toEqual(200);
        expect(res.data).toEqual([
            {
              id: 1,
              email: 'george.bluth@reqres.in',
              first_name: 'George',
              last_name: 'Bluth',
              avatar: 'https://reqres.in/img/faces/1-image.jpg'
            },
            {
              id: 2,
              email: 'janet.weaver@reqres.in',
              first_name: 'Janet',
              last_name: 'Weaver',
              avatar: 'https://reqres.in/img/faces/2-image.jpg'
            },
            {
              id: 3,
              email: 'emma.wong@reqres.in',
              first_name: 'Emma',
              last_name: 'Wong',
              avatar: 'https://reqres.in/img/faces/3-image.jpg'
            },
            {
              id: 4,
              email: 'eve.holt@reqres.in',
              first_name: 'Eve',
              last_name: 'Holt',
              avatar: 'https://reqres.in/img/faces/4-image.jpg'
            },
            {
              id: 5,
              email: 'charles.morris@reqres.in',
              first_name: 'Charles',
              last_name: 'Morris',
              avatar: 'https://reqres.in/img/faces/5-image.jpg'
            },
            {
              id: 6,
              email: 'tracey.ramos@reqres.in',
              first_name: 'Tracey',
              last_name: 'Ramos',
              avatar: 'https://reqres.in/img/faces/6-image.jpg'
            }
        ]);
    });
});
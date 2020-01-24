const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

let db = {
    "users": [
        {
            "id": 2,
            "login": "writer@mail.com",
            "password": 123456,
            "role": "writer"
        },
        {
            "id": 0,
            "login": "reader@mail.com",
            "password": 123456,
            "role": "reader"
        }
    ],
    "posts": [
        {
            "id": 0,
            "title": "Название поста0",
            "description": "Текст0",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 1,
            "title": "Название поста1",
            "description": "Текст1",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 2,
            "title": "Название поста2",
            "description": "Текст2",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 3,
            "title": "Название поста3",
            "description": "Текст3",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 4,
            "title": "Название поста4",
            "description": "Текст4",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 5,
            "title": "Название поста5",
            "description": "Текст5",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 6,
            "title": "Название поста6",
            "description": "Текст6",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 7,
            "title": "Название поста7",
            "description": "Текст7",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 8,
            "title": "Название поста8",
            "description": "Текст8",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 9,
            "title": "Название поста9",
            "description": "Текст9",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 10,
            "title": "Название поста10",
            "description": "Текст10",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 11,
            "title": "Название поста11",
            "description": "Текст11",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },


        {
            "id": 12,
            "title": "Название поста12",
            "description": "Текст12",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 13,
            "title": "Название поста13",
            "description": "Текст13",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 14,
            "title": "Название поста14",
            "description": "Текст14",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 15,
            "title": "Название поста15",
            "description": "Текст15",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 16,
            "title": "Название поста16",
            "description": "Текст16",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 17,
            "title": "Название поста17",
            "description": "Текст17",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 18,
            "title": "Название поста18",
            "description": "Текст18",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 19,
            "title": "Название поста19",
            "description": "Текст19",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
        {
            "id": 20,
            "title": "Название поста20",
            "description": "Текст20",
            "claps": 28,
            "createdAt": "2019-09-29T00:00:00.000Z",
            "updateAt": "2019-09-29T00:00:00.000Z",
            "userId": 1
        },
    ]
};

const app = new Koa();
app.use(cors());
app.use(koaBody({
    json: true
}));

const uniqueId = async (array) => {
    let basicId = 0;
    let compareId = (array, id) => {
        let index = array.indexOf(array.filter(item => item.id == id)[0]);
        if (index == -1) {
            basicId = id;
        } else {
            id++;
            compareId(array, id)
        }
    }
    await compareId(array, basicId);
    return basicId
}

const router = new Router();

router.get('/users', async (ctx, next) => {    
    ctx.response.status = 200;
    ctx.response.body = db.users;
});
router.get('/posts/:step', async (ctx, next) => {
    ctx.response.status = 200;
    const step = Number(ctx.request.url.slice(7));    
    const req = {
        size: db.posts.length,
        posts: db.posts.slice(10*step, 10*step + 10)
    }    
    ctx.response.body = req;
});

router.put('/claps', async (ctx, next) => {
    ctx.response.status = 200;
    const { id } = ctx.request.body;
    db.posts[id].claps++;
    ctx.response.body = db.posts[id];
});
router.put('/update', async (ctx, next) => {
    const { id, description, updateAt, title } = ctx.request.body;
    const index = db.posts.indexOf(db.posts.filter(item => item.id == id)[0]);
    db.posts[index].description = description;    
    db.posts[index].updateAt = updateAt;
    db.posts[index].title = title;    
    ctx.response.body = db.posts[index];
    ctx.response.status = 200;
});

router.delete('/posts/:id', async (ctx, next) => {    
    const id = Number(ctx.request.url.slice(7));
    const index = db.posts.indexOf(db.posts.filter(item => item.id == id)[0]);    db.posts.splice(index, 1);
    
    ctx.response.status = 200;    
});

router.post('/create', async (ctx, next) => {
    const { userId, description, createdAt, title } = ctx.request.body;
    const newPost = {
        "id": await uniqueId(db.posts),
        "title": title,
        "description": description,
        "claps": 0,
        "createdAt": createdAt,
        "updateAt": null,
        "userId": userId
    }
    db.posts.push(newPost)        
    ctx.response.status = 200;
    ctx.response.body = newPost;    
});
router.post('/sign', async (ctx, next) => {
    const { email, password } = ctx.request.body;
    const index = db.users.indexOf(db.users.filter(item => item.login == email)[0]);
    if(index != -1 && db.users[index].password == password){
        ctx.response.body = db.users[index];
    } else {
        ctx.response.body = false;
    }           
    ctx.response.status = 200;        
});
 router.post('/reg', async (ctx, next) => {
    const { email, role } = ctx.request.body;
    const index = db.users.indexOf(db.users.filter(item => item.login == email)[0]);
    if(index == -1){
        const newUser = {
            "id": await uniqueId(db.users),
            "login": email,
            "password": 123456,
            "role": role,
        };
        db.users.push(newUser);        
        ctx.response.body = 123456;
    } else {
        ctx.response.body = false;
    }          
    ctx.response.status = 200;        
}); 

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
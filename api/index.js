import express from "express";
import userRoute from './routes/users.js'
import postsRoute from './routes/posts.js'
import commentsRoute from './routes/comments.js'
import authRoute from './routes/auth.js'
import likesRoute from './routes/likes.js'


const app = express();

app.use(express.json())

app.use('/api/user', userRoute)
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute)
app.use('/api/auth', authRoute)
app.use('/api/likes', likesRoute)

app.listen(8000, ()=> {
    console.log("Server started on Port 8000");
})
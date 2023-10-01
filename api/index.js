import express from "express";
import userRoute from './routes/users.js'
import postsRoute from './routes/posts.js'
import commentsRoute from './routes/comments.js'
import authRoute from './routes/auth.js'
import likesRoute from './routes/likes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'


const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    
}))
app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute)
app.use('/api/auth', authRoute)
app.use('/api/likes', likesRoute)

app.listen(8000, ()=> {
    console.log("Server started on Port 8000");
})
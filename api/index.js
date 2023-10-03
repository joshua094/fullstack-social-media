import express from "express";
import userRoute from './routes/users.js'
import postsRoute from './routes/posts.js'
import commentsRoute from './routes/comments.js'
import authRoute from './routes/auth.js'
import likesRoute from './routes/likes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import multer from "multer";


const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/social-media/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post('/api/upload', upload.single("file"), (req,res)=> {
    const file = req.file;
    res.status(200).json(file.filename)
  })

app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute)
app.use('/api/auth', authRoute)
app.use('/api/likes', likesRoute)

app.listen(8000, ()=> {
    console.log("Server started on Port 8000");
})
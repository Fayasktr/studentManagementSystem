import 'dotenv/config';
import app from './app';
import connectDB from './config/DBconnection';

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("http://localhost:4444");
    })

}).catch((error) => {
    console.log(error);
})

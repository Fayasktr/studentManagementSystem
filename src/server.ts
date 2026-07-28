import "dotenv/config";
import app from "./app.js"
let PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`http://localhost:4444`);
})
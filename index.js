import query from "./database/connections.js";
import  express  from "express";
import routes from "./modules/products/products.routes.js"
import cors from "cors"

const app = express();


const port = 3000;
app.use(cors());
app.use(express.json());
app.use(routes)






app.listen(port, function () {
  console.log(`server is on ${port}`);
});

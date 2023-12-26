import query from "../../database/connections.js";



export const getAllProducts =  (req, res) =>{
    query.execute(`select * from products`, (err, data) => {
      res.json({ message: "success", data });
    })
  }



  export const addProducts =  (req, res) => {
    let { name, desc, price } = req.body;
    console.log(req.body);
    query.execute(
      `insert into products (name,description,price) values('${name}','${desc}','${price}')`,
      (err, data) => {
        res.json({ message: "success", data });
      }
    );
  }



  export const deleteProducts =  (req, res) => {
    let { id } = req.body;
    query.execute(`delete from products where id = ${id}`, (err, data) => {
      console.log(data);
      if (data.affectedRows > 0) {
        res.json({ message: "success",data });
      }  else { 
        res.json({message: "not found",err})
        
      }
    });
  }



  export const updateProducts =  (req, res) => {
    const { id, name } = req.body;
    query.execute(
      `update  products set name ='${name}' where id =${id}`,
      (err, data) => {
        if (err) {
          res.json({ message: "error", err });
        } else {
          res.json({ message: "success", data });
        }
      }
    );
  }


  export const searchProducts = (req, res) => {
    let { id, name } = req.params;
    query.execute(`select * from products where id =${id}`, (err, data) => {
      if (err) {
        res.json({ message: "error", err });
      } else {
        res.json({ message: "success", data });
      }
    });
  }


import { pool } from "../db.js";

// get all employees
export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

// get a 1 employee by id
export const getEmployee = async (req, res) => {
  console.log(req.params.id);
  try {
     const [rows] = await pool.query(`SELECT * FROM employee WHERE id= ?`, [
       req.params.id,
     ]);
     // validate if id exists
     if (rows.length <= 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
     res.json(rows);

  } catch (err) {
     console.log(err);
  }
};

// create a new employee
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?,?)",
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

// delete a employee
export const deleteEmployees = async (req, res) => {
  const {id} = req.params;
  const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
  
  if (rows.affectedRows <= 0) {
    return res.status(404).json({ message: "Employee not found" });
  }
//   res.sendStatus(204)
  res.send(`deleted employee ${id}`)
};

// update employees
export const updateEmployees = async (req, res) => {
    res.send("updated employee")
    // try {
    //     const { id } = req.params;
    //     const { name, salary } = req.body;
    
    //     const [result] = await pool.query(
    //       "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
    //       [name, salary, id]
    //     );
    
    //     if (result.affectedRows === 0)
    //       return res.status(404).json({ message: "Employee not found" });
    
    //     const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    //       id,
    //     ]);
    
    //     res.json(rows[0]);
    //   } catch (error) {
    //     return res.status(500).json({ message: "Something goes wrong" });
    //   }
};

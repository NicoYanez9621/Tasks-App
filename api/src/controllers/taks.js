import { connect } from "../database";

export const getTasks = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(400).json({ msg: "no existe una tareas creadas aun" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);
    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(400).json({ msg: "no existe una tarea con ese id" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTaskCount = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
    if (rows[0]["COUNT(*)"] > 0) {
      res.status(200).json({ count: rows[0]["COUNT(*)"] });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const connection = await connect();
    const [results] = await connection.query(
      "INSERT INTO tasks(title, description) VALUES (?,?)",
      [title, description]
    );
    res.status(200).json({
      id: results.insertId,
      title: title,
      description: description,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.status(200).json({
      msg: `se ha eliminado la tarea ${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connect();
    await connection.query("UPDATE tasks SET ? WHERE id = ?", [req.body, id]);
    res.status(200).json({
      msg: `se ha modificado la tarea ${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};

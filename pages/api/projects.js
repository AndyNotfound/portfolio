import path from "path";
import fs from "fs"; //or as const fs= require('fs');

export default async function handler(req, res) {
  let projects = [];

  //reading the records from the JSON file
  try {
    projects = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "data/projects-data.json"))
    );
  } catch (err) {
    console.log(err);
  }

  if (req.method === "GET") {
    res.status(200).json(projects); //sending the response
  }
}
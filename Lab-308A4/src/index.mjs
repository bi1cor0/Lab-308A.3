// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

function getUserData(id) {
  const dbs = {
    db1: db1(id),
    db2: db2(id),
    db3: db3(id)
  };
}

console.log(getUserData(5));
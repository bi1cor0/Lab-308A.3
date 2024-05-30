// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = { //object of functions. in order to put the value of the function in an object key, place only the name of the functiton.
    db1: db1,
    db2: db2,
    db3: db3
  };
  const returnedValue = await central(id);
  const returnedData = await dbs[returnedValue](id);
  const returnedPII = await vault(id);

  const results = {
    id: id,
    name: returnedPII.name,
    username: returnedData.username,
    email: returnedPII.email,
    address: returnedPII.address,
    phone: returnedPII.phone,
    website: returnedData.website,
    company: returnedData.company
  }

  return results;
}

const info = await getUserData(6);
console.log(info)
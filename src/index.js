// const {MongoClient} = require('mongodb');
// async function main() {
//     const uri = "mongodb+srv://admin:Inbox%40123@cluster0.ob4tr.mongodb.net/test";
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     }
//     finally{
//         await client.close();
//     }
    
// }
// main().catch(console.error);
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(`DB here - ${db.name}`));
// };
console.log('heyy!');
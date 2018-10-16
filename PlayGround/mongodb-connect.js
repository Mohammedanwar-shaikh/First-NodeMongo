//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb')

    }
    console.log('Connected to Mongodb');
    const db=client.db('nodeMongo');
    const collection=db.collection('MyCollection');

    

    collection.find({"year": 1986}).toArray().then((docs)=>{
         console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        return console.log('Unable to fetch collection')
        }
    );
   
   
    
    
    client.close();

    /*
   //Insert Data
    collection.insertOne({ "title" : "Titanic", "year" : 2000, "rated" : "PG",  "runtime" : 200, "genres" : [ "Action", "Drama", "Romance" ],  "director" : "James Cameron", "writers" : [ "John Cash", "Billy Zane"], "actors" : [ "Leonardo DiCaprio", "Kate Winslet" ]},(error,result)=>{
        if(err){
            return console.log('Unable to connect to Mongodb')
    
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })
    */

    /*
    //Counting Data
    collection.count({}).then((count)=>{
        console.log(count)
    },(err)=>{
        return console.log('Unable to fetch collection')
        }
    );
    */
});
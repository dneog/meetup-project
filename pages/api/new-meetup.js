import { MongoClient } from "mongodb";
async function handler(req, res){
    if(req.method === 'POST'){
    const data= req.body;

    const client= await MongoClient.connect('mongodb+srv://debashisneog23:debashisneog23@cluster0.fnaucoa.mongodb.net/meetups?retryWrites=true&w=majority')
    

    const db= client.db()

    const meetupCollection= db.collection('meetups');
    const result= await meetupCollection.insertOne(data);

    client.close();
    res.status(201).json({message: 'Meetup Inserted'})

    }
}

export default handler
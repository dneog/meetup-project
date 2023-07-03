import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props){
    return(
        <>
            <h1>{props.meetupDates.title}</h1>
            <address>{props.meetupDates.address}</address>
            <p>{props.meetupDates.description}</p>
        </>
    )
}
export async function getStaticPaths(){

    const client= await MongoClient.connect('mongodb+srv://debashisneog23:debashisneog23@cluster0.fnaucoa.mongodb.net/meetups?retryWrites=true&w=majority')
    

  const db= client.db()
  const meetupCollection= db.collection('meetups');
  const meetups= await meetupCollection.find({}, {_id: 1}).toArray();
  client.close();
    return{
        fallback:false,
        paths: meetups.map(meetup => ({ params: {meetupId: meetup._id.toString()},
    }))         
    }
}
 export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    const client= await MongoClient.connect('mongodb+srv://debashisneog23:debashisneog23@cluster0.fnaucoa.mongodb.net/meetups?retryWrites=true&w=majority')
    

    const db= client.db()
    const meetupCollection= db.collection('meetups');
    const selectedMeetup= await meetupCollection.findOne({_id: new ObjectId(meetupId)})
    client.close();
 
    return{
        props:{
            meetupDates: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                address: selectedMeetup.address
            }
        }
    }
 }

export default MeetupDetails
function MeetupDetails(){
    return(
        <>
            <h1>A First Meetup</h1>
            <address>City-abc</address>
            <p>This is the first Meetup</p>
        </>
    )
}
export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            },
        ]

        
    }
}
 export async function getStaticProps(context){
   const meetupID=  context.params.meetupId
    return{
        props:{
            meetupDates:{
                id: meetupID,
               title: 'A First Meetup',
               address: 'City-abc',
               description: 'This is the first Meetup'
            }
        }
    }
 }

export default MeetupDetails
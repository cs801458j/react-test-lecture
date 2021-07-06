import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        

        //  http request 보내기 위해 fetch 함수를 사용한다
        //  post request를 보내려면, 
        fetch('https://react-getting-started-cbb49-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
        
    }

    return (
        <section>
            <h1>Add New Meetup</h1>           
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;

// 함수 호출할때 매개변수 넘기기
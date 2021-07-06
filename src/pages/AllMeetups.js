import { useState, useEffect } from 'react';
import MeetuptList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

// useEffect <- 특정 조건에서 작동하도록 하는 코드

// async 옵션때문에 계속 렌더링 실패하고 있었음
// async function AllMeetupPage() 
function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // state를 update하는 function은 예외이다 


  // component function에서 바로 사용 가능
  //  매개변수1: 함수 2: 배열(dependency)
  useEffect(() => {
    setIsLoading(true);

    // fetch 함수는 그냥 built-in 함수임(우리 컴포넌트의 props나 state가 아님)
    fetch(
      'https://react-getting-started-cbb49-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };   
        meetups.push(meetup);
      }


      setIsLoading(false);
      setLoadedMeetups(meetups); // meetupList들은 array 형태로 온다
    });
    // 우리들은 이 함수들을 여기에 넣을 수 있다 이 함수들이 정확하지 않아질 수 있다면 .
    // 이 함수들이 변경되면 fetch 가 다시 실행된다 
  }, []);
  
  //  이 의존성 배열에서는 모든 외부 값들을 추가해야한다 (당신의 effect함수가 의존하는 )
  //  여기서는 외부값 X  

  //  useEffect가 적절한 솔루션이다. fetch 안에 있는 코드를 동작시키기 위한



  // fetch('https://react-getting-started-cbb49-default-rtdb.firebaseio.com/meetups.json'
  // ).then(response => {
  //   return response.json();
  // }).then((data) => {
  //   setIsLoading(false);
  //   setLoadedMeetups(data);
  // });

  if (isLoading)  {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }


  return ( 
    <section>
        <div>All Meetups</div>
        <MeetuptList meetups={loadedMeetups} />
    </section>
    );
}

export default AllMeetupPage; 
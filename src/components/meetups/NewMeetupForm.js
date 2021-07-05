import { useRef } from 'react'; // execute in our functional components

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    // component function 만들기
    // submit 될때 발생하는 이벤트
    const titleInputRef = useRef(); //
    const imageInputRef = useRef(); 
    const addressInputRef = useRef(); 
    const descriptionInputRef = useRef(); 
    

    function submitHandler(event) {
        //  리액트는 자동적으로 event argument를 전달한다
        //  event 객체는 preventDefault 메소드를 가짐 -> browserDefault를 막아줌
        event.preventDefault(); // <- vanilaJS
        //  & submission에 대해 완벽히 통제할 수 있게해줌
        
        // titleInputRef를 통해  현재 값 전달. input element는 값 속성을 가지니까 
        const enteredTitle = titleInputRef.current.value;
        // 우리가 변경 할 수 있음
        titleInputRef.current.value = 'some new value'

        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const entedDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: entedDescription
        };
        // useState 
        // 우리는 여기서 react ref hook을 사용해야 한다

        console.log(meetupData);
        props.onAddMeetup(meetupData);
        // ref - render 메서드에서 생성된 dom 노드나 react element에 접근하는 방법 제공 포커스, 텍스트 선택영역, 미디어 재생 관리
    }   
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="Address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
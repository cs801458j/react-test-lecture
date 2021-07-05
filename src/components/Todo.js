// 우리에게 필요한 것 -> some code in component to then accept and use those received values. 
// we accept the parameter in our function component
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    // nested function
    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <span>A Span</span>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {/* { modalIsOpen ? <Modal /> : null } */}
            { modalIsOpen && 
                <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
            
            
        </div>
    )
}

export default Todo;

// 우리가 생각해야할 것 : configurability(구성 가능성)
// Passing data with props and dynamic content
// {} <- 안에 js expression 넣을 수 있음
// reusable element 만드는 방법
// onClick={deleteHandler} <- 여기서 () 넣어서 execute할 필요가 없음
// parentheses {}
// 이름만 넣어도 이 버튼이 클릭되었을 때 이벤트를 실행할 것이라고 알려주기

// useState -> we register different states
// which we want to support in our React application


// onCancel <- 우리꺼라 속성이름 onClick 말고 onCancel <-이런걸로 바꿔도 됨



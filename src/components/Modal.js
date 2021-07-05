
function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }

    // 이런 함수들 정의하는 것 대신, 우리는 그저 props onCancel을 forward하기만 해줘도 된다. 
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>cancel</button>
            {/* <button className='btn' onClick={props.onConfirm}>confirm</button> */}
            <button className='btn' onClick={confirmHandler}>confirm</button>
        </div>
    )
}

export default Modal;
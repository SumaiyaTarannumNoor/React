export default function Modal({isOpen, onClose, children}){
    if (!isOpen) return null;

    return(
        <div style={{position:'fixed', top:0, right:0, left:0, bottom:0, background:'rgba(0,0,0,0.6)'}}>
            <div style={{background:'white', padding:"20px", margin:"50px auto", width:'50%'}}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
    const [postInformation, setPostInformation] = useState(props.postInformation);
    return (
        <>
            <div className="Post" ref={ref}>
                <div className='row'>
                    <h5 className="text-center">{postInformation.title}</h5>
                    <h6 className="text-center">{postInformation.subtitle}</h6>
                    <h6 className="text-end">{postInformation.city}</h6>
                </div>
                <div className='space-3'></div>
                <div className='row'>
                    <p class="text-start">{postInformation.content}</p>
                    <p class="text-start">{postInformation.result}</p>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='text-start'>{postInformation.address}</p>
                        <p className='text-start'>{postInformation.phone}</p>
                        <p className='text-start'>{postInformation.email}</p>
                    </div>
                    <div className='col'>
                        <p className='text-end'>{postInformation.date}</p>
                        <p className='text-end'>{postInformation.fullName}</p>
                    </div>
                </div>
            </div>
            <Pdf targetRef={ref} filename="dilekce.pdf">
                {({ toPdf }) => <button onClick={toPdf}>PDF Olarak İndir</button>}
            </Pdf>
        </>
    );
}

export default PDF;
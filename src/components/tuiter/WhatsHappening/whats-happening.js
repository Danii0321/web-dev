import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const tuitClickHandler = () => {
        console.log(whatsHappening);
    }
    return (
        <>
            <div class="row">
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%" style={{width: 48, height: 48,
                        display:"inline", marginLeft:10}} src="../../../../tuiter/images/dani.jpg" />
                    </div>
                    <div className="col-11" style={{paddingLeft: 20}}>
                      <textarea value={whatsHappening} placeholder="What's happening?"
                               onChange={(event) =>
                        setWhatsHappening(event.target.value)}>
                      </textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div className="d-flex">
                    <div className="col-1" >
                    </div>
                    <div className="col-1" style={{paddingLeft: 20}}>
                        <i class="far fa-image" style={{color:"#2596be"}}></i>
                    </div>
                    <div className="col-1" style={{paddingLeft: 20}}>
                        <i class="fa fa-chart-line" style={{color:"#2596be"}}></i>
                    </div>
                    <div className="col-1" style={{paddingLeft: 20}}>
                        <i class="far fa-smile" style={{color:"#2596be"}}></i>
                    </div>
                    <div className="col-1" style={{paddingLeft: 20}}>
                        <i class="far fa-calendar" style={{color:"#2596be"}}></i>
                    </div>
                    <div className="col-7" style={{paddingLeft: 20}}>
                        <button class = "btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}
                            style={{float:"right", marginBottom: 10}}>
                            Tuit
                         </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;
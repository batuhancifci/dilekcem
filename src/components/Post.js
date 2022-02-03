import React, { useState } from 'react';
import PDF from './PDF';


const Post = () => {

    const [postInformation, setPostInformation] = useState({
        title: '',
        subtitle: '',
        city: '',
        content: '',
        result: '',
        address: '',
        phone: '',
        email: '',
        date: '',
        fullName: '',
    });

    const [postSubmitted, setPostSubmitted] = useState(false);

    const sunmitPost = (e) => {

        if (!postInformation.title || !postInformation.content || !postInformation.result || !postInformation.address || !postInformation.date || !postInformation.fullName) {
            alert('Some fields are required!');
            e.preventDefault();
        } else {
            setPostSubmitted(true);
        }
    }

    return (
        <>
            {!postSubmitted ?
                (<div className="container information-inputs">
                    <div className="jumbotron mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="well well-sm">
                                    <form className="form-horizontal" method="post">
                                        <fieldset>
                                            <legend className="text-center header">Hızlı Dilekçe Oluştur</legend>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, title: e.target.value })} required name="title" type="text" placeholder="İbraz Edilecek Ana Kurum (Zorunlu)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, subtitle: e.target.value })} name="subtitle" type="text" placeholder="Varsa Alt Kurum (Zorunlu Değil)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, city: e.target.value })} name="city" type="text" placeholder="Kurumun bulunduğu il/ilçe (Zorunlu Değil) (İstanbul/Beşiktaş)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <textarea onChange={e => setPostInformation({ ...postInformation, content: e.target.value })} required className="form-control" name="content" placeholder="(Aşağıdaki örnektekine benzer bir şekilde açıklama yazınız) (Zorunlu)
                                           &#x09; Aydın ili Efeler ilçesi Cumhuriyet mahallesinde ikamet etmekteyim. Mahallemizde ki kanalizasyon sisteminin yenilenmesinden dolayı cadde ve sokaklarımızda logar kapağı olmayan kanalizasyon çukurları bulunmaktadır. Mahallemizde bulunan vatandaşlar ve çocuklarım için açık kalmış bu çukurlar tehlike arz etmektedir. En kısa sürede mahallemizde ki tehlike arz eden bu çukurların kapatılmasını istiyorum." rows="10"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, result: e.target.value })} required name="result" type="text" placeholder="İstek, bildiri cümlesi (Zorunlu) (Gereğinin yapılmasını arz ederim.)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, address: e.target.value })} required name="address" type="text" placeholder="Adres (Zorunlu)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, phone: e.target.value })} name="phone" type="text" placeholder="telefon (Zorunlu Değil)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, email: e.target.value })} name="email" type="text" placeholder="Email (Zorunlu Değil)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, date: e.target.value })} required name="date" type="text" placeholder="Tarih (Zorunlu)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPostInformation({ ...postInformation, fullName: e.target.value })} required name="fullName" type="text" placeholder="İsim Soyisim (Zorunlu)" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" onClick={sunmitPost} className="btn btn-primary btn-lg">Taslak Oluştur</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <PDF postInformation={postInformation} />
                )
            }
        </>
    );
}
export default Post;
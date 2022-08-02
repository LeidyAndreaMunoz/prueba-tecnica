import React, {useState, useEffect} from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import ApiService from '../../../services/services'
import Button from 'react-bootstrap/Button';

import './detail.css'
import SpinnerLoading from '../../spinner/Spinner';

const Detail = () => {

    const { id, img } = useParams();
    const navigate = useNavigate();

    const [dataDetail, setDataDetail] = useState({})
    const [loading, setLoading] = useState(true)

    const imgPath = "https://images.unsplash.com/photo-" + img

    const getDetail = () => {
        ApiService.itemDetail(id)
        .then((response) => {
            setLoading(false)
            setDataDetail(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        getDetail();
        // eslint-disable-next-line
      }, []);

    const optionsDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <>
            <Button size='lg' onClick={() => {navigate('/');}} variant="outline-primary">⇦ Volver</Button>
            
            {loading ? 
                    <div>
                        <SpinnerLoading/>
                    </div>  : 
                <>
                    <div className='detailContainer'>
                        <img src={imgPath} alt={dataDetail.title} />
                        <h3>{dataDetail.title}</h3>
                        <p>Author: {dataDetail.author}</p>
                        <p>Type: {dataDetail.type}</p>
                        <p>Date: {new Date(dataDetail.created_at).toLocaleDateString('en-EN', optionsDate)}</p>
                        <p>Points: {dataDetail.points}</p>
                    </div>
                    <Button size='lg' onClick={() => {navigate('/');}} variant="outline-primary">⇦ Volver</Button>
                </>
                
            }
            
        </>
    )
}

export default Detail; 
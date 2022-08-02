import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ApiService from '../../../services/services'
import CardHome from '../../card/Card';
import SpinnerLoading from '../../spinner/Spinner';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

const Home = () => {

  const [dataFetch, setDataFetch] = useState([]);
  const [dataImages, setDataImages] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  let page = 0; 

  const fetchAll = () => {
    setLoading(true)
    ApiService.fetchAll(page)
    .then((response) => {
      setLoading(false)
      const newData = []
      response.data.hits.sort((a, b) => (a.created_at < b.created_at ? 1 : -1)).forEach((data) => newData.push(data))
      setDataFetch(oldData => [...oldData, ...newData ])
      page += 1; 
    }).catch(e => {
      setError(true)
    })
  }

  const fetchImages = () => {
    ApiService.getPhotos(page)
    .then((response) => {
      const newDataImages = []
      response.data.results.forEach((data) => newDataImages.push(data))
      setDataImages(oldData => [...oldData, ...newDataImages])
    })
  }

  const handleScroll = (e) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      fetchAll()
      fetchImages();
    }
  }

  useEffect(() => {
    fetchAll();
    fetchImages();
    window.addEventListener("scroll", handleScroll)
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-container'>
      <CardGroup>
        {dataFetch.map((element, index) => {
          const imgPath = dataImages[index]?.urls.regular.split("photo-")[1]
          const optionsDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
          return (
              <React.Fragment key={element.objectID + index}>
                <CardHome
                img={dataImages[index]?.urls.regular}
                title={element.title}
                date={new Date(element.created_at).toLocaleDateString('en-EN', optionsDate)}
                onClick={()=> {navigate(`/detail/${element.objectID}/${imgPath}`)}} />
              </React.Fragment>
            )
        } )}
      </CardGroup>
       
      {loading && <SpinnerLoading/>}
      <div >{error && 'Error'}</div>
    </div>
    
  )
}

export default Home
import axios from "axios";
const API_BASE_URL_NEWS = "https://hn.algolia.com/api/v1/search?query=dev&hitsPerPage=20&page=";
const API_BASE_URL_PHOTOS = "https://api.unsplash.com/search/photos?page="
const API_BASE_URL_ITEM_DETAIL = "https://hn.algolia.com/api/v1/items/"
const API_BASE_URL_ITEM_DETAIL_IMG = "https://api.unsplash.com/photos/"

class ApiService {

  fetchAll(page) {
    return axios.get(API_BASE_URL_NEWS + page);
  }

  getPhotos(page) {
    return axios.get(API_BASE_URL_PHOTOS + page + "&query=development&per_page=20&client_id=621_-fRqGCZes7BLFs5Huaxkwa_0uyHxYzt-eb1CvBo")
  }

  itemDetail(id){
    return axios.get(API_BASE_URL_ITEM_DETAIL + id);
  }

  itemDetailImg(id){
    return axios.get(API_BASE_URL_ITEM_DETAIL_IMG + id + "&client_id=IAQpCQpCCqNUIyaqLgfQ_0kErkWV5C41uR0eUKomWjM");
  }

}

export default new ApiService();

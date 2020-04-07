import qs from 'qs';
import axios from 'axios';
const BASE_URL = 'https://api.imgur.com';
const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENTID;
//const SECRET = process.env.VUE_APP_IMGUR_SECRET;

export default {
    login(){
        const params = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(params)}`;

    },
    getImages(accessToken){
        return axios.get(`${BASE_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },

    uploadImages(images, accessToken){

        let acceptableImages = Array.from(images).filter(image => {
           let validExtentions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'raw' ];

           return validExtentions.includes(image.name.split('.').pop()); 
        });

        const promises = Array.from(acceptableImages).map(image => {
            const formData = new FormData();
            formData.append('image', image);
            return axios.post(`${BASE_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        })

        return Promise.all(promises);
    }
}
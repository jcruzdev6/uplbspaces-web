export default function useImage(type, id, type_id) {
    let assets;
    let image;
    switch (type) {
        case 'facility_type':
            //assets = import.meta.glob('@/assets/images/facilities/*/home.jpg', {eager: true});  
            //handle null value 
            //if (assets['/assets/images/facilities/' + id + '/home.jpg'])
            //    image = assets['/assets/images/facilities/' + id + '/home.jpg']["default"];
            image = new URL('../assets/images/facilities/'+id+'/home.jpg', import.meta.url).href;
            break;
        case 'facility':
            //assets = import.meta.glob('@/assets/images/facilities/*/*/*.jpg', {eager: true});      
            //console.log('/assets/images/facilities/' + type_id + '/' + id + '/' + id + '-1.jpg');
            //handle null value 
            //if (assets['/assets/images/facilities/' + type_id + '/' + id + '/' + id + '-1.jpg'])
            //    image = assets['/assets/images/facilities/' + type_id + '/' + id + '/' + id + '-1.jpg']["default"];
            image = new URL('../assets/images/facilities/' + type_id + '/' + id + '/' + id + '-1.jpg', import.meta.url).href;
            break;
        case 'page':
            //assets = import.meta.glob('@/assets/images/pages/*/*.jpg', {eager: true});      
            //handle null value 
            //if (assets['/assets/images/pages/' + id + '/header.jpg'])   
            //    image = assets['/assets/images/pages/' + id + '/header.jpg']["default"];
            image = new URL('../assets/images/pages/' + id + '/header.jpg', import.meta.url).href;
            break;
        case 'page_cards':
            //assets = import.meta.glob('@/assets/images/pages/*/*.jpg', {eager: true});      
            //handle null value 
            //if (assets['/assets/images/pages/' + id + '/header.jpg'])   
            //    image = assets['/assets/images/pages/' + id + '/header.jpg']["default"];
            image = new URL('../assets/images/pages/' + id + '/header.jpg', import.meta.url).href;
            break;
        }
    return image;
}
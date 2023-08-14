//import fs from 'fs';
export default function useFetchImages(type, id, type_id = 0) {
    let folderPath;
    let allImages;
    switch (type) {
        case 'facility':
            folderPath = '/assets/images/facilities/'+type_id+'/'+id+'/';
            allImages = import.meta.glob('@/assets/images/facilities/*/*/*', {eager: true}); 
            break;
        case 'page':
            folderPath = '/assets/images/pages/'+id+'/';
            allImages = import.meta.glob('@/assets/images/pages/*/*', {eager: true}); 
            break;
    }
    let images = [];
    for (const key in allImages) {
        if (key.includes(folderPath) && !key.includes('header.jpg')) {
            images.push(allImages[key]["default"]);
        }
    }
    return images;
}
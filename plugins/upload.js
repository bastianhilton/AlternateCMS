const Filesaver = require( 'filesaver' );
 
const folders = {
    images: './media'
}
 
const filesaver = new Filesaver({ folders, safenames: true });
 
filesaver.add( 'images', './media/file.jpg', 'photo_1.jpg', function (_err, data) {
    console.log( data );
    // => {filename: 'photo_2.jpg', filepath: './images/photo_2.jpg'}
});
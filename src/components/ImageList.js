// import ImageItem from "./ImageItem";

// function ImageList ({imagesplaceHolder}) {
//     return ( 
//     <div>
// {imagesplaceHolder.map((image,index)=>{
//    return <ImageItem  key={index} imageProps={image}/>;
// })}
//     </div>
// );
// }

// export default ImageList ;
import ImageItem from "./ImageItem";

function ImageList({imagesplaceHolder}) {
  return (
    
    <div className="imageList">
      {imagesplaceHolder.map((image, index) => {
        return <ImageItem key={index} imageProps={image} />;
      })}
    </div>
  );
}

export default ImageList;

import React from "react";
import GalleryItem from "./GalleryItem";

class Gallery extends React.Component {
    render() {
        const galleryList = [
            {
                image: '/storage/img/flower1.jpg',
                name: 'テキストテキスト'
            },
            {
                image: '/storage/img/flower2.jpg',
                name: 'テキストテキスト'
            },
            {
                image: '/storage/img/flower3.jpg',
                name: 'テキストテキスト'
            },
            {
                image: '/storage/img/flower4.jpg',
                name: 'テキストテキスト'
            },
            {
                image: '/storage/img/flower5.jpg',
                name: 'テキストテキスト'
            },
            {
                image: '/storage/img/flower6.jpg',
                name: 'テキストテキスト'
            },
        ];

        return (
            <div id="gallery" className="gallery">
                <h2 className="section__title fadein">GALLERY</h2>
                <div className="gallery__items">
                    {
                        galleryList.map((item, index) => {
                            return (
                                <GalleryItem
                                    key={ index}
                                    image={item.image}
                                    name={item.name}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;
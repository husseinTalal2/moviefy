import React from "react";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const MyCarousel = ({ imgs }) => {
    console.log(imgs);
    return imgs.length !== 0 ? (
        <Carousel
            autoplay
            itemWidth= "100%"
            plugins={[
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                   numberOfSlides: 2,
                  }
                },
                {
                    resolve: autoplayPlugin,
                    options: {
                      interval: 2000,
                    }
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 1
                     }
                   },
                 ]
                },
                900: {
                  plugins: [
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 2
                     }
                   },
                 ]
                }
              }}
        >
            {imgs !== undefined
                ? imgs.map((img) => (
                      <img
                          src={`https://image.tmdb.org/t/p/w400${img.file_path}`}
                          alt="movie imgs"
                      />
                  ))
                : ""}
        </Carousel>
    ) : (
        ""
    );
};

export default MyCarousel;

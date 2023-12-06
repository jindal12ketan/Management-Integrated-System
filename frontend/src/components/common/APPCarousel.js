import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const APPCarousel = ({ children }) => (
  <Box
    sx={{
      "& .carousel-slider": {
        "& .dot": {
          background: "#DADEE6",
          opacity: 1,
          boxShadow: "none",
        },

        "& .dot.selected": {
          background: "#2D3C59",
        },
      },
      "& .carousel .slide img": {
        width: "auto",
      },
    }}
  >
    <Carousel showStatus={false} showThumbs={false} stopOnHover emulateTouch interval={5000} autoPlay infiniteLoop>
      {children}
    </Carousel>
  </Box>
);

APPCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default APPCarousel;

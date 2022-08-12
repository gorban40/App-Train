import { useState, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import './app.css';


function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return { autoplay: !state.autoplay };
        case 'slow':
            return { autoplay: 300 }
        case 'fast':
            return { autoplay: 700 }
        case 'custom': 
            return {autoplay: action.playload}
        default:
            throw new Error();
    }
}

const Slider = () => {
    const [slide, setSlide] = useState(0);
    //const [autoplay, setAutoplay] = useState(false);
    const [autoplay, dispatch] = useReducer(reducer, false);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br />{autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'toggle' })}>toggle autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'slow' })}>slow autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'fast' })}>fast autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={(e) => dispatch({ type: 'custom', playload: 500 })}>fast autoplay</button>
                </div>
            </div>
        </Container>
    )
}

function Carousel() {
    return (
        <Slider />
    );
}

export default Carousel;
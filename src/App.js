import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ImageCard from './Image Card/ImageCard';
import { CardColumns, InputGroup, FormControl, Button } from 'react-bootstrap';

function App(props) {
  useEffect(() => {
    getImages()
  }, [])

  useEffect(() => {
    setImageList(props.imagesData);
  }, [props.imagesData])

  // const [searchText, setSearchText] = useState('');
  const [imageList, setImageList] = useState([]);

  const getImages = async () => {
    const list = []
    for (var i = 0; i < 8; i++) {
      const response = await fetch('https://random.dog/woof.json');
      const responseJson = await response.json();
      const extention = responseJson.url.substring(responseJson.url.length - 3, responseJson.url.length);
      if (extention === "jpg" || extention === "png" || extention === "gif" || extention === "mp4") {
        list.push({imgUrl: responseJson.url});
      } else {
        i--;
      }
    }
    props.updateImages(list);
  }

  const imageCards = imageList.map(element => {
    return <ImageCard
      imgUrl={element.imgUrl}></ImageCard>
  })

  const updateImages = () =>
    setImageList(props.imagesData)

  return (
    <div className="App">
      <Header></Header>
      <div className="main-container">
        <CardColumns>
          {imageCards}
        </CardColumns>

        <Button variant="success" onClick={() => getImages()}>Refresh</Button>

      </div>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    imagesData: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateImages: (payload) => {
      return dispatch({ type: 'UPDATE_IMAGES', images: payload });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

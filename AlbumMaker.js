import React from 'react';
import PhotoEntry from './Photos';
import './App.css';

class AlbumMaker extends React.Component {

    render () {

        return (

            <div className="container" >
                <div className="item"><PhotoEntry src="cubes.jpg" caption="2019 - Painting in the basement" activity="Fun with neon cubes." /></div>
                <div className="item"><PhotoEntry src="dragonsnest.jpg" caption="Dragon's Nest painting" activity="First experiment with paint markers" /></div>
                <div className="item"><PhotoEntry src="elementalgoddess.jpg" caption="Elemental Goddess" activity="All the change works together." /></div>
                <div className="item"><PhotoEntry src="ripapart.jpg" caption="Anger and struggles." activity="Humanity is nigh." /></div>
                <div className="item"><PhotoEntry src="statickenesis.jpg" caption="Really awesome psychedelic painting" activity="Geometry and abstract." /></div>
                <div className="item"><PhotoEntry src="temetnosce.jpg" caption="Temet Nosce" activity="Know Yourself." /></div>
            </div>
        )
    }
}


export default AlbumMaker;
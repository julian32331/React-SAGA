import React from 'react';
import ReactCardFlip from 'react-card-flip';
// import FlipCard from 'react-flipcard';
import home4 from './../assets/img/home-4.png';
import home5 from './../assets/img/home-5.png';
import home6 from './../assets/img/home-6.png';

export default class Card extends React.Component {
    getInitialState() {
        return {
            isFlipped: false
        };
    }

    showBack() {
        this.setState({
            isFlipped: true
        });
    }

    showFront() {
        this.setState({
            isFlipped: false
        });
    }

    handleOnFlip(flipped) {
        if (flipped) {
            this.refs.backButton.getDOMNode().focus();
        }
    }

    handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
            this.showFront();
        }
    }
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    frontCard(e){
        if(e == 1){
            return (
                <img src={home4} className="w-100 h-1" alt=""/>
            );
        }
        if(e == 2){
            return (
                <img src={home5} className="w-100 h-2" alt=""/>
            );
        }
        if(e == 3){
            return (
                <img src={home6} className="w-100 h-1" alt=""/>
            );
        }
    }
    backCard(e){
        if(e == 1){
            return (
                  <div className="img-description">
                      <div className="desc-head">Lorem Ipsum</div>
                      <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras
                          elementum eget justo et tristique.
                      </div>
                  </div>
            );
        }
        if(e == 2){
            return (
                <div className="img-description">
                    <div className="desc-head">Lorem Ipsum</div>
                    <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                </div>
            );
        }
        if(e == 3){
            return (
                <div className="img-description">
                    <div className="desc-head">Lorem Ipsum</div>
                    <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                </div>
            );
        }
    }
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div key="front" onClick={this.handleClick}>
                    {this.frontCard(this.props.kind)}
                </div>

                <div key="back" onClick={this.handleClick}>
                    {this.backCard(this.props.kind)}
                </div>
            </ReactCardFlip>
        )
    }
}
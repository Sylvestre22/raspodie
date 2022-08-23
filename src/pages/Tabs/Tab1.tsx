import './Tab1.css';
import '../../theme/global.css';

import axios from "axios";
import React, { useState } from 'react';
import { ILabel } from '../../models/Label';
import { IArtist } from '../../models/Artist';

import { play, caretDownOutline } from 'ionicons/icons';
import { useIonViewWillEnter, IonContent, IonPage, IonIcon, IonAvatar, IonButton, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

const Tab1: React.FC = () => {

  const [ label, setLabel] = useState< ILabel | undefined>(undefined);
  const [ artists, setArtists] = useState< IArtist[] | undefined>(undefined);

  useIonViewWillEnter(() => {
    axios.get(`assets/data/profil.json`).then((response: any)=>{
      setLabel(response.data)
    })
    axios.get(`assets/data/artists.json`).then((response: any)=>{
      setArtists(response.data)
    })
  });

  const currencyFormat = (num: string|number) => {
    return '$ ' + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const sliderConfig = {
    slidesPerView: 1.12,
    spaceBetween: 0,
  };

  return (
    <IonPage>
      {label && (
        <IonContent className="content-home">
          <IonGrid className="grid-featured cover">
            <IonRow>
              <IonCol size="12">
                <p className="ion-text-end rang"># {label.league.rang}</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">
                <img src={label.img} alt="avatar label user" className="round-image" />
              </IonCol>
              <IonCol size="8" className="profil-label">
                <p className="ion-text-end">{label?.name}</p>
                <p className="ion-text-end no-marge">{ currencyFormat(label.funds) }</p>
                <IonGrid className="grid-featured">
                  <IonRow className="row-avatar">
                    {label.membres.map((membre, index) => {
                      return (
                        <IonCol size="1" key={index}>
                          <IonAvatar>
                            <img src={membre.avatar} alt='avatar' />
                          </IonAvatar>
                        </IonCol>
                      )
                    })}
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="12">
                <p className="ion-text-center no-marge league"><IonIcon icon={caretDownOutline}></IonIcon>{label.league.name}<IonIcon icon={caretDownOutline}></IonIcon></p>
              </IonCol>
            </IonRow>
          </IonGrid>
          <h2>Nos artistes</h2>
          {/* <!-- for products slider --> */}
          {artists && (
            <IonSlides options={sliderConfig} className="slides-featured">
              {
                artists.map((item, index) => (
                  <IonSlide key={index}>
                    <IonGrid className="grid-featured">
                      <IonRow>
                        <IonCol size="9">
                          <IonRow>
                            <IonCol offset="1" size="4">
                              <div className={item.ratingLastWeek < item.rating ? 'new' : 'sale'}>
                                { item.rating < 0 ? 'Out' : '#'+item.rating }
                              </div>
                            </IonCol>
                            <IonCol size="4">
                              <div className={item.income > 1000000 ? 'new' : 'sale'}>
                                { item.income > 1000000 ? 'High' : 'Low' }
                              </div>
                            </IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol size="12">
                              <h3>{item.name}</h3>
                            </IonCol>
                          </IonRow>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12">
                          <p className="para-price">Income of the week</p>
                          <p className="para-price">{ currencyFormat(item.incomeOfWeek) }</p>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonImg className="swipe-slider-img animated fadeInRight" src={item.image}>
                    </IonImg>
                  </IonSlide>
                ))
              }
              {/* <IonSlide></IonSlide> */}
              <IonSlide className="slide-btn">
                <IonButton className="shop-btn" fill="clear">
                  Voir plus
                      <IonIcon icon={play}></IonIcon>
                </IonButton>
              </IonSlide>
            </IonSlides>
          )}
        </IonContent >
      )}
    </IonPage >
  );
};

export default Tab1;

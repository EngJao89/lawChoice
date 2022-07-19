import { 
  IonContent, 
  IonPage, 
  IonImg, 
  IonList, 
  IonItem, 
  IonItemGroup, 
  IonLabel 
} from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader />
      <IonContent>
        <IonList>
          <IonItemGroup>
            <IonItem button routerLink="/about">
              <IonImg src="assets/images/lawyer.jpeg" />
            </IonItem>
            <IonItem button routerLink="/about">
              <IonLabel class="ion-text-center">
                Lawyer
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/contact">
              <IonImg src="assets/images/contact.png"/>
            </IonItem>
            <IonItem button routerLink="/contact">
              <IonLabel class="ion-text-center">
                Blog
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/about">
                <IonImg src="assets/images/faq.jpeg"/>
              </IonItem>
              <IonItem button routerLink="/about">
                <IonLabel class="ion-text-center">
                  FAQ
                </IonLabel>
              </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

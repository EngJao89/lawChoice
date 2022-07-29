import { 
  IonContent, 
  IonPage, 
  IonImg, 
  IonGrid, 
  IonRow, 
  IonCol
} from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';
import './Home.css';
//import {Plugins} from '@capacitor/core';
const Home: React.FC = () => {

  /*const {Geolocation} = Plugins;
  const coordinates = Geolocation.getCurrentPosition();
  useIonViewDidEnter(() => {
    console.log('Location', coordinates);
  });
  */
  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed={true}>
          <MyHeader />    

          <IonRow class="ion-align-items-center">
            <IonCol size="6">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonCol>
            <IonCol size="3">
              <IonRow >
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe nihil nisi 
                quod possit ipsum.Negat esse eam, inquit, propter se expetendam. Idcirco 
                enim non desideraret, quia,quod dolore caret, id in voluptate est. Cuius 
                similitudine perspecta in`
              </IonRow>
              <IonRow>
                <IonImg src="assets/images/blog.jpg" />
              </IonRow>  
            </IonCol>

            <IonCol size="3">
              <IonRow >
                <IonImg src="assets/images/faq.jpg" />
              </IonRow>
              <IonRow>
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe nihil nisi 
                quod possit ipsum.Negat esse eam, inquit, propter se expetendam. Idcirco 
                enim non desideraret, quia,quod dolore caret, id in voluptate est. Cuius 
                similitudine perspecta in`
              </IonRow>
            </IonCol>  
          </IonRow>

          <IonRow>
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe nihil nisi quod possit ipsum. 
            Negat esse eam, inquit, propter se expetendam. Idcirco enim non desideraret, quia,quod dolore 
            caret, id in voluptate est. Cuius similitudine perspecta in Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Certe nihil nisi quod possit ipsum.Negat esse eam, inquit, propter se expetendam. 
            Idcirco enim non desideraret, quia,quod dolore caret, id in voluptate est. Cuius similitudine 
            perspecta in`  
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonImg src="assets/images/sample-banner.png" />
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

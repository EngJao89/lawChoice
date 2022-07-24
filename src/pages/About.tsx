import { 
  IonContent, 
  IonHeader, 
  IonButtons, 
  IonPage, 
  IonBackButton, 
  IonTitle,
  IonToolbar, 
  IonImg, 
  IonFooter
} from '@ionic/react';
import React from 'react';

const About: React.FC = () => {
  return(
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
            <IonTitle class="ion-text-center">About Us</IonTitle>
        </IonToolbar>   
      </IonHeader>
      <IonImg src="assets/images/city.jpg" />
      <IonContent class="ion-padding">
        <h1>We Create Dreams</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis enim est, qui non videat 
          haec esse in natura rerum tria? At multis se probavit. Duo Reges: constructio interrete. 
          De hominibus dici non necesse est. Sit enim idem caecus, debilis. Parvi enim primo ortu 
          sic iacent, tamquam omnino sine animo sint. Sed tamen est aliquid, quod nobis non liceat, 
          liceat illis. Idemne, quod iucunde?
        </p>

        <p>
          Duarum enim vitarum nobis erunt instituta capienda. Iam in altera philosophiae parte. Ut 
          proverbia non nulla veriora sint quam vestra dogmata. Neque enim civitas in seditione beata
          esse potest nec in discordia dominorum domus.
        </p>

      </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
            <IonTitle class="ion-text-center" size="small">
              1313 Mockingbird Lane
            </IonTitle>
          </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default About;
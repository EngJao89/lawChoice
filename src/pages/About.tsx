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
} from "@ionic/react";
import React from "react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle class="ion-text-center">About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src="assets/images/city.jpg" />
      <IonContent class="ion-padding">
        <h1>We Create Dreams</h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus urna vitae egestas auctor. 
        Curabitur lorem nibh, suscipit sit amet sollicitudin ut, ornare nec purus. Duis vitae sapien eget urna suscipit iaculis. 
        Nam sollicitudin vehicula lectus in bibendum. 
        Pellentesque eu tortor nec sapien feugiat lacinia et vitae orci. Etiam ultricies, sem et commodo placerat, ligula lacus faucibus arcu, et vehicula arcu sem id ex. 
        Etiam sed varius mauris
        </p>

        <p>
        Morbi elit mauris, tempus id elementum et, auctor eleifend velit. Praesent elit felis, eleifend id tincidunt vitae, vehicula sit amet mi. 
        Ut tempor dui elit, et fringilla quam efficitur non. In fringilla, ex in eleifend faucibus, quam dui rutrum nibh, at commodo augue odio id diam. 
        Vestibulum et dapibus ante, id placerat justo. Mauris in est in dolor suscipit eleifend sit amet at tellus. 
        Duis tincidunt sodales ante et venenatis. Nam gravida luctus orci eget ultrices.
        </p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle class="ion-text-center">Created By Dream-Makers</IonTitle>
          <IonTitle class="ion-text-center" size="small">
            1313 MockingBird Lane
          </IonTitle>

        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default About;
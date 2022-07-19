import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonTitle, 
  IonContent, 
  IonInput, 
  IonTextarea, 
  IonFooter, 
  IonItem, 
  IonList, 
  IonItemDivider,
  IonAlert, 
  IonLabel 
} from '@ionic/react';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [messageAlert, showMessageAlert] = useState<boolean>(false);
  let history = useHistory();

  const sendMessage = () => {
    if ( !name || !email || !message) {
      showMessageAlert(true);
    } else {
      console.log(name, email, message);
      history.push('/home');
    };
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAlert 
          isOpen={messageAlert}
          onDidDismiss={() => showMessageAlert(false)}
          header={'Can not on that'}
          subHeader={'A little problem'}
          message={'Name, Email, ou Message cannot be empty'}
          buttons={['OK']}
        />
        <IonList>
          <IonItem>
            <IonInput
              value={name}  
              placeholder="Name" 
              onIonChange={e => setName(e.detail.value!)}
            >
            </IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem>
            <IonInput
              value={email}  
              placeholder="email" 
              onIonChange={e => setEmail(e.detail.value!)}
            >
            </IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem button onClick={e=> {sendMessage()}}>
            <IonLabel class="ion-text-center">
              Send Message
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle class="ion-text-center">Created By Dream-Makers</IonTitle>
          <IonTitle class="ion-text-center" size="small">1313 MockingBird Lane</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Contact;
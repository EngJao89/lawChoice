import { IonHeader, IonTitle, IonImg, IonToolbar, IonButtons, IonButton } from "@ionic/react";
import React from "react";
import './MyHeader.css';

const MyHeader: React.FC = () => {
  return (
    <IonHeader class="ion-no-border">
      <IonToolbar class="toolbarStyle">
        <IonButtons slot="start">
          <IonButton routerLink="/about">About</IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>Contact</IonButton>
        </IonButtons>
        <IonImg src="assets/images/logo.jpg" class="logoImg" />
        <IonTitle class="title">Law Choice</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default MyHeader;
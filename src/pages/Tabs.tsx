import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';

const Tabs: React.FC = () => (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tab1">
                    <Tab1 />
                </Route>
                <Route exact path="/tab2">
                    <Tab2 />
                </Route>
                <Route path="/tab3">
                    <Tab3 />
                </Route>
                <Route path="/tab4">
                    <Tab4 />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab1" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonLabel>Label</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonLabel>Signature</IonLabel>
                </IonTabButton>
                <IonTabButton>
                    <IonIcon  className="col-radio-outline-filled" name="radio-outline"></IonIcon>
                    <IonLabel>Info</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonLabel>Chémar</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tab4">
                    <IonLabel>Artist</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
);

export default Tabs;
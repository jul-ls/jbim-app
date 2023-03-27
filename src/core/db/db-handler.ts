import { getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { Events } from '../../middleware/event-handler';
import { Building } from '../../types';

export const databaseHandler = {
  login: () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  },

  logout: () => {
    const auth = getAuth();
    signOut(auth);
  },

  deleteBuilding: async (building: Building, events: Events) => {
    const id = building.uid;
    const dbInstance = getFirestore(getApp());
    await deleteDoc(doc(dbInstance, 'buildings', building.uid));
    events.trigger({ type: 'KILL_BUILDING' });
  },

  updateBuilding: async (building: Building) => {
    const dbInstance = getFirestore(getApp());
    await updateDoc(doc(dbInstance, 'buildings', building.uid), {
      ...building,
    });
  },
};

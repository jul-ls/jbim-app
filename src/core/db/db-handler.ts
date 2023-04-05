import { getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { Events } from '../../middleware/event-handler';
import { Building, Model } from '../../types';
import { deleteObject, getStorage, ref, uploadBytes } from 'firebase/storage';

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
    const app = getApp();
    const dbInstance = getFirestore();
    await deleteDoc(doc(dbInstance, 'buildings', building.uid));
    const storageInstance = getStorage(app);
    for (const model of building.models) {
      const fileRef = ref(storageInstance, model.id);
      await deleteObject(fileRef);
    }
    events.trigger({ type: 'KILL_BUILDING' });
  },

  updateBuilding: async (building: Building) => {
    const dbInstance = getFirestore(getApp());
    await updateDoc(doc(dbInstance, 'buildings', building.uid), {
      ...building,
    });
  },

  uploadModel: async (
    model: Model,
    file: File,
    building: Building,
    events: Events
  ) => {
    const appInstance = getApp();
    const storageInstance = getStorage(appInstance);
    const fileRef = ref(storageInstance, model.id);
    await uploadBytes(fileRef, file);
    events.trigger({ type: 'UPDATE_BUILDING', payload: building });
  },

  deleteModel: async (model: Model, building: Building, events: Events) => {
    const appInstance = getApp();
    const storageInstance = getStorage(appInstance);
    const fileRef = ref(storageInstance, model.id);
    await deleteObject(fileRef);
    events.trigger({ type: 'UPDATE_BUILDING', payload: building });
  },
};

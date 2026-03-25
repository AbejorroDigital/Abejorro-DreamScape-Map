/**
 * @fileoverview Configuración e inicialización de los servicios de Firebase.
 * Exporta las instancias de la base de datos (Firestore) y autenticación (Auth).
 */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

/**
 * Configuración combinada de Firebase que utiliza la clave API desde las variables de entorno
 * por razones de seguridad, o recurre a la configuración del archivo local.
 */
const config = {
  ...firebaseConfig,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey
};

// Inicialización del SDK de Firebase
const app = initializeApp(config);

/** Instancia de la base de datos Firestore */
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

/** Instancia del servicio de Autenticación de Firebase */
export const auth = getAuth(app);

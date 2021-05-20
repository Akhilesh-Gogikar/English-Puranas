import { config } from "../config";
import firebase from 'firebase';

firebase.initializeApp(config);

const database = firebase.database();

export default database;

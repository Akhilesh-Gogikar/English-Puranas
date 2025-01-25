import { config } from "../config";
import firebase from 'firebase/compat/app';
import "firebase/compat/database";

firebase.initializeApp(config);

const database = firebase.database();

export default database;

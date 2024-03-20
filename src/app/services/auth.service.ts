import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  public async createUser(userData: Partial<{
    name: string | null;
    email: string | null;
    age: string | null;
    password: string | null;
    confirmPassword: string | null;
    phoneNumber: string | null;
  }>) {
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string
    )

    // if the collection is not found.. this function will create it for us.. it will return methods and properties to deal with this collection
    await this.db.collection('users').add({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    });
  }
}

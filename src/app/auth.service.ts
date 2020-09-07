import { logging, promise } from "protractor";

export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
                (resolve, reject) => {
                    setTimeout(() => {
                        resolve(this.loggedIn);
                    }, 800);
                }
        );
        return promise;
    }

    login(username: string, password: string){
      if(username === 'Akash' && password === 'Gupta'){
        this.loggedIn = true;
      }
    }

    logout(){
        this.loggedIn = false;
    }
}
/* 
    before we create the service file we need to create an interface class in which we’ll define the data type of our bug tracking demo app.
*/

export class Bug {
    id!: string;
    issue_name!: string;
    issue_message!: string;
 }
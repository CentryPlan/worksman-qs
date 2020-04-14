import { BasicModel, Model, ObjectModel } from "objectmodel";
Model.prototype.conventionForPrivate = key => key.startsWith('#');

const Location = ObjectModel({
    lat_x: [Number],
    lat_y: [Number]
});

const Address =  ObjectModel({
    lot: String,
    street: String,
    town: String,
    city_parish: String,
    location: [Address]
})

export class Project extends Model({
        // default attributes that defines the "empty" state.
            _id: String,
            name: String,
            address: Address,
            
        


}){} // project-model end

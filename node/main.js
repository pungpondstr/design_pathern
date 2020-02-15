class name_factory{
    constructor(props){
        this.name = props.name
    }
}

class age_factory{
    constructor(props){
        this.age = props.age
    }
}

class weight_factory{
    constructor(props){
        this.weight = props.weight
    }
}

class human_factory{
    constructor(type, props){
        if (type === 'name'){
            return new name_factory(props);
        }else if (type === 'age'){
            return new age_factory(props);
        }else if (type === 'weight'){
            return new weight_factory(props);
        }
    }
}

let pond = {};
let pond_data = {
    name: 'pond',
    age: 20,
    weight: 60
}

let james = {};
let james_data = {
    name: 'james',
    age: 20,
    weight: 95
}

james.name = new human_factory('name', james_data);
james.age = new human_factory('age', james_data);
james.weight = new human_factory('weight', james_data);

pond.name = new human_factory('name', pond_data);
pond.age = new human_factory('age', pond_data);
pond.weight = new human_factory('weight', pond_data);

console.log(james)
console.log(pond)


//Obj = new main('james');
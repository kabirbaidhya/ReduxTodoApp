import Q from 'q';

let autoId = 1;

class Todo {

    create(text) {
        var d = Q.defer();

        var test = Math.floor(Math.random() * 10) % 3;
        var period = (test + .5) * 200;

        setTimeout(() => {
            if (test === 0) {
                d.reject('Aww snap! An error occured');
            } else {
                d.resolve({id: autoId++, text});
            }
        }, period);

        return d.promise;
    }
}

export default new Todo();

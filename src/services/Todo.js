import Q from 'q';

class Todo {

    create(text) {
        var d = Q.defer();

        var test = Math.floor(Math.random() * 10) % 3;
        var period = (test + .5) * 1000;

        setTimeout(() => {
            if (test === 0) {
                d.reject('Aww snap! An error occured');
            } else {
                d.resolve(text + ' - anync');
            }
        }, period);

        return d.promise;
    }
}

export default new Todo();

const generateTestData = (function() {
    const ExampleItem = function (nameInp, phone, email, type) {
        this.nameInp = nameInp;
        this.phone = phone;
        this.email = email;
        this.type = type;
    };
    
    const testData = [
        new ExampleItem('Arnold Schwarzenegger', parseInt('772551797'), 'Schwarzenegger@seznam.cz', 'HTML Course'),
        new ExampleItem('Pamela Anderson', parseInt('772551797'), 'Anderson@seznam.cz', 'JavaScript Course'),
        new ExampleItem('Chuck Norris', parseInt('776555787'), 'Norris@seznam.cz', 'VUE JS Course'),
        new ExampleItem('Dolph Lundgren', parseInt('772557757'), 'Lundgren@seznam.cz', 'PHP Course'),
        new ExampleItem('Samantha Fox', parseInt('777554717'), 'Fox@seznam.cz', 'WordPress Course'),
        new ExampleItem('Britney Spears', parseInt('770552577'), 'Spears@seznam.cz', 'WordPress Course'),
        new ExampleItem('Mel Gibson', parseInt('773555727'), 'Gibson@seznam.cz', 'JavaScript Course'),
        new ExampleItem('Dedrick Gray', parseInt('779554747'), 'Gray@seznam.cz', 'VUE JS Course'),
    ];
    
    function getRandomData(max) {
        return Math.floor(Math.random() * max)
    }
    
    function insertInUi() {
        const random = getRandomData(testData.length)
        const randomItem = testData[random]
    
        document.querySelector('#input__name').value = randomItem.nameInp;
        document.querySelector('#input__phone').value = randomItem.phone
        document.querySelector('#input__email').value = randomItem.email
        document.querySelector('#index-select').value = randomItem.type
    }
    
    return {
        init: function() {
            insertInUi()
        }
    }
})()

// generateTestData.init()
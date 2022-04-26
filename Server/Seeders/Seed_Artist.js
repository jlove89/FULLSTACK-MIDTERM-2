const Artist = require('./models')

Artist.create([{
    id: '1',
    name: 'Kyle Partin',
    Moniker: 'Cut Rugs',
    art_type: 'Electronic',
    genre: 'Exp. Bass',
    phone: '888-888-8888',
    email: 'boy@gmail.com',
    agency: 'The Undergrowth',
    links: "pewpew"
}, {
    id: '2',
    name: 'Donkey Doug',
    Moniker: 'June Bugs',
    art_type: 'Tectronic',
    genre: 'Exp. Oboes',
    phone: '888-878-8888',
    email: 'boyoboy@gmail.com',
    agency: 'The Undercarriage',
    links: "pewdipew"
}, {
    
    id: '3',
    name: 'Twi',
    Moniker: 'Bugsy',
    art_type: 'Tecno',
    genre: 'Super Oboes',
    phone: '888-868-8888',
    email: 'girl@gmail.com',
    agency: 'The Overcarriage',
    links: "placeholder"
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
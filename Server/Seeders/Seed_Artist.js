const db = require('./models')

db.Artist.create([{
    name: 'Kyle Partin',
    Moniker: 'Cut Rugs',
    art_type: 'Electronic',
    genre: 'Exp. Bass',
    phone: '888-888-8888',
    email: 'boy@gmail.com',
    agency: 'The Undergrowth',
    links: "pewpew"
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

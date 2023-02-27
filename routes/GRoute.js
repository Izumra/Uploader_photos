import home from './homePage.js'
import user from './userPage.js'

function allRoutes(app){
    app.use('/',home)
    app.use('/userPage',user)
}
export default allRoutes
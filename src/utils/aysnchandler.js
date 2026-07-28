
const asynchandler = (requestHandler) =>{
    (req , res, next ) =>{

        Promise.resolve(requestHandler(req , res , next)).
        catch((err) => next(err))
    }
}

// const asynchandler = () => {}
// const asynchandler = () => () => {}
// const asynchandler = () => async() =>{}

// const asynchandler = (fn) => async(req , res , next) => {
//          try {
//              await (req ,res , next)
//          } catch (error) {
//               res.status(err.code || 500).json({
//                 success: false,
//                 message : err.message
//               })
//          }
// }

export {asynchandler}
const scheduleController = {}
const Schedule = require('../models/Schedule'); 

    //Get all schedules
    scheduleController.getAllSchedules= async(req, res) => {
        var today=new Date();
        const schedules = await Schedule.aggregate([ //filtrando las vigentes
            {$match:{ "fecha":{$gt: today} }},
            {"$project": {
                "_id": {
                    "$toString": "$_id"
                  },
                      "_id": 1,
                      "tipo":1,
                      "fecha": {
                         "$dateToString": {
                            "format": "%Y-%m-%d",
                            "date": "$fecha"
                         }
                      },
                      "hour": {
                        "$dateToString": {
                           "format": "%H:%M",
                           "date": "$hour"
                        }
                     },
                     "requester":1//, "solicitante.firstName":1
                     //requester:"solicitante.firstName":1
                   }
                },
                //{ "$addFields": { "requester": { "$toString": "$_id" }}},
                { $lookup:{
                    "let": { "requesterObjId": { "$toObjectId": "$requester" } },
                    from: "customers",
                    //localField: "requester",
                    //foreignField:"requester",
                    //"let": { "requester": "$_id" },
                    "pipeline": [
                        { "$match": { "$expr": { "$eq": [ "$_id", "$$requesterObjId" ] } } }
                      ],
                    as: "solicitante"
                  }
                }
             ]).sort( { "fecha": 1 } )
        res.json(schedules)
        console.log("All schedule retrieved")
    }
    scheduleController.getAllPastSchedules= async(req, res) => {
        var today=new Date();
        const schedules = await Schedule.aggregate([ //filtrando las vigentes
            {$match:{ "fecha":{$lt: today}, }},             
                {"$project": {
                      "_id": 1,
                      "tipo":1,
                      "fecha": {
                         "$dateToString": {
                            "format": "%Y-%m-%d",
                            "date": "$fecha"
                         }
                      },
                      "hour": {
                        "$dateToString": {
                           "format": "%H:%M",
                           "date": "$hour"
                        }
                     },
                     "requester":1
                   }
                },
                { $lookup:    {
       from: "customer",
       localField: "requester",
       foreignField:"_id",
       as: "firstName"
     }
                }
             ]).sort( { "fecha": 1 } )
        res.json(schedules)
        console.log("All schedule retrieved")
    }

    //Add a new Schedule
    scheduleController.createSchedule = async(req, res) => {
        const newSchedule= new Schedule(req.body) 
        console.log(newSchedule)
        await newSchedule.save() 
        res.send({ message: "New schedule created" })
    }

    //Get just one Schedule
    scheduleController.getSchedule = async(req, res) => {
        console.log(req.params)
        const result = await Schedule.findOne({ _id: req.params.id }) 
        res.send(result) 
    }

    //Update (edit) a Schedule
    scheduleController.editSchedule = async(req, res) => {
        console.log(req.params)
    await Schedule.findByIdAndUpdate(req.params.id, req.body); 
    res.json({ status: "Schedule updated" })
    }

    //Delete Schedule by Id
    scheduleController.deleteSchedule = async(req, res) => {
        await Schedule.findByIdAndDelete(req.params.id)
        res.json({ status: "Schedule Deleted" })
    }

module.exports = scheduleController;
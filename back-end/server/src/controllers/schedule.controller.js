const scheduleController = {}
const Schedule = require('../models/Schedule'); 

    //Get all schedules
    scheduleController.getAllSchedules= async(req, res) => {
        const schedules = await Schedule.aggregate([                
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
                     },"requester":1
                   }
                }
             ])
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
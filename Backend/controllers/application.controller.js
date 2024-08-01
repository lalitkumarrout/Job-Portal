import { application, response } from "express";
import { Job } from "../models/job.model";

export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobid = req.params.id;
    if (!jobid) {
      return res.status(400).json({
        meassage: "JOb id is required",
        success: false,
      });
    }
    //check if the user has already applied for the job

    const existingapplication = await application.findone({
      job: jobid,
      applicant: userId,
    });

    if (existingapplication) {
      return res.status(400).json({
        message: "you have already applied for this job",
        success: false,
      });
    }

    //check if the jobs exists
    const job = await Job.findById(jobid);
    if (!job) {
      return response.status(400).json({
        message: "job not found",
        success: false,
      });
    }

    //create a new application
    
    
  } catch (error) {}
};

import { OK } from "http-status/lib";
import { UserTaskServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";
import { number } from "zod";

export class UserTaskController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getUserTasks = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.getUserTasks();

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static getUserTask = async (req: Req, res: Res, next: NextFn) => {
    //with task id
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.getUserTask(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static getUserTasksByUserId = async (req: Req, res: Res, next: NextFn) => {
    //maybe rename it to getUserTasksForUser
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.getUserTasksByUserId(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static getUserTasksByNameForUser = async (
    req: Req,
    res: Res,
    next: NextFn,
  ) => {
    try {
      const userTaskServices = new UserTaskServices();
      const userTasks = await userTaskServices.getUserTasksByUserId(
        req.params.id,
      );
      const userTasksFilteredByName = userTasks?.filter((userTask) =>
        userTask.name.includes(req.params.taskName),
      );
      res.status(OK).json(apiResponse(userTasksFilteredByName));
    } catch (error) {
      next(error);
    }
  };

  static getUserTasksByDescriptionForUser = async (
    req: Req,
    res: Res,
    next: NextFn,
  ) => {
    // this one gets by keyword in description
    try {
      const userTaskServices = new UserTaskServices();
      const userTasks = await userTaskServices.getUserTasksByUserId(
        req.params.id,
      );
      const userTasksFilteredByDescription = userTasks?.filter((userTask) =>
        userTask.description.includes(req.params.description),
      );
      res.status(OK).json(apiResponse(userTasksFilteredByDescription));
    } catch (error) {
      next(error);
    }
  };

  static getDailyProgress = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const userTasks = await userTaskServices.getUserTasksByUserId(
        req.params.id,
      );
      const numberOfTasks = userTasks?.length;
      const numberOfCompletedTasks = userTasks?.filter(
        (userTask) => userTask.completed == true,
      ).length;
      const dailyProgress =
        Number(numberOfCompletedTasks) / Number(numberOfTasks);
      res.status(OK).json(apiResponse(dailyProgress));
    } catch (error) {
      next(error);
    }
  };

  static createUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.createUserTask(req.body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static deleteUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.deleteUserTask(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };

  static updateUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const body = req.body;
      const userTaskServices = new UserTaskServices();
      console.log("CONTEROLLER HERE");
      const result = await userTaskServices.updateUserTask(req.params.id, body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  };

  static completeUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskId = req.params.id;
      const userTaskServices = new UserTaskServices();
      const userTaskToBeUpdated = await userTaskServices.getUserTask(userTaskId);
      if(userTaskToBeUpdated) 
      {
      userTaskToBeUpdated.completed = !userTaskToBeUpdated?.completed;
      const result = await userTaskServices.updateUserTask(userTaskId, userTaskToBeUpdated);
      res.status(OK).json(apiResponse(result));
      }
    
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  };
}

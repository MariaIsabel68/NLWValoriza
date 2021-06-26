import { Request, Response } from "express"
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService"

class ListUserReceivedComplimentsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService()

        const compliments = await listUserReceivedComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceivedComplimentsController }
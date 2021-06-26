import { Request, Response } from "express"
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";

class ListUserSentComplimentsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserSentComplimentsService = new ListUserSentComplimentsService()

        const compliments = await listUserSentComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSentComplimentsController }
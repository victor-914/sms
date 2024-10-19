import { Session } from "./session.model.js";
export class SessionService {
    async createSession(data) {
        try {
            const newSession = new Session(data);
            newSession.schoolId = data?.user?.schoolId;
            return await newSession.save();
        }
        catch (error) {
            throw error;
        }
    }
    async getAllSessions() {
        return await Session.find();
    }
    async getSessionById(sessionId) {
        return await Session.findById(sessionId);
    }
    async updateSession(sessionId, data) {
        return await Session.findByIdAndUpdate(sessionId, data, { new: true });
    }
    async deleteSession(sessionId) {
        return await Session.findByIdAndDelete(sessionId);
    }
    async toggleSessionStatus(sessionId, isActive) {
        return await Session.findByIdAndUpdate(sessionId, { isActive }, { new: true });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0aWVzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxNQUFNLE9BQU8sY0FBYztJQUN6QixLQUFLLENBQUMsYUFBYSxDQUFDLElBQVM7UUFDM0IsSUFBSSxDQUFDO1lBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUMzQyxPQUFPLE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjO1FBQ2xCLE9BQU8sTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBaUI7UUFDcEMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQ2pCLFNBQWlCLEVBQ2pCLElBQXVCO1FBRXZCLE9BQU8sTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQWlCO1FBQ25DLE9BQU8sTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELEtBQUssQ0FBQyxtQkFBbUIsQ0FDdkIsU0FBaUIsRUFDakIsUUFBaUI7UUFFakIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDcEMsU0FBUyxFQUNULEVBQUUsUUFBUSxFQUFFLEVBQ1osRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQ2QsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9
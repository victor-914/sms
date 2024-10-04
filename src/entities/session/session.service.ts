import { Session, ISession } from "./session.model.js";

export class SessionService {
  async createSession(data: any) {
    try {
      const newSession = new Session(data);
      newSession.schoolId = data?.user?.schoolId;
      return await newSession.save();
    } catch (error) {
      throw error;
    }
  }

  async getAllSessions(): Promise<ISession[]> {
    return await Session.find();
  }

  async getSessionById(sessionId: string): Promise<ISession | null> {
    return await Session.findById(sessionId);
  }

  async updateSession(
    sessionId: string,
    data: Partial<ISession>
  ): Promise<ISession | null> {
    return await Session.findByIdAndUpdate(sessionId, data, { new: true });
  }

  async deleteSession(sessionId: string): Promise<ISession | null> {
    return await Session.findByIdAndDelete(sessionId);
  }

  async toggleSessionStatus(
    sessionId: string,
    isActive: boolean
  ): Promise<ISession | null> {
    return await Session.findByIdAndUpdate(
      sessionId,
      { isActive },
      { new: true }
    );
  }
}

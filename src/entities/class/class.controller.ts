import { Request, Response } from 'express';
import ClassService from './class.service';

class ClassController {
    public async createClass(req: Request, res: Response): Promise<Response> {
        try {
            const classData = req.body;
            const newClass = await ClassService.createClass(classData);
            return res.status(201).json(newClass);
        } catch (error) {
            return res.status(500).json({ error: 'Unable to create class' });
        }
    }

    public async getAllClasses(req: Request, res: Response): Promise<Response> {
        try {
            const classes = await ClassService.getAllClasses();
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json({ error: 'Unable to fetch classes' });
        }
    }

    public async getClassById(req: Request, res: Response): Promise<Response> {
        try {
            const classId = req.params.id;
            const foundClass = await ClassService.getClassById(classId);
            if (!foundClass) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(foundClass);
        } catch (error) {
            return res.status(500).json({ error: 'Unable to fetch class' });
        }
    }

    public async updateClass(req: Request, res: Response): Promise<Response> {
        try {
            const classId = req.params.id;
            const updateData = req.body;
            const updatedClass = await ClassService.updateClass(classId, updateData);
            if (!updatedClass) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(updatedClass);
        } catch (error) {
            return res.status(500).json({ error: 'Unable to update class' });
        }
    }

    public async deleteClass(req: Request, res: Response): Promise<Response> {
        try {
            const classId = req.params.id;
            const deletedClass = await ClassService.deleteClass(classId);
            if (!deletedClass) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json({ message: 'Class deleted' });
        } catch (error) {
            return res.status(500).json({ error: 'Unable to delete class' });
        }
    }
}

export default new ClassController();

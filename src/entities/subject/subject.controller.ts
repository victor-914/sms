// src/controllers/subjectController.ts
import { Request, Response } from 'express';
import {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
} from './subject.service.js';

export const createSubjectController = async (req: Request, res: Response) => {
  try {
    const subject = await createSubject(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create subject', error });
  }
};

export const getAllSubjectsController = async (req: Request, res: Response) => {
  try {
    const subjects = await getAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve subjects', error });
  }
};

export const getSubjectByIdController = async (req: Request, res: Response) => {
  try {
    const subject = await getSubjectById(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve subject', error });
  }
};

export const updateSubjectController = async (req: Request, res: Response) => {
  try {
    const subject = await updateSubject(req.params.id, req.body);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subject', error });
  }
};

export const deleteSubjectController = async (req: Request, res: Response) => {
  try {
    const subject = await deleteSubject(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subject', error });
  }
};

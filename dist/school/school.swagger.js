"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         role:
 *           type: string
 *     School:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           required: true
 *         url:
 *           type: string
 *         principal:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Person'
 *         teachers:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Person'
 *         staffs:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Person'
 *         parents:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Person'
 *         type:
 *           type: string
 *         motto:
 *           type: string
 *         country:
 *           type: string
 *         state:
 *           type: string
 *         province:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         emailAddress:
 *           type: string
 */
/**
 * @swagger
 * /schools:
 *   get:
 *     summary: Get all schools
 *     responses:
 *       200:
 *         description: A list of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 */
/**
 * @swagger
 * /schools/{id}:
 *   get:
 *     summary: Get a school by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A school object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 */
/**
 * @swagger
 * /schools:
 *   post:
 *     summary: Create a new school
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       201:
 *         description: The created school
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 */
/**
 * @swagger
 * /schools/{id}:
 *   put:
 *     summary: Update a school
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       200:
 *         description: The updated school
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 */
/**
 * @swagger
 * /schools/{id}:
 *   delete:
 *     summary: Delete a school
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLnN3YWdnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2Nob29sL3NjaG9vbC5zd2FnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlERztBQUVIOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUg7Ozs7Ozs7Ozs7Ozs7O0dBY0cifQ==